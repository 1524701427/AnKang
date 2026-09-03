<template>
<view class="page">
  <text class="title">我的长辈</text>
  <text class="sub">以下信息来自家人添加的长辈资料</text>

  <view v-if="elders.length">
    <view v-for="m in elders" :key="m.id" class="card">
      <view class="avatar">{{m.name.slice(-1)}}</view>
      <view class="main">
        <text class="name">{{m.name}} · {{m.relation}}</text>
        <text class="meta">{{ageText(m)}} {{m.phone || ''}}</text>
      </view>
    </view>
  </view>

  <view v-else class="empty">
    <text>还没有添加长辈</text>
  </view>

  <button class="add" @tap="addElder">+ 添加长辈</button>
</view>
</template>

<script>
export default {
 data(){return {elders:[]}},
 onShow(){
   this.elders=uni.getStorageSync('suilin_elders')||[]
 },
 methods:{
  addElder(){uni.navigateTo({url:'/pages/family/elder-add/index'})},
  ageText(m){
   if(!m.birthday) return '未填写出生日期'
   const y=new Date().getFullYear()-new Date(m.birthday).getFullYear()
   return y+'岁'
  }
 }
}
</script>

<style scoped>
.page{min-height:100vh;padding:36rpx;background:#fff9f2}.title{display:block;font-size:42rpx;font-weight:900;color:#493a33}.sub{display:block;margin:12rpx 0 28rpx;color:#927d70}.card{background:#fff;border-radius:30rpx;padding:28rpx;display:flex;align-items:center;margin-bottom:18rpx}.avatar{width:76rpx;height:76rpx;border-radius:24rpx;background:#ffe1bd;display:flex;align-items:center;justify-content:center;font-weight:900}.main{margin-left:20rpx}.name{display:block;font-size:30rpx;font-weight:900}.meta{display:block;margin-top:8rpx;color:#88786c}.empty{background:#fff;padding:50rpx;text-align:center;border-radius:30rpx;color:#99887d}.add{margin-top:30rpx;background:#2fa99a;color:#fff;border-radius:24rpx}
</style>