# countdown

倒计时

## countdown 布局

```
<span class="countdown-year">00</span>
<span class="countdown-text">年</span>
<span class="countdown-day">00</span>
<span class="countdown-text">天</span>
<span class="countdown-hour">01</span>
<span class="countdown-text">时</span>
<span class="countdown-hour">29</span>
<span class="countdown-text">分</span>
<span class="countdown-sec">24</span>
<span class="countdown-text">秒</span>
<span class="countdown-tita">8</span>

```

## 方法

| 方法 | Description |
| :------------- | :------------- |
| conf | 为实例对象添加配置，也可在实例化对象的时候设置配置（内部同样调用的是 conf 方法），建议使用 conf 方法设置配置信息。参数：`configs` 配置信息 |
| start | 倒计时开始 |
| stop | 倒计时暂停 |
| getDiffDate | 获取计算过后的时间差，返回一个字典格式对象。通常不需要使用到该方法，在一些个性化需求的时候使用，例如：默认渲染的 dom 结构不符合要求 |

## configs

| configs | Description |
| :------------- | :------------- |
| date | 倒计时结束时间，以当前客户端时间为准，Date() 实例 |
| diff | 倒计时，如果存在 diff、date 参数都存在，则以 diff 为准 |
| interval | 时间间隔 |
| separator | 分隔符，如果不使用该参数，则默认是 年、天、时、分、秒 |
| onEnd | 倒计时结束的时候的回调函数 |
| onchange | 倒计时更新的时候的回调函数，更新周期是interval的值，非必要不建议使用该方法 |
| year | 年，默认是 false。year、day、hour、min、sec、millisec、tita 都为布尔值 |
| day | 天 |
| hour | 时 |
| min | 分 |
| sec | 秒 |
| millisec | 毫秒 |
| tita | 呃呃 |

## 例子

```
var countdown = new Countdown();

countdown.conf({
    date: new Date('January 21, 2017 03:00:00'),
    container: $('#countdown'),
    tita: true,
    year: true,
    interval: 100,
    onEnd: function() {
        console.log('end');
    },
    onchange: function() {
        console.log('change');
    },
    separator: false
});

countdown.start();

```
