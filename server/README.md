# 岁邻后端

技术栈：Java 21 + Spring Boot 3.3 + MySQL 8 + Redis + MyBatis-Plus + Sa-Token + Docker。

## 模块

- `auth`：家属注册、登录、退出；长辈不注册。
- `elder`：家属创建长辈资料、生成邀请、长辈点击邀请后绑定。
- `reminder`：家属为已添加长辈创建/维护提醒。
- `health`：健康数据记录，并强制记录 `sourceType` / `sourceRef` 数据来源。
- `device` / `sos`：数据库结构已预留，后续接真实设备和消息推送。

## 数据原则

1. 年龄不入库，只保存 `birthday`，接口按当前日期计算年龄。
2. 长辈资料由家属创建；老人端不注册、不维护复杂资料。
3. 邀请链接仅包含随机 `inviteToken`，不在 URL 暴露姓名、生日等隐私数据。
4. 健康数据必须有来源：`FAMILY_MANUAL`、`ELDER_MANUAL`、`DEVICE` 或 `HOSPITAL`。
5. 页面不能凭空生成健康状态；展示数据应来自业务表或设备/人工记录。

## 启动

```bash
cd server
docker compose up --build
```

服务：`http://localhost:8080`
Swagger：`http://localhost:8080/swagger-ui.html`

## 核心接口

- `POST /api/auth/register` 家属注册
- `POST /api/auth/login` 家属登录
- `POST /api/elders` 添加长辈，同时生成邀请 token
- `GET /api/elders` 当前家属创建的长辈
- `GET /api/elder-invites/{token}` 老人打开邀请后的预览
- `POST /api/elder-invites/{token}/accept` 老人一键接受绑定
- `GET/POST/PUT /api/elders/{elderId}/reminders` 提醒管理
- `GET/POST /api/elders/{elderId}/health-records` 健康数据

> 当前是可落地的 MVP 后端骨架。微信 openid、短信验证码、消息订阅、设备厂商回调、对象存储等需要部署凭证后接入。
