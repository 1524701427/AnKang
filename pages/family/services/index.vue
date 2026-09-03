<template>
  <view class="page">

    <PageHeader subtitle="养老服务" />

    <view class="hero">

      <text class="eyebrow">
        安康服务
      </text>

      <text class="hero-title">
        需要的时候，附近有人能帮忙
      </text>

      <text class="hero-desc">
        社区、上门服务、适老用品和养老机构都可以在这里找到
      </text>

    </view>


    <!-- 社区 -->
    <view class="community-card">

      <view class="community-top">

        <view class="community-icon">
          🏘️
        </view>

        <view class="community-main">

          <text class="community-label">
            妈妈所在社区
          </text>

          <text class="community-name">
            紫花社区守护站
          </text>

          <text class="community-distance">
            距离妈妈家 420 米
          </text>

        </view>

        <view class="online">
          8人在线
        </view>

      </view>


      <view class="community-actions">

        <view
          class="community-btn"
          @tap="contactCommunity"
        >
          联系社区
        </view>

        <view
          class="community-btn light"
          @tap="openCommunity"
        >
          查看服务
        </view>

      </view>

    </view>


    <!-- 服务入口 -->
    <view class="section-head">

      <view>

        <text class="eyebrow">
          常用服务
        </text>

        <text class="section-title">
          需要什么帮助
        </text>

      </view>

    </view>


    <view class="services-grid">

      <view
        v-for="item in services"
        :key="item.title"
        class="service-card"
        @tap="openService(item)"
      >

        <view
          class="service-icon"
          :class="item.className"
        >
          {{ item.icon }}
        </view>

        <text class="service-title">
          {{ item.title }}
        </text>

        <text class="service-desc">
          {{ item.desc }}
        </text>

        <text class="service-link">
          {{ item.link }} →
        </text>

      </view>

    </view>


    <!-- 推荐服务 -->
    <view class="section-head">

      <view>

        <text class="eyebrow">
          为妈妈推荐
        </text>

        <text class="section-title">
          最近可能用得上
        </text>

      </view>

    </view>


    <!-- 陪诊 -->
    <view
      class="recommend-card"
      @tap="openCareService"
    >

      <view class="recommend-img">
        🧑‍⚕️
      </view>

      <view class="recommend-content">

        <text class="recommend-tag">
          陪诊服务
        </text>

        <text class="recommend-title">
          下周复诊，可预约陪诊人员
        </text>

        <text class="recommend-desc">
          陪同就医、排队取号、检查引导和取药
        </text>

        <view class="recommend-bottom">

          <text class="recommend-price">
            ¥88 起
          </text>

          <text class="recommend-link">
            去预约 →
          </text>

        </view>

      </view>

    </view>


    <!-- 助餐 -->
    <view
      class="recommend-card second"
      @tap="openMealService"
    >

      <view class="recommend-img meal">
        🍱
      </view>

      <view class="recommend-content">

        <text class="recommend-tag">
          社区助餐
        </text>

        <text class="recommend-title">
          紫花社区老年助餐点
        </text>

        <text class="recommend-desc">
          午餐配送到家，支持老人优惠
        </text>

        <view class="recommend-bottom">

          <text class="recommend-price">
            ¥12 起
          </text>

          <text class="recommend-link">
            查看菜单 →
          </text>

        </view>

      </view>

    </view>


    <!-- 服务保障 -->
    <view class="safe-card">

      <view class="safe-icon">
        ✓
      </view>

      <view class="safe-content">

        <text class="safe-title">
          安康服务保障
        </text>

        <text class="safe-desc">
          服务人员实名认证 · 服务过程可追踪 · 家属可查看订单和服务状态
        </text>

      </view>

    </view>


    <FamilyTabbar active="services" />

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

      services: [

        {
          icon: '🏘️',
          title: '社区服务',
          desc: '助餐、活动、志愿探访和社区照护',
          link: '进入社区',
          className: 'green',
          type: 'community'
        },

        {
          icon: '🛍️',
          title: '安康商城',
          desc: '适老家居、健康用品和安全设备',
          link: '逛逛商城',
          className: 'orange',
          type: 'mall'
        },

        {
          icon: '🤝',
          title: '上门照护',
          desc: '助浴、护理、康复和生活照料',
          link: '查看服务',
          className: 'rose',
          type: 'care'
        },

        {
          icon: '🏡',
          title: '养老机构',
          desc: '查询附近养老院、护理院和短托机构',
          link: '查看机构',
          className: 'purple',
          type: 'institution'
        }

      ]

    }

  },


  methods: {

    /**
     * 联系社区
     */
    contactCommunity() {

      uni.showActionSheet({

        itemList: [
          '电话联系',
          '在线咨询'
        ],

        success(res) {

          if (res.tapIndex === 0) {

            uni.showModal({
              title: '联系社区',
              content: '紫花社区守护站\n测试电话：0571-88886666',
              confirmText: '知道了',
              showCancel: false
            })

          }

          if (res.tapIndex === 1) {

            uni.showToast({
              title: '正在进入在线咨询',
              icon: 'none'
            })

          }

        }

      })

    },


    /**
     * 社区服务测试
     */
    openCommunity() {

      uni.showActionSheet({

        itemList: [
          '社区助餐',
          '老人活动',
          '志愿者探访',
          '健康服务',
          '上门关怀'
        ],

        success(res) {

          const list = [
            '社区助餐',
            '老人活动',
            '志愿者探访',
            '健康服务',
            '上门关怀'
          ]

          uni.showModal({
            title: list[res.tapIndex],
            content: '这是社区服务测试功能，后续可以单独增加社区服务详情页。',
            confirmText: '知道了',
            showCancel: false
          })

        }

      })

    },


    /**
     * 四大服务入口
     */
    openService(item) {

      if (item.type === 'mall') {

        uni.navigateTo({
          url: '/pages/family/mall/index'
        })

        return
      }


      if (item.type === 'care') {

        uni.navigateTo({
          url: '/pages/family/service-detail/index'
        })

        return
      }


      if (item.type === 'institution') {

        uni.navigateTo({
          url: '/pages/family/institution/index'
        })

        return
      }


      if (item.type === 'community') {

        this.openCommunity()

      }

    },


    /**
     * 推荐：陪诊
     */
    openCareService() {

      uni.navigateTo({
        url: '/pages/family/service-detail/index'
      })

    },


    /**
     * 推荐：社区助餐
     */
    openMealService() {

      uni.showModal({

        title: '社区助餐',

        content:
          '紫花社区老年助餐点\n\n' +
          '今日午餐：\n' +
          '清蒸鱼 + 青菜 + 番茄蛋汤 + 米饭\n\n' +
          '老人优惠价：¥12\n' +
          '支持配送到家。',

        confirmText: '测试下单',

        cancelText: '取消',

        success(res) {

          if (res.confirm) {

            uni.showToast({
              title: '测试订单已提交',
              icon: 'success'
            })

          }

        }

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
      rgba(229, 240, 230, .8),
      transparent 28%
    ),
    linear-gradient(
      180deg,
      #f8f8f4,
      #f3f3ee
    );

}


/* =========================
   Hero
========================= */

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

  max-width: 650rpx;

  font-size: 46rpx;

  font-weight: 900;

  line-height: 1.3;

  color: #24392e;

}


.hero-desc {

  display: block;

  margin-top: 15rpx;

  font-size: 23rpx;

  line-height: 1.7;

  color: #79847d;

}


/* =========================
   社区
========================= */

.community-card {

  padding: 30rpx;

  border-radius: 34rpx;

  background:
    linear-gradient(
      135deg,
      #e7f1e7,
      #f8faf5
    );

  border:
    2rpx solid
    rgba(219,231,219,.8);

  box-shadow:
    0 14rpx 38rpx
    rgba(49,79,62,.06);

}


.community-top {

  display: flex;

  align-items: center;

}


.community-icon {

  width: 88rpx;
  height: 88rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 26rpx;

  background: rgba(255,255,255,.72);

  font-size: 40rpx;

}


.community-main {

  flex: 1;

  margin-left: 20rpx;

}


.community-label,
.community-name,
.community-distance {

  display: block;

}


.community-label {

  font-size: 19rpx;

  color: #77847b;

}


.community-name {

  margin-top: 5rpx;

  font-size: 29rpx;

  font-weight: 900;

  color: #30473a;

}


.community-distance {

  margin-top: 6rpx;

  font-size: 20rpx;

  color: #79847d;

}


.online {

  padding:
    7rpx
    13rpx;

  border-radius: 15rpx;

  background: #fff;

  font-size: 18rpx;

  color: #4f735d;

}


.community-actions {

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 14rpx;

  margin-top: 25rpx;

}


.community-btn {

  height: 70rpx;

  line-height: 70rpx;

  text-align: center;

  border-radius: 20rpx;

  background: #35674f;

  color: #fff;

  font-size: 22rpx;

  font-weight: 800;

}


.community-btn.light {

  background: rgba(255,255,255,.86);

  color: #436451;

  border:
    1rpx solid
    rgba(210,222,212,.9);

}


/* =========================
   服务入口
========================= */

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


.services-grid {

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 16rpx;

}


.service-card {

  min-height: 230rpx;

  padding: 25rpx;

  border-radius: 28rpx;

  background: #fff;

  border:
    1rpx solid
    rgba(231,234,230,.9);

  box-shadow:
    0 10rpx 30rpx
    rgba(44,69,55,.045);

}


.service-icon {

  width: 62rpx;
  height: 62rpx;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 20rpx;

  font-size: 31rpx;

}


.service-icon.green {
  background: #e7f0e8;
}


.service-icon.orange {
  background: #f6eddf;
}


.service-icon.rose {
  background: #f8e9e7;
}


.service-icon.purple {
  background: #eeeafa;
}


.service-title {

  display: block;

  margin-top: 17rpx;

  font-size: 26rpx;

  font-weight: 900;

  color: #34473d;

}


.service-desc {

  display: block;

  margin-top: 7rpx;

  min-height: 62rpx;

  font-size: 19rpx;

  line-height: 1.6;

  color: #838d86;

}


.service-link {

  display: block;

  margin-top: 12rpx;

  font-size: 20rpx;

  font-weight: 800;

  color: #4e705c;

}


/* =========================
   推荐
========================= */

.recommend-card {

  display: flex;

  align-items: center;

  padding: 26rpx;

  margin-bottom: 16rpx;

  border-radius: 30rpx;

  background: #fff;

  border:
    1rpx solid
    rgba(231,234,230,.9);

  box-shadow:
    0 9rpx 28rpx
    rgba(44,69,55,.04);

}


.recommend-card.second {

  background:
    linear-gradient(
      135deg,
      #faf8f2,
      #fffdf8
    );

}


.recommend-img {

  width: 112rpx;
  height: 112rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 28rpx;

  background: #eef3ed;

  font-size: 52rpx;

}


.recommend-img.meal {

  background: #f6eee1;

}


.recommend-content {

  flex: 1;

  margin-left: 20rpx;

}


.recommend-tag,
.recommend-title,
.recommend-desc {

  display: block;

}


.recommend-tag {

  font-size: 18rpx;

  color: #7d877f;

}


.recommend-title {

  margin-top: 5rpx;

  font-size: 26rpx;

  font-weight: 900;

  color: #34473d;

}


.recommend-desc {

  margin-top: 7rpx;

  font-size: 19rpx;

  line-height: 1.55;

  color: #838c86;

}


.recommend-bottom {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 12rpx;

}


.recommend-price {

  font-size: 23rpx;

  font-weight: 900;

  color: #96724c;

}


.recommend-link {

  font-size: 19rpx;

  font-weight: 800;

  color: #54715f;

}


/* =========================
   服务保障
========================= */

.safe-card {

  display: flex;

  align-items: flex-start;

  margin-top: 22rpx;

  padding: 26rpx;

  border-radius: 28rpx;

  background:
    linear-gradient(
      135deg,
      #f2f5ef,
      #faf9f5
    );

}


.safe-icon {

  width: 62rpx;
  height: 62rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 19rpx;

  background: #fff;

  font-size: 26rpx;

  font-weight: 900;

  color: #4d765e;

}


.safe-content {

  flex: 1;

  margin-left: 17rpx;

}


.safe-title,
.safe-desc {

  display: block;

}


.safe-title {

  font-size: 24rpx;

  font-weight: 900;

  color: #415348;

}


.safe-desc {

  margin-top: 7rpx;

  font-size: 19rpx;

  line-height: 1.65;

  color: #7d8780;

}

</style>