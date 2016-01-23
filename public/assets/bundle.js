/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: shunjinchan
	 * @Date:   2015-12-25 11:23:14
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-21 12:45:54
	 */
	
	var Zepto = __webpack_require__(1);
	
	var Router = __webpack_require__(2);
	var Popup = __webpack_require__(3);
	var Dialog = __webpack_require__(8);
	var Loader = __webpack_require__(11);
	var Toast = __webpack_require__(14);
	var Tab = __webpack_require__(17);
	var Validator = __webpack_require__(20);
	var EventEmitter = __webpack_require__(21);
	var Swiper = __webpack_require__(22);
	var device = __webpack_require__(25);
	var broswer = __webpack_require__(26);
	var Countdown = __webpack_require__(27);
	
	var win = window;
	var doc = win.document;
	
	var popup = new Popup();
	var dialog = new Dialog();
	var loader = new Loader();
	var toast = new Toast();
	var tab = new Tab();
	var validator = new Validator();
	var emitter = new EventEmitter();
	var swiper = new Swiper();
	var countdown = new Countdown();
	
	
	
	
	function init() {
	    $(document).on('click', '.open-popup-about', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            target: $('.popup-about')
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-popup-list', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            target: $('.popup-list'),
	            css: {
	                top: 'auto'
	            }
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-popup-top', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            target: $('.popup-top'),
	            animation: 'from-top',
	            css: {
	                top: '0',
	                bottom: 'auto'
	            },
	            freeze: false
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-popup-left', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            target: $('.popup-left'),
	            animation: 'from-left',
	            freeze: false
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-popup-right', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            target: $('.popup-right'),
	            animation: 'from-right',
	            freeze: false,
	            css: {
	                left: 90,
	                width: 'auto'
	            }
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-popup', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            extraClass: 'nimabi',
	            title: 'title',
	            body: 'body',
	            footer: 'footer'
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-popup-html', function(e) {
	        e.preventDefault();
	
	        popup.open({
	            html: 'popup html'
	        });
	
	        popup.$box.on('closed', function() {
	            console.log('nimabi');
	        });
	    });
	
	
	
	    $(document).on('click', '.open-alert', function(e) {
	        e.preventDefault();
	
	        dialog.alert('wokaoa', 'dasdaada', function() {
	            console.log('nimabi');
	        });
	    });
	
	    $(document).on('click', '.open-confirm', function(e) {
	        e.preventDefault();
	
	        dialog.confirm('wokaoa', 'wodasdsaadssasda', function() {
	            console.log('ok');
	        }, function() {
	            console.log('cancel');
	        });
	    });
	
	    $(document).on('click', '.open-prompt', function(e) {
	        e.preventDefault();
	
	        dialog.prompt('请填写收到的1024邀请码', function(val) {
	            console.log('确定' + val);
	        }, function(val) {
	            console.log('取消' + val);
	        });
	    });
	
	    function callbackA() {
	        dialog.alert('worinimei');
	    }
	
	    $(document).on('click', '.open-password', function(e) {
	        e.preventDefault();
	
	        dialog.password('输入密码', function(val) {
	            if (val !== '') {
	                console.log('密码是' + val);
	            } else {
	                dialog.close(callbackA);
	            }
	        }, function(val) {
	            console.log('密码是' + val);
	        });
	    });
	
	    $(document).on('click', '.open-login', function(e) {
	        e.preventDefault();
	
	        dialog.login('登录你妹啊', function(username, password) {
	            console.log('密码是' + username);
	            console.log('密码是' + password);
	        }, function(username, password) {
	            console.log('密码是' + username);
	            console.log('密码是' + password);
	        });
	    });
	
	    $(document).on('click', '.open-register', function(e) {
	        e.preventDefault();
	
	        dialog.register('妈勒个蛋你倒是注册啊', function(username, password, authCode) {
	            console.log('用户名是' + username);
	            console.log('密码是' + password);
	            console.log('验证码是' + authCode);
	        }, function(username, password, authCode) {
	            console.log('用户名是' + username);
	            console.log('密码是' + password);
	            console.log('验证码是' + authCode);
	        });
	    });
	
	    $(document).on('click', '.open-dialog-vertical', function(e) {
	        e.preventDefault();
	
	        dialog.open({
	            title: 'title',
	            content: 'content',
	            afterContent: 'afterContent',
	            verticalButton: true,
	            buttons: [{
	                text: '按钮1',
	                onClick: function() {
	                    console.log('按钮1');
	                }
	            }, {
	                text: '按钮2',
	                onClick: function() {
	                    console.log('按钮2');
	                }
	            }, {
	                text: '按钮3',
	                onClick: function() {
	                    console.log('按钮3');
	                }
	            }]
	        });
	    });
	
	    $(document).on('click', '.open-actionSheet', function(e) {
	        e.preventDefault();
	
	        dialog.actionSheet({
	            animation: 'from-bottom',
	            title: '确定要删除？',
	            type: 'actionSheet',
	            buttons: [{
	                text: '删除',
	                onClick: function() {
	                    console.log('删除');
	                },
	                close: false
	            }, {
	                text: '删除2',
	                onClick: function() {
	                    console.log('删除2');
	                },
	                close: false,
	                danger: true
	            }]
	        });
	    });
	
	    $(document).on('click', '.open-loader', function(e) {
	        e.preventDefault();
	
	        loader.open('nimabi');
	    });
	
	    $(document).on('click', '.open-loader2', function(e) {
	        e.preventDefault();
	
	        loader.open({
	            title: 'hhjhjjj',
	            extraClass: 'nimabi',
	            timer: 2000
	        });
	    });
	
	    $(document).on('click', '.open-toast', function(e) {
	        e.preventDefault();
	
	        toast.open('nimabi');
	    });
	
	    $(document).on('click', '.open-toast2', function(e) {
	        e.preventDefault();
	
	        toast.open({
	            title: 'hhjhjjj',
	            extraClass: 'toast-white',
	            timer: 2000
	        });
	    });
	
	    console.log(device);
	}
	
	doc.addEventListener('DOMContentLoaded', init);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* Zepto 1.1.4 - zepto event ajax form ie detect fx fx_methods assets data callbacks deferred selector touch stack - zeptojs.com/license */
	
	
	
	
	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,
	
	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	
	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }
	
	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }
	
	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }
	
	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }
	
	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }
	
	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }
	
	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }
	
	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }
	
	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }
	
	  function Z(dom, selector) {
	    var i, len = dom ? dom.length : 0
	    for (i = 0; i < len; i++) this[i] = dom[i]
	    this.length = len
	    this.selector = selector || ''
	  }
	
	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container
	
	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))
	
	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'
	
	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }
	
	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }
	
	    return dom
	  }
	
	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    return new Z(dom, selector)
	  }
	
	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }
	
	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }
	
	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }
	
	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }
	
	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }
	
	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
	      slice.call(
	        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }
	
	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }
	
	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }
	
	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }
	
	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }
	
	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined
	
	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }
	
	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }
	
	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject
	
	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }
	
	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }
	
	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }
	
	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }
	  $.noop = function() {}
	
	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }
	
	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }
	
	    return elements
	  }
	
	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }
	
	  if (window.JSON) $.parseJSON = JSON.parse
	
	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })
	
	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    constructor: zepto.Z,
	    length: 0,
	
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    splice: emptyArray.splice,
	    indexOf: emptyArray.indexOf,
	    concat: function(){
	      var i, value, args = []
	      for (i = 0; i < arguments.length; i++) {
	        value = arguments[i]
	        args[i] = zepto.isZ(value) ? value.toArray() : value
	      }
	      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
	    },
	
	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },
	
	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1
	
	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()
	
	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)
	
	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }
	
	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }
	
	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }
	
	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return
	
	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()
	
	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0
	
	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0
	
	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }
	
	  // for now
	  $.fn.detach = $.fn.remove
	
	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })
	
	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })
	
	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }
	
	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append
	
	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this
	
	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode
	
	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null
	
	        var parentInDocument = $.contains(document.documentElement, parent)
	
	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()
	
	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }
	
	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })
	
	  zepto.Z.prototype = Z.prototype = $.fn
	
	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto
	
	  return $
	})()
	
	
	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)
	
	
	
	
	
	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }
	
	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'
	
	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }
	
	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }
	
	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }
	
	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }
	
	  $.event = { add: add, remove: remove }
	
	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }
	
	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }
	
	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }
	
	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)
	
	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })
	
	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }
	
	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]
	
	    return compatible(proxy, event)
	  }
	
	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }
	
	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }
	
	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (callback === undefined || data === false)
	      callback = data, data = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }
	
	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }
	
	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }
	
	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }
	
	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }
	
	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })
	
	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }
	
	})(Zepto)
	
	
	
	
	
	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')
	
	  originAnchor.href = window.location.href
	
	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }
	
	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }
	
	  // Number of active Ajax requests
	  $.active = 0
	
	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }
	
	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false
	
	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }
	
	  // Empty function, used as default callback
	  function empty() {}
	
	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)
	
	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()
	
	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }
	
	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])
	
	      originalCallback = responseData = undefined
	    })
	
	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }
	
	    window[callbackName] = function(){
	      responseData = arguments
	    }
	
	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)
	
	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)
	
	    return xhr
	  }
	
	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }
	
	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }
	
	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }
	
	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }
	
	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor, hashIndex
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]
	
	    ajaxStart(settings)
	
	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }
	
	    if (!settings.url) settings.url = window.location.toString()
	    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
	    serializeData(settings)
	
	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'
	
	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())
	
	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }
	
	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')
	
	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader
	
	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText
	
	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }
	
	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }
	
	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }
	
	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]
	
	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)
	
	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])
	
	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)
	
	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }
	
	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }
	
	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }
	
	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }
	
	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }
	
	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }
	
	  var escape = encodeURIComponent
	
	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }
	
	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)
	
	
	
	
	
	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }
	
	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }
	
	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }
	
	})(Zepto)
	
	
	
	
	
	;(function(){
	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})()
	
	
	
	
	
	;(function($){
	  function detect(ua, platform){
	    var os = this.os = {}, browser = this.browser = {},
	      webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
	      android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
	      osx = !!ua.match(/\(Macintosh\; Intel /),
	      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	      ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
	      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
	      win = /Win\d{2}|Windows/.test(platform),
	      wp = ua.match(/Windows Phone ([\d.]+)/),
	      touchpad = webos && ua.match(/TouchPad/),
	      kindle = ua.match(/Kindle\/([\d.]+)/),
	      silk = ua.match(/Silk\/([\d._]+)/),
	      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
	      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
	      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
	      playbook = ua.match(/PlayBook/),
	      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
	      firefox = ua.match(/Firefox\/([\d.]+)/),
	      firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
	      ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
	      webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
	      safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)
	
	    // Todo: clean this up with a better OS/browser seperation:
	    // - discern (more) between multiple browsers on android
	    // - decide if kindle fire in silk mode is android or not
	    // - Firefox on Android doesn't specify the Android version
	    // - possibly devide in os, device and browser hashes
	
	    if (browser.webkit = !!webkit) browser.version = webkit[1]
	
	    if (android) os.android = true, os.version = android[2]
	    if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
	    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
	    if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
	    if (wp) os.wp = true, os.version = wp[1]
	    if (webos) os.webos = true, os.version = webos[2]
	    if (touchpad) os.touchpad = true
	    if (blackberry) os.blackberry = true, os.version = blackberry[2]
	    if (bb10) os.bb10 = true, os.version = bb10[2]
	    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
	    if (playbook) browser.playbook = true
	    if (kindle) os.kindle = true, os.version = kindle[1]
	    if (silk) browser.silk = true, browser.version = silk[1]
	    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
	    if (chrome) browser.chrome = true, browser.version = chrome[1]
	    if (firefox) browser.firefox = true, browser.version = firefox[1]
	    if (firefoxos) os.firefoxos = true, os.version = firefoxos[1]
	    if (ie) browser.ie = true, browser.version = ie[1]
	    if (safari && (osx || os.ios || win)) {
	      browser.safari = true
	      if (!os.ios) browser.version = safari[1]
	    }
	    if (webview) browser.webview = true
	
	    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
	      (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))
	    os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
	      (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
	      (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))
	  }
	
	  detect.call($, navigator.userAgent, navigator.platform)
	  // make available to unit tests
	  $.__detect = detect
	
	})(Zepto)
	
	
	
	
	
	;(function($, undefined){
	  var prefix = '', eventPrefix,
	    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
	    testEl = document.createElement('div'),
	    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
	    transform,
	    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
	    animationName, animationDuration, animationTiming, animationDelay,
	    cssReset = {}
	
	  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
	  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }
	
	  $.each(vendors, function(vendor, event){
	    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + vendor.toLowerCase() + '-'
	      eventPrefix = event
	      return false
	    }
	  })
	
	  transform = prefix + 'transform'
	  cssReset[transitionProperty = prefix + 'transition-property'] =
	  cssReset[transitionDuration = prefix + 'transition-duration'] =
	  cssReset[transitionDelay    = prefix + 'transition-delay'] =
	  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
	  cssReset[animationName      = prefix + 'animation-name'] =
	  cssReset[animationDuration  = prefix + 'animation-duration'] =
	  cssReset[animationDelay     = prefix + 'animation-delay'] =
	  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''
	
	  $.fx = {
	    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
	    speeds: { _default: 400, fast: 200, slow: 600 },
	    cssPrefix: prefix,
	    transitionEnd: normalizeEvent('TransitionEnd'),
	    animationEnd: normalizeEvent('AnimationEnd')
	  }
	
	  $.fn.animate = function(properties, duration, ease, callback, delay){
	    if ($.isFunction(duration))
	      callback = duration, ease = undefined, duration = undefined
	    if ($.isFunction(ease))
	      callback = ease, ease = undefined
	    if ($.isPlainObject(duration))
	      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
	    if (duration) duration = (typeof duration == 'number' ? duration :
	                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
	    if (delay) delay = parseFloat(delay) / 1000
	    return this.anim(properties, duration, ease, callback, delay)
	  }
	
	  $.fn.anim = function(properties, duration, ease, callback, delay){
	    var key, cssValues = {}, cssProperties, transforms = '',
	        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
	        fired = false
	
	    if (duration === undefined) duration = $.fx.speeds._default / 1000
	    if (delay === undefined) delay = 0
	    if ($.fx.off) duration = 0
	
	    if (typeof properties == 'string') {
	      // keyframe animation
	      cssValues[animationName] = properties
	      cssValues[animationDuration] = duration + 's'
	      cssValues[animationDelay] = delay + 's'
	      cssValues[animationTiming] = (ease || 'linear')
	      endEvent = $.fx.animationEnd
	    } else {
	      cssProperties = []
	      // CSS transitions
	      for (key in properties)
	        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
	        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))
	
	      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
	      if (duration > 0 && typeof properties === 'object') {
	        cssValues[transitionProperty] = cssProperties.join(', ')
	        cssValues[transitionDuration] = duration + 's'
	        cssValues[transitionDelay] = delay + 's'
	        cssValues[transitionTiming] = (ease || 'linear')
	      }
	    }
	
	    wrappedCallback = function(event){
	      if (typeof event !== 'undefined') {
	        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
	        $(event.target).unbind(endEvent, wrappedCallback)
	      } else
	        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout
	
	      fired = true
	      $(this).css(cssReset)
	      callback && callback.call(this)
	    }
	    if (duration > 0){
	      this.bind(endEvent, wrappedCallback)
	      // transitionEnd is not always firing on older Android phones
	      // so make sure it gets fired
	      setTimeout(function(){
	        if (fired) return
	        wrappedCallback.call(that)
	      }, ((duration + delay) * 1000) + 25)
	    }
	
	    // trigger page reflow so new elements can animate
	    this.size() && this.get(0).clientLeft
	
	    this.css(cssValues)
	
	    if (duration <= 0) setTimeout(function() {
	      that.each(function(){ wrappedCallback.call(this) })
	    }, 0)
	
	    return this
	  }
	
	  testEl = null
	})(Zepto)
	
	
	
	
	
	;(function($, undefined){
	  var document = window.document, docElem = document.documentElement,
	    origShow = $.fn.show, origHide = $.fn.hide, origToggle = $.fn.toggle
	
	  function anim(el, speed, opacity, scale, callback) {
	    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined
	    var props = { opacity: opacity }
	    if (scale) {
	      props.scale = scale
	      el.css($.fx.cssPrefix + 'transform-origin', '0 0')
	    }
	    return el.animate(props, speed, null, callback)
	  }
	
	  function hide(el, speed, scale, callback) {
	    return anim(el, speed, 0, scale, function(){
	      origHide.call($(this))
	      callback && callback.call(this)
	    })
	  }
	
	  $.fn.show = function(speed, callback) {
	    origShow.call(this)
	    if (speed === undefined) speed = 0
	    else this.css('opacity', 0)
	    return anim(this, speed, 1, '1,1', callback)
	  }
	
	  $.fn.hide = function(speed, callback) {
	    if (speed === undefined) return origHide.call(this)
	    else return hide(this, speed, '0,0', callback)
	  }
	
	  $.fn.toggle = function(speed, callback) {
	    if (speed === undefined || typeof speed == 'boolean')
	      return origToggle.call(this, speed)
	    else return this.each(function(){
	      var el = $(this)
	      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback)
	    })
	  }
	
	  $.fn.fadeTo = function(speed, opacity, callback) {
	    return anim(this, speed, opacity, null, callback)
	  }
	
	  $.fn.fadeIn = function(speed, callback) {
	    var target = this.css('opacity')
	    if (target > 0) this.css('opacity', 0)
	    else target = 1
	    return origShow.call(this).fadeTo(speed, target, callback)
	  }
	
	  $.fn.fadeOut = function(speed, callback) {
	    return hide(this, speed, null, callback)
	  }
	
	  $.fn.fadeToggle = function(speed, callback) {
	    return this.each(function(){
	      var el = $(this)
	      el[
	        (el.css('opacity') == 0 || el.css('display') == 'none') ? 'fadeIn' : 'fadeOut'
	      ](speed, callback)
	    })
	  }
	
	})(Zepto)
	
	
	
	
	
	;(function($){
	  var cache = [], timeout
	
	  $.fn.remove = function(){
	    return this.each(function(){
	      if(this.parentNode){
	        if(this.tagName === 'IMG'){
	          cache.push(this)
	          this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	          if (timeout) clearTimeout(timeout)
	          timeout = setTimeout(function(){ cache = [] }, 60000)
	        }
	        this.parentNode.removeChild(this)
	      }
	    })
	  }
	})(Zepto)
	
	
	
	
	
	
	
	;(function($){
	  var data = {}, dataAttr = $.fn.data, camelize = $.camelCase,
	    exp = $.expando = 'Zepto' + (+new Date()), emptyArray = []
	
	  // Get value from node:
	  // 1. first try key as given,
	  // 2. then try camelized key,
	  // 3. fall back to reading "data-*" attribute.
	  function getData(node, name) {
	    var id = node[exp], store = id && data[id]
	    if (name === undefined) return store || setData(node)
	    else {
	      if (store) {
	        if (name in store) return store[name]
	        var camelName = camelize(name)
	        if (camelName in store) return store[camelName]
	      }
	      return dataAttr.call($(node), name)
	    }
	  }
	
	  // Store value under camelized key on node
	  function setData(node, name, value) {
	    var id = node[exp] || (node[exp] = ++$.uuid),
	      store = data[id] || (data[id] = attributeData(node))
	    if (name !== undefined) store[camelize(name)] = value
	    return store
	  }
	
	  // Read all "data-*" attributes from a node
	  function attributeData(node) {
	    var store = {}
	    $.each(node.attributes || emptyArray, function(i, attr){
	      if (attr.name.indexOf('data-') == 0)
	        store[camelize(attr.name.replace('data-', ''))] =
	          $.zepto.deserializeValue(attr.value)
	    })
	    return store
	  }
	
	  $.fn.data = function(name, value) {
	    return value === undefined ?
	      // set multiple values via object
	      $.isPlainObject(name) ?
	        this.each(function(i, node){
	          $.each(name, function(key, value){ setData(node, key, value) })
	        }) :
	        // get value from first element
	        (0 in this ? getData(this[0], name) : undefined) :
	      // set value on all elements
	      this.each(function(){ setData(this, name, value) })
	  }
	
	  $.fn.removeData = function(names) {
	    if (typeof names == 'string') names = names.split(/\s+/)
	    return this.each(function(){
	      var id = this[exp], store = id && data[id]
	      if (store) $.each(names || store, function(key){
	        delete store[names ? camelize(this) : key]
	      })
	    })
	  }
	
	  // Generate extended `remove` and `empty` functions
	  ;['remove', 'empty'].forEach(function(methodName){
	    var origFn = $.fn[methodName]
	    $.fn[methodName] = function() {
	      var elements = this.find('*')
	      if (methodName === 'remove') elements = elements.add(this)
	      elements.removeData()
	      return origFn.call(this)
	    }
	  })
	})(Zepto)
	
	
	
	
	
	;(function($){
	  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
	  // Option flags:
	  //   - once: Callbacks fired at most one time.
	  //   - memory: Remember the most recent context and arguments
	  //   - stopOnFalse: Cease iterating over callback list
	  //   - unique: Permit adding at most one instance of the same callback
	  $.Callbacks = function(options) {
	    options = $.extend({}, options)
	
	    var memory, // Last fire value (for non-forgettable lists)
	        fired,  // Flag to know if list was already fired
	        firing, // Flag to know if list is currently firing
	        firingStart, // First callback to fire (used internally by add and fireWith)
	        firingLength, // End of the loop when firing
	        firingIndex, // Index of currently firing callback (modified by remove if needed)
	        list = [], // Actual callback list
	        stack = !options.once && [], // Stack of fire calls for repeatable lists
	        fire = function(data) {
	          memory = options.memory && data
	          fired = true
	          firingIndex = firingStart || 0
	          firingStart = 0
	          firingLength = list.length
	          firing = true
	          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
	            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
	              memory = false
	              break
	            }
	          }
	          firing = false
	          if (list) {
	            if (stack) stack.length && fire(stack.shift())
	            else if (memory) list.length = 0
	            else Callbacks.disable()
	          }
	        },
	
	        Callbacks = {
	          add: function() {
	            if (list) {
	              var start = list.length,
	                  add = function(args) {
	                    $.each(args, function(_, arg){
	                      if (typeof arg === "function") {
	                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
	                      }
	                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
	                    })
	                  }
	              add(arguments)
	              if (firing) firingLength = list.length
	              else if (memory) {
	                firingStart = start
	                fire(memory)
	              }
	            }
	            return this
	          },
	          remove: function() {
	            if (list) {
	              $.each(arguments, function(_, arg){
	                var index
	                while ((index = $.inArray(arg, list, index)) > -1) {
	                  list.splice(index, 1)
	                  // Handle firing indexes
	                  if (firing) {
	                    if (index <= firingLength) --firingLength
	                    if (index <= firingIndex) --firingIndex
	                  }
	                }
	              })
	            }
	            return this
	          },
	          has: function(fn) {
	            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
	          },
	          empty: function() {
	            firingLength = list.length = 0
	            return this
	          },
	          disable: function() {
	            list = stack = memory = undefined
	            return this
	          },
	          disabled: function() {
	            return !list
	          },
	          lock: function() {
	            stack = undefined;
	            if (!memory) Callbacks.disable()
	            return this
	          },
	          locked: function() {
	            return !stack
	          },
	          fireWith: function(context, args) {
	            if (list && (!fired || stack)) {
	              args = args || []
	              args = [context, args.slice ? args.slice() : args]
	              if (firing) stack.push(args)
	              else fire(args)
	            }
	            return this
	          },
	          fire: function() {
	            return Callbacks.fireWith(this, arguments)
	          },
	          fired: function() {
	            return !!fired
	          }
	        }
	
	    return Callbacks
	  }
	})(Zepto)
	
	
	
	
	
	
	
	;(function($){
	  var slice = Array.prototype.slice
	
	  function Deferred(func) {
	    var tuples = [
	          // action, add listener, listener list, final state
	          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
	          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
	          [ "notify", "progress", $.Callbacks({memory:1}) ]
	        ],
	        state = "pending",
	        promise = {
	          state: function() {
	            return state
	          },
	          always: function() {
	            deferred.done(arguments).fail(arguments)
	            return this
	          },
	          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
	            var fns = arguments
	            return Deferred(function(defer){
	              $.each(tuples, function(i, tuple){
	                var fn = $.isFunction(fns[i]) && fns[i]
	                deferred[tuple[1]](function(){
	                  var returned = fn && fn.apply(this, arguments)
	                  if (returned && $.isFunction(returned.promise)) {
	                    returned.promise()
	                      .done(defer.resolve)
	                      .fail(defer.reject)
	                      .progress(defer.notify)
	                  } else {
	                    var context = this === promise ? defer.promise() : this,
	                        values = fn ? [returned] : arguments
	                    defer[tuple[0] + "With"](context, values)
	                  }
	                })
	              })
	              fns = null
	            }).promise()
	          },
	
	          promise: function(obj) {
	            return obj != null ? $.extend( obj, promise ) : promise
	          }
	        },
	        deferred = {}
	
	    $.each(tuples, function(i, tuple){
	      var list = tuple[2],
	          stateString = tuple[3]
	
	      promise[tuple[1]] = list.add
	
	      if (stateString) {
	        list.add(function(){
	          state = stateString
	        }, tuples[i^1][2].disable, tuples[2][2].lock)
	      }
	
	      deferred[tuple[0]] = function(){
	        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
	        return this
	      }
	      deferred[tuple[0] + "With"] = list.fireWith
	    })
	
	    promise.promise(deferred)
	    if (func) func.call(deferred, deferred)
	    return deferred
	  }
	
	  $.when = function(sub) {
	    var resolveValues = slice.call(arguments),
	        len = resolveValues.length,
	        i = 0,
	        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
	        deferred = remain === 1 ? sub : Deferred(),
	        progressValues, progressContexts, resolveContexts,
	        updateFn = function(i, ctx, val){
	          return function(value){
	            ctx[i] = this
	            val[i] = arguments.length > 1 ? slice.call(arguments) : value
	            if (val === progressValues) {
	              deferred.notifyWith(ctx, val)
	            } else if (!(--remain)) {
	              deferred.resolveWith(ctx, val)
	            }
	          }
	        }
	
	    if (len > 1) {
	      progressValues = new Array(len)
	      progressContexts = new Array(len)
	      resolveContexts = new Array(len)
	      for ( ; i < len; ++i ) {
	        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
	          resolveValues[i].promise()
	            .done(updateFn(i, resolveContexts, resolveValues))
	            .fail(deferred.reject)
	            .progress(updateFn(i, progressContexts, progressValues))
	        } else {
	          --remain
	        }
	      }
	    }
	    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
	    return deferred.promise()
	  }
	
	  $.Deferred = Deferred
	})(Zepto)
	
	
	
	
	
	;(function($){
	  var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches
	
	  function visible(elem){
	    elem = $(elem)
	    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
	  }
	
	  // Implements a subset from:
	  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
	  //
	  // Each filter function receives the current index, all nodes in the
	  // considered set, and a value if there were parentheses. The value
	  // of `this` is the node currently being considered. The function returns the
	  // resulting node(s), null, or undefined.
	  //
	  // Complex selectors are not supported:
	  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
	  //   ul.inner:first > li
	  var filters = $.expr[':'] = {
	    visible:  function(){ if (visible(this)) return this },
	    hidden:   function(){ if (!visible(this)) return this },
	    selected: function(){ if (this.selected) return this },
	    checked:  function(){ if (this.checked) return this },
	    parent:   function(){ return this.parentNode },
	    first:    function(idx){ if (idx === 0) return this },
	    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
	    eq:       function(idx, _, value){ if (idx === value) return this },
	    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
	    has:      function(idx, _, sel){ if (zepto.qsa(this, sel).length) return this }
	  }
	
	  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
	      childRe  = /^\s*>/,
	      classTag = 'Zepto' + (+new Date())
	
	  function process(sel, fn) {
	    // quote the hash in `a[href^=#]` expression
	    sel = sel.replace(/=#\]/g, '="#"]')
	    var filter, arg, match = filterRe.exec(sel)
	    if (match && match[2] in filters) {
	      filter = filters[match[2]], arg = match[3]
	      sel = match[1]
	      if (arg) {
	        var num = Number(arg)
	        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
	        else arg = num
	      }
	    }
	    return fn(sel, filter, arg)
	  }
	
	  zepto.qsa = function(node, selector) {
	    return process(selector, function(sel, filter, arg){
	      try {
	        var taggedParent
	        if (!sel && filter) sel = '*'
	        else if (childRe.test(sel))
	          // support "> *" child queries by tagging the parent node with a
	          // unique class and prepending that classname onto the selector
	          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel
	
	        var nodes = oldQsa(node, sel)
	      } catch(e) {
	        console.error('error performing selector: %o', selector)
	        throw e
	      } finally {
	        if (taggedParent) taggedParent.removeClass(classTag)
	      }
	      return !filter ? nodes :
	        zepto.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
	    })
	  }
	
	  zepto.matches = function(node, selector){
	    return process(selector, function(sel, filter, arg){
	      return (!sel || oldMatches(node, sel)) &&
	        (!filter || filter.call(node, null, arg) === node)
	    })
	  }
	})(Zepto)
	
	
	
	
	
	;(function($){
	  var touch = {},
	    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
	    longTapDelay = 750,
	    gesture
	
	  function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >=
	      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
	  }
	
	  function longTap() {
	    longTapTimeout = null
	    if (touch.last) {
	      touch.el.trigger('longTap')
	      touch = {}
	    }
	  }
	
	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout)
	    longTapTimeout = null
	  }
	
	  function cancelAll() {
	    if (touchTimeout) clearTimeout(touchTimeout)
	    if (tapTimeout) clearTimeout(tapTimeout)
	    if (swipeTimeout) clearTimeout(swipeTimeout)
	    if (longTapTimeout) clearTimeout(longTapTimeout)
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
	    touch = {}
	  }
	
	  function isPrimaryTouch(event){
	    return (event.pointerType == 'touch' ||
	      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
	      && event.isPrimary
	  }
	
	  function isPointerEventType(e, type){
	    return (e.type == 'pointer'+type ||
	      e.type.toLowerCase() == 'mspointer'+type)
	  }
	
	  $(document).ready(function(){
	    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType
	
	    if ('MSGesture' in window) {
	      gesture = new MSGesture()
	      gesture.target = document.body
	    }
	
	    $(document)
	      .bind('MSGestureEnd', function(e){
	        var swipeDirectionFromVelocity =
	          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
	        if (swipeDirectionFromVelocity) {
	          touch.el.trigger('swipe')
	          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
	        }
	      })
	      .on('touchstart MSPointerDown pointerdown', function(e){
	        if((_isPointerType = isPointerEventType(e, 'down')) &&
	          !isPrimaryTouch(e)) return
	        firstTouch = _isPointerType ? e : e.touches[0]
	        if (e.touches && e.touches.length === 1 && touch.x2) {
	          // Clear out touch movement data if we have it sticking around
	          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	          touch.x2 = undefined
	          touch.y2 = undefined
	        }
	        now = Date.now()
	        delta = now - (touch.last || now)
	        touch.el = $('tagName' in firstTouch.target ?
	          firstTouch.target : firstTouch.target.parentNode)
	        touchTimeout && clearTimeout(touchTimeout)
	        touch.x1 = firstTouch.pageX
	        touch.y1 = firstTouch.pageY
	        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
	        touch.last = now
	        longTapTimeout = setTimeout(longTap, longTapDelay)
	        // adds the current touch contact for IE gesture recognition
	        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
	      })
	      .on('touchmove MSPointerMove pointermove', function(e){
	        if((_isPointerType = isPointerEventType(e, 'move')) &&
	          !isPrimaryTouch(e)) return
	        firstTouch = _isPointerType ? e : e.touches[0]
	        cancelLongTap()
	        touch.x2 = firstTouch.pageX
	        touch.y2 = firstTouch.pageY
	
	        deltaX += Math.abs(touch.x1 - touch.x2)
	        deltaY += Math.abs(touch.y1 - touch.y2)
	      })
	      .on('touchend MSPointerUp pointerup', function(e){
	        if((_isPointerType = isPointerEventType(e, 'up')) &&
	          !isPrimaryTouch(e)) return
	        cancelLongTap()
	
	        // swipe
	        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
	            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))
	
	          swipeTimeout = setTimeout(function() {
	            touch.el.trigger('swipe')
	            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
	            touch = {}
	          }, 0)
	
	        // normal tap
	        else if ('last' in touch)
	          // don't fire tap when delta position changed by more than 30 pixels,
	          // for instance when moving to a point and back to origin
	          if (deltaX < 30 && deltaY < 30) {
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function() {
	
	              // trigger universal 'tap' with the option to cancelTouch()
	              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	              var event = $.Event('tap')
	              event.cancelTouch = cancelAll
	              touch.el.trigger(event)
	
	              // trigger double tap immediately
	              if (touch.isDoubleTap) {
	                if (touch.el) touch.el.trigger('doubleTap')
	                touch = {}
	              }
	
	              // trigger single tap after 250ms of inactivity
	              else {
	                touchTimeout = setTimeout(function(){
	                  touchTimeout = null
	                  if (touch.el) touch.el.trigger('singleTap')
	                  touch = {}
	                }, 250)
	              }
	            }, 0)
	          } else {
	            touch = {}
	          }
	          deltaX = deltaY = 0
	
	      })
	      // when the browser window loses focus,
	      // for example when a modal dialog is shown,
	      // cancel all ongoing events
	      .on('touchcancel MSPointerCancel pointercancel', cancelAll)
	
	    // scrolling the window indicates intention of the user
	    // to scroll, not tap or swipe, so cancel all ongoing events
	    $(window).on('scroll', cancelAll)
	  })
	
	  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
	    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
	    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
	  })
	})(Zepto)
	
	
	
	
	
	;(function($){
	  $.fn.end = function(){
	    return this.prevObject || $()
	  }
	
	  $.fn.andSelf = function(){
	    return this.add(this.prevObject || $())
	  }
	
	  'filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings'.split(',').forEach(function(property){
	    var fn = $.fn[property]
	    $.fn[property] = function(){
	      var ret = fn.apply(this, arguments)
	      ret.prevObject = this
	      return ret
	    }
	  })
	})(Zepto)
	
	
	
	
	
	;(function($) {
	    "use strict";
	    ['width', 'height'].forEach(function(dimension) {
	        var  Dimension = dimension.replace(/./, function(m) {
	            return m[0].toUpperCase();
	        });
	        $.fn['outer' + Dimension] = function(margin) {
	            var elem = this;
	            if (elem) {
	                var size = elem[dimension]();
	                var sides = {
	                    'width': ['left', 'right'],
	                    'height': ['top', 'bottom']
	                };
	                sides[dimension].forEach(function(side) {
	                    if (margin) size += parseInt(elem.css('margin-' + side), 10);
	                });
	                return size;
	            } else {
	                return null;
	            }
	        };
	    });
	
	
	    //support
	    $.support = (function() {
	        var support = {
	            touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch)
	        };
	        return support;
	    })();
	
	    $.touchEvents = {
	        start: $.support.touch ? 'touchstart' : 'mousedown',
	        move: $.support.touch ? 'touchmove' : 'mousemove',
	        end: $.support.touch ? 'touchend' : 'mouseup'
	    };
	
	    $.getTranslate = function (el, axis) {
	        var matrix, curTransform, curStyle, transformMatrix;
	
	        // automatic axis detection
	        if (typeof axis === 'undefined') {
	            axis = 'x';
	        }
	
	        curStyle = window.getComputedStyle(el, null);
	        if (window.WebKitCSSMatrix) {
	            // Some old versions of Webkit choke when 'none' is passed; pass
	            // empty string instead in this case
	            transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
	        }
	        else {
	            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	            matrix = transformMatrix.toString().split(',');
	        }
	
	        if (axis === 'x') {
	            //Latest Chrome and webkits Fix
	            if (window.WebKitCSSMatrix)
	                curTransform = transformMatrix.m41;
	            //Crazy IE10 Matrix
	            else if (matrix.length === 16)
	                curTransform = parseFloat(matrix[12]);
	            //Normal Browsers
	            else
	                curTransform = parseFloat(matrix[4]);
	        }
	        if (axis === 'y') {
	            //Latest Chrome and webkits Fix
	            if (window.WebKitCSSMatrix)
	                curTransform = transformMatrix.m42;
	            //Crazy IE10 Matrix
	            else if (matrix.length === 16)
	                curTransform = parseFloat(matrix[13]);
	            //Normal Browsers
	            else
	                curTransform = parseFloat(matrix[5]);
	        }
	
	        return curTransform || 0;
	    };
	    $.requestAnimationFrame = function (callback) {
	        if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
	        else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
	        else if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(callback);
	        else {
	            return window.setTimeout(callback, 1000 / 60);
	        }
	    };
	
	    $.cancelAnimationFrame = function (id) {
	        if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);
	        else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
	        else if (window.mozCancelAnimationFrame) return window.mozCancelAnimationFrame(id);
	        else {
	            return window.clearTimeout(id);
	        }
	    };
	
	
	    $.fn.transitionEnd = function(callback) {
	        var events = ['webkitTransitionEnd', 'transitionend'],
	            i, dom = this;
	
	        function fireCallBack(e) {
	            /*jshint validthis:true */
	            if (e.target !== this) return;
	            callback.call(this, e);
	            for (i = 0; i < events.length; i++) {
	                dom.off(events[i], fireCallBack);
	            }
	        }
	        if (callback) {
	            for (i = 0; i < events.length; i++) {
	                dom.on(events[i], fireCallBack);
	            }
	        }
	        return this;
	    };
	    $.fn.dataset = function() {
	        var el = this[0];
	        if (el) {
	            var dataset = {};
	            if (el.dataset) {
	
	                for (var dataKey in el.dataset) { // jshint ignore:line
	                    dataset[dataKey] = el.dataset[dataKey];
	                }
	            } else {
	                for (var i = 0; i < el.attributes.length; i++) {
	                    var attr = el.attributes[i];
	                    if (/^data-/.test(attr.name)) {
	                        dataset[$.toCamelCase(attr.name.split('data-')[1])] = attr.value;
	                    }
	                }
	            }
	            for (var key in dataset) {
	                if (dataset[key] === 'false') dataset[key] = false;
	                else if (dataset[key] === 'true') dataset[key] = true;
	                else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] = dataset[key] * 1;
	            }
	            return dataset;
	        } else return undefined;
	    };
	    $.fn.data = function(key, value) {
	        if (typeof key === 'undefined') {
	            return $(this).dataset();
	        }
	        if (typeof value === 'undefined') {
	            // Get value
	            if (this[0] && this[0].getAttribute) {
	                var dataKey = this[0].getAttribute('data-' + key);
	
	                if (dataKey) {
	                    return dataKey;
	                } else if (this[0].smElementDataStorage && (key in this[0].smElementDataStorage)) {
	
	
	                    return this[0].smElementDataStorage[key];
	
	                } else {
	                    return undefined;
	                }
	            } else return undefined;
	
	        } else {
	            // Set value
	            for (var i = 0; i < this.length; i++) {
	                var el = this[i];
	                if (!el.smElementDataStorage) el.smElementDataStorage = {};
	                el.smElementDataStorage[key] = value;
	            }
	            return this;
	        }
	    };
	    $.fn.animationEnd = function(callback) {
	        var events = ['webkitAnimationEnd', 'animationend'],
	            i, dom = this;
	
	        function fireCallBack(e) {
	            callback(e);
	            for (i = 0; i < events.length; i++) {
	                dom.off(events[i], fireCallBack);
	            }
	        }
	        if (callback) {
	            for (i = 0; i < events.length; i++) {
	                dom.on(events[i], fireCallBack);
	            }
	        }
	        return this;
	    };
	    $.fn.transition = function(duration) {
	        if (typeof duration !== 'string') {
	            duration = duration + 'ms';
	        }
	        for (var i = 0; i < this.length; i++) {
	            var elStyle = this[i].style;
	            elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	        }
	        return this;
	    };
	    $.fn.transform = function(transform) {
	        for (var i = 0; i < this.length; i++) {
	            var elStyle = this[i].style;
	            elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	        }
	        return this;
	    };
	    $.fn.prevAll = function (selector) {
	        var prevEls = [];
	        var el = this[0];
	        if (!el) return $([]);
	        while (el.previousElementSibling) {
	            var prev = el.previousElementSibling;
	            if (selector) {
	                if($(prev).is(selector)) prevEls.push(prev);
	            }
	            else prevEls.push(prev);
	            el = prev;
	        }
	        return $(prevEls);
	    };
	    $.fn.nextAll = function (selector) {
	        var nextEls = [];
	        var el = this[0];
	        if (!el) return $([]);
	        while (el.nextElementSibling) {
	            var next = el.nextElementSibling;
	            if (selector) {
	                if($(next).is(selector)) nextEls.push(next);
	            }
	            else nextEls.push(next);
	            el = next;
	        }
	        return $(nextEls);
	    };
	
	    //重置zepto的show方法，防止有些人引用的版本中 show 方法操作 opacity 属性影响动画执行
	    $.fn.show = function(){
	        var elementDisplay = {};
	        function defaultDisplay(nodeName) {
	            var element, display;
	            if (!elementDisplay[nodeName]) {
	                element = document.createElement(nodeName);
	                document.body.appendChild(element);
	                display = getComputedStyle(element, '').getPropertyValue("display");
	                element.parentNode.removeChild(element);
	                display === "none" && (display = "block");
	                elementDisplay[nodeName] = display;
	            }
	            return elementDisplay[nodeName];
	        }
	
	        return this.each(function(){
	            this.style.display === "none" && (this.style.display = '');
	            if (getComputedStyle(this, '').getPropertyValue("display") === "none");
	            this.style.display = defaultDisplay(this.nodeName);
	        });
	    };
	})(Zepto)


