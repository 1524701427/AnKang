<template>
  <view class="page">

    <PageHeader subtitle="照护管理" />


    <view class="hero">

      <text class="eyebrow">
        家庭照护
      </text>

      <text class="hero-title">
        把妈妈每天的事安排好
      </text>

      <text class="hero-desc">
        用药、吃饭、复诊和家人分工，都可以在这里统一安排
      </text>

    </view>


    <!-- 今日照护 -->
    <view class="today-card">

      <view class="today-head">

        <view>

          <text class="today-label">
            今日照护
          </text>

          <text class="today-title">
            3项提醒 · 已完成2项
          </text>

        </view>

        <view class="progress">
          67%
        </view>

      </view>


      <view class="progress-bg">

        <view class="progress-bar"></view>

      </view>

    </view>


    <!-- 提醒管理 -->
    <view class="section-head">

      <view>

        <text class="eyebrow">
          日常提醒
        </text>

        <text class="section-title">
          今天要提醒妈妈
        </text>

      </view>

      <view
        class="add-btn"
        @tap="addReminder"
      >
        ＋ 新增
      </view>

    </view>


    <view class="reminder-list">

      <view
        v-for="item in reminders"
        :key="item.id"
        class="reminder-card"
        @tap="editReminder(item)"
      >

        <view
          class="reminder-icon"
          :class="item.type"
        >
          {{ getIcon(item.type) }}
        </view>

        <view class="reminder-main">

          <view class="reminder-head">

            <text class="reminder-time">
              {{ item.time }}
            </text>

            <view
              class="reminder-status"
              :class="{ off: !item.enabled }"
            >
              {{ item.enabled ? '已开启' : '已关闭' }}
            </view>

          </view>


          <text class="reminder-title">
            {{ item.title }}
          </text>

          <text class="reminder-desc">
            {{ item.dosage }} · {{ item.repeat }}
          </text>

          <text
            v-if="item.notifyAfter"
            class="notify-text"
          >
            {{ item.notifyAfter }}分钟未确认后通知家人
          </text>

        </view>

      </view>

    </view>


    <!-- 家庭分工 -->
    <view class="section-head">

      <view>

        <text class="eyebrow">
          家庭协作
        </text>

        <text class="section-title">
          这周谁负责什么
        </text>

      </view>

    </view>


    <view
      class="family-card"
      @tap="goTasks"
    >

      <view class="family-icon">
        👨‍👩‍👧
      </view>

      <view class="family-content">

        <text class="family-title">
          2项照护任务待处理
        </text>

        <text class="family-desc">
          小敏买药 · 小强陪同复诊
        </text>

      </view>

      <text class="arrow">
        →
      </text>

    </view>


    <view
      class="family-card member"
      @tap="goMembers"
    >

      <view class="family-icon">
        🤝
      </view>

      <view class="family-content">

        <text class="family-title">
          2位家人正在参与照护
        </text>

        <text class="family-desc">
          设置主要照护人和通知联系人
        </text>

      </view>

      <text class="arrow">
        →
      </text>

    </view>


    <!-- 温馨提示 -->
    <view class="care-tip">

      <view class="care-tip-icon">
        🌿
      </view>

      <view>

        <text class="care-tip-title">
          照护小建议
        </text>

        <text class="care-tip-desc">
          妈妈最近作息比较规律，提醒不要设置得太密集，减少打扰会更舒服。
        </text>

      </view>

    </view>


    <FamilyTabbar active="care" />

  </view>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue'
import FamilyTabbar from '@/components/FamilyTabbar.vue'
import { reminders as mockReminders } from '@/store/mock'

