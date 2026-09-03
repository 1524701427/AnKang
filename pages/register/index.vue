<template>
  <view class="page">
    <view class="header">
      <text class="title">创建账号</text>
      <text class="subtitle">注册后即可使用安康家庭养老助手</text>
    </view>

    <view class="card">
      <view class="field">
        <text class="label">手机号</text>
        <input
          v-model="form.phone"
          class="input"
          type="number"
          maxlength="11"
          placeholder="请输入手机号"
        />
      </view>

      <view class="field">
        <text class="label">姓名</text>
        <input
          v-model="form.name"
          class="input"
          maxlength="20"
          placeholder="请输入姓名"
        />
      </view>

      <view class="field">
        <text class="label">密码</text>
        <input
          v-model="form.password"
          class="input"
          type="password"
          maxlength="32"
          placeholder="至少 6 位"
        />
      </view>

      <view class="field">
        <text class="label">确认密码</text>
        <input
          v-model="form.confirmPassword"
          class="input"
          type="password"
          maxlength="32"
          placeholder="请再次输入密码"
        />
      </view>

      <view class="field">
        <text class="label">使用身份</text>
        <view class="roles">
          <view
            class="role"
            :class="{ active: form.role === 'elder' }"
            @tap="form.role = 'elder'"
          >
            老人
          </view>
          <view
            class="role"
            :class="{ active: form.role === 'family' }"
            @tap="form.role = 'family'"
          >
            家属
          </view>
        </view>
      </view>

      <button class="submit" :loading="submitting" @tap="submitRegister">
        注册
      </button>

      <view class="back" @tap="goBack">已有入口，返回首页</view>
    </view>
  </view>
</template>

<script>
import { authApi } from '@/api'

export default {
  data() {
    return {
      submitting: false,
      form: {
        phone: '',
        name: '',
        password: '',
        confirmPassword: '',
        role: 'family'
      }
    }
  },

  methods: {
    validate() {
      const phone = String(this.form.phone || '').trim()
      const name = String(this.form.name || '').trim()
      const password = String(this.form.password || '')

      if (!/^1\d{10}$/.test(phone)) {
        uni.showToast({ title: '请输入正确的手机号', icon: 'none' })
        return false
      }

      if (!name) {
        uni.showToast({ title: '请输入姓名', icon: 'none' })
        return false
      }

      if (password.length < 6) {
        uni.showToast({ title: '密码至少 6 位', icon: 'none' })
        return false
      }

      if (password !== this.form.confirmPassword) {
        uni.showToast({ title: '两次密码不一致', icon: 'none' })
        return false
      }

      return true
    },

    async submitRegister() {
      if (this.submitting || !this.validate()) return

      this.submitting = true

      try {
        await authApi.register({
          phone: String(this.form.phone).trim(),
          name: String(this.form.name).trim(),
          password: this.form.password,
          role: this.form.role
        })

        uni.showToast({ title: '注册成功', icon: 'success' })

        setTimeout(() => {
          uni.reLaunch({ url: '/pages/entry/index' })
        }, 800)
      } catch (err) {
        console.error('注册失败', err)
        uni.showToast({
          title: err?.message || '注册失败，请稍后重试',
          icon: 'none'
        })
      } finally {
        this.submitting = false
      }
    },

    goBack() {
      uni.navigateBack({
        fail() {
          uni.reLaunch({ url: '/pages/entry/index' })
        }
      })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 120rpx 36rpx 60rpx;
  background: linear-gradient(180deg, #eef4ec, #fbfaf6);
}

.header {
  margin-bottom: 36rpx;
}

.title {
  display: block;
  font-size: 54rpx;
  font-weight: 900;
  color: #285b48;
}

.subtitle {
  display: block;
  margin-top: 14rpx;
  font-size: 26rpx;
  color: #748078;
}

.card {
  padding: 36rpx;
  border-radius: 32rpx;
  background: #ffffff;
  box-shadow: 0 16rpx 48rpx rgba(38, 70, 53, 0.08);
}

.field + .field {
  margin-top: 28rpx;
}

.label {
  display: block;
  margin-bottom: 14rpx;
  font-size: 26rpx;
  font-weight: 700;
  color: #33433b;
}

.input {
  height: 88rpx;
  box-sizing: border-box;
  padding: 0 24rpx;
  border-radius: 20rpx;
  background: #f5f7f4;
  font-size: 28rpx;
}

.roles {
  display: flex;
  gap: 20rpx;
}

.role {
  flex: 1;
  text-align: center;
  padding: 24rpx 0;
  border-radius: 20rpx;
  background: #f5f7f4;
  color: #69756f;
  font-weight: 700;
}

.role.active {
  background: #dfece4;
  color: #285b48;
}

.submit {
  margin-top: 40rpx;
  border-radius: 22rpx;
  background: #315f4b;
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 800;
}

.back {
  margin-top: 24rpx;
  text-align: center;
  font-size: 24rpx;
  color: #6f7a74;
}
</style>
