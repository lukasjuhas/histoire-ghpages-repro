import { d as defineComponent, a as openBlock, b as createElementBlock, m as createCommentVNode, f as renderSlot, x as mergeProps, R as reactive, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode, Q as createTextVNode, t as toDisplayString } from "./vendor.f63f5b0c.js";
var Button_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\nbutton[data-v-015de462] {\n  color: black;\n  background: lightcyan;\n  border-radius: 4px;\n  border: 0 none;\n  cursor: pointer;\n}\n.sm[data-v-015de462] {\n  font-size: 10px;\n  padding: 2px 5px;\n}\n.lg[data-v-015de462] {\n  font-size: 30px;\n  padding: 5px 10px;\n}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    sm: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    let size = "";
    if (props.sm) {
      size = "sm";
    }
    if (props.lg) {
      size = "lg";
    }
    function onClick() {
      emit("click");
    }
    const __returned__ = { props, emit, size, onClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: ["button", [$setup.size]]
  }, _ctx.$attrs, { onClick: $setup.onClick }), [
    createCommentVNode(" @slot To supply button content "),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 16);
}
_sfc_main$1.__file = "src/components/Button.vue";
var MyButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-015de462"], ["__file", "/home/runner/work/histoire-ghpages-repro/histoire-ghpages-repro/src/components/Button.vue"]]);
var block0 = (Comp) => {
  Comp.doc = '<h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-hidden="true">#</a></h1>\n<p>A Simple button component.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      text: "Button"
    });
    const __returned__ = { state, MyButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: 200 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["MyButton"], null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.state.text), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Small" }, {
        default: withCtx(() => [
          createVNode($setup["MyButton"], { sm: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.state.text), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Large" }, {
        default: withCtx(() => [
          createVNode($setup["MyButton"], { lg: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.state.text), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/Button.story.vue";
var Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/histoire-ghpages-repro/histoire-ghpages-repro/src/components/Button.story.vue"]]);
export { Button_story as default };
