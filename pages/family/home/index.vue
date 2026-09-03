<template>
  <view class="page">

    <!-- 顶部 -->
    <PageHeader
      subtitle="家庭养老助手"
      action="老人端"
      @action="goElder"
    />

    <!-- 欢迎区域 -->
    <view class="hero">
      <text class="eyebrow">
        今日守护
      </text>

      <text class="hero-title">
        妈妈今天状态不错
      </text>

      <text class="hero-desc">
        日常作息基本正常，今天暂时没有需要特别担心的情况
      </text>
    </view>


    <!-- 老人状态卡 -->
    <view class="profile-card">

      <view class="profile-top">

        <view class="avatar">
          王
        </view>

        <view class="profile-info">

          <view class="name-row">
            <text class="person-name">
              王秀兰
            </text>

            <text class="age">
              68岁
            </text>
          </view>

          <view class="status-row">
            <view class="status-dot"></view>

            <text class="status-text">
              当前在家 · 状态正常
            </text>
          </view>

          <text class="last-active">
            最近活动：10分钟前
          </text>

        </view>

        <view
          class="contact-btn"
          @tap="contactElder"
        >
          <text class="contact-icon">
            📹
          </text>

          <text class="contact-text">
            联系
          </text>
        </view>

      </view>


      <!-- 今日几个关键状态 -->
      <view class="profile-bottom">

        <view class="profile-stat">
          <text class="profile-stat-value">
            已起床
          </text>

          <text class="profile-stat-label">
            今日状态
          </text>
        </view>

        <view class="profile-divider"></view>

        <view class="profile-stat">
          <text class="profile-stat-value">
            2 / 3
          </text>

          <text class="profile-stat-label">
            今日用药
          </text>
        </view>

        <view class="profile-divider"></view>

        <view class="profile-stat">
          <text class="profile-stat-value">
            3,280
          </text>

          <text class="profile-stat-label">
            今日步数
          </text>
        </view>

      </view>

    </view>


    <!-- 变化提醒 -->
    <view class="notice-card">

      <view class="notice-icon">
        ☀️
      </view>

      <view class="notice-content">

        <view class="notice-head">
          <text class="notice-label">
            今日关注
          </text>

          <text class="notice-tag">
            轻微变化
          </text>
        </view>

        <text class="notice-title">
          上午活动比平时少了一些
        </text>

        <text class="notice-desc">
          妈妈已经正常起床、吃早餐和服药，目前在家。午饭后可以打个电话问候一下。
        </text>

      </view>

    </view>


    <!-- 健康概览 -->
    <view class="section-head">

      <view>
        <text class="section-eyebrow">
          今日数据
        </text>

        <text class="section-title">
          妈妈的身体和生活
        </text>
      </view>

      <text
        class="more"
        @tap="goHealth"
      >
        查看全部 →
      </text>

    </view>


    <view class="metrics-grid">

      <view
        v-for="item in metrics"
        :key="item.name"
        class="metric-card"
      >

        <view class="metric-top">

          <view
            class="metric-icon"
            :class="item.className"
          >
            {{ item.icon }}
          </view>

          <text class="metric-name">
            {{ item.name }}
          </text>

        </view>


        <text class="metric-value">
          {{ item.value }}
        </text>


        <view class="metric-bottom">

          <view
            class="metric-dot"
            :class="{ warning: item.warning }"
          ></view>

          <text
            class="metric-desc"
            :class="{ warningText: item.warning }"
          >
            {{ item.desc }}
          </text>

        </view>

      </view>

    </view>


    <!-- 下一次提醒 -->
    <view class="next-card">

      <view class="next-left">

        <view class="next-icon">
          💊
        </view>

        <view>

          <text class="next-label">
            下一次提醒
          </text>

          <text class="next-title">
            20:00 · 阿托伐他汀
          </text>

          <text class="next-desc">
            1片 · 如果30分钟没有确认，会通知你
          </text>

        </view>

      </view>

      <text
        class="next-action"
        @tap="goCare"
      >
        管理
      </text>

    </view>


    <!-- 今日动态 -->
    <view class="timeline-card">

      <view class="timeline-header">

        <view>
          <text class="section-eyebrow">
            今日动态
          </text>

          <text class="section-title">
            妈妈的一天
          </text>
        </view>

        <view class="today-tag">
          今天
        </view>

      </view>


      <view class="timeline">

        <view
          v-for="(item, index) in timeline"
          :key="item.time"
          class="timeline-item"
        >

          <view class="timeline-time">
            {{ item.time }}
          </view>


          <view class="timeline-axis">

            <view
              class="timeline-dot"
              :class="{ current: index === timeline.length - 1 }"
            ></view>

            <view
              v-if="index !== timeline.length - 1"
              class="timeline-line"
            ></view>

          </view>


          <view class="timeline-content">

            <text class="timeline-title">
              {{ item.title }}
            </text>

            <text class="timeline-desc">
              {{ item.desc }}
            </text>

          </view>

        </view>

      </view>

    </view>


    <!-- 小安陪伴 -->
    <view class="companion-card">

      <view class="companion-icon">
        🌿
      </view>

      <view class="companion-content">

        <text class="companion-label">
          今日陪伴
        </text>

        <text class="companion-title">
          妈妈和小安聊了 18 分钟
        </text>

        <text class="companion-desc">
          “今天聊起阳台上的月季，妈妈心情挺好的。”
        </text>

      </view>

    </view>


    <!-- 快捷功能 -->
    <view class="section-head service-head">

      <view>
        <text class="section-eyebrow">
          家庭照护
        </text>

        <text class="section-title">
          常用服务
        </text>
      </view>

    </view>


    <view class="quick-grid">

      <view
        class="quick-card"
        @tap="goCare"
      >

        <view class="quick-icon green">
          💊
        </view>

        <text class="quick-title">
          提醒管理
        </text>

        <text class="quick-desc">
          用药、吃饭、复诊
        </text>

      </view>


      <view
        class="quick-card"
        @tap="goHealth"
      >

        <view class="quick-icon rose">
          ❤️
        </view>

        <text class="quick-title">
          健康数据
        </text>

        <text class="quick-desc">
          血压、睡眠、趋势
        </text>

      </view>


      <view
        class="quick-card"
        @tap="goServices"
      >

        <view class="quick-icon orange">
          🏡
        </view>

        <text class="quick-title">
          社区服务
        </text>

        <text class="quick-desc">
          助餐、探访、上门
        </text>

      </view>


      <view
        class="quick-card"
        @tap="goServices"
      >

        <view class="quick-icon purple">
          🤝
        </view>

        <text class="quick-title">
          养老服务
        </text>

        <text class="quick-desc">
          陪诊、护理、短托
        </text>

      </view>

    </view>


    <FamilyTabbar active="home" />

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

  data() {
    return {

      metrics: [

        {
          name: '昨晚睡眠',
          value: '7小时12分',
          desc: '睡眠良好',
          icon: '🌙',
          className: 'sleep',
          warning: false
        },

        {
          name: '今日活动',
          value: '3,280步',
          desc: '比平时稍少',
          icon: '🚶',
          className: 'walk',
          warning: true
        },

        {
          name: '最近心率',
          value: '76次/分',
          desc: '处于正常范围',
          icon: '♥',
          className: 'heart',
          warning: false
        },

        {
          name: '今日用药',
          value: '2 / 3次',
          desc: '下一次 20:00',
          icon: '💊',
          className: 'medicine',
          warning: false
        }

      ],


      timeline: [

        {
          time: '07:21',
          title: '起床了',
          desc: '检测到今天首次活动'
        },

        {
          time: '08:16',
          title: '吃过早餐',
          desc: '早餐时间和平时基本一致'
        },

        {
          time: '08:32',
          title: '完成早晨用药',
          desc: '降压药 1片'
        },

        {
          time: '09:40',
          title: '出门散步',
          desc: '外出约1小时'
        },

        {
          time: '10:55',
          title: '回到家中',
          desc: '当前状态正常'
        }

      ]

    }
  },


  methods: {

    goElder() {

      uni.navigateTo({
        url: '/pages/elder/index'
      })

    },


    contactElder() {

      uni.showActionSheet({

        itemList: [
          '视频通话',
          '语音通话'
        ],

        success(res) {

          if (res.tapIndex === 0) {

            uni.showToast({
              title: '正在发起视频',
              icon: 'none'
            })

          } else {

            uni.showToast({
              title: '正在发起语音通话',
              icon: 'none'
            })

          }

        }

      })

    },


    goHealth() {

      uni.redirectTo({
        url: '/pages/family/health/index'
      })

    },


    goCare() {

      uni.redirectTo({
        url: '/pages/family/care/index'
      })

    },


    goServices() {

      uni.redirectTo({
        url: '/pages/family/services/index'
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
    180rpx;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(231, 241, 231, .9),
      transparent 30%
    ),
    linear-gradient(
      180deg,
      #f8f8f4 0%,
      #f4f3ee 100%
    );

}


/* =========================
   顶部欢迎
========================= */

.hero {

  margin:
    48rpx
    6rpx
    30rpx;

}


.eyebrow,
.section-eyebrow {

  display: block;

  font-size: 22rpx;

  letter-spacing: 2rpx;

  color: #88918b;

}


.hero-title {

  display: block;

  margin-top: 10rpx;

  font-size: 48rpx;

  line-height: 1.2;

  font-weight: 900;

  color: #22382d;

}


.hero-desc {

  display: block;

  margin-top: 16rpx;

  max-width: 620rpx;

  font-size: 24rpx;

  line-height: 1.7;

  color: #78837c;

}


/* =========================
   老人状态
========================= */

.profile-card {

  padding: 30rpx;

  border-radius: 34rpx;

  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f7faf6 100%
    );

  border:
    2rpx solid
    rgba(221, 230, 221, .7);

  box-shadow:
    0 18rpx 50rpx
    rgba(44, 72, 56, .07);

}


.profile-top {

  display: flex;

  align-items: center;

}


.avatar {

  width: 100rpx;
  height: 100rpx;

  flex-shrink: 0;

  border-radius: 30rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      145deg,
      #dce9df,
      #edf3e9
    );

  font-size: 38rpx;

  font-weight: 900;

  color: #315c48;

}


