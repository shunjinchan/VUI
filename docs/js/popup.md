# popup

popup 是一种可以包含任何 html 内容的弹出窗口（默认全屏）

## popup 布局

#### 默认布局

```html
<div class="popup">
    <div class="popup-body"></div>
</div>

```

#### 复杂布局

```html
<div class="popup">
    <div class="popup-header top-bar border-b">
        <h3>标题</h3>
        <a href="" class="close" data-toggle="popup" data-action="close"></a>
    </div>
    <div class="popup-body"></div>
    <div class="popup-footer bottom-bar border-t">
        <a href="javascript:;" class="popup-button">确定</a>
    </div>
</div>

```

## 方法

| 方法 | Description |
| :------------- | :------------- |
| open | 打开弹窗，参数: `configs` 配置 |
| close | 关闭弹窗，无参数 |

## configs

| Config | Description |
| :------------- | :------------- |
| target | 目标弹窗，是一个 jqeury 对象，若是使用 `open(param)` 方法调用，那么 param 的优先级大于 target |
| backdrop | 蒙层，默认为 true |
| box | popup box |
| extraClass | 节点附加 class，方便自行控制不同场景的样式 |
| html | popup html，当使用该参数时，title、body都不要再配置了 |
| title | 标题，header 不存在的话此配置无用 |
| body | 弹窗内容，默认为空。若是 `open(param)`，param 为 string 类型的时候，默认认为这是需要插入的 html |
| direction | 动画开始方向，默认 `from-bottom`，可选：`from-top`、`from-left`、`from-right` |
| transitionOpen | popup 打开时的动画，默认是 `slide-in` |
| transitionClose | popup 关闭时的动画，默认是 `slide-out` |

举个例子：

```javascript
var popup = new Popup();

popup.open({
    target: $('.popup'),
    backdrop: false,
    extraClass: 'popup-black',
    box: '<div class="popup"><div class="popup-body"></div></div>',
    body: null,
    title: '日了个穿山甲',
    direction: 'from-top',
    transitionOpen: 'slide-in',
    transitionClose: 'slide-out'
});

```

## popup Events

| Events | Target | Description |
| :------------- | :------------- |
| open       | $('.popup')       | 打开动画执行之前       |
| opened       | $('.popup')      | 打开动画执行完之后       |
| close       | $('.popup')       | 关闭动画执行之前       |
| closed       | $('.popup')       | 关闭动画执行之后       |

举个例子：

```javascript
$('.popup').on('open', function() {});
$('.popup').on('opened', function() {});
$('.popup').on('close', function() {});
$('.popup').on('closed', function() {});

```
