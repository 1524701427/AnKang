<template>
  <view class="page">

    <PageHeader
      subtitle="健康中心"
    />

    <view class="hero">

      <text class="eyebrow">
        健康守护
      </text>

      <text class="hero-title">
        最近身体状态稳定
      </text>

      <text class="hero-desc">
        血压、心率和睡眠都在正常范围内，继续保持现在的生活节奏就好
      </text>

    </view>


    <!-- 今日健康状态 -->
    <view class="health-summary">

      <view class="summary-icon">
        ❤️
      </view>

      <view class="summary-content">

        <text class="summary-label">
          今日健康状态
        </text>

        <text class="summary-title">
          整体正常
        </text>

        <text class="summary-desc">
          暂未发现需要特别关注的数据
        </text>

      </view>

      <view class="summary-badge">
        良好
      </view>

    </view>


    <!-- 健康指标 -->
    <view class="section-head">

      <view>

        <text class="section-eyebrow">
          实时数据
        </text>

        <text class="section-title">
          关键健康指标
        </text>

      </view>

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

        <view class="metric-status">

          <view class="status-dot"></view>

          <text>
            {{ item.desc }}
          </text>

        </view>

      </view>

    </view>


    <!-- 血压趋势 -->
    <view class="trend-card">

      <view class="card-head">

        <view>

          <text class="section-eyebrow">
            近7天趋势
          </text>

          <text class="section-title">
            血压变化
          </text>

        </view>

        <view class="normal-tag">
          基本稳定
        </view>

      </view>


      <view class="chart-area">

        <view
          v-for="item in pressureChart"
          :key="item.day"
          class="chart-item"
        >

          <text class="chart-value">
            {{ item.value }}
          </text>

          <view class="chart-bar-bg">

            <view
              class="chart-bar"
              :style="{ height: item.height + '%' }"
            ></view>

          </view>

          <text class="chart-day">
            {{ item.day }}
          </text>

        </view>

      </view>


      <view class="chart-note">

        <view class="note-dot"></view>

        <text>
          最近一次 128/78 mmHg，处于正常范围
        </text>

      </view>

    </view>


    <!-- 最近记录 -->
    <view class="records-card">

      <view class="card-head">

        <view>

          <text class="section-eyebrow">
            健康记录
          </text>

          <text class="section-title">
            最近测量
          </text>

        </view>

        <text class="more">
          查看更多 →
        </text>

      </view>


      <view
        v-for="item in records"
        :key="item.time"
        class="record-row"
      >

        <view>

          <text class="record-time">
            {{ item.time }}
          </text>

          <text class="record-name">
            {{ item.name }}
          </text>

        </view>

        <view class="record-right">

          <text class="record-value">
            {{ item.value }}
          </text>

          <text class="record-status">
            {{ item.status }}
          </text>

        </view>

      </view>

    </view>


    <!-- 慢病管理 -->
    <view class="disease-card">

      <view class="disease-icon">
        🩺
      </view>

      <view class="disease-content">

        <text class="disease-label">
          慢病管理
        </text>

        <text class="disease-title">
          高血压管理良好
        </text>

        <text class="disease-desc">
          最近7天用药完成率93%，血压整体平稳
        </text>

      </view>

      <text class="disease-link">
        详情 →
      </text>

    </view>


    <FamilyTabbar active="health" />

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
          name: '血压',
          value: '128/78',
          desc: '正常范围',
          icon: '🩸',
          className: 'pressure'
        },

        {
          name: '心率',
          value: '76次/分',
          desc: '状态正常',
          icon: '♥',
          className: 'heart'
        },

        {
          name: '血氧',
          value: '97%',
          desc: '状态正常',
          icon: '💧',
          className: 'oxygen'
        },

        {
          name: '睡眠',
          value: '7小时12分',
          desc: '睡眠良好',
          icon: '🌙',
          className: 'sleep'
        }

      ],

      pressureChart: [

        {
          day: '一',
          value: '132',
          height: 62
        },

        {
          day: '二',
          value: '128',
          height: 52
        },

        {
          day: '三',
          value: '135',
          height: 68
        },

        {
          day: '四',
          value: '130',
          height: 58
        },

        {
          day: '五',
          value: '126',
          height: 48
        },

        {
          day: '六',
          value: '131',
          height: 60
        },

        {
          day: '日',
          value: '128',
          height: 52
        }

      ],

      records: [

        {
          time: '今天 08:10',
          name: '晨起血压',
          value: '128 / 78',
          status: '正常'
        },

        {
          time: '昨天 20:15',
          name: '晚间血压',
          value: '132 / 82',
          status: '正常'
        },

        {
          time: '昨天 08:06',
          name: '晨起血压',
          value: '136 / 84',
          status: '稍高'
        }

      ]

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
      rgba(235, 240, 234, .95),
      transparent 30%
    ),
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
    30rpx;

}


.eyebrow,
.section-eyebrow {

  display: block;

  font-size: 22rpx;

  letter-spacing: 2rpx;

  color: #87918a;

}


.hero-title {

  display: block;

  margin-top: 10rpx;

  font-size: 46rpx;

  font-weight: 900;

  color: #24392e;

}


.hero-desc {

  display: block;

  margin-top: 15rpx;

  font-size: 23rpx;

  line-height: 1.7;

  color: #79847d;

}


/* 健康总结 */

.health-summary {

  display: flex;

  align-items: center;

  padding: 28rpx;

  border-radius: 32rpx;

  background:
    linear-gradient(
      135deg,
      #e9f2e9,
      #f7faf4
    );

  border:
    2rpx solid
    #dfe9df;

}


