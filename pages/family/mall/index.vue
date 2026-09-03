<template>
  <view class="page">

    <PageHeader subtitle="安康商城" />

    <view class="hero">
      <text class="eyebrow">安心选购</text>
      <text class="hero-title">给父母买真正用得上的东西</text>
      <text class="hero-desc">
        适老家居、健康用品和安全设备，尽量少而实用
      </text>
    </view>


    <!-- 搜索 -->
    <view class="search-box">
      <text class="search-icon">⌕</text>

      <input
        class="search-input"
        placeholder="搜索血压计、助行器、护理用品"
      />
    </view>


    <!-- 分类 -->
    <view class="category-grid">

      <view
        v-for="item in categories"
        :key="item.name"
        class="category-item"
      >
        <view
          class="category-icon"
          :class="item.className"
        >
          {{ item.icon }}
        </view>

        <text class="category-name">
          {{ item.name }}
        </text>
      </view>

    </view>


    <!-- 推荐 -->
    <view class="section-head">
      <view>
        <text class="eyebrow">为妈妈推荐</text>
        <text class="section-title">最近可能需要</text>
      </view>
    </view>


    <view class="product-grid">

      <view
        v-for="item in products"
        :key="item.id"
        class="product-card"
        @tap="showProduct(item)"
      >

        <view class="product-image">
          {{ item.icon }}
        </view>

        <text class="product-tag">
          {{ item.tag }}
        </text>

        <text class="product-title">
          {{ item.title }}
        </text>

        <text class="product-desc">
          {{ item.desc }}
        </text>

        <view class="product-bottom">

          <text class="product-price">
            ¥{{ item.price }}
          </text>

          <view class="buy-btn">
            购买
          </view>

        </view>

      </view>

    </view>


    <!-- 家庭代购 -->
    <view class="family-buy">

      <view class="family-buy-icon">
        🛒
      </view>

      <view class="family-buy-main">

        <text class="family-buy-label">
          家庭代购
        </text>

        <text class="family-buy-title">
          买好以后直接送到妈妈家
        </text>

        <text class="family-buy-desc">
          收货地址和老人信息可由家人统一管理
        </text>

      </view>

    </view>

  </view>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue'

export default {

  components: {
    PageHeader
  },

  data() {

    return {

      categories: [
        {
          name: '健康监测',
          icon: '❤️',
          className: 'green'
        },
        {
          name: '护理用品',
          icon: '🧴',
          className: 'orange'
        },
        {
          name: '适老家居',
          icon: '🪑',
          className: 'purple'
        },
        {
          name: '安全设备',
          icon: '🔔',
          className: 'rose'
        }
      ],

      products: [
        {
          id: 1,
          title: '家用上臂式血压计',
          desc: '大屏显示 · 一键测量',
          tag: '健康监测',
          price: '199',
          icon: '🩺'
        },
        {
          id: 2,
          title: '浴室防滑扶手',
          desc: '免打孔安装 · 承重稳定',
          tag: '居家安全',
          price: '89',
          icon: '🛁'
        },
        {
          id: 3,
          title: '老人夜间感应灯',
          desc: '人体感应 · 柔和夜灯',
          tag: '适老家居',
          price: '49',
          icon: '💡'
        },
        {
          id: 4,
          title: '一周分药盒',
          desc: '早中晚分区 · 大字标识',
          tag: '用药辅助',
          price: '29',
          icon: '💊'
        }
      ]

    }

  },


  methods: {

    showProduct(item) {

      uni.showModal({
        title: item.title,
        content:
          item.desc +
          '\n测试页面暂未接入真实支付。',
        confirmText: '知道了',
        showCancel: false
      })

    }

  }

}
</script>


<style scoped>

.page {

  min-height: 100vh;

  padding:
    0
    28rpx
    60rpx;

  background:
    linear-gradient(
      180deg,
      #f8f8f4,
      #f3f3ee
    );

}


.hero {

  margin:
    48rpx
    6rpx
    28rpx;

}


