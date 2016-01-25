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
	 * @Last Modified by:   pigsy.chen
	 * @Last Modified time: 2016-01-24 17:16:07
	 */
	
	var Zepto = __webpack_require__(1);
	
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
	
	
	function openPopup() {
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
	}
	
	function openDialog() {
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
	}
	
	function openLoader() {
	    $(document).on('click', '.open-loader2', function(e) {
	        e.preventDefault();
	
	        loader.open({
	            title: 'hhjhjjj',
	            extraClass: 'nimabi',
	            timer: 2000
	        });
	    });
	}
	
	function openToast() {
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
	}
	
	
	function init() {
	    openPopup();
	    openDialog();
	    openLoader();
	    openToast();
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
/* 2 */,
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
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2015-12-30 23:40:12\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 22:51:39\n*/\n.popup-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 00:34:39\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* popup begin */\n.popup {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 1040;\n  box-sizing: border-box;\n  display: none;\n  transition-property: transform;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #f3f4f5; }\n\n.popup.from-top {\n  /* 顶部滑入动画 */\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n  .popup.from-top.transition-in, .popup.from-top.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s;\n    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1); }\n  .popup.from-top.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-top.transition-out {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n\n.popup.from-bottom {\n  /* 底部滑入动画 */\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  .popup.from-bottom.transition-in, .popup.from-bottom.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s; }\n  .popup.from-bottom.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-bottom.transition-out {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n\n.popup.from-left {\n  /* 从左向右滑入动画 */\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n  .popup.from-left.transition-in, .popup.from-left.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s; }\n  .popup.from-left.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-left.transition-out {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n\n.popup.from-right {\n  /* 从左向右滑入动画 */\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0); }\n  .popup.from-right.transition-in, .popup.from-right.transition-out {\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transition-delay: 0s;\n    transition-delay: 0s; }\n  .popup.from-right.transition-in {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .popup.from-right.transition-out {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n\n.popup-body {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  padding: 0.2rem; }\n\n.popup-header {\n  height: 0.88rem;\n  line-height: 0.88rem;\n  position: relative;\n  background-color: #fbfbfa; }\n  .popup-header.top-bar {\n    position: absolute; }\n    .popup-header.top-bar ~ .popup-body {\n      top: 0.88rem; }\n  .popup-header .close {\n    position: absolute;\n    height: 0.88rem;\n    width: 0.88rem;\n    line-height: 0.88rem;\n    right: 0.1rem;\n    top: 0;\n    font-family: \"iconfont\";\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -webkit-text-stroke-width: 0.2px;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 0.48rem;\n    text-align: center;\n    color: #585c64; }\n  .popup-header .close::before {\n    content: \"\\E604\"; }\n  .popup-header .close:active {\n    color: #ccc; }\n\n.popup-title {\n  line-height: 0.48rem;\n  padding: 0.2rem 1.0rem 0.2rem 0.3rem; }\n\n.popup-footer {\n  height: 0.88rem;\n  line-height: 0.88rem;\n  text-align: center;\n  background-color: #fff; }\n  .popup-footer.bottom-bar {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%; }\n    .popup-footer.bottom-bar ~ .popup-body {\n      bottom: 0.88rem; }\n\n/* popup end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9wdXAuc2NzcyIsImV4dC9fbWl4aW4uc2NzcyIsImV4dC9fYm9yZGVyLW1peGluLnNjc3MiLCJfc2V0dGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQThKRixZQUFZLENDckZGO0VBTkYsUUFBUSxFQUFFLE1BQU87RUFDakIsV0FBVyxFQUFFLE1BQU87RUFDcEIsYUFBYSxFQUFFLFFBQVMsR0FNL0I7O0FDaEZEOzs7Ozs7OztFQVFFO0FGTUYsaUJBQWlCO0FBRWpCLE1BQU0sQ0FBQztFQUNILFFBQVEsRUFBRSxRQUFTO0VBQ25CLElBQUksRUFBRSxDQUFFO0VBQ1IsS0FBSyxFQUFFLENBQUU7RUFDVCxHQUFHLEVBQUUsQ0FBRTtFQUNQLE1BQU0sRUFBRSxDQUFFO0VBQ1YsS0FBSyxFQUFFLElBQUs7RUFDWixPQUFPLEVHcUJnQixJQUFJO0VIcEIzQixVQUFVLEVBQUUsVUFBVztFQUN2QixPQUFPLEVBQUUsSUFBSztFQUNkLG1CQUFtQixFQUFFLFNBQVU7RUFDL0IsUUFBUSxFQUFFLElBQUs7RUFDZiwwQkFBMEIsRUFBRSxLQUFNO0VBQ2xDLGdCQUFnQixFR0Z1QixPQUFPLEdIR2pEOztBQUVELE1BQU0sU0FBUyxDQUFDO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFFLHdCQUFXO0VBQzlCLFNBQVMsRUFBRSx3QkFBVyxHQWtCekI7RUFyQkQsTUFBTSxTQUFTLEFBSVYsY0FBYyxFQUpuQixNQUFNLFNBQVMsQUFLVixlQUFlLENBQUM7SUFDYiwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0Isd0JBQXdCLEVBQUUsRUFBRztJQUM3QixnQkFBZ0IsRUFBRSxFQUFHO0lBQ3JCLGtDQUFrQyxFQUFFLHFDQUFZO0lBQ2hELDBCQUEwQixFQUFFLHFDQUFZLEdBQzNDO0VBWkwsTUFBTSxTQUFTLEFBYVYsY0FBYyxDQUFDO0lBQ1osaUJBQWlCLEVBQUUsb0JBQVc7SUFDOUIsU0FBUyxFQUFFLG9CQUFXLEdBQ3pCO0VBaEJMLE1BQU0sU0FBUyxBQWlCVixlQUFlLENBQUM7SUFDYixpQkFBaUIsRUFBRSx3QkFBVztJQUM5QixTQUFTLEVBQUUsd0JBQVcsR0FDekI7O0FBR0wsTUFBTSxZQUFZLENBQUM7RUFDZix3QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUUsdUJBQVc7RUFDOUIsU0FBUyxFQUFFLHVCQUFXLEdBZ0J6QjtFQW5CRCxNQUFNLFlBQVksQUFJYixjQUFjLEVBSm5CLE1BQU0sWUFBWSxBQUtiLGVBQWUsQ0FBQztJQUNiLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQix3QkFBd0IsRUFBRSxFQUFHO0lBQzdCLGdCQUFnQixFQUFFLEVBQUcsR0FDeEI7RUFWTCxNQUFNLFlBQVksQUFXYixjQUFjLENBQUM7SUFDWixpQkFBaUIsRUFBRSxvQkFBVztJQUM5QixTQUFTLEVBQUUsb0JBQVcsR0FDekI7RUFkTCxNQUFNLFlBQVksQUFlYixlQUFlLENBQUM7SUFDYixpQkFBaUIsRUFBRSx1QkFBVztJQUM5QixTQUFTLEVBQUUsdUJBQVcsR0FDekI7O0FBR0wsTUFBTSxVQUFVLENBQUM7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCLEVBQUUsd0JBQVc7RUFDOUIsU0FBUyxFQUFFLHdCQUFXLEdBZ0J6QjtFQW5CRCxNQUFNLFVBQVUsQUFJWCxjQUFjLEVBSm5CLE1BQU0sVUFBVSxBQUtYLGVBQWUsQ0FBQztJQUNiLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQix3QkFBd0IsRUFBRSxFQUFHO0lBQzdCLGdCQUFnQixFQUFFLEVBQUcsR0FDeEI7RUFWTCxNQUFNLFVBQVUsQUFXWCxjQUFjLENBQUM7SUFDWixpQkFBaUIsRUFBRSxvQkFBVztJQUM5QixTQUFTLEVBQUUsb0JBQVcsR0FDekI7RUFkTCxNQUFNLFVBQVUsQUFlWCxlQUFlLENBQUM7SUFDYixpQkFBaUIsRUFBRSx3QkFBVztJQUM5QixTQUFTLEVBQUUsd0JBQVcsR0FDekI7O0FBR0wsTUFBTSxXQUFXLENBQUM7RUFDZCw4QkFBOEI7RUFDOUIsaUJBQWlCLEVBQUUsdUJBQVc7RUFDOUIsU0FBUyxFQUFFLHVCQUFXLEdBZ0J6QjtFQW5CRCxNQUFNLFdBQVcsQUFJWixjQUFjLEVBSm5CLE1BQU0sV0FBVyxBQUtaLGVBQWUsQ0FBQztJQUNiLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQix3QkFBd0IsRUFBRSxFQUFHO0lBQzdCLGdCQUFnQixFQUFFLEVBQUcsR0FDeEI7RUFWTCxNQUFNLFdBQVcsQUFXWixjQUFjLENBQUM7SUFDWixpQkFBaUIsRUFBRSxvQkFBVztJQUM5QixTQUFTLEVBQUUsb0JBQVcsR0FDekI7RUFkTCxNQUFNLFdBQVcsQUFlWixlQUFlLENBQUM7SUFDYixpQkFBaUIsRUFBRSx1QkFBVztJQUM5QixTQUFTLEVBQUUsdUJBQVcsR0FDekI7O0FBR0wsV0FBVyxDQUFDO0VBQ1IsUUFBUSxFQUFFLFFBQVM7RUFDbkIsR0FBRyxFQUFFLENBQUU7RUFDUCxLQUFLLEVBQUUsQ0FBRTtFQUNULE1BQU0sRUFBRSxDQUFFO0VBQ1YsSUFBSSxFQUFFLENBQUU7RUFDUixRQUFRLEVBQUUsSUFBSztFQUNmLE9BQU8sRUFBRSxNQUFPLEdBQ25COztBQUVELGFBQWEsQ0FBQztFQUNWLE1BQU0sRUF2SHlCLE9BQU87RUF3SHRDLFdBQVcsRUF4SG9CLE9BQU87RUF5SHRDLFFBQVEsRUFBRSxRQUFTO0VBQ25CLGdCQUFnQixFQUFFLE9BQVEsR0E2QjdCO0VBakNELGFBQWEsQUFLUixRQUFRLENBQUM7SUFDTixRQUFRLEVBQUUsUUFBUyxHQUl0QjtJQVZMLGFBQWEsQUFLUixRQUFRLEdBRUQsV0FBVyxDQUFDO01BQ1osR0FBRyxFQTlIb0IsT0FBTyxHQStIakM7RUFUVCxhQUFhLENBV1QsTUFBTSxDQUFDO0lBQ0gsUUFBUSxFQUFFLFFBQVM7SUFDbkIsTUFBTSxFQW5JcUIsT0FBTztJQW9JbEMsS0FBSyxFQXBJc0IsT0FBTztJQXFJbEMsV0FBVyxFQXJJZ0IsT0FBTztJQXNJbEMsS0FBSyxFQUFFLE1BQU87SUFDZCxHQUFHLEVBQUUsQ0FBRTtJQUNQLFdBQVcsRUFBRSxVQUFXO0lBQ3hCLFVBQVUsRUFBRSxNQUFPO0lBQ25CLHNCQUFzQixFQUFFLFdBQVk7SUFDcEMseUJBQXlCLEVBQUUsS0FBTTtJQUNqQyx1QkFBdUIsRUFBRSxTQUFVO0lBQ25DLFNBQVMsRUFBRSxPQUFRO0lBQ25CLFVBQVUsRUFBRSxNQUFPO0lBQ25CLEtBQUssRUFBRSxPQUFRLEdBQ2xCO0VBMUJMLGFBQWEsQ0EyQlQsTUFBTSxRQUFRLENBQUM7SUFDWCxPQUFPLEVBQUUsT0FBUSxHQUNwQjtFQTdCTCxhQUFhLENBOEJULE1BQU0sT0FBTyxDQUFDO0lBQ1YsS0FBSyxFQUFFLElBQUssR0FDZjs7QUFHTCxZQUFZLENBQUM7RUFDVCxXQUFXLEVBQUUsT0FBUTtFQUNyQixPQUFPLEVBQUUsMkJBQTRCLEdBRXhDOztBQUVELGFBQWEsQ0FBQztFQUNWLE1BQU0sRUEvSnlCLE9BQU87RUFnS3RDLFdBQVcsRUFoS29CLE9BQU87RUFpS3RDLFVBQVUsRUFBRSxNQUFPO0VBQ25CLGdCQUFnQixFQUFFLElBQUssR0FXMUI7RUFmRCxhQUFhLEFBS1IsV0FBVyxDQUFDO0lBQ1QsUUFBUSxFQUFFLFFBQVM7SUFDbkIsTUFBTSxFQUFFLENBQUU7SUFDVixJQUFJLEVBQUUsQ0FBRTtJQUNSLEtBQUssRUFBRSxDQUFFO0lBQ1QsS0FBSyxFQUFFLElBQUssR0FJZjtJQWRMLGFBQWEsQUFLUixXQUFXLEdBTU4sV0FBVyxDQUFDO01BQ1YsTUFBTSxFQTFLaUIsT0FBTyxHQTJLakM7O0FBS1QsZUFBZSIsImZpbGUiOiJjb21wb25lbnRzL3BvcHVwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE1LTEyLTMwIDIzOjQwOjEyXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjUgMjI6NTE6MzlcbiovXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcbkBpbXBvcnQgXCIuLi9fc2V0dGluZy5zY3NzXCI7XG5cbiRwb3B1cC1oZWFkZXItaGVpZ2h0OiAgICAgICAgICAgICAgMC44OHJlbTtcbiRwb3B1cC1mb290ZXItaGVpZ2h0OiAgICAgICAgICAgICAgMC44OHJlbTtcbiRwb3B1cC1iZy1jb2xvcjogICAgICAgICAgICAgICAgICAgJGNvbG9yLWJnO1xuXG4vKiBwb3B1cCBiZWdpbiAqL1xuXG4ucG9wdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogJHppbmRleC1wb3B1cDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9wdXAtYmctY29sb3I7XG59XG5cbi5wb3B1cC5mcm9tLXRvcCB7XG4gICAgLyog6aG26YOo5ruR5YWl5Yqo55S7ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAmLnRyYW5zaXRpb24taW4sXG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4xNzUsIC44ODUsIC4zMiwgMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMTc1LCAuODg1LCAuMzIsIDEuMSk7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1pbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbn1cblxuLnBvcHVwLmZyb20tYm90dG9tIHtcbiAgICAvKiDlupXpg6jmu5HlhaXliqjnlLsgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICAmLnRyYW5zaXRpb24taW4sXG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLWluIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIH1cbn1cblxuLnBvcHVwLmZyb20tbGVmdCB7XG4gICAgLyog5LuO5bem5ZCR5Y+z5ruR5YWl5Yqo55S7ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAmLnRyYW5zaXRpb24taW4sXG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLWluIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgfVxufVxuXG4ucG9wdXAuZnJvbS1yaWdodCB7XG4gICAgLyog5LuO5bem5ZCR5Y+z5ruR5YWl5Yqo55S7ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgJi50cmFuc2l0aW9uLWluLFxuICAgICYudHJhbnNpdGlvbi1vdXQge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuICAgICYudHJhbnNpdGlvbi1pbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB9XG59XG5cbi5wb3B1cC1ib2R5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAkcG9wdXAtaGVhZGVyLWhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJHBvcHVwLWhlYWRlci1oZWlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmE7XG4gICAgJi50b3AtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAmIH4gLnBvcHVwLWJvZHkge1xuICAgICAgICAgICAgdG9wOiAkcG9wdXAtaGVhZGVyLWhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogJHBvcHVwLWhlYWRlci1oZWlnaHQ7XG4gICAgICAgIHdpZHRoOiAkcG9wdXAtaGVhZGVyLWhlaWdodDtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRwb3B1cC1oZWFkZXItaGVpZ2h0O1xuICAgICAgICByaWdodDogMC4xcmVtO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImljb25mb250XCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMnB4O1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICBmb250LXNpemU6IDAuNDhyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM1ODVjNjQ7XG4gICAgfVxuICAgIC5jbG9zZTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXGU2MDRcIjtcbiAgICB9XG4gICAgLmNsb3NlOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjY2NjO1xuICAgIH1cbn1cblxuLnBvcHVwLXRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMC40OHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4wcmVtIDAuMnJlbSAwLjNyZW07XG4gICAgQGluY2x1ZGUgZWxsaXBzaXMoKTtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gICAgaGVpZ2h0OiAkcG9wdXAtZm9vdGVyLWhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJHBvcHVwLWZvb3Rlci1oZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgJi5ib3R0b20tYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfiAucG9wdXAtYm9keSB7XG4gICAgICAgICAgICBib3R0b206ICRwb3B1cC1mb290ZXItaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qIHBvcHVwIGVuZCAqL1xuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBcbi8vIG1peGluIHNjc3Ncbi8vIOWMheaLrOW4uOeUqOeahG1peGluLCAlLCBAZnVuY3Rpb24g5Y+K6L6F5Yqp55qEYnRu5ZKM6IOM5pmv5Zu+54mHaWNvblxuLy8gbWl4aW7vvIzpgJrov4dAaW5jbHVkZeiwg+eUqO+8jOagt+W8j+mAmui/h+aLt+i0neeahOaWueW8j+S9v+eUqO+8jOWwpOWFtumAgueUqOS6juS8oOmAkuWPguaVsFxuLy8gJe+8jOmAmui/h0BleHRlbmTosIPnlKjvvIzmoLflvI/pgJrov4fnu4TlkIjnlLPmmI7nmoTmlrnlvI/kvb/nlKjvvIzpgILnlKjkuo7kuI3kvKDlj4LmlbDnmoTku6PnoIHniYfmrrUgIFxuLy8gQGZ1bmN0aW9u77yM6L+U5Zue5LiA5Liq5YC877yM55So5LqO6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIG1peGluICYgJVxuLy8g5pei5a6a5LmJ5LqGbWl4aW7kuZ/lrprkuYnkuoYl77yM5qC55o2u6ZyA5rGC5L2/55SoQGluY2x1ZGXmiJZAZXh0ZW5k6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcbkBtaXhpbiBjZW50ZXItYmxvY2soJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlY2VudGVyLWJsb2NrO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufVxuXG4lY2VudGVyLWJsb2NrIHtcbiAgICBAaW5jbHVkZSBjZW50ZXItYmxvY2soZmFsc2UpO1xufVxuXG4vLyBjbGVhcmZpeFxuQG1peGluIGNsZWFyZml4KCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWNsZWFyZml4O1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4lY2xlYXJmaXgge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4KGZhbHNlKTtcbn1cblxuLy8gSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbnJlYWRlcnNcbi8vIOWPqumakOiXj+S6juinhuinie+8jOWxj+W5lea1j+iniOWZqOWPr+S7pemYheivu1xuQG1peGluIGhpZGRlbi1jbGlwKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWhpZGRlbi1jbGlwO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIH1cbn1cblxuJWhpZGRlbi1jbGlwIHtcbiAgICBAaW5jbHVkZSBoaWRkZW4tY2xpcChmYWxzZSk7XG59XG5cbi8vIGVsbGlwc2lzXG5AbWl4aW4gZWxsaXBzaXMoJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlZWxsaXBzaXM7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxufVxuXG4lZWxsaXBzaXMge1xuICAgIEBpbmNsdWRlIGVsbGlwc2lzKGZhbHNlKTtcbn1cblxuLy8g5Y+q5pyJd2Via2l05pSv5oyB5aSa6KGM55yB55Wl5Y+3XG5AbWl4aW4gZWxsaXBzaXMtbGluZSgkbGluZTogMikge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyB3b3JkLWJyZWFrXG4vLyDnlKjkuo7pk77mjqXlnLDlnYDlvLrliLbmjaLooYxcbkBtaXhpbiB3b3JkLWJyZWFrKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJXdvcmQtYnJlYWs7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxufVxuXG4ld29yZC1icmVhayB7XG4gICAgQGluY2x1ZGUgd29yZC1icmVhayhmYWxzZSk7XG59XG5cbi8vIGRpc2FibGVkXG4vLyDnpoHnlKjmoLflvI/vvIzliqAhaW1wb3J0YW50XG5AbWl4aW4gZGlzYWJsZWQoKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuJWRpc2FibGVkIHtcbiAgICBAaW5jbHVkZSBkaXNhYmxlZDtcbn1cblxuLy8gZml4ZWQgdG9wICYgYm90dG9tXG5AbWl4aW4gZml4ZWQoJHBvczogMCkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIEBpZiAkcG9zID09IGJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICB0b3A6ICRwb3M7XG4gICAgfVxufVxuXG4lZml4ZWQtdG9wIHtcbiAgICBAaW5jbHVkZSBmaXhlZDtcbn1cblxuJWZpeGVkLWJvdHRvbSB7XG4gICAgQGluY2x1ZGUgZml4ZWQoJHBvczogYm90dG9tKTtcbn1cblxuLy8ganVzdGlmeVxuQG1peGluIGp1c3RpZnkoJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlanVzdGlmeTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufVxuXG4lanVzdGlmeSB7XG4gICAgQGluY2x1ZGUganVzdGlmeShmYWxzZSk7XG59XG5cbi8vIG1peGluXG4vLyDlj6rlrprkuYnkuoZtaXhpbu+8jOaJgOS7peWPquiDvemAmui/h0BpbmNsdWRl5p2l6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRhYmxlIOetieWIhlxuQG1peGluIGVxdWFsLXRhYmxlKCRjaGlsZHJlbjogbGkpIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICRjaGlsZHJlbkVsZTogbGkgZGl2IHAgYSBzcGFuIHN0cm9uZztcbiAgICBAaWYgaW5kZXgoJGNoaWxkcmVuRWxlLCAkY2hpbGRyZW4pIHtcbiAgICAgICAgI3skY2hpbGRyZW59IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICAuI3skY2hpbGRyZW59IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZsZXgg562J5YiGXG5AbWl4aW4gZXF1YWwtZmxleCgkY2hpbGRyZW46IGxpKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkY2hpbGRyZW5FbGU6IGxpIGRpdiBwIGEgc3BhbiBzdHJvbmc7XG4gICAgQGlmIGluZGV4KCRjaGlsZHJlbkVsZSwgJGNoaWxkcmVuKSB7XG4gICAgICAgICN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgLiN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBmbGV4IGNlbnRlclxuQG1peGluIGNlbnRlci1mbGV4KCRkaXJlY3Rpb246IGJvdGgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIEBpZiAkZGlyZWN0aW9uID09IGJvdGgge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB4IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vLyB0cmFuc2xhdGUgY2VudGVyXG5AbWl4aW4gY2VudGVyLXRyYW5zbGF0ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIEBpZiAkZGlyZWN0aW9uID09IGJvdGgge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geCB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHkge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xuICAgIH1cbn1cblxuLy8gdHJpYW5nbGUg5LiJ6KeS566t5aS0XG4ldHJpYW5nbGUtYmFzaWMge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiB0cmlhbmdsZSgkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJXaWR0aDogNnB4LCAkYm9yZGVyQ29sb3I6ICNkZWRlZGUpIHtcbiAgICBAZXh0ZW5kICV0cmlhbmdsZS1iYXNpYztcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItbGVmdDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItdG9wOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLy8gYXJyb3cg5pa55ZCR566t5aS0XG5AbWl4aW4gYXJyb3coJHNpemU6IDEwcHgsICRkaXJlY3Rpb246IHJpZ2h0LCAkYm9yZGVyV2lkdGg6IDJweCwgJGJvcmRlckNvbG9yOiAjZGVkZWRlKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgQGlmICRkaXJlY3Rpb24gPT0gdG9wIHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICAgIEBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICBib3JkZXItbGVmdDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbn1cblxuLy8gcmVtXG5AbWl4aW4gcmVtKCRweDogMS40LCAkcHJvcGVydHk6IGZvbnQtc2l6ZSkge1xuICAgICN7JHByb3BlcnR5fTogJHB4ICogMTBweDtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHB4fXJlbTtcbn1cblxuLy8gaHR0cDovL3d3dy5jc3MzZmlsZXMuY29tL2ZvbnQvXG4vLyAxIFRoZSBlb3QgZm9udGZpbGUuIENhbiBiZSBvbWl0dGVkIGlmIHlvdSBkb25gdCB3YW50IHRvIHN1cHBvcnQgSW50ZXJuZXQgRXhwbG9yZXIgcHJpb3IgdG8gdmVyc2lvbiA5IChpbmNsdWRpbmcgc2VtaWNvbG9uKS5cbi8vIDIgQ2FuIGFsc28gYmUgb21pdHRlZCBmb3IgSW50ZXJuZXQgRXhwbG9yZXIgPCA5LiA/aWVmaXggcHJldmVudHMgSUU2IGZyb20gaW50ZXJwcmV0aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nLiBJZiB0aGUgd2hvbGUgSUUgZmFtaWx5ICg2IHRvIDkpIHNob3VsZCBiZSBzdXBwb3J0ZWQsIDEgYW5kIDIgYXJlIG5lZWRlZC5cbi8vIDMgQ2FuIGJlIG9taXR0ZWQgaWYgaVBhZCB2ZXJzaW9ucyBwcmlvciB0byBpT1MgNC4yIHNob3VsZG7igJl0IGJlIHN1cHBvcnRlZC4gXG4vLyA0IFRoZSB0dGYgZm9udGZpbGUuIE5lY2Vzc2FyeSB0byBzdXBwb3J0IChNb2JpbGUpIFNhZmFyaSBhbmQgT3BlcmEuIFxuLy8gNSBUaGUgd29mZiBmb250ZmlsZSBmb3IgYWxsIG1vZGVybiBicm93c2VycyAoYmVzdCBjaG9pY2UpLlxuQG1peGluIGZvbnQtZmFjZSgkZm9udEZhY2VGYW1pbHksICRmb250RmFjZVBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwpIHtcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250RmFjZUZhbWlseTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG4gICAgICAgIGZvbnQtc3R5bGU6ICRzdHlsZTtcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRmb250RmFjZVBhdGh9LmVvdFwiKTsgLy8gMVxuICAgICAgICBzcmM6IHVybChcIiN7JGZvbnRGYWNlUGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIiN7JGZvbnRGYWNlUGF0aH0uc3ZnIyN7JGZvbnRGYWNlRmFtaWx5fVwiKSBmb3JtYXQoXCJzdmdcIiksIHVybChcIiN7JGZvbnRGYWNlUGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRmb250RmFjZVBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG59XG5cbi8vICVcbi8vIOWPquWumuS5ieS6hiXvvIzmiYDku6Xlj6rog73pgJrov4dAZXh0ZW5k5p2l6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyDnrYnliIbliJdcbi8vIOWPr+S7peS9v+eUqGVxdWFsLWZsZXjmiJZlcXVhbC10YWJsZe+8jOm7mOiupOWtkOWFg+e0oOS4umxpXG4lZXF1YWwtY29sIHtcbiAgICBAaW5jbHVkZSBlcXVhbC10YWJsZTtcbn1cblxuLy8gaXRlbSBhcnJvdywg5Y+z5L6n566t5aS06Lez6L2s5oyH5ZCRXG4laXRlbS1hcnJvdyB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBAaW5jbHVkZSBhcnJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuXG4vLyDkuIvpnaLnmoTlh6DkuKol77yM55Sx5LqO54mI5pys5oiW5YmN57yA77yM5omA5Lul6K6+6K6h5oiQJVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZmxleFxuJWRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLy8gYWxsLXRyYW5zaXRpb25cbiV0cmFuc2l0aW9uLWFsbCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIHRyYW5zbGF0ZTNkXG4ldHJhbnNsYXRlM2Qge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8vIHBhZ2Ugc3dpdGNoXG4lcGFnZS1vdXQge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSAwLjFzO1xufVxuXG4lcGFnZS1pbiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpO1xufVxuXG4vLyBidG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYnRuLWJhc2ljXG4vLyDmjInpkq7ln7rmnKzmoLflvI/vvIzogZTlkIjnlLPmmI5cbiVidG4tYmFzaWMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iLCIvKiBcbiogQEF1dGhvcjogc2h1bmppbmNoYW5cbiogQERhdGU6ICAgMjAxNi0wMS0yMyAwMTowMTowM1xuKiBATGFzdCBNb2RpZmllZCBieTogICBzaHVuamluY2hhblxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTAxLTI1IDAwOjM0OjM5XG4qIOaooeaLn+S4gOWDj+e0oFxuKiBAdXNhZ2U6XG4qIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgQGluY2x1ZGUgYm9yZGVyKGJvdHRvbSwgI2FiY2RlZikgfVxuKi9cblxuLy8g57q15ZCRXG4lYm9yZGVyLXBvcnRyYWl0IHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbn1cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuQG1peGluIGJvcmRlcigkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJDb2xvcjogJGNvbG9yLWJvcmRlcikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGltcG9ydCBcImV4dC9fbWl4aW4uc2Nzc1wiO1xuQGltcG9ydCBcImV4dC9fYm9yZGVyLW1peGluLnNjc3NcIjtcblxuLy8gX3NldHRpbmcuc2NzcyDmlofku7bph4znmoTlj5jph4/kuI3lhYHorrjpmo/mhI/kv67mlLlcblxuLy8gZm9udOebuOWFs1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiRmb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAwLjI4cmVtICFkZWZhdWx0OyBcbiRmb250LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFNUSGVpVGksIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuXG5cbi8vIOS4u+iJslxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGNvbG9yLXByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICMxYWJjOWMgIWRlZmF1bHQ7XG4kY29sb3ItZGFuZ2VyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Y2MzgzYSAhZGVmYXVsdDtcbiRjb2xvci13YXJuaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjYwICFkZWZhdWx0O1xuJGNvbG9yLXN1Y2Nlc3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICM0Y2Q5NjQgIWRlZmF1bHQ7XG5cbiRjb2xvci1wcmltYXJ5LWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICAjMTdBOThDICFkZWZhdWx0O1xuJGNvbG9yLWRhbmdlci1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3ItZGFuZ2VyLCAxMCUpICFkZWZhdWx0O1xuJGNvbG9yLXdhcm5pbmctYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3Itd2FybmluZywgMTAlKSAhZGVmYXVsdDtcbiRjb2xvci1zdWNjZXNzLWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGNvbG9yLXN1Y2Nlc3MsIDEwJSkgIWRlZmF1bHQ7XG5cbiRjb2xvci1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZGJkYmRiICFkZWZhdWx0OyAgLy8g5YiG5Ymy57q/55qE6aKc6ImyXG4kY29sb3ItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2YzZjRmNSAhZGVmYXVsdDsgLy8g6IOM5pmv6ImyXG4kY29sb3ItdGV4dDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzNkNDE0NSAhZGVmYXVsdDsgLy8g5paH5qGI6ImyXG4kY29sb3ItdGV4dC1zZWNvbmRhcnk6ICAgICAgICAgICAgICAgICAgICAgIzVmNjQ2ZSAhZGVmYXVsdDsgLy8g5qyh57qn5paH5qGIXG4kY29sb3ItdGV4dC1ncmF5OiAgICAgICAgICAgICAgICAgICAgICAgICAgIzk5OSAhZGVmYXVsdDsgLy8g54Gw6Imy5paH5qGIXG4kY29sb3ItdGV4dC1ncmF5LWxpZ2h0OiAgICAgICAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDsgLy8g5pu054Gw6Imy5paH5qGIXG5cblxuLy8g6ZO+5o6l6ImyXG4kY29sb3ItbGluazogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLXRleHQgIWRlZmF1bHQ7IC8vIOmTvuaOpeiJsuacieWPr+iDveS4jeWQjOS6juS4u+iJslxuJGNvbG9yLWxpbmstYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3ItdGV4dCwgMTAlKSAhZGVmYXVsdDsgLy8g6ZO+5o6l6Imy5pyJ5Y+v6IO95LiN5ZCM5LqO5Li76ImyXG5cblxuLy8gei1pbmRleFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LW5hdmJhci1maXhlZDogICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1iYWNrZHJvcDogICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wdXA6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtZGlhbG9nOiAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LWxvYWRlcjogICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuJHppbmRleC10b2FzdDogICAgICAgICAgICAgMTA5MCAhZGVmYXVsdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ== */\n", ""]);
	
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
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n* @Author: shunjinchan\n* @Date:   2015-12-27 17:37:48\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 22:51:45\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 00:34:39\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* dialog begin */\n.dialog {\n  width: 5.4rem;\n  background-color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  border-radius: 0.12rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -2.7rem;\n  z-index: 1070; }\n  .dialog.vertical-button .dialog-footer {\n    height: auto;\n    display: block; }\n  .dialog.vertical-button .dialog-button {\n    display: block;\n    width: 100%; }\n    @media screen and (-webkit-min-device-pixel-ratio: 2) {\n      .dialog.vertical-button .dialog-button {\n        border: 0;\n        background-position: left top;\n        background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #dbdbdb), to(#dbdbdb));\n        background-repeat: repeat-x;\n        -webkit-background-size: 100% 1px;\n        /*no*/ } }\n\n.dialog.scale {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .dialog.scale.transition-in {\n    opacity: 1;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1); }\n  .dialog.scale.transition-out {\n    opacity: 0;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815); }\n\n.dialog-container {\n  padding: 0.4rem 0; }\n\n.dialog-title {\n  padding: 0 0.3rem;\n  font-size: 0.36rem;\n  line-height: 0.44rem;\n  font-weight: normal; }\n\n.dialog-body {\n  font-size: 0.28rem;\n  line-height: 0.32rem;\n  padding: 0 0.3rem; }\n\n.dialog-footer {\n  height: 0.88rem;\n  position: relative;\n  display: flex; }\n  .dialog-footer a {\n    flex: 1; }\n  @media screen and (-webkit-min-device-pixel-ratio: 2) {\n    .dialog-footer {\n      border: 0;\n      background-position: left top;\n      background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #dbdbdb), to(#dbdbdb));\n      background-repeat: repeat-x;\n      -webkit-background-size: 100% 1px;\n      /*no*/ } }\n  .dialog-footer .dialog-button {\n    height: 0.88rem;\n    line-height: 0.88rem;\n    font-size: 0.34rem;\n    position: relative;\n    color: #007aff; }\n    @media screen and (-webkit-min-device-pixel-ratio: 2) {\n      .dialog-footer .dialog-button {\n        border: 0;\n        background-position: left top;\n        background-image: -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, #dbdbdb), to(#dbdbdb));\n        background-repeat: repeat-y;\n        -webkit-background-size: 1px 100%;\n        /*no*/ } }\n    .dialog-footer .dialog-button.bold {\n      font-weight: 500; }\n\n.dialog-input {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  height: 0.6rem;\n  background: #fff;\n  margin: 0;\n  margin-top: 0.3rem;\n  padding: 0 0.1rem;\n  border: 1px solid #a0a0a0;\n  border-radius: 0.1rem;\n  width: 100%;\n  font-size: 0.28rem;\n  display: block;\n  -webkit-box-shadow: 0 0 0 transparent;\n  box-shadow: 0 0 0 transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n/* action-sheet */\n.action-sheet {\n  position: absolute;\n  padding-bottom: 0.2rem;\n  left: 0;\n  bottom: 0;\n  z-index: 1070;\n  width: 100%;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform; }\n\n.action-sheet-container,\n.action-sheet-footer {\n  margin: 0 0.2rem; }\n\n.action-sheet-title {\n  background-color: rgba(255, 255, 255, 0.9);\n  font-size: 0.28rem;\n  line-height: 0.36rem;\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.16rem 0.16rem 0 0;\n  text-align: center;\n  color: #5f646e;\n  position: relative; }\n  @media screen and (-webkit-min-device-pixel-ratio: 2) {\n    .action-sheet-title {\n      border: 0;\n      background-position: left bottom;\n      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #dbdbdb), to(#dbdbdb));\n      background-repeat: repeat-x;\n      -webkit-background-size: 100% 1px;\n      /*no*/ } }\n  .action-sheet-title + .action-sheet-body .action-sheet-button:first-child {\n    border-radius: 0; }\n\n.action-sheet-button,\n.action-sheet-close {\n  background-color: rgba(255, 255, 255, 0.9);\n  font-size: 0.34rem;\n  height: 1.08rem;\n  line-height: 1.08rem;\n  padding: 0 0.5rem;\n  text-align: center;\n  font-weight: normal;\n  margin: 0;\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  color: #007aff; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 2) {\n  .action-sheet-button {\n    border: 0;\n    background-position: left bottom;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #dbdbdb), to(#dbdbdb));\n    background-repeat: repeat-x;\n    -webkit-background-size: 100% 1px;\n    /*no*/ } }\n\n.action-sheet-button:first-child {\n  border-radius: 0.16rem 0.16rem 0 0; }\n\n.action-sheet-button:last-child {\n  border-radius: 0 0 0.16rem 0.16rem; }\n\n.action-sheet-button.bold {\n  font-weight: 500; }\n\n.action-sheet-button.danger {\n  color: #ff3b30; }\n\n.action-sheet-footer {\n  margin-top: 0.16rem; }\n\n.action-sheet-close {\n  border-radius: 0.16rem; }\n\n/* 底部滑入动画 */\n.action-sheet.from-bottom.transition-in, .action-sheet.from-bottom.transition-out {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s; }\n\n.action-sheet.from-bottom.transition-in {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.action-sheet.from-bottom.transition-out {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhbG9nLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIiwiX3NldHRpbmcuc2NzcyIsImV4dC9fbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0VBS0U7QUNMRjs7Ozs7Ozs7RUFRRTtBRGVGLGtCQUFrQjtBQUVsQixPQUFPLENBQUM7RUFDSixLQUFLLEVBaEI4QixNQUFNO0VBaUJ6QyxnQkFBZ0IsRUFoQm1CLHdCQUFJO0VBaUJ2QyxVQUFVLEVBQUUsTUFBTztFQUNuQixhQUFhLEVBaEJzQixPQUFPO0VBaUIxQyxRQUFRLEVBQUUsUUFBUztFQUNuQixHQUFHLEVBQUUsR0FBSTtFQUNULElBQUksRUFBRSxHQUFJO0VBQ1YsV0FBVyxFQUFFLE9BQUM7RUFDZCxPQUFPLEVFYWdCLElBQUksR0ZEOUI7RUFyQkQsT0FBTyxBQVVGLGdCQUFnQixDQUNiLGNBQWMsQ0FBQztJQUNYLE1BQU0sRUFBRSxJQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQU0sR0FDbEI7RUFkVCxPQUFPLEFBVUYsZ0JBQWdCLENBS2IsY0FBYyxDQUFDO0lBQ1gsT0FBTyxFQUFFLEtBQU07SUFDZixLQUFLLEVBQUUsSUFBSyxHQUVmO0lDdkJMLE1BQU0sQ0FBTixNQUFNLE9BQU8sNkJBQTZCLEVBQUUsQ0FBQztNRElqRCxPQUFPLEFBVUYsZ0JBQWdCLENBS2IsY0FBYyxDQUFDO1FDbEJmLE1BQU0sRUFBRSxDQUFFO1FBRU4sbUJBQW1CLEVBQUUsUUFBUztRQUM5QixnQkFBZ0IsRUFBRSxvSEFBZ0I7UUFFbEMsaUJBQWlCLEVBQUUsUUFBUztRQUM1Qix1QkFBdUIsRUFBRSxRQUFTO1FBQUUsTUFBTSxFRGdCN0M7O0FBSVQsT0FBTyxNQUFNLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBRTtFQUNYLGlCQUFpQixFQUFFLG9CQUFXLENBQVUsWUFBSztFQUM3QyxTQUFTLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0VBQ3JDLDJCQUEyQixFQUFFLDBCQUEyQjtFQUN4RCwyQkFBMkIsRUFBRSwwQkFBMkI7RUFDeEQsbUJBQW1CLEVBQUUsMEJBQTJCO0VBQ2hELG1CQUFtQixFQUFFLGtCQUFtQjtFQUN4QyxtQkFBbUIsRUFBRSxxQ0FBc0MsR0FlOUQ7RUF2QkQsT0FBTyxNQUFNLEFBU1IsY0FBYyxDQUFDO0lBQ1osT0FBTyxFQUFFLENBQUU7SUFDWCwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0IsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxRQUFLO0lBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFFBQUssR0FDeEM7RUFmTCxPQUFPLE1BQU0sQUFnQlIsZUFBZSxDQUFDO0lBQ2IsT0FBTyxFQUFFLENBQUU7SUFDWCwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0IsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0lBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFlBQUssR0FDeEM7O0FBR0wsaUJBQWlCLENBQUM7RUFDZCxPQUFPLEVBQUUsUUFBUyxHQUNyQjs7QUFFRCxhQUFhLENBQUM7RUFDVixPQUFPLEVBQUUsUUFBUztFQUNsQixTQUFTLEVBQUUsT0FBUTtFQUNuQixXQUFXLEVBQUUsT0FBUTtFQUNyQixXQUFXLEVBQUUsTUFBTyxHQUN2Qjs7QUFFRCxZQUFZLENBQUM7RUFDVCxTQUFTLEVBQUUsT0FBUTtFQUNuQixXQUFXLEVBQUUsT0FBUTtFQUNyQixPQUFPLEVBQUUsUUFBUyxHQUNyQjs7QUFFRCxjQUFjLENBQUM7RUFDWCxNQUFNLEVBN0U2QixPQUFPO0VBOEUxQyxRQUFRLEVBQUUsUUFBUztFR3lGbkIsT0FBTyxFQUFFLElBQUssR0gzRWpCO0VBaEJELGNBQWMsQ0c4Rk4sQ0FBQyxDQUFEO0lBQ0ksSUFBSSxFQUFFLENBQUUsR0FDWDtFRnJLTCxNQUFNLENBQU4sTUFBTSxPQUFPLDZCQUE2QixFQUFFLENBQUM7SURxRWpELGNBQWMsQ0FBQztNQ3BFUCxNQUFNLEVBQUUsQ0FBRTtNQUVOLG1CQUFtQixFQUFFLFFBQVM7TUFDOUIsZ0JBQWdCLEVBQUUsb0hBQWdCO01BRWxDLGlCQUFpQixFQUFFLFFBQVM7TUFDNUIsdUJBQXVCLEVBQUUsUUFBUztNQUFFLE1BQU0sRUQ4RXJEO0VBaEJELGNBQWMsQ0FLVixjQUFjLENBQUM7SUFDWCxNQUFNLEVBbEZ5QixPQUFPO0lBbUZ0QyxXQUFXLEVBbkZvQixPQUFPO0lBb0Z0QyxTQUFTLEVBbEZzQixPQUFPO0lBbUZ0QyxRQUFRLEVBQUUsUUFBUztJQUNuQixLQUFLLEVBeEYwQixPQUFPLEdBNkZ6QztJQ3BGRCxNQUFNLENBQU4sTUFBTSxPQUFPLDZCQUE2QixFQUFFLENBQUM7TURxRWpELGNBQWMsQ0FLVixjQUFjLENBQUM7UUN6RVgsTUFBTSxFQUFFLENBQUU7UUFlTixtQkFBbUIsRUFBRSxRQUFTO1FBQzlCLGdCQUFnQixFQUFFLGtIQUFnQjtRQUNsQyxpQkFBaUIsRUFBRSxRQUFTO1FBQzVCLHVCQUF1QixFQUFFLFFBQVM7UUFBRSxNQUFNLEVEaUVqRDtJQWZMLGNBQWMsQ0FLVixjQUFjLEFBT1QsS0FBSyxDQUFDO01BQ0gsV0FBVyxFQUFFLEdBQUksR0FDcEI7O0FBSVQsYUFBYSxDQUFDO0VBQ1Ysa0JBQWtCLEVBQUUsVUFBVztFQUMvQixVQUFVLEVBQUUsVUFBVztFQUN2QixNQUFNLEVBaEc2QixNQUFNO0VBaUd6QyxVQUFVLEVBQUUsSUFBSztFQUNqQixNQUFNLEVBQUUsQ0FBRTtFQUNWLFVBQVUsRUFBRSxNQUFPO0VBQ25CLE9BQU8sRUFBRSxRQUFTO0VBQ2xCLE1BQU0sRUFBRSxpQkFBa0I7RUFDMUIsYUFBYSxFQUFFLE1BQU87RUFDdEIsS0FBSyxFQUFFLElBQUs7RUFDWixTQUFTLEVBQUUsT0FBUTtFQUNuQixPQUFPLEVBQUUsS0FBTTtFQUNmLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUk7RUFDOUIsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUk7RUFDdEIsa0JBQWtCLEVBQUUsSUFBSztFQUN6QixlQUFlLEVBQUUsSUFBSztFQUN0QixVQUFVLEVBQUUsSUFBSyxHQUNwQjs7QUFHRCxrQkFBa0I7QUFFbEIsYUFBYSxDQUFDO0VBQ1YsUUFBUSxFQUFFLFFBQVM7RUFDbkIsY0FBYyxFQWxIcUIsTUFBTTtFQW1IekMsSUFBSSxFQUFFLENBQUU7RUFDUixNQUFNLEVBQUUsQ0FBRTtFQUNWLE9BQU8sRUV6RmdCLElBQUk7RUYwRjNCLEtBQUssRUFBRSxJQUFLO0VBQ1osaUJBQWlCLEVBQUUsdUJBQVc7RUFDOUIsU0FBUyxFQUFFLHVCQUFXO0VBQ3RCLDJCQUEyQixFQUFFLGlCQUFrQjtFQUMvQyxtQkFBbUIsRUFBRSxpQkFBa0I7RUFDdkMsbUJBQW1CLEVBQUUsU0FBVTtFQUMvQixtQkFBbUIsRUFBRSw0QkFBNkIsR0FDckQ7O0FBRUQsdUJBQXVCO0FBQ3ZCLG9CQUFvQixDQUFDO0VBQ2pCLE1BQU0sRUFBRSxDQUFDLENBakkwQixNQUFNLEdBa0k1Qzs7QUFFRCxtQkFBbUIsQ0FBQztFQUNoQixnQkFBZ0IsRUE3SW1CLHdCQUFJO0VBOEl2QyxTQUFTLEVBQUUsT0FBUTtFQUNuQixXQUFXLEVBQUUsT0FBUTtFQUNyQixPQUFPLEVBQUUsYUFBYztFQUN2QixhQUFhLEVBMUlzQixPQUFPLENBQVAsT0FBTyxDQTBJZSxDQUFDLENBQUMsQ0FBQztFQUM1RCxVQUFVLEVBQUUsTUFBTztFQUNuQixLQUFLLEVFaklrQyxPQUFPO0VGa0k5QyxRQUFRLEVBQUUsUUFBUyxHQVN0QjtFQ25KRyxNQUFNLENBQU4sTUFBTSxPQUFPLDZCQUE2QixFQUFFLENBQUM7SURrSWpELG1CQUFtQixDQUFDO01DaklaLE1BQU0sRUFBRSxDQUFFO01BU04sbUJBQW1CLEVBQUUsV0FBWTtNQUNqQyxnQkFBZ0IsRUFBRSxvSEFBZ0I7TUFDbEMsaUJBQWlCLEVBQUUsUUFBUztNQUM1Qix1QkFBdUIsRUFBRSxRQUFTO01BQUUsTUFBTSxFRHNJckQ7RUFqQkQsbUJBQW1CLEdBVWIsa0JBQWtCLENBQ2hCLG9CQUFvQixBQUNmLFlBQVksQ0FBQztJQUNWLGFBQWEsRUFBRSxDQUFFLEdBQ3BCOztBQUtiLG9CQUFvQjtBQUNwQixtQkFBbUIsQ0FBQztFQUNoQixnQkFBZ0IsRUFqS21CLHdCQUFJO0VBa0t2QyxTQUFTLEVBeEp5QixPQUFPO0VBeUp6QyxNQUFNLEVBMUo2QixPQUFPO0VBMkoxQyxXQUFXLEVBM0p3QixPQUFPO0VBNEoxQyxPQUFPLEVBQUUsUUFBUztFQUNsQixVQUFVLEVBQUUsTUFBTztFQUNuQixXQUFXLEVBQUUsTUFBTztFQUNwQixNQUFNLEVBQUUsQ0FBRTtFQUNWLFVBQVUsRUFBRSxVQUFXO0VBQ3ZCLE9BQU8sRUFBRSxLQUFNO0VBQ2YsUUFBUSxFQUFFLFFBQVM7RUFDbkIsS0FBSyxFQTNLOEIsT0FBTyxHQTRLN0M7O0FDbktHLE1BQU0sQ0FBTixNQUFNLE9BQU8sNkJBQTZCLEVBQUUsQ0FBQztFRHFLakQsb0JBQW9CLENBQUM7SUNwS2IsTUFBTSxFQUFFLENBQUU7SUFTTixtQkFBbUIsRUFBRSxXQUFZO0lBQ2pDLGdCQUFnQixFQUFFLG9IQUFnQjtJQUNsQyxpQkFBaUIsRUFBRSxRQUFTO0lBQzVCLHVCQUF1QixFQUFFLFFBQVM7SUFBRSxNQUFNLEVEd0tyRDs7QUFoQkQsb0JBQW9CLEFBRWYsWUFBWSxDQUFDO0VBQ1YsYUFBYSxFQTNLa0IsT0FBTyxDQUFQLE9BQU8sQ0EyS21CLENBQUMsQ0FBQyxDQUFDLEdBQy9EOztBQUpMLG9CQUFvQixBQUtmLFdBQVcsQ0FBQztFQUNULGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQTlLYSxPQUFPLENBQVAsT0FBTyxHQStLekM7O0FBUEwsb0JBQW9CLEFBU2YsS0FBSyxDQUFDO0VBQ0gsV0FBVyxFQUFFLEdBQUksR0FDcEI7O0FBWEwsb0JBQW9CLEFBYWYsT0FBTyxDQUFDO0VBQ0wsS0FBSyxFQUFFLE9BQVEsR0FDbEI7O0FBR0wsb0JBQW9CLENBQUM7RUFDakIsVUFBVSxFQTNMeUIsT0FBTyxHQTRMN0M7O0FBRUQsbUJBQW1CLENBQUM7RUFDaEIsYUFBYSxFQS9Mc0IsT0FBTyxHQWdNN0M7O0FBR0Qsd0JBQXdCO0FBRXhCLGFBQWEsWUFBWSxBQUNwQixjQUFjLEVBRG5CLGFBQWEsWUFBWSxBQUVwQixlQUFlLENBQUM7RUFDYiwyQkFBMkIsRUFBRSxLQUFNO0VBQ25DLG1CQUFtQixFQUFFLEtBQU07RUFDM0Isd0JBQXdCLEVBQUUsRUFBRztFQUM3QixnQkFBZ0IsRUFBRSxFQUFHLEdBQ3hCOztBQVBMLGFBQWEsWUFBWSxBQVFwQixjQUFjLENBQUM7RUFDWixpQkFBaUIsRUFBRSxvQkFBVztFQUM5QixTQUFTLEVBQUUsb0JBQVcsR0FDekI7O0FBWEwsYUFBYSxZQUFZLEFBWXBCLGVBQWUsQ0FBQztFQUNiLGlCQUFpQixFQUFFLHVCQUFXO0VBQzlCLFNBQVMsRUFBRSx1QkFBVyxHQUN6QiIsImZpbGUiOiJjb21wb25lbnRzL2RpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE1LTEyLTI3IDE3OjM3OjQ4XG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjUgMjI6NTE6NDVcbiovXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcbkBpbXBvcnQgXCIuLi9fc2V0dGluZy5zY3NzXCI7XG5cbiRkaWFsb2ctd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgIDUuNHJlbTtcbiRjb2xvci1kaWFsb2ctYmc6ICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiRkaWFsb2ctYnV0dG9uLXRleHQtY29sb3I6ICAgICAgICAgICAgICMwMDdhZmY7XG4kZGlhbG9nLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAwLjEycmVtO1xuJGRpYWxvZy1idXR0b24taGVpZ2h0OiAgICAgICAgICAgICAgICAgMC44OHJlbTtcbiRkaWFsb2ctaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgIDAuNnJlbTtcbiRkaWFsb2ctLWJ1dHRvbi1mb250LXNpemU6ICAgICAgICAgICAgIDAuMzRyZW07XG5cbiRhY3Rpb24tc2hlZXQtcmFkaXVzOiAgICAgICAgICAgICAgICAgIDAuMTZyZW07XG4kYWN0aW9uLXNoZWV0LW1hcmdpbjogICAgICAgICAgICAgICAgICAwLjJyZW07XG4kYWN0aW9uLXNoZWV0LWJ1dHRvbi1oZWlnaHQ6ICAgICAgICAgICAxLjA4cmVtO1xuJGFjdGlvbi1zaGVldC1idXR0b24tZm9udC1zaXplOiAgICAgICAwLjM0cmVtO1xuXG4vKiBkaWFsb2cgYmVnaW4gKi9cblxuLmRpYWxvZyB7XG4gICAgd2lkdGg6ICRkaWFsb2ctd2lkdGg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRpYWxvZy1iZztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJGRpYWxvZy1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSAkZGlhbG9nLXdpZHRoIC8gMjtcbiAgICB6LWluZGV4OiAkemluZGV4LWRpYWxvZztcbiAgICAmLnZlcnRpY2FsLWJ1dHRvbiB7XG4gICAgICAgIC5kaWFsb2ctZm9vdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5kaWFsb2ctYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBAaW5jbHVkZSBib3JkZXIodG9wLCAkY29sb3ItYm9yZGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpYWxvZy5zY2FsZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMS4xODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMS4xODUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAmLnRyYW5zaXRpb24taW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwLjgxNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMC44MTUpO1xuICAgIH1cbn1cblxuLmRpYWxvZy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xufVxuXG4uZGlhbG9nLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcbiAgICBmb250LXNpemU6IDAuMzZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRpYWxvZy1ib2R5IHtcbiAgICBmb250LXNpemU6IDAuMjhyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuMzJyZW07XG4gICAgcGFkZGluZzogMCAwLjNyZW07XG59XG5cbi5kaWFsb2ctZm9vdGVyIHtcbiAgICBoZWlnaHQ6ICRkaWFsb2ctYnV0dG9uLWhlaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgZXF1YWwtZmxleChhKTtcbiAgICBAaW5jbHVkZSBib3JkZXIodG9wLCAkY29sb3ItYm9yZGVyKTtcbiAgICAuZGlhbG9nLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogJGRpYWxvZy1idXR0b24taGVpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogJGRpYWxvZy1idXR0b24taGVpZ2h0O1xuICAgICAgICBmb250LXNpemU6ICRkaWFsb2ctLWJ1dHRvbi1mb250LXNpemU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICRkaWFsb2ctYnV0dG9uLXRleHQtY29sb3I7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlcihsZWZ0LCAkY29sb3ItYm9yZGVyKTtcbiAgICAgICAgJi5ib2xkIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kaWFsb2ctaW5wdXQge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogJGRpYWxvZy1pbnB1dC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgIHBhZGRpbmc6IDAgMC4xcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMC4yOHJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cblxuLyogYWN0aW9uLXNoZWV0ICovXG5cbi5hY3Rpb24tc2hlZXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGFjdGlvbi1zaGVldC1tYXJnaW47XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogJHppbmRleC1kaWFsb2c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbn1cblxuLmFjdGlvbi1zaGVldC1jb250YWluZXIsXG4uYWN0aW9uLXNoZWV0LWZvb3RlciB7XG4gICAgbWFyZ2luOiAwICRhY3Rpb24tc2hlZXQtbWFyZ2luO1xufVxuXG4uYWN0aW9uLXNoZWV0LXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGlhbG9nLWJnO1xuICAgIGZvbnQtc2l6ZTogMC4yOHJlbTtcbiAgICBsaW5lLWhlaWdodDogMC4zNnJlbTtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRhY3Rpb24tc2hlZXQtcmFkaXVzICRhY3Rpb24tc2hlZXQtcmFkaXVzIDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LXNlY29uZGFyeTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgYm9yZGVyKGJvdHRvbSwgJGNvbG9yLWJvcmRlcik7XG4gICAgKyAuYWN0aW9uLXNoZWV0LWJvZHkge1xuICAgICAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aW9uLXNoZWV0LWJ1dHRvbixcbi5hY3Rpb24tc2hlZXQtY2xvc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kaWFsb2ctYmc7XG4gICAgZm9udC1zaXplOiAkYWN0aW9uLXNoZWV0LWJ1dHRvbi1mb250LXNpemU7XG4gICAgaGVpZ2h0OiAkYWN0aW9uLXNoZWV0LWJ1dHRvbi1oZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRhY3Rpb24tc2hlZXQtYnV0dG9uLWhlaWdodDtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICRkaWFsb2ctYnV0dG9uLXRleHQtY29sb3I7XG59XG5cbi5hY3Rpb24tc2hlZXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoYm90dG9tLCAkY29sb3ItYm9yZGVyKTtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGFjdGlvbi1zaGVldC1yYWRpdXMgJGFjdGlvbi1zaGVldC1yYWRpdXMgMCAwO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgJGFjdGlvbi1zaGVldC1yYWRpdXMgJGFjdGlvbi1zaGVldC1yYWRpdXM7XG4gICAgfVxuICAgIC8vIOiCr+WumueUqOaIt+aTjeS9nOihjOS4uum7mOiupOWKoOeyl+Wtl+S9k+aYvuekulxuICAgICYuYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC8vIOWNsemZqeaTjeS9nOagt+W8j1xuICAgICYuZGFuZ2VyIHtcbiAgICAgICAgY29sb3I6ICNmZjNiMzA7XG4gICAgfVxufVxuXG4uYWN0aW9uLXNoZWV0LWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogJGFjdGlvbi1zaGVldC1yYWRpdXM7XG59XG5cbi5hY3Rpb24tc2hlZXQtY2xvc2Uge1xuICAgIGJvcmRlci1yYWRpdXM6ICRhY3Rpb24tc2hlZXQtcmFkaXVzO1xufVxuXG5cbi8qIOW6lemDqOa7keWFpeWKqOeUuyAqL1xuXG4uYWN0aW9uLXNoZWV0LmZyb20tYm90dG9tIHtcbiAgICAmLnRyYW5zaXRpb24taW4sXG4gICAgJi50cmFuc2l0aW9uLW91dCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB9XG4gICAgJi50cmFuc2l0aW9uLWluIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIH1cbn1cbiIsIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE2LTAxLTIzIDAxOjAxOjAzXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjUgMDA6MzQ6Mzlcbiog5qih5ouf5LiA5YOP57SgXG4qIEB1c2FnZTpcbiogQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgeyBAaW5jbHVkZSBib3JkZXIoYm90dG9tLCAjYWJjZGVmKSB9XG4qL1xuXG4vLyDnurXlkJFcbiVib3JkZXItcG9ydHJhaXQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xufVxuLy8g5qiq5ZCRXG4lYm9yZGVyLWxhbmRzY2FwZSB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG59XG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3ItYm9yZGVyKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIEBpZiAkZGlyZWN0aW9uID09IHRvcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIC8vIEBleHRlbmQgYm9yZGVyLXBvcnRyYWl0KCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gdGIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBhbGwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygjZGRkKSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AaW1wb3J0IFwiZXh0L19taXhpbi5zY3NzXCI7XG5AaW1wb3J0IFwiZXh0L19ib3JkZXItbWl4aW4uc2Nzc1wiO1xuXG4vLyBfc2V0dGluZy5zY3NzIOaWh+S7tumHjOeahOWPmOmHj+S4jeWFgeiuuOmaj+aEj+S/ruaUuVxuXG4vLyBmb25055u45YWzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJGZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgIDAuMjhyZW0gIWRlZmF1bHQ7IFxuJGZvbnQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRmb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgU1RIZWlUaSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cblxuLy8g5Li76ImyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kY29sb3ItcHJpbWFyeTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIzFhYmM5YyAhZGVmYXVsdDtcbiRjb2xvci1kYW5nZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjYzODNhICFkZWZhdWx0O1xuJGNvbG9yLXdhcm5pbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmNjAgIWRlZmF1bHQ7XG4kY29sb3Itc3VjY2VzczogICAgICAgICAgICAgICAgICAgICAgICAgICAgIzRjZDk2NCAhZGVmYXVsdDtcblxuJGNvbG9yLXByaW1hcnktYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgICMxN0E5OEMgIWRlZmF1bHQ7XG4kY29sb3ItZGFuZ2VyLWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRjb2xvci1kYW5nZXIsIDEwJSkgIWRlZmF1bHQ7XG4kY29sb3Itd2FybmluZy1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRjb2xvci13YXJuaW5nLCAxMCUpICFkZWZhdWx0O1xuJGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3Itc3VjY2VzcywgMTAlKSAhZGVmYXVsdDtcblxuJGNvbG9yLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkYmRiZGIgIWRlZmF1bHQ7ICAvLyDliIblibLnur/nmoTpopzoibJcbiRjb2xvci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjNmNGY1ICFkZWZhdWx0OyAvLyDog4zmma/oibJcbiRjb2xvci10ZXh0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjM2Q0MTQ1ICFkZWZhdWx0OyAvLyDmlofmoYjoibJcbiRjb2xvci10ZXh0LXNlY29uZGFyeTogICAgICAgICAgICAgICAgICAgICAjNWY2NDZlICFkZWZhdWx0OyAvLyDmrKHnuqfmlofmoYhcbiRjb2xvci10ZXh0LWdyYXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAjOTk5ICFkZWZhdWx0OyAvLyDngbDoibLmlofmoYhcbiRjb2xvci10ZXh0LWdyYXktbGlnaHQ6ICAgICAgICAgICAgICAgICAgICAjY2NjICFkZWZhdWx0OyAvLyDmm7TngbDoibLmlofmoYhcblxuXG4vLyDpk77mjqXoibJcbiRjb2xvci1saW5rOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItdGV4dCAhZGVmYXVsdDsgLy8g6ZO+5o6l6Imy5pyJ5Y+v6IO95LiN5ZCM5LqO5Li76ImyXG4kY29sb3ItbGluay1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRjb2xvci10ZXh0LCAxMCUpICFkZWZhdWx0OyAvLyDpk77mjqXoibLmnInlj6/og73kuI3lkIzkuo7kuLvoibJcblxuXG4vLyB6LWluZGV4XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLWZpeGVkOiAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWJhY2tkcm9wOiAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1wb3B1cDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC1kaWFsb2c6ICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtbG9hZGVyOiAgICAgICAgICAgIDEwODAgIWRlZmF1bHQ7XG4kemluZGV4LXRvYXN0OiAgICAgICAgICAgICAxMDkwICFkZWZhdWx0O1xuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBcbi8vIG1peGluIHNjc3Ncbi8vIOWMheaLrOW4uOeUqOeahG1peGluLCAlLCBAZnVuY3Rpb24g5Y+K6L6F5Yqp55qEYnRu5ZKM6IOM5pmv5Zu+54mHaWNvblxuLy8gbWl4aW7vvIzpgJrov4dAaW5jbHVkZeiwg+eUqO+8jOagt+W8j+mAmui/h+aLt+i0neeahOaWueW8j+S9v+eUqO+8jOWwpOWFtumAgueUqOS6juS8oOmAkuWPguaVsFxuLy8gJe+8jOmAmui/h0BleHRlbmTosIPnlKjvvIzmoLflvI/pgJrov4fnu4TlkIjnlLPmmI7nmoTmlrnlvI/kvb/nlKjvvIzpgILnlKjkuo7kuI3kvKDlj4LmlbDnmoTku6PnoIHniYfmrrUgIFxuLy8gQGZ1bmN0aW9u77yM6L+U5Zue5LiA5Liq5YC877yM55So5LqO6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIG1peGluICYgJVxuLy8g5pei5a6a5LmJ5LqGbWl4aW7kuZ/lrprkuYnkuoYl77yM5qC55o2u6ZyA5rGC5L2/55SoQGluY2x1ZGXmiJZAZXh0ZW5k6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcbkBtaXhpbiBjZW50ZXItYmxvY2soJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlY2VudGVyLWJsb2NrO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufVxuXG4lY2VudGVyLWJsb2NrIHtcbiAgICBAaW5jbHVkZSBjZW50ZXItYmxvY2soZmFsc2UpO1xufVxuXG4vLyBjbGVhcmZpeFxuQG1peGluIGNsZWFyZml4KCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWNsZWFyZml4O1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4lY2xlYXJmaXgge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4KGZhbHNlKTtcbn1cblxuLy8gSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbnJlYWRlcnNcbi8vIOWPqumakOiXj+S6juinhuinie+8jOWxj+W5lea1j+iniOWZqOWPr+S7pemYheivu1xuQG1peGluIGhpZGRlbi1jbGlwKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJWhpZGRlbi1jbGlwO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIH1cbn1cblxuJWhpZGRlbi1jbGlwIHtcbiAgICBAaW5jbHVkZSBoaWRkZW4tY2xpcChmYWxzZSk7XG59XG5cbi8vIGVsbGlwc2lzXG5AbWl4aW4gZWxsaXBzaXMoJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlZWxsaXBzaXM7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxufVxuXG4lZWxsaXBzaXMge1xuICAgIEBpbmNsdWRlIGVsbGlwc2lzKGZhbHNlKTtcbn1cblxuLy8g5Y+q5pyJd2Via2l05pSv5oyB5aSa6KGM55yB55Wl5Y+3XG5AbWl4aW4gZWxsaXBzaXMtbGluZSgkbGluZTogMikge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyB3b3JkLWJyZWFrXG4vLyDnlKjkuo7pk77mjqXlnLDlnYDlvLrliLbmjaLooYxcbkBtaXhpbiB3b3JkLWJyZWFrKCRleHRlbmQ6IHRydWUpIHtcbiAgICBAaWYgJGV4dGVuZCB7XG4gICAgICAgIEBleHRlbmQgJXdvcmQtYnJlYWs7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxufVxuXG4ld29yZC1icmVhayB7XG4gICAgQGluY2x1ZGUgd29yZC1icmVhayhmYWxzZSk7XG59XG5cbi8vIGRpc2FibGVkXG4vLyDnpoHnlKjmoLflvI/vvIzliqAhaW1wb3J0YW50XG5AbWl4aW4gZGlzYWJsZWQoKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuJWRpc2FibGVkIHtcbiAgICBAaW5jbHVkZSBkaXNhYmxlZDtcbn1cblxuLy8gZml4ZWQgdG9wICYgYm90dG9tXG5AbWl4aW4gZml4ZWQoJHBvczogMCkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIEBpZiAkcG9zID09IGJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICB0b3A6ICRwb3M7XG4gICAgfVxufVxuXG4lZml4ZWQtdG9wIHtcbiAgICBAaW5jbHVkZSBmaXhlZDtcbn1cblxuJWZpeGVkLWJvdHRvbSB7XG4gICAgQGluY2x1ZGUgZml4ZWQoJHBvczogYm90dG9tKTtcbn1cblxuLy8ganVzdGlmeVxuQG1peGluIGp1c3RpZnkoJGV4dGVuZDogdHJ1ZSkge1xuICAgIEBpZiAkZXh0ZW5kIHtcbiAgICAgICAgQGV4dGVuZCAlanVzdGlmeTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufVxuXG4lanVzdGlmeSB7XG4gICAgQGluY2x1ZGUganVzdGlmeShmYWxzZSk7XG59XG5cbi8vIG1peGluXG4vLyDlj6rlrprkuYnkuoZtaXhpbu+8jOaJgOS7peWPquiDvemAmui/h0BpbmNsdWRl5p2l6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRhYmxlIOetieWIhlxuQG1peGluIGVxdWFsLXRhYmxlKCRjaGlsZHJlbjogbGkpIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICRjaGlsZHJlbkVsZTogbGkgZGl2IHAgYSBzcGFuIHN0cm9uZztcbiAgICBAaWYgaW5kZXgoJGNoaWxkcmVuRWxlLCAkY2hpbGRyZW4pIHtcbiAgICAgICAgI3skY2hpbGRyZW59IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICAuI3skY2hpbGRyZW59IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZsZXgg562J5YiGXG5AbWl4aW4gZXF1YWwtZmxleCgkY2hpbGRyZW46IGxpKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkY2hpbGRyZW5FbGU6IGxpIGRpdiBwIGEgc3BhbiBzdHJvbmc7XG4gICAgQGlmIGluZGV4KCRjaGlsZHJlbkVsZSwgJGNoaWxkcmVuKSB7XG4gICAgICAgICN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgLiN7JGNoaWxkcmVufSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBmbGV4IGNlbnRlclxuQG1peGluIGNlbnRlci1mbGV4KCRkaXJlY3Rpb246IGJvdGgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIEBpZiAkZGlyZWN0aW9uID09IGJvdGgge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB4IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vLyB0cmFuc2xhdGUgY2VudGVyXG5AbWl4aW4gY2VudGVyLXRyYW5zbGF0ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIEBpZiAkZGlyZWN0aW9uID09IGJvdGgge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0geCB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHkge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xuICAgIH1cbn1cblxuLy8gdHJpYW5nbGUg5LiJ6KeS566t5aS0XG4ldHJpYW5nbGUtYmFzaWMge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiB0cmlhbmdsZSgkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJXaWR0aDogNnB4LCAkYm9yZGVyQ29sb3I6ICNkZWRlZGUpIHtcbiAgICBAZXh0ZW5kICV0cmlhbmdsZS1iYXNpYztcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItbGVmdDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBkYXNoZWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcldpZHRoIGRhc2hlZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICBib3JkZXItdG9wOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyV2lkdGggZGFzaGVkIHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLy8gYXJyb3cg5pa55ZCR566t5aS0XG5AbWl4aW4gYXJyb3coJHNpemU6IDEwcHgsICRkaXJlY3Rpb246IHJpZ2h0LCAkYm9yZGVyV2lkdGg6IDJweCwgJGJvcmRlckNvbG9yOiAjZGVkZWRlKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgQGlmICRkaXJlY3Rpb24gPT0gdG9wIHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyV2lkdGggc29saWQgJGJvcmRlckNvbG9yO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJXaWR0aCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICAgIEBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICBib3JkZXItbGVmdDogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcldpZHRoIHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbn1cblxuLy8gcmVtXG5AbWl4aW4gcmVtKCRweDogMS40LCAkcHJvcGVydHk6IGZvbnQtc2l6ZSkge1xuICAgICN7JHByb3BlcnR5fTogJHB4ICogMTBweDtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHB4fXJlbTtcbn1cblxuLy8gaHR0cDovL3d3dy5jc3MzZmlsZXMuY29tL2ZvbnQvXG4vLyAxIFRoZSBlb3QgZm9udGZpbGUuIENhbiBiZSBvbWl0dGVkIGlmIHlvdSBkb25gdCB3YW50IHRvIHN1cHBvcnQgSW50ZXJuZXQgRXhwbG9yZXIgcHJpb3IgdG8gdmVyc2lvbiA5IChpbmNsdWRpbmcgc2VtaWNvbG9uKS5cbi8vIDIgQ2FuIGFsc28gYmUgb21pdHRlZCBmb3IgSW50ZXJuZXQgRXhwbG9yZXIgPCA5LiA/aWVmaXggcHJldmVudHMgSUU2IGZyb20gaW50ZXJwcmV0aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nLiBJZiB0aGUgd2hvbGUgSUUgZmFtaWx5ICg2IHRvIDkpIHNob3VsZCBiZSBzdXBwb3J0ZWQsIDEgYW5kIDIgYXJlIG5lZWRlZC5cbi8vIDMgQ2FuIGJlIG9taXR0ZWQgaWYgaVBhZCB2ZXJzaW9ucyBwcmlvciB0byBpT1MgNC4yIHNob3VsZG7igJl0IGJlIHN1cHBvcnRlZC4gXG4vLyA0IFRoZSB0dGYgZm9udGZpbGUuIE5lY2Vzc2FyeSB0byBzdXBwb3J0IChNb2JpbGUpIFNhZmFyaSBhbmQgT3BlcmEuIFxuLy8gNSBUaGUgd29mZiBmb250ZmlsZSBmb3IgYWxsIG1vZGVybiBicm93c2VycyAoYmVzdCBjaG9pY2UpLlxuQG1peGluIGZvbnQtZmFjZSgkZm9udEZhY2VGYW1pbHksICRmb250RmFjZVBhdGgsICR3ZWlnaHQ6IG5vcm1hbCwgJHN0eWxlOiBub3JtYWwpIHtcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250RmFjZUZhbWlseTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG4gICAgICAgIGZvbnQtc3R5bGU6ICRzdHlsZTtcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRmb250RmFjZVBhdGh9LmVvdFwiKTsgLy8gMVxuICAgICAgICBzcmM6IHVybChcIiN7JGZvbnRGYWNlUGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIiN7JGZvbnRGYWNlUGF0aH0uc3ZnIyN7JGZvbnRGYWNlRmFtaWx5fVwiKSBmb3JtYXQoXCJzdmdcIiksIHVybChcIiN7JGZvbnRGYWNlUGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRmb250RmFjZVBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG59XG5cbi8vICVcbi8vIOWPquWumuS5ieS6hiXvvIzmiYDku6Xlj6rog73pgJrov4dAZXh0ZW5k5p2l6LCD55SoXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyDnrYnliIbliJdcbi8vIOWPr+S7peS9v+eUqGVxdWFsLWZsZXjmiJZlcXVhbC10YWJsZe+8jOm7mOiupOWtkOWFg+e0oOS4umxpXG4lZXF1YWwtY29sIHtcbiAgICBAaW5jbHVkZSBlcXVhbC10YWJsZTtcbn1cblxuLy8gaXRlbSBhcnJvdywg5Y+z5L6n566t5aS06Lez6L2s5oyH5ZCRXG4laXRlbS1hcnJvdyB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBAaW5jbHVkZSBhcnJvdztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuXG4vLyDkuIvpnaLnmoTlh6DkuKol77yM55Sx5LqO54mI5pys5oiW5YmN57yA77yM5omA5Lul6K6+6K6h5oiQJVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZmxleFxuJWRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLy8gYWxsLXRyYW5zaXRpb25cbiV0cmFuc2l0aW9uLWFsbCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIHRyYW5zbGF0ZTNkXG4ldHJhbnNsYXRlM2Qge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8vIHBhZ2Ugc3dpdGNoXG4lcGFnZS1vdXQge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKSAwLjFzO1xufVxuXG4lcGFnZS1pbiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpO1xufVxuXG4vLyBidG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYnRuLWJhc2ljXG4vLyDmjInpkq7ln7rmnKzmoLflvI/vvIzogZTlkIjnlLPmmI5cbiVidG4tYmFzaWMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0= */\n", ""]);
	
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
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-02 23:57:49\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 22:53:52\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 00:34:39\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* loader begin */\n.loader-container {\n  padding: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n  line-height: 1;\n  border-radius: 0.08rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1080;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .loader-container.transition-in {\n    opacity: 1;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1); }\n  .loader-container.transition-out {\n    opacity: 0;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815); }\n\n.loader-title {\n  color: #fff;\n  font-size: 0.28rem;\n  margin: 0.2rem 0 0.1rem 0;\n  padding: 0 0.4rem; }\n\n/* loader end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGVyLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIiwiX3NldHRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0VBS0U7QUNMRjs7Ozs7Ozs7RUFRRTtBRE1GLGtCQUFrQjtBQUVsQixpQkFBaUIsQ0FBQztFQUNkLE9BQU8sRUFQa0IsTUFBTTtFQVEvQixnQkFBZ0IsRUFOUyxrQkFBSTtFQU83QixVQUFVLEVBQUUsTUFBTztFQUNuQixXQUFXLEVBQUUsQ0FBRTtFQUNmLGFBQWEsRUFWWSxPQUFPO0VBV2hDLFFBQVEsRUFBRSxRQUFTO0VBQ25CLEdBQUcsRUFBRSxHQUFJO0VBQ1QsSUFBSSxFQUFFLEdBQUk7RUFDVixPQUFPLEVFdUJnQixJQUFJO0VGdEIzQixPQUFPLEVBQUUsQ0FBRTtFQUNYLGlCQUFpQixFQUFFLG9CQUFXLENBQVUsWUFBSztFQUM3QyxTQUFTLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0VBQ3JDLDJCQUEyQixFQUFFLDBCQUEyQjtFQUN4RCwyQkFBMkIsRUFBRSwwQkFBMkI7RUFDeEQsbUJBQW1CLEVBQUUsMEJBQTJCO0VBQ2hELG1CQUFtQixFQUFFLGtCQUFtQjtFQUN4QyxtQkFBbUIsRUFBRSxxQ0FBc0MsR0FnQjlEO0VBakNELGlCQUFpQixBQW1CWixjQUFjLENBQUM7SUFDWixPQUFPLEVBQUUsQ0FBRTtJQUNYLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQixpQkFBaUIsRUFBRSxvQkFBVyxDQUFVLFFBQUs7SUFDN0MsU0FBUyxFQUFFLG9CQUFXLENBQVUsUUFBSyxHQUN4QztFQXpCTCxpQkFBaUIsQUEwQlosZUFBZSxDQUFDO0lBQ2IsT0FBTyxFQUFFLENBQUU7SUFDWCwyQkFBMkIsRUFBRSxLQUFNO0lBQ25DLG1CQUFtQixFQUFFLEtBQU07SUFDM0IsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0lBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFlBQUssR0FDeEM7O0FBR0wsYUFBYSxDQUFDO0VBQ1YsS0FBSyxFQUFFLElBQUs7RUFDWixTQUFTLEVBQUUsT0FBUTtFQUNuQixNQUFNLEVBQUUsaUJBQWtCO0VBQzFCLE9BQU8sRUFBRSxRQUFTLEdBQ3JCOztBQUVELGdCQUFnQiIsImZpbGUiOiJjb21wb25lbnRzL2xvYWRlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiogQEF1dGhvcjogc2h1bmppbmNoYW5cbiogQERhdGU6ICAgMjAxNi0wMS0wMiAyMzo1Nzo0OVxuKiBATGFzdCBNb2RpZmllZCBieTogICBzaHVuamluY2hhblxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTAxLTI1IDIyOjUzOjUyXG4qL1xuXG5AY2hhcnNldCBcInV0Zi04XCI7XG5AaW1wb3J0IFwiLi4vX3NldHRpbmcuc2Nzc1wiO1xuXG4kbG9hZGVyLXBhZGRpbmc6ICAgICAgICAgICAgIDAuMnJlbTtcbiRsb2FkZXItcmFkaXVzOiAgICAgICAgICAgICAgMC4wOHJlbTtcbiRsb2FkZXItYmctY29sb3I6ICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjgpO1xuXG4vKiBsb2FkZXIgYmVnaW4gKi9cblxuLmxvYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6ICRsb2FkZXItcGFkZGluZztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbG9hZGVyLWJnLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAkbG9hZGVyLXJhZGl1cztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHotaW5kZXg6ICR6aW5kZXgtbG9hZGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMTg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMTg1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG5cbiAgICAmLnRyYW5zaXRpb24taW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwLjgxNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMC44MTUpO1xuICAgIH1cbn1cblxuLmxvYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAwLjI4cmVtO1xuICAgIG1hcmdpbjogMC4ycmVtIDAgMC4xcmVtIDA7XG4gICAgcGFkZGluZzogMCAwLjRyZW07XG59XG5cbi8qIGxvYWRlciBlbmQgKi9cbiIsIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE2LTAxLTIzIDAxOjAxOjAzXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjUgMDA6MzQ6Mzlcbiog5qih5ouf5LiA5YOP57SgXG4qIEB1c2FnZTpcbiogQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgeyBAaW5jbHVkZSBib3JkZXIoYm90dG9tLCAjYWJjZGVmKSB9XG4qL1xuXG4vLyDnurXlkJFcbiVib3JkZXItcG9ydHJhaXQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xufVxuLy8g5qiq5ZCRXG4lYm9yZGVyLWxhbmRzY2FwZSB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG59XG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3ItYm9yZGVyKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIEBpZiAkZGlyZWN0aW9uID09IHRvcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIC8vIEBleHRlbmQgYm9yZGVyLXBvcnRyYWl0KCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gdGIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBhbGwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygjZGRkKSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AaW1wb3J0IFwiZXh0L19taXhpbi5zY3NzXCI7XG5AaW1wb3J0IFwiZXh0L19ib3JkZXItbWl4aW4uc2Nzc1wiO1xuXG4vLyBfc2V0dGluZy5zY3NzIOaWh+S7tumHjOeahOWPmOmHj+S4jeWFgeiuuOmaj+aEj+S/ruaUuVxuXG4vLyBmb25055u45YWzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJGZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgIDAuMjhyZW0gIWRlZmF1bHQ7IFxuJGZvbnQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRmb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgU1RIZWlUaSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cblxuLy8g5Li76ImyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kY29sb3ItcHJpbWFyeTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIzFhYmM5YyAhZGVmYXVsdDtcbiRjb2xvci1kYW5nZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjYzODNhICFkZWZhdWx0O1xuJGNvbG9yLXdhcm5pbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmNjAgIWRlZmF1bHQ7XG4kY29sb3Itc3VjY2VzczogICAgICAgICAgICAgICAgICAgICAgICAgICAgIzRjZDk2NCAhZGVmYXVsdDtcblxuJGNvbG9yLXByaW1hcnktYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgICMxN0E5OEMgIWRlZmF1bHQ7XG4kY29sb3ItZGFuZ2VyLWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRjb2xvci1kYW5nZXIsIDEwJSkgIWRlZmF1bHQ7XG4kY29sb3Itd2FybmluZy1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRjb2xvci13YXJuaW5nLCAxMCUpICFkZWZhdWx0O1xuJGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3Itc3VjY2VzcywgMTAlKSAhZGVmYXVsdDtcblxuJGNvbG9yLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkYmRiZGIgIWRlZmF1bHQ7ICAvLyDliIblibLnur/nmoTpopzoibJcbiRjb2xvci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjNmNGY1ICFkZWZhdWx0OyAvLyDog4zmma/oibJcbiRjb2xvci10ZXh0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjM2Q0MTQ1ICFkZWZhdWx0OyAvLyDmlofmoYjoibJcbiRjb2xvci10ZXh0LXNlY29uZGFyeTogICAgICAgICAgICAgICAgICAgICAjNWY2NDZlICFkZWZhdWx0OyAvLyDmrKHnuqfmlofmoYhcbiRjb2xvci10ZXh0LWdyYXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAjOTk5ICFkZWZhdWx0OyAvLyDngbDoibLmlofmoYhcbiRjb2xvci10ZXh0LWdyYXktbGlnaHQ6ICAgICAgICAgICAgICAgICAgICAjY2NjICFkZWZhdWx0OyAvLyDmm7TngbDoibLmlofmoYhcblxuXG4vLyDpk77mjqXoibJcbiRjb2xvci1saW5rOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItdGV4dCAhZGVmYXVsdDsgLy8g6ZO+5o6l6Imy5pyJ5Y+v6IO95LiN5ZCM5LqO5Li76ImyXG4kY29sb3ItbGluay1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRjb2xvci10ZXh0LCAxMCUpICFkZWZhdWx0OyAvLyDpk77mjqXoibLmnInlj6/og73kuI3lkIzkuo7kuLvoibJcblxuXG4vLyB6LWluZGV4XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLWZpeGVkOiAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWJhY2tkcm9wOiAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1wb3B1cDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC1kaWFsb2c6ICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtbG9hZGVyOiAgICAgICAgICAgIDEwODAgIWRlZmF1bHQ7XG4kemluZGV4LXRvYXN0OiAgICAgICAgICAgICAxMDkwICFkZWZhdWx0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */\n", ""]);
	
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
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2015-12-27 17:37:48\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 22:56:56\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 00:34:39\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n/* toast begin */\n.toast {\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  text-align: center;\n  border-radius: 0.08rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1090;\n  padding: 0.2rem 0.4rem;\n  max-width: 4rem;\n  width: auto;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .toast.transition-in {\n    opacity: 1;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1); }\n  .toast.transition-out {\n    opacity: 0;\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815); }\n\n.toast-title {\n  font-weight: normal;\n  font-size: 0.28rem; }\n\n.toast-body {\n  font-size: 0.24rem;\n  margin-top: 0.1rem; }\n\n.tosat.toast-white {\n  color: #3d4145;\n  background-color: rgba(255, 255, 255, 0.95); }\n\n/* toast end */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9hc3Quc2NzcyIsImV4dC9fYm9yZGVyLW1peGluLnNjc3MiLCJfc2V0dGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQ0xGOzs7Ozs7OztFQVFFO0FEWUYsaUJBQWlCO0FBRWpCLE1BQU0sQ0FBQztFQUNILGdCQUFnQixFQVRXLG1CQUFJO0VBVS9CLEtBQUssRUFYc0IsSUFBSTtFQVkvQixVQUFVLEVBQUUsTUFBTztFQUNuQixhQUFhLEVBZmMsT0FBTztFQWdCbEMsUUFBUSxFQUFFLFFBQVM7RUFDbkIsR0FBRyxFQUFFLEdBQUk7RUFDVCxJQUFJLEVBQUUsR0FBSTtFQUNWLE9BQU8sRUVtQmdCLElBQUk7RUZsQjNCLE9BQU8sRUFyQm9CLE1BQU0sQ0FBQyxNQUFNO0VBc0J4QyxTQUFTLEVBcEJrQixJQUFNO0VBcUJqQyxLQUFLLEVBQUUsSUFBSztFQUNaLE9BQU8sRUFBRSxDQUFFO0VBRVgsaUJBQWlCLEVBQUUsb0JBQVcsQ0FBVSxZQUFLO0VBQzdDLFNBQVMsRUFBRSxvQkFBVyxDQUFVLFlBQUs7RUFDckMsMkJBQTJCLEVBQUUsMEJBQTJCO0VBQ3hELDJCQUEyQixFQUFFLDBCQUEyQjtFQUN4RCxtQkFBbUIsRUFBRSwwQkFBMkI7RUFDaEQsbUJBQW1CLEVBQUUsa0JBQW1CO0VBQ3hDLG1CQUFtQixFQUFFLHFDQUFzQyxHQWdCOUQ7RUFwQ0QsTUFBTSxBQXNCRCxjQUFjLENBQUM7SUFDWixPQUFPLEVBQUUsQ0FBRTtJQUNYLDJCQUEyQixFQUFFLEtBQU07SUFDbkMsbUJBQW1CLEVBQUUsS0FBTTtJQUMzQixpQkFBaUIsRUFBRSxvQkFBVyxDQUFVLFFBQUs7SUFDN0MsU0FBUyxFQUFFLG9CQUFXLENBQVUsUUFBSyxHQUN4QztFQTVCTCxNQUFNLEFBNkJELGVBQWUsQ0FBQztJQUNiLE9BQU8sRUFBRSxDQUFFO0lBQ1gsMkJBQTJCLEVBQUUsS0FBTTtJQUNuQyxtQkFBbUIsRUFBRSxLQUFNO0lBQzNCLGlCQUFpQixFQUFFLG9CQUFXLENBQVUsWUFBSztJQUM3QyxTQUFTLEVBQUUsb0JBQVcsQ0FBVSxZQUFLLEdBQ3hDOztBQUdMLFlBQVksQ0FBQztFQUNULFdBQVcsRUFBRSxNQUFPO0VBQ3BCLFNBQVMsRUFBRSxPQUFRLEdBQ3RCOztBQUVELFdBQVcsQ0FBQztFQUNSLFNBQVMsRUFBRSxPQUFRO0VBQ25CLFVBQVUsRUFBRSxNQUFPLEdBQ3RCOztBQUVELE1BQU0sWUFBWSxDQUFDO0VBQ2YsS0FBSyxFRTNDa0MsT0FBTztFRjRDOUMsZ0JBQWdCLEVBdERXLHlCQUFJLEdBdURsQzs7QUFHRCxlQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvdG9hc3QuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTUtMTItMjcgMTc6Mzc6NDhcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0yNSAyMjo1Njo1NlxuKi9cblxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xuQGltcG9ydCBcIi4uL19zZXR0aW5nLnNjc3NcIjtcblxuJHRvYXN0LXBhZGRpbmc6ICAgICAgICAgICAgICAgIDAuMnJlbSAwLjRyZW07XG4kdG9hc3QtcmFkaXVzOiAgICAgICAgICAgICAgICAgMC4wOHJlbTtcbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICA0LjByZW07XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgI2ZmZjtcbiR0b2FzdC1iZy1jb2xvcjogICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuODUpO1xuXG4vLyB0aGVtZSB3aGl0ZVxuJHRvYXN0LXdoaXRlLWNvbG9yOiAgICAgICAgICAgICRjb2xvci10ZXh0O1xuJHRvYXN0LXdoaXRlLWJnLWNvbG9yOiAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG5cbi8qIHRvYXN0IGJlZ2luICovXG5cbi50b2FzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvYXN0LWJnLWNvbG9yO1xuICAgIGNvbG9yOiAkdG9hc3QtY29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICR0b2FzdC1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB6LWluZGV4OiAkemluZGV4LXRvYXN0O1xuICAgIHBhZGRpbmc6ICR0b2FzdC1wYWRkaW5nO1xuICAgIG1heC13aWR0aDogJHRvYXN0LW1heC13aWR0aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMTg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMTg1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm07XG5cbiAgICAmLnRyYW5zaXRpb24taW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgIH1cbiAgICAmLnRyYW5zaXRpb24tb3V0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwLjgxNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMC44MTUpO1xuICAgIH1cbn1cblxuLnRvYXN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMC4yOHJlbTtcbn1cblxuLnRvYXN0LWJvZHkge1xuICAgIGZvbnQtc2l6ZTogMC4yNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjFyZW07XG59XG5cbi50b3NhdC50b2FzdC13aGl0ZSB7XG4gICAgY29sb3I6ICR0b2FzdC13aGl0ZS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9hc3Qtd2hpdGUtYmctY29sb3I7XG59XG5cblxuLyogdG9hc3QgZW5kICovXG4iLCIvKiBcbiogQEF1dGhvcjogc2h1bmppbmNoYW5cbiogQERhdGU6ICAgMjAxNi0wMS0yMyAwMTowMTowM1xuKiBATGFzdCBNb2RpZmllZCBieTogICBzaHVuamluY2hhblxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTAxLTI1IDAwOjM0OjM5XG4qIOaooeaLn+S4gOWDj+e0oFxuKiBAdXNhZ2U6XG4qIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgQGluY2x1ZGUgYm9yZGVyKGJvdHRvbSwgI2FiY2RlZikgfVxuKi9cblxuLy8g57q15ZCRXG4lYm9yZGVyLXBvcnRyYWl0IHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbn1cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuQG1peGluIGJvcmRlcigkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJDb2xvcjogJGNvbG9yLWJvcmRlcikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGltcG9ydCBcImV4dC9fbWl4aW4uc2Nzc1wiO1xuQGltcG9ydCBcImV4dC9fYm9yZGVyLW1peGluLnNjc3NcIjtcblxuLy8gX3NldHRpbmcuc2NzcyDmlofku7bph4znmoTlj5jph4/kuI3lhYHorrjpmo/mhI/kv67mlLlcblxuLy8gZm9udOebuOWFs1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiRmb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAwLjI4cmVtICFkZWZhdWx0OyBcbiRmb250LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFNUSGVpVGksIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuXG5cbi8vIOS4u+iJslxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGNvbG9yLXByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICMxYWJjOWMgIWRlZmF1bHQ7XG4kY29sb3ItZGFuZ2VyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Y2MzgzYSAhZGVmYXVsdDtcbiRjb2xvci13YXJuaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjYwICFkZWZhdWx0O1xuJGNvbG9yLXN1Y2Nlc3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICM0Y2Q5NjQgIWRlZmF1bHQ7XG5cbiRjb2xvci1wcmltYXJ5LWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICAjMTdBOThDICFkZWZhdWx0O1xuJGNvbG9yLWRhbmdlci1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3ItZGFuZ2VyLCAxMCUpICFkZWZhdWx0O1xuJGNvbG9yLXdhcm5pbmctYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3Itd2FybmluZywgMTAlKSAhZGVmYXVsdDtcbiRjb2xvci1zdWNjZXNzLWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGNvbG9yLXN1Y2Nlc3MsIDEwJSkgIWRlZmF1bHQ7XG5cbiRjb2xvci1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZGJkYmRiICFkZWZhdWx0OyAgLy8g5YiG5Ymy57q/55qE6aKc6ImyXG4kY29sb3ItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2YzZjRmNSAhZGVmYXVsdDsgLy8g6IOM5pmv6ImyXG4kY29sb3ItdGV4dDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzNkNDE0NSAhZGVmYXVsdDsgLy8g5paH5qGI6ImyXG4kY29sb3ItdGV4dC1zZWNvbmRhcnk6ICAgICAgICAgICAgICAgICAgICAgIzVmNjQ2ZSAhZGVmYXVsdDsgLy8g5qyh57qn5paH5qGIXG4kY29sb3ItdGV4dC1ncmF5OiAgICAgICAgICAgICAgICAgICAgICAgICAgIzk5OSAhZGVmYXVsdDsgLy8g54Gw6Imy5paH5qGIXG4kY29sb3ItdGV4dC1ncmF5LWxpZ2h0OiAgICAgICAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDsgLy8g5pu054Gw6Imy5paH5qGIXG5cblxuLy8g6ZO+5o6l6ImyXG4kY29sb3ItbGluazogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLXRleHQgIWRlZmF1bHQ7IC8vIOmTvuaOpeiJsuacieWPr+iDveS4jeWQjOS6juS4u+iJslxuJGNvbG9yLWxpbmstYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkY29sb3ItdGV4dCwgMTAlKSAhZGVmYXVsdDsgLy8g6ZO+5o6l6Imy5pyJ5Y+v6IO95LiN5ZCM5LqO5Li76ImyXG5cblxuLy8gei1pbmRleFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LW5hdmJhci1maXhlZDogICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1iYWNrZHJvcDogICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wdXA6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtZGlhbG9nOiAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LWxvYWRlcjogICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuJHppbmRleC10b2FzdDogICAgICAgICAgICAgMTA5MCAhZGVmYXVsdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ== */\n", ""]);
	
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
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2015-12-30 23:47:50\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 22:51:34\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 00:34:39\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n.tab-content-pane {\n  width: 100%;\n  display: none; }\n  .tab-content-pane.active {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFiLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQ0xGOzs7Ozs7OztFQVFFO0FES0YsaUJBQWlCLENBQUM7RUFDZCxLQUFLLEVBQUUsSUFBSztFQUNaLE9BQU8sRUFBRSxJQUFLLEdBSWpCO0VBTkQsaUJBQWlCLEFBR1osT0FBTyxDQUFDO0lBQ0wsT0FBTyxFQUFFLEtBQU0sR0FDbEIiLCJmaWxlIjoiY29tcG9uZW50cy90YWIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4qIEBBdXRob3I6IHNodW5qaW5jaGFuXG4qIEBEYXRlOiAgIDIwMTUtMTItMzAgMjM6NDc6NTBcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgc2h1bmppbmNoYW5cbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wMS0yNSAyMjo1MTozNFxuKi9cblxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xuQGltcG9ydCBcIi4uL19zZXR0aW5nLnNjc3NcIjtcblxuXG4udGFiLWNvbnRlbnQge31cblxuLnRhYi1jb250ZW50LXBhbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG4iLCIvKiBcbiogQEF1dGhvcjogc2h1bmppbmNoYW5cbiogQERhdGU6ICAgMjAxNi0wMS0yMyAwMTowMTowM1xuKiBATGFzdCBNb2RpZmllZCBieTogICBzaHVuamluY2hhblxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTAxLTI1IDAwOjM0OjM5XG4qIOaooeaLn+S4gOWDj+e0oFxuKiBAdXNhZ2U6XG4qIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgQGluY2x1ZGUgYm9yZGVyKGJvdHRvbSwgI2FiY2RlZikgfVxuKi9cblxuLy8g57q15ZCRXG4lYm9yZGVyLXBvcnRyYWl0IHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbn1cbi8vIOaoquWQkVxuJWJvcmRlci1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xufVxuQG1peGluIGJvcmRlcigkZGlyZWN0aW9uOiB0b3AsICRib3JkZXJDb2xvcjogJGNvbG9yLWJvcmRlcikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICAvLyBAZXh0ZW5kIGJvcmRlci1wb3J0cmFpdCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHRiIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oI2RkZCkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweCwgMXB4IDEwMCUsIDEwMCUgMXB4LCAxcHggMTAwJTsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7IC8qbm8qL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ== */\n", ""]);
	
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
	exports.push([module.id, "@charset \"UTF-8\";\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-08 17:28:27\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-10 14:13:44\n*/\n/* \n* @Author: shunjinchan\n* @Date:   2016-01-23 01:01:03\n* @Last Modified by:   shunjinchan\n* @Last Modified time: 2016-01-25 00:34:39\n* 模拟一像素\n* @usage:\n* @media screen and (-webkit-min-device-pixel-ratio: 2) { @include border(bottom, #abcdef) }\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3dpcGVyLnNjc3MiLCJleHQvX2JvcmRlci1taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7RUFLRTtBQ0xGOzs7Ozs7OztFQVFFIiwiZmlsZSI6ImNvbXBvbmVudHMvc3dpcGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE2LTAxLTA4IDE3OjI4OjI3XG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMTAgMTQ6MTM6NDRcbiovXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcbkBpbXBvcnQgXCIuLi9fc2V0dGluZy5zY3NzXCI7XG5cbi5zd2lwZXIge1xuICAgIFxufSIsIi8qIFxuKiBAQXV0aG9yOiBzaHVuamluY2hhblxuKiBARGF0ZTogICAyMDE2LTAxLTIzIDAxOjAxOjAzXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIHNodW5qaW5jaGFuXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDEtMjUgMDA6MzQ6Mzlcbiog5qih5ouf5LiA5YOP57SgXG4qIEB1c2FnZTpcbiogQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgeyBAaW5jbHVkZSBib3JkZXIoYm90dG9tLCAjYWJjZGVmKSB9XG4qL1xuXG4vLyDnurXlkJFcbiVib3JkZXItcG9ydHJhaXQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xufVxuLy8g5qiq5ZCRXG4lYm9yZGVyLWxhbmRzY2FwZSB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTsgLypubyovXG59XG5AbWl4aW4gYm9yZGVyKCRkaXJlY3Rpb246IHRvcCwgJGJvcmRlckNvbG9yOiAkY29sb3ItYm9yZGVyKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIEBpZiAkZGlyZWN0aW9uID09IHRvcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKTtcbiAgICAgICAgICAgIC8vIEBleHRlbmQgYm9yZGVyLXBvcnRyYWl0KCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHg7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gYm90dG9tIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4OyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gdGIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjUsICRib3JkZXJDb2xvciksIHRvKCRib3JkZXJDb2xvcikpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDFweDsgLypubyovXG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBhbGwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgJGJvcmRlckNvbG9yKSwgdG8oJGJvcmRlckNvbG9yKSksIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygkYm9yZGVyQ29sb3IpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCAkYm9yZGVyQ29sb3IpLCB0bygjZGRkKSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMXB4LCAxcHggMTAwJSwgMTAwJSAxcHgsIDFweCAxMDAlOyAvKm5vKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxcHgsIDFweCAxMDAlLCAxMDAlIDFweCwgMXB4IDEwMCU7IC8qbm8qL1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDsgLypubyovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */\n", ""]);
	
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