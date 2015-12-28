# popup

popup 是一种可以包含任何 html 内容的弹出窗口（全屏），依赖 `backdrop.js`

## popup 布局

```
<div class="popup">
    <div class="popup-container"></div>
</div>

```

## configs

| Config | Description |
| :------------- | :------------- |
| target | 目标弹窗，是一个 jqeury 对象，若是使用 open(param) 方法调用，那么 param 的优先级大于 target |
| backdrop | 蒙层，默认为 true |
| extraClass | 节点附加 class，方便自行控制不同场景的样式 |
| html | 弹窗内容，默认为空。若是 open(param)，param 为 string 类型的时候，默认认为这是需要插入的 html |

举个例子：

```
var popup = new Popup({
    target: $('.popup'),
    backdrop: false,
    extraClass: 'popup-black',
    html: '弹窗内容'
})

```

## popup Events

| Events | Target | Description |
| :------------- | :------------- |
| open       | $('.popup')       | 打开动画执行之前       |
| opened       | $('.popup')      | 打开动画执行完之后       |
| close       | $('.popup')       | 关闭动画执行之前       |
| closed       | $('.popup')       | 关闭动画执行之后       |

举个例子：

```
$('.popup').on('open', function() {});

```
