# dialog

dialog 对话框

# dialog 布局

```html
<div class="dialog">
    <div class="dialog-container">
        <div class="dialog-title">title</div>
        <div class="dialog-body">body</div>
    </div>
    <div class="dialog-footer"><a href="javascript:;" class="dialog-button">确认</a></div>
</div>

```

## 方法

| 方法 | Description |
| :------------- | :------------- |
| open | 打开对话框，参数：configs，当定制的几个方法无法满足需求时，使用该方法 |
| close | 关闭对话框，参数：`callback` |
| alert | 警告对话框，参数：`alert(content[内容], title[标题], callbackOk[点击确认回调函数])` |
| confirm | 确认对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])` |
| prompt | 提示对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：`value`，文本输入框的值。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数 |
| password | 输入密码对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：`password`，密码输入框的值。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数  |
| login | 登录对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：(username[ 用户名], password(密码))。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数 |
| register | 注册对话框，参数：`confirm(content[内容], title[标题], callbackOk[确认函数回调函数], callbackCancel[取消按钮回调函数])`。回调函数的参数：(username[ 用户名], password(密码), authCode[验证码])。点击确认按钮不自动关闭弹窗，需手动调用 `close` 函数 |
| actionSheet | 底部弹出的选择对话框，取消按钮默认关闭弹窗。参数：configs |

## configs

| Configs | Description |
| :------------- | :------------- |
| backdrop       | true       |

## 例子

### alert

```javascript


```
