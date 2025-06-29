
/*
 * 作业帮
[rewrite_local]
^https:\/\/(napi\.zybang\.com\/napi\/user\/userinfo|apivip\.zuoyebang\.com\/(viponline\/homework\/viptab|vipols\/composition\/main)) url script-response-body https://raw.githubusercontent.com/fqw000/tools/main/script/zuoyebang.js
^https:\/\/(search\.zybang\.com|apivip\.zuoyebang\.com\/vipols) url script-request-header https://raw.githubusercontent.com/fqw000/tools/main/script/zuoyebang.js

[mitm]
hostname = napi.zybang.com, apivip.zuoyebang.com, search.zybang.com
*/

// 核心功能：修改作业帮VIP请求头和响应体
const url = $request.url;
const newCookie = "skey=;device_id=;qt=;identity=;uid=;";

if ($request && url.match(/^https:\/\/(search\.zybang\.com|apivip\.zuoyebang\.com\/vipols)/)) {
    // 修改请求头中的Cookie
    let headers = $request.headers;
    headers.Cookie = newCookie;
    $done({ headers });
} else if ($response) {
    let body = $response.body;
    // 根据不同URL路径修改VIP信息
    if (url.includes("user/student")) {
        body = body
            .replace(/"vipStatus":\d+/g, '"vipStatus":1')
            .replace(/"level":\d+/g, '"level":1')
            .replace(/"uname":"[^"]+"/g, '"uname":"作业帮破解会员"');
    }
    if (url.includes("vipinfo")) {
        body = body.replace(/"vipInfo":\{[^}]+\}/g, '"vipInfo":{"isVip":true,"isYear":true,"vipLevel":1,"vipEndTime":"2099-01-01"}');
    }
    if (url.includes("viplevel")) {
        body = body.replace(/"vipInfo":\{[^}]+\}/g, '"vipInfo":{"isVip":true,"isYear":true,"vipLevel":1,"vipEndTime":"2099-01-01"}');
    }
    $done({ body });
} else {
    $done({});
}
