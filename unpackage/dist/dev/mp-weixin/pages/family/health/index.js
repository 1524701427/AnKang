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
          name: "血压",
          value: "128/78",
          desc: "正常范围",
          icon: "🩸",
          className: "pressure"
        },
        {
          name: "心率",
          value: "76次/分",
          desc: "状态正常",
          icon: "♥",
          className: "heart"
        },
        {
          name: "血氧",
          value: "97%",
          desc: "状态正常",
          icon: "💧",
          className: "oxygen"
        },
        {
          name: "睡眠",
          value: "7小时12分",
          desc: "睡眠良好",
          icon: "🌙",
          className: "sleep"
        }
      ],
      pressureChart: [
        {
          day: "一",
          value: "132",
          height: 62
        },
        {
          day: "二",
          value: "128",
          height: 52
        },
        {
          day: "三",
          value: "135",
          height: 68
        },
        {
          day: "四",
          value: "130",
          height: 58
        },
        {
          day: "五",
          value: "126",
          height: 48
        },
        {
          day: "六",
          value: "131",
          height: 60
        },
        {
          day: "日",
          value: "128",
          height: 52
        }
      ],
      records: [
        {
          time: "今天 08:10",
          name: "晨起血压",
          value: "128 / 78",
          status: "正常"
        },
        {
          time: "昨天 20:15",
          name: "晚间血压",
          value: "132 / 82",
          status: "正常"
        },
        {
          time: "昨天 08:06",
          name: "晨起血压",
          value: "136 / 84",
          status: "稍高"
        }
      ]
    };
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
      subtitle: "健康中心"
    }),
    b: common_vendor.f($data.metrics, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.n(item.className),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.value),
        e: common_vendor.t(item.desc),
        f: item.name
      };
    }),
    c: common_vendor.f($data.pressureChart, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.value),
        b: item.height + "%",
        c: common_vendor.t(item.day),
        d: item.day
      };
    }),
    d: common_vendor.f($data.records, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.time),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.value),
        d: common_vendor.t(item.status),
        e: item.time
      };
    }),
    e: common_vendor.p({
      active: "health"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d1474354"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/health/index.js.map
