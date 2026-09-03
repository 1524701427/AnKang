"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    active: {
      type: String,
      default: "home"
    }
  },
  data() {
    return {
      tabs: [
        {
          key: "home",
          label: "首页",
          icon: "⌂",
          url: "/pages/family/home/index"
        },
        {
          key: "health",
          label: "健康",
          icon: "♡",
          url: "/pages/family/health/index"
        },
        {
          key: "care",
          label: "照护",
          icon: "✓",
          url: "/pages/family/care/index"
        },
        {
          key: "services",
          label: "服务",
          icon: "◇",
          url: "/pages/family/services/index"
        },
        {
          key: "mine",
          label: "我的",
          icon: "○",
          url: "/pages/family/mine/index"
        }
      ]
    };
  },
  methods: {
    go(item) {
      if (item.key === this.active) {
        return;
      }
      common_vendor.index.redirectTo({
        url: item.url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabs, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.label),
        c: item.key,
        d: $props.active === item.key ? 1 : "",
        e: common_vendor.o(($event) => $options.go(item), item.key)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c22c7dee"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/FamilyTabbar.js.map
