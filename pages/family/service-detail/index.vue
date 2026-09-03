<template>
  <view class="page">

    <PageHeader subtitle="上门照护" />

    <view class="hero">

      <text class="eyebrow">
        安康照护
      </text>

      <text class="hero-title">
        专业服务人员，上门帮父母做难做的事
      </text>

      <text class="hero-desc">
        陪诊、助浴、护理、康复、家政等服务可由家人远程预约
      </text>

    </view>


    <view class="location-card">

      <view class="location-icon">
        📍
      </view>

      <view class="location-main">

        <text class="location-label">
          服务地址
        </text>

        <text class="location-title">
          王秀兰 · 家中
        </text>

        <text class="location-desc">
          紫花社区 · 服务范围内
        </text>

      </view>

      <text class="change">
        修改
      </text>

    </view>


    <view class="section-head">
      <text class="eyebrow">
        服务项目
      </text>

      <text class="section-title">
        需要什么帮助
      </text>
    </view>


    <view
      v-for="item in services"
      :key="item.id"
      class="service-card"
      @tap="selectService(item)"
    >

      <view
        class="service-icon"
        :class="item.className"
      >
        {{ item.icon }}
      </view>

      <view class="service-main">

        <view class="service-head">

          <text class="service-title">
            {{ item.title }}
          </text>

          <text class="price">
            ¥{{ item.price }}起
          </text>

        </view>

        <text class="service-desc">
          {{ item.desc }}
        </text>

        <view class="tags">

          <text
            v-for="tag in item.tags"
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </text>

        </view>

      </view>

    </view>


    <view class="safe-card">

      <view class="safe-icon">
        ✓
      </view>

      <view>

        <text class="safe-title">
          安康服务保障
        </text>

        <text class="safe-desc">
          服务人员实名认证 · 服务过程记录 · 家属可查看状态
        </text>

      </view>

    </view>

  </view>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue'

export default {

  components: {
    PageHeader
  },

  data() {

    return {

      services: [
        {
          id: 1,
          icon: '🧑‍⚕️',
          title: '陪诊服务',
          desc: '陪同就医、排队取号、检查引导、取药和就医记录',
          price: '88',
          tags: [
            '2小时起',
            '医院陪同'
          ],
          className: 'green'
        },
        {
          id: 2,
          icon: '🛁',
          title: '上门助浴',
          desc: '专业护理人员上门协助老人安全洗浴',
          price: '128',
          tags: [
            '专业护理',
            '安全评估'
          ],
          className: 'blue'
        },
        {
          id: 3,
          icon: '🩺',
          title: '基础护理',
          desc: '血压测量、健康观察、基础护理和照护指导',
          price: '98',
          tags: [
            '护士上门',
            '健康记录'
          ],
          className: 'rose'
        },
        {
          id: 4,
          icon: '🧹',
          title: '生活照料',
          desc: '简单家务、整理房间、陪伴和日常生活协助',
          price: '68',
          tags: [
            '2小时',
            '生活协助'
          ],
          className: 'orange'
        }
      ]

    }

  },


  methods: {

    selectService(item) {

      uni.showModal({

        title: item.title,

        content:
          '参考价格：¥' +
          item.price +
          '起\n\n测试页面暂未接入真实预约。',

        confirmText: '预约测试',

        success(res) {

          if (res.confirm) {

            uni.showToast({
              title: '已提交测试预约',
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
    60rpx;

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
    28rpx;

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

  font-size: 43rpx;

  line-height: 1.35;

  font-weight: 900;

  color: #263a30;

}


.hero-desc {

  display: block;

  margin-top: 14rpx;

  font-size: 23rpx;

  line-height: 1.7;

  color: #7a857e;

}


/* 地址 */

.location-card {

  display: flex;

  align-items: center;

  padding: 26rpx;

  border-radius: 30rpx;

  background:
    linear-gradient(
      135deg,
      #e9f2e9,
      #f8faf5
    );

}


.location-icon {

  width: 70rpx;
  height: 70rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 21rpx;

  background: rgba(255,255,255,.7);

  font-size: 32rpx;

}


.location-main {

  flex: 1;

  margin-left: 18rpx;

}


.location-label,
.location-title,
.location-desc {

  display: block;

}


.location-label {

  font-size: 18rpx;

  color: #7b877f;

}


.location-title {

  margin-top: 5rpx;

  font-size: 26rpx;

  font-weight: 900;

  color: #32483b;

}


.location-desc {

  margin-top: 5rpx;

  font-size: 19rpx;

  color: #79847d;

}


.change {

  font-size: 20rpx;

  color: #55705f;

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


/* 服务 */

.service-card {

  display: flex;

  margin-bottom: 16rpx;

  padding: 26rpx;

  border-radius: 30rpx;

  background: #fff;

}


.service-icon {

  width: 82rpx;
  height: 82rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 24rpx;

  font-size: 37rpx;

}


.green {
  background: #e7f0e8;
}


.blue {
  background: #e8f0f5;
}


.rose {
  background: #f8e9e7;
}


.orange {
  background: #f5eddf;
}


.service-main {

  flex: 1;

  margin-left: 20rpx;

}


.service-head {

  display: flex;

  align-items: center;

  justify-content: space-between;

}


.service-title {

  font-size: 27rpx;

  font-weight: 900;

  color: #34473d;

}


.price {

  font-size: 23rpx;

  font-weight: 900;

  color: #9a6d47;

}


.service-desc {

  display: block;

  margin-top: 8rpx;

  font-size: 20rpx;

  line-height: 1.6;

  color: #828c85;

}


.tags {

  display: flex;

  gap: 10rpx;

  margin-top: 12rpx;

}


.tag {

  padding:
    5rpx
    10rpx;

  border-radius: 11rpx;

  background: #f2f4f0;

  font-size: 17rpx;

  color: #6e7b73;

}


/* 保障 */

.safe-card {

  display: flex;

  margin-top: 22rpx;

  padding: 26rpx;

  border-radius: 28rpx;

  background:
    linear-gradient(
      135deg,
      #f6f1e7,
      #fbfaf6
    );

}


.safe-icon {

  width: 62rpx;
  height: 62rpx;

  margin-right: 18rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 19rpx;

  background: rgba(255,255,255,.75);

  font-size: 27rpx;

  font-weight: 900;

  color: #4f775f;

}


.safe-title,
.safe-desc {

  display: block;

}


.safe-title {

  font-size: 24rpx;

  font-weight: 900;

  color: #4c453a;

}


.safe-desc {

  margin-top: 7rpx;

  font-size: 19rpx;

  line-height: 1.6;

  color: #837a6d;

}

</style>