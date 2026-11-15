/***********************************************
> Locket Change Profile Info Handler
> Tác giả: Thanh Lê (@thanhlh05)
> Hỗ trợ: Loon, Surge, Shadowrocket, Quantumult X
> Tính năng:
>   - Đón bắt request changeProfileInfo và phản hồi giả lập HTTP 200 OK
>   - Đảm bảo cài đặt huy hiệu "locket_gold" thành công tuyệt đối trên máy
>   - Xóa bỏ triệt để các header cache 304 gây đơ cấu hình
***********************************************/

(function () {
    const req = typeof $request !== "undefined" ? $request : null;
    const reqUrl = (req && req.url) ? req.url : "";

    // Nếu là request đổi thông tin hồ sơ (changeProfileInfo), trả về 200 OK giả lập
    if (reqUrl.includes("changeProfileInfo")) {
        return $done({
            response: {
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    data: { badge: "locket_gold", badge_tier: "gold", is_gold: true, success: true },
                    result: { badge: "locket_gold", badge_tier: "gold", is_gold: true, success: true }
                })
            }
        });
    }

    // Xóa header cache gây lỗi 304 Not Modified
    let headers = Object.assign({}, (req && req.headers) || {});
    const cacheHeaders = ['if-none-match', 'if-modified-since', 'x-revenuecat-etag', 'x-goog-if-none-match'];

    for (let k of Object.keys(headers)) {
        if (cacheHeaders.includes(k.toLowerCase())) {
            delete headers[k];
        }
    }

    $done({ headers: headers });
})();
