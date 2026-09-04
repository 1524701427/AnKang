<template>
  <view class="page">
    <view class="brand-block">
      <SuilinLogo size="lg" />
      <text class="logo">岁邻</text>
      <text class="slogan">让牵挂更近，让生活更安心</text>
      <text class="desc">连接长辈、家人与社区服务，把每天的关心变得简单一点、温暖一点。</text>
    </view>

    <view class="role elder" @tap="goElder">
      <view>
        <text class="tag">长辈使用</text>
        <text class="title">进入长辈端</text>
        <text class="sub">大字、清楚、少操作</text>
      </view>
      <text class="arrow">→</text>
    </view>

    <view class="role family" @tap="goFamily">
      <view>
        <text class="tag">子女 / 家属使用</text>
        <text class="title">进入家人端</text>
        <text class="sub">健康、提醒、照护与生活服务</text>
      </view>
      <text class="arrow">→</text>
    </view>

    <view class="auth">
      <text @tap="goLogin">账号登录</text>
      <text class="dot">·</text>
      <text class="link" @tap="goRegister">立即注册</text>
    </view>
  </view>
</template>

<script>
import SuilinLogo from '@/components/SuilinLogo.vue'

export default {
  components: { SuilinLogo },
  methods: {
    goElder() { uni.navigateTo({ url: '/pages/elder/index' }) },
    goFamily() { uni.navigateTo({ url: '/pages/family/home/index' }) },
    goLogin() { uni.navigateTo({ url: '/pages/login/index' }) },
    goRegister() { uni.navigateTo({ url: '/pages/register/index' }) }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 118rpx 44rpx 60rpx;
  background:
    radial-gradient(circle at 92% 10%, rgba(255,212,166,.38), transparent 28%),
    radial-gradient(circle at 2% 38%, rgba(102,194,177,.18), transparent 24%),
    linear-gradient(180deg,#fff8ef 0%,#fffdf9 58%,#f7fbf8 100%);
}
.brand-block { text-align: center; }
.brand-block :deep(.suilin-logo) { margin: 0 auto 18rpx; }
.logo { display:block; font-size:68rpx; font-weight:900; color:#4b3b33; letter-spacing:10rpx; }
.slogan { display:block; margin-top:14rpx; font-size:30rpx; font-weight:800; color:#6e5548; }
.desc { display:block; margin:18rpx auto 0; max-width:600rpx; font-size:24rpx; line-height:1.75; color:#9a8172; }
.role {
  margin-top:46rpx;
  min-height:210rpx;
  padding:36rpx;
  border-radius:36rpx;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border:1rpx solid rgba(255,255,255,.9);
  box-shadow:0 18rpx 52rpx rgba(104,74,50,.08);
}
.elder { background:linear-gradient(135deg,#fff0df,#fff8ee); }
.family { margin-top:24rpx; background:linear-gradient(135deg,#e8f6f1,#f4fbf8); }
.tag,.title,.sub { display:block; }
.tag { font-size:22rpx; color:#a07e68; }
.title { margin-top:14rpx; font-size:39rpx; font-weight:900; color:#493a33; }
.sub { margin-top:10rpx; font-size:24rpx; color:#8c796d; }
.arrow { font-size:48rpx; color:#e59850; }
.family .arrow { color:#45a994; }
.auth { margin-top:34rpx; display:flex; justify-content:center; gap:12rpx; font-size:24rpx; color:#8d796d; }
.link { color:#d98039; font-weight:800; }
.dot { color:#cbb8aa; }
</style>
