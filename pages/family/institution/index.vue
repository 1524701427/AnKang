<template>
  <view class="page">
    <PageHeader subtitle="养老机构" />
    <view class="hero">
      <text class="eyebrow">岁邻机构查询</text>
      <text class="hero-title">提前看看附近有哪些选择</text>
      <text class="hero-desc">养老院、护理院、短托和康养机构，可以先了解，再慢慢比较。</text>
    </view>

    <view class="filter-row">
      <view class="filter active">综合推荐</view><view class="filter">距离</view><view class="filter">价格</view><view class="filter">护理</view>
    </view>

    <view v-for="item in institutions" :key="item.id" class="institution-card" @tap="showDetail(item)">
      <view class="institution-image">{{ item.icon }}</view>
      <view class="institution-main">
        <view class="institution-head"><text class="institution-name">{{ item.name }}</text><text class="distance">{{ item.distance }}</text></view>
        <text class="institution-desc">{{ item.desc }}</text>
        <view class="tags"><text v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</text></view>
        <view class="bottom"><text class="score">{{ item.score }} 分</text><text class="price">{{ item.price }}</text></view>
      </view>
    </view>
  </view>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  components:{ PageHeader },
  data(){return{institutions:[
    {id:1,name:'松柏颐养中心',distance:'1.8km',desc:'生活照料、康复护理，家属探访方便',score:'4.8',price:'¥3800/月起',icon:'🏡',tags:['护理','康复','可探访']},
    {id:2,name:'紫花社区长者之家',distance:'2.4km',desc:'社区嵌入式短托与日间照护',score:'4.7',price:'¥180/天起',icon:'🌿',tags:['日托','助餐','社区']},
    {id:3,name:'晴禾护理院',distance:'4.1km',desc:'适合需要持续护理与康复支持的长辈',score:'4.6',price:'¥5200/月起',icon:'☀️',tags:['护理','医疗协作','康复']}
  ]}},
  methods:{showDetail(item){uni.showModal({title:item.name,content:item.desc+'\n'+item.price,showCancel:false})}}
}
</script>

<style scoped>
.page{min-height:100vh;padding:0 28rpx 60rpx}.hero{margin:44rpx 6rpx 26rpx}.eyebrow{display:block;font-size:22rpx;color:#a08270;letter-spacing:2rpx}.hero-title{display:block;margin-top:10rpx;font-size:43rpx;line-height:1.3;font-weight:900}.hero-desc{display:block;margin-top:14rpx;font-size:23rpx;line-height:1.7;color:#8d7d73}.filter-row{display:flex;gap:12rpx;margin-bottom:20rpx}.filter{flex:1;padding:16rpx 8rpx;text-align:center;border-radius:18rpx;background:#fff;color:#8a796f;font-size:20rpx}.filter.active{background:#2fa99a;color:#fff;font-weight:800}.institution-card{display:flex;margin-top:18rpx;padding:22rpx;border-radius:30rpx;background:#fff}.institution-image{width:112rpx;height:112rpx;display:flex;align-items:center;justify-content:center;border-radius:28rpx;background:linear-gradient(145deg,#fff0df,#e8f6f1);font-size:52rpx}.institution-main{flex:1;margin-left:20rpx}.institution-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12rpx}.institution-name{font-size:27rpx;font-weight:900;color:#493c35}.distance{font-size:19rpx;color:#a08d80}.institution-desc{display:block;margin-top:8rpx;font-size:20rpx;line-height:1.55;color:#887a71}.tags{display:flex;flex-wrap:wrap;gap:8rpx;margin-top:12rpx}.tag{padding:5rpx 10rpx;border-radius:12rpx;background:#f4f7f5;color:#5d776e;font-size:17rpx}.bottom{display:flex;justify-content:space-between;margin-top:14rpx}.score{font-size:20rpx;font-weight:800;color:#2f978a}.price{font-size:20rpx;font-weight:900;color:#d8803b}
</style>
