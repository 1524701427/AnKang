"use strict";
const common_vendor = require("../../../common/vendor.js");
const PageHeader = () => "../../../components/PageHeader.js";
const _sfc_main = {
  components: {
    PageHeader
  },
  data() {
    return {
      categories: [
        {
          name: "健康监测",
          icon: "❤️",
          className: "green"
        },
        {
          name: "护理用品",
          icon: "🧴",
          className: "orange"
        },
        {
          name: "适老家居",
          icon: "🪑",
          className: "purple"
        },
        {
          name: "安全设备",
          icon: "🔔",
          className: "rose"
        }
      ],
      products: [
        {
          id: 1,
          title: "家用上臂式血压计",
          desc: "大屏显示 · 一键测量",
          tag: "健康监测",
          price: "199",
          icon: "🩺"
        },
        {
          id: 2,
          title: "浴室防滑扶手",
          desc: "免打孔安装 · 承重稳定",
          tag: "居家安全",
          price: "89",
          icon: "🛁"
        },
        {
          id: 3,
          title: "老人夜间感应灯",
          desc: "人体感应 · 柔和夜灯",
          tag: "适老家居",
          price: "49",
          icon: "💡"
        },
        {
          id: 4,
          title: "一周分药盒",
          desc: "早中晚分区 · 大字标识",
          tag: "用药辅助",
          price: "29",
          icon: "💊"
        }
      ]
    };
  },
  methods: {
    showProduct(item) {
      common_vendor.index.showModal({
        title: item.title,
        content: item.desc + "\n测试页面暂未接入真实支付。",
        confirmText: "知道了",
        showCancel: false
      });
    }
  }
};
if (!Array) {
  const _component_PageHeader = common_vendor.resolveComponent("PageHeader");
  _component_PageHeader();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      subtitle: "安康商城"
    }),
    b: common_vendor.f($data.categories, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.n(item.className),
        c: common_vendor.t(item.name),
        d: item.name
      };
    }),
    c: common_vendor.f($data.products, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.tag),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.desc),
        e: common_vendor.t(item.price),
        f: item.id,
        g: common_vendor.o(($event) => $options.showProduct(item), item.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0215a7c9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/mall/index.js.map
