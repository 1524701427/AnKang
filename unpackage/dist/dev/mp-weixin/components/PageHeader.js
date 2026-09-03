"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    subtitle: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    }
  },
  emits: [
    "action"
  ]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.subtitle
  }, $props.subtitle ? {
    b: common_vendor.t($props.subtitle)
  } : {}, {
    c: $props.action
  }, $props.action ? {
    d: common_vendor.t($props.action),
    e: common_vendor.o(($event) => _ctx.$emit("action"), "19")
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88d55a61"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/PageHeader.js.map
