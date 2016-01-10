# tab

tab 切换

## tab 布局

```html
<div class="tab">
    <div class="tab-title">
        <a href="javascript:;" data-target="#pane1" class="tab-title-item active">title1</a>
        <a href="javascript:;" data-target="#pane2" class="tab-title-item">title2</a>
        <a href="javascript:;" data-target="#pane3" class="tab-title-item">title3</a>
    </div>
    <div class="tab-content">
        <div id="pane1" class="tab-content-pane active">pane1</div>
        <div id="pane2" class="tab-content-pane">pane2</div>
        <div id="pane3" class="tab-content-pane">pane3</div>
    </div>
</div>
```

样式：有两种样式，使用方法：`class="tab tab-border"`

## 方法

| 方法 | Description |
| :------------- | :------------- |
| init | 初始化方法，参数：`configs` 配置信息 |

## configs
| configs | Description |
| :------------- | :------------- |
| control | tab 切换触发按钮 |
| activeClass | 当前类，默认是 `active` |
| onchange | 切换时的回调函数，参数：onchange(curTrigger, curPane)，curTrigger 是当前触发按钮，curPane 是当前面板 |

例子：

```javascript
var tab = new Tab();

tab.init({
    control: $('.tab-title-item'),
    activeClass: 'current',
    onchange: function() {
        console.log('哈哈哈哈');
    }
});
```
