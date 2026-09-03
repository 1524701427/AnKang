<template>
  <view class="page">
    <view class="topbar">
      <view class="brand-wrap">
        <SuilinLogo size="sm" />
        <view>
          <text class="brand">岁邻</text>
          <text class="date">9月2日 · 星期三</text>
        </view>
      </view>
      <view class="switch-btn" @tap="familyMode">
        <text>切换家人端</text>
        <text class="switch-arrow">›</text>
      </view>
    </view>

    <view class="task-card">
      <text class="task-label">现在要做</text>
      <view class="task-main">
        <view class="medicine-icon">💊</view>
        <view>
          <text class="task-title">吃降压药</text>
          <text class="task-time">08:00 · 1片</text>
        </view>
      </view>
      <button class="primary-btn" :class="{ finished: done }" @tap="finish">
        {{ done ? '已完成 ✓' : '我吃过了' }}
      </button>
    </view>

    <button class="big-btn call-btn" @tap="callFamily">
      <text class="big-icon">☎</text>
      <text class="big-title">联系家人</text>
    </button>

    <button class="big-btn assistant-btn" @tap="assistant">
      <text class="big-icon">🎙</text>
      <text class="big-title">语音助手</text>
    </button>

    <view class="sos-card" @touchstart="holdSos" @touchend="cancelSos" @touchcancel="cancelSos">
      <view class="sos-circle">SOS</view>
      <view>
        <text class="sos-title">紧急求助</text>
        <text class="sos-sub">按住 3 秒通知家人</text>
      </view>
    </view>
  </view>
</template>

<script>
import SuilinLogo from '@/components/SuilinLogo.vue'

export default {
  components: { SuilinLogo },
  data() {
    return { done: false, timer: null }
  },
  methods: {
    finish() {
      this.done = true
      uni.showToast({ title: '已记录', icon: 'success' })
    },
    callFamily() {
      uni.showActionSheet({
        itemList: ['给女儿打电话', '视频通话'],
        success: (res) => {
          uni.showToast({ title: res.tapIndex === 0 ? '正在拨打电话' : '正在发起视频', icon: 'none' })
        }
      })
    },
    assistant() {
      uni.showModal({
        title: '岁邻语音助手',
        content: '可以直接说：给女儿打电话、今天吃什么药、帮我联系家人。',
        showCancel: false
      })
    },
    holdSos() {
      this.timer = setTimeout(() => {
        uni.showModal({ title: '紧急求助已发出', content: '已通知家人。', showCancel: false })
      }, 3000)
    },
    cancelSos() {
      if (this.timer) clearTimeout(this.timer)
      this.timer = null
    },
    familyMode() {
      uni.reLaunch({ url: '/pages/family/home/index' })
    }
  },
  beforeUnmount() {
    if (this.timer) clearTimeout(this.timer)
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 34rpx 32rpx 52rpx;
  box-sizing: border-box;
  background: linear-gradient(180deg,#fff9f1 0%,#fffdf9 52%,#f4faf7 100%);
}
.topbar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:34rpx;
}
.brand-wrap { display:flex; align-items:center; }
.brand-wrap :deep(.suilin-logo) { margin-right:-8rpx; }
.brand { display:block; font-size:46rpx; line-height:1; font-weight:900; color:#4c3c34; letter-spacing:5rpx; }
.date { display:block; margin-top:12rpx; font-size:25rpx; color:#927d70; }
.switch-btn {
  display:flex;
  align-items:center;
  gap:8rpx;
  min-height:72rpx;
  padding:0 22rpx;
  border-radius:24rpx;
  background:#ffffff;
  border:2rpx solid #eadfd5;
  color:#6d584c;
  font-size:24rpx;
  font-weight:800;
  box-shadow:0 8rpx 24rpx rgba(100,70,45,.06);
}
.switch-arrow { font-size:34rpx; line-height:1; color:#e3944b; }
.task-card {
  padding:34rpx;
  border-radius:38rpx;
  background:#fff;
  box-shadow:0 20rpx 58rpx rgba(91,67,45,.09);
}
.task-label { display:block; font-size:28rpx; color:#9a8578; }
.task-main { display:flex; align-items:center; margin-top:18rpx; }
.medicine-icon {
  width:112rpx;
  height:112rpx;
  margin-right:26rpx;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:30rpx;
  background:#fff0dc;
  font-size:54rpx;
}
.task-title { display:block; font-size:52rpx; font-weight:900; color:#342d29; }
.task-time { display:block; margin-top:10rpx; font-size:32rpx; color:#85756b; }
.primary-btn {
  height:128rpx;
  line-height:128rpx;
  margin-top:34rpx;
  border-radius:32rpx;
  background:#2fa99a;
  color:#fff;
  font-size:44rpx;
  font-weight:900;
  box-shadow:0 14rpx 30rpx rgba(47,169,154,.20);
}
.primary-btn.finished { background:#93a59d; }
.big-btn {
  width:100%;
  height:150rpx;
  margin-top:24rpx;
  padding:0 38rpx;
  border-radius:34rpx;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  font-weight:900;
  text-align:left;
}
.call-btn { background:#fff0df; color:#513d31; }
.assistant-btn { background:#e8f6f1; color:#244d47; }
.big-icon {
  width:84rpx;
  height:84rpx;
  margin-right:28rpx;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:24rpx;
  background:rgba(255,255,255,.72);
  font-size:42rpx;
}
.big-title { font-size:42rpx; }
.sos-card {
  margin-top:24rpx;
  min-height:132rpx;
  padding:24rpx 28rpx;
  border-radius:34rpx;
  display:flex;
  align-items:center;
  background:#fff1ee;
  border:2rpx solid #f0d2cc;
}
.sos-circle {
  width:92rpx;
  height:92rpx;
  margin-right:24rpx;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#d65348;
  color:#fff;
  font-size:29rpx;
  font-weight:900;
}
.sos-title { display:block; font-size:36rpx; font-weight:900; color:#7f3b35; }
.sos-sub { display:block; margin-top:6rpx; font-size:25rpx; color:#9a6f68; }
</style>
