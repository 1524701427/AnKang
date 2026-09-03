"use strict";
const common_vendor = require("../../../common/vendor.js");
const PageHeader = () => "../../../components/PageHeader.js";
const _sfc_main = {
  components: {
    PageHeader
  },
  data() {
    return {
      institutions: [
        {
          id: 1,
          name: "紫花社区长者之家",
          distance: "0.8km",
          score: "4.8",
          comment: "96条评价",
          desc: "社区嵌入式养老，适合自理及轻度照护老人",
          tags: [
            "社区养老",
            "助餐",
            "短托"
          ],
          price: "3200",
          beds: "剩余8床",
          icon: "🏡"
        },
        {
          id: 2,
          name: "安颐护理院",
          distance: "2.4km",
          score: "4.7",
          comment: "132条评价",
          desc: "提供专业护理、康复及失能老人照护",
          tags: [
            "专业护理",
            "康复",
            "医养结合"
          ],
          price: "5800",
          beds: "剩余3床",
          icon: "🏥"
        },
        {
          id: 3,
          name: "悦享康养中心",
          distance: "4.1km",
          score: "4.6",
          comment: "88条评价",
          desc: "环境舒适，提供长期养老和短期康养服务",
          tags: [
            "康养",
            "活动丰富",
            "适老环境"
          ],
          price: "4500",
          beds: "可预约参观",
          icon: "🌳"
        }
      ]
    };
  },
  methods: {
    showDetail(item) {
      common_vendor.index.showModal({
        title: item.name,
        content: item.desc + "\n\n参考价格：¥" + item.price + "/月起\n" + item.beds,
        confirmText: "预约参观",
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
      subtitle: "养老机构"
    }),
    b: common_vendor.f($data.institutions, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.distance),
        d: common_vendor.t(item.score),
        e: common_vendor.t(item.comment),
        f: common_vendor.t(item.desc),
        g: common_vendor.f(item.tags, (tag, k1, i1) => {
          return {
            a: common_vendor.t(tag),
            b: tag
          };
        }),
        h: common_vendor.t(item.price),
        i: common_vendor.t(item.beds),
        j: item.id,
        k: common_vendor.o(($event) => $options.showDetail(item), item.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-21b4e0a6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/family/institution/index.js.map
