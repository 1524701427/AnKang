<template>
  <view class="page">

    <PageHeader subtitle="养老机构" />

    <view class="hero">

      <text class="eyebrow">
        安康养老
      </text>

      <text class="hero-title">
        提前了解附近合适的养老选择
      </text>

      <text class="hero-desc">
        支持养老院、护理院、短托和康养机构查询
      </text>

    </view>


    <view class="filter-row">

      <view class="filter active">
        综合推荐
      </view>

      <view class="filter">
        距离最近
      </view>

      <view class="filter">
        价格
      </view>

      <view class="filter">
        护理能力
      </view>

    </view>


    <view
      v-for="item in institutions"
      :key="item.id"
      class="institution-card"
      @tap="showDetail(item)"
    >

      <view class="institution-image">
        {{ item.icon }}
      </view>


      <view class="institution-main">

        <view class="institution-head">

          <text class="institution-name">
            {{ item.name }}
          </text>

          <text class="distance">
            {{ item.distance }}
          </text>

        </view>


        <view class="rating">

          <text class="score">
            {{ item.score }}
          </text>

          <text class="rating-text">
            分 · {{ item.comment }}
          </text>

        </view>


        <text class="institution-desc">
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


        <view class="institution-bottom">

          <text class="price">
            ¥{{ item.price }}/月起
          </text>

          <text class="beds">
            {{ item.beds }}
          </text>

        </view>

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

      institutions: [
        {
          id: 1,
          name: '紫花社区长者之家',
          distance: '0.8km',
          score: '4.8',
          comment: '96条评价',
          desc: '社区嵌入式养老，适合自理及轻度照护老人',
          tags: [
            '社区养老',
            '助餐',
            '短托'
          ],
          price: '3200',
          beds: '剩余8床',
          icon: '🏡'
        },
        {
          id: 2,
          name: '安颐护理院',
          distance: '2.4km',
          score: '4.7',
          comment: '132条评价',
          desc: '提供专业护理、康复及失能老人照护',
          tags: [
            '专业护理',
            '康复',
            '医养结合'
          ],
          price: '5800',
          beds: '剩余3床',
          icon: '🏥'
        },
        {
          id: 3,
          name: '悦享康养中心',
          distance: '4.1km',
          score: '4.6',
          comment: '88条评价',
          desc: '环境舒适，提供长期养老和短期康养服务',
          tags: [
            '康养',
            '活动丰富',
            '适老环境'
          ],
          price: '4500',
          beds: '可预约参观',
          icon: '🌳'
        }
      ]

    }

  },


  methods: {

    showDetail(item) {

      uni.showModal({

        title: item.name,

        content:
          item.desc +
          '\n\n参考价格：¥' +
          item.price +
          '/月起\n' +
          item.beds,

        confirmText: '预约参观',

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


/* 筛选 */

.filter-row {

  display: flex;

  gap: 12rpx;

  overflow-x: auto;

  margin-bottom: 20rpx;

}


.filter {

  flex-shrink: 0;

  padding:
    12rpx
    18rpx;

  border-radius: 18rpx;

  background: #fff;

  font-size: 20rpx;

  color: #77837b;

}


.filter.active {

  background: #35674f;

  color: #fff;

}


/* 机构 */

.institution-card {

  display: flex;

  margin-bottom: 18rpx;

  padding: 22rpx;

  border-radius: 30rpx;

  background: #fff;

}


.institution-image {

  width: 150rpx;
  height: 170rpx;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 24rpx;

  background:
    linear-gradient(
      145deg,
      #edf3ed,
      #f8faf6
    );

  font-size: 62rpx;

}


.institution-main {

  flex: 1;

  margin-left: 20rpx;

}


.institution-head {

  display: flex;

  justify-content: space-between;

  align-items: flex-start;

}


.institution-name {

  flex: 1;

  font-size: 27rpx;

  font-weight: 900;

  color: #34473d;

}


.distance {

  margin-left: 12rpx;

  font-size: 18rpx;

  color: #949b96;

}


.rating {

  display: flex;

  align-items: center;

  margin-top: 8rpx;

}


.score {

  font-size: 21rpx;

  font-weight: 900;

  color: #bd7d46;

}


.rating-text {

  margin-left: 5rpx;

  font-size: 18rpx;

  color: #8b938e;

}


.institution-desc {

  display: block;

  margin-top: 9rpx;

  font-size: 19rpx;

  line-height: 1.55;

  color: #7f8982;

}


.tags {

  display: flex;

  flex-wrap: wrap;

  gap: 8rpx;

  margin-top: 10rpx;

}


.tag {

  padding:
    4rpx
    9rpx;

  border-radius: 10rpx;

  background: #f1f4ef;

  font-size: 16rpx;

  color: #63766a;

}


.institution-bottom {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 13rpx;

}


.price {

  font-size: 23rpx;

  font-weight: 900;

  color: #9c6945;

}


.beds {

  font-size: 17rpx;

  color: #5d8069;

}

</style>