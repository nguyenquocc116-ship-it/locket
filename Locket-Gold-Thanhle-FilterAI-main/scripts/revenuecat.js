/***********************************************
> RevenueCat Locket Gold Unlocker
> Tác giả: Thanh Lê (@thanhlh05)
> Hỗ trợ: Loon, Surge, Shadowrocket, Quantumult X
***********************************************/

(function () {
    const req = typeof $request !== "undefined" ? $request : null;
    const resp = typeof $response !== "undefined" ? $response : null;

    if (!resp || !resp.body) {
        return $done({});
    }

    let obj = {};
    try {
        obj = JSON.parse(resp.body);
    } catch (e) {
        obj = {};
    }

    if (!obj || typeof obj !== "object") {
        obj = {};
    }

    obj.Attention = "Chúc mừng bạn! Bạn đã được kích hoạt Locket Gold VIP✨";
    obj.subscriber = obj.subscriber || {};
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};

    // Cấu hình thông tin mua hàng hợp lệ (sử dụng ngày trong quá khứ và hạn 2099 tránh lỗi Date parser)
    const purchaseDate = "2024-01-01T00:00:00Z";
    const expiresDate = "2099-12-31T23:59:59Z";

    const subscriptionData = {
        auto_resume_date: null,
        display_name: "locket_1600_1y",
        is_sandbox: false,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: {
            amount: 399000.0,
            currency: "VND"
        },
        expires_date: expiresDate,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: purchaseDate,
        purchase_date: purchaseDate,
        store: "app_store",
        store_transaction_id: "2000001108724193"
    };

    const entitlementData = {
        grace_period_expires_date: null,
        purchase_date: purchaseDate,
        product_identifier: "locket_1600_1y",
        expires_date: expiresDate
    };

    // Đăng ký toàn bộ product IDs phổ biến của Locket
    const productIds = [
        "locket_1600_1y",
        "locket_gold_yearly",
        "locket_gold_monthly",
        "locket_3600_1y"
    ];

    for (let pid of productIds) {
        obj.subscriber.subscriptions[pid] = Object.assign({}, subscriptionData, {
            display_name: pid
        });
    }

    // Đăng ký toàn bộ key Entitlements để tương thích mọi phiên bản Locket (Gold, gold, pro)
    const entitlementKeys = ["Gold", "gold", "pro"];
    for (let key of entitlementKeys) {
        obj.subscriber.entitlements[key] = Object.assign({}, entitlementData);
    }

    $done({
        body: JSON.stringify(obj)
    });
})();
