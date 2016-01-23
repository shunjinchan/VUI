# dialog

对话框，dialog 从页面上弹出一块内容，无需占满整个屏幕

## dialog 布局

```html
<div class="dialog">
    <div class="dialog-container">
        <div class="dialog-title">title</div>
        <div class="dialog-body">body</div>
    </div>
    <div class="dialog-footer"><a href="javascript:;" class="dialog-button">确认</a></div>
</div>

```

actionsheet 有独有的结构与样式

## 方法

| 方法 | Description |
| :------------- | :------------- |
| open | 打开对话框，参数：configs，当定制的几个方法无法满足需求时，使用该方法 |
| close | 关闭对话框，参数：`callback` |
| alert | 警告对话框 |
| confirm | 确认对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])` |
| prompt | 提示对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：`value`，文本输入框的值。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数 |
| password | 输入密码对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：`password`，密码输入框的值。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数  |
| login | 登录对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：(username[ 用户名], password(密码))。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数 |
| register | 注册对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：(username[ 用户名], password(密码), authCode[验证码])。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数 |
| actionSheet | 底部弹出的选择对话框，取消按钮默认关闭弹窗。参数：configs |

其中 alert、confirm、prompt、password、login、register 这几个方法，都是 alert 类型的弹窗。alert 窗口里的按钮一般是「确定」或「取消」。alert 弹窗一般是锁住的，意味着你不能通过在这个弹窗之外的任何操作来关掉它。你需要准确理解 alert 弹窗里的内容并按它提示的操作，才能继续往下。

**actionsheet：** 上拉菜单，不锁弹窗，即点击 actionsheet 之外的区域可关闭它。当进行一些比较危险的操作，alert、confirm 弹窗不适合或者无法满足需求，使用 actionsheet。例如：iOS 系统中，删除相片的时候

## configs

| Configs | Description |
| :------------- | :------------- |
| backdrop       | true       |
| extraClass | 当默认样式无法满足需求时，切记**不要修改**默认的 css，使用 extraClass 配置项为 dialog 添加独有的类添加个性化样式 |
| title       | 标题       |
| content       | 内容       |
| afterConetent       | 紧随 content 之后的内容       |
| animation       | 动画，默认时 `scale`       |
| verticalButton       | 是否使用垂直方向的按钮       |
| buttons       | 按钮，[Array]       |


## 例子

```javascript
var dialog = new Dialog();

```

### alert

参数：

- `content`，内容
- `title`，标题
- `callbackOk`，点击确认回调函数

```javascript
dialog.alert('删除**，其所有数据也将被删除', '删除**', function() {
    // 删除 ** 的代码
});

```

除了 actionsheet 之外，其他所有的弹窗方法内部调用的都是 open 方法

```javascript
dialog.open({
    title: title || '',
    content: content || '',
    buttons: [{
        text: defaults.dialogButtonCancel,
        onClick: callbackCancel
    }, {
        text: defaults.dialogButtonOk, // 文案
        onClick: callbackOk, // 回调函数
        bold: true, // 字体是否加粗，默认为 false
        close: false, // 点击是否关闭，默认为 true
    }]
});

```

#### 按钮配置

buttons 是一个数组，数组的每一项就是一个按钮，可配多个。默认方法中，只有 alert、 confirm 才单独设置配置，其他几种方法以其他方式绑定回调函数


 其他弹窗使用方式大同小异
