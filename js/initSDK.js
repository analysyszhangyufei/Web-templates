var config = window.localStorage.getItem('ARK_CONFIG')
if (config) {
    config = JSON.parse(config)
} else {
    alert('请前往设置配置页面设置初始化内容！')
}
(function (c) {
    if (!c) {
        return
    }
    window.AnalysysAgent = window.AnalysysAgent || {}
    var a = window.AnalysysAgent || {}
    var ans = ['identify', 'alias', 'reset', 'track', 'profileSet', 'profileSetOnce', 'profileIncrement', 'profileAppend', 'profileUnset', 'profileDelete', 'registerSuperProperty', 'registerSuperProperties', 'unRegisterSuperProperty', 'clearSuperProperties', 'getSuperProperty', 'getSuperProperties', 'pageView', 'getDistinctId']
    a['config'] = c
    a['param'] = []
    function factory (b) {
        return function () {
            a['param'].push([b, arguments])
            return window.AnalysysAgent
        }
    }
    for (var i = 0; i < ans.length; i++) {
        a[ans[i]] = factory(ans[i])
    }
    if (c.name) {
        window[c.name] = a
    }
    var date = new Date();
    var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate());

    var d = document,
        c = d.createElement('script'),
        n = d.getElementsByTagName('script')[0];
    c.type = 'text/javascript';
    c.async = true;
    c.id = 'ARK_SDK';
    c.src = config.sdkDirectory + 'AnalysysAgent_JS_SDK.min.js' + '?v=' + time; //JS SDK存放地址
    n.parentNode.insertBefore(c, n);
})(config)