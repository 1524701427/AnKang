<template>
  <view class="header">
    <view class="brand-area">
      <SuilinLogo size="sm" />
      <view class="brand-copy">
        <text class="brand-name">岁邻</text>
        <text v-if="subtitle" class="brand-subtitle">{{ subtitle }}</text>
      </view>
    </view>
    <view v-if="action" class="header-action" @tap="$emit('action')">
      <text class="action-text">{{ action }}</text>
      <text class="action-arrow">→</text>
    </view>
  </view>
</template>

<script>
import SuilinLogo from '@/components/SuilinLogo.vue'

export default {
  components: { SuilinLogo },
  props: {
    subtitle: { type: String, default: '' },
    action: { type: String, default: '' }
  },
  emits: ['action']
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 112rpx;
  padding-top: calc(env(safe-area-inset-top) + 12rpx);
}
.brand-area { display: flex; align-items: center; min-width: 0; }
.brand-copy { margin-left: -14rpx; }
.brand-name {
  display: block;
  font-size: 31rpx;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 3rpx;
  color: #4b3b33;
}
.brand-subtitle {
  display: block;
  margin-top: 8rpx;
  font-size: 19rpx;
  color: #9a8172;
}
.header-action {
  display: flex;
  align-items: center;
  padding: 13rpx 18rpx;
  border-radius: 22rpx;
  background: rgba(255,255,255,.86);
  border: 1rpx solid rgba(244,218,196,.95);
  box-shadow: 0 8rpx 24rpx rgba(115,75,47,.06);
}
.action-text { font-size: 20rpx; color: #806252; }
.action-arrow { margin-left: 7rpx; font-size: 21rpx; color: #e5964d; }
</style>
