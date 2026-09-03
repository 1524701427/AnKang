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
      metrics: [
        {
          name: "昨晚睡眠",
          value: "7小时12分",
          desc: "睡眠良好",
          icon: "🌙",
          className: "sleep",
          warning: false
        },
        {
          name: "今日活动",
          value: "3,280步",
          desc: "比平时稍少",
          icon: "🚶",
          className: "walk",
          warning: true
        },
        {
          name: "最近心率",
          value: "76次/分",
          desc: "处于正常范围",
          icon: "♥",
          className: "heart",
          warning: false
        },
        {
          name: "今日用药",
          value: "2 / 3次",
          desc: "下一次 20:00",
          icon: "💊",
          className: "medicine",
          warning: false
        }
      ],
      timeline: [
        {
          time: "07:21",
          title: "起床了",
          desc: "检测到今天首次活动"
        },
        {
          time: "08:16",
          title: "吃过早餐",
          desc: "早餐时间和平时基本一致"
        },
        {
          time: "08:32",
          title: "完成早晨用药",
          desc: "降压药 1片"
        },
        {
          time: "09:40",
          title: "出门散步",
          desc: "外出约1小时"
        },
        {
          time: "10:55",
          title: "回到家中",
          desc: "当前状态正常"
        }
      ]
    };
  },
  methods: {
    goElder() {
      common_vendor.index.navigateTo({
        url: "/pages/elder/index"
      });
    },
    contactElder() {
      common_vendor.index.showActionSheet({
        itemList: [
          "视频通话",
          "语音通话"
        ],
        success(res) {
          if (res.tapIndex === 0) {
            common_vendor.index.showToast({
              title: "正在发起视频",
              icon: "none"
            });
          } else {
            common_vendor.index.showToast({
              title: "正在发起语音通话",
              icon: "none"
            });
          }
        }
      });
    },
    goHealth() {
      common_vendor.index.redirectTo({
        url: "/pages/family/health/index"
      });
    },
    goCare() {
      common_vendor.index.redirectTo({
        url: "/pages/family/care/index"
      });
    },
    goServices() {
      common_vendor.index.redirectTo({
        url: "/pages/family/services/index"
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
    a: common_vendor.o($options.goElder, "fb"),
    b: common_vendor.p({
      subtitle: "家庭养老助手",
      action: "老人端"
    }),
    c: common_vendor.o((...args) => $options.contactElder && $options.contactElder(...args), "bc"),
    d: common_vendor.o((...args) => $options.goHealth && $options.goHealth(...args), "b4"),
    e: common_vendor.f($data.metrics, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.n(item.className),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.value),
        e: item.warning ? 1 : "",
        f: common_vendor.t(item.desc),
        g: item.warning ? 1 : "",
        h: item.name
      };
    }),
    f: common_vendor.o((...args) => $options.goCare && $options.goCare(...args), "05"),
    g: common_vendor.f($data.timeline, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.time),
        b: index === $data.timeline.length - 1 ? 1 : "",
        c: index !== $data.timeline.length - 1
      }, index !== $data.timeline.length - 1 ? {} : {}, {
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.desc),
        f: item.time
      });
    }),
    h: common_vendor.o((...args) => $options.goCare && $options.goCare(...args), "fe"),
    i: common_vendor.o((...args) => $options.goHealth && $options.goHealth(...args), "ec"),
    j: common_vendor.o((...args) => $options.goServices && $options.goServices(...args), "9f"),
    k: common_vendor.o((...args) => $options.goServices && $options.goServices(...args), "f3"),
    l: common_vendor.p({
      active: "home"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-122b1f71"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/home/index.js.map
