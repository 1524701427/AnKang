"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_mock = require("../../../store/mock.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(store_mock.familyMembers), (m, k0, i0) => {
          return {
            a: common_vendor.t(m.name.slice(-1)),
            b: common_vendor.t(m.name),
            c: common_vendor.t(m.relation),
            d: common_vendor.t(m.phone),
            e: common_vendor.t(m.role),
            f: m.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fb289599"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/member/index.js.map
