# 岁邻后端

技术栈：Java 21 + Spring Boot 3.3 + MySQL 8 + Redis + MyBatis-Plus + Sa-Token + Docker。

## 当前已经打通的核心链路

1. 家属注册 / 登录（长辈不注册）。
2. 家属添加长辈资料。
3. 后端生成随机邀请 token。
4. 家属通过微信把邀请发给长辈。
5. 长辈点击邀请并确认一次。
6. 后端把长辈与当前客户端绑定，并签发独立的 `clientToken`。
7. 长辈端用 `clientToken` 获取本人资料与提醒，不使用家属登录 token。
8. 长辈完成提醒会写入 `reminder_records`。
9. 长辈触发 SOS 会写入 `sos_events`。
10. 家属健康页只读取 `health_records`，每条记录都包含数据来源。
11. 设备页只读取 `devices`，不再预置“在线设备”假数据。

## 模块

- `auth`：家属注册、登录、退出。
- `user`：当前家属账号资料。
- `elder`：长辈资料、邀请、一键绑定、长辈端接口。
- `reminder`：提醒创建、查询、长辈完成记录。
- `health`：健康数据与数据来源。
- `device`：长辈设备管理。
- `sos`：紧急求助事件。

## 数据原则

1. 年龄不入库，只保存 `birthday`，接口按当前日期计算年龄。
2. 长辈资料由家属创建；老人端不注册、不维护复杂资料。
3. 邀请链接只携带随机 `inviteToken`，不在 URL 暴露姓名、生日等个人资料。
4. 邀请接受后由服务端签发独立 `bound_client_token`，不能把前端生成的设备 ID 当认证凭证。
5. 健康数据必须有来源：`FAMILY_MANUAL`、`ELDER_MANUAL`、`DEVICE` 或 `HOSPITAL`。
6. 页面不得凭空生成健康状态、年龄、设备在线状态、提醒完成状态等业务数据。

## 启动

```bash
cd server
docker compose up --build
```

服务：`http://localhost:8080`

Swagger：`http://localhost:8080/swagger-ui.html`

微信开发者工具默认前端接口地址：

```text
http://127.0.0.1:8080/api
```

可通过前端本地存储键 `suilin_api_base_url` 覆盖。真机调试时不能使用 `127.0.0.1` 指向电脑，需要改成局域网地址或已部署的 HTTPS 域名。

## 核心接口

- `POST /api/auth/register` 家属注册
- `POST /api/auth/login` 家属登录
- `POST /api/auth/logout` 退出
- `GET /api/me` 当前家属资料
- `PUT /api/me` 修改家属姓名
- `POST /api/elders` 添加长辈，同时生成邀请 token
- `GET /api/elders` 当前家属的长辈列表
- `POST /api/elders/{elderId}/invite` 获取/重新生成有效邀请
- `GET /api/elder-invites/{token}` 长辈打开邀请后的预览
- `POST /api/elder-invites/{token}/accept` 长辈一键接受绑定
- `GET /api/elder-client/profile` 长辈端读取本人资料
- `GET /api/elder-client/reminders` 长辈端读取提醒
- `POST /api/elder-client/reminders/{id}/complete` 长辈完成提醒
- `POST /api/elder-client/sos` 长辈发起紧急求助
- `GET/POST/PUT /api/elders/{elderId}/reminders` 家属提醒管理
- `GET/POST /api/elders/{elderId}/health-records` 健康数据
- `GET/POST /api/elders/{elderId}/devices` 设备管理

## 说明

当前是可运行的 MVP 后端与前端联调骨架。微信 openid、手机号验证码、订阅消息、设备厂商回调、SOS 实时推送、对象存储等需要相应平台凭证后继续接入。
