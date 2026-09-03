<template>
<view class="page">
<text class="title">添加长辈</text>
<text class="tip">填写资料后生成邀请，老人点击即可绑定岁邻</text>
<view class="card">
<input v-model="form.name" placeholder="长辈姓名" />
<picker :range="relations" @change="e=>form.relation=relations[e.detail.value]">
<view>{{form.relation || '选择关系'}}</view>
</picker>
<input v-model="form.birthday" placeholder="出生日期 YYYY-MM-DD" />
<input v-model="form.phone" placeholder="联系电话" />
<button @tap="save">保存并邀请</button>
</view>
</view>
</template>
<script>
export default {
 data(){return {relations:['爸爸','妈妈','爷爷','奶奶'],form:{relation:''}}},
 methods:{
 save(){
  if(!this.form.name||!this.form.birthday)return uni.showToast({title:'请完善资料',icon:'none'})
  const list=uni.getStorageSync('suilin_elders')||[]
  list.push({...this.form,id:Date.now(),bindStatus:'waiting'})
  uni.setStorageSync('suilin_elders',list)
  uni.showToast({title:'已生成邀请'})
  setTimeout(()=>uni.navigateBack(),500)
 }
 }
}
</script>
<style scoped>
.page{padding:40rpx;background:#fff9f2;min-height:100vh}.title{font-size:42rpx;font-weight:900}.tip{display:block;margin:15rpx 0;color:#987}.card{background:white;border-radius:30rpx;padding:30rpx}.card input,.card view{padding:28rpx;background:#fff7ef;margin-bottom:20rpx;border-radius:18rpx}.card button{background:#2fa99a;color:#fff}
</style>