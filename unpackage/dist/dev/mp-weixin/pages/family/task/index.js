"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_mock = require("../../../store/mock.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(store_mock.careTasks), (t, k0, i0) => {
          return {
            a: common_vendor.t(t.title),
            b: common_vendor.t(t.owner),
            c: common_vendor.t(t.due),
            d: common_vendor.t(t.status),
            e: t.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6f706900"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/task/index.js.map
