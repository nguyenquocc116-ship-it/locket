// ========= ID ========= //
const mapping = {
  'Locket': ['Gold']
};

// =========   Phần cố định  ========= // 
var ua = (typeof $request !== "undefined" && $request && $request.headers) ? 
  ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";

var obj = {};
try {
  obj = (typeof $response !== "undefined" && $response && $response.body) ? JSON.parse($response.body) : {};
} catch (e) {
  obj = {};
}

if (!obj || typeof obj !== "object") {
  obj = {};
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

obj.Attention = "Chúc mừng bạn! Bạn đã được kích hoạt Locket Gold VIP✨";

var NMS = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "annual",
  price: {
    "amount": 399000.0,
    "currency": "VND"
  },
  expires_date: "2099-12-31T23:59:59Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-01-01T00:00:00Z",
  purchase_date: "2024-01-01T00:00:00Z",
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

var locketGold = {
  grace_period_expires_date: null,
  purchase_date: "2024-01-01T00:00:00Z",
  product_identifier: "locket_gold_yearly",
  expires_date: "2099-12-31T23:59:59Z"
};

// Luôn kích hoạt mọi gói Gold và Pro cho Locket
obj.subscriber.subscriptions["locket_1600_1y"] = NMS;
obj.subscriber.subscriptions["locket_gold_yearly"] = NMS;
obj.subscriber.entitlements["Gold"] = locketGold;
obj.subscriber.entitlements["gold"] = locketGold;
obj.subscriber.entitlements["pro"] = locketGold;

$done({
  status: 200,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache, no-store, must-revalidate"
  },
  body: JSON.stringify(obj)
});