.profile-info {

  flex: 1;

  margin-left: 22rpx;

}


.name-row {

  display: flex;

  align-items: center;

}


.person-name {

  font-size: 31rpx;

  font-weight: 900;

  color: #273b31;

}


.age {

  margin-left: 12rpx;

  padding:
    5rpx
    12rpx;

  border-radius: 14rpx;

  background: #eef3ed;

  font-size: 19rpx;

  color: #738078;

}


.status-row {

  display: flex;

  align-items: center;

  margin-top: 9rpx;

}


.status-dot {

  width: 12rpx;
  height: 12rpx;

  margin-right: 10rpx;

  border-radius: 50%;

  background: #4d9369;

}


.status-text {

  font-size: 23rpx;

  color: #52705f;

}


.last-active {

  display: block;

  margin-top: 7rpx;

  font-size: 21rpx;

  color: #8a928d;

}


.contact-btn {

  width: 98rpx;
  height: 94rpx;

  margin-left: 16rpx;

  flex-shrink: 0;

  border-radius: 27rpx;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  background: #e8f1e9;

}


.contact-icon {

  font-size: 30rpx;

}


.contact-text {

  margin-top: 4rpx;

  font-size: 20rpx;

  font-weight: 700;

  color: #35634e;

}


.profile-bottom {

  display: flex;

  align-items: center;

  justify-content: space-around;

  margin-top: 28rpx;

  padding-top: 24rpx;

  border-top:
    1rpx solid
    #edf0ec;

}


