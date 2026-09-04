<template>
  <view class="page">
    <PageHeader subtitle="岁邻好物" />
    <view class="hero">
      <text class="eyebrow">给家里挑点实用的</text>
      <text class="hero-title">少一点花哨，多一点好用</text>
      <text class="hero-desc">适老家居、健康用品和安全设备，优先挑简单、耐用、容易上手的。</text>
    </view>

    <view class="search-box"><text class="search-icon">⌕</text><input class="search-input" placeholder="搜索血压计、助行器、护理用品" /></view>

    <view class="category-grid">
      <view v-for="item in categories" :key="item.name" class="category-item">
        <view class="category-icon" :class="item.className">{{ item.icon }}</view>
        <text class="category-name">{{ item.name }}</text>
      </view>
    </view>

    <text class="section-title">最近可能用得上</text>
    <view class="product-grid">
      <view v-for="item in products" :key="item.id" class="product-card" @tap="showProduct(item)">
        <view class="product-image">{{ item.icon }}</view>
        <text class="product-title">{{ item.title }}</text>
        <text class="product-desc">{{ item.desc }}</text>
        <view class="product-bottom"><text class="product-price">¥{{ item.price }}</text><view class="buy-btn">看看</view></view>
      </view>
    </view>

    <view class="tip-card">
      <text class="tip-title">岁邻小提示</text>
      <text class="tip-desc">购买前先和长辈确认习惯与尺寸，能少买一个就少买一个。</text>
    </view>
  </view>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  components: { PageHeader },
  data() {
    return {
      categories: [
        { name:'健康监测', icon:'❤️', className:'teal' },
        { name:'护理用品', icon:'🧴', className:'orange' },
        { name:'适老家居', icon:'🪑', className:'cream' },
        { name:'安全设备', icon:'🔔', className:'rose' }
      ],
      products: [
        { id:1, title:'家用上臂式血压计', desc:'大屏显示 · 一键测量', price:'199', icon:'🩺' },
        { id:2, title:'浴室防滑扶手', desc:'安装简单 · 握感稳固', price:'89', icon:'🛁' },
        { id:3, title:'夜间感应灯', desc:'人体感应 · 柔和不刺眼', price:'49', icon:'💡' },
        { id:4, title:'一周分药盒', desc:'早中晚分区 · 大字标识', price:'29', icon:'💊' }
      ]
    }
  },
  methods: {
    showProduct(item) {
      uni.showModal({ title:item.title, content:item.desc + '\n当前为前端演示，暂未接入真实支付。', showCancel:false })
    }
  }
}
</script>

<style scoped>
.page { min-height:100vh; padding:0 28rpx 60rpx; }
.hero { margin:44rpx 6rpx 28rpx; }
.eyebrow { display:block; font-size:22rpx; color:#a08270; letter-spacing:2rpx; }
.hero-title { display:block; margin-top:10rpx; font-size:44rpx; line-height:1.28; font-weight:900; }
.hero-desc { display:block; margin-top:14rpx; font-size:23rpx; line-height:1.7; color:#8d7d73; }
.search-box { height:86rpx; padding:0 24rpx; display:flex; align-items:center; border-radius:26rpx; background:#fff; box-shadow:0 12rpx 34rpx rgba(98,70,49,.06); }
.search-icon { margin-right:14rpx; font-size:30rpx; color:#a18c7e; }.search-input{flex:1;font-size:23rpx}
.category-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12rpx; margin-top:20rpx; }
.category-item { padding:22rpx 8rpx; text-align:center; border-radius:24rpx; background:#fff; }
.category-icon { width:62rpx; height:62rpx; margin:0 auto; display:flex; align-items:center; justify-content:center; border-radius:20rpx; font-size:30rpx; }
.teal{background:#e8f6f1}.orange{background:#fff0df}.cream{background:#f5eee5}.rose{background:#fff0ee}
.category-name { display:block; margin-top:12rpx; font-size:19rpx; color:#6f625b; }
.section-title { display:block; margin:38rpx 5rpx 18rpx; font-size:31rpx; font-weight:900; }
.product-grid { display:grid; grid-template-columns:1fr 1fr; gap:16rpx; }
.product-card { padding:20rpx; border-radius:28rpx; background:#fff; }
.product-image { height:174rpx; display:flex; align-items:center; justify-content:center; border-radius:22rpx; background:linear-gradient(145deg,#fff5e9,#f4faf7); font-size:72rpx; }
.product-title { display:block; margin-top:14rpx; font-size:24rpx; line-height:1.45; font-weight:900; }
.product-desc { display:block; min-height:56rpx; margin-top:6rpx; font-size:19rpx; line-height:1.5; color:#8f8178; }
.product-bottom { display:flex; align-items:center; justify-content:space-between; margin-top:14rpx; }
.product-price { font-size:28rpx; font-weight:900; color:#d77f3a; }
.buy-btn { padding:9rpx 16rpx; border-radius:16rpx; background:#2fa99a; color:#fff; font-size:19rpx; }
.tip-card { margin-top:22rpx; padding:26rpx; border-radius:28rpx; background:#fff1e2; }
.tip-title,.tip-desc{display:block}.tip-title{font-size:24rpx;font-weight:900;color:#714f3b}.tip-desc{margin-top:8rpx;font-size:20rpx;line-height:1.6;color:#957460}
</style>
