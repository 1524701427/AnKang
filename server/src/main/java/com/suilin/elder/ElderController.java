package com.suilin.elder;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.suilin.common.ApiResponse;
import com.suilin.elder.entity.Elder;
import com.suilin.elder.entity.ElderInvite;
import com.suilin.elder.mapper.ElderInviteMapper;
import com.suilin.elder.mapper.ElderMapper;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class ElderController {
    private final ElderMapper elderMapper;
    private final ElderInviteMapper inviteMapper;

    public record CreateElderRequest(@NotBlank String name, @NotBlank String relation, @NotNull LocalDate birthday, String phone, List<String> healthTags) {}
    public record BindRequest(@NotBlank String clientId) {}

    @PostMapping("/api/elders")
    @Transactional
    public ApiResponse<?> create(@Valid @RequestBody CreateElderRequest req) {
        long userId = StpUtil.getLoginIdAsLong();
        Elder e = new Elder();
        e.setCreatorUserId(userId); e.setName(req.name().trim()); e.setRelation(req.relation()); e.setBirthday(req.birthday()); e.setPhone(req.phone());
        e.setHealthTagsJson(req.healthTags() == null ? "[]" : "[\"" + String.join("\",\"", req.healthTags()) + "\"]");
        e.setBindStatus("WAITING"); e.setCreatedAt(LocalDateTime.now()); e.setUpdatedAt(LocalDateTime.now());
        elderMapper.insert(e);
        ElderInvite invite = new ElderInvite();
        invite.setElderId(e.getId()); invite.setInviterUserId(userId); invite.setInviteToken(UUID.randomUUID().toString().replace("-", ""));
        invite.setStatus("WAITING"); invite.setExpiresAt(LocalDateTime.now().plusDays(7)); invite.setCreatedAt(LocalDateTime.now());
        inviteMapper.insert(invite);
        return ApiResponse.ok(Map.of("elderId", e.getId(), "inviteToken", invite.getInviteToken(), "bindStatus", e.getBindStatus()));
    }

    @GetMapping("/api/elders")
    public ApiResponse<?> list() {
        long userId = StpUtil.getLoginIdAsLong();
        List<Elder> list = elderMapper.selectList(new LambdaQueryWrapper<Elder>().eq(Elder::getCreatorUserId, userId).orderByDesc(Elder::getCreatedAt));
        return ApiResponse.ok(list.stream().map(e -> Map.of("id", e.getId(), "name", e.getName(), "relation", e.getRelation(), "birthday", e.getBirthday(), "age", Period.between(e.getBirthday(), LocalDate.now()).getYears(), "bindStatus", e.getBindStatus())).toList());
    }

    @GetMapping("/api/elder-invites/{token}")
    public ApiResponse<?> preview(@PathVariable String token) {
        ElderInvite invite = inviteMapper.selectOne(new LambdaQueryWrapper<ElderInvite>().eq(ElderInvite::getInviteToken, token));
        if (invite == null || !"WAITING".equals(invite.getStatus()) || invite.getExpiresAt().isBefore(LocalDateTime.now())) throw new IllegalArgumentException("邀请已失效");
        Elder e = elderMapper.selectById(invite.getElderId());
        return ApiResponse.ok(Map.of("elderId", e.getId(), "name", e.getName(), "relation", e.getRelation(), "expiresAt", invite.getExpiresAt()));
    }

    @PostMapping("/api/elder-invites/{token}/accept")
    @Transactional
    public ApiResponse<?> accept(@PathVariable String token, @Valid @RequestBody BindRequest req) {
        ElderInvite invite = inviteMapper.selectOne(new LambdaQueryWrapper<ElderInvite>().eq(ElderInvite::getInviteToken, token));
        if (invite == null || !"WAITING".equals(invite.getStatus()) || invite.getExpiresAt().isBefore(LocalDateTime.now())) throw new IllegalArgumentException("邀请已失效");
        Elder e = elderMapper.selectById(invite.getElderId());
        e.setBindStatus("BOUND"); e.setBoundClientId(req.clientId()); e.setBoundAt(LocalDateTime.now()); e.setUpdatedAt(LocalDateTime.now()); elderMapper.updateById(e);
        invite.setStatus("ACCEPTED"); invite.setAcceptedAt(LocalDateTime.now()); inviteMapper.updateById(invite);
        return ApiResponse.ok(Map.of("elderId", e.getId(), "bindStatus", e.getBindStatus()));
    }
}