/***/ },
/* 2 */
/***/ function(module, exports) {

	// jshint ignore: start
	/*
	 * 路由器
	 */
	
	if (!window.CustomEvent) {
	    window.CustomEvent = function(type, config) {
	        config = config || {
	            bubbles: false,
	            cancelable: false,
	            detail: undefined
	        };
	        var e = document.createEvent('CustomEvent');
	        e.initCustomEvent(type, config.bubbles, config.cancelable, config.detail);
	        return e;
	    };
	
	    window.CustomEvent.prototype = window.Event.prototype;
	}
	
	var Router = function() {
	    this.state = sessionStorage;
	    this.state.setItem("stateid", parseInt(this.state.getItem("stateid") || 1) + 1);
	    this.state.setItem("currentStateID", this.state.getItem("stateid"));
	    this.stack = sessionStorage;
	    this.stack.setItem("back", "[]"); //返回栈, {url, pageid, stateid}
	    this.stack.setItem("forward", "[]"); //前进栈, {url, pageid, stateid}
	    this.init();
	    this.xhr = null;
	    // 解决各个webview针对页面重新加载（包括后退造成的）时History State的处理差异，加此标志位
	    this.newLoaded = true;
	};
	
	Router.prototype.defaults = {};
	
	Router.prototype.init = function() {
	    var currentPage = this.getCurrentPage(),
	        page1st = $(".page").eq(0);
	    if (!currentPage[0]) currentPage = page1st.addClass("page-current");
	    var hash = location.hash;
	    if (currentPage[0] && !currentPage[0].id) currentPage[0].id = (hash ? hash.slice(1) : this.genRandomID());
	
	    if (!currentPage[0]) throw new Error("can't find .page element");
	    var newCurrentPage = $(hash);
	
	    // 确保是 page 时才切换显示，不然可能只是普通的 hash（#129）
	    if (newCurrentPage[0] && newCurrentPage.hasClass('page') && (!currentPage[0] || hash.slice(1) !== currentPage[0].id)) {
	        currentPage.removeClass("page-current");
	        newCurrentPage.addClass("page-current");
	        currentPage = newCurrentPage;
	    }
	
	    var id = this.genStateID(),
	        curUrl = location.href,
	        // 需要设置入口页的Url，方便用户在类似xx/yy#step2 的页面刷新加载后 点击后退可以回到入口页
	        entryUrl = curUrl.split('#')[0];
	
	    // 在页面加载时，可能会包含一个非空的状态对象history.state。这种情况是会发生的，例如，如果页面中使用pushState()或replaceState()方法设置了一个状态对象，然后用户重启了浏览器。https://developer.mozilla.org/en-US/docs/Web/API/History_API#Reading_the_current_state
	    history.replaceState({
	        url: curUrl,
	        id: id
	    }, '', curUrl);
	    this.setCurrentStateID(id);
	    this.pushBack({
	        url: entryUrl,
	        pageid: '#' + page1st[0].id,
	        id: id
	    });
	    window.addEventListener('popstate', $.proxy(this.onpopstate, this));
	};
	
	//加载一个页面,传入的参数是页面id或者url
	Router.prototype.loadPage = function(url) {
	
	    // android chrome 在移动端加载页面时不会触发一次‘popstate’事件
	    this.newLoaded && (this.newLoaded = false);
	    this.getPage(url, function(page) {
	
	        var pageid = this.getCurrentPage()[0].id;
	        this.pushBack({
	            url: url,
	            pageid: "#" + pageid,
	            id: this.getCurrentStateID()
	        });
	
	        //删除全部forward
	        var forward = JSON.parse(this.state.getItem("forward") || "[]");
	        for (var i = 0; i < forward.length; i++) {
	            $(forward[i].pageid).each(function() {
	                var $page = $(this);
	                if ($page.data("page-remote")) $page.remove();
	            });
	        }
	        this.state.setItem("forward", "[]"); //clearforward
	
	        page.insertAfter($(".page")[0]);
	        this.animatePages(this.getCurrentPage(), page);
	
	        var id = this.genStateID();
	        this.setCurrentStateID(id);
	
	        this.pushState(url, id);
	
	        this.forwardStack = []; //clear forward stack
	
	    });
	};
	
	/**
	 * 页面转场效果
	 *
	 * 首先给要移入展示的页面添加上当前页面标识（page-current），要移出展示的移除当前页面标识；
	 * 然后给移入移除的页面添加上对应的动画 class，动画结束后清除动画 class 并发送对应事件。
	 *
	 * 注意，不能在动画后才给移入展示的页面添加当前页面标识，否则，在快速切换的时候将会因为没有 .page-current
	 * 的页面而报错（具体来说是找这类页面的 id 时报错，目前并没有确保 id 查找的健壮性）
	 *
	 * @param leftPage 从效果上看位于左侧的页面，jQuery/Zepto 对象
	 * @param rightPage 从效果上位于右侧的页面，jQuery/Zepto 对象
	 * @param {Boolean} leftToRight 是否是从左往右切换（代表是后退），默认是相当于 false
	 */
	Router.prototype.animatePages = function(leftPage, rightPage, leftToRight) {
	    var curPageClass = 'page-current';
	    var animPageClasses = [
	        'page-from-center-to-left',
	        'page-from-center-to-right',
	        'page-from-right-to-center',
	        'page-from-left-to-center'
	    ].join(' ');
	
	    if (!leftToRight) {
	        // 新页面从右侧切入
	        rightPage.trigger("pageAnimationStart", [rightPage[0].id, rightPage]);
	        leftPage.removeClass(animPageClasses).removeClass(curPageClass).addClass('page-from-center-to-left');
	        rightPage.removeClass(animPageClasses).addClass(curPageClass).addClass('page-from-right-to-center');
	        leftPage.animationEnd(function() {
	            leftPage.removeClass(animPageClasses);
	        });
	        rightPage.animationEnd(function() {
	            rightPage.removeClass(animPageClasses);
	            rightPage.trigger("pageAnimationEnd", [rightPage[0].id, rightPage]);
	            rightPage.trigger("pageInitInternal", [rightPage[0].id, rightPage]);
	        });
	    } else {
	        leftPage.trigger("pageAnimationStart", [rightPage[0].id, rightPage]);
	        leftPage.removeClass(animPageClasses).addClass(curPageClass).addClass('page-from-left-to-center');
	        rightPage.removeClass(animPageClasses).removeClass(curPageClass).addClass('page-from-center-to-right');
	        leftPage.animationEnd(function() {
	            leftPage.removeClass(animPageClasses);
	            leftPage.trigger("pageAnimationEnd", [leftPage[0].id, leftPage]);
	            leftPage.trigger("pageReinit", [leftPage[0].id, leftPage]);
	        });
	        rightPage.animationEnd(function() {
	            rightPage.removeClass(animPageClasses);
	        });
	    }
	
	};
	
	Router.prototype.getCurrentPage = function() {
	    return $(".page-current");
	};
	
	// 其实没调用到，如果无法前进，则加载对应的url
	Router.prototype.forward = function(url) {
	    var stack = JSON.parse(this.stack.getItem("forward"));
	    if (stack.length) {
	        history.forward();
	    } else {
	        location.href = url;
	    }
	};
	
	// 点击 .back 按钮，如果无法后退，则加载对应的url
	Router.prototype.back = function(url) {
	    var stack = JSON.parse(this.stack.getItem("back"));
	    if (stack.length) {
	        history.back();
	    } else if (url) {
	        location.href = url;
	    } else {
	        console.warn('[router.back]: can not back')
	    }
	};
	
	// popstate 后退
	Router.prototype._back = function(url) {
	    var h = this.popBack();
	    var currentPage = this.getCurrentPage();
	    var newPage = $(h.pageid);
	    if (!newPage[0]) return;
	    this.pushForward({
	        url: location.href,
	        pageid: "#" + currentPage[0].id,
	        id: this.getCurrentStateID()
	    });
	    this.setCurrentStateID(h.id);
	    this.animatePages(newPage, currentPage, true);
	};
	
	// popstate 前进
	Router.prototype._forward = function() {
	    var h = this.popForward();
	    var currentPage = this.getCurrentPage();
	    var newPage = $(h.pageid);
	    if (!newPage[0]) return;
	    this.pushBack({
	        url: location.href,
	        pageid: "#" + currentPage[0].id,
	        id: this.getCurrentStateID()
	    });
	    this.setCurrentStateID(h.id);
	    this.animatePages(currentPage, newPage);
	};
	
	Router.prototype.pushState = function(url, id) {
	    history.pushState({
	        url: url,
	        id: id
	    }, '', url);
	};
	
	Router.prototype.onpopstate = function(d) {
	    var state = d.state;
	    // 刷新再后退导致无法取到state
	    if (!state || this.newLoaded) {
	        this.newLoaded = false;
	        return;
	    }
	
	    if (state.id === this.getCurrentStateID()) {
	        return false;
	    }
	    var forward = state.id > this.getCurrentStateID();
	    if (forward) this._forward();
	    else this._back(state.url);
	};
	
	//根据url获取页面的DOM，如果是一个内联页面，则直接返回，否则用ajax加载
	Router.prototype.getPage = function(url, callback) {
	    if (url[0] === "#") return callback.apply(this, [$(url)]);
	
	    this.dispatch("pageLoadStart");
	
	    if (this.xhr && this.xhr.readyState < 4) {
	        this.xhr.onreadystatechange = function() {};
	        this.xhr.abort();
	        this.dispatch("pageLoadCancel");
	    }
	
	    var self = this;
	
	    this.xhr = $.ajax({
	        url: url,
	        success: $.proxy(function(data, s, xhr) {
	            var $page = this.parseXHR(xhr);
	            if (!$page[0].id) $page[0].id = this.genRandomID();
	            $page.data("page-remote", 1);
	            callback.apply(this, [$page]);
	        }, this),
	        error: function() {
	            self.dispatch("pageLoadError");
	        },
	        complete: function() {
	            self.dispatch("pageLoadComplete");
	        }
	    });
	};
	
	Router.prototype.parseXHR = function(xhr) {
	    var html = '';
	    var response = xhr.responseText;
	    var matches = response.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
	    if (matches) {
	        html = matches[1];
	    } else {
	        html = response;
	    }
	    html = "<div>" + html + "</div>";
	    var tmp = $(html);
	
	    tmp.find(".popup, .panel, .panel-overlay").appendTo(document.body);
	
	    var $page = tmp.find(".page");
	    if (!$page[0]) $page = tmp.addClass("page");
	    return $page;
	};
	
	Router.prototype.genStateID = function() {
	    var id = parseInt(this.state.getItem("stateid")) + 1;
	    this.state.setItem("stateid", id);
	    return id;
	};
	
	Router.prototype.getCurrentStateID = function() {
	    return parseInt(this.state.getItem("currentStateID"));
	};
	
	Router.prototype.setCurrentStateID = function(id) {
	    this.state.setItem("currentStateID", id);
	};
	
	Router.prototype.genRandomID = function() {
	    return "page-" + (+new Date());
	};
	
	Router.prototype.popBack = function() {
	    var stack = JSON.parse(this.stack.getItem("back"));
	    if (!stack.length) return null;
	    var h = stack.splice(stack.length - 1, 1)[0];
	    this.stack.setItem("back", JSON.stringify(stack));
	    return h;
	};
	
	Router.prototype.pushBack = function(h) {
	    var stack = JSON.parse(this.stack.getItem("back"));
	    stack.push(h);
	    this.stack.setItem("back", JSON.stringify(stack));
	};
	
	Router.prototype.popForward = function() {
	    var stack = JSON.parse(this.stack.getItem("forward"));
	    if (!stack.length) return null;
	    var h = stack.splice(stack.length - 1, 1)[0];
	    this.stack.setItem("forward", JSON.stringify(stack));
	    return h;
	};
	
	Router.prototype.pushForward = function(h) {
	    var stack = JSON.parse(this.stack.getItem("forward"));
	    stack.push(h);
	    this.stack.setItem("forward", JSON.stringify(stack));
	};
	
	Router.prototype.dispatch = function(event) {
	    var e = new CustomEvent(event, {
	        bubbles: true,
	        cancelable: true
	    });
	
	    window.dispatchEvent(e);
	};
	
	$(function() {
	    var router = new Router();
	
	    $(document).on("click", "[data-toggle=route]", function(e) {
	        e.preventDefault();
	
	        var $target = $(e.currentTarget);
	        var url = $target.attr("href");
	
	        if ($target.data("action") === "back") {
	            router.back(url);
	            return;
	        }
	
	        if (!url || url === "#") return;
	
	        if ($target.data("action") === "load") {
	            router.loadPage(url);
	        }
	    });
	});
	
	module.exports = Router;
	
	// jshint ignore: end


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: shunjinchan
	 * @Date:   2015-10-29 17:22:40
	 * @Last Modified by:   pigsy.chen
	 * @Last Modified time: 2016-01-08 00:43:02
	 */
	
	__webpack_require__(4);
	
	// 默认配置
	var defaults = {
	    backdrop: true, // 蒙层
	    animation: 'from-bottom', // 动画
	    box: '<div class="popup"><div class="popup-body"></div></div>', // popup box，当没有传入 target 为空时使用
	    css: null
	};
	
	var instance;
	
	function Popup() {
	    //如果已经缓存了实例，则直接返回缓存的实例
	    if (instance instanceof Popup) {
	        return instance;
	    }
	
	    this.createTime = new Date();
	    //缓存实例
	    instance = this;
	
	    return this;
	}
	
	Popup.prototype = {
	    constructor: Popup,
	
	    _render: function(configs) {
	        var self = this;
	        var animation = configs.animation || defaults.animation;
	        var extraClass = configs.extraClass || '';
	        var titleHTML = configs.title ? '<div class="popup-header top-bar border-b"><h3 class="popup-title">'
	            + configs.title + '</h3><a href="" class="close" data-toggle="popup" data-action="close"></a></div>' : '';
	        var bodyHTML = configs.body ? '<div class="popup-body">' + configs.body + '</div>' : '';
	        var footerHTML = configs.footer ? '<div class="popup-footer bottom-bar border-t">' + configs.footer + '</div>' : '';
	        var css = configs.css || defaults.css;
	
	        if (configs.target && configs.target.length > 0) {
	            this.$box = configs.target;
	
	            this.destory = false;
	        } else {
	            this.$box = $(defaults.box).appendTo('body');
	            this.$box.html(titleHTML + footerHTML + bodyHTML);
	
	            this.destory = true;
	        }
	
	        this.$box.show();
	        extraClass && this.$box.addClass(extraClass);
	        animation && this.$box.addClass(animation);
	        css && this.$box.css(css);
	
	        // 触发 relayout，少了这玩意 css 动画不执行
	        var clientLeft = this.$box[0].clientLeft;
	
	        this.$box.trigger('open');
	        this.$box.removeClass('transition-out').addClass('transition-in')
	            .transitionEnd(function(e) {
	                if (self.$box.hasClass('transition-out')) {
	                    // 触发 closed 事件
	                    self.$box.trigger('closed');
	                } else {
	                    self.$box.trigger('opened');
	                }
	            });
	
	        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
	        $('body').append(this.$backdrop);
	    },
	
	    /**
	     * 打开弹窗
	     * @param {Object} configs 自定义配置
	     */
	    open: function(configs) {
	        if (this.isOpen) return;
	
	        this._render(configs);
	        bindEvents(configs);
	        this.$backdrop && this.$backdrop.addClass('visible');
	        this.isOpen = true;
	    },
	
	    close: function() {
	        var self = this;
	
	        if (!this.$box) return;
	
	        this.$box.trigger('close');
	
	        this.$backdrop && this.$backdrop.removeClass('visible');
	        this.$box.removeClass('transition-in').addClass('transition-out')
	            .transitionEnd(function(e) {
	                if (self.$box.hasClass('transition-out')) {
	                    self.$box.trigger('closed');
	                    self.$box.removeClass('transition-out').hide();
	
	                    self.$backdrop.off();
	                    self.$backdrop.remove();
	
	                    this.destory && self.$box.remove();
	                } else {
	                    self.$box.trigger('opened');
	                }
	            });
	
	        this.isOpen = false;
	    }
	};
	
	function bindEvents(configs) {
	    var freeze = configs.freeze;
	
	    instance.$box.on('click', '[data-toggle="popup"]', function(e) {
	        var $target = $(e.currentTarget);
	
	        if ($target.data('action') && $target.data('action') === 'close') {
	            if ($target[0].nodeName.toLowerCase() === 'a') {
	                e.preventDefault();
	            }
	            instance.close();
	        }
	    });
	
	    instance.$backdrop.on('touchmove', function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    });
	
	    if (freeze !== undefined && freeze === false) {
	        instance.$backdrop.on('click', function(e) {
	            instance.close();
	        });
	    }
	}
	
	module.exports = Popup;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./popup.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./popup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2015-12-30 23:40:12\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 03:40:57\n*/\n.popup-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 01:54:51\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* popup begin */\n.popup {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 1040;\n  background: #fff;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: none;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #f3f4f5; }\n\n.popup.from-top {\n  /* 顶部滑入动画 */\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n  .popup.from-top.transition-in, .popup.from-top.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s;\n    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1); }\n  .popup.from-top.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-top.transition-out {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n\n.popup.from-bottom {\n  /* 底部滑入动画 */\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  .popup.from-bottom.transition-in, .popup.from-bottom.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s; }\n  .popup.from-bottom.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-bottom.transition-out {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n\n.popup.from-left {\n  /* 从左向右滑入动画 */\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n  .popup.from-left.transition-in, .popup.from-left.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s; }\n  .popup.from-left.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-left.transition-out {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n\n.popup.from-right {\n  /* 从左向右滑入动画 */\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0); }\n  .popup.from-right.transition-in, .popup.from-right.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s; }\n  .popup.from-right.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-right.transition-out {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n\n.popup-body {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  padding: 10px; }\n\n.popup-header {\n  height: 44px;\n  line-height: 44px;\n  position: relative;\n  background-color: #fbfbfa; }\n  .popup-header.top-bar {\n    position: absolute; }\n    .popup-header.top-bar ~ .popup-body {\n      top: 44px; }\n  .popup-header .close {\n    position: absolute;\n    height: 44px;\n    width: 44px;\n    line-height: 44px;\n    right: 5px;\n    top: 0;\n    font-family: \"iconfont\";\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -webkit-text-stroke-width: 0.2px;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 24px;\n    text-align: center;\n    color: #585c64; }\n  .popup-header .close::before {\n    content: \"\\E604\"; }\n  .popup-header .close:active {\n    color: #ccc; }\n\n.popup-title {\n  line-height: 24px;\n  padding: 10px 50px 10px 15px; }\n\n.popup-footer {\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  background-color: #fff; }\n  .popup-footer.bottom-bar {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%; }\n    .popup-footer.bottom-bar ~ .popup-body {\n      bottom: 44px; }\n\n/* popup end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9wdXAuc2NzcyIsImV4dC9fbWl4aW4uc2NzcyIsImV4dC9fYm9yZGVyLW1peGluLnNjc3MiLCJfc2V0dGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQStKRixZQUFZLENDdEZGO0VBTkYsUUFBUSxFQUFFLE1BQU87RUFDakIsV0FBVyxFQUFFLE1BQU87RUFDcEIsYUFBYSxFQUFFLFFBQVMsR0FNL0I7O0FDaEZEOzs7Ozs7OztFQVFFO0FGRUYsaUJBQWlCO0FBRWpCLE1BQU0sQ0FBQztFQUNILFFBQVEsRUFBRSxRQUFTO0VBQ25CLElBQUksRUFBRSxDQUFFO0VBQ1IsS0FBSyxFQUFFLENBQUU7RUFDVCxHQUFHLEVBQUUsQ0FBRTtFQUNQLE1BQU0sRUFBRSxDQUFFO0VBQ1YsS0FBSyxFQUFFLElBQUs7RUFDWixPQUFPLEVHZWdCLElBQUk7RUhkM0IsVUFBVSxFQUFFLElBQUs7RUFDakIsa0JBQWtCLEVBQUUsVUFBVztFQUMvQixVQUFVLEVBQUUsVUFBVztFQUN2QixPQUFPLEVBQUUsSUFBSztFQUNkLDJCQUEyQixFQUFFLGlCQUFrQjtFQUMvQyxtQkFBbUIsRUFBRSxpQkFBa0I7RUFDdkMsbUJBQW1CLEVBQUUsU0FBVTtFQUMvQixtQkFBbUIsRUFBRSw0QkFBNkI7RUFDbEQsUUFBUSxFQUFFLElBQUs7RUFDZiwwQkFBMEIsRUFBRSxLQUFNO0VBQ2xDLGdCQUFnQixFQUFFLE9BQVEsR0FDN0I7O0FBRUQsTUFBTSxTQUFTLENBQUM7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUUsd0JBQVc7RUFDOUIsU0FBUyxFQUFFLHdCQUFXLEdBa0J6QjtFQXJCRCxNQUFNLFNBQVMsQUFJVixjQUFjLEVBSm5CLE1BQU0sU0FBUyxBQUtWLGVBQWUsQ0FBQztJQUNiLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQix3QkFBd0IsRUFBRSxFQUFHO0lBQzdCLGdCQUFnQixFQUFFLEVBQUc7SUFDckIsa0NBQWtDLEVBQUUscUNBQVk7SUFDaEQsMEJBQTBCLEVBQUUscUNBQVksR0FDM0M7RUFaTCxNQUFNLFNBQVMsQUFhVixjQUFjLENBQUM7SUFDWixpQkFBaUIsRUFBRSxvQkFBVztJQUM5QixTQUFTLEVBQUUsb0JBQVcsR0FDekI7RUFoQkwsTUFBTSxTQUFTLEFBaUJWLGVBQWUsQ0FBQztJQUNiLGlCQUFpQixFQUFFLHdCQUFXO0lBQzlCLFNBQVMsRUFBRSx3QkFBVyxHQUN6Qjs7QUFHTCxNQUFNLFlBQVksQ0FBQztFQUNmLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBRSx1QkFBVztFQUM5QixTQUFTLEVBQUUsdUJBQVcsR0FnQnpCO0VBbkJELE1BQU0sWUFBWSxBQUliLGNBQWMsRUFKbkIsTUFBTSxZQUFZLEFBS2IsZUFBZSxDQUFDO0lBQ2IsMkJBQTJCLEVBQUUsS0FBTTtJQUNuQyxtQkFBbUIsRUFBRSxLQUFNO0lBQzNCLHdCQUF3QixFQUFFLEVBQUc7SUFDN0IsZ0JBQWdCLEVBQUUsRUFBRyxHQUN4QjtFQVZMLE1BQU0sWUFBWSxBQVdiLGNBQWMsQ0FBQztJQUNaLGlCQUFpQixFQUFFLG9CQUFXO0lBQzlCLFNBQVMsRUFBRSxvQkFBVyxHQUN6QjtFQWRMLE1BQU0sWUFBWSxBQWViLGVBQWUsQ0FBQztJQUNiLGlCQUFpQixFQUFFLHVCQUFXO0lBQzlCLFNBQVMsRUFBRSx1QkFBVyxHQUN6Qjs7QUFHTCxNQUFNLFVBQVUsQ0FBQztFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUIsRUFBRSx3QkFBVztFQUM5QixTQUFTLEVBQUUsd0JBQVcsR0FnQnpCO0VBbkJELE1BQU0sVUFBVSxBQUlYLGNBQWMsRUFKbkIsTUFBTSxVQUFVLEFBS1gsZUFBZSxDQUFDO0lBQ2IsMkJBQTJCLEVBQUUsS0FBTTtJQUNuQyxtQkFBbUIsRUFBRSxLQUFNO0lBQzNCLHdCQUF3QixFQUFFLEVBQUc7SUFDN0IsZ0JBQWdCLEVBQUUsRUFBRyxHQUN4QjtFQVZMLE1BQU0sVUFBVSxBQVdYLGNBQWMsQ0FBQztJQUNaLGlCQUFpQixFQUFFLG9CQUFXO0lBQzlCLFNBQVMsRUFBRSxvQkFBVyxHQUN6QjtFQWRMLE1BQU0sVUFBVSxBQWVYLGVBQWUsQ0FBQztJQUNiLGlCQUFpQixFQUFFLHdCQUFXO0lBQzlCLFNBQVMsRUFBRSx3QkFBVyxHQUN6Qjs7QUFHTCxNQUFNLFdBQVcsQ0FBQztFQUNkLDhCQUE4QjtFQUM5QixpQkFBaUIsRUFBRSx1QkFBVztFQUM5QixTQUFTLEVBQUUsdUJBQVcsR0FnQnpCO0VBbkJELE1BQU0sV0FBVyxBQUlaLGNBQWMsRUFKbkIsTUFBTSxXQUFXLEFBS1osZUFBZSxDQUFDO0lBQ2IsMkJBQTJCLEVBQUUsS0FBTTtJQUNuQyxtQkFBbUIsRUFBRSxLQUFNO0lBQzNCLHdCQUF3QixFQUFFLEVBQUc7SUFDN0IsZ0JBQWdCLEVBQUUsRUFBRyxHQUN4QjtFQVZMLE1BQU0sV0FBVyxBQVdaLGNBQWMsQ0FBQztJQUNaLGlCQUFpQixFQUFFLG9CQUFXO0lBQzlCLFNBQVMsRUFBRSxvQkFBVyxHQUN6QjtFQWRMLE1BQU0sV0FBVyxBQWVaLGVBQWUsQ0FBQztJQUNiLGlCQUFpQixFQUFFLHVCQUFXO0lBQzlCLFNBQVMsRUFBRSx1QkFBVyxHQUN6Qjs7QUFHTCxXQUFXLENBQUM7RUFDUixRQUFRLEVBQUUsUUFBUztFQUNuQixHQUFHLEVBQUUsQ0FBRTtFQUNQLEtBQUssRUFBRSxDQUFFO0VBQ1QsTUFBTSxFQUFFLENBQUU7RUFDVixJQUFJLEVBQUUsQ0FBRTtFQUNSLFFBQVEsRUFBRSxJQUFLO0VBQ2YsT0FBTyxFQUFFLElBQUssR0FDakI7O0FBRUQsYUFBYSxDQUFDO0VBQ1YsTUFBTSxFQUFFLElBQUs7RUFDYixXQUFXLEVBQUUsSUFBSztFQUNsQixRQUFRLEVBQUUsUUFBUztFQUNuQixnQkFBZ0IsRUFBRSxPQUFRLEdBNkI3QjtFQWpDRCxhQUFhLEFBS1IsUUFBUSxDQUFDO0lBQ04sUUFBUSxFQUFFLFFBQVMsR0FJdEI7SUFWTCxhQUFhLEFBS1IsUUFBUSxHQUVELFdBQVcsQ0FBQztNQUNaLEdBQUcsRUFBRSxJQUFLLEdBQ2I7RUFUVCxhQUFhLENBV1QsTUFBTSxDQUFDO0lBQ0gsUUFBUSxFQUFFLFFBQVM7SUFDbkIsTUFBTSxFQUFFLElBQUs7SUFDYixLQUFLLEVBQUUsSUFBSztJQUNaLFdBQVcsRUFBRSxJQUFLO0lBQ2xCLEtBQUssRUFBRSxHQUFJO0lBQ1gsR0FBRyxFQUFFLENBQUU7SUFDUCxXQUFXLEVBQUUsVUFBVztJQUN4QixVQUFVLEVBQUUsTUFBTztJQUNuQixzQkFBc0IsRUFBRSxXQUFZO0lBQ3BDLHlCQUF5QixFQUFFLEtBQU07SUFDakMsdUJBQXVCLEVBQUUsU0FBVTtJQUNuQyxTQUFTLEVBQUUsSUFBSztJQUNoQixVQUFVLEVBQUUsTUFBTztJQUNuQixLQUFLLEVBQUUsT0FBUSxHQUNsQjtFQTFCTCxhQUFhLENBMkJULE1BQU0sUUFBUSxDQUFDO0lBQ1gsT0FBTyxFQUFFLE9BQVEsR0FDcEI7RUE3QkwsYUFBYSxDQThCVCxNQUFNLE9BQU8sQ0FBQztJQUNWLEtBQUssRUFBRSxJQUFLLEdBQ2Y7O0FBR0wsWUFBWSxDQUFDO0VBQ1QsV0FBVyxFQUFFLElBQUs7RUFDbEIsT0FBTyxFQUFFLG1CQUFvQixHQUVoQzs7QUFFRCxhQUFhLENBQUM7RUFDVixNQUFNLEVBQUUsSUFBSztFQUNiLFdBQVcsRUFBRSxJQUFLO0VBQ2xCLFVBQVUsRUFBRSxNQUFPO0VBQ25CLGdCQUFnQixFQUFFLElBQUssR0FXMUI7RUFmRCxhQUFhLEFBS1IsV0FBVyxDQUFDO0lBQ1QsUUFBUSxFQUFFLFFBQVM7SUFDbkIsTUFBTSxFQUFFLENBQUU7SUFDVixJQUFJLEVBQUUsQ0FBRTtJQUNSLEtBQUssRUFBRSxDQUFFO0lBQ1QsS0FBSyxFQUFFLElBQUssR0FJZjtJQWRMLGFBQWEsQUFLUixXQUFXLEdBTU4sV0FBVyxDQUFDO01BQ1YsTUFBTSxFQUFFLElBQUssR0FDaEI7O0FBS1QsZUFBZSIsImZpbGUiOiJjb21wb25lbnRzL3BvcHVwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE1LTEyLTMwIDIzOjQwOjEyXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjMgMDM6NDA6NTdcbiovXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcbkBpbXBvcnQgXCIuLi9fc2V0dGluZy5zY3NzXCI7XG5cbi8qIHBvcHVwIGJlZ2luICovXG5cbi5wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAkemluZGV4LXBvcHVwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY1O1xufVxuXG4ucG9wdXAuZnJvbS10b3Age1xuICAgIC8qIOmhtumDqOa7keWFpeWKqOeUuyAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgJi50cmFuc2l0aW9uLWluLFxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMTc1LCAuODg1LCAuMzIsIDEuMSk7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjE3NSwgLjg4NSwgLjMyLCAxLjEpO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24taW4ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB9XG59XG5cbi5wb3B1cC5mcm9tLWJvdHRvbSB7XG4gICAgLyog5bqV6YOo5ruR5YWl5Yqo55S7ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgJi50cmFuc2l0aW9uLWluLFxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1pbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB9XG59XG5cbi5wb3B1cC5mcm9tLWxlZnQge1xuICAgIC8qIOS7juW3puWQkeWPs+a7keWFpeWKqOeUuyAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgJi50cmFuc2l0aW9uLWluLFxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1pbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIH1cbn1cblxuLnBvcHVwLmZyb20tcmlnaHQge1xuICAgIC8qIOS7juW3puWQkeWPs+a7keWFpeWKqOeUuyAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICYudHJhbnNpdGlvbi1pbixcbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24taW4ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgfVxufVxuXG4ucG9wdXAtYm9keSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmE7XG4gICAgJi50b3AtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAmIH4gLnBvcHVwLWJvZHkge1xuICAgICAgICAgICAgdG9wOiA0NHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaWNvbmZvbnRcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4ycHg7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzU4NWM2NDtcbiAgICB9XG4gICAgLmNsb3NlOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlxcZTYwNFwiO1xuICAgIH1cbiAgICAuY2xvc2U6YWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgfVxufVxuXG4ucG9wdXAtdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNTBweCAxMHB4IDE1cHg7XG4gICAgQGluY2x1ZGUgZWxsaXBzaXMoKTtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICYuYm90dG9tLWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH4gLnBvcHVwLWJvZHkge1xuICAgICAgICAgICAgYm90dG9tOiA0NHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qIHBvcHVwIGVuZCAqL1xuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBcbi8vIG1peGluIHNjc3Ncbi8vIOWMheaLrOW4uOeUqOeahG1peGluLCAlLCBAZnVuY3Rpb24g5Y+K6L6F5Yqp55qEYnRu5ZKM6IOM5pmv5Zu+54mHaWNvblxuLy8gbWl4aW7vvIzpgJrov4dAaW5jbHVkZeiwg+eUqO+8jOagt+W8j+mAmui/h+aLt+i0neeahOaWueW8j+S9v+eUqO+8jOWwpOWFtumAgueUqOS6juS8oOmAkuWPguaVsFxuLy8gJe+8jOmAmui/h0BleHRlbmTosIPnlKjvvIzmoLflvI/pgJrov4fnu4TlkIjnlLPmmI7nmoTmlrnlvI/kvb/nlKjvvIzpgILnlKjkuo7kuI3kvKDlj4LmlbDnmoTku6PnoIHniYfmrrUgIFxuLy8gQGZ1bmN0aW9u77yM6L+U5Zue5LiA5Liq5YC877yM55So5LqO6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIG1peGluICYgJVxuLy8g5pei5a6a5LmJ5LqGbWl4aW7kuZ/lrprkuYnkuoYl77yM5qC55o2u6ZyA5rGC5L2/55SoQGluY2x1ZGXmiJZAZXh0ZW5k6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcbkBtaXhpbiBjZW50ZXItYmxvY2soJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlY2VudGVyLWJsb2NrO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufVxuXG4lY2VudGVyLWJsb2NrIHtcbiAgICBAaW5jbHVkZSBjZW50ZXItYmxvY2soZmFsc2UpO1xufVxuXG4vLyBjbGVhcmZpeFxuQG1peGluIGNsZWFyZml4KCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWNsZWFyZml4O1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4lY2xlYXJmaXgge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4KGZhbHNlKTtcbn1cblxuLy8gSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbnJlYWRlcnNcbi8vIOWPqumakOiXj+S6juinhuinie+8jOWxj+W5lea1j+iniOWZqOWPr+S7pemYheivu1xuQG1peGluIGhpZGRlbi1jbGlwKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWhpZGRlbi1jbGlwO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIH1cbn1cblxuJWhpZGRlbi1jbGlwIHtcbiAgICBAaW5jbHVkZSBoaWRkZW4tY2xpcChmYWxzZSk7XG59XG5cbi8vIGVsbGlwc2lzXG5AbWl4aW4gZWxsaXBzaXMoJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlZWxsaXBzaXM7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxufVxuXG4lZWxsaXBzaXMge1xuICAgIEBpbmNsdWRlIGVsbGlwc2lzKGZhbHNlKTtcbn1cblxuLy8g5Y+q5pyJd2Via2l05pSv5oyB5aSa6KGM55yB55Wl5Y+3XG5AbWl4aW4gZWxsaXBzaXMtbGluZSgkbGluZTogMikge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyB3b3JkLWJyZWFrXG4vLyDnlKjkuo7pk77mjqXlnLDlnYDlvLrliLbmjaLooYxcbkBtaXhpbiB3b3JkLWJyZWFrKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJXdvcmQtYnJlYWs7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxufVxuXG4ld29yZC1icmVhayB7XG4gICAgQGluY2x1ZGUgd29yZC1icmVhayhmYWxzZSk7XG59XG5cbi8vIGRpc2FibGVkXG4vLyDnpoHnlKjmoLflvI/vvIzliqAhaW1wb3J0YW50XG5AbWl4aW4gZGlzYWJsZWQoKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuJWRpc2FibGVkIHtcbiAgICBAaW5jbHVkZSBkaXNhYmxlZDtcbn1cblxuLy8gZml4ZWQgdG9wICYgYm90dG9tXG5AbWl4aW4gZml4ZWQoJHBvczogMCkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIEBpZiAkcG9zID09IGJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICB0b3A6ICRwb3M7XG4gICAgfVxufVxuXG4lZml4ZWQtdG9wIHtcbiAgICBAaW5jbHVkZSBmaXhlZDtcbn1cblxuJWZpeGVkLWJvdHRvbSB7XG4gICAgQGluY2x1ZGUgZml4ZWQoJHBvczogYm90dG9tKTtcbn1cblxuLy8ganVzdGlmeVxuQG1peGluIGp1c3RpZnkoJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlanVzdGlmeTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufVxuXG4lanVzdGlmeSB7XG4gICAgQGluY2x1ZGUganVzdGlmeShmYWxzZSk7XG59XG5cbi8vIG1peGluXG4vLyDlj6rlrprkuYnkuoZtaXhpbu+8jOaJgOS7peWPquiDvemAmui/h0BpbmNsdWRl5p2l6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRhYmxlIOetieWIhlxuQG1peGluIGVxdWFsLXRhYmxlKCRjaGlsZHJlbjogbGkpIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICRjaGlsZHJlbkVsZTogbGkgZGl2IHAgYSBzcGFuIHN0cm9uZztcbiAgICBAaWYgaW5kZXgoJGNoaWxkcmVuRWxlLCAkY2hpbGRyZW4pIHtcbiAgICAgICAgI3skY2hpbGRyZW59IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICAuI3skY2hpbGRyZW59IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZsZXgg562J5YiGXG5AbWl4aW4gZXF1YWwtZmxleCgkY2hpbGRyZW46IGxpKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkY2hpbGRyZW5FbGU6IGxpIGRpdiBwIGEgc3BhbiBzdHJvbmc7XG4gICAgQGlmIGluZGV4KCRjaGlsZHJlbkVsZSwgJGNoaWxkcmVuKSB7XG4gICAgICAgICN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgLiN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBmbGV4IGNlbnRlclxuQG1peGluIGNlbnRlci1mbGV4KCRkaXJlY3Rpb246IGJvdGgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIEBpZiAkZGlyZWN0aW9uID09IGJvdGgge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB4IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vLyB0cmFuc2xhdGUgY2VudGVyXG5AbWl4aW4gY2VudGVyLXRyYW5zbGF0ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIEBpZiAkZGlyZWN0aW9uID09IGJvdGgge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geCB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHkge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xuICAgIH1cbn1cblxuLy8gdHJpYW5nbGUg5LiJ6KeS566t5aS0XG4ldHJpYW5nbGUtYmFzaWMge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiB0cmlhbmdsZSgkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJXaWR0aDogNnB4LCAkYm9yZGVyQ29sb3I6ICNkZWRlZGUpIHtcbiAgICBAZXh0ZW5kICV0cmlhbmdsZS1iYXNpYztcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItbGVmdDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItdG9wOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLy8gYXJyb3cg5pa55ZCR566t5aS0XG5AbWl4aW4gYXJyb3coJHNpemU6IDEwcHgsICRkaXJlY3Rpb246IHJpZ2h0LCAkYm9yZGVyV2lkdGg6IDJweCwgJGJvcmRlckNvbG9yOiAjZGVkZWRlKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgQGlmICRkaXJlY3Rpb24gPT0gdG9wIHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICAgIEBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICBib3JkZXItbGVmdDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbn1cblxuLy8gcmVtXG5AbWl4aW4gcmVtKCRweDogMS40LCAkcHJvcGVydHk6IGZvbnQtc2l6ZSkge1xuICAgICN7JHByb3BlcnR5fTogJHB4ICogMTBweDtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHB4fXJlbTtcbn1cblxuLy8gaHR0cDovL3d3dy5jc3MzZmlsZXMuY29tL2ZvbnQvXG4vLyAxIFRoZSBlb3QgZm9udGZpbGUuIENhbiBiZSBvbWl0dGVkIGlmIHlvdSBkb25gdCB3YW50IHRvIHN1cHBvcnQgSW50ZXJuZXQgRXhwbG9yZXIgcHJpb3IgdG8gdmVyc2lvbiA5IChpbmNsdWRpbmcgc2VtaWNvbG9uKS5cbi8vIDIgQ2FuIGFsc28gYmUgb21pdHRlZCBmb3IgSW50ZXJuZXQgRXhwbG9yZXIgPCA5LiA/aWVmaXggcHJldmVudHMgSUU2IGZyb20gaW50ZXJwcmV0aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nLiBJZiB0aGUgd2hvbGUgSUUgZmFtaWx5ICg2IHRvIDkpIHNob3VsZCBiZSBzdXBwb3J0ZWQsIDEgYW5kIDIgYXJlIG5lZWRlZC5cbi8vIDMgQ2FuIGJlIG9taXR0ZWQgaWYgaVBhZCB2ZXJzaW9ucyBwcmlvciB0byBpT1MgNC4yIHNob3VsZG7igJl0IGJlIHN1cHBvcnRlZC4gXG4vLyA0IFRoZSB0dGYgZm9udGZpbGUuIE5lY2Vzc2FyeSB0byBzdXBwb3J0IChNb2JpbGUpIFNhZmFyaSBhbmQgT3BlcmEuIFxuLy8gNSBUaGUgd29mZiBmb250ZmlsZSBmb3IgYWxsIG1vZGVybiBicm93c2VycyAoYmVzdCBjaG9pY2UpLlxuQG1peGluIGZvbnQtZmFjZSgkZm9udEZhY2VGYW1pbHksICRmb250RmFjZVBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwpIHtcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250RmFjZUZhbWlseTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG4gICAgICAgIGZvbnQtc3R5bGU6ICRzdHlsZTtcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRmb250RmFjZVBhdGh9LmVvdFwiKTsgLy8gMVxuICAgICAgICBzcmM6IHVybChcIiN7JGZvbnRGYWNlUGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIiN7JGZvbnRGYWNlUGF0aH0uc3ZnIyN7JGZvbnRGYWNlRmFtaWx5fVwiKSBmb3JtYXQoXCJzdmdcIiksIHVybChcIiN7JGZvbnRGYWNlUGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRmb250RmFjZVBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG59XG5cbi8vICVcbi8vIOWPquWumuS5ieS6hiXvvIzmiYDku6Xlj6rog73pgJrov4dAZXh0ZW5k5p2l6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyDnrYnliIbliJdcbi8vIOWPr+S7peS9v+eUqGVxdWFsLWZsZXjmiJZlcXVhbC10YWJsZe+8jOm7mOiupOWtkOWFg+e0oOS4umxpXG4lZXF1YWwtY29sIHtcbiAgICBAaW5jbHVkZSBlcXVhbC10YWJsZTtcbn1cblxuLy8gaXRlbSBhcnJvdywg5Y+z5L6n566t5aS06Lez6L2s5oyH5ZCRXG4laXRlbS1hcnJvdyB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBAaW5jbHVkZSBhcnJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuXG4vLyDkuIvpnaLnmoTlh6DkuKol77yM55Sx5LqO54mI5pys5oiW5YmN57yA77yM5omA5Lul6K6+6K6h5oiQJVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZmxleFxuJWRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLy8gYWxsLXRyYW5zaXRpb25cbiV0cmFuc2l0aW9uLWFsbCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIHRyYW5zbGF0ZTNkXG4ldHJhbnNsYXRlM2Qge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8vIHBhZ2Ugc3dpdGNoXG4lcGFnZS1vdXQge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSAwLjFzO1xufVxuXG4lcGFnZS1pbiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpO1xufVxuXG4vLyBidG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYnRuLWJhc2ljXG4vLyDmjInpkq7ln7rmnKzmoLflvI/vvIzogZTlkIjnlLPmmI5cbiVidG4tYmFzaWMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIvKiBcbiogQEF1dGhvcjogc2h1bmppbmNoYW5cbiogQERhdGU6ICAgMjAxNi0wMS0yMyAwMTowMTowM1xuKiBATGFzdCBNb2RpZmllZCBieTogICBzaHVuamluY2hhblxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTAxLTIzIDAxOjU0OjUxXG4qIOaooeaLn+S4gOWDj+e0oFxuKiBAdXNhZ2U6XG4qIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgQGluY2x1ZGUgYm9yZGVyKGJvdHRvbSwgI2FiY2RlZikgfVxuKi9cblxuLy8g57q15ZCRXG4lYm9yZGVyLXBvcnRyYWl0IHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbn1cblxuLy8g5qiq5ZCRXG4lYm9yZGVyLWxhbmRzY2FwZSB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG59XG5cbkBtaXhpbiBib3JkZXIoJGRpcmVjdGlvbjogdG9wLCAkYm9yZGVyQ29sb3I6ICRjb2xvckJvcmRlcikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuXG4gICAgICAgIEBpZiAkZGlyZWN0aW9uID09IHRvcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIC8vIEBleHRlbmQgYm9yZGVyLXBvcnRyYWl0KCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gdGIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBhbGwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygjZGRkKSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbi8vIHZhcmlhYmxlcyBzY3NzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuXG5AaW1wb3J0IFwiZXh0L19taXhpbi5zY3NzXCI7XG5AaW1wb3J0IFwiZXh0L19ib3JkZXItbWl4aW4uc2Nzc1wiO1xuXG5cbi8vIGZvbnTnm7jlhbNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4kZm9udFNpemU6ICAgICAgICAgICAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0OyBcbiRmb250TGluZUhlaWdodDogICAgICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRmb250RmFtaWx5OiAgICAgICAgICAgICAgICAgICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBTVEhlaVRpLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuLy8g6IOM5pmv6Imy77yM5paH5pys6Imy77yM6L655qGG6Imy77yM6ZO+5o6l6ImyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJGNvbG9yVGV4dDogICAgICAgICAgICAgICAgICAgICAgIzIyMiAhZGVmYXVsdDtcbiRjb2xvckJnOiAgICAgICAgICAgICAgICAgICAgICAgICNmM2Y0ZjUgIWRlZmF1bHQ7XG4kY29sb3JCb3JkZXI6ICAgICAgICAgICAgICAgICAgICAjZGJkYmRiICFkZWZhdWx0O1xuJGNvbG9yTGluazogICAgICAgICAgICAgICAgICAgICAgIzA4YyAhZGVmYXVsdDtcbiRjb2xvclBsYWNlaG9sZGVyOiAgICAgICAgICAgICAgICM5OTkgIWRlZmF1bHQ7IC8vIGlucHV0IHBsYWNlaG9sZGVyIGNvbG9yXG4kY29sb3JEaXNhYmxlZDogICAgICAgICAgICAgICAgICAjOTk5ICNlM2UzZTMgI2RiZGJkYiAhZGVmYXVsdDsgLy8gdGV4dENvbG9yIGJnQ29sb3IgYm9yZGVyQ29sb3JcblxuXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0OyAvLyDkuLvoibLosIPvvIzmmoLlrprpu5HoibJcblxuXG4vLyB6LWluZGV4XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLWZpeGVkOiAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWJhY2tkcm9wOiAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1wb3B1cDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC1kaWFsb2c6ICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtbG9hZGVyOiAgICAgICAgICAgIDEwODAgIWRlZmF1bHQ7XG4kemluZGV4LXRvYXN0OiAgICAgICAgICAgICAxMDkwICFkZWZhdWx0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */\n", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: shunjinchan
	 * @Date:   2015-10-15 15:08:08
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-16 16:31:42
	 */
	
	__webpack_require__(9);
	
	var dialogTemplateTempDiv = document.createElement('div');
	
	var defaults = {
	    backdrop: true, // 蒙层
	    dialogButtonOk: '确认', // 确认按钮文案
	    dialogButtonCancel: '取消', // 取消按钮文案
	    animation: 'scale', // 动画，需与 css 动画配合
	    verticalButton: 'vertical-button'
	};
	
	// 实例
	var instance;
	
	function Dialog() {
	    //如果已经缓存了实例，则直接返回缓存的实例
	    if(instance instanceof Dialog){
	        return instance;
	    }
	
	    this.createTime = new Date();
	    //缓存实例
	    instance = this;
	
	    return this;
	}
	
	Dialog.prototype = {
	    constructor: Dialog,
	
	    /**
	     * render dialog
	     * @param  {Object} configs 配置信息
	     * @return {[type]}         [description]
	     */
	    _render: function(configs) {
	        var self = this;
	        var dialogHTML = '';
	        var buttonsHTML = '';
	        var buttonText = '';
	        var footerHTML = '';
	        var titleHTML = configs.title ? '<div class="dialog-title">' + configs.title + '</div>' : '';
	        var content = configs.content ? configs.content : '';
	        var afterContent = configs.afterContent ? configs.afterContent : '';
	        var extraClass = configs.extraClass || '';
	        var animation = configs.animation || defaults.animation;
	        var verticalButton = configs.verticalButton ? defaults.verticalButton : '';
	        var bold;
	
	        if (configs.buttons && configs.buttons.length > 0) {
	            for (var i = 0; i < configs.buttons.length; i++) {
	                bold = configs.buttons[i].bold ? 'bold' : '';
	
	                buttonsHTML += '<a href="javascript:;" class="dialog-button ' + bold + '">' + configs.buttons[i].text + '</a>';
	            }
	
	            footerHTML = '<div class="dialog-footer">' + buttonsHTML + '</div>';
	        }
	
	        dialogHTML = '<div class="dialog ' + animation + ' ' + extraClass + ' ' + verticalButton + '"><div class="dialog-container">' + titleHTML + '<div class="dialog-body">' + content + afterContent + '</div></div>' + footerHTML + '</div>';
	
	        dialogTemplateTempDiv.innerHTML = dialogHTML;
	        this.$box = $(dialogTemplateTempDiv).children();
	        $('body').append($(dialogTemplateTempDiv).children()[0]);
	
	        this._backdrop();
	        this._setSize(animation);
	    },
	
	    _backdrop: function() {
	        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
	        $('body').append(this.$backdrop);
	    },
	
	    _removeBackdrop: function() {
	        this.$backdrop && this.$backdrop.removeClass('visible');
	    },
	
	    _setSize: function(animation) {
	        if (animation === 'scale') {
	            this.$box.css('marginTop', - Math.round(this.$box.outerHeight() / 2 / 1.185) + 'px');
	        } else {
	            this.$box.css('marginTop', - Math.round(this.$box.outerHeight() / 2) + 'px');
	        }
	    },
	
	    _bindEvents: function(configs) {
	        var self = this;
	        var freeze = configs.freeze;
	        var $buttons;
	
	        if (configs.type === 'actionSheet') {
	            $buttons = this.$box.find(".action-sheet-button");
	        } else {
	            $buttons = this.$box.find(".dialog-button");
	        }
	
	        // 为每个按钮添加回调函数
	        $.each($buttons, function(index, ele) {
	            $(ele).on('click', function(e) {
	                e.preventDefault();
	
	                if (configs.buttons[index].close !== false) self.close();
	
	                configs.buttons[index].onClick && configs.buttons[index].onClick(self, e);
	                configs.onClick && configs.onClick(self.$box, index);
	            });
	        });
	
	        // 绑定 close 事件
	        this.$box.on('click', '[data-action="close"]', function(e) {
	            self.close();
	        });
	
	        if (freeze !== undefined && freeze === false) {
	            this.$backdrop.on('click', function(e) {
	                self.close();
	            });
	        }
	
	        // 当在蒙层滑动时，阻止默认的滑动事件
	        this.$backdrop.on('touchmove', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	        });
	    },
	
	    /**
	     * open dialog
	     * @param  {Object} configs 配置信息
	     * @return {[type]}         [description]
	     */
	    open: function(configs) {
	        if (this.isOpen) return;
	
	        this._render(configs);
	        this._bindEvents(configs);
	        this.$backdrop && this.$backdrop.addClass('visible');
	        this.$box.show().removeClass('transition-out').addClass('transition-in');
	
	        this.isOpen = true;
	    },
	
	    /**
	     * close dialog
	     * @param  {function} 关闭之后的回调函数
	     * @return {[type]}         [description]
	     */
	    close: function(callback) {
	        var self = this;
	
	        if (this.$box.length === 0) {
	            return;
	        }
	
	        this._removeBackdrop();
	        this.$box.removeClass('transition-in').addClass('transition-out')
	            .transitionEnd(function(e) {
	                // 动画结束后删除对话与背景蒙层框节点
	                self.$box.off();
	                self.$box.remove();
	                self.$box = null;
	
	                self.$backdrop.off();
	                self.$backdrop.remove();
	
	                self.isOpen = false;
	
	                callback && typeof callback === 'function' && callback();
	            });
	    },
	
	    /**
	     * alert 对话框
	     * @param  {String} content    对话框内容
	     * @param  {String} title      对话框标题
	     * @param  {function} callbackOk 确定按钮回调函数
	     * @return {[type]}            [description]
	     */
	    alert: function(content, title, callbackOk) {
	        if (typeof title === 'function') {
	            callbackOk = arguments[1];
	            title = undefined;
	        }
	
	        this.open({
	            title: title || '',
	            content: content || '',
	            buttons: [{
	                text: defaults.dialogButtonOk,
	                onClick: callbackOk,
	                bold: true // 字体加粗提示
	            }]
	        });
	    },
	
	    /**
	     * confirm 对话框
	     * @param  {String} content        对话框内容
	     * @param  {String} title          对话框标题
	     * @param  {function} callbackOk     确定按钮回调函数
	     * @param  {function} callbackCancel 取消按钮回调函数
	     * @return {[type]}                [description]
	     */
	    confirm: function(content, title, callbackOk, callbackCancel) {
	        if (typeof title === 'function') {
	            callbackCancel = arguments[2];
	            callbackOk = arguments[1];
	            title = undefined;
	        }
	
	        this.open({
	            title: title || '',
	            content: content || '',
	            buttons: [{
	                text: defaults.dialogButtonCancel,
	                onClick: callbackCancel,
	                bold: false
	            }, {
	                text: defaults.dialogButtonOk,
	                onClick: callbackOk,
	                bold: true
	            }]
	        });
	    },
	
	    /**
	     * prompt 对话框，有文本输入框
	     * @param  {String} content        对话框内容
	     * @param  {String} title          对话框标题
	     * @param  {function} callbackOk     确定按钮回调函数
	     * @param  {function} callbackCancel 取消按钮回调函数
	     * @return {[type]}                [description]
	     */
	    prompt: function(content, title, callbackOk, callbackCancel) {
	        if (typeof title === 'function') {
	            callbackCancel = arguments[2];
	            callbackOk = arguments[1];
	            title = undefined;
	        }
	
	        this.open({
	            title: title || '',
	            content: content || '',
	            afterContent: '<input type="text" class="dialog-input">',
	            buttons: [{
	                text: defaults.dialogButtonCancel,
	                bold: false
	            }, {
	                text: defaults.dialogButtonOk,
	                bold: true,
	                close: false // prompt 组件点击确认按钮默认不关闭，需要手动调用 close
	            }],
	            onClick: function(box, index) {
	                var value = box.find('.dialog-input').val();
	
	                if (index === 0 && callbackCancel) callbackCancel(value);
	                if (index === 1 && callbackOk) callbackOk(value);
	            }
	        });
	    },
	
	    /**
	     * prompt 对话框，有密码输入框
	     * @param  {String} content        对话框内容
	     * @param  {String} title          对话框标题
	     * @param  {function} callbackOk     确定按钮回调函数
	     * @param  {function} callbackCancel 取消按钮回调函数
	     * @return {[type]}                [description]
	     */
	    password: function(content, title, callbackOk, callbackCancel) {
	        if (typeof title === 'function') {
	            callbackCancel = arguments[2];
	            callbackOk = arguments[1];
	            title = undefined;
	        }
	
	        this.open({
	            title: title || '',
	            content: content || '',
	            afterContent: '<input type="password" class="dialog-input" name="dialog-password" placeholder="请输入密码">',
	            buttons: [{
	                text: defaults.dialogButtonCancel,
	            }, {
	                text: defaults.dialogButtonOk,
	                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
	            }],
	            onClick: function(box, index) {
	                var password = box.find('.dialog-input[name="dialog-password"]').val();
	
	                if (index === 0 && callbackCancel) callbackCancel(password);
	                if (index === 1 && callbackOk) callbackOk(password);
	            }
	        });
	    },
	
	    /**
	     * 登陆对话框，有用户名与密码输入框
	     * @param  {String} content        对话框内容
	     * @param  {String} title          对话框标题
	     * @param  {function} callbackOk     确定按钮回调函数
	     * @param  {function} callbackCancel 取消按钮回调函数
	     * @return {[type]}                [description]
	     */
	    login: function(content, title, callbackOk, callbackCancel) {
	        if (typeof title === 'function') {
	            callbackCancel = arguments[2];
	            callbackOk = arguments[1];
	            title = undefined;
	        }
	
	        this.open({
	            title: title || '',
	            content: content || '',
	            afterContent: '<input type="text" class="dialog-input" name="dialog-username" placeholder="请输入用户名"><input type="password" class="dialog-input" name="dialog-password" placeholder="请输入密码">',
	            buttons: [{
	                text: defaults.dialogButtonCancel,
	            }, {
	                text: defaults.dialogButtonOk,
	                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
	            }],
	            onClick: function(box, index) {
	                var username = box.find('.dialog-input[name="dialog-username"]').val();
	                var password = box.find('.dialog-input[name="dialog-password"]').val();
	
	                if (index === 0 && callbackCancel) callbackCancel(username, password);
	                if (index === 1 && callbackOk) callbackOk(username, password);
	            }
	        });
	    },
	
	    /**
	     * 注册对话框，有用户名密码验证码输入框
	     * @param  {String} content        对话框内容
	     * @param  {String} title          对话框标题
	     * @param  {function} callbackOk     确定按钮回调函数
	     * @param  {function} callbackCancel 取消按钮回调函数
	     * @return {[type]}                [description]
	     */
	    register: function(content, title, callbackOk, callbackCancel) {
	        if (typeof title === 'function') {
	            callbackCancel = arguments[2];
	            callbackOk = arguments[1];
	            title = undefined;
	        }
	
	        this.open({
	            title: title || '',
	            content: content || '',
	            afterContent: '<input type="text" class="dialog-input" name="dialog-username" placeholder="请输入用户名"><input type="password" class="dialog-input" name="dialog-password" placeholder="请输入密码"><input type="text" class="dialog-input" name="dialog-auth-code" placeholder="请输入验证码">',
	            buttons: [{
	                text: defaults.dialogButtonCancel,
	            }, {
	                text: defaults.dialogButtonOk,
	                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
	            }],
	            onClick: function(box, index) {
	                var username = box.find('.dialog-input[name="dialog-username"]').val();
	                var password = box.find('.dialog-input[name="dialog-password"]').val();
	                var authCode = box.find('.dialog-input[name="dialog-auth-code"]').val();
	
	                if (index === 0 && callbackCancel) callbackCancel(username, password, authCode);
	                if (index === 1 && callbackOk) callbackOk(username, password, authCode);
	            }
	        });
	    },
	
	    /**
	     * actionSheet dialog
	     * @param  {Object} configs 配置信息
	     * @return {[type]}         [description]
	     */
	    actionSheet: function(configs) {
	        if (this.isOpen) return;
	
	        var self = this;
	        var actionSheetHTML = '';
	        var buttonsHTML = '';
	        var buttonText = '';
	        var bodyHTML = '';
	        var footerHTML = '<div class="action-sheet-footer"><a href="javascript:;" class="action-sheet-close" data-action="close">' + defaults.dialogButtonCancel + '</a></div>';
	        var titleHTML = configs.title ? '<div class="action-sheet-title">' + configs.title + '</div>' : '';
	        var extraClass = configs.extraClass || '';
	        var animation = configs.animation || 'from-bottom';
	        var bold;
	        var danger;
	
	        // 默认 actionsheet 弹窗不锁住
	        configs.freeze = configs.freeze ? configs.freeze : false;
	
	        if (configs.buttons && configs.buttons.length > 0) {
	            for (var i = 0; i < configs.buttons.length; i++) {
	                bold = configs.buttons[i].bold ? 'bold' : '';
	                danger = configs.buttons[i].danger ? 'danger' : '';
	
	                buttonsHTML += '<a href="javascript:;" class="action-sheet-button ' + bold + danger + '">' + configs.buttons[i].text + '</a>';
	            }
	
	            bodyHTML = '<div class="action-sheet-body">' + buttonsHTML + '</div>';
	        }
	
	        actionSheetHTML = '<div class="action-sheet ' + animation + ' ' + extraClass + '"><div class="action-sheet-container">' + titleHTML + bodyHTML + '</div>' + footerHTML + '</div>';
	
	        dialogTemplateTempDiv.innerHTML = actionSheetHTML;
	        this.$box = $(dialogTemplateTempDiv).children();
	        $('body').append($(dialogTemplateTempDiv).children()[0]);
	
	        this._backdrop();
	        this._bindEvents(configs);
	        this.$backdrop && this.$backdrop.addClass('visible');
	        this.$box.show().removeClass('transition-out').addClass('transition-in');
	
	        this.isOpen = true;
	    },
	};
	
	module.exports = Dialog;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./dialog.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./dialog.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n* @Author: shunjinchan\n* @Date:   2015-12-27 17:37:48\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-10 11:32:58\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 01:54:51\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* dialog begin */\n.dialog {\n  width: 270px;\n  background-color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -135px;\n  z-index: 1070; }\n  .dialog.vertical-button .dialog-footer {\n    height: auto;\n    display: block; }\n  .dialog.vertical-button .dialog-button {\n    display: block;\n    width: 100%; }\n    .dialog.vertical-button .dialog-button:not(:last-child)::before {\n      position: absolute;\n      content: \"\";\n      left: 0;\n      right: 0;\n      top: auto;\n      bottom: 0;\n      width: 100%;\n      border-top: 1px solid #dbdbdb;\n      -webkit-transform: scaleY(0.5);\n      transform: scaleY(0.5); }\n\n.dialog.scale {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .dialog.scale.transition-in {\n    opacity: 1;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1); }\n  .dialog.scale.transition-out {\n    opacity: 0;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815); }\n\n.dialog-container {\n  padding: 20px 0; }\n\n.dialog-title {\n  padding: 0 15px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: normal; }\n\n.dialog-body {\n  font-size: 14px;\n  line-height: 16px;\n  padding: 0 15px; }\n\n.dialog-footer {\n  height: 44px;\n  position: relative;\n  display: flex; }\n  .dialog-footer a {\n    flex: 1; }\n  .dialog-footer::before {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    border-top: 1px solid #dbdbdb;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5); }\n  .dialog-footer .dialog-button {\n    height: 44px;\n    line-height: 44px;\n    font-size: 17px;\n    position: relative;\n    color: #007aff; }\n    .dialog-footer .dialog-button:not(:last-child)::before {\n      position: absolute;\n      content: \"\";\n      top: 0;\n      bottom: 0;\n      left: auto;\n      right: 0;\n      width: 0;\n      border-left: 1px solid #dbdbdb;\n      -webkit-transform: scaleX(0.5);\n      transform: scaleX(0.5); }\n    .dialog-footer .dialog-button.bold {\n      font-weight: 500; }\n\n.dialog-input {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  height: 30px;\n  background: #fff;\n  margin: 0;\n  margin-top: 15px;\n  padding: 0 5px;\n  border: 1px solid #a0a0a0;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 14px;\n  display: block;\n  -webkit-box-shadow: 0 0 0 transparent;\n  box-shadow: 0 0 0 transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n/* action-sheet */\n.action-sheet {\n  position: absolute;\n  padding-bottom: 10px;\n  left: 0;\n  bottom: 0;\n  z-index: 11000;\n  width: 100%;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform; }\n\n.action-sheet-container,\n.action-sheet-footer {\n  margin: 0 10px; }\n\n.action-sheet-title {\n  background-color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  line-height: 18px;\n  padding: 15px 25px;\n  border-radius: 8px 8px 0 0;\n  text-align: center;\n  color: #777;\n  position: relative; }\n  .action-sheet-title::before {\n    position: absolute;\n    content: \"\";\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    border-top: 1px solid #dbdbdb;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5); }\n  .action-sheet-title + .action-sheet-body .action-sheet-button:first-child {\n    border-radius: 0; }\n\n.action-sheet-button,\n.action-sheet-close {\n  background-color: rgba(255, 255, 255, 0.9);\n  font-size: 18px;\n  line-height: 24px;\n  padding: 15px 25px;\n  text-align: center;\n  font-weight: normal;\n  margin: 0;\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  color: #007aff; }\n\n.action-sheet-button:first-child {\n  border-radius: 8px 8px 0 0; }\n\n.action-sheet-button:last-child {\n  border-radius: 0 0 8px 8px; }\n\n.action-sheet-button:not(:last-child)::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  border-top: 1px solid #dbdbdb;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5); }\n\n.action-sheet-button.bold {\n  font-weight: 500; }\n\n.action-sheet-button.danger {\n  color: #ff3b30; }\n\n.action-sheet-footer {\n  margin-top: 8px; }\n\n.action-sheet-close {\n  border-radius: 8px; }\n\n/* 底部滑入动画 */\n.action-sheet.from-bottom.transition-in, .action-sheet.from-bottom.transition-out {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s; }\n\n.action-sheet.from-bottom.transition-in {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.action-sheet.from-bottom.transition-out {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhbG9nLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIiwiX3NldHRpbmcuc2NzcyIsImV4dC9fbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0VBS0U7QUNMRjs7Ozs7Ozs7RUFRRTtBREtGLGtCQUFrQjtBQUVsQixPQUFPLENBQUM7RUFDSixLQUFLLEVBQUUsS0FBTTtFQUNiLGdCQUFnQixFQVBJLHdCQUFJO0VBUXhCLFVBQVUsRUFBRSxNQUFPO0VBQ25CLGFBQWEsRUFBRSxHQUFJO0VBQ25CLFFBQVEsRUFBRSxRQUFTO0VBQ25CLEdBQUcsRUFBRSxHQUFJO0VBQ1QsSUFBSSxFQUFFLEdBQUk7RUFDVixXQUFXLEVBQUUsTUFBTztFQUNwQixPQUFPLEVFYWdCLElBQUksR0ZVOUI7RUFoQ0QsT0FBTyxBQVVGLGdCQUFnQixDQUNiLGNBQWMsQ0FBQztJQUNYLE1BQU0sRUFBRSxJQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQU0sR0FDbEI7RUFkVCxPQUFPLEFBVUYsZ0JBQWdCLENBS2IsY0FBYyxDQUFDO0lBQ1gsT0FBTyxFQUFFLEtBQU07SUFDZixLQUFLLEVBQUUsSUFBSyxHQWFmO0lBOUJULE9BQU8sQUFVRixnQkFBZ0IsQ0FLYixjQUFjLEFBR1QsSUFBSyxDQUFBLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDdkIsUUFBUSxFQUFFLFFBQVM7TUFDbkIsT0FBTyxFQUFFLEVBQUc7TUFDWixJQUFJLEVBQUUsQ0FBRTtNQUNSLEtBQUssRUFBRSxDQUFFO01BQ1QsR0FBRyxFQUFFLElBQUs7TUFDVixNQUFNLEVBQUUsQ0FBRTtNQUNWLEtBQUssRUFBRSxJQUFLO01BQ1osVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENFckJKLE9BQU87TUZzQnhCLGlCQUFpQixFQUFFLFdBQU07TUFDekIsU0FBUyxFQUFFLFdBQU0sR0FDcEI7O0FBS2IsT0FBTyxNQUFNLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBRTtFQUNYLGlCQUFpQixFQUFFLG9CQUFXLENBQVUsWUFBSztFQUM3QyxTQUFTLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0VBQ3JDLDJCQUEyQixFQUFFLDBCQUEyQjtFQUN4RCwyQkFBMkIsRUFBRSwwQkFBMkI7RUFDeEQsbUJBQW1CLEVBQUUsMEJBQTJCO0VBQ2hELG1CQUFtQixFQUFFLGtCQUFtQjtFQUN4QyxtQkFBbUIsRUFBRSxxQ0FBc0MsR0FlOUQ7RUF2QkQsT0FBTyxNQUFNLEFBU1IsY0FBYyxDQUFDO0lBQ1osT0FBTyxFQUFFLENBQUU7SUFDWCwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0IsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxRQUFLO0lBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFFBQUssR0FDeEM7RUFmTCxPQUFPLE1BQU0sQUFnQlIsZUFBZSxDQUFDO0lBQ2IsT0FBTyxFQUFFLENBQUU7SUFDWCwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0IsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0lBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFlBQUssR0FDeEM7O0FBR0wsaUJBQWlCLENBQUM7RUFDZCxPQUFPLEVBQUUsTUFBTyxHQUNuQjs7QUFFRCxhQUFhLENBQUM7RUFDVixPQUFPLEVBQUUsTUFBTztFQUNoQixTQUFTLEVBQUUsSUFBSztFQUNoQixXQUFXLEVBQUUsSUFBSztFQUNsQixXQUFXLEVBQUUsTUFBTyxHQUN2Qjs7QUFFRCxZQUFZLENBQUM7RUFDVCxTQUFTLEVBQUUsSUFBSztFQUNoQixXQUFXLEVBQUUsSUFBSztFQUNsQixPQUFPLEVBQUUsTUFBTyxHQUNuQjs7QUFFRCxjQUFjLENBQUM7RUFDWCxNQUFNLEVBQUUsSUFBSztFQUNiLFFBQVEsRUFBRSxRQUFTO0VHd0ZuQixPQUFPLEVBQUUsSUFBSyxHSHJEakI7RUFyQ0QsY0FBYyxDRzZGTixDQUFDLENBQUQ7SUFDSSxJQUFJLEVBQUUsQ0FBRSxHQUNYO0VIL0ZULGNBQWMsQUFJVCxRQUFRLENBQUM7SUFDTixRQUFRLEVBQUUsUUFBUztJQUNuQixPQUFPLEVBQUUsRUFBRztJQUNaLEdBQUcsRUFBRSxDQUFFO0lBQ1AsSUFBSSxFQUFFLENBQUU7SUFDUixLQUFLLEVBQUUsQ0FBRTtJQUNULEtBQUssRUFBRSxJQUFLO0lBQ1osVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENFbEZJLE9BQU87SUZtRmhDLGlCQUFpQixFQUFFLFdBQU07SUFDekIsU0FBUyxFQUFFLFdBQU0sR0FDcEI7RUFkTCxjQUFjLENBZVYsY0FBYyxDQUFDO0lBQ1gsTUFBTSxFQUFFLElBQUs7SUFDYixXQUFXLEVBQUUsSUFBSztJQUNsQixTQUFTLEVBQUUsSUFBSztJQUNoQixRQUFRLEVBQUUsUUFBUztJQUNuQixLQUFLLEVBcEdXLE9BQU8sR0FvSDFCO0lBcENMLGNBQWMsQ0FlVixjQUFjLEFBTVQsSUFBSyxDQUFBLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDdkIsUUFBUSxFQUFFLFFBQVM7TUFDbkIsT0FBTyxFQUFFLEVBQUc7TUFDWixHQUFHLEVBQUUsQ0FBRTtNQUNQLE1BQU0sRUFBRSxDQUFFO01BQ1YsSUFBSSxFQUFFLElBQUs7TUFDWCxLQUFLLEVBQUUsQ0FBRTtNQUNULEtBQUssRUFBRSxDQUFFO01BQ1QsV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENFcEdELE9BQU87TUZxRzVCLGlCQUFpQixFQUFFLFdBQU07TUFDekIsU0FBUyxFQUFFLFdBQU0sR0FDcEI7SUFoQ1QsY0FBYyxDQWVWLGNBQWMsQUFrQlQsS0FBSyxDQUFDO01BQ0gsV0FBVyxFQUFFLEdBQUksR0FDcEI7O0FBSVQsYUFBYSxDQUFDO0VBQ1Ysa0JBQWtCLEVBQUUsVUFBVztFQUMvQixVQUFVLEVBQUUsVUFBVztFQUN2QixNQUFNLEVBQUUsSUFBSztFQUNiLFVBQVUsRUFBRSxJQUFLO0VBQ2pCLE1BQU0sRUFBRSxDQUFFO0VBQ1YsVUFBVSxFQUFFLElBQUs7RUFDakIsT0FBTyxFQUFFLEtBQU07RUFDZixNQUFNLEVBQUUsaUJBQWtCO0VBQzFCLGFBQWEsRUFBRSxHQUFJO0VBQ25CLEtBQUssRUFBRSxJQUFLO0VBQ1osU0FBUyxFQUFFLElBQUs7RUFDaEIsT0FBTyxFQUFFLEtBQU07RUFDZixrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFJO0VBQzlCLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFJO0VBQ3RCLGtCQUFrQixFQUFFLElBQUs7RUFDekIsZUFBZSxFQUFFLElBQUs7RUFDdEIsVUFBVSxFQUFFLElBQUssR0FDcEI7O0FBR0Qsa0JBQWtCO0FBRWxCLGFBQWEsQ0FBQztFQUNWLFFBQVEsRUFBRSxRQUFTO0VBQ25CLGNBQWMsRUFBRSxJQUFLO0VBQ3JCLElBQUksRUFBRSxDQUFFO0VBQ1IsTUFBTSxFQUFFLENBQUU7RUFDVixPQUFPLEVBQUUsS0FBTTtFQUNmLEtBQUssRUFBRSxJQUFLO0VBQ1osaUJBQWlCLEVBQUUsdUJBQVc7RUFDOUIsU0FBUyxFQUFFLHVCQUFXO0VBQ3RCLDJCQUEyQixFQUFFLGlCQUFrQjtFQUMvQyxtQkFBbUIsRUFBRSxpQkFBa0I7RUFDdkMsbUJBQW1CLEVBQUUsU0FBVTtFQUMvQixtQkFBbUIsRUFBRSw0QkFBNkIsR0FDckQ7O0FBRUQsdUJBQXVCO0FBQ3ZCLG9CQUFvQixDQUFDO0VBQ2pCLE1BQU0sRUFBRSxNQUFPLEdBQ2xCOztBQUVELG1CQUFtQixDQUFDO0VBQ2hCLGdCQUFnQixFQXBLSSx3QkFBSTtFQXFLeEIsU0FBUyxFQUFFLElBQUs7RUFDaEIsV0FBVyxFQUFFLElBQUs7RUFDbEIsT0FBTyxFQUFFLFNBQVU7RUFDbkIsYUFBYSxFQUFFLFdBQVk7RUFDM0IsVUFBVSxFQUFFLE1BQU87RUFDbkIsS0FBSyxFQUFFLElBQUs7RUFDWixRQUFRLEVBQUUsUUFBUyxHQW1CdEI7RUEzQkQsbUJBQW1CLEFBU2QsUUFBUSxDQUFDO0lBQ04sUUFBUSxFQUFFLFFBQVM7SUFDbkIsT0FBTyxFQUFFLEVBQUc7SUFDWixNQUFNLEVBQUUsQ0FBRTtJQUNWLElBQUksRUFBRSxDQUFFO0lBQ1IsS0FBSyxFQUFFLENBQUU7SUFDVCxLQUFLLEVBQUUsSUFBSztJQUNaLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDRXpLSSxPQUFPO0lGMEtoQyxpQkFBaUIsRUFBRSxXQUFNO0lBQ3pCLFNBQVMsRUFBRSxXQUFNLEdBQ3BCO0VBbkJMLG1CQUFtQixHQW9CYixrQkFBa0IsQ0FDaEIsb0JBQW9CLEFBQ2YsWUFBWSxDQUFDO0lBQ1YsYUFBYSxFQUFFLENBQUUsR0FDcEI7O0FBS2Isb0JBQW9CO0FBQ3BCLG1CQUFtQixDQUFDO0VBQ2hCLGdCQUFnQixFQWxNSSx3QkFBSTtFQW1NeEIsU0FBUyxFQUFFLElBQUs7RUFDaEIsV0FBVyxFQUFFLElBQUs7RUFDbEIsT0FBTyxFQUFFLFNBQVU7RUFDbkIsVUFBVSxFQUFFLE1BQU87RUFDbkIsV0FBVyxFQUFFLE1BQU87RUFDcEIsTUFBTSxFQUFFLENBQUU7RUFDVixVQUFVLEVBQUUsVUFBVztFQUN2QixPQUFPLEVBQUUsS0FBTTtFQUNmLFFBQVEsRUFBRSxRQUFTO0VBQ25CLEtBQUssRUEzTWUsT0FBTyxHQTRNOUI7O0FBRUQsb0JBQW9CLEFBQ2YsWUFBWSxDQUFDO0VBQ1YsYUFBYSxFQUFFLFdBQVksR0FDOUI7O0FBSEwsb0JBQW9CLEFBSWYsV0FBVyxDQUFDO0VBQ1QsYUFBYSxFQUFFLFdBQVksR0FDOUI7O0FBTkwsb0JBQW9CLEFBT2YsSUFBSyxDQUFBLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDdkIsUUFBUSxFQUFFLFFBQVM7RUFDbkIsT0FBTyxFQUFFLEVBQUc7RUFDWixNQUFNLEVBQUUsQ0FBRTtFQUNWLElBQUksRUFBRSxDQUFFO0VBQ1IsS0FBSyxFQUFFLENBQUU7RUFDVCxLQUFLLEVBQUUsSUFBSztFQUNaLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDRW5OSSxPQUFPO0VGb05oQyxpQkFBaUIsRUFBRSxXQUFNO0VBQ3pCLFNBQVMsRUFBRSxXQUFNLEdBQ3BCOztBQWpCTCxvQkFBb0IsQUFtQmYsS0FBSyxDQUFDO0VBQ0gsV0FBVyxFQUFFLEdBQUksR0FDcEI7O0FBckJMLG9CQUFvQixBQXVCZixPQUFPLENBQUM7RUFDTCxLQUFLLEVBQUUsT0FBUSxHQUNsQjs7QUFHTCxvQkFBb0IsQ0FBQztFQUNqQixVQUFVLEVBQUUsR0FBSSxHQUNuQjs7QUFFRCxtQkFBbUIsQ0FBQztFQUNoQixhQUFhLEVBQUUsR0FBSSxHQUN0Qjs7QUFHRCx3QkFBd0I7QUFFeEIsYUFBYSxZQUFZLEFBQ3BCLGNBQWMsRUFEbkIsYUFBYSxZQUFZLEFBRXBCLGVBQWUsQ0FBQztFQUNiLDJCQUEyQixFQUFFLEtBQU07RUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtFQUMzQix3QkFBd0IsRUFBRSxFQUFHO0VBQzdCLGdCQUFnQixFQUFFLEVBQUcsR0FDeEI7O0FBUEwsYUFBYSxZQUFZLEFBUXBCLGNBQWMsQ0FBQztFQUNaLGlCQUFpQixFQUFFLG9CQUFXO0VBQzlCLFNBQVMsRUFBRSxvQkFBVyxHQUN6Qjs7QUFYTCxhQUFhLFlBQVksQUFZcEIsZUFBZSxDQUFDO0VBQ2IsaUJBQWlCLEVBQUUsdUJBQVc7RUFDOUIsU0FBUyxFQUFFLHVCQUFXLEdBQ3pCIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlhbG9nLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTUtMTItMjcgMTc6Mzc6NDhcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0xMCAxMTozMjo1OFxuKi9cblxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xuQGltcG9ydCBcIi4uL19zZXR0aW5nLnNjc3NcIjtcblxuJGNvbG9yRGlhbG9nQmc6ICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuJGRpYWxvZ0J1dHRvbkNvbG9yOiAgICAgIzAwN2FmZjtcblxuLyogZGlhbG9nIGJlZ2luICovXG5cbi5kaWFsb2cge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JEaWFsb2dCZztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMzVweDtcbiAgICB6LWluZGV4OiAkemluZGV4LWRpYWxvZztcbiAgICAmLnZlcnRpY2FsLWJ1dHRvbiB7XG4gICAgICAgIC5kaWFsb2ctZm9vdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5kaWFsb2ctYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCk6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kaWFsb2cuc2NhbGUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMTg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMTg1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgJi50cmFuc2l0aW9uLWluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMC44MTUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDAuODE1KTtcbiAgICB9XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5kaWFsb2ctdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRpYWxvZy1ib2R5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uZGlhbG9nLWZvb3RlciB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAaW5jbHVkZSBlcXVhbC1mbGV4KGEpO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbiAgICB9XG4gICAgLmRpYWxvZy1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICRkaWFsb2dCdXR0b25Db2xvcjtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpOjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xuICAgICAgICB9XG4gICAgICAgICYuYm9sZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGlhbG9nLWlucHV0IHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5cbi8qIGFjdGlvbi1zaGVldCAqL1xuXG4uYWN0aW9uLXNoZWV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbn1cblxuLmFjdGlvbi1zaGVldC1jb250YWluZXIsXG4uYWN0aW9uLXNoZWV0LWZvb3RlciB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5hY3Rpb24tc2hlZXQtdGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckRpYWxvZ0JnO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yQm9yZGVyO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gICAgfVxuICAgICsgLmFjdGlvbi1zaGVldC1ib2R5IHtcbiAgICAgICAgLmFjdGlvbi1zaGVldC1idXR0b24ge1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGlvbi1zaGVldC1idXR0b24sXG4uYWN0aW9uLXNoZWV0LWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JEaWFsb2dCZztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogJGRpYWxvZ0J1dHRvbkNvbG9yO1xufVxuXG4uYWN0aW9uLXNoZWV0LWJ1dHRvbiB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbiAgICB9XG4gICAgJjpub3QoOmxhc3QtY2hpbGQpOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yQm9yZGVyO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gICAgfVxuICAgIC8vIOiCr+WumueUqOaIt+aTjeS9nOihjOS4uum7mOiupOWKoOeyl+Wtl+S9k+aYvuekulxuICAgICYuYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC8vIOWNsemZqeaTjeS9nOagt+W8j1xuICAgICYuZGFuZ2VyIHtcbiAgICAgICAgY29sb3I6ICNmZjNiMzA7XG4gICAgfVxufVxuXG4uYWN0aW9uLXNoZWV0LWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYWN0aW9uLXNoZWV0LWNsb3NlIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cblxuLyog5bqV6YOo5ruR5YWl5Yqo55S7ICovXG5cbi5hY3Rpb24tc2hlZXQuZnJvbS1ib3R0b20ge1xuICAgICYudHJhbnNpdGlvbi1pbixcbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24taW4ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgfVxufVxuIiwiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTYtMDEtMjMgMDE6MDE6MDNcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0yMyAwMTo1NDo1MVxuKiDmqKHmi5/kuIDlg4/ntKBcbiogQHVzYWdlOlxuKiBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IEBpbmNsdWRlIGJvcmRlcihib3R0b20sICNhYmNkZWYpIH1cbiovXG5cbi8vIOe6teWQkVxuJWJvcmRlci1wb3J0cmFpdCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG59XG5cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuXG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3JCb3JkZXIpIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICAgICAgIGJvcmRlcjogMDtcblxuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4vLyB2YXJpYWJsZXMgc2Nzc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcblxuQGltcG9ydCBcImV4dC9fbWl4aW4uc2Nzc1wiO1xuQGltcG9ydCBcImV4dC9fYm9yZGVyLW1peGluLnNjc3NcIjtcblxuXG4vLyBmb25055u45YWzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJGZvbnRTaXplOiAgICAgICAgICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDsgXG4kZm9udExpbmVIZWlnaHQ6ICAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kZm9udEZhbWlseTogICAgICAgICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgU1RIZWlUaSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIOiDjOaZr+iJsu+8jOaWh+acrOiJsu+8jOi+ueahhuiJsu+8jOmTvuaOpeiJslxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiRjb2xvclRleHQ6ICAgICAgICAgICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG4kY29sb3JCZzogICAgICAgICAgICAgICAgICAgICAgICAjZjNmNGY1ICFkZWZhdWx0O1xuJGNvbG9yQm9yZGVyOiAgICAgICAgICAgICAgICAgICAgI2RiZGJkYiAhZGVmYXVsdDtcbiRjb2xvckxpbms6ICAgICAgICAgICAgICAgICAgICAgICMwOGMgIWRlZmF1bHQ7XG4kY29sb3JQbGFjZWhvbGRlcjogICAgICAgICAgICAgICAjOTk5ICFkZWZhdWx0OyAvLyBpbnB1dCBwbGFjZWhvbGRlciBjb2xvclxuJGNvbG9yRGlzYWJsZWQ6ICAgICAgICAgICAgICAgICAgIzk5OSAjZTNlM2UzICNkYmRiZGIgIWRlZmF1bHQ7IC8vIHRleHRDb2xvciBiZ0NvbG9yIGJvcmRlckNvbG9yXG5cblxuJHByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAgIzIyMiAhZGVmYXVsdDsgLy8g5Li76Imy6LCD77yM5pqC5a6a6buR6ImyXG5cblxuLy8gei1pbmRleFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LW5hdmJhci1maXhlZDogICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1iYWNrZHJvcDogICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wdXA6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtZGlhbG9nOiAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LWxvYWRlcjogICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuJHppbmRleC10b2FzdDogICAgICAgICAgICAgMTA5MCAhZGVmYXVsdDtcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgXG4vLyBtaXhpbiBzY3NzXG4vLyDljIXmi6zluLjnlKjnmoRtaXhpbiwgJSwgQGZ1bmN0aW9uIOWPiui+heWKqeeahGJ0buWSjOiDjOaZr+WbvueJh2ljb25cbi8vIG1peGlu77yM6YCa6L+HQGluY2x1ZGXosIPnlKjvvIzmoLflvI/pgJrov4fmi7fotJ3nmoTmlrnlvI/kvb/nlKjvvIzlsKTlhbbpgILnlKjkuo7kvKDpgJLlj4LmlbBcbi8vICXvvIzpgJrov4dAZXh0ZW5k6LCD55So77yM5qC35byP6YCa6L+H57uE5ZCI55Sz5piO55qE5pa55byP5L2/55So77yM6YCC55So5LqO5LiN5Lyg5Y+C5pWw55qE5Luj56CB54mH5q61ICBcbi8vIEBmdW5jdGlvbu+8jOi/lOWbnuS4gOS4quWAvO+8jOeUqOS6juiwg+eUqFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBtaXhpbiAmICVcbi8vIOaXouWumuS5ieS6hm1peGlu5Lmf5a6a5LmJ5LqGJe+8jOagueaNrumcgOaxguS9v+eUqEBpbmNsdWRl5oiWQGV4dGVuZOiwg+eUqFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWNlbnRlci1ibG9jaztcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuJWNlbnRlci1ibG9jayB7XG4gICAgQGluY2x1ZGUgY2VudGVyLWJsb2NrKGZhbHNlKTtcbn1cblxuLy8gY2xlYXJmaXhcbkBtaXhpbiBjbGVhcmZpeCgkZXh0ZW5kOiB0cnVlKSB7XG4gICAgQGlmICRleHRlbmQge1xuICAgICAgICBAZXh0ZW5kICVjbGVhcmZpeDtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuJWNsZWFyZml4IHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeChmYWxzZSk7XG59XG5cbi8vIEhpZGUgb25seSB2aXN1YWxseSwgYnV0IGhhdmUgaXQgYXZhaWxhYmxlIGZvciBzY3JlZW5yZWFkZXJzXG4vLyDlj6rpmpDol4/kuo7op4bop4nvvIzlsY/luZXmtY/op4jlmajlj6/ku6XpmIXor7tcbkBtaXhpbiBoaWRkZW4tY2xpcCgkZXh0ZW5kOiB0cnVlKSB7XG4gICAgQGlmICRleHRlbmQge1xuICAgICAgICBAZXh0ZW5kICVoaWRkZW4tY2xpcDtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICB9XG59XG5cbiVoaWRkZW4tY2xpcCB7XG4gICAgQGluY2x1ZGUgaGlkZGVuLWNsaXAoZmFsc2UpO1xufVxuXG4vLyBlbGxpcHNpc1xuQG1peGluIGVsbGlwc2lzKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWVsbGlwc2lzO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbn1cblxuJWVsbGlwc2lzIHtcbiAgICBAaW5jbHVkZSBlbGxpcHNpcyhmYWxzZSk7XG59XG5cbi8vIOWPquaciXdlYmtpdOaUr+aMgeWkmuihjOecgeeVpeWPt1xuQG1peGluIGVsbGlwc2lzLWxpbmUoJGxpbmU6IDIpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmU7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLy8gd29yZC1icmVha1xuLy8g55So5LqO6ZO+5o6l5Zyw5Z2A5by65Yi25o2i6KGMXG5AbWl4aW4gd29yZC1icmVhaygkZXh0ZW5kOiB0cnVlKSB7XG4gICAgQGlmICRleHRlbmQge1xuICAgICAgICBAZXh0ZW5kICV3b3JkLWJyZWFrO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cbn1cblxuJXdvcmQtYnJlYWsge1xuICAgIEBpbmNsdWRlIHdvcmQtYnJlYWsoZmFsc2UpO1xufVxuXG4vLyBkaXNhYmxlZFxuLy8g56aB55So5qC35byP77yM5YqgIWltcG9ydGFudFxuQG1peGluIGRpc2FibGVkKCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiVkaXNhYmxlZCB7XG4gICAgQGluY2x1ZGUgZGlzYWJsZWQ7XG59XG5cbi8vIGZpeGVkIHRvcCAmIGJvdHRvbVxuQG1peGluIGZpeGVkKCRwb3M6IDApIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBAaWYgJHBvcyA9PSBib3R0b20ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgdG9wOiAkcG9zO1xuICAgIH1cbn1cblxuJWZpeGVkLXRvcCB7XG4gICAgQGluY2x1ZGUgZml4ZWQ7XG59XG5cbiVmaXhlZC1ib3R0b20ge1xuICAgIEBpbmNsdWRlIGZpeGVkKCRwb3M6IGJvdHRvbSk7XG59XG5cbi8vIGp1c3RpZnlcbkBtaXhpbiBqdXN0aWZ5KCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWp1c3RpZnk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbn1cblxuJWp1c3RpZnkge1xuICAgIEBpbmNsdWRlIGp1c3RpZnkoZmFsc2UpO1xufVxuXG4vLyBtaXhpblxuLy8g5Y+q5a6a5LmJ5LqGbWl4aW7vvIzmiYDku6Xlj6rog73pgJrov4dAaW5jbHVkZeadpeiwg+eUqFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0YWJsZSDnrYnliIZcbkBtaXhpbiBlcXVhbC10YWJsZSgkY2hpbGRyZW46IGxpKSB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAkY2hpbGRyZW5FbGU6IGxpIGRpdiBwIGEgc3BhbiBzdHJvbmc7XG4gICAgQGlmIGluZGV4KCRjaGlsZHJlbkVsZSwgJGNoaWxkcmVuKSB7XG4gICAgICAgICN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgLiN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBmbGV4IOetieWIhlxuQG1peGluIGVxdWFsLWZsZXgoJGNoaWxkcmVuOiBsaSkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJGNoaWxkcmVuRWxlOiBsaSBkaXYgcCBhIHNwYW4gc3Ryb25nO1xuICAgIEBpZiBpbmRleCgkY2hpbGRyZW5FbGUsICRjaGlsZHJlbikge1xuICAgICAgICAjeyRjaGlsZHJlbn0ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIC4jeyRjaGlsZHJlbn0ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZmxleCBjZW50ZXJcbkBtaXhpbiBjZW50ZXItZmxleCgkZGlyZWN0aW9uOiBib3RoKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSBib3RoIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHkge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLy8gdHJhbnNsYXRlIGNlbnRlclxuQG1peGluIGNlbnRlci10cmFuc2xhdGUoJGRpcmVjdGlvbjogYm90aCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSBib3RoIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHgge1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB5IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgICB9XG59XG5cbi8vIHRyaWFuZ2xlIOS4ieinkueureWktFxuJXRyaWFuZ2xlLWJhc2ljIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdHJpYW5nbGUoJGRpcmVjdGlvbjogdG9wLCAkYm9yZGVyV2lkdGg6IDZweCwgJGJvcmRlckNvbG9yOiAjZGVkZWRlKSB7XG4gICAgQGV4dGVuZCAldHJpYW5nbGUtYmFzaWM7XG4gICAgQGlmICRkaXJlY3Rpb24gPT0gdG9wIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItdG9wOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gbGVmdCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbi8vIGFycm93IOaWueWQkeeureWktFxuQG1peGluIGFycm93KCRzaXplOiAxMHB4LCAkZGlyZWN0aW9uOiByaWdodCwgJGJvcmRlcldpZHRoOiAycHgsICRib3JkZXJDb2xvcjogI2RlZGVkZSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIEBpZiAkZGlyZWN0aW9uID09IHRvcCB7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICBAaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG59XG5cbi8vIHJlbVxuQG1peGluIHJlbSgkcHg6IDEuNCwgJHByb3BlcnR5OiBmb250LXNpemUpIHtcbiAgICAjeyRwcm9wZXJ0eX06ICRweCAqIDEwcHg7XG4gICAgI3skcHJvcGVydHl9OiAjeyRweH1yZW07XG59XG5cbi8vIGh0dHA6Ly93d3cuY3NzM2ZpbGVzLmNvbS9mb250L1xuLy8gMSBUaGUgZW90IGZvbnRmaWxlLiBDYW4gYmUgb21pdHRlZCBpZiB5b3UgZG9uYHQgd2FudCB0byBzdXBwb3J0IEludGVybmV0IEV4cGxvcmVyIHByaW9yIHRvIHZlcnNpb24gOSAoaW5jbHVkaW5nIHNlbWljb2xvbikuXG4vLyAyIENhbiBhbHNvIGJlIG9taXR0ZWQgZm9yIEludGVybmV0IEV4cGxvcmVyIDwgOS4gP2llZml4IHByZXZlbnRzIElFNiBmcm9tIGludGVycHJldGluZyBhbGwgb2YgdGhlIGZvbGxvd2luZy4gSWYgdGhlIHdob2xlIElFIGZhbWlseSAoNiB0byA5KSBzaG91bGQgYmUgc3VwcG9ydGVkLCAxIGFuZCAyIGFyZSBuZWVkZWQuXG4vLyAzIENhbiBiZSBvbWl0dGVkIGlmIGlQYWQgdmVyc2lvbnMgcHJpb3IgdG8gaU9TIDQuMiBzaG91bGRu4oCZdCBiZSBzdXBwb3J0ZWQuIFxuLy8gNCBUaGUgdHRmIGZvbnRmaWxlLiBOZWNlc3NhcnkgdG8gc3VwcG9ydCAoTW9iaWxlKSBTYWZhcmkgYW5kIE9wZXJhLiBcbi8vIDUgVGhlIHdvZmYgZm9udGZpbGUgZm9yIGFsbCBtb2Rlcm4gYnJvd3NlcnMgKGJlc3QgY2hvaWNlKS5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYWNlRmFtaWx5LCAkZm9udEZhY2VQYXRoLCAkd2VpZ2h0OiBub3JtYWwsICRzdHlsZTogbm9ybWFsKSB7XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhY2VGYW1pbHk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuICAgICAgICBmb250LXN0eWxlOiAkc3R5bGU7XG4gICAgICAgIHNyYzogdXJsKFwiI3skZm9udEZhY2VQYXRofS5lb3RcIik7IC8vIDFcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRmb250RmFjZVBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLCB1cmwoXCIjeyRmb250RmFjZVBhdGh9LnN2ZyMjeyRmb250RmFjZUZhbWlseX1cIikgZm9ybWF0KFwic3ZnXCIpLCB1cmwoXCIjeyRmb250RmFjZVBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skZm9udEZhY2VQYXRofS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxufVxuXG4vLyAlXG4vLyDlj6rlrprkuYnkuoYl77yM5omA5Lul5Y+q6IO96YCa6L+HQGV4dGVuZOadpeiwg+eUqFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g562J5YiG5YiXXG4vLyDlj6/ku6Xkvb/nlKhlcXVhbC1mbGV45oiWZXF1YWwtdGFibGXvvIzpu5jorqTlrZDlhYPntKDkuLpsaVxuJWVxdWFsLWNvbCB7XG4gICAgQGluY2x1ZGUgZXF1YWwtdGFibGU7XG59XG5cbi8vIGl0ZW0gYXJyb3csIOWPs+S+p+eureWktOi3s+i9rOaMh+WQkVxuJWl0ZW0tYXJyb3cge1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgQGluY2x1ZGUgYXJyb3c7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cblxuLy8g5LiL6Z2i55qE5Yeg5LiqJe+8jOeUseS6jueJiOacrOaIluWJjee8gO+8jOaJgOS7peiuvuiuoeaIkCVcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGZsZXhcbiVkaXNwbGF5LWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8vIGFsbC10cmFuc2l0aW9uXG4ldHJhbnNpdGlvbi1hbGwge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyB0cmFuc2xhdGUzZFxuJXRyYW5zbGF0ZTNkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4vLyBwYWdlIHN3aXRjaFxuJXBhZ2Utb3V0IHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSkgMC4xcztcbn1cblxuJXBhZ2UtaW4ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTtcbn1cblxuLy8gYnRuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGJ0bi1iYXNpY1xuLy8g5oyJ6ZKu5Z+65pys5qC35byP77yM6IGU5ZCI55Sz5piOXG4lYnRuLWJhc2ljIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* 
	 * @Author: shunjinchan
	 * @Date:   2016-01-03 19:19:17
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-06 19:30:51
	 */
	
	__webpack_require__(12);
	
	var defaults = {
	    title: '加载中...',
	    box: '<div class="loader-container"><div class="loader-body"><div class="activity activity-white"></div></div><div class="loader-title"></div></div>'
	};
	
	var instance;
	
	/**
	 * Loader
	 */
	function Loader() {
	    if (instance instanceof Loader) {
	        return instance;
	    }
	
	    this.createTime = new Date();
	    //缓存实例 
	    instance = this;
	
	    return this;
	}
	
	Loader.prototype = {
	    constructor: Loader,
	
	    /**
	     * open loader
	     * @param  {String 或者 Object} params，为 string 时默认是 title，为 Object 是配置
	     * @return {[type]}         [description]
	     */
	    open: function(params) {
	        if (this.isOpen) return;
	
	        this._render(params);
	        this._setSize();
	        this._bindEvents();
	
	        this.$box.show().removeClass('transition-out').addClass('transition-in');
	
	        this.isOpen = true;
	    },
	
	    _render: function(params) {
	        this.$box = $(defaults.box).appendTo('body');
	
	        var self = this;
	        var title = defaults.title;
	        var extraClass;
	        var timer;
	
	        if (params && typeof params === 'string') {
	            title = params;
	        }
	
	        if (params && Array.prototype.toString.call(params) === '[object Object]') {
	            title = params.title ? params.title : defaults.title;
	            extraClass = params.extraClass ? params.extraClass : '';
	            timer = params.timer ? params.timer : '';
	        }
	
	        this.$box.find('.loader-title').html(title);
	        extraClass && this.$box.addClass(extraClass);
	
	        if (timer && typeof timer === 'number') {
	            this.timeID = window.setTimeout(function() {
	                self.close();
	            }, timer);
	        }
	
	        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
	        $('body').append(this.$backdrop);
	        this.$backdrop && this.$backdrop.addClass('visible').css('opacity', '0');
	    },
	
	    _setSize: function(e) {
	        this.$box.css('marginTop', -Math.round(this.$box.outerHeight() / 2 / 1.185) + 'px');
	        this.$box.css('marginLeft', -Math.round(this.$box.outerWidth() / 2 / 1.185) + 'px');
	    },
	
	    _bindEvents: function() {
	        this.$backdrop.on('touchmove', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	        });
	    },
	
	    /**
	     * close loader
	     * @param  {function} 关闭之后的回调函数
	     * @return {[type]}         [description]
	     */
	    close: function(callback) {
	        var self = this;
	
	        if (this.$box.length === 0) {
	            return;
	        }
	
	        this.$backdrop && this.$backdrop.removeClass('visible');
	        this.$box.removeClass('transition-in').addClass('transition-out')
	            .transitionEnd(function(e) {
	                self.$box.off();
	                self.$box.remove();
	                self.$box = null;
	
	                self.$backdrop.off();
	                self.$backdrop.remove();
	
	                self.isOpen = false;
	
	                window.clearTimeout(self.timeID);
	
	                callback && typeof callback === 'function' && callback();
	            });
	    }
	};
	
	module.exports = Loader;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./loader.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./loader.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-02 23:57:49\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-06 13:28:37\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 01:54:51\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* loader begin */\n.loader-container {\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n  line-height: 1;\n  border-radius: 4px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1080;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .loader-container.transition-in {\n    opacity: 1;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1); }\n  .loader-container.transition-out {\n    opacity: 0;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815); }\n\n.loader-title {\n  color: #fff;\n  font-size: 14px;\n  margin: 10px 0 5px 0;\n  padding: 0 20px; }\n\n.activity {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: activity-spin 1s steps(12, end) infinite;\n  animation: activity-spin 1s steps(12, end) infinite; }\n\n.activity:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat; }\n\n.activity-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n@-webkit-keyframes activity-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes activity-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n/* loader end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGVyLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIiwiX3NldHRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0VBS0U7QUNMRjs7Ozs7Ozs7RUFRRTtBREVGLGtCQUFrQjtBQUVsQixpQkFBaUIsQ0FBQztFQVFkLE9BQU8sRUFBRSxJQUFLO0VBQ2QsZ0JBQWdCLEVBQUUsa0JBQUk7RUFDdEIsVUFBVSxFQUFFLE1BQU87RUFDbkIsV0FBVyxFQUFFLENBQUU7RUFDZixhQUFhLEVBQUUsR0FBSTtFQUNuQixRQUFRLEVBQUUsUUFBUztFQUNuQixHQUFHLEVBQUUsR0FBSTtFQUNULElBQUksRUFBRSxHQUFJO0VBQ1YsT0FBTyxFRVVnQixJQUFJO0VGVDNCLE9BQU8sRUFBRSxDQUFFO0VBQ1gsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0VBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFlBQUs7RUFDckMsMkJBQTJCLEVBQUUsMEJBQTJCO0VBQ3hELDJCQUEyQixFQUFFLDBCQUEyQjtFQUN4RCxtQkFBbUIsRUFBRSwwQkFBMkI7RUFDaEQsbUJBQW1CLEVBQUUsa0JBQW1CO0VBQ3hDLG1CQUFtQixFQUFFLHFDQUFzQyxHQWdCOUQ7RUF4Q0QsaUJBQWlCLEFBMEJaLGNBQWMsQ0FBQztJQUNaLE9BQU8sRUFBRSxDQUFFO0lBQ1gsMkJBQTJCLEVBQUUsS0FBTTtJQUNuQyxtQkFBbUIsRUFBRSxLQUFNO0lBQzNCLGlCQUFpQixFQUFFLG9CQUFXLENBQVUsUUFBSztJQUM3QyxTQUFTLEVBQUUsb0JBQVcsQ0FBVSxRQUFLLEdBQ3hDO0VBaENMLGlCQUFpQixBQWlDWixlQUFlLENBQUM7SUFDYixPQUFPLEVBQUUsQ0FBRTtJQUNYLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQixpQkFBaUIsRUFBRSxvQkFBVyxDQUFVLFlBQUs7SUFDN0MsU0FBUyxFQUFFLG9CQUFXLENBQVUsWUFBSyxHQUN4Qzs7QUFHTCxhQUFhLENBQUM7RUFDVixLQUFLLEVBQUUsSUFBSztFQUNaLFNBQVMsRUFBRSxJQUFLO0VBQ2hCLE1BQU0sRUFBRSxZQUFhO0VBQ3JCLE9BQU8sRUFBRSxNQUFPLEdBQ25COztBQUVELFNBQVMsQ0FBQztFQUNOLE9BQU8sRUFBRSxZQUFhO0VBQ3RCLEtBQUssRUFBRSxJQUFLO0VBQ1osTUFBTSxFQUFFLElBQUs7RUFDYix3QkFBd0IsRUFBRSxHQUFJO0VBQzlCLGdCQUFnQixFQUFFLEdBQUk7RUFDdEIsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxjQUFLLENBQVUsUUFBUTtFQUMzRCxTQUFTLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxjQUFLLENBQVUsUUFBUSxHQUN0RDs7QUFFRCxTQUFTLE1BQU0sQ0FBQztFQUNaLE9BQU8sRUFBRSxLQUFNO0VBQ2YsT0FBTyxFQUFFLEVBQUc7RUFDWixLQUFLLEVBQUUsSUFBSztFQUNaLE1BQU0sRUFBRSxJQUFLO0VBQ2IsZ0JBQWdCLEVBQUUsdTZDQUFHO0VBQ3JCLG1CQUFtQixFQUFFLEdBQUk7RUFDekIsZUFBZSxFQUFFLElBQUs7RUFDdEIsaUJBQWlCLEVBQUUsU0FBVSxHQUNoQzs7QUFFRCxlQUFlLE1BQU0sQ0FBQztFQUNsQixnQkFBZ0IsRUFBRSxvNkNBQUcsR0FDeEI7O0FBRUQsa0JBQWtCLENBQUMsYUFBYTtFQUM1QixJQUFJO0lBQ0EsaUJBQWlCLEVBQUUsY0FBTTs7QUFJakMsVUFBVSxDQUFDLGFBQWE7RUFDcEIsSUFBSTtJQUNBLGlCQUFpQixFQUFFLGNBQU07SUFDekIsU0FBUyxFQUFFLGNBQU07O0FBS3pCLGdCQUFnQiIsImZpbGUiOiJjb21wb25lbnRzL2xvYWRlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiogQEF1dGhvcjogc2h1bmppbmNoYW5cbiogQERhdGU6ICAgMjAxNi0wMS0wMiAyMzo1Nzo0OVxuKiBATGFzdCBNb2RpZmllZCBieTogICBzaHVuamluY2hhblxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTAxLTA2IDEzOjI4OjM3XG4qL1xuXG5AY2hhcnNldCBcInV0Zi04XCI7XG5AaW1wb3J0IFwiLi4vX3NldHRpbmcuc2Nzc1wiO1xuXG4vKiBsb2FkZXIgYmVnaW4gKi9cblxuLmxvYWRlci1jb250YWluZXIge1xuICAgIC8vIHdpZHRoOiAyNzBweDtcbiAgICAvLyBwYWRkaW5nOiAyMHB4IDA7XG4gICAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB6LWluZGV4OiAkemluZGV4LWxvYWRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxLjE4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxLjE4NSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHksIC13ZWJraXQtdHJhbnNmb3JtO1xuXG4gICAgJi50cmFuc2l0aW9uLWluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMC44MTUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDAuODE1KTtcbiAgICB9XG59XG5cbi5sb2FkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5hY3Rpdml0eSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFjdGl2aXR5LXNwaW4gMXMgc3RlcHMoMTIsIGVuZCkgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBhY3Rpdml0eS1zcGluIDFzIHN0ZXBzKDEyLCBlbmQpIGluZmluaXRlO1xufVxuXG4uYWN0aXZpdHk6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyMzZjNmM2YyclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5hY3Rpdml0eS13aGl0ZTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmlld0JveCUzRCcwJTIwMCUyMDEyMCUyMDEyMCclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIweG1sbnMlM0F4bGluayUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayclM0UlM0NkZWZzJTNFJTNDbGluZSUyMGlkJTNEJ2wnJTIweDElM0QnNjAnJTIweDIlM0QnNjAnJTIweTElM0QnNyclMjB5MiUzRCcyNyclMjBzdHJva2UlM0QnJTIzZmZmJyUyMHN0cm9rZS13aWR0aCUzRCcxMSclMjBzdHJva2UtbGluZWNhcCUzRCdyb3VuZCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDYwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg5MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTIwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4zNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE4MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjQ2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjEwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNTYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy42NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI3MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjc1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuODUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKSclMkYlM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIpO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYWN0aXZpdHktc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYWN0aXZpdHktc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cblxuLyogbG9hZGVyIGVuZCAqL1xuIiwiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTYtMDEtMjMgMDE6MDE6MDNcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0yMyAwMTo1NDo1MVxuKiDmqKHmi5/kuIDlg4/ntKBcbiogQHVzYWdlOlxuKiBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IEBpbmNsdWRlIGJvcmRlcihib3R0b20sICNhYmNkZWYpIH1cbiovXG5cbi8vIOe6teWQkVxuJWJvcmRlci1wb3J0cmFpdCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG59XG5cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuXG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3JCb3JkZXIpIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICAgICAgIGJvcmRlcjogMDtcblxuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4vLyB2YXJpYWJsZXMgc2Nzc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcblxuQGltcG9ydCBcImV4dC9fbWl4aW4uc2Nzc1wiO1xuQGltcG9ydCBcImV4dC9fYm9yZGVyLW1peGluLnNjc3NcIjtcblxuXG4vLyBmb25055u45YWzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJGZvbnRTaXplOiAgICAgICAgICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDsgXG4kZm9udExpbmVIZWlnaHQ6ICAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kZm9udEZhbWlseTogICAgICAgICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgU1RIZWlUaSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIOiDjOaZr+iJsu+8jOaWh+acrOiJsu+8jOi+ueahhuiJsu+8jOmTvuaOpeiJslxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiRjb2xvclRleHQ6ICAgICAgICAgICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG4kY29sb3JCZzogICAgICAgICAgICAgICAgICAgICAgICAjZjNmNGY1ICFkZWZhdWx0O1xuJGNvbG9yQm9yZGVyOiAgICAgICAgICAgICAgICAgICAgI2RiZGJkYiAhZGVmYXVsdDtcbiRjb2xvckxpbms6ICAgICAgICAgICAgICAgICAgICAgICMwOGMgIWRlZmF1bHQ7XG4kY29sb3JQbGFjZWhvbGRlcjogICAgICAgICAgICAgICAjOTk5ICFkZWZhdWx0OyAvLyBpbnB1dCBwbGFjZWhvbGRlciBjb2xvclxuJGNvbG9yRGlzYWJsZWQ6ICAgICAgICAgICAgICAgICAgIzk5OSAjZTNlM2UzICNkYmRiZGIgIWRlZmF1bHQ7IC8vIHRleHRDb2xvciBiZ0NvbG9yIGJvcmRlckNvbG9yXG5cblxuJHByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAgIzIyMiAhZGVmYXVsdDsgLy8g5Li76Imy6LCD77yM5pqC5a6a6buR6ImyXG5cblxuLy8gei1pbmRleFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LW5hdmJhci1maXhlZDogICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1iYWNrZHJvcDogICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wdXA6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtZGlhbG9nOiAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LWxvYWRlcjogICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuJHppbmRleC10b2FzdDogICAgICAgICAgICAgMTA5MCAhZGVmYXVsdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ== */\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* 
	* @Author: shunjinchan
	* @Date:   2015-10-15 13:34:31
	* @Last Modified by:   shunjinchan
	* @Last Modified time: 2016-01-06 19:34:46
	*/
	
	__webpack_require__(15);
	
	var defaults = {
	    box: '<div class="toast"></div>'
	};
	
	var instance;
	
	/**
	 * Toast
	 */
	function Toast() {
	    if (instance instanceof Toast) {
	        return instance;
	    }
	
	    this.createTime = new Date();
	    //缓存实例 
	    instance = this;
	
	    return this;
	}
	
	Toast.prototype = {
	    constructor: Toast,
	
	    /**
	     * open toast
	     * @param  {String 或者 Object} params，为 string 时默认是 title，为 Object 是配置
	     * @return {[type]}         [description]
	     */
	    open: function(params) {
	        if (this.isOpen) return;
	
	        this._render(params);
	        this._setSize();
	        this._bindEvents();
	
	        this.$box.show().removeClass('transition-out').addClass('transition-in');
	
	        this.isOpen = true;
	    },
	
	    _render: function(params) {
	        this.$box = $(defaults.box).appendTo('body');
	
	        var self = this;
	        var title;
	        var extraClass;
	        var timer;
	
	        if (params && typeof params === 'string') {
	            title = params;
	        }
	
	        if (params && Array.prototype.toString.call(params) === '[object Object]') {
	            title = params.title ? params.title : '';
	            extraClass = params.extraClass ? params.extraClass : '';
	            timer = params.timer ? params.timer : '';
	        }
	
	        this.$box.html(title);
	        extraClass && this.$box.addClass(extraClass);
	
	        if (timer && typeof timer === 'number') {
	            this.timeID = window.setTimeout(function() {
	                self.close();
	            }, timer);
	        }
	
	        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
	        $('body').append(this.$backdrop);
	        this.$backdrop && this.$backdrop.addClass('visible').css('opacity', '0');
	    },
	
	    _setSize: function(e) {
	        this.$box.css('marginTop', -Math.round(this.$box.outerHeight() / 2 / 1.185) + 'px');
	        this.$box.css('marginLeft', -Math.round(this.$box.outerWidth() / 2 / 1.185) + 'px');
	    },
	
	    _bindEvents: function() {
	        this.$backdrop.on('touchmove', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	        });
	    },
	
	    /**
	     * close toast
	     * @param  {function} 关闭之后的回调函数
	     * @return {[type]}         [description]
	     */
	    close: function(callback) {
	        var self = this;
	
	        if (this.$box.length === 0) {
	            return;
	        }
	
	        this.$backdrop && this.$backdrop.removeClass('visible');
	        this.$box.removeClass('transition-in').addClass('transition-out')
	            .transitionEnd(function(e) {
	                self.$box.off();
	                self.$box.remove();
	                self.$box = null;
	
	                self.$backdrop.off();
	                self.$backdrop.remove();
	
	                self.isOpen = false;
	
	                window.clearTimeout(self.timeID);
	
	                callback && typeof callback === 'function' && callback();
	            });
	    }
	};
	
	module.exports = Toast;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./toast.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./toast.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2015-12-27 17:37:48\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-06 21:57:19\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 01:54:51\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* toast begin */\n.toast {\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1090;\n  padding: 10px 20px;\n  max-width: 200px;\n  width: auto;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .toast.transition-in {\n    opacity: 1;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1); }\n  .toast.transition-out {\n    opacity: 0;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815); }\n\n.toast-title {\n  font-weight: normal;\n  font-size: 14px; }\n\n.toast-body {\n  font-size: 12px;\n  margin-top: 5px; }\n\n.toast-white {\n  background-color: rgba(255, 255, 255, 0.95);\n  color: #222; }\n\n/* toast end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9hc3Quc2NzcyIsImV4dC9fYm9yZGVyLW1peGluLnNjc3MiLCJfc2V0dGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQ0xGOzs7Ozs7OztFQVFFO0FERUYsaUJBQWlCO0FBRWpCLE1BQU0sQ0FBQztFQUNILGdCQUFnQixFQUFFLG1CQUFJO0VBQ3RCLEtBQUssRUFBRSxJQUFLO0VBQ1osVUFBVSxFQUFFLE1BQU87RUFDbkIsYUFBYSxFQUFFLEdBQUk7RUFDbkIsUUFBUSxFQUFFLFFBQVM7RUFDbkIsR0FBRyxFQUFFLEdBQUk7RUFDVCxJQUFJLEVBQUUsR0FBSTtFQUNWLE9BQU8sRUVtQmdCLElBQUk7RUZsQjNCLE9BQU8sRUFBRSxTQUFVO0VBQ25CLFNBQVMsRUFBRSxLQUFNO0VBQ2pCLEtBQUssRUFBRSxJQUFLO0VBQ1osT0FBTyxFQUFFLENBQUU7RUFFWCxpQkFBaUIsRUFBRSxvQkFBVyxDQUFVLFlBQUs7RUFDN0MsU0FBUyxFQUFFLG9CQUFXLENBQVUsWUFBSztFQUNyQywyQkFBMkIsRUFBRSwwQkFBMkI7RUFDeEQsMkJBQTJCLEVBQUUsMEJBQTJCO0VBQ3hELG1CQUFtQixFQUFFLDBCQUEyQjtFQUNoRCxtQkFBbUIsRUFBRSxrQkFBbUI7RUFDeEMsbUJBQW1CLEVBQUUscUNBQXNDLEdBZ0I5RDtFQXBDRCxNQUFNLEFBc0JELGNBQWMsQ0FBQztJQUNaLE9BQU8sRUFBRSxDQUFFO0lBQ1gsMkJBQTJCLEVBQUUsS0FBTTtJQUNuQyxtQkFBbUIsRUFBRSxLQUFNO0lBQzNCLGlCQUFpQixFQUFFLG9CQUFXLENBQVUsUUFBSztJQUM3QyxTQUFTLEVBQUUsb0JBQVcsQ0FBVSxRQUFLLEdBQ3hDO0VBNUJMLE1BQU0sQUE2QkQsZUFBZSxDQUFDO0lBQ2IsT0FBTyxFQUFFLENBQUU7SUFDWCwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0IsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0lBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFlBQUssR0FDeEM7O0FBR0wsWUFBWSxDQUFDO0VBQ1QsV0FBVyxFQUFFLE1BQU87RUFDcEIsU0FBUyxFQUFFLElBQUssR0FDbkI7O0FBRUQsV0FBVyxDQUFDO0VBQ1IsU0FBUyxFQUFFLElBQUs7RUFDaEIsVUFBVSxFQUFFLEdBQUksR0FDbkI7O0FBRUQsWUFBWSxDQUFDO0VBQ1QsZ0JBQWdCLEVBQUUseUJBQUk7RUFDdEIsS0FBSyxFQUFFLElBQUssR0FDZjs7QUFHRCxlQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvdG9hc3QuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTUtMTItMjcgMTc6Mzc6NDhcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0wNiAyMTo1NzoxOVxuKi9cblxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xuQGltcG9ydCBcIi4uL19zZXR0aW5nLnNjc3NcIjtcblxuLyogdG9hc3QgYmVnaW4gKi9cblxuLnRvYXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB6LWluZGV4OiAkemluZGV4LXRvYXN0O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMS4xODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMS4xODUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcblxuICAgICYudHJhbnNpdGlvbi1pbiB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDAuODE1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwLjgxNSk7XG4gICAgfVxufVxuXG4udG9hc3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG9hc3QtYm9keSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRvYXN0LXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgIGNvbG9yOiAjMjIyO1xufVxuXG5cbi8qIHRvYXN0IGVuZCAqL1xuIiwiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTYtMDEtMjMgMDE6MDE6MDNcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0yMyAwMTo1NDo1MVxuKiDmqKHmi5/kuIDlg4/ntKBcbiogQHVzYWdlOlxuKiBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IEBpbmNsdWRlIGJvcmRlcihib3R0b20sICNhYmNkZWYpIH1cbiovXG5cbi8vIOe6teWQkVxuJWJvcmRlci1wb3J0cmFpdCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG59XG5cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuXG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3JCb3JkZXIpIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICAgICAgIGJvcmRlcjogMDtcblxuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXG4vLyB2YXJpYWJsZXMgc2Nzc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcblxuQGltcG9ydCBcImV4dC9fbWl4aW4uc2Nzc1wiO1xuQGltcG9ydCBcImV4dC9fYm9yZGVyLW1peGluLnNjc3NcIjtcblxuXG4vLyBmb25055u45YWzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJGZvbnRTaXplOiAgICAgICAgICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDsgXG4kZm9udExpbmVIZWlnaHQ6ICAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kZm9udEZhbWlseTogICAgICAgICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgU1RIZWlUaSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIOiDjOaZr+iJsu+8jOaWh+acrOiJsu+8jOi+ueahhuiJsu+8jOmTvuaOpeiJslxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiRjb2xvclRleHQ6ICAgICAgICAgICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG4kY29sb3JCZzogICAgICAgICAgICAgICAgICAgICAgICAjZjNmNGY1ICFkZWZhdWx0O1xuJGNvbG9yQm9yZGVyOiAgICAgICAgICAgICAgICAgICAgI2RiZGJkYiAhZGVmYXVsdDtcbiRjb2xvckxpbms6ICAgICAgICAgICAgICAgICAgICAgICMwOGMgIWRlZmF1bHQ7XG4kY29sb3JQbGFjZWhvbGRlcjogICAgICAgICAgICAgICAjOTk5ICFkZWZhdWx0OyAvLyBpbnB1dCBwbGFjZWhvbGRlciBjb2xvclxuJGNvbG9yRGlzYWJsZWQ6ICAgICAgICAgICAgICAgICAgIzk5OSAjZTNlM2UzICNkYmRiZGIgIWRlZmF1bHQ7IC8vIHRleHRDb2xvciBiZ0NvbG9yIGJvcmRlckNvbG9yXG5cblxuJHByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAgIzIyMiAhZGVmYXVsdDsgLy8g5Li76Imy6LCD77yM5pqC5a6a6buR6ImyXG5cblxuLy8gei1pbmRleFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LW5hdmJhci1maXhlZDogICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1iYWNrZHJvcDogICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wdXA6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtZGlhbG9nOiAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LWxvYWRlcjogICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuJHppbmRleC10b2FzdDogICAgICAgICAgICAgMTA5MCAhZGVmYXVsdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ== */\n", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: shunjinchan
	 * @Date:   2015-10-15 15:08:08
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-06 23:41:00
	 */
	
	__webpack_require__(18);
	
	var defaults = {
	    activeClass: 'active'
	};
	
	function Tab() {}
	
	Tab.prototype = {
	    constructor: Tab,
	
	    init: function(ele, configs) {
	        var self = this;
	
	        this.control = ele || configs.control;
	        this.target = [];
	
	        // 收集 target
	        $.each(this.control, function(index, ele) {
	            self.target.push($($(this).attr('data-target')));
	        });
	
	        configs = configs || defaults;
	        this._bind(configs);
	    },
	
	    _bind: function(configs) {
	        var self = this;
	        var target;
	        var activeClass = configs.activeClass ? configs.activeClass : defaults.activeClass;
	
	        function clickHandler(e) {
	            e.preventDefault();
	
	            // 如果点击的是当前 active tab
	            if ($(this).hasClass(activeClass)) {
	                return false;
	            }
	
	            // 当前 control 高亮，其他 control 去高亮
	            self.control.removeClass(activeClass);
	            $(this).addClass(activeClass);
	
	            // 显示当前 pane，其他 pane 隐藏
	            target = $(this).attr('data-target');
	
	            $.each(self.target, function(index, ele) {
	                ele.removeClass(activeClass);
	
	                $(target).addClass(activeClass);
	            });
	
	            // 第一个参数当前 control
	            // 第二个参数当前 pane
	            configs.onchange && configs.onchange($(this), $(target));
	        }
	
	        $.each(this.control, function(index, ele) {
	            $(this).on('click', clickHandler);
	        });
	    }
	};
	
	module.exports = Tab;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./tab.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./tab.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2015-12-30 23:47:50\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 15:32:59\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 01:54:51\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* tab begin */\n.tab-title {\n  display: table;\n  width: 100%;\n  position: relative; }\n\n.tab-default .tab-title {\n  background-color: #fff; }\n  @media screen and (-webkit-min-device-pixel-ratio: 2) {\n    .tab-default .tab-title {\n      border: 0;\n      background-position: left bottom;\n      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #dbdbdb), to(#dbdbdb));\n      background-repeat: repeat-x;\n      -webkit-background-size: 100% 1px;\n      /*no*/ } }\n\n.tab-default .tab-title-item {\n  height: 0.84rem;\n  line-height: 0.84rem;\n  font-weight: normal;\n  font-size: 0.36rem;\n  text-align: center;\n  transition: 300ms;\n  border-bottom: 2px solid transparent;\n  box-sizing: border-box; }\n  .tab-default .tab-title-item.active {\n    border-color: #0894ec;\n    color: #0894ec;\n    position: relative;\n    z-index: 11; }\n\n.tab-title-item {\n  display: table-cell; }\n\n.tab-border .tab-title-item {\n  height: 0.54rem;\n  line-height: 0.54rem;\n  font-weight: normal;\n  font-size: 0.28rem;\n  text-align: center;\n  color: #545e6e;\n  transition: 300ms;\n  border-top: 1px solid #545e6e;\n  /*no*/\n  border-bottom: 1px solid #545e6e;\n  /*no*/\n  border-right: 1px solid #545e6e;\n  /*no*/ }\n  .tab-border .tab-title-item:first-child {\n    border-radius: 2px 0 0 2px;\n    /*no*/ }\n  .tab-border .tab-title-item:last-child {\n    border-radius: 0 2px 2px 0;\n    /*no*/\n    border-right: 1px solid #545e6e;\n    /*no*/ }\n  .tab-border .tab-title-item.active {\n    background-color: #545e6e;\n    color: #fff;\n    border-color: #545e6e; }\n  .tab-border .tab-title-item.active + .tab-title-item {\n    border-left-color: #545e6e; }\n\n.tab-content-pane {\n  width: 100%;\n  display: none; }\n  .tab-content-pane.active {\n    display: block; }\n\n/* tab end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFiLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQ0xGOzs7Ozs7OztFQVFFO0FERUYsZUFBZTtBQUlmLFVBQVUsQ0FBQztFQUNQLE9BQU8sRUFBRSxLQUFNO0VBQ2YsS0FBSyxFQUFFLElBQUs7RUFDWixRQUFRLEVBQUUsUUFBUyxHQUN0Qjs7QUFFRCxZQUFZLENBQ1IsVUFBVSxDQUFDO0VBQ1AsZ0JBQWdCLEVBQUUsSUFBSyxHQUUxQjtFQ0RELE1BQU0sQ0FBTixNQUFNLE9BQU8sNkJBQTZCLEVBQUUsQ0FBQztJREhqRCxZQUFZLENBQ1IsVUFBVSxDQUFDO01DR1AsTUFBTSxFQUFFLENBQUU7TUFVTixtQkFBbUIsRUFBRSxXQUFZO01BQ2pDLGdCQUFnQixFQUFFLG9IQUFnQjtNQUNsQyxpQkFBaUIsRUFBRSxRQUFTO01BQzVCLHVCQUF1QixFQUFFLFFBQVM7TUFBRSxNQUFNLEVEYmpEOztBQUpMLFlBQVksQ0FLUixlQUFlLENBQUM7RUFDWixNQUFNLEVBQUUsT0FBUTtFQUNoQixXQUFXLEVBQUUsT0FBUTtFQUNyQixXQUFXLEVBQUUsTUFBTztFQUNwQixTQUFTLEVBQUUsT0FBUTtFQUNuQixVQUFVLEVBQUUsTUFBTztFQUNuQixVQUFVLEVBQUUsS0FBTTtFQUNsQixhQUFhLEVBQUUscUJBQXNCO0VBQ3JDLFVBQVUsRUFBRSxVQUFXLEdBTzFCO0VBcEJMLFlBQVksQ0FLUixlQUFlLEFBU1YsT0FBTyxDQUFDO0lBQ0wsWUFBWSxFQUFFLE9BQVE7SUFDdEIsS0FBSyxFQUFFLE9BQVE7SUFDZixRQUFRLEVBQUUsUUFBUztJQUNuQixPQUFPLEVBQUUsRUFBRyxHQUNmOztBQUlULGVBQWUsQ0FBQztFQUNaLE9BQU8sRUFBRSxVQUFXLEdBQ3ZCOztBQUVELFdBQVcsQ0FDUCxlQUFlLENBQUM7RUFDWixNQUFNLEVBQUUsT0FBUTtFQUNoQixXQUFXLEVBQUUsT0FBUTtFQUNyQixXQUFXLEVBQUUsTUFBTztFQUNwQixTQUFTLEVBQUUsT0FBUTtFQUNuQixVQUFVLEVBQUUsTUFBTztFQUNuQixLQUFLLEVBMUNELE9BQU87RUEyQ1gsVUFBVSxFQUFFLEtBQU07RUFDbEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBM0NmLE9BQU87RUE0Q2IsTUFBTTtFQUNOLGFBQWEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQTdDbEIsT0FBTztFQThDYixNQUFNO0VBQ04sWUFBWSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBL0NqQixPQUFPO0VBZ0RiLE1BQU0sRUFtQlQ7RUFqQ0wsV0FBVyxDQUNQLGVBQWUsQUFjVixZQUFZLENBQUM7SUFDVixhQUFhLEVBQUUsV0FBWTtJQUMzQixNQUFNLEVBQ1Q7RUFsQlQsV0FBVyxDQUNQLGVBQWUsQUFrQlYsV0FBVyxDQUFDO0lBQ1QsYUFBYSxFQUFFLFdBQVk7SUFDM0IsTUFBTTtJQUNOLFlBQVksRUFBRSxHQUFHLENBQUMsS0FBSyxDQXhEckIsT0FBTztJQXlEVCxNQUFNLEVBQ1Q7RUF4QlQsV0FBVyxDQUNQLGVBQWUsQUF3QlYsT0FBTyxDQUFDO0lBQ0wsZ0JBQWdCLEVBNURkLE9BQU87SUE2RFQsS0FBSyxFQUFFLElBQUs7SUFDWixZQUFZLEVBOURWLE9BQU8sR0ErRFo7RUE3QlQsV0FBVyxDQUNQLGVBQWUsQUE2QlYsT0FBTyxHQUFHLGVBQWUsQ0FBQztJQUN2QixpQkFBaUIsRUFqRWYsT0FBTyxHQWtFWjs7QUFNVCxpQkFBaUIsQ0FBQztFQUNkLEtBQUssRUFBRSxJQUFLO0VBQ1osT0FBTyxFQUFFLElBQUssR0FJakI7RUFORCxpQkFBaUIsQUFHWixPQUFPLENBQUM7SUFDTCxPQUFPLEVBQUUsS0FBTSxHQUNsQjs7QUFJTCxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvdGFiLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE1LTEyLTMwIDIzOjQ3OjUwXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjMgMTU6MzI6NTlcbiovXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcbkBpbXBvcnQgXCIuLi9fc2V0dGluZy5zY3NzXCI7XG5cbi8qIHRhYiBiZWdpbiAqL1xuXG4kdGV4dENvbG9yOiAjNTQ1ZTZlO1xuJGJvcmRlckNvbG9yOiAjNTQ1ZTZlO1xuLnRhYi10aXRsZSB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFiLWRlZmF1bHQge1xuICAgIC50YWItdGl0bGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXIoYm90dG9tKTtcbiAgICB9XG4gICAgLnRhYi10aXRsZS1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAwLjg0cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMC44NHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAwLjM2cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA4OTRlYztcbiAgICAgICAgICAgIGNvbG9yOiAjMDg5NGVjO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWItdGl0bGUtaXRlbSB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLnRhYi1ib3JkZXIge1xuICAgIC50YWItdGl0bGUtaXRlbSB7XG4gICAgICAgIGhlaWdodDogMC41NHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMC4yOHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIC8qbm8qL1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICAvKm5vKi9cbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICAvKm5vKi9cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbiAgICAgICAgICAgIC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgIC8qbm8qL1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXJDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSArIC50YWItdGl0bGUtaXRlbSB7XG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJGJvcmRlckNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFiLWNvbnRlbnQge31cblxuLnRhYi1jb250ZW50LXBhbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cblxuLyogdGFiIGVuZCAqL1xuIiwiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTYtMDEtMjMgMDE6MDE6MDNcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0yMyAwMTo1NDo1MVxuKiDmqKHmi5/kuIDlg4/ntKBcbiogQHVzYWdlOlxuKiBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IEBpbmNsdWRlIGJvcmRlcihib3R0b20sICNhYmNkZWYpIH1cbiovXG5cbi8vIOe6teWQkVxuJWJvcmRlci1wb3J0cmFpdCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG59XG5cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuXG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3JCb3JkZXIpIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICAgICAgIGJvcmRlcjogMDtcblxuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0= */\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* 
	 * @Author: shunjinchan
	 * @Date:   2016-01-12 00:13:05
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-21 17:16:50
	 */
	
	/**
	 * 校验规则
	 */
	var strategies = {
	    isNotEmpty: function(value, errorMsg) {
	        if (value === '') {
	            return errorMsg;
	        }
	    },
	    isChinese: function(value, errorMsg) {
	
	    },
	    /**
	     * 身份证号码验证
	     * 验证规则：15位或者8位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
	     * @param  {String}  value    待验证的值
	     * @param  {String}  errorMsg 错误信息
	     * @return {String}          错误信息
	     */
	    isIdCard: function(value, errorMsg) {
	        errorMsg = errorMsg ? errorMsg : '身份证格式错误';
	
	        if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
	            return errorMsg;
	        }
	    },
	    /**
	     * 手机号码验证
	     * 验证规则：
	     * @param  {String}  value    待验证的值
	     * @param  {String}  errorMsg 错误信息
	     * @return {String}           错误信息
	     */
	    isMobile: function(value, errorMsg) {
	        errorMsg = errorMsg ? errorMsg : '手机号码格式错误';
	
	        if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)) {
	            return errorMsg;
	        }
	    },
	    isEmail: function(value, errorMsg) {
	        errorMsg = errorMsg ? errorMsg : '邮箱地址格式错误';
	
	        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
	            return errorMsg;
	        }
	    },
	    isPostcode: function(value, errorMsg) {
	
	    },
	    minLength: function(value, length, errorMsg) {
	        if (value.length < length) {
	            return errorMsg;
	        }
	    },
	    maxLength: function(value, length, errorMsg) {
	        if (value.length > length) {
	            return errorMsg;
	        }
	    },
	};
	
	/**
	 * 表单验证
	 * @usage:
	 * validator.add(iptUsername, [{strategy: 'isNotEmpty', errorMsg: '用户名不能为空'}, {strategy: 'minLength:6', errorMsg: '用户名长度不能小于6位'}])
	 */
	function Validator() {
	    this.cache = [];
	}
	
	Validator.prototype = {
	    constructor: Validator,
	
	    conf: function(configs) {
	        this.configs = configs;
	    },
	
	    /**
	     * 添加验证
	     * @param {dom 对象} dom      需要验证的表单控件
	     * @param {Array} rules    验证的规则
	     */
	    add: function(dom, rules) {
	        var self = this;
	
	        // 循环遍历需要验证的规则
	        for (var i = 0, rule; rule = rules[i++];) {
	            (function(rule) {
	                var strategyAry = rule.strategy.split(':'); // 把 strategy 和参数分开
	                var errorMsg = rule.errorMsg; // 错误信息
	
	                self.cache.push(function() { // 把检验的步骤用空函数包装起来，并且放入 cache
	                    var strategy = strategyAry.shift();
	
	                    strategyAry.unshift(dom.value); // 需要验证的表单控件的值
	                    strategyAry.push(errorMsg);
	
	                    return strategies[strategy].apply(dom, strategyAry);
	                });
	            })(rule);
	        }
	    },
	
	    /**
	     * 开始验证
	     * @return {String} 错误信息
	     */
	    start: function() {
	        for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
	            var errorMsg = validatorFunc();
	
	            if (errorMsg) {
	                return errorMsg;
	            }
	        }
	    }
	};
	
	module.exports = Validator;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* 
	 * @Author: shunjinchan
	 * @Date:   2016-01-13 23:54:47
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-16 16:20:53
	 */
	
	
	var subscribeList = {}; // 订阅列表
	
	/**
	 * 发布－订阅
	 * @usage: 
	 * emitter.on('事件名字'); // 订阅
	 * emitter.emit('事件名字'); // 发布
	 */
	function EventEmitter() {}
	
	EventEmitter.prototype = {
	    constructor: EventEmitter,
	
	    /**
	     * 事件订阅
	     * @param  {String}   key 事件类型
	     * @param  {Function} fn  事件触发后的回调函数
	     * @return {[Boolean]}       [添加事件是否成功]
	     */
	    on: function(key, fn) {
	        // 首次添加事件创建一个数组，以用来缓存事件列表
	        if (!subscribeList[key]) {
	            subscribeList[key] = [];
	        }
	
	        // 将订阅的事件添加进对应的事件缓存列表
	        subscribeList[key].push(fn);
	
	        return true;
	    },
	
	    /**
	     * 事件发布
	     * @return {[Boolean]} [事件发布成功与否]
	     * @usage: emitter.emit('事件名字', 参数)
	     */
	    emit: function() {
	        var key = Array.prototype.shift.call(arguments); // 事件类型
	        var fns = subscribeList[key]; // 事件回调函数
	
	        // 如果没有订阅对应的事件
	        if (!fns || fns.length === 0) {
	            return false;
	        }
	
	        for (var i = 0, fn; fn = fns[i++];) {
	            fn.apply(this, arguments);
	        }
	    },
	
	    /**
	     * 删除事件订阅
	     * @param  {String}   key 事件类型
	     * @param  {Function} fn  回调函数
	     * @return {[Boolean]}       [是否移除成功]
	     */
	    remove: function(key, fn) {
	        var fns = subscribeList[key];
	
	        // 没有被订阅
	        if (!fns) {
	            return false;
	        }
	
	        if (!fn) {
	            // 如果没有传入具体的回调函数，表示需要取消 key 对应事件的所有订阅
	            fns && (fns.length = 0);
	
	            return true;
	        } else {
	            // 反向遍历订阅的回调函数列表
	            for (var j = fns.length - 1; j >= 0; j--) {
	                var _fn = fns[j];
	
	                // 删除订阅的回调函数
	                if (_fn === fn) {
	                    fn.splice(1, 1);
	
	                    return true;
	                }
	            }
	        }
	    },
	
	    /**
	     * 当前事件只允许被订阅一次，如果多次使用，以最后一次订阅的为准
	     * @param  {String}   key 事件类型
	     * @param  {Function} fn  回调函数
	     * @return {[Function]}       [订阅方法]
	     */
	    once: function(key, fn) {
	        this.remove(key);
	
	        return this.on(key, fn);
	    }
	};
	
	module.exports = EventEmitter;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	* @Author: shunjinchan
	* @Date:   2016-01-10 14:11:21
	* @Last Modified by:   shunjinchan
	* @Last Modified time: 2016-01-10 14:14:31
	*/
	
	__webpack_require__(23);
	
	var defaults = {
	    activeClass: 'active',
	    interval: 5000
	};
	
	function Swiper() {}
	
	Swiper.prototype = {
	    constructor: Swiper,
	
	    init: function(configs) {
	        var self = this;
	
	        this.control = configs.control;
	
	    },
	
	    _bind: function(configs) {
	
	    }
	};
	
	module.exports = Swiper;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./swiper.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./swiper.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-08 17:28:27\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-10 14:13:44\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-23 01:54:51\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3dpcGVyLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQ0xGOzs7Ozs7OztFQVFFIiwiZmlsZSI6ImNvbXBvbmVudHMvc3dpcGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE2LTAxLTA4IDE3OjI4OjI3XG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMTAgMTQ6MTM6NDRcbiovXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcbkBpbXBvcnQgXCIuLi9fc2V0dGluZy5zY3NzXCI7XG5cbi5zd2lwZXIge1xuICAgIFxufSIsIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE2LTAxLTIzIDAxOjAxOjAzXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjMgMDE6NTQ6NTFcbiog5qih5ouf5LiA5YOP57SgXG4qIEB1c2FnZTpcbiogQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgeyBAaW5jbHVkZSBib3JkZXIoYm90dG9tLCAjYWJjZGVmKSB9XG4qL1xuXG4vLyDnurXlkJFcbiVib3JkZXItcG9ydHJhaXQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xufVxuXG4vLyDmqKrlkJFcbiVib3JkZXItbGFuZHNjYXBlIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbn1cblxuQG1peGluIGJvcmRlcigkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJDb2xvcjogJGNvbG9yQm9yZGVyKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAgICAgICBib3JkZXI6IDA7XG5cbiAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gdG9wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgLy8gQGV4dGVuZCBib3JkZXItcG9ydHJhaXQoKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBib3R0b20ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gbGVmdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gcmlnaHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB0YiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgYm90dG9tO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGFsbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCNkZGQpKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4OyAvKm5vKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	/* 
	 * @Author: Framework7
	 * @Date:   2016-01-11 22:40:06
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-17 23:10:10
	 * base on https://github.com/nolimits4web/Framework7/blob/master/src/js/proto-device.js
	 */
	
	var device = {};
	
	(function() {
	
	    var ua = navigator.userAgent;
	    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	    var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
	    var mobile = ua.match(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i);
	
	    device.isMobile = device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;
	
	    // mobile
	    if (mobile) {
	        device.isMobile = true;
	    }
	
	    // Android
	    if (android) {
	        device.os = 'android';
	        device.osVersion = android[2];
	        device.android = true;
	        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
	    }
	    if (ipad || iphone || ipod) {
	        device.os = 'ios';
	        device.ios = true;
	        device.isSafari = true;
	    }
	    // iOS
	    if (iphone && !ipod) {
	        device.osVersion = iphone[2].replace(/_/g, '.');
	        device.iphone = true;
	    }
	    if (ipad) {
	        device.osVersion = ipad[2].replace(/_/g, '.');
	        device.ipad = true;
	    }
	    if (ipod) {
	        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	        device.iphone = true;
	    }
	    // iOS 8+ changed UA
	    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
	        if (device.osVersion.split('.')[0] === '10') {
	            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
	        }
	    }
	
	    // Webview
	    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
	
	    // Minimal UI
	    if (device.os && device.os === 'ios') {
	        var osVersionArr = device.osVersion.split('.');
	        device.minimalUi = !device.webView &&
	            (ipod || iphone) &&
	            (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
	            $('meta[name="viewport"]').length > 0 && $('meta[name="viewport"]').attr('content').indexOf('minimal-ui') >= 0;
	    }
	
	    // Check for status bar and fullscreen app mode
	    var windowWidth = $(window).width();
	    var windowHeight = $(window).height();
	    device.statusBar = false;
	    if (device.webView && (windowWidth * windowHeight === screen.width * screen.height)) {
	        device.statusBar = true;
	    } else {
	        device.statusBar = false;
	    }
	
	    // Classes
	    var classNames = [];
	
	    // Pixel Ratio
	    device.pixelRatio = window.devicePixelRatio || 1;
	    classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio));
	    if (device.pixelRatio >= 2) {
	        classNames.push('retina');
	    }
	
	    // OS classes
	    if (device.os) {
	        classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'));
	        if (device.os === 'ios') {
	            var major = parseInt(device.osVersion.split('.')[0], 10);
	            for (var i = major - 1; i >= 6; i--) {
	                classNames.push('ios-gt-' + i);
	            }
	        }
	
	    }
	    // Status bar classes
	    if (device.statusBar) {
	        classNames.push('with-statusbar-overlay');
	    } else {
	        $('html').removeClass('with-statusbar-overlay');
	    }
	
	    // Add html classes
	    if (classNames.length > 0) $('html').addClass(classNames.join(' '));
	
	})();
	
	module.exports = device;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/* 
	 * @Author: shunjinchan
	 * @Date:   2016-01-17 23:09:06
	 * @Last Modified by:   shunjinchan
	 * @Last Modified time: 2016-01-17 23:17:15
	 */
	
	var broswer = {};
	
	(function() {
	
	    var ua = navigator.userAgent;
	    var mobile = ua.match(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i);
	    var isMobile = false;
	
	    // mobile
	    if (mobile) {
	        isMobile = true;
	    }
	
	    if (isMobile) {
	        broswer.isWeixin = /MicroMessenger/i.test(ua); // 微信浏览器
	        broswer.isUCBrowser = /UC Browser|UCBrowser|UCWEB/.test(ua); // uc 浏览器
	        broswer.isQQBroswer = /QQBrowser/.test(ua); // qq 浏览器
	    }
	
	})();
	
	module.exports = broswer;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/*
	 * @Author: shunjinchan
	 * @Date:   2015-10-28 18:14:08
	 * @Last Modified by:   pigsy.chen
	 * @Last Modified time: 2016-01-21 03:00:34
	 */
	
	var defaults = {
	    interval: 1000,
	    year: false,
	    day: true,
	    hour: true,
	    min: true,
	    sec: true,
	    millisec: false,
	    tita: false,
	    separator: null,
	    onEnd: null,
	    onChange: null
	};
	
	/**
	 * 倒计时
	 * @param  {Object} configs 配置信息
	 */
	function Countdown(configs) {
	    if (configs) {
	        this.conf(configs);
	    }
	}
	
	Countdown.prototype = {
	    constructor: Countdown,
	
	    /**
	     * 配置，如果不想直接在 new 实例的时候传配置信息，可使用该方法
	     * @param  {Object} configs 配置信息
	     * @return {[Object]}         当前实例
	     */
	    conf: function(configs) {
	        this.options = $.extend({}, defaults, configs);
	
	        return this;
	    },
	
	    /**
	     * 开始倒计时，默认每隔一秒执行一次
	     * @return {[Object]}         当前实例
	     */
	    start: function() {
	        var self = this;
	
	        if (this.interval) {
	            return;
	        }
	
	        this._update();
	
	        if (this.options.interval) {
	            this.interval = setInterval(function() {
	                self._update();
	            }, this.options.interval);
	        }
	
	        return this;
	    },
	
	    /**
	     * 计算时间差
	     * @return {Object} 时间差
	     */
	    getDiffDate: function() {
	        var diff;
	
	        if (this.options.diff) {
	            if (!this.startTime) {
	                this.startTime = Date.now();
	            }
	            if (!this.endTime) {
	                this.endTime = this.options.diff * 1000 + this.startTime;
	            }
	
	            diff = (this.endTime - Date.now()) / 1000;
	        } else if (this.options.date) {
	            diff = (this.options.date.getTime() - Date.now()) / 1000;
	        } else {
	            return false;
	        }
	
	        var dateData = {
	            years: 0,
	            days: 0,
	            hours: 0,
	            mins: 0,
	            sec: 0,
	            millisec: 0,
	            tita: 0
	        };
	
	        // 结束时间在当前时间之前
	        if (diff <= 0) {
	            if (this.interval) {
	                this.stop();
	                this.options.onEnd();
	            }
	
	            this.dateData = dateData;
	
	            return dateData;
	        }
	
	        // 年
	        if (diff >= (365.25 * 86400)) {
	            dateData.years = Math.floor(diff / (365.25 * 86400));
	            diff -= dateData.years * 365.25 * 86400;
	        }
	
	        // 天
	        if (diff >= 86400) {
	            dateData.days = Math.floor(diff / 86400);
	            diff -= dateData.days * 86400;
	        }
	
	        // 小时
	        if (diff >= 3600) {
	            dateData.hours = Math.floor(diff / 3600);
	            diff -= dateData.hours * 3600;
	        }
	
	        // 分钟
	        if (diff >= 60) {
	            dateData.mins = Math.floor(diff / 60);
	            diff -= dateData.mins * 60;
	        }
	
	        // 秒
	        dateData.sec = Math.round(diff);
	
	        // 毫秒
	        dateData.millisec = diff % 1 * 1000;
	
	        // tita
	        dateData.tita = Math.round(dateData.millisec / 100);
	
	        this.dateData = dateData;
	
	        return dateData;
	    },
	
	    /**
	     * 停止倒计时
	     * @return {Object} 该实例对象
	     */
	    stop: function() {
	        if (this.interval) {
	            clearInterval(this.interval);
	            this.interval = false;
	        }
	        return this;
	    },
	
	    /**
	     * 渲染，只有当存在 container 的时候才执行
	     * @return {[type]} [description]
	     */
	    _render: function() {
	        if (this.options.container && this.options.container.length !== 0) {
	            this.$box = this.options.container;
	        } else {
	            return false;
	        }
	
	        var countdownYear = '';
	        var countdownDay = '';
	        var countdownHour = '';
	        var countdownMin = '';
	        var countdownSec = '';
	        var countdownMillisec = '';
	        var countdownTita = '';
	        var separator = '';
	
	        if (this.options.year) {
	            separator = this.options.separator ? this.options.separator : '年';
	
	            countdownYear = '<span class="countdown-year">' +
	                this._addleadingZero(this.dateData.years) + '</span>' +
	                '<span class="countdown-text">' + separator +'</span>';
	        }
	
	        if (this.options.day) {
	            separator = this.options.separator ? this.options.separator : '天';
	
	            countdownDay = '<span class="countdown-day">' +
	                this._addleadingZero(this.dateData.days) + '</span>' +
	                '<span class="countdown-text">' + separator + '</span>';
	        }
	
	        if (this.options.hour) {
	            separator = this.options.separator ? this.options.separator : '时';
	
	            countdownHour = '<span class="countdown-hour">' +
	                this._addleadingZero(this.dateData.hours) + '</span>' +
	                '<span class="countdown-text">' + separator + '</span>';
	        }
	
	        if (this.options.min) {
	            separator = this.options.separator ? this.options.separator : '分';
	
	            countdownMin = '<span class="countdown-hour">' +
	                this._addleadingZero(this.dateData.mins) + '</span>' +
	                '<span class="countdown-text">' + separator + '</span>';
	        }
	
	        if (this.options.sec) {
	            separator = this.options.separator ? this.options.separator : '秒';
	
	            countdownSec = '<span class="countdown-sec">' +
	                this._addleadingZero(this.dateData.sec) + '</span>' +
	                '<span class="countdown-text">' + separator + '</span>';
	        }
	
	        if (this.options.millisec) {
	            countdownMillisec = '<span class="countdown-millisec">' +
	                this.dateData.millisec + '</span>';
	        }
	
	        if (this.options.tita) {
	            countdownTita = '<span class="countdown-tita">' +
	                this.dateData.tita + '</span>';
	        }
	
	        this.$box.html(countdownYear + countdownDay + countdownHour + countdownMin + countdownSec + countdownTita);
	    },
	
	    /**
	     * 更新
	     */
	    _update: function() {
	        this.getDiffDate() && this._render();
	        this.options.onchange && this.options.onchange();
	    },
	
	    _addleadingZero: function(num) {
	        if (num >= 10) return num;
	
	        return '0' + String(num);
	    }
	};
	
	module.exports = Countdown;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map