.profile-stat {

  flex: 1;

  text-align: center;

}


.profile-stat-value {

  display: block;

  font-size: 26rpx;

  font-weight: 900;

  color: #30473b;

}


.profile-stat-label {

  display: block;

  margin-top: 6rpx;

  font-size: 19rpx;

  color: #88918b;

}


.profile-divider {

  width: 1rpx;
  height: 50rpx;

  background: #e8ece8;

}


/* =========================
   今日关注
========================= */

.notice-card {

  display: flex;

  margin-top: 20rpx;

  padding: 28rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #fffaf0,
      #fff7e6
    );

  border:
    2rpx solid
    #f3e7c9;

}


.notice-icon {

  width: 74rpx;
  height: 74rpx;

  flex-shrink: 0;

  border-radius: 22rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.7);

  font-size: 38rpx;

}


.notice-content {

  flex: 1;

  margin-left: 20rpx;

}


.notice-head {

  display: flex;

  align-items: center;

  justify-content: space-between;

}


.notice-label {

  font-size: 21rpx;

  color: #98753f;

}


.notice-tag {

  padding:
    5rpx
    12rpx;

  border-radius: 13rpx;

  background: #f6e8c7;

  font-size: 18rpx;

  color: #98713a;

}


.notice-title {

  display: block;

  margin-top: 9rpx;

  font-size: 29rpx;

  font-weight: 900;

  color: #463e31;

}


