<template>
  <view class="page">

    <PageHeader subtitle="我的" />


    <view class="profile-card">

      <view class="avatar">
        敏
      </view>

      <view class="profile-content">

        <text class="profile-name">
          小敏
        </text>

        <text class="profile-role">
          王秀兰的女儿 · 主要照护人
        </text>

      </view>

      <text class="edit">
        编辑
      </text>

    </view>


    <!-- 家庭 -->
    <view class="family-summary">

      <view>

        <text class="summary-label">
          我的家庭
        </text>

        <text class="summary-title">
          正在守护 1 位老人
        </text>

      </view>

      <view class="family-avatar">
        王
      </view>

    </view>


    <view class="section-title">
      家庭管理
    </view>


    <view class="menu-card">

      <view
        class="menu-row"
        @tap="goMembers"
      >

        <view class="menu-icon green">
          👨‍👩‍👧
        </view>

        <view class="menu-main">

          <text class="menu-title">
            家庭成员
          </text>

          <text class="menu-desc">
            管理照护人和联系人
          </text>

        </view>

        <text class="arrow">
          →
        </text>

      </view>


      <view class="menu-row">

        <view class="menu-icon blue">
          ⌚
        </view>

        <view class="menu-main">

          <text class="menu-title">
            设备管理
          </text>

          <text class="menu-desc">
            2台设备在线
          </text>

        </view>

        <text class="arrow">
          →
        </text>

      </view>


      <view class="menu-row">

        <view class="menu-icon yellow">
          🔔
        </view>

        <view class="menu-main">

          <text class="menu-title">
            通知设置
          </text>

          <text class="menu-desc">
            异常、用药和紧急通知
          </text>

        </view>

        <text class="arrow">
          →
        </text>

      </view>

    </view>


    <view class="section-title">
      更多
    </view>


    <view class="menu-card">

      <view class="menu-row">

        <view class="menu-icon gray">
          🔐
        </view>

        <view class="menu-main">

          <text class="menu-title">
            隐私与授权
          </text>

        </view>

        <text class="arrow">
          →
        </text>

      </view>


      <view class="menu-row">

        <view class="menu-icon gray">
          ❓
        </view>

        <view class="menu-main">

          <text class="menu-title">
            帮助与反馈
          </text>

        </view>

        <text class="arrow">
          →
        </text>

      </view>


      <view class="menu-row">

        <view class="menu-icon gray">
          🌿
        </view>

        <view class="menu-main">

          <text class="menu-title">
            关于安康
          </text>

          <text class="menu-desc">
            让陪伴离父母更近一点
          </text>

        </view>

        <text class="arrow">
          →
        </text>

      </view>

    </view>


    <view class="version">
      安康家庭养老助手 · v1.0
    </view>


    <FamilyTabbar active="mine" />

  </view>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue'
import FamilyTabbar from '@/components/FamilyTabbar.vue'

export default {

  components: {
    PageHeader,
    FamilyTabbar
  },


  methods: {

    goMembers() {

      uni.navigateTo({
        url: '/pages/family/member/index'
      })

    }

  }

}
</script>


<style scoped>

.page {

  min-height: 100vh;

  padding:
    34rpx
    28rpx
    180rpx;

  background:
    linear-gradient(
      180deg,
      #f8f8f4,
      #f3f3ee
    );

}


.profile-card {

  display: flex;

  align-items: center;

  margin-top: 46rpx;

  padding: 30rpx;

  border-radius: 32rpx;

  background: #fff;

}


.avatar {

  width: 96rpx;
  height: 96rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 30rpx;

  background:
    linear-gradient(
      145deg,
      #dce9df,
      #edf3e9
    );

  font-size: 36rpx;

  font-weight: 900;

  color: #315c48;

}


.profile-content {

  flex: 1;

  margin-left: 20rpx;

}


.profile-name,
.profile-role {

  display: block;

}


.profile-name {

  font-size: 34rpx;

  font-weight: 900;

  color: #2b4035;

}


.profile-role {

  margin-top: 7rpx;

  font-size: 21rpx;

  color: #808a83;

}


.edit {

  padding:
    8rpx
    15rpx;

  border-radius: 15rpx;

  background: #f1f4ef;

  font-size: 19rpx;

  color: #5b7063;

}


/* 家庭 */

.family-summary {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 20rpx;

  padding: 28rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #e9f2e9,
      #f8faf5
    );

}


.summary-label,
.summary-title {

  display: block;

}


.summary-label {

  font-size: 20rpx;

  color: #7b867f;

}


.summary-title {

  margin-top: 6rpx;

  font-size: 28rpx;

  font-weight: 900;

  color: #30473a;

}


.family-avatar {

  width: 70rpx;
  height: 70rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 22rpx;

  background: rgba(255,255,255,.75);

  font-size: 27rpx;

  font-weight: 900;

  color: #456450;

}


/* 菜单 */

.section-title {

  margin:
    38rpx
    6rpx
    15rpx;

  font-size: 25rpx;

  font-weight: 900;

  color: #46594e;

}


.menu-card {

  padding:
    0
    26rpx;

  border-radius: 30rpx;

  background: #fff;

}


.menu-row {

  display: flex;

  align-items: center;

  min-height: 116rpx;

  border-bottom:
    1rpx solid
    #edf0ec;

}


.menu-row:last-child {

  border-bottom: none;

}


.menu-icon {

  width: 62rpx;
  height: 62rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 19rpx;

  font-size: 28rpx;

}


.menu-icon.green {

  background: #e7f0e8;

}


.menu-icon.blue {

  background: #e8f0f5;

}


.menu-icon.yellow {

  background: #f6eddf;

}


.menu-icon.gray {

  background: #f1f2ef;

}


.menu-main {

  flex: 1;

  margin-left: 18rpx;

}


.menu-title,
.menu-desc {

  display: block;

}


.menu-title {

  font-size: 25rpx;

  font-weight: 800;

  color: #34473d;

}


.menu-desc {

  margin-top: 6rpx;

  font-size: 19rpx;

  color: #8a928d;

}


.arrow {

  font-size: 27rpx;

  color: #959c97;

}


.version {

  margin-top: 34rpx;

  text-align: center;

  font-size: 18rpx;

  color: #a0a6a1;

}

</style>