.eyebrow {

  display: block;

  font-size: 22rpx;

  letter-spacing: 2rpx;

  color: #87918a;

}


.hero-title {

  display: block;

  margin-top: 10rpx;

  font-size: 44rpx;

  font-weight: 900;

  line-height: 1.3;

  color: #263a30;

}


.hero-desc {

  display: block;

  margin-top: 14rpx;

  font-size: 23rpx;

  line-height: 1.7;

  color: #7a857e;

}


/* 搜索 */

.search-box {

  display: flex;

  align-items: center;

  height: 86rpx;

  padding:
    0
    24rpx;

  border-radius: 26rpx;

  background: #fff;

}


.search-icon {

  margin-right: 14rpx;

  font-size: 30rpx;

  color: #88918b;

}


.search-input {

  flex: 1;

  font-size: 23rpx;

  color: #34473d;

}


/* 分类 */

.category-grid {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 12rpx;

  margin-top: 20rpx;

}


.category-item {

  padding:
    22rpx
    8rpx;

  text-align: center;

  border-radius: 24rpx;

  background: #fff;

}


.category-icon {

  width: 62rpx;
  height: 62rpx;

  margin: 0 auto;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 20rpx;

  font-size: 30rpx;

}


.green {
  background: #e7f0e8;
}


.orange {
  background: #f5eddf;
}


.purple {
  background: #eeeafa;
}


.rose {
  background: #f8e9e7;
}


.category-name {

  display: block;

  margin-top: 12rpx;

  font-size: 19rpx;

  color: #56675e;

}


/* 标题 */

.section-head {

  margin:
    38rpx
    5rpx
    18rpx;

}


.section-title {

  display: block;

  margin-top: 7rpx;

  font-size: 31rpx;

  font-weight: 900;

  color: #293d33;

}


/* 商品 */

.product-grid {

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 16rpx;

}


.product-card {

  padding: 20rpx;

  border-radius: 28rpx;

  background: #fff;

}


.product-image {

  height: 180rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 22rpx;

  background:
    linear-gradient(
      145deg,
      #f1f4ef,
      #fafaf7
    );

  font-size: 76rpx;

}


.product-tag {

  display: inline-block;

  margin-top: 16rpx;

  padding:
    5rpx
    10rpx;

  border-radius: 12rpx;

  background: #edf3ed;

  font-size: 17rpx;

  color: #55705f;

}


.product-title {

  display: block;

  margin-top: 10rpx;

  font-size: 24rpx;

  line-height: 1.45;

  font-weight: 900;

  color: #34473d;

}


.product-desc {

  display: block;

  min-height: 58rpx;

  margin-top: 6rpx;

  font-size: 19rpx;

  line-height: 1.55;

  color: #868f89;

}


.product-bottom {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 14rpx;

}


.product-price {

  font-size: 28rpx;

  font-weight: 900;

  color: #9b6842;

}


.buy-btn {

  padding:
    9rpx
    16rpx;

  border-radius: 16rpx;

  background: #35674f;

  font-size: 19rpx;

  color: #fff;

}


/* 家庭代购 */

.family-buy {

  display: flex;

  align-items: center;

  margin-top: 22rpx;

  padding: 26rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #f5f0e5,
      #faf9f4
    );

}


.family-buy-icon {

  width: 72rpx;
  height: 72rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 22rpx;

  background: rgba(255,255,255,.7);

  font-size: 34rpx;

}


.family-buy-main {

  margin-left: 18rpx;

}


.family-buy-label,
.family-buy-title,
.family-buy-desc {

  display: block;

}


.family-buy-label {

  font-size: 18rpx;

  color: #918575;

}


.family-buy-title {

  margin-top: 5rpx;

  font-size: 25rpx;

  font-weight: 900;

  color: #4c4439;

}


.family-buy-desc {

  margin-top: 5rpx;

  font-size: 19rpx;

  color: #847b6d;

}

</style>