<template>
  <view class="page">
    <PageHeader subtitle="上门照护" />
    <view class="hero">
      <text class="eyebrow">岁邻上门服务</text>
      <text class="hero-title">有些事不好做，就找人搭把手</text>
      <text class="hero-desc">陪诊、助浴、护理、康复和生活照料，可以由家人远程预约。</text>
    </view>

    <view class="location-card">
      <view class="location-icon">📍</view>
      <view class="location-main"><text class="small">服务地址</text><text class="location-title">王秀兰 · 家中</text><text class="muted">紫花社区 · 服务范围内</text></view>
      <text class="change">修改</text>
    </view>

    <text class="section-title">需要什么帮助</text>
    <view v-for="item in services" :key="item.id" class="service-card" @tap="selectService(item)">
      <view class="service-icon" :class="item.className">{{ item.icon }}</view>
      <view class="service-main">
        <view class="service-head"><text class="service-title">{{ item.title }}</text><text class="price">¥{{ item.price }}起</text></view>
        <text class="service-desc">{{ item.desc }}</text>
        <view class="tags"><text v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</text></view>
      </view>
      <text class="arrow">›</text>
    </view>

    <view class="safe-card"><text class="safe-title">岁邻服务说明</text><text class="safe-desc">当前为前端演示，后续接入实名服务人员、订单进度与家属确认流程。</text></view>
  </view>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  components:{PageHeader},
  data(){return{services:[
    {id:1,title:'陪诊服务',desc:'陪同就医、取号、检查引导和取药',price:'88',icon:'🧑‍⚕️',className:'orange',tags:['可预约','家属可查看']},
    {id:2,title:'上门助浴',desc:'协助洗浴、穿衣和基础清洁',price:'128',icon:'🛁',className:'teal',tags:['上门','适老照护']},
    {id:3,title:'康复陪练',desc:'按计划进行简单康复动作陪练',price:'99',icon:'🧘',className:'cream',tags:['康复','按次预约']}
  ]}},
  methods:{selectService(item){uni.showModal({title:item.title,content:item.desc+'\n参考价：¥'+item.price+'起',confirmText:'知道了',showCancel:false})}}
}
</script>

<style scoped>
.page{min-height:100vh;padding:0 28rpx 60rpx}.hero{margin:44rpx 6rpx 28rpx}.eyebrow{display:block;font-size:22rpx;color:#a08270;letter-spacing:2rpx}.hero-title{display:block;margin-top:10rpx;font-size:43rpx;line-height:1.3;font-weight:900}.hero-desc{display:block;margin-top:14rpx;font-size:23rpx;line-height:1.7;color:#8d7d73}.location-card{display:flex;align-items:center;padding:24rpx;border-radius:30rpx;background:#fff}.location-icon{width:68rpx;height:68rpx;display:flex;align-items:center;justify-content:center;border-radius:20rpx;background:#fff0df;font-size:32rpx}.location-main{flex:1;margin-left:16rpx}.small,.location-title,.muted,.service-title,.service-desc,.safe-title,.safe-desc{display:block}.small{font-size:18rpx;color:#9b887a}.location-title{margin-top:4rpx;font-size:25rpx;font-weight:900}.muted{margin-top:4rpx;font-size:19rpx;color:#8f8178}.change{font-size:20rpx;color:#2f998c}.section-title{display:block;margin:36rpx 6rpx 16rpx;font-size:31rpx;font-weight:900}.service-card{display:flex;align-items:center;margin-top:16rpx;padding:22rpx;border-radius:28rpx;background:#fff}.service-icon{width:72rpx;height:72rpx;display:flex;align-items:center;justify-content:center;border-radius:22rpx;font-size:34rpx}.orange{background:#fff0df}.teal{background:#e8f6f1}.cream{background:#f6eee4}.service-main{flex:1;margin-left:18rpx}.service-head{display:flex;align-items:center;justify-content:space-between;gap:12rpx}.service-title{font-size:26rpx;font-weight:900}.price{font-size:21rpx;font-weight:900;color:#d77f3a}.service-desc{margin-top:7rpx;font-size:20rpx;line-height:1.55;color:#8d7d73}.tags{display:flex;gap:8rpx;margin-top:10rpx}.tag{padding:5rpx 9rpx;border-radius:12rpx;background:#f2f7f5;color:#607b72;font-size:17rpx}.arrow{margin-left:10rpx;font-size:38rpx;color:#d5965d}.safe-card{margin-top:22rpx;padding:24rpx 26rpx;border-radius:28rpx;background:#fff2e5}.safe-title{font-size:24rpx;font-weight:900;color:#704e3a}.safe-desc{margin-top:8rpx;font-size:20rpx;line-height:1.6;color:#94725e}
</style>
