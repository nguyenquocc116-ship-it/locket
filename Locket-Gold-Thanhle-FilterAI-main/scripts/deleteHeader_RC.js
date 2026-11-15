/***********************************************
> deleteHeader by Thanh Lê (@thanhlh05)
> Hỗ trợ: Loon, Surge, Shadowrocket, Quantumult X
***********************************************/

(function () {
    const headersToStrip = [
        'x-revenuecat-etag',
        'if-none-match',
        'if-modified-since',
        'x-goog-if-none-match',
        'etag',
        'last-modified'
    ];

    let modifiedHeaders = (typeof $request !== "undefined" && $request && $request.headers) ? Object.assign({}, $request.headers) : {};

    for (let key of Object.keys(modifiedHeaders)) {
        if (headersToStrip.includes(key.toLowerCase())) {
            delete modifiedHeaders[key];
        }
    }

    $done({ headers: modifiedHeaders });
})();
