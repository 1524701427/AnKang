<template>
  <view class="header">

    <view class="brand-area">

      <view class="brand-mark">
        安
      </view>

      <view>

        <text class="brand-name">
          安康
        </text>

        <text
          v-if="subtitle"
          class="brand-subtitle"
        >
          {{ subtitle }}
        </text>

      </view>

    </view>


    <view
      v-if="action"
      class="header-action"
      @tap="$emit('action')"
    >

      <text class="action-text">
        {{ action }}
      </text>

      <text class="action-arrow">
        →
      </text>

    </view>

  </view>
</template>


<script>
export default {

  props: {

    subtitle: {
      type: String,
      default: ''
    },

    action: {
      type: String,
      default: ''
    }

  },

  emits: [
    'action'
  ]

}
</script>


<style scoped>

.header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  min-height: 110rpx;

  padding-top:
    calc(
      env(safe-area-inset-top)
      + 12rpx
    );

}


.brand-area {

  display: flex;

  align-items: center;

}


.brand-mark {

  width: 66rpx;
  height: 66rpx;

  margin-right: 16rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 21rpx;

  background:
    linear-gradient(
      145deg,
      #315f4c,
      #447861
    );

  color: #fff;

  font-size: 28rpx;

  font-weight: 900;

  box-shadow:
    0 9rpx 22rpx
    rgba(49,95,76,.16);

}


.brand-name {

  display: block;

  font-size: 30rpx;

  line-height: 1;

  font-weight: 900;

  letter-spacing: 2rpx;

  color: #284136;

}


.brand-subtitle {

  display: block;

  margin-top: 7rpx;

  font-size: 19rpx;

  color: #89928c;

}


.header-action {

  display: flex;

  align-items: center;

  padding:
    12rpx
    17rpx;

  border-radius: 18rpx;

  background:
    rgba(255,255,255,.72);

  border:
    1rpx solid
    rgba(223,229,223,.9);

}


.action-text {

  font-size: 20rpx;

  color: #526b5d;

}


.action-arrow {

  margin-left: 7rpx;

  font-size: 21rpx;

  color: #6c7d73;

}

</style>