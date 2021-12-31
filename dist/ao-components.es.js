var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "ao-comment",
  props: {
    data: {
      type: Object,
      default() {
        return {
          items: [],
          more: false
        };
      }
    }
  },
  methods: {
    loadMoreComment() {
      this.$emit("loadMoreComment");
    },
    loadMoreReply(row) {
      this.$emit("loadMoreReply", row);
    },
    getDefaultItem() {
      return {
        id: 0,
        user: {
          id: 0,
          nickname: "",
          avatar: ""
        },
        content: "",
        publishTime: 0,
        likeCount: 0,
        replyCount: 0,
        reply: {
          items: [],
          more: false
        }
      };
    },
    dateFormat(timestamp) {
      return moment.unix(timestamp).format("YYYY-MM-DD");
    }
  }
};
const _hoisted_1 = { class: "j-comment p-2" };
const _hoisted_2 = { class: "text-start d-flex align-items-center" };
const _hoisted_3 = { class: "ps-2" };
const _hoisted_4 = { class: "text-end" };
const _hoisted_5 = { class: "ps-5 pt-2" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "d-flex align-items-center mt-2" };
const _hoisted_8 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "fa fa-thumbs-o-up" }, null, -1);
const _hoisted_9 = { class: "ps-1 pt-1" };
const _hoisted_10 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "fa fa-commenting-o ms-3" }, null, -1);
const _hoisted_11 = { class: "ps-1 pt-1" };
const _hoisted_12 = { class: "mt-3" };
const _hoisted_13 = { class: "text-start d-flex align-items-center" };
const _hoisted_14 = { class: "ps-2" };
const _hoisted_15 = { class: "text-end" };
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = { class: "d-flex align-items-center ps-5 pt-2" };
const _hoisted_18 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "fa fa-thumbs-o-up" }, null, -1);
const _hoisted_19 = { class: "ps-1 pt-1" };
const _hoisted_20 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "fa fa-commenting-o ms-3" }, null, -1);
const _hoisted_21 = { class: "ps-1 pt-1" };
const _hoisted_22 = /* @__PURE__ */ Vue.createTextVNode("\u52A0\u8F7D\u66F4\u591A\u56DE\u590D");
const _hoisted_23 = /* @__PURE__ */ Vue.createTextVNode("\u52A0\u8F7D\u66F4\u591A\u8BC4\u8BBA");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_avatar = Vue.resolveComponent("a-avatar");
  const _component_a_col = Vue.resolveComponent("a-col");
  const _component_a_row = Vue.resolveComponent("a-row");
  const _component_a_button = Vue.resolveComponent("a-button");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($props.data.items, (v, k) => {
      return Vue.openBlock(), Vue.createBlock(_component_a_row, {
        key: k,
        class: "mb-3"
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_a_col, { span: 16 }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_2, [
                Vue.createVNode(_component_a_avatar, {
                  src: v.user.avatar
                }, null, 8, ["src"]),
                Vue.createElementVNode("span", _hoisted_3, Vue.toDisplayString(v.user.nickname), 1)
              ])
            ]),
            _: 2
          }, 1024),
          Vue.createVNode(_component_a_col, { span: 8 }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_4, Vue.toDisplayString($options.dateFormat(v.publishTime)), 1)
            ]),
            _: 2
          }, 1024),
          Vue.createVNode(_component_a_col, { span: 24 }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_5, [
                Vue.createElementVNode("div", {
                  innerHTML: v.content,
                  class: "text-start"
                }, null, 8, _hoisted_6),
                Vue.createElementVNode("div", _hoisted_7, [
                  _hoisted_8,
                  Vue.createElementVNode("span", _hoisted_9, Vue.toDisplayString(v.likeCount), 1),
                  _hoisted_10,
                  Vue.createElementVNode("span", _hoisted_11, Vue.toDisplayString(v.replyCount), 1)
                ]),
                Vue.createElementVNode("div", _hoisted_12, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(v.reply.items, (vv, kk) => {
                    return Vue.openBlock(), Vue.createBlock(_component_a_row, {
                      key: kk,
                      class: "mb-3"
                    }, {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(_component_a_col, { span: 16 }, {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode("div", _hoisted_13, [
                              Vue.createVNode(_component_a_avatar, {
                                src: vv.user.avatar
                              }, null, 8, ["src"]),
                              Vue.createElementVNode("span", _hoisted_14, Vue.toDisplayString(vv.user.nickname), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        Vue.createVNode(_component_a_col, { span: 8 }, {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode("div", _hoisted_15, Vue.toDisplayString($options.dateFormat(vv.publishTime)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        Vue.createVNode(_component_a_col, { span: 24 }, {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode("div", {
                              innerHTML: vv.content,
                              class: "text-start ps-5 pt-2"
                            }, null, 8, _hoisted_16)
                          ]),
                          _: 2
                        }, 1024),
                        Vue.createVNode(_component_a_col, { span: 24 }, {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode("div", _hoisted_17, [
                              _hoisted_18,
                              Vue.createElementVNode("span", _hoisted_19, Vue.toDisplayString(vv.likeCount), 1),
                              _hoisted_20,
                              Vue.createElementVNode("span", _hoisted_21, Vue.toDisplayString(vv.replyCount), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                v.reply.more ? (Vue.openBlock(), Vue.createBlock(_component_a_button, {
                  key: 0,
                  onClick: ($event) => $options.loadMoreReply(v),
                  primary: ""
                }, {
                  default: Vue.withCtx(() => [
                    _hoisted_22
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : Vue.createCommentVNode("", true)
              ])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024);
    }), 128)),
    $props.data.more ? (Vue.openBlock(), Vue.createBlock(_component_a_button, {
      key: 0,
      onClick: $options.loadMoreComment,
      primary: ""
    }, {
      default: Vue.withCtx(() => [
        _hoisted_23
      ]),
      _: 1
    }, 8, ["onClick"])) : Vue.createCommentVNode("", true)
  ]);
}
var Component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Component.install = function(Vue2) {
  Vue2.component(Component.name, Component);
};
const components = [
  Component
];
const install = function(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const AoComponents = {
  version: "0.0.2",
  install,
  Comment: Component
};
if (typeof window !== "undefined") {
  window.AoComponents = AoComponents;
}
export { AoComponents as default };