.notice-desc {

  display: block;

  margin-top: 10rpx;

  font-size: 22rpx;

  line-height: 1.7;

  color: #796f5f;

}


/* =========================
   区域标题
========================= */

.section-head {

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

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


.more {

  padding-bottom: 3rpx;

  font-size: 21rpx;

  color: #52705f;

}


/* =========================
   数据卡片
========================= */

.metrics-grid {

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 16rpx;

}


.metric-card {

  min-height: 194rpx;

  padding: 25rpx;

  border-radius: 28rpx;

  background: #fff;

  box-shadow:
    0 10rpx 34rpx
    rgba(44, 69, 55, .05);

}


.metric-top {

  display: flex;

  align-items: center;

}


.metric-icon {

  width: 52rpx;
  height: 52rpx;

  margin-right: 13rpx;

  border-radius: 17rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 27rpx;

}


.sleep {

  background: #eeeafa;

}


.walk {

  background: #eef3e5;

}


.heart {

  background: #faece9;

  color: #b65c55;

}


.medicine {

  background: #e8f1ea;

}


.metric-name {

  font-size: 21rpx;

  color: #7f8983;

}


.metric-value {

  display: block;

  margin-top: 20rpx;

  font-size: 32rpx;

  line-height: 1;

  font-weight: 900;

  color: #293d33;

}


.metric-bottom {

  display: flex;

  align-items: center;

  margin-top: 14rpx;

}


.metric-dot {

  width: 10rpx;
  height: 10rpx;

  margin-right: 9rpx;

  border-radius: 50%;

  background: #5d9974;

}


.metric-dot.warning {

  background: #d29a47;

}


.metric-desc {

  font-size: 20rpx;

  color: #718078;

}


.warningText {

  color: #a47a3b;

}


/* =========================
   下一提醒
========================= */

.next-card {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 20rpx;

  padding: 26rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #eaf2e9,
      #f5f8f2
    );

}


.next-left {

  display: flex;

  align-items: center;

}


.next-icon {

  width: 74rpx;
  height: 74rpx;

  margin-right: 18rpx;

  border-radius: 22rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.65);

  font-size: 36rpx;

}


.next-label,
.next-title,
.next-desc {

  display: block;

}


.next-label {

  font-size: 19rpx;

  color: #7e8c83;

}


.next-title {

  margin-top: 5rpx;

  font-size: 27rpx;

  font-weight: 900;

  color: #30473b;

}


