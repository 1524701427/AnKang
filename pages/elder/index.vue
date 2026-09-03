<template>
  <view class="page">
    <view class="top"><view><text class="brand">安康</text><text class="date">9月2日 · 星期三</text></view><text class="weather">晴 · 26℃</text></view>
<view class="status-card">
  <view class="status-dot"></view>

  <view>
    <text class="status-title">今天一切正常</text>
    <text class="status-sub">家人在远程守护你</text>
  </view>
</view>
<view class="medicine-card">

  <view class="medicine-top">

    <view class="medicine-icon">
      💊
    </view>

    <view class="medicine-main">

      <text class="medicine-label">
        现在要做
      </text>

      <text class="medicine-title">
        吃降压药
      </text>

      <text class="medicine-detail">
        08:00 · 1片
      </text>

    </view>

  </view>


  <button
    class="done-btn"
    :class="{ finished: done }"
    @tap="finish"
  >
    {{ done ? '已经吃过了 ✓' : '我已经吃过了' }}
  </button>

</view>

<view class="main-actions">

  <view
    class="action-card call"
    @tap="callFamily"
  >

    <view class="action-icon">
      📹
    </view>

    <text class="action-title">
      联系家人
    </text>

    <text class="action-sub">
      视频或语音通话
    </text>

  </view>


  <view
    class="action-card assistant"
    @tap="assistant"
  >

    <view class="action-icon">
      🎙️
    </view>

    <text class="action-title">
      小安助手
    </text>

    <text class="action-sub">
      直接说你想做什么
    </text>

  </view>

</view>

<view
  class="sos-card"
  @touchstart="holdSos"
  @touchend="cancelSos"
  @touchcancel="cancelSos"
>

  <view class="sos-circle">
    SOS
  </view>

  <view class="sos-main">

    <text class="sos-title">
      紧急求助
    </text>

    <text class="sos-sub">
      长按 3 秒，立即通知家人和社区
    </text>

  </view>

</view>
<view class="bottom-note">
  安康守护中 · 今日设备在线
</view>
    <view class="family-link" @click="familyMode">家人端管理 →</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      done: false,
      timer: null
    }
  },

  methods: {
    finish() {
      this.done = true

      uni.showToast({
        title: '已记录',
        icon: 'success'
      })
    },

    callFamily() {
      uni.showToast({
        title: '正在呼叫女儿',
        icon: 'none'
      })
    },

    assistant() {
      uni.showModal({
        title: '小安助手',
        content: '你可以说：给女儿打电话、今天吃什么药、帮我联系社区。',
        showCancel: false
      })
    },

    holdSos() {
      this.timer = setTimeout(() => {
        uni.showModal({
          title: '紧急求助已发出',
          content: '已通知家人和社区守护站。',
          showCancel: false
        })
      }, 3000)
    },

    cancelSos() {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.timer = null
    },

    familyMode() {
      uni.navigateTo({
        url: '/pages/family/home/index'
      })
    }
  },

  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>
<style scoped>

.page {
  min-height: 100vh;
  padding: 34rpx 34rpx 46rpx;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(224, 239, 229, .9),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      #f7f8f3 0%,
      #f5f3ec 100%
    );
}


.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}


.brand {
  display: block;

  font-size: 52rpx;
  line-height: 1;

  font-weight: 900;

  letter-spacing: 6rpx;

  color: #234d3d;
}


.date {
  display: block;

  margin-top: 16rpx;

  font-size: 30rpx;

  color: #6f7a73;
}


.weather {
  padding: 14rpx 20rpx;

  border-radius: 22rpx;

  background: rgba(255,255,255,.72);

  font-size: 28rpx;

  color: #55675e;
}


/* 今日状态 */

.status-card {
  margin-top: 34rpx;

  min-height: 112rpx;

  padding: 26rpx 30rpx;

  border-radius: 30rpx;

  display: flex;
  align-items: center;

  background: rgba(255,255,255,.75);

  border: 2rpx solid rgba(218,229,219,.9);
}


.status-dot {
  width: 22rpx;
  height: 22rpx;

  margin-right: 22rpx;

  border-radius: 50%;

  background: #4f8b68;

  box-shadow:
    0 0 0 12rpx
    rgba(79,139,104,.10);
}


.status-title {
  display: block;

  font-size: 36rpx;

  font-weight: 900;

  color: #263c31;
}


.status-sub {
  display: block;

  margin-top: 6rpx;

  font-size: 26rpx;

  color: #718078;
}


/* 用药 */

.medicine-card {
  margin-top: 26rpx;

  padding: 36rpx;

  border-radius: 38rpx;

  background: #ffffff;

  box-shadow:
    0 20rpx 60rpx
    rgba(51,79,63,.10);
}


.medicine-top {
  display: flex;
  align-items: center;
}


.medicine-icon {
  width: 112rpx;
  height: 112rpx;

  margin-right: 28rpx;

  border-radius: 30rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #edf3e8;

  font-size: 56rpx;
}


.medicine-main {
  flex: 1;
}


.medicine-label {
  display: block;

  font-size: 30rpx;

  color: #7b857e;
}


.medicine-title {
  display: block;

  margin-top: 8rpx;

  font-size: 52rpx;

  line-height: 1.15;

  font-weight: 900;

  color: #20352b;
}


.medicine-detail {
  display: block;

  margin-top: 12rpx;

  font-size: 32rpx;

  color: #66736c;
}


.done-btn {
  margin-top: 34rpx;

  height: 118rpx;
  line-height: 118rpx;

  border-radius: 30rpx;

  background: #2e654e;

  color: #fff;

  font-size: 40rpx;

  font-weight: 900;

  box-shadow:
    0 14rpx 30rpx
    rgba(46,101,78,.18);
}


.done-btn.finished {
  background: #87978f;
}


/* 主功能 */

.main-actions {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20rpx;

  margin-top: 22rpx;
}


.action-card {
  min-height: 230rpx;

  padding: 30rpx;

  border-radius: 34rpx;
}


.call {
  background: #f3ecde;
}


.assistant {
  background: #e7f0e8;
}


.action-icon {
  width: 76rpx;
  height: 76rpx;

  border-radius: 22rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.55);

  font-size: 42rpx;
}


.action-title {
  display: block;

  margin-top: 24rpx;

  font-size: 38rpx;

  font-weight: 900;

  color: #263a31;
}


.action-sub {
  display: block;

  margin-top: 10rpx;

  font-size: 26rpx;

  line-height: 1.5;

  color: #6f7a73;
}


/* SOS */

.sos-card {
  margin-top: 22rpx;

  min-height: 146rpx;

  padding: 26rpx 28rpx;

  border-radius: 34rpx;

  display: flex;
  align-items: center;

  background: #fff2ef;

  border: 2rpx solid #efd6d1;
}


.sos-circle {
  width: 96rpx;
  height: 96rpx;

  margin-right: 24rpx;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #c84c43;

  color: #fff;

  font-size: 30rpx;

  font-weight: 900;

  box-shadow:
    0 10rpx 24rpx
    rgba(200,76,67,.20);
}


.sos-main {
  flex: 1;
}


.sos-title {
  display: block;

  font-size: 38rpx;

  font-weight: 900;

  color: #7e3832;
}


.sos-sub {
  display: block;

  margin-top: 8rpx;

  font-size: 25rpx;

  line-height: 1.45;

  color: #956d67;
}


.bottom-note {
  margin-top: 26rpx;

  text-align: center;

  font-size: 24rpx;

  color: #879089;
}

</style>