export default {

  components: {
    PageHeader,
    FamilyTabbar
  },

  data() {

    return {

      reminders:
        JSON.parse(
          JSON.stringify(
            mockReminders
          )
        )

    }

  },


  methods: {

    getIcon(type) {

      const map = {

        medicine: '💊',

        meal: '🍚',

        measure: '🩺',

        visit: '🏥'

      }

      return map[type] || '⏰'

    },


    addReminder() {

      uni.navigateTo({
        url: '/pages/family/reminder-edit/index'
      })

    },


    editReminder(item) {

      uni.navigateTo({
        url:
          '/pages/family/reminder-edit/index?id='
          + item.id
      })

    },


    goMembers() {

      uni.navigateTo({
        url: '/pages/family/member/index'
      })

    },


    goTasks() {

      uni.navigateTo({
        url: '/pages/family/task/index'
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


.eyebrow {

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


/* 今日进度 */

.today-card {

  padding: 30rpx;

  border-radius: 32rpx;

  background:
    linear-gradient(
      135deg,
      #e9f2e9,
      #f8faf5
    );

}


.today-head {

  display: flex;

  justify-content: space-between;

  align-items: center;

}


.today-label,
.today-title {

  display: block;

}


.today-label {

  font-size: 20rpx;

  color: #78857c;

}


.today-title {

  margin-top: 6rpx;

  font-size: 30rpx;

  font-weight: 900;

  color: #30483a;

}


.progress {

  font-size: 29rpx;

  font-weight: 900;

  color: #477158;

}


.progress-bg {

  height: 12rpx;

  margin-top: 24rpx;

  overflow: hidden;

  border-radius: 10rpx;

  background: rgba(255,255,255,.85);

}


.progress-bar {

  width: 67%;
  height: 100%;

  border-radius: 10rpx;

  background:
    linear-gradient(
      90deg,
      #6f9b7e,
      #47775c
    );

}


/* 标题 */

.section-head {

  display: flex;

  justify-content: space-between;

  align-items: flex-end;

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


.add-btn {

  padding:
    12rpx
    18rpx;

  border-radius: 18rpx;

  background: #e8f0e9;

  font-size: 21rpx;

  color: #37634e;

}


/* 提醒 */

.reminder-card {

  display: flex;

  margin-bottom: 16rpx;

  padding: 26rpx;

  border-radius: 30rpx;

  background: #fff;

  box-shadow:
    0 10rpx 34rpx
    rgba(44,69,55,.05);

}


.reminder-icon {

  width: 78rpx;
  height: 78rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 24rpx;

  font-size: 34rpx;

}


.medicine {

  background: #e6f0e8;

}


.meal {

  background: #f5eddf;

}


.reminder-main {

  flex: 1;

  margin-left: 20rpx;

}


.reminder-head {

  display: flex;

  justify-content: space-between;

  align-items: center;

}


.reminder-time {

  font-size: 25rpx;

  font-weight: 900;

  color: #4e6c5b;

}


.reminder-status {

  padding:
    5rpx
    11rpx;

  border-radius: 12rpx;

  background: #eaf3eb;

  font-size: 17rpx;

  color: #4c755c;

}


.reminder-status.off {

  background: #f1f1ee;

  color: #999;

}


.reminder-title {

  display: block;

  margin-top: 9rpx;

  font-size: 28rpx;

  font-weight: 900;

  color: #304238;

}


.reminder-desc {

  display: block;

  margin-top: 6rpx;

  font-size: 21rpx;

  color: #7b857e;

}


.notify-text {

  display: block;

  margin-top: 7rpx;

  font-size: 19rpx;

  color: #9a8060;

}


/* 家庭协作 */

.family-card {

  display: flex;

  align-items: center;

  margin-bottom: 16rpx;

  padding: 26rpx;

  border-radius: 28rpx;

  background: #fff;

}


.family-card.member {

  background: #faf8f2;

}


.family-icon {

  width: 74rpx;
  height: 74rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 22rpx;

  background: #edf3ed;

  font-size: 34rpx;

}


.family-content {

  flex: 1;

  margin-left: 18rpx;

}


.family-title,
.family-desc {

  display: block;

}


.family-title {

  font-size: 26rpx;

  font-weight: 900;

  color: #34473d;

}


.family-desc {

  margin-top: 6rpx;

  font-size: 20rpx;

  color: #848d87;

}


.arrow {

  font-size: 28rpx;

  color: #89918b;

}


/* 建议 */

.care-tip {

  display: flex;

  margin-top: 20rpx;

  padding: 26rpx;

  border-radius: 28rpx;

  background:
    linear-gradient(
      135deg,
      #f5f1e7,
      #faf9f4
    );

}


.care-tip-icon {

  width: 66rpx;
  height: 66rpx;

  margin-right: 18rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 20rpx;

  background: rgba(255,255,255,.65);

  font-size: 30rpx;

}


.care-tip-title {

  display: block;

  font-size: 24rpx;

  font-weight: 900;

  color: #514b40;

}


.care-tip-desc {

  display: block;

  margin-top: 7rpx;

  font-size: 20rpx;

  line-height: 1.65;

  color: #80786b;

}

</style>