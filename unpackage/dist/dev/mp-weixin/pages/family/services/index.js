"use strict";
const common_vendor = require("../../../common/vendor.js");
const PageHeader = () => "../../../components/PageHeader.js";
const FamilyTabbar = () => "../../../components/FamilyTabbar.js";
const _sfc_main = {
  components: {
    PageHeader,
    FamilyTabbar
  },
  data() {
    return {
      services: [
        {
          icon: "🏘️",
          title: "社区服务",
          desc: "助餐、活动、志愿探访和社区照护",
          link: "进入社区",
          className: "green",
          type: "community"
        },
        {
          icon: "🛍️",
          title: "安康商城",
          desc: "适老家居、健康用品和安全设备",
          link: "逛逛商城",
          className: "orange",
          type: "mall"
        },
        {
          icon: "🤝",
          title: "上门照护",
          desc: "助浴、护理、康复和生活照料",
          link: "查看服务",
          className: "rose",
          type: "care"
        },
        {
          icon: "🏡",
          title: "养老机构",
          desc: "查询附近养老院、护理院和短托机构",
          link: "查看机构",
          className: "purple",
          type: "institution"
        }
      ]
    };
  },
  methods: {
    /**
     * 联系社区
     */
    contactCommunity() {
      common_vendor.index.showActionSheet({
        itemList: [
          "电话联系",
          "在线咨询"
        ],
        success(res) {
          if (res.tapIndex === 0) {
            common_vendor.index.showModal({
              title: "联系社区",
              content: "紫花社区守护站\n测试电话：0571-88886666",
              confirmText: "知道了",
              showCancel: false
            });
          }
          if (res.tapIndex === 1) {
            common_vendor.index.showToast({
              title: "正在进入在线咨询",
              icon: "none"
            });
          }
        }
      });
    },
    /**
     * 社区服务测试
     */
    openCommunity() {
      common_vendor.index.showActionSheet({
        itemList: [
          "社区助餐",
          "老人活动",
          "志愿者探访",
          "健康服务",
          "上门关怀"
        ],
        success(res) {
          const list = [
            "社区助餐",
            "老人活动",
            "志愿者探访",
            "健康服务",
            "上门关怀"
          ];
          common_vendor.index.showModal({
            title: list[res.tapIndex],
            content: "这是社区服务测试功能，后续可以单独增加社区服务详情页。",
            confirmText: "知道了",
            showCancel: false
          });
        }
      });
    },
    /**
     * 四大服务入口
     */
    openService(item) {
      if (item.type === "mall") {
        common_vendor.index.navigateTo({
          url: "/pages/family/mall/index"
        });
        return;
      }
      if (item.type === "care") {
        common_vendor.index.navigateTo({
          url: "/pages/family/service-detail/index"
        });
        return;
      }
      if (item.type === "institution") {
        common_vendor.index.navigateTo({
          url: "/pages/family/institution/index"
        });
        return;
      }
      if (item.type === "community") {
        this.openCommunity();
      }
    },
    /**
     * 推荐：陪诊
     */
    openCareService() {
      common_vendor.index.navigateTo({
        url: "/pages/family/service-detail/index"
      });
    },
    /**
     * 推荐：社区助餐
     */
    openMealService() {
      common_vendor.index.showModal({
        title: "社区助餐",
        content: "紫花社区老年助餐点\n\n今日午餐：\n清蒸鱼 + 青菜 + 番茄蛋汤 + 米饭\n\n老人优惠价：¥12\n支持配送到家。",
        confirmText: "测试下单",
        cancelText: "取消",
        success(res) {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "测试订单已提交",
              icon: "success"
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _component_PageHeader = common_vendor.resolveComponent("PageHeader");
  const _component_FamilyTabbar = common_vendor.resolveComponent("FamilyTabbar");
  (_component_PageHeader + _component_FamilyTabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      subtitle: "养老服务"
    }),
    b: common_vendor.o((...args) => $options.contactCommunity && $options.contactCommunity(...args), "5a"),
    c: common_vendor.o((...args) => $options.openCommunity && $options.openCommunity(...args), "17"),
    d: common_vendor.f($data.services, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.n(item.className),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.desc),
        e: common_vendor.t(item.link),
        f: item.title,
        g: common_vendor.o(($event) => $options.openService(item), item.title)
      };
    }),
    e: common_vendor.o((...args) => $options.openCareService && $options.openCareService(...args), "aa"),
    f: common_vendor.o((...args) => $options.openMealService && $options.openMealService(...args), "d4"),
    g: common_vendor.p({
      active: "services"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f017fee7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/services/index.js.map