.next-desc {

  margin-top: 5rpx;

  font-size: 19rpx;

  color: #7c867f;

}


.next-action {

  padding:
    13rpx
    18rpx;

  border-radius: 18rpx;

  background: #fff;

  font-size: 20rpx;

  color: #416651;

}


/* =========================
   时间轴
========================= */

.timeline-card {

  margin-top: 20rpx;

  padding: 30rpx;

  border-radius: 32rpx;

  background: #fff;

  box-shadow:
    0 12rpx 38rpx
    rgba(44,69,55,.05);

}


.timeline-header {

  display: flex;

  justify-content: space-between;

  align-items: flex-start;

}


.today-tag {

  padding:
    7rpx
    15rpx;

  border-radius: 15rpx;

  background: #edf3ed;

  font-size: 19rpx;

  color: #567160;

}


.timeline {

  margin-top: 25rpx;

}


.timeline-item {

  display: flex;

  min-height: 105rpx;

}


.timeline-time {

  width: 90rpx;

  padding-top: 2rpx;

  font-size: 21rpx;

  color: #8a928d;

}


.timeline-axis {

  position: relative;

  width: 34rpx;

  flex-shrink: 0;

}


.timeline-dot {

  position: relative;

  z-index: 2;

  width: 15rpx;
  height: 15rpx;

  margin-top: 5rpx;

  border-radius: 50%;

  background: #8baa96;

}


.timeline-dot.current {

  background: #3d7b59;

  box-shadow:
    0 0 0 8rpx
    rgba(61,123,89,.10);

}


.timeline-line {

  position: absolute;

  left: 7rpx;

  top: 22rpx;

  bottom: -6rpx;

  width: 2rpx;

  background: #e7ece8;

}


.timeline-content {

  flex: 1;

  padding-bottom: 25rpx;

}


.timeline-title {

  display: block;

  font-size: 24rpx;

  font-weight: 800;

  color: #34473d;

}


.timeline-desc {

  display: block;

  margin-top: 6rpx;

  font-size: 20rpx;

  line-height: 1.5;

  color: #88908b;

}


/* =========================
   小安陪伴
========================= */

.companion-card {

  display: flex;

  margin-top: 20rpx;

  padding: 28rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #eef4eb,
      #f8f5ea
    );

}


.companion-icon {

  width: 76rpx;
  height: 76rpx;

  flex-shrink: 0;

  border-radius: 23rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.65);

  font-size: 36rpx;

}


.companion-content {

  flex: 1;

  margin-left: 20rpx;

}


.companion-label,
.companion-title,
.companion-desc {

  display: block;

}


.companion-label {

  font-size: 19rpx;

  color: #7f8c83;

}


.companion-title {

  margin-top: 7rpx;

  font-size: 27rpx;

  font-weight: 900;

  color: #374b40;

}


.companion-desc {

  margin-top: 10rpx;

  font-size: 21rpx;

  line-height: 1.6;

  color: #718078;

}


/* =========================
   快捷功能
========================= */

.service-head {

  margin-top: 38rpx;

}


.quick-grid {

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 16rpx;

}


.quick-card {

  min-height: 180rpx;

  padding: 25rpx;

  border-radius: 28rpx;

  background: #fff;

}


.quick-icon {

  width: 58rpx;
  height: 58rpx;

  border-radius: 18rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 30rpx;

}


.quick-icon.green {

  background: #e5f0e8;

}


.quick-icon.rose {

  background: #f9eae8;

}


.quick-icon.orange {

  background: #f7eedf;

}


.quick-icon.purple {

  background: #eeeafa;

}


.quick-title {

  display: block;

  margin-top: 17rpx;

  font-size: 26rpx;

  font-weight: 900;

  color: #33473c;

}


.quick-desc {

  display: block;

  margin-top: 6rpx;

  font-size: 20rpx;

  color: #838c86;

}

</style>