# EventEmitter

发布－订阅事件

## 方法

### on

事件订阅，参数：

- key，自定义事件类型
- fn，事件发布时触发的回调函数

| 方法 | Description |
| :------------- | :------------- |
| on | 事件订阅 |
| emit | 事件发布 |
| remove | 事件移除 |
| once | 事件订阅（只允许订阅一次），如果多次使用，以最后一次订阅的为准 |

例子：

```javascript
var emitter = new EventEmitter();

```
