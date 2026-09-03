<template>
<view class="page">
  <view class="form card">
    <text class="label">提醒类型</text>
    <picker :range="types" @change="e=>typeIndex=e.detail.value"><view class="input">{{types[typeIndex]}}</view></picker>
    <text class="label">提醒名称</text><input class="input" v-model="form.title" placeholder="例如：降压药"/>
    <text class="label">时间</text><picker mode="time" :value="form.time" @change="e=>form.time=e.detail.value"><view class="input">{{form.time}}</view></picker>
    <text class="label">剂量 / 内容</text><input class="input" v-model="form.dosage" placeholder="例如：1片"/>
    <text class="label">未确认多久通知家人</text><picker :range="notifyOptions" @change="e=>notifyIndex=e.detail.value"><view class="input">{{notifyOptions[notifyIndex]}}</view></picker>
    <view class="switch-row"><text>启用提醒</text><switch :checked="form.enabled" color="#326a53" @change="e=>form.enabled=e.detail.value"/></view>
    <button class="save" @click="save">保存提醒</button>
  </view>
</view>
</template>
<script setup>
import { reactive, ref } from 'vue'
const types=['用药提醒','吃饭提醒','测量提醒','复诊提醒','其他']
const typeIndex=ref(0)
const notifyOptions=['不通知','15分钟','30分钟','60分钟']
const notifyIndex=ref(2)
const form=reactive({title:'降压药',time:'08:00',dosage:'1片',enabled:true})
const save=()=>{uni.showToast({title:'保存成功',icon:'success'});setTimeout(()=>uni.navigateBack(),500)}
</script>
<style scoped>
.page{min-height:100vh;padding:28rpx;background:#f6f7f3}.card{background:#fff;border-radius:28rpx}.form{padding:28rpx}.label{display:block;margin:22rpx 0 10rpx;font-size:23rpx;color:#6f7b74}.input{height:82rpx;line-height:82rpx;padding:0 22rpx;border-radius:18rpx;background:#f5f7f3;font-size:25rpx}.switch-row{display:flex;justify-content:space-between;align-items:center;margin-top:26rpx}.save{margin-top:35rpx;height:82rpx;line-height:82rpx;border-radius:20rpx;background:#326a53;color:#fff;font-size:28rpx;font-weight:900}
</style>
