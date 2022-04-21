var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
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
const _hoisted_1$1 = { class: "j-comment p-2" };
const _hoisted_2$1 = { class: "text-start d-flex align-items-center" };
const _hoisted_3$1 = { class: "ps-2" };
const _hoisted_4$1 = { class: "text-end" };
const _hoisted_5$1 = { class: "ps-5 pt-2" };
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = { class: "d-flex align-items-center mt-2" };
const _hoisted_8$1 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "bi bi-hand-thumbs-up" }, null, -1);
const _hoisted_9$1 = { class: "ps-1 pt-1" };
const _hoisted_10$1 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "bi bi-chat-dots ms-3" }, null, -1);
const _hoisted_11 = { class: "ps-1 pt-1" };
const _hoisted_12 = { class: "mt-3" };
const _hoisted_13 = { class: "text-start d-flex align-items-center" };
const _hoisted_14 = { class: "ps-2" };
const _hoisted_15 = { class: "text-end" };
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = { class: "d-flex align-items-center ps-5 pt-2" };
const _hoisted_18 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "bi bi-hand-thumbs-up" }, null, -1);
const _hoisted_19 = { class: "ps-1 pt-1" };
const _hoisted_20 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "bi bi-chat-dots ms-3" }, null, -1);
const _hoisted_21 = { class: "ps-1 pt-1" };
const _hoisted_22 = /* @__PURE__ */ Vue.createTextVNode("\u52A0\u8F7D\u66F4\u591A\u56DE\u590D");
const _hoisted_23 = /* @__PURE__ */ Vue.createTextVNode("\u52A0\u8F7D\u66F4\u591A\u8BC4\u8BBA");
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_avatar = Vue.resolveComponent("a-avatar");
  const _component_a_col = Vue.resolveComponent("a-col");
  const _component_a_row = Vue.resolveComponent("a-row");
  const _component_a_button = Vue.resolveComponent("a-button");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($props.data.items, (v, k) => {
      return Vue.openBlock(), Vue.createBlock(_component_a_row, {
        key: k,
        class: "mb-3"
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_a_col, { span: 16 }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_2$1, [
                Vue.createVNode(_component_a_avatar, {
                  src: v.user.avatar
                }, null, 8, ["src"]),
                Vue.createElementVNode("span", _hoisted_3$1, Vue.toDisplayString(v.user.nickname), 1)
              ])
            ]),
            _: 2
          }, 1024),
          Vue.createVNode(_component_a_col, { span: 8 }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_4$1, Vue.toDisplayString($options.dateFormat(v.publishTime)), 1)
            ]),
            _: 2
          }, 1024),
          Vue.createVNode(_component_a_col, { span: 24 }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_5$1, [
                Vue.createElementVNode("div", {
                  innerHTML: v.content,
                  class: "text-start text-break"
                }, null, 8, _hoisted_6$1),
                Vue.createElementVNode("div", _hoisted_7$1, [
                  _hoisted_8$1,
                  Vue.createElementVNode("span", _hoisted_9$1, Vue.toDisplayString(v.likeCount), 1),
                  _hoisted_10$1,
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
                              class: "text-start text-break ps-5 pt-2"
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
var Component = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
Component.install = function(Vue2) {
  Vue2.component(Component.name, Component);
};
const _sfc_main$2 = {
  name: "ao-tab",
  props: {
    data: Object
  },
  setup(props) {
    const data2 = Vue.reactive({});
    const getPaneKey = (item) => {
      item._key = item._key === void 0 ? getTabNextKey() : item._key;
      return item._key;
    };
    const getTabNextKey = () => {
      let keys = JW.pluck(props.data.items, "_key").filter((item) => {
        return JW.getType(item) === "number";
      });
      return JW.isEmpty(keys) ? 0 : Math.max(...keys) + 1;
    };
    const getTabType = () => {
      return props.data.type === "card" && props.data.closable ? "editable-card" : props.data.type;
    };
    const edit = (_key, action) => {
      if (action === "remove") {
        props.data.items = props.data.items.filter((item) => {
          return item._key !== _key;
        });
        const firstTabItem = JW.getFirstVal(props.data.items);
        if (!JW.isEmpty(firstTabItem)) {
          props.data._key = firstTabItem._key;
        }
        return;
      }
      const nextKey = getTabNextKey();
      props.data.items.push({
        _key: nextKey,
        name: "tab-" + nextKey
      });
    };
    return __spreadProps(__spreadValues({}, Vue.toRefs(data2)), {
      getTabType,
      edit,
      getPaneKey
    });
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tab_pane = Vue.resolveComponent("a-tab-pane");
  const _component_a_tabs = Vue.resolveComponent("a-tabs");
  return Vue.openBlock(), Vue.createBlock(_component_a_tabs, {
    activeKey: $props.data._key,
    "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => $props.data._key = $event),
    type: $setup.getTabType(),
    hideAdd: true,
    tabPosition: $props.data.position,
    size: $props.data.size,
    tabBarGutter: $props.data.gutter,
    onEdit: $setup.edit
  }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($props.data.items, (item) => {
        return Vue.openBlock(), Vue.createBlock(_component_a_tab_pane, {
          key: $setup.getPaneKey(item),
          tab: item.name,
          closable: item.closable
        }, {
          default: Vue.withCtx(() => [
            Vue.renderSlot(_ctx.$slots, "default", { item }, () => [
              Vue.createTextVNode(Vue.toDisplayString(item.content), 1)
            ]),
            $props.data._key === item._key ? Vue.renderSlot(_ctx.$slots, "content-" + item._key, {
              key: 0,
              item
            }) : Vue.createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["tab", "closable"]);
      }), 128))
    ]),
    _: 3
  }, 8, ["activeKey", "type", "tabPosition", "size", "tabBarGutter", "onEdit"]);
}
var Tab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
Tab.install = function(Vue2) {
  Vue2.component(Tab.name, Tab);
};
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue(v) {
        if (utils$d.isDate(v)) {
          v = v.toISOString();
        } else if (utils$d.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config, code, request2, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i)).toLowerCase();
    val = utils$9.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var transitionalDefaults$1 = transitional;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional3 = config.transitional || transitionalDefaults$1;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config, transitional3.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var transitionalDefaults = transitional;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$4.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.26.1"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional2(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional3 = config.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$e;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
const _sfc_main$1 = {
  name: "ao-preview",
  props: {
    data: Object
  },
  setup(props) {
    const data2 = Vue.reactive({
      extend: {
        image: ["jpeg", "png", "gif", "jpg", "bmp", "webp", "ico"],
        code: ["php", "go", "java", "py", "vue", "txt", "js", "html", "css", "json", "jsonc", "html", "yml", "ts", "yaml", "sh", "Dockerfile", "lock", "rs", "toml", "gitignore", "c", "h", "cpp", "xml", "rb", "cs", "cr", "dart", "hs", "lua", "babelrc", "license", "env", "sql"]
      }
    });
    const isImage = () => {
      return JW.has(data2.extend.image, props.data.extend);
    };
    const toDateTime = (timestamp) => {
      return moment.unix(timestamp).format("YYYY-MM-DD HH:mm:ss");
    };
    const toDurationTime = (updatedAt) => {
      return moment.duration(moment().unix() - updatedAt, "seconds").humanize();
    };
    const isMarkdown = (extend2) => {
      extend2 = extend2 || props.data.extend;
      return extend2 === "md";
    };
    const isCode = (extend2) => {
      extend2 = extend2 || props.data.extend;
      return JW.has(data2.extend.code, extend2.toLower());
    };
    const extendChange = (extend2) => {
      let isAsyncGet = false;
      let asyncCallback = (data22) => {
      };
      if (isCode(extend2) || isMarkdown(extend2)) {
        isAsyncGet = true;
      }
      if (isCode(extend2)) {
        asyncCallback = (data22) => {
          Vditor.preview(document.getElementById("vditorRender"), `\`\`\`
          ` + data22 + `\`\`\``, {
            theme: "ant-design",
            hljs: {
              lineNumber: true
            }
          });
        };
      } else if (isMarkdown(extend2)) {
        asyncCallback = (data22) => {
          Vditor.preview(document.getElementById("vditorRender"), data22, {
            theme: "ant-design"
          });
        };
      }
      if (isAsyncGet) {
        axios.get(props.data.downloadUrl).then((response) => {
          if (response.status !== 200) {
            antd.message.error("request fail.");
            return;
          }
          asyncCallback(response.data);
        });
      }
    };
    Vue.watch(props.data, (newVal) => {
      extendChange(newVal.extend);
    });
    Vue.onMounted(() => {
      extendChange(props.data.extend);
    });
    return __spreadProps(__spreadValues({}, Vue.toRefs(data2)), {
      isImage,
      toDateTime,
      toDurationTime,
      isMarkdown,
      isCode
    });
  }
};
const _hoisted_1 = { class: "p-2" };
const _hoisted_2 = { class: "ps-3" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["alt", "src"];
const _hoisted_5 = {
  key: 3,
  class: "mt-5"
};
const _hoisted_6 = /* @__PURE__ */ Vue.createElementVNode("i", { class: "bi bi-file-earmark-font fs-1" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ Vue.createElementVNode("br", null, null, -1);
const _hoisted_8 = /* @__PURE__ */ Vue.createTextVNode(" The file is not supported preview. ");
const _hoisted_9 = [
  _hoisted_6,
  _hoisted_7,
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ Vue.createElementVNode("div", { id: "vditorRender" }, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_viewer = Vue.resolveDirective("viewer");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("ol", _hoisted_2, [
      Vue.createElementVNode("li", null, Vue.toDisplayString($props.data.path), 1),
      Vue.createElementVNode("li", null, Vue.toDisplayString($setup.toDurationTime($props.data.updatedAt)), 1)
    ]),
    $setup.isImage() ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3, [
      Vue.createElementVNode("img", {
        alt: $props.data.name,
        src: $props.data.downloadUrl,
        class: "rounded mw-100"
      }, null, 8, _hoisted_4)
    ])), [
      [_directive_viewer]
    ]) : $setup.isCode() ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [], 64)) : $setup.isMarkdown() ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 2 }, [], 64)) : (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_5, _hoisted_9)),
    _hoisted_10
  ]);
}
var Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
Preview.install = function(Vue2) {
  Vue2.component(Preview.name, Preview);
};
const _sfc_main = {
  name: "ao-tree",
  props: {
    data: Object,
    loadNodeData: {
      type: Function,
      default: () => {
      }
    },
    clickNode: {
      type: Function,
      default: () => {
      }
    },
    expandNode: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(props) {
    const data2 = Vue.reactive({
      fieldsMapping: {
        title: "name"
      }
    });
    const clickNode = (clickKeys, event) => {
      const nodeItem = event.node.dataRef;
      props.clickNode(nodeItem);
    };
    const expandNode = (expandKeys, event) => {
      const nodeItem = event.node.dataRef;
      props.expandNode(nodeItem);
    };
    const setDataDefault = () => {
      props.data.selectable = props.data.selectable || true;
    };
    const loadData = (treeNode) => {
      return new Promise((resolve) => {
        if (!JW.isEmpty(treeNode.dataRef.children)) {
          resolve();
          return;
        }
        props.loadNodeData(treeNode.dataRef, treeNode, resolve);
      });
    };
    Vue.onMounted(() => {
      setDataDefault();
    });
    return __spreadProps(__spreadValues({}, Vue.toRefs(data2)), {
      clickNode,
      expandNode,
      loadData
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tree = Vue.resolveComponent("a-tree");
  return Vue.openBlock(), Vue.createElementBlock("div", null, [
    Vue.createVNode(_component_a_tree, {
      "tree-data": $props.data.items,
      "load-data": $setup.loadData,
      "replace-fields": _ctx.fieldsMapping,
      selectable: $props.data.selectable,
      onSelect: $setup.clickNode,
      onExpand: $setup.expandNode
    }, null, 8, ["tree-data", "load-data", "replace-fields", "selectable", "onSelect", "onExpand"])
  ]);
}
var Tree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Tree.install = function(Vue2) {
  Vue2.component(Tree.name, Tree);
};
const components = [
  Component,
  Tab,
  Preview,
  Tree
];
const install = function(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const AoComponents = {
  version: "0.1.1",
  install,
  Comment: Component,
  Tab,
  Preview,
  Tree
};
if (typeof window !== "undefined") {
  window.AoComponents = AoComponents;
}
export { AoComponents as default };
