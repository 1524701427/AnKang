"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_mock = require("../../../store/mock.js");
const PageHeader = () => "../../../components/PageHeader.js";
const FamilyTabbar = () => "../../../components/FamilyTabbar.js";
const _sfc_main = {
  components: {
    PageHeader,
    FamilyTabbar
  },
  data() {
    return {
      reminders: JSON.parse(
        JSON.stringify(
          store_mock.reminders
        )
      )
    };
  },
  methods: {
    getIcon(type) {
      const map = {
        medicine: "💊",
        meal: "🍚",
        measure: "🩺",
        visit: "🏥"
      };
      return map[type] || "⏰";
    },
    addReminder() {
      common_vendor.index.navigateTo({
        url: "/pages/family/reminder-edit/index"
      });
    },
    editReminder(item) {
      common_vendor.index.navigateTo({
        url: "/pages/family/reminder-edit/index?id=" + item.id
      });
    },
    goMembers() {
      common_vendor.index.navigateTo({
        url: "/pages/family/member/index"
      });
    },
    goTasks() {
      common_vendor.index.navigateTo({
        url: "/pages/family/task/index"
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
      subtitle: "照护管理"
    }),
    b: common_vendor.o((...args) => $options.addReminder && $options.addReminder(...args), "c8"),
    c: common_vendor.f($data.reminders, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t($options.getIcon(item.type)),
        b: common_vendor.n(item.type),
        c: common_vendor.t(item.time),
        d: common_vendor.t(item.enabled ? "已开启" : "已关闭"),
        e: !item.enabled ? 1 : "",
        f: common_vendor.t(item.title),
        g: common_vendor.t(item.dosage),
        h: common_vendor.t(item.repeat),
        i: item.notifyAfter
      }, item.notifyAfter ? {
        j: common_vendor.t(item.notifyAfter)
      } : {}, {
        k: item.id,
        l: common_vendor.o(($event) => $options.editReminder(item), item.id)
      });
    }),
    d: common_vendor.o((...args) => $options.goTasks && $options.goTasks(...args), "93"),
    e: common_vendor.o((...args) => $options.goMembers && $options.goMembers(...args), "2a"),
    f: common_vendor.p({
      active: "care"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f6180cfc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/care/index.js.map
