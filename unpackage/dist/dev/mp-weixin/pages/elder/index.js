"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      done: false,
      timer: null
    };
  },
  methods: {
    finish() {
      this.done = true;
      common_vendor.index.showToast({
        title: "已记录",
        icon: "success"
      });
    },
    callFamily() {
      common_vendor.index.showToast({
        title: "正在呼叫女儿",
        icon: "none"
      });
    },
    assistant() {
      common_vendor.index.showModal({
        title: "小安助手",
        content: "你可以说：给女儿打电话、今天吃什么药、帮我联系社区。",
        showCancel: false
      });
    },
    holdSos() {
      this.timer = setTimeout(() => {
        common_vendor.index.showModal({
          title: "紧急求助已发出",
          content: "已通知家人和社区守护站。",
          showCancel: false
        });
      }, 3e3);
    },
    cancelSos() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = null;
    },
    familyMode() {
      common_vendor.index.navigateTo({
        url: "/pages/family/home/index"
      });
    }
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.done ? "已经吃过了 ✓" : "我已经吃过了"),
    b: $data.done ? 1 : "",
    c: common_vendor.o((...args) => $options.finish && $options.finish(...args), "04"),
    d: common_vendor.o((...args) => $options.callFamily && $options.callFamily(...args), "95"),
    e: common_vendor.o((...args) => $options.assistant && $options.assistant(...args), "78"),
    f: common_vendor.o((...args) => $options.holdSos && $options.holdSos(...args), "7d"),
    g: common_vendor.o((...args) => $options.cancelSos && $options.cancelSos(...args), "7a"),
    h: common_vendor.o((...args) => $options.cancelSos && $options.cancelSos(...args), "d1"),
    i: common_vendor.o((...args) => $options.familyMode && $options.familyMode(...args), "27")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-603752d0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/elder/index.js.map
