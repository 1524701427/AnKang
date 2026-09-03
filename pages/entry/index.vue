<template>
  <view class="page">

    <text class="logo">安康</text>

    <text class="slogan">
      家庭养老助手
    </text>

    <text class="desc">
      老人用得简单，家人看得安心，社区接得上服务。
    </text>

    <!-- 老人端 -->
    <view class="role elder" @tap="goElder">
      <view>
        <text class="tag">老人使用</text>
        <text class="title">进入老人端</text>
        <text class="sub">大字、一屏、少操作</text>
      </view>
      <text class="arrow">→</text>
    </view>

    <!-- 家人端 -->
    <view class="role family" @tap="goFamily">
      <view>
        <text class="tag">子女 / 家属使用</text>
        <text class="title">进入家人端</text>
        <text class="sub">健康、提醒、照护和养老服务</text>
      </view>
      <text class="arrow">→</text>
    </view>

    <view class="register" @tap="goRegister">
      <text>还没有账号？</text>
      <text class="register-link">立即注册</text>
    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {}
  },

  onLoad() {
    console.log('entry 页面加载成功')
  },

  methods: {
    goElder() {
      uni.navigateTo({ url: '/pages/elder/index' })
    },

    goFamily() {
      uni.navigateTo({ url: '/pages/family/home/index' })
    },

    goRegister() {
      uni.navigateTo({ url: '/pages/register/index' })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 150rpx 44rpx 60rpx;
  background: linear-gradient(180deg, #eef4ec, #fbfaf6);
}

.logo {
  display: block;
  font-size: 68rpx;
  font-weight: 900;
  color: #285b48;
  letter-spacing: 8rpx;
}

.slogan {
  display: block;
  margin-top: 12rpx;
  font-size: 34rpx;
  font-weight: 800;
}

.desc {
  display: block;
  margin-top: 20rpx;
  font-size: 26rpx;
  line-height: 1.8;
  color: #768179;
}

.role {
  margin-top: 50rpx;
  min-height: 220rpx;
  padding: 36rpx;
  border-radius: 34rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 14rpx 50rpx rgba(38, 70, 53, .08);
}

.elder {
  background: #fff4e7;
}

.family {
  margin-top: 24rpx;
  background: #e7f1ea;
}

.tag {
  display: block;
  font-size: 22rpx;
  color: #7d857f;
}

.title {
  display: block;
  margin-top: 14rpx;
  font-size: 40rpx;
  font-weight: 900;
}

.sub {
  display: block;
  margin-top: 10rpx;
  font-size: 24rpx;
  color: #7b847e;
}

.arrow {
  font-size: 48rpx;
  color: #315f4b;
}

.register {
  margin-top: 36rpx;
  display: flex;
  justify-content: center;
  gap: 10rpx;
  font-size: 25rpx;
  color: #77827c;
}

.register-link {
  color: #285b48;
  font-weight: 800;
}
</style>
