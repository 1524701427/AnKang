"use strict";
const common_vendor = require("../../../common/vendor.js");
const PageHeader = () => "../../../components/PageHeader.js";
const FamilyTabbar = () => "../../../components/FamilyTabbar.js";
const _sfc_main = {
  components: {
    PageHeader,
    FamilyTabbar
  },
  methods: {
    goMembers() {
      common_vendor.index.navigateTo({
        url: "/pages/family/member/index"
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
      subtitle: "我的"
    }),
    b: common_vendor.o((...args) => $options.goMembers && $options.goMembers(...args), "57"),
    c: common_vendor.p({
      active: "mine"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-602d69f1"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/mine/index.js.map
