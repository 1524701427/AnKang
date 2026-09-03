"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    common_vendor.index.__f__("log", "at pages/entry/index.vue:75", "entry 页面加载成功");
  },
  methods: {
    goElder() {
      common_vendor.index.__f__("log", "at pages/entry/index.vue:82", "执行 goElder");
      common_vendor.index.navigateTo({
        url: "/pages/elder/index",
        success() {
          common_vendor.index.__f__("log", "at pages/entry/index.vue:88", "跳转老人端成功");
        },
        fail(err) {
          common_vendor.index.__f__("error", "at pages/entry/index.vue:92", "跳转老人端失败", err);
        }
      });
    },
    goFamily() {
      common_vendor.index.__f__("log", "at pages/entry/index.vue:101", "执行 goFamily");
      common_vendor.index.navigateTo({
        url: "/pages/family/home/index",
        success() {
          common_vendor.index.__f__("log", "at pages/entry/index.vue:107", "跳转家人端成功");
        },
        fail(err) {
          common_vendor.index.__f__("error", "at pages/entry/index.vue:111", "跳转家人端失败", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goElder && $options.goElder(...args), "d7"),
    b: common_vendor.o((...args) => $options.goFamily && $options.goFamily(...args), "7d")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ced29d0a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/entry/index.js.map
