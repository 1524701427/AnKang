"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const types = ["用药提醒", "吃饭提醒", "测量提醒", "复诊提醒", "其他"];
    const typeIndex = common_vendor.ref(0);
    const notifyOptions = ["不通知", "15分钟", "30分钟", "60分钟"];
    const notifyIndex = common_vendor.ref(2);
    const form = common_vendor.reactive({ title: "降压药", time: "08:00", dosage: "1片", enabled: true });
    const save = () => {
      common_vendor.index.showToast({ title: "保存成功", icon: "success" });
      setTimeout(() => common_vendor.index.navigateBack(), 500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(types[typeIndex.value]),
        b: types,
        c: common_vendor.o((e) => typeIndex.value = e.detail.value, "36"),
        d: form.title,
        e: common_vendor.o(($event) => form.title = $event.detail.value, "e4"),
        f: common_vendor.t(form.time),
        g: form.time,
        h: common_vendor.o((e) => form.time = e.detail.value, "5f"),
        i: form.dosage,
        j: common_vendor.o(($event) => form.dosage = $event.detail.value, "7a"),
        k: common_vendor.t(notifyOptions[notifyIndex.value]),
        l: notifyOptions,
        m: common_vendor.o((e) => notifyIndex.value = e.detail.value, "bc"),
        n: form.enabled,
        o: common_vendor.o((e) => form.enabled = e.detail.value, "8b"),
        p: common_vendor.o(save, "4c")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d7d08b31"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/reminder-edit/index.js.map