.summary-icon {

  width: 86rpx;
  height: 86rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 26rpx;

  background: rgba(255,255,255,.65);

  font-size: 38rpx;

}


.summary-content {

  flex: 1;

  margin-left: 20rpx;

}


.summary-label,
.summary-title,
.summary-desc {

  display: block;

}


.summary-label {

  font-size: 20rpx;

  color: #74837a;

}


.summary-title {

  margin-top: 5rpx;

  font-size: 31rpx;

  font-weight: 900;

  color: #2d4738;

}


.summary-desc {

  margin-top: 5rpx;

  font-size: 21rpx;

  color: #78857d;

}


.summary-badge {

  padding:
    8rpx
    16rpx;

  border-radius: 18rpx;

  background: #fff;

  font-size: 20rpx;

  color: #4e775f;

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


/* 健康指标 */

.metrics-grid {

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 16rpx;

}


.metric-card {

  padding: 25rpx;

  min-height: 190rpx;

  border-radius: 28rpx;

  background: #fff;

  box-shadow:
    0 10rpx 34rpx
    rgba(44,69,55,.05);

}


.metric-top {

  display: flex;

  align-items: center;

}


.metric-icon {

  width: 52rpx;
  height: 52rpx;

  margin-right: 12rpx;

  border-radius: 17rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 26rpx;

}


.pressure {

  background: #f9ece8;

}


.heart {

  background: #fae9e8;

  color: #b65c55;

}


.oxygen {

  background: #e8f0f5;

}


.sleep {

  background: #eeeafa;

}


.metric-name {

  font-size: 21rpx;

  color: #7d8881;

}


.metric-value {

  display: block;

  margin-top: 20rpx;

  font-size: 32rpx;

  font-weight: 900;

  color: #293d33;

}


.metric-status {

  display: flex;

  align-items: center;

  margin-top: 13rpx;

  font-size: 20rpx;

  color: #65776c;

}


.status-dot {

  width: 10rpx;
  height: 10rpx;

  margin-right: 8rpx;

  border-radius: 50%;

  background: #599273;

}


/* 趋势 */

.trend-card,
.records-card {

  margin-top: 20rpx;

  padding: 30rpx;

  border-radius: 32rpx;

  background: #fff;

  box-shadow:
    0 12rpx 38rpx
    rgba(44,69,55,.05);

}


.card-head {

  display: flex;

  align-items: flex-start;

  justify-content: space-between;

}


.normal-tag {

  padding:
    7rpx
    14rpx;

  border-radius: 15rpx;

  background: #edf3ed;

  font-size: 19rpx;

  color: #53705e;

}


.chart-area {

  height: 300rpx;

  display: flex;

  align-items: flex-end;

  gap: 12rpx;

  margin-top: 28rpx;

}


.chart-item {

  flex: 1;

  text-align: center;

}


.chart-value {

  display: block;

  margin-bottom: 8rpx;

  font-size: 18rpx;

  color: #77827b;

}


.chart-bar-bg {

  position: relative;

  height: 190rpx;

  overflow: hidden;

  border-radius: 14rpx;

  background: #f0f2ee;

}


.chart-bar {

  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  border-radius:
    14rpx
    14rpx
    0
    0;

  background:
    linear-gradient(
      180deg,
      #8bad98,
      #668a76
    );

}


.chart-day {

  display: block;

  margin-top: 10rpx;

  font-size: 20rpx;

  color: #848d87;

}


.chart-note {

  display: flex;

  align-items: center;

  margin-top: 22rpx;

  padding: 18rpx 20rpx;

  border-radius: 20rpx;

  background: #f6f8f4;

  font-size: 21rpx;

  color: #6f7b73;

}


.note-dot {

  width: 10rpx;
  height: 10rpx;

  margin-right: 10rpx;

  border-radius: 50%;

  background: #4f8c68;

}


/* 最近记录 */

.more {

  font-size: 20rpx;

  color: #53705e;

}


.record-row {

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 23rpx 0;

  border-bottom:
    1rpx solid
    #edf0ec;

}


.record-time,
.record-name,
.record-value,
.record-status {

  display: block;

}


.record-time {

  font-size: 19rpx;

  color: #929993;

}


.record-name {

  margin-top: 5rpx;

  font-size: 24rpx;

  font-weight: 800;

  color: #34473d;

}


.record-right {

  text-align: right;

}


.record-value {

  font-size: 24rpx;

  font-weight: 900;

  color: #31463a;

}


.record-status {

  margin-top: 5rpx;

  font-size: 19rpx;

  color: #598068;

}


/* 慢病 */

.disease-card {

  display: flex;

  align-items: center;

  margin-top: 20rpx;

  padding: 28rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #f6f1e7,
      #fbfaf6
    );

}


.disease-icon {

  width: 74rpx;
  height: 74rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 22rpx;

  background: rgba(255,255,255,.7);

  font-size: 34rpx;

}


.disease-content {

  flex: 1;

  margin-left: 18rpx;

}


.disease-label,
.disease-title,
.disease-desc {

  display: block;

}


.disease-label {

  font-size: 19rpx;

  color: #8d8374;

}


.disease-title {

  margin-top: 5rpx;

  font-size: 26rpx;

  font-weight: 900;

  color: #4b4439;

}


.disease-desc {

  margin-top: 5rpx;

  font-size: 20rpx;

  color: #847b6c;

}


.disease-link {

  font-size: 20rpx;

  color: #756c5d;

}

</style>