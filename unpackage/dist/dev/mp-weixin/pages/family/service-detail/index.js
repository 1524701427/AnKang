"use strict";
const common_vendor = require("../../../common/vendor.js");
const PageHeader = () => "../../../components/PageHeader.js";
const _sfc_main = {
  components: {
    PageHeader
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: "🧑‍⚕️",
          title: "陪诊服务",
          desc: "陪同就医、排队取号、检查引导、取药和就医记录",
          price: "88",
          tags: [
            "2小时起",
            "医院陪同"
          ],
          className: "green"
        },
        {
          id: 2,
          icon: "🛁",
          title: "上门助浴",
          desc: "专业护理人员上门协助老人安全洗浴",
          price: "128",
          tags: [
            "专业护理",
            "安全评估"
          ],
          className: "blue"
        },
        {
          id: 3,
          icon: "🩺",
          title: "基础护理",
          desc: "血压测量、健康观察、基础护理和照护指导",
          price: "98",
          tags: [
            "护士上门",
            "健康记录"
          ],
          className: "rose"
        },
        {
          id: 4,
          icon: "🧹",
          title: "生活照料",
          desc: "简单家务、整理房间、陪伴和日常生活协助",
          price: "68",
          tags: [
            "2小时",
            "生活协助"
          ],
          className: "orange"
        }
      ]
    };
  },
  methods: {
    selectService(item) {
      common_vendor.index.showModal({
        title: item.title,
        content: "参考价格：¥" + item.price + "起\n\n测试页面暂未接入真实预约。",
        confirmText: "预约测试",
        success(res) {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "已提交测试预约",
              icon: "success"
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _component_PageHeader = common_vendor.resolveComponent("PageHeader");
  _component_PageHeader();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      subtitle: "上门照护"
    }),
    b: common_vendor.f($data.services, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.n(item.className),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.price),
        e: common_vendor.t(item.desc),
        f: common_vendor.f(item.tags, (tag, k1, i1) => {
          return {
            a: common_vendor.t(tag),
            b: tag
          };
        }),
        g: item.id,
        h: common_vendor.o(($event) => $options.selectService(item), item.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-049a68f3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/service-detail/index.js.map
