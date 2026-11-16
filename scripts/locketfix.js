// ============================================================
// Locket Remote Config Rewrite by NguyenQuocCuong
// Tác giả: NguyenQuocCuong
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// Locket Gold & Remote Config Unlocker VIP (Updated: Removed Certification Captions)
// ============================================================

var ua = (typeof $request !== "undefined" && $request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};
try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}
// Ép trạng thái cập nhật và phiên bản mới nhất theo thời gian thực để vô hiệu hóa cache cũ của iOS
obj.state = "UPDATE";
obj.templateVersion = String(Date.now());

obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

// ============================================================
// ============================================================
// 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
// ============================================================
Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
        app_icon_picker: "enabled",
        camera_roll: "enabled",
        camera_roll_video: "enabled",
        camera_roll_video_30s: "enabled",
        camera_roll_video_upload: "enabled",
        camera_roll_video_upload_30s: "enabled",
        camera_roll_longer_video: "enabled",
        camera_roll_longer_video_30s: "enabled",
        camera_theme: "enabled",
        locket_views: "enabled",
        long_captions: "enabled",
        longer_video: "enabled",
        longer_video_30s: "enabled",
        extended_video_30s: "enabled",
        photo_library_video: "enabled",
        photo_library_video_30s: "enabled",
        gallery_video: "enabled",
        gallery_video_30s: "enabled",
        can_upload_30s_video: "enabled",
        can_record_30s_video: "enabled",
        allow_longer_video_upload: "enabled",
        longer_video_upload: "enabled",
        unlimited_friends: "enabled",
        priority_support: "enabled",
        profile_badge: "enabled",
        profileBadge: "enabled",
        gold_since_badge: "enabled",
        goldSinceBadge: "enabled",
        gold_badge_profile_menu: "enabled",
        remove_ads: "enabled",
        video: "enabled",
        video_15s: "enabled",
        video_30s: "enabled",
        video_40s: "enabled",
        video_60s: "enabled",
        video_upload: "enabled",
        video_upload_30s: "enabled",
        custom_widget_frames: "enabled",
        streak_recovery: "enabled",
        streakRecovery: "enabled",
        streaks: "enabled",
        streak: "enabled",
        streak_visualizations: "enabled",
        streak_badge: "enabled",
        groups: "enabled",
        private_mode: "enabled",
        viewer_mode: "enabled",
        close_friends: "enabled",
        camera_filter_button: "enabled",
        camera_filters_button: "enabled",
        camera_filter_sheet: "enabled",
        camera_filters: "enabled",
        camera_filter: "enabled",
        filter: "enabled",
        filters: "enabled",
        photo_filters: "enabled",
        ai_filters: "enabled",
        holiday_effects: "enabled",
        holiday_filters: "enabled",
        holiday_filter: "enabled",
        ar_filters: "enabled",
        face_filters: "enabled",
        profile_cover: "enabled",
        profile_cover_photo: "enabled",
        profile_customization: "enabled"
    }),
    upsell_features: JSON.stringify({
        app_icon_picker: false,
        camera_roll: false,
        camera_theme: false,
        locket_views: false,
        remove_ads: false,
        custom_widget_frames: false,
        filter: false,
        filters: false,
        camera_filter: false,
        camera_filters: false,
        holiday_filter: false,
        holiday_filters: false,
        holiday_effects: false,
        ai_filter: false,
        ai_filters: false
    }),
    paywall_presentation_config: JSON.stringify({
        uid: "paywall_testflight",
        onboarding: false,
        after_sent_moment: false,
        after_moment: false,
        after_capture: false,
        on_foreground: false,
        holiday_effects: false,
        camera_filters: false,
        camera_filter: false,
        filters: false,
        filter: false,
        ai_filter: false,
        ai_filters: false,
        filtered_image: false,
        filtered_images: false,
        generate_filtered_image: false,
        interval: 2592000,
        profile_banner: true
    }),
    feature_discovery_popup_config: JSON.stringify({
        tag: "LOCKET GOLD NGUYENQUOCCUONG",
        tag_gradient: true,
        tag_style: "gold_gradient",
        title: "Đã Kich Hoạt 💛",
        feature_set: [
            {
                title: "Locket Gold VIP ✨",
                    body: "Thanks You💛",
                    imageURL: "https://raw.githubusercontent.com/nguyenquocc116-ship-it/locket/refs/heads/main/nametag.png"
            }
        ],
        primary_button_title: "Xong",
        campaign: "locket_gold_welcome_v3",
        start_at: "2020-01-01T00:00:00",
        end_at: "2099-12-31T23:59:59",
        use_local_time_zone: true
    }),
    android_subscribe_gold_button_enabled: "false",
    profile_badge_visible: "true",
    lunar_new_year_app_icon_enabled: "true",
  

    // BỘ CỜ MỞ KHÓA BỘ LỌC GOLD & TOÀN DIỆN
    country_code: "US",
    region_code: "US",
    is_us_user: "true",
    camera_filters_enabled: "true",
    camera_filter_enabled: "true",
    camera_filter_button_enabled: "true",
    camera_filters_button_enabled: "true",
    camera_filter_sheet_enabled: "true",
    show_filter_button: "true",
    show_filters_button: "true",
    camera_filter_enabled: "true",
    holiday_filters_enabled: "true",
    ai_filters_enabled: "true",
    camera_filter_gold_only: "false",
    camera_filters_gold_only: "false",
    holiday_filters_gold_only: "false",
    filter_gold_only: "false",
    filters_gold_only: "false",
    ai_filter_gold_only: "false",
    ai_filters_gold_only: "false",
    filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false",
    filter_upsell_enabled: "false",
    require_gold_for_filters: "false",
    require_gold_for_filter: "false",
    requires_gold_for_filters: "false",
    requires_gold_for_filter: "false",
    requires_gold_for_camera_filters: "false",
    camera_filter_requires_gold: "false",
    camera_filters_require_gold: "false",
    ai_filter_requires_gold: "false",
    ai_filters_require_gold: "false",
    filter_requires_gold: "false",
    filters_require_gold: "false",
    filtered_image_requires_gold: "false",
    filtered_images_require_gold: "false",
    filtered_image_gold_only: "false",
    filtered_images_gold_only: "false",
    free_filters_enabled: "true",
    filter_selection_enabled: "true",
    camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true",
    dismiss_filter_sheet_on_select: "true",
    is_gold: "true",
    has_gold: "true",
    is_gold_user: "true",
    user_is_gold: "true",
    gold_user: "true",
    gold_active: "true",
    all_filters_free: "true",
    unlocked_filters: "true",
    camera_filter_max_count: "50",
    max_camera_filters: "50"
});

// 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
// ============================================================
Object.assign(obj.entries, {
    history_ads_mode: "off",
    history_ads_prefetch_count: "0",
    history_ads_prefetch_immediate: "false",
    history_ads_prefetch_reroute: "false",
    history_ads_dynamic_insertion: "false",
    history_ads_refresh_prefetch_on_foreground: "false",
    history_ads_floor_price: "0",
    history_ads_floor_price_att: "0",
    history_ad_log_displayed_on_background: "false",
    history_ads_debug_menu: "false",
    sentry_sample_rate: "0",
    sentry_network_tracing: "false",
    sentry_performance_tracking: "false",
    sentry_trace_sample_rate: "0",
    sentry_profiles_sample_rate: "0"
});

// ============================================================
// ============================================================
// 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY (CHIP 45 GIÂY & BỘ LỌC PHOTOBOOTH)
// ============================================================
var MY_VIDEO_DURATION = 45.0;
var MAX_DURATION = MY_VIDEO_DURATION;
var QUALITY_MBPS = 0.6;
var durationStr = MY_VIDEO_DURATION.toString();
var MAX_SIZE_BYTES = 104857600; // 100MB

var cameraConfig = {
    gold_max_duration: MY_VIDEO_DURATION,
    goldMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION,
    maxDuration: MY_VIDEO_DURATION,
    ultra_wide: true,
    ultraWide: true,
    volume_button: true,
    volumeButton: true,
    flash_button: true,
    telephoto: true,
    srgb: true,
    lanczos: true,
    quality_mbps: 0.6,
    qualityMbps: 0.6
};

var cameraRollConfig = {
    gold_max_duration: MY_VIDEO_DURATION,
    goldMaxDuration: MY_VIDEO_DURATION,
    video_max_duration: MY_VIDEO_DURATION,
    videoMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION,
    maxDuration: MY_VIDEO_DURATION,
    trim_max_duration: MY_VIDEO_DURATION,
    trimMaxDuration: MY_VIDEO_DURATION,
    camera_roll_max_duration: MY_VIDEO_DURATION,
    camera_roll_video_max_duration: MY_VIDEO_DURATION,
    max_file_size: MAX_SIZE_BYTES,
    max_upload_bytes: MAX_SIZE_BYTES,
    max_size_bytes: MAX_SIZE_BYTES,
    quality_mbps: 0.6,
    qualityMbps: 0.6,
    flash_button: true
};

obj.entries.camera = JSON.stringify(cameraConfig);
obj.entries.camera_roll = JSON.stringify(cameraRollConfig);

// --- DUNG HỢP BỘ LỌC PHOTOBOOTH & FILTER KHUNG 49+ TỪ SRC HUY HIỆU ---
var customPhotoboothFilters = [
    {
        "uid": "ai_shipper_grab",
        "id": "ai_shipper_grab",
        "name": "Shipper Grab 5 Sao 🛵",
        "prompt": "Show the persons in the photo with the exact same pose and background, dressed authentically as a friendly Grab motorcycle driver and delivery shipper in Vietnam. Dress them in the iconic vibrant green Grab zip-up uniform jacket with white accents, wearing a matching green Grab motorcycle helmet. Keep the person's facial likeness, expression, eye gaze, pose, and background completely identical, perfectly photorealistic, modern iPhone camera look, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#00B14F",
            "#004F24"
        ],
        "captureButtonColors": [
            "#00B14F",
            "#004F24"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
            "sfSymbol": "bicycle",
            "emoji": "🛵"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEIxNEY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDRGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+btTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdSQUI8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_shipper_shopee",
        "id": "ai_shipper_shopee",
        "name": "Shipper ShopeeFood 🍊",
        "prompt": "Show the persons in the photo with the exact same pose and background, dressed authentically as a friendly ShopeeFood delivery shipper in Vietnam. Dress them in the iconic vibrant bright orange zip-up uniform jacket, wearing a matching orange ShopeeFood motorcycle helmet. Keep the person's facial likeness, expression, eye gaze, pose, and background completely identical, perfectly photorealistic, modern iPhone camera look, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#EE4D2D",
            "#FF7337"
        ],
        "captureButtonColors": [
            "#EE4D2D",
            "#FF7337"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "bag.fill",
            "emoji": "🍊"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRTREMkQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjczMzc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIT1BFRTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_film_vintage",
        "id": "color_film_vintage",
        "name": "Film Cổ Điển 90s",
        "prompt": "Show the persons in the photo with the exact same pose and background, captured with a nostalgic 1990s disposable film camera aesthetic, warm subtle grain, soft highlights, authentic vintage tones, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#F59E0B",
            "#D97706"
        ],
        "captureButtonColors": [
            "#F59E0B",
            "#D97706"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
            "sfSymbol": "camera.filters",
            "emoji": "🎞️"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Onu+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZJTE08L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_korean_glow",
        "id": "color_korean_glow",
        "name": "Hàn Quốc Da Trắng Hồng",
        "prompt": "Show the persons in the photo with the exact same pose and background, captured with a Korean beauty glow aesthetic, natural soft porcelain skin tone, delicate pink blush highlights, airy bright clean lighting, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#FB7185",
            "#FDA4AF"
        ],
        "captureButtonColors": [
            "#FB7185",
            "#FDA4AF"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "sparkles",
            "emoji": "🌸"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkNGRTg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUE4RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pyoPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Sy1HTE9XPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_black_white_noir",
        "id": "color_black_white_noir",
        "name": "Đen Trắng Nghệ Thuật",
        "prompt": "Show the persons in the photo with the exact same pose and background, captured in high-contrast cinematic black and white noir photography, deep velvety shadows, crisp specular highlights, rich monochrome tonal range, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#18181B",
            "#71717A"
        ],
        "captureButtonColors": [
            "#18181B",
            "#71717A"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "circle.lefthalf.filled",
            "emoji": "🎬"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjI5Mzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2QjcyODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+WpDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkImVzwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_golden_sunset",
        "id": "color_golden_sunset",
        "name": "Nắng Chiều Hoàng Hôn",
        "prompt": "Show the persons in the photo with the exact same pose and background, drenched in radiant golden hour sunset light, warm amber sun flares, glowing highlights, soft dreamy evening ambience, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#F97316",
            "#FBBF24"
        ],
        "captureButtonColors": [
            "#F97316",
            "#FBBF24"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "sun.horizon.fill",
            "emoji": "🌅"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNVTlNFVDwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_cyberpunk_neon",
        "id": "color_cyberpunk_neon",
        "name": "Cyberpunk Tokyo Neon",
        "prompt": "Show the persons in the photo with the exact same pose and background, illuminated by vivid electric cyan and magenta neon night lights, futuristic Tokyo cyberpunk alleyway reflections, atmospheric ambient haze, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#06B6D4",
            "#EC4899"
        ],
        "captureButtonColors": [
            "#06B6D4",
            "#EC4899"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
            "sfSymbol": "bolt.fill",
            "emoji": "⚡"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Pme+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5FT048L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_teal_orange",
        "id": "color_teal_orange",
        "name": "Điện Ảnh Hollywood",
        "prompt": "Show the persons in the photo with the exact same pose and background, color graded in classic blockbuster Hollywood teal and orange cinema palette, rich skin tones against deep cyan shadows, dramatic movie look, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#0D9488",
            "#EA580C"
        ],
        "captureButtonColors": [
            "#0D9488",
            "#EA580C"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
            "sfSymbol": "film.fill",
            "emoji": "🎥"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDk0ODg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNJTkU8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_polaroid_dream",
        "id": "color_polaroid_dream",
        "name": "Ảnh Chụp Polaroid",
        "prompt": "Show the persons in the photo with the exact same pose and background, rendered as an authentic vintage Polaroid instant photograph, gentle color bleed, creamy highlights, soft nostalgic contrast, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#FEF08A",
            "#FDE047"
        ],
        "captureButtonColors": [
            "#FEF08A",
            "#FDE047"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "camera.fill",
            "emoji": "📸"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRUYzQzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TtzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBPTEFSPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_fuji_classic",
        "id": "color_fuji_classic",
        "name": "Fujifilm Classic Chrome",
        "prompt": "Show the persons in the photo with the exact same pose and background, color graded with Fujifilm Classic Chrome simulation, muted greens, deep skies, understated documentary contrast, timeless film feel, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#059669",
            "#10B981"
        ],
        "captureButtonColors": [
            "#059669",
            "#10B981"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
            "sfSymbol": "camera.viewfinder",
            "emoji": "📷"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEQzOTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkZVSkk8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_kodak_portra",
        "id": "color_kodak_portra",
        "name": "Kodak Portra 400",
        "prompt": "Show the persons in the photo with the exact same pose and background, captured on Kodak Portra 400 professional portrait film, creamy pastel tones, natural warm skin rendering, smooth tonal transitions, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#EAB308",
            "#CA8A04"
        ],
        "captureButtonColors": [
            "#EAB308",
            "#CA8A04"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "camera.aperture",
            "emoji": "✨"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+TuDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPktPREFLPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_cold_nordic",
        "id": "color_cold_nordic",
        "name": "Bắc Âu Băng Giá",
        "prompt": "Show the persons in the photo with the exact same pose and background, graded in a minimalist Nordic cold winter palette, crisp cool blues, clean whites, high clarity, moody Scandinavian atmosphere, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#0284C7",
            "#38BDF8"
        ],
        "captureButtonColors": [
            "#0284C7",
            "#38BDF8"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "snowflake",
            "emoji": "❄️"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3REQzRkM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQUU2RkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4p2E77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+Tk9SRDwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_retro_sunset",
        "id": "color_retro_sunset",
        "name": "Retro Y2K Sunset",
        "prompt": "Show the persons in the photo with the exact same pose and background, captured with a nostalgic early 2000s Y2K digital camera look, dreamy lavender-violet dusk lighting, soft halo glow, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#8B5CF6",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#8B5CF6",
            "#C084FC"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "sunset.fill",
            "emoji": "🔮"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDNGNUU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJFVFJPPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_indie_mood",
        "id": "color_indie_mood",
        "name": "Indie Muted Fade",
        "prompt": "Show the persons in the photo with the exact same pose and background, treated with an aesthetic indie film muted grade, lifted matte blacks, desaturated earthy tones, cozy moody vibe, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#57534E",
            "#A8A29E"
        ],
        "captureButtonColors": [
            "#57534E",
            "#A8A29E"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "headphones",
            "emoji": "🍂"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMUExQUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MTcxN0E7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OpzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPklORElFPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_matcha_green",
        "id": "color_matcha_green",
        "name": "Matcha Xanh Mát",
        "prompt": "Show the persons in the photo with the exact same pose and background, bathed in serene soft matcha green tones, calming organic pastel hues, delicate peaceful morning light, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#65A30D",
            "#84CC16"
        ],
        "captureButtonColors": [
            "#65A30D",
            "#84CC16"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "cup.and.saucer.fill",
            "emoji": "🍵"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QURFODA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNkEzNEE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NtTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVENIQTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_peach_sweet",
        "id": "color_peach_sweet",
        "name": "Đào Ngọt Ngào",
        "prompt": "Show the persons in the photo with the exact same pose and background, infused with soft juicy peach and apricot pastel warm tones, youthful vibrant skin glow, sweet dreamy ambience, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "heart.fill",
            "emoji": "🍑"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREE0QUY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+NkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBFQUNIPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_silver_cinema",
        "id": "color_silver_cinema",
        "name": "Bạc Kim Điện Ảnh",
        "prompt": "Show the persons in the photo with the exact same pose and background, styled in a sleek silver-metallic cinema tint, refined monochrome with subtle platinum sheen and crisp micro-contrast, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#64748B",
            "#CBD5E1"
        ],
        "captureButtonColors": [
            "#64748B",
            "#CBD5E1"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "video.fill",
            "emoji": "🌙"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NEEzQjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQkQ1RTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Tve+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNJTFZFUjwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "color_warm_sunshine",
        "id": "color_warm_sunshine",
        "name": "Nắng Ấm Mùa Hè",
        "prompt": "Show the persons in the photo with the exact same pose and background, illuminated by cheerful bright summer morning sunshine, clear natural warm highlights, crisp vivid colors, uplifting vibrant warmth, 8k resolution, modern iPhone camera look.",
        "productUrl": null,
        "colors": [
            "#FACC15",
            "#F59E0B"
        ],
        "captureButtonColors": [
            "#FACC15",
            "#F59E0B"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "sun.max.fill",
            "emoji": "☀️"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQUNDMTU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4piA77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1VOPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_anime_ghibli",
        "id": "ai_anime_ghibli",
        "name": "Thế Giới Anime Ghibli",
        "prompt": "Show the persons in the photo with the exact same pose and background, transformed into a breathtaking Studio Ghibli hand-painted anime art style, vibrant painterly skies, soft whimsical lighting, keeping facial likeness and expression identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#10B981",
            "#3B82F6"
        ],
        "captureButtonColors": [
            "#10B981",
            "#3B82F6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "sparkles",
            "emoji": "🍃"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0U4Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNzhCRkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MujwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdISUJMSTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_cyber_cyborg",
        "id": "ai_cyber_cyborg",
        "name": "Chiến Binh Cyborg 2077",
        "prompt": "Show the persons in the photo with the exact same pose and background, upgraded into a sleek cyberpunk cyborg with delicate glowing circuit lines on skin, polished chrome micro-enhancements, subtle neon optical lens accent, keeping face structure and pose identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#06B6D4",
            "#6366F1"
        ],
        "captureButtonColors": [
            "#06B6D4",
            "#6366F1"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "cpu",
            "emoji": "🤖"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRUE1RTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTNBNUY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNZQkVSPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_angel_wings",
        "id": "ai_angel_wings",
        "name": "Đôi Cánh Thiên Thần Phát Sáng",
        "prompt": "Show the persons in the photo with the exact same pose and background, adorned with majestic glowing white feathered angel wings emerging behind their shoulders, soft celestial halo aura, ethereal lighting, keeping face, pose, and background identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#38BDF8",
            "#F8FAFC"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#F8FAFC"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "wing",
            "emoji": "🪽"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREU2OEE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RvDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOR0VMPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_barbie_doll",
        "id": "ai_barbie_doll",
        "name": "Búp Bê Barbie / Ken Thần Tiên",
        "prompt": "Show the persons in the photo with the exact same pose and background, stylized as a charming life-sized collectible fashion doll in a magical pastel pink dreamland, polished glossy hair, designer couture outfit, keeping pose and framing identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "heart.fill",
            "emoji": "🎀"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNDcyQjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OgDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkJBUkJJRTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_claymation_3d",
        "id": "ai_claymation_3d",
        "name": "Hoạt Hình Đất Nặn Pixar 3D",
        "prompt": "Show the persons in the photo with the exact same pose and background, sculpted as a whimsical 3D handcrafted claymation character in the style of Wallace & Gromit and Pixar clay shorts, smooth plasticine textures, adorable friendly likeness, keeping pose identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#F97316",
            "#FCD34D"
        ],
        "captureButtonColors": [
            "#F97316",
            "#FCD34D"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "paintbrush.fill",
            "emoji": "🧸"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjkyM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBJWEFSPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_retro_comic",
        "id": "ai_retro_comic",
        "name": "Truyện Tranh Cổ Điển 80s",
        "prompt": "Show the persons in the photo with the exact same pose and background, illustrated in vintage 1980s superhero graphic novel pop-art style, bold black ink outlines, colorful halftone Ben-Day dots, dramatic action shadows, keeping facial likeness identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#EF4444",
            "#3B82F6"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#3B82F6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "burst.fill",
            "emoji": "💥"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkJGMjQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+SpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNPTUlDPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_neon_devil",
        "id": "ai_neon_devil",
        "name": "Ác Quỷ Neon Dạ Quang",
        "prompt": "Show the persons in the photo with the exact same pose and background, sporting cute glowing neon ruby-red devil horns gently perched on the head, subtle floating embers, playful mischievous aura, keeping facial likeness and pose identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#DC2626",
            "#991B1B"
        ],
        "captureButtonColors": [
            "#DC2626",
            "#991B1B"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "flame.fill",
            "emoji": "😈"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+YiDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRFVklMPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_royal_monarch",
        "id": "ai_royal_monarch",
        "name": "Vương Giả Quý Tộc Hoàng Gia",
        "prompt": "Show the persons in the photo with the exact same pose and background, dressed in opulent European Renaissance royal velvet attire with golden embroidery, adorned with a sparkling diamond crown, regal cinematic throne room lighting, keeping facial likeness identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#D97706",
            "#78350F"
        ],
        "captureButtonColors": [
            "#D97706",
            "#78350F"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "crown.fill",
            "emoji": "👑"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCNDUzMDk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RkTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlJPWUFMPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_galaxy_cosmic",
        "id": "ai_galaxy_cosmic",
        "name": "Vũ Trụ Huyền Bí Ánh Sao",
        "prompt": "Show the persons in the photo with the exact same pose and background, immersed in a mesmerizing cosmic galaxy with shimmering stellar dust, radiant purple-blue nebula clouds, soft starlight reflections across clothing and hair, keeping facial likeness identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#7C3AED",
            "#4F46E5"
        ],
        "captureButtonColors": [
            "#7C3AED",
            "#4F46E5"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "star.fill",
            "emoji": "🌌"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3QzNBRUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MjDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkdBTEFYWTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_steampunk_inventor",
        "id": "ai_steampunk_inventor",
        "name": "Nhà Phát Minh Steampunk",
        "prompt": "Show the persons in the photo with the exact same pose and background, dressed as an eccentric Victorian steampunk inventor with polished brass goggles on forehead, intricate mechanical pocket gear accessories, warm sepia industrial lighting, keeping facial likeness identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#B45309",
            "#78350F"
        ],
        "captureButtonColors": [
            "#B45309",
            "#78350F"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
            "sfSymbol": "gearshape.2.fill",
            "emoji": "⚙️"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQwMEU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4pqZ77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+U1RFQU08L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_vampire_gothic",
        "id": "ai_vampire_gothic",
        "name": "Ma Cà Rồng Quý Tộc Gothic",
        "prompt": "Show the persons in the photo with the exact same pose and background, styled as a sophisticated Gothic vampire noble with midnight black velvet cloak, faint hypnotic ruby glint in eyes, moody antique castle candlelight ambience, keeping facial likeness identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#881337",
            "#4C0519"
        ],
        "captureButtonColors": [
            "#881337",
            "#4C0519"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
            "sfSymbol": "moon.stars.fill",
            "emoji": "🧛"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQzE5MTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlZBTVA8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_disney_pixar",
        "id": "ai_disney_pixar",
        "name": "Nhân Vật Hoạt Hình Pixar",
        "prompt": "Show the persons in the photo with the exact same pose and background, transformed into a signature Disney-Pixar 3D animated character, warm expressive eyes, soft stylized skin and hair textures, heartwarming cinematic lighting, keeping pose and expression identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#0284C7",
            "#F59E0B"
        ],
        "captureButtonColors": [
            "#0284C7",
            "#F59E0B"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "theatermasks.fill",
            "emoji": "🎬"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MEE1RkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OrTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkRJU05FWTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_matrix_glitch",
        "id": "ai_matrix_glitch",
        "name": "Không Gian Đa Chiều Matrix",
        "prompt": "Show the persons in the photo with the exact same pose and background, surrounded by cascading digital green matrix code rain and chromatic aberration glitch lines, holographic cyber dimension effect, keeping face and pose identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#16A34A",
            "#22C55E"
        ],
        "captureButtonColors": [
            "#16A34A",
            "#22C55E"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "terminal.fill",
            "emoji": "💻"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTJlMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMkM1NUU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fojwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1BVFJJWDwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_y2k_cyber",
        "id": "ai_y2k_cyber",
        "name": "Thần Tượng Y2K Millennium",
        "prompt": "Show the persons in the photo with the exact same pose and background, dressed in iconic early-2000s Y2K pop star aesthetic with reflective chrome visor sunglasses, metallic puffer jacket, iridescent glitter reflections, keeping likeness and pose identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#A855F7",
            "#EC4899"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#EC4899"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "antenna.radiowaves.left.and.right",
            "emoji": "💿"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFODc5Rjk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MThDRjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlkySzwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "ai_chibi_mecha",
        "id": "ai_chibi_mecha",
        "name": "Chiến Giáp Mecha Chibi",
        "prompt": "Show the persons in the photo with the exact same pose and background, outfitted in an aerodynamic neon-lit sci-fi mecha pilot exo-suit with glowing LED visor lines and carbon fiber plates, keeping face structure and pose identical, 8k resolution.",
        "productUrl": null,
        "colors": [
            "#2563EB",
            "#38BDF8"
        ],
        "captureButtonColors": [
            "#2563EB",
            "#38BDF8"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "shield.lefthalf.filled",
            "emoji": "🛡️"
        },
        "textColor": "#FFFFFF",
        "style": "normal",
        "overlay": false,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+kljwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk1FQ0hBPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_rose_flower",
        "id": "stk_rose_flower",
        "name": "Ngậm Hoa Hồng",
        "prompt": "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
        "productUrl": null,
        "colors": [
            "#E11D48",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#E11D48",
            "#FB7185"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
            "sfSymbol": "camera.macro",
            "emoji": "🌹"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMTFENDg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQjcxODU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MuTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPQSBI4buSTkc8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_shrek_ogre",
        "id": "stk_shrek_ogre",
        "name": "Tai Ogre Shrek",
        "prompt": "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
        "productUrl": null,
        "colors": [
            "#84CC16",
            "#65A30D"
        ],
        "captureButtonColors": [
            "#84CC16",
            "#65A30D"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "face.smiling",
            "emoji": "🧌"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NUEzMEQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NENDMTY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+njDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlNIUkVLPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_superhero_cape",
        "id": "stk_superhero_cape",
        "name": "Siêu Anh Hùng",
        "prompt": "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
        "productUrl": null,
        "colors": [
            "#DC2626",
            "#FBBF24"
        ],
        "captureButtonColors": [
            "#DC2626",
            "#FBBF24"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "shield.fill",
            "emoji": "🦸"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNTYzRUI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+muDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFOSCBIw5lORzwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_spooky_ghost",
        "id": "stk_spooky_ghost",
        "name": "Bóng Ma Nhỏ",
        "prompt": "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
        "productUrl": null,
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "moon.fill",
            "emoji": "👻"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NzU1Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDc0OEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+RuzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkLDk05HIE1BPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_pirate_hat",
        "id": "stk_pirate_hat",
        "name": "Mũ Cướp Biển",
        "prompt": "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
        "productUrl": null,
        "colors": [
            "#0F172A",
            "#E2E8F0"
        ],
        "captureButtonColors": [
            "#0F172A",
            "#E2E8F0"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "flag.fill",
            "emoji": "🏴‍☠️"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODE4MUI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQUIzMDg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+PtOKAjeKYoO+4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkjhuqJJIFThurZDPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_volcano_lava",
        "id": "stk_volcano_lava",
        "name": "Núi Lửa Dung Nham",
        "prompt": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        "productUrl": null,
        "colors": [
            "#EA580C",
            "#EF4444"
        ],
        "captureButtonColors": [
            "#EA580C",
            "#EF4444"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
            "sfSymbol": "flame.fill",
            "emoji": "🌋"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MizwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk7DmkkgTOG7rEE8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_rain_storm",
        "id": "stk_rain_storm",
        "name": "Mưa Bão Sấm Sét",
        "prompt": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.\n\nFor Men: Dress them in the Jacob Elordi style with matching hair and outfit.\n\nFor Women: Dress them in the Margot Robbie style: A dramatic, historical-inspired red gown with a high-gloss, lacquered red skirt that is extremely voluminous and structured, forming a full bell shape from the waist down if that part is visible in the initial image. The skirt looks stiff and reflective, almost like polished vinyl. The bodice is corset-style, fitted tightly to the torso in the same glossy red material, with thin shoulder straps, a wide scoop rounded neckline, and the dress cinching the waist and creating a structured, corset-inspired silhouette WITHOUT visible boning, lacing or busks, and featuring a sheer billowing white long puffed sleeve shirt worn underneath with a scooped neckline for the white undershirt peeking out from behind the dress.\n\nConstraints: Do not modify the person's physical features, body shape, or positioning. Keep the framing and background 100% unchanged. If no person is present, return the image unaltered. Do not include Jacob Elordi or Margot Robbie themselves in the output image.",
        "productUrl": null,
        "colors": [
            "#3B82F6",
            "#6366F1"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#6366F1"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "cloud.bolt.rain.fill",
            "emoji": "⛈️"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTI5M0I7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQjgyRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+4puI77iPPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC45NSI+TcavQSBCw4NPPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_fortnite_llama",
        "id": "stk_fortnite_llama",
        "name": "Llama Fortnite",
        "prompt": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite. Show no extra overlays or text on top of the photo. If no person is present, do not add any people to the output.",
        "productUrl": null,
        "colors": [
            "#A855F7",
            "#EC4899"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#EC4899"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "sparkles",
            "emoji": "🦙"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MzMzRUE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+mmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkxMQU1BPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_watercolor_art",
        "id": "stk_watercolor_art",
        "name": "Tranh Màu Nước",
        "prompt": "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes. If no person is present, do not add any people to the output.",
        "productUrl": null,
        "colors": [
            "#06B6D4",
            "#F43F5E"
        ],
        "captureButtonColors": [
            "#06B6D4",
            "#F43F5E"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "paintpalette.fill",
            "emoji": "🎨"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMjg0Qzc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBODU1Rjc7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OqDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk3DgFUgTsav4buaQzwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_golden_hour",
        "id": "stk_golden_hour",
        "name": "Nắng Hoàng Hôn",
        "prompt": "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows. If no person is present, do not add any people to the output.",
        "productUrl": null,
        "colors": [
            "#F59E0B",
            "#F97316"
        ],
        "captureButtonColors": [
            "#F59E0B",
            "#F97316"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "sun.max.fill",
            "emoji": "🌅"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTU4MEM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MhTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkhPw4BORyBIw5ROPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_jungle_leaf",
        "id": "stk_jungle_leaf",
        "name": "Rừng Nhiệt Đới",
        "prompt": "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way. The person and their background should remain in the same positions. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        "productUrl": null,
        "colors": [
            "#16A34A",
            "#15803D"
        ],
        "captureButtonColors": [
            "#16A34A",
            "#15803D"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "leaf.fill",
            "emoji": "🌿"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNTk2Njk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MvzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5ISeG7hlQgxJDhu5pJPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_cute_zombie",
        "id": "stk_cute_zombie",
        "name": "Zombie Chibi",
        "prompt": "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
        "productUrl": null,
        "colors": [
            "#10B981",
            "#8B5CF6"
        ],
        "captureButtonColors": [
            "#10B981",
            "#8B5CF6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "figure.walk",
            "emoji": "🧟"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMEI5ODE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nnzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlpPTUJJRTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_fireworks",
        "id": "stk_fireworks",
        "name": "Pháo Hoa Rực Rỡ",
        "prompt": "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        "productUrl": null,
        "colors": [
            "#EC4899",
            "#8B5CF6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#8B5CF6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "sparkle",
            "emoji": "🎆"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OhjwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw4FPIEhPQTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_new_year_2026",
        "id": "stk_new_year_2026",
        "name": "Năm Mới 2026",
        "prompt": "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        "productUrl": null,
        "colors": [
            "#F59E0B",
            "#EF4444"
        ],
        "captureButtonColors": [
            "#F59E0B",
            "#EF4444"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
            "sfSymbol": "party.popper",
            "emoji": "🎉"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzI2MjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGNTlFMEI7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+OiTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPjIwMjY8L3RleHQ+PC9zdmc+",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_harry_potter",
        "id": "stk_harry_potter",
        "name": "Phù Thủy Hogwarts",
        "prompt": "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houes. Keep the pose and framing identical and do not change the background.",
        "productUrl": null,
        "colors": [
            "#740001",
            "#D3A625"
        ],
        "captureButtonColors": [
            "#740001",
            "#D3A625"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "wand.and.stars",
            "emoji": "🧙"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RjFEMUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNEOTc3MDY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+nmTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlBIw5kgVEjhu6ZZPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_minecraft",
        "id": "stk_minecraft",
        "name": "Minecraft 3D",
        "prompt": "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters. If no person is present, do not add any people to the output.",
        "productUrl": null,
        "colors": [
            "#22C55E",
            "#0EA5E9"
        ],
        "captureButtonColors": [
            "#22C55E",
            "#0EA5E9"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "cube.fill",
            "emoji": "🟩"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNjY1MzQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3ODM1MEY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+fqTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkNSQUZUPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_fire_flame",
        "id": "stk_fire_flame",
        "name": "Ngọn Lửa Rực Cháy",
        "prompt": "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look.\n\nThe flame should appear as a staged visual effect, suspended in front of the mouth area without showing fire originating from inside the body. Keep the effect believable and cinematic, with a bright yellow-white core, orange and red edges, subtle motion blur, and gentle heat distortion in the nearby air.\n\nAdd a soft warm glow on nearby facial features and clothing, consistent with the flame's position, while preserving the original lighting of the scene. Do not show burns, smoke inhalation, injury, pain, damage, or distress. Do not alter the person's face, expression, identity, or pose.\n\nKeep the background, framing, depth of field, and image quality identical to the original, with the flame effect appearing as a safe staged performance element captured in-camera. Do not change the overall compsition of the photo, do not add new people to the photo, only show each person in the photo one time.",
        "productUrl": null,
        "colors": [
            "#F97316",
            "#EAB308"
        ],
        "captureButtonColors": [
            "#F97316",
            "#EAB308"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
            "sfSymbol": "flame.fill",
            "emoji": "🔥"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTczMTY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRjQ0NDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+UpTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPlRI4bqmTiBM4busQTwvdGV4dD48L3N2Zz4=",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_giant_spider",
        "id": "stk_giant_spider",
        "name": "Nhện Khổng Lồ",
        "prompt": "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
        "productUrl": null,
        "colors": [
            "#334155",
            "#EF4444"
        ],
        "captureButtonColors": [
            "#334155",
            "#EF4444"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "ant.fill",
            "emoji": "🕷️"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTFCNEI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QzFEOTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+Vt++4jzwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPk5I4buGTiDEkEVOPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_ocean_underwater",
        "id": "stk_ocean_underwater",
        "name": "Thủy Cung Đại Dương",
        "prompt": "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        "productUrl": null,
        "colors": [
            "#06B6D4",
            "#3B82F6"
        ],
        "captureButtonColors": [
            "#06B6D4",
            "#3B82F6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "water.waves",
            "emoji": "🌊"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzY5QTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNkI2RDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+MijwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPsSQ4bqgSSBExq/GoE5HPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "stk_ufo_alien",
        "id": "stk_ufo_alien",
        "name": "UFO & Alien",
        "prompt": "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        "productUrl": null,
        "colors": [
            "#10B981",
            "#8B5CF6"
        ],
        "captureButtonColors": [
            "#10B981",
            "#8B5CF6"
        ],
        "icon": {
            "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
            "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
            "remoteImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
            "sfSymbol": "airplane",
            "emoji": "🛸"
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
        "overlayImageURL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
        "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNTgwM0Q7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjE3MkE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjQwIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iMTAwIiB5PSI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI2NCI+8J+buDwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyOCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOTUiPkFMSUVOPC90ZXh0Pjwvc3ZnPg==",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "normal"
    },
    {
        "uid": "frame_664",
        "id": "frame_664",
        "name": "Huyền Ảo Màn Đêm",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_664",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
        "iconUrl": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
        "overlayImageURL": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
            "iconUrl": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
            "remoteImage": "https://cdn.freehihi.com/6ae6acfaee7e4.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_653",
        "id": "frame_653",
        "name": "Kisa's Christmas Memories",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_653",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a9e69294a33b.png",
        "iconUrl": "https://cdn.freehihi.com/6a9e69294a33b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a9e69294a33b.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a9e69294a33b.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a9e69294a33b.png",
            "iconUrl": "https://cdn.freehihi.com/6a9e69294a33b.png",
            "remoteImage": "https://cdn.freehihi.com/6a9e69294a33b.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_652",
        "id": "frame_652",
        "name": "Vì em cũng chụp ptb mà",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_652",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a9e68dd0144b.png",
        "iconUrl": "https://cdn.freehihi.com/6a9e68dd0144b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a9e68dd0144b.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a9e68dd0144b.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a9e68dd0144b.png",
            "iconUrl": "https://cdn.freehihi.com/6a9e68dd0144b.png",
            "remoteImage": "https://cdn.freehihi.com/6a9e68dd0144b.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_651",
        "id": "frame_651",
        "name": "2/9 Việt Nam",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_651",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a952c22b6b8e.png",
        "iconUrl": "https://cdn.freehihi.com/6a952c22b6b8e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a952c22b6b8e.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a952c22b6b8e.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a952c22b6b8e.png",
            "iconUrl": "https://cdn.freehihi.com/6a952c22b6b8e.png",
            "remoteImage": "https://cdn.freehihi.com/6a952c22b6b8e.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_647",
        "id": "frame_647",
        "name": "Việt Nam_3",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_647",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a8be77b94929.png",
        "iconUrl": "https://cdn.freehihi.com/6a8be77b94929.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a8be77b94929.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a8be77b94929.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a8be77b94929.png",
            "iconUrl": "https://cdn.freehihi.com/6a8be77b94929.png",
            "remoteImage": "https://cdn.freehihi.com/6a8be77b94929.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_646",
        "id": "frame_646",
        "name": "Việt Nam_2",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_646",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a8be767827e5.png",
        "iconUrl": "https://cdn.freehihi.com/6a8be767827e5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a8be767827e5.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a8be767827e5.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a8be767827e5.png",
            "iconUrl": "https://cdn.freehihi.com/6a8be767827e5.png",
            "remoteImage": "https://cdn.freehihi.com/6a8be767827e5.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_645",
        "id": "frame_645",
        "name": "Việt Nam 2/9_2",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_645",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
        "iconUrl": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
            "iconUrl": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
            "remoteImage": "https://cdn.freehihi.com/6a8be75ca0ba4.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_591",
        "id": "frame_591",
        "name": "NewsPaper",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_591",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a031344ec500.png",
        "iconUrl": "https://cdn.freehihi.com/6a031344ec500.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a031344ec500.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a031344ec500.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a031344ec500.png",
            "iconUrl": "https://cdn.freehihi.com/6a031344ec500.png",
            "remoteImage": "https://cdn.freehihi.com/6a031344ec500.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_590",
        "id": "frame_590",
        "name": "LOL",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_590",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a03118a5260d.png",
        "iconUrl": "https://cdn.freehihi.com/6a03118a5260d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a03118a5260d.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a03118a5260d.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a03118a5260d.png",
            "iconUrl": "https://cdn.freehihi.com/6a03118a5260d.png",
            "remoteImage": "https://cdn.freehihi.com/6a03118a5260d.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_583",
        "id": "frame_583",
        "name": "Liên Quân",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_583",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01b21a7950f.png",
        "iconUrl": "https://cdn.freehihi.com/6a01b21a7950f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01b21a7950f.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01b21a7950f.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01b21a7950f.png",
            "iconUrl": "https://cdn.freehihi.com/6a01b21a7950f.png",
            "remoteImage": "https://cdn.freehihi.com/6a01b21a7950f.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_582",
        "id": "frame_582",
        "name": "Valorant",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_582",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
        "iconUrl": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
            "iconUrl": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
            "remoteImage": "https://cdn.freehihi.com/6a01b1a4d96d2.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_580",
        "id": "frame_580",
        "name": "Matcha",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_580",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01ad2d17920.png",
        "iconUrl": "https://cdn.freehihi.com/6a01ad2d17920.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01ad2d17920.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01ad2d17920.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01ad2d17920.png",
            "iconUrl": "https://cdn.freehihi.com/6a01ad2d17920.png",
            "remoteImage": "https://cdn.freehihi.com/6a01ad2d17920.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_579",
        "id": "frame_579",
        "name": "HaveANiceDay",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_579",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01ab23024af.png",
        "iconUrl": "https://cdn.freehihi.com/6a01ab23024af.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01ab23024af.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01ab23024af.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01ab23024af.png",
            "iconUrl": "https://cdn.freehihi.com/6a01ab23024af.png",
            "remoteImage": "https://cdn.freehihi.com/6a01ab23024af.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_577",
        "id": "frame_577",
        "name": "Sweet Moments",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_577",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a018e770bda6.png",
        "iconUrl": "https://cdn.freehihi.com/6a018e770bda6.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a018e770bda6.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a018e770bda6.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a018e770bda6.png",
            "iconUrl": "https://cdn.freehihi.com/6a018e770bda6.png",
            "remoteImage": "https://cdn.freehihi.com/6a018e770bda6.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_576",
        "id": "frame_576",
        "name": "Sweet Memories",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_576",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
        "iconUrl": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
            "iconUrl": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
            "remoteImage": "https://cdn.freehihi.com/6a018cfeb3cc9.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_575",
        "id": "frame_575",
        "name": "Happy Moments",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_575",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a018cc859932.png",
        "iconUrl": "https://cdn.freehihi.com/6a018cc859932.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a018cc859932.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a018cc859932.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a018cc859932.png",
            "iconUrl": "https://cdn.freehihi.com/6a018cc859932.png",
            "remoteImage": "https://cdn.freehihi.com/6a018cc859932.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_573",
        "id": "frame_573",
        "name": "Biển hè",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_573",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ff69b13221a.png",
        "iconUrl": "https://cdn.freehihi.com/69ff69b13221a.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ff69b13221a.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ff69b13221a.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ff69b13221a.png",
            "iconUrl": "https://cdn.freehihi.com/69ff69b13221a.png",
            "remoteImage": "https://cdn.freehihi.com/69ff69b13221a.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_571",
        "id": "frame_571",
        "name": "Lunar New Year",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_571",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ff1cfd27017.png",
        "iconUrl": "https://cdn.freehihi.com/69ff1cfd27017.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ff1cfd27017.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ff1cfd27017.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ff1cfd27017.png",
            "iconUrl": "https://cdn.freehihi.com/69ff1cfd27017.png",
            "remoteImage": "https://cdn.freehihi.com/69ff1cfd27017.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_570",
        "id": "frame_570",
        "name": "Capturing Moment",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_570",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ff1be3e00e2.png",
        "iconUrl": "https://cdn.freehihi.com/69ff1be3e00e2.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ff1be3e00e2.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ff1be3e00e2.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ff1be3e00e2.png",
            "iconUrl": "https://cdn.freehihi.com/69ff1be3e00e2.png",
            "remoteImage": "https://cdn.freehihi.com/69ff1be3e00e2.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_569",
        "id": "frame_569",
        "name": "Red Digicam",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_569",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ff1bb477e7e.png",
        "iconUrl": "https://cdn.freehihi.com/69ff1bb477e7e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ff1bb477e7e.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ff1bb477e7e.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ff1bb477e7e.png",
            "iconUrl": "https://cdn.freehihi.com/69ff1bb477e7e.png",
            "remoteImage": "https://cdn.freehihi.com/69ff1bb477e7e.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_568",
        "id": "frame_568",
        "name": "Coca",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_568",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ff1b1af1890.png",
        "iconUrl": "https://cdn.freehihi.com/69ff1b1af1890.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ff1b1af1890.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ff1b1af1890.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ff1b1af1890.png",
            "iconUrl": "https://cdn.freehihi.com/69ff1b1af1890.png",
            "remoteImage": "https://cdn.freehihi.com/69ff1b1af1890.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_564",
        "id": "frame_564",
        "name": "Style Girl",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_564",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69f760e52586a.png",
        "iconUrl": "https://cdn.freehihi.com/69f760e52586a.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69f760e52586a.png",
        "overlayImageURL": "https://cdn.freehihi.com/69f760e52586a.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69f760e52586a.png",
            "iconUrl": "https://cdn.freehihi.com/69f760e52586a.png",
            "remoteImage": "https://cdn.freehihi.com/69f760e52586a.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_563",
        "id": "frame_563",
        "name": "30/4 GPMN",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_563",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69f734c41cab0.png",
        "iconUrl": "https://cdn.freehihi.com/69f734c41cab0.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69f734c41cab0.png",
        "overlayImageURL": "https://cdn.freehihi.com/69f734c41cab0.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69f734c41cab0.png",
            "iconUrl": "https://cdn.freehihi.com/69f734c41cab0.png",
            "remoteImage": "https://cdn.freehihi.com/69f734c41cab0.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_524",
        "id": "frame_524",
        "name": "digitalcam cartoon",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_524",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6992b4f935784.png",
        "iconUrl": "https://cdn.freehihi.com/6992b4f935784.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6992b4f935784.png",
        "overlayImageURL": "https://cdn.freehihi.com/6992b4f935784.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6992b4f935784.png",
            "iconUrl": "https://cdn.freehihi.com/6992b4f935784.png",
            "remoteImage": "https://cdn.freehihi.com/6992b4f935784.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_509",
        "id": "frame_509",
        "name": "2026 (2x3)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_509",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69567fdb48069.png",
        "iconUrl": "https://cdn.freehihi.com/69567fdb48069.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69567fdb48069.png",
        "overlayImageURL": "https://cdn.freehihi.com/69567fdb48069.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69567fdb48069.png",
            "iconUrl": "https://cdn.freehihi.com/69567fdb48069.png",
            "remoteImage": "https://cdn.freehihi.com/69567fdb48069.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_507",
        "id": "frame_507",
        "name": "2026 (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_507",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69567d8355fe2.png",
        "iconUrl": "https://cdn.freehihi.com/69567d8355fe2.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69567d8355fe2.png",
        "overlayImageURL": "https://cdn.freehihi.com/69567d8355fe2.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69567d8355fe2.png",
            "iconUrl": "https://cdn.freehihi.com/69567d8355fe2.png",
            "remoteImage": "https://cdn.freehihi.com/69567d8355fe2.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_506",
        "id": "frame_506",
        "name": "Magazine (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_506",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69567d1275bf7.png",
        "iconUrl": "https://cdn.freehihi.com/69567d1275bf7.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69567d1275bf7.png",
        "overlayImageURL": "https://cdn.freehihi.com/69567d1275bf7.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69567d1275bf7.png",
            "iconUrl": "https://cdn.freehihi.com/69567d1275bf7.png",
            "remoteImage": "https://cdn.freehihi.com/69567d1275bf7.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_504",
        "id": "frame_504",
        "name": "Girly (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_504",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/694f7262a03db.png",
        "iconUrl": "https://cdn.freehihi.com/694f7262a03db.png",
        "overlayImageUrl": "https://cdn.freehihi.com/694f7262a03db.png",
        "overlayImageURL": "https://cdn.freehihi.com/694f7262a03db.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/694f7262a03db.png",
            "iconUrl": "https://cdn.freehihi.com/694f7262a03db.png",
            "remoteImage": "https://cdn.freehihi.com/694f7262a03db.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_495",
        "id": "frame_495",
        "name": "Merry Chirstmas 🎅🏻 (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_495",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69310e3a32eac.png",
        "iconUrl": "https://cdn.freehihi.com/69310e3a32eac.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69310e3a32eac.png",
        "overlayImageURL": "https://cdn.freehihi.com/69310e3a32eac.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69310e3a32eac.png",
            "iconUrl": "https://cdn.freehihi.com/69310e3a32eac.png",
            "remoteImage": "https://cdn.freehihi.com/69310e3a32eac.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_493",
        "id": "frame_493",
        "name": "Merry Chirstmas 🎅🏻 (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_493",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69310c3abb836.png",
        "iconUrl": "https://cdn.freehihi.com/69310c3abb836.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69310c3abb836.png",
        "overlayImageURL": "https://cdn.freehihi.com/69310c3abb836.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69310c3abb836.png",
            "iconUrl": "https://cdn.freehihi.com/69310c3abb836.png",
            "remoteImage": "https://cdn.freehihi.com/69310c3abb836.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_491",
        "id": "frame_491",
        "name": "Locket",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_491",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692ed2cc19d03.png",
        "iconUrl": "https://cdn.freehihi.com/692ed2cc19d03.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692ed2cc19d03.png",
        "overlayImageURL": "https://cdn.freehihi.com/692ed2cc19d03.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692ed2cc19d03.png",
            "iconUrl": "https://cdn.freehihi.com/692ed2cc19d03.png",
            "remoteImage": "https://cdn.freehihi.com/692ed2cc19d03.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_483",
        "id": "frame_483",
        "name": "Theater Ticket",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_483",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692d81cfb1e9f.png",
        "iconUrl": "https://cdn.freehihi.com/692d81cfb1e9f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692d81cfb1e9f.png",
        "overlayImageURL": "https://cdn.freehihi.com/692d81cfb1e9f.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692d81cfb1e9f.png",
            "iconUrl": "https://cdn.freehihi.com/692d81cfb1e9f.png",
            "remoteImage": "https://cdn.freehihi.com/692d81cfb1e9f.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_473",
        "id": "frame_473",
        "name": "cream-soda (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_473",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6928ddc669493.png",
        "iconUrl": "https://cdn.freehihi.com/6928ddc669493.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6928ddc669493.png",
        "overlayImageURL": "https://cdn.freehihi.com/6928ddc669493.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6928ddc669493.png",
            "iconUrl": "https://cdn.freehihi.com/6928ddc669493.png",
            "remoteImage": "https://cdn.freehihi.com/6928ddc669493.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_472",
        "id": "frame_472",
        "name": "cream-soda (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_472",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6928ddb90cc97.png",
        "iconUrl": "https://cdn.freehihi.com/6928ddb90cc97.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6928ddb90cc97.png",
        "overlayImageURL": "https://cdn.freehihi.com/6928ddb90cc97.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6928ddb90cc97.png",
            "iconUrl": "https://cdn.freehihi.com/6928ddb90cc97.png",
            "remoteImage": "https://cdn.freehihi.com/6928ddb90cc97.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_471",
        "id": "frame_471",
        "name": "matcha",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_471",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6921c4677562b.png",
        "iconUrl": "https://cdn.freehihi.com/6921c4677562b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6921c4677562b.png",
        "overlayImageURL": "https://cdn.freehihi.com/6921c4677562b.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6921c4677562b.png",
            "iconUrl": "https://cdn.freehihi.com/6921c4677562b.png",
            "remoteImage": "https://cdn.freehihi.com/6921c4677562b.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_455",
        "id": "frame_455",
        "name": "Magazine (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_455",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69097d8bcc7b7.png",
        "iconUrl": "https://cdn.freehihi.com/69097d8bcc7b7.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69097d8bcc7b7.png",
        "overlayImageURL": "https://cdn.freehihi.com/69097d8bcc7b7.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69097d8bcc7b7.png",
            "iconUrl": "https://cdn.freehihi.com/69097d8bcc7b7.png",
            "remoteImage": "https://cdn.freehihi.com/69097d8bcc7b7.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_385",
        "id": "frame_385",
        "name": "Tinder",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_385",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68ecec87142ee.png",
        "iconUrl": "https://cdn.freehihi.com/68ecec87142ee.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68ecec87142ee.png",
        "overlayImageURL": "https://cdn.freehihi.com/68ecec87142ee.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68ecec87142ee.png",
            "iconUrl": "https://cdn.freehihi.com/68ecec87142ee.png",
            "remoteImage": "https://cdn.freehihi.com/68ecec87142ee.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_379",
        "id": "frame_379",
        "name": "Girly (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_379",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68e8e901bae50.png",
        "iconUrl": "https://cdn.freehihi.com/68e8e901bae50.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68e8e901bae50.png",
        "overlayImageURL": "https://cdn.freehihi.com/68e8e901bae50.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68e8e901bae50.png",
            "iconUrl": "https://cdn.freehihi.com/68e8e901bae50.png",
            "remoteImage": "https://cdn.freehihi.com/68e8e901bae50.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_358",
        "id": "frame_358",
        "name": "Colorful",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_358",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68e471275df2c.png",
        "iconUrl": "https://cdn.freehihi.com/68e471275df2c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68e471275df2c.png",
        "overlayImageURL": "https://cdn.freehihi.com/68e471275df2c.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68e471275df2c.png",
            "iconUrl": "https://cdn.freehihi.com/68e471275df2c.png",
            "remoteImage": "https://cdn.freehihi.com/68e471275df2c.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_334",
        "id": "frame_334",
        "name": "TV",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_334",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68dd4f8543881.png",
        "iconUrl": "https://cdn.freehihi.com/68dd4f8543881.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68dd4f8543881.png",
        "overlayImageURL": "https://cdn.freehihi.com/68dd4f8543881.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68dd4f8543881.png",
            "iconUrl": "https://cdn.freehihi.com/68dd4f8543881.png",
            "remoteImage": "https://cdn.freehihi.com/68dd4f8543881.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_327",
        "id": "frame_327",
        "name": "XinhhAirlines (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_327",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
        "iconUrl": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
        "overlayImageURL": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
            "iconUrl": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
            "remoteImage": "https://cdn.freehihi.com/68dcc67d7e7ab.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_325",
        "id": "frame_325",
        "name": "XinhhAirlines (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_325",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68dcc60a4897c.png",
        "iconUrl": "https://cdn.freehihi.com/68dcc60a4897c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68dcc60a4897c.png",
        "overlayImageURL": "https://cdn.freehihi.com/68dcc60a4897c.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68dcc60a4897c.png",
            "iconUrl": "https://cdn.freehihi.com/68dcc60a4897c.png",
            "remoteImage": "https://cdn.freehihi.com/68dcc60a4897c.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_319",
        "id": "frame_319",
        "name": "School",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_319",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68dbb8968a7c0.png",
        "iconUrl": "https://cdn.freehihi.com/68dbb8968a7c0.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68dbb8968a7c0.png",
        "overlayImageURL": "https://cdn.freehihi.com/68dbb8968a7c0.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68dbb8968a7c0.png",
            "iconUrl": "https://cdn.freehihi.com/68dbb8968a7c0.png",
            "remoteImage": "https://cdn.freehihi.com/68dbb8968a7c0.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_317",
        "id": "frame_317",
        "name": "Retro Windows (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_317",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68d98e7b4884e.png",
        "iconUrl": "https://cdn.freehihi.com/68d98e7b4884e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68d98e7b4884e.png",
        "overlayImageURL": "https://cdn.freehihi.com/68d98e7b4884e.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68d98e7b4884e.png",
            "iconUrl": "https://cdn.freehihi.com/68d98e7b4884e.png",
            "remoteImage": "https://cdn.freehihi.com/68d98e7b4884e.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_314",
        "id": "frame_314",
        "name": "Retro Windows (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_314",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68d89ad14df35.png",
        "iconUrl": "https://cdn.freehihi.com/68d89ad14df35.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68d89ad14df35.png",
        "overlayImageURL": "https://cdn.freehihi.com/68d89ad14df35.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68d89ad14df35.png",
            "iconUrl": "https://cdn.freehihi.com/68d89ad14df35.png",
            "remoteImage": "https://cdn.freehihi.com/68d89ad14df35.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_312",
        "id": "frame_312",
        "name": "Dâu Tây",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_312",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68d50f3783378.png",
        "iconUrl": "https://cdn.freehihi.com/68d50f3783378.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68d50f3783378.png",
        "overlayImageURL": "https://cdn.freehihi.com/68d50f3783378.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68d50f3783378.png",
            "iconUrl": "https://cdn.freehihi.com/68d50f3783378.png",
            "remoteImage": "https://cdn.freehihi.com/68d50f3783378.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_311",
        "id": "frame_311",
        "name": "Cutie Pinkie",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_311",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
        "iconUrl": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
        "overlayImageURL": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
            "iconUrl": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
            "remoteImage": "https://cdn.freehihi.com/68d0dd9bb3a08.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_298",
        "id": "frame_298",
        "name": "Hello Kitty",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_298",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68c400b3d9470.png",
        "iconUrl": "https://cdn.freehihi.com/68c400b3d9470.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68c400b3d9470.png",
        "overlayImageURL": "https://cdn.freehihi.com/68c400b3d9470.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68c400b3d9470.png",
            "iconUrl": "https://cdn.freehihi.com/68c400b3d9470.png",
            "remoteImage": "https://cdn.freehihi.com/68c400b3d9470.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_297",
        "id": "frame_297",
        "name": "Amazing (2x2)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_297",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68c3fdcb527e5.png",
        "iconUrl": "https://cdn.freehihi.com/68c3fdcb527e5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68c3fdcb527e5.png",
        "overlayImageURL": "https://cdn.freehihi.com/68c3fdcb527e5.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68c3fdcb527e5.png",
            "iconUrl": "https://cdn.freehihi.com/68c3fdcb527e5.png",
            "remoteImage": "https://cdn.freehihi.com/68c3fdcb527e5.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_248",
        "id": "frame_248",
        "name": "IOS",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_248",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68a3d8f16c61d.png",
        "iconUrl": "https://cdn.freehihi.com/68a3d8f16c61d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68a3d8f16c61d.png",
        "overlayImageURL": "https://cdn.freehihi.com/68a3d8f16c61d.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68a3d8f16c61d.png",
            "iconUrl": "https://cdn.freehihi.com/68a3d8f16c61d.png",
            "remoteImage": "https://cdn.freehihi.com/68a3d8f16c61d.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_237",
        "id": "frame_237",
        "name": "Thư",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_237",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/689da03a3127c.png",
        "iconUrl": "https://cdn.freehihi.com/689da03a3127c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/689da03a3127c.png",
        "overlayImageURL": "https://cdn.freehihi.com/689da03a3127c.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/689da03a3127c.png",
            "iconUrl": "https://cdn.freehihi.com/689da03a3127c.png",
            "remoteImage": "https://cdn.freehihi.com/689da03a3127c.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_223",
        "id": "frame_223",
        "name": "Quốc Khánh 2/9",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_223",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/689801c6ac302.png",
        "iconUrl": "https://cdn.freehihi.com/689801c6ac302.png",
        "overlayImageUrl": "https://cdn.freehihi.com/689801c6ac302.png",
        "overlayImageURL": "https://cdn.freehihi.com/689801c6ac302.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/689801c6ac302.png",
            "iconUrl": "https://cdn.freehihi.com/689801c6ac302.png",
            "remoteImage": "https://cdn.freehihi.com/689801c6ac302.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_206",
        "id": "frame_206",
        "name": "Amazing (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_206",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/688a37a6b673c.png",
        "iconUrl": "https://cdn.freehihi.com/688a37a6b673c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/688a37a6b673c.png",
        "overlayImageURL": "https://cdn.freehihi.com/688a37a6b673c.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/688a37a6b673c.png",
            "iconUrl": "https://cdn.freehihi.com/688a37a6b673c.png",
            "remoteImage": "https://cdn.freehihi.com/688a37a6b673c.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_192",
        "id": "frame_192",
        "name": "ĐÙ MÁ",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_192",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/687cc3f5c3958.png",
        "iconUrl": "https://cdn.freehihi.com/687cc3f5c3958.png",
        "overlayImageUrl": "https://cdn.freehihi.com/687cc3f5c3958.png",
        "overlayImageURL": "https://cdn.freehihi.com/687cc3f5c3958.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/687cc3f5c3958.png",
            "iconUrl": "https://cdn.freehihi.com/687cc3f5c3958.png",
            "remoteImage": "https://cdn.freehihi.com/687cc3f5c3958.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_185",
        "id": "frame_185",
        "name": "BunBoHue",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_185",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/687779c79d107.png",
        "iconUrl": "https://cdn.freehihi.com/687779c79d107.png",
        "overlayImageUrl": "https://cdn.freehihi.com/687779c79d107.png",
        "overlayImageURL": "https://cdn.freehihi.com/687779c79d107.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/687779c79d107.png",
            "iconUrl": "https://cdn.freehihi.com/687779c79d107.png",
            "remoteImage": "https://cdn.freehihi.com/687779c79d107.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_184",
        "id": "frame_184",
        "name": "BearPink",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_184",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68770830ddc58.png",
        "iconUrl": "https://cdn.freehihi.com/68770830ddc58.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68770830ddc58.png",
        "overlayImageURL": "https://cdn.freehihi.com/68770830ddc58.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68770830ddc58.png",
            "iconUrl": "https://cdn.freehihi.com/68770830ddc58.png",
            "remoteImage": "https://cdn.freehihi.com/68770830ddc58.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_167",
        "id": "frame_167",
        "name": "MatchaLatte",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_167",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/686fe53db6dfc.png",
        "iconUrl": "https://cdn.freehihi.com/686fe53db6dfc.png",
        "overlayImageUrl": "https://cdn.freehihi.com/686fe53db6dfc.png",
        "overlayImageURL": "https://cdn.freehihi.com/686fe53db6dfc.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/686fe53db6dfc.png",
            "iconUrl": "https://cdn.freehihi.com/686fe53db6dfc.png",
            "remoteImage": "https://cdn.freehihi.com/686fe53db6dfc.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_118",
        "id": "frame_118",
        "name": "Giấy Kết Hôn",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_118",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6854e5408664d.png",
        "iconUrl": "https://cdn.freehihi.com/6854e5408664d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6854e5408664d.png",
        "overlayImageURL": "https://cdn.freehihi.com/6854e5408664d.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6854e5408664d.png",
            "iconUrl": "https://cdn.freehihi.com/6854e5408664d.png",
            "remoteImage": "https://cdn.freehihi.com/6854e5408664d.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_91",
        "id": "frame_91",
        "name": "Y2K (2x3)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_91",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529db67f80e.png",
        "iconUrl": "https://cdn.freehihi.com/68529db67f80e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529db67f80e.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529db67f80e.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529db67f80e.png",
            "iconUrl": "https://cdn.freehihi.com/68529db67f80e.png",
            "remoteImage": "https://cdn.freehihi.com/68529db67f80e.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_85",
        "id": "frame_85",
        "name": "Jeans (2x3)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_85",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529d0432f42.png",
        "iconUrl": "https://cdn.freehihi.com/68529d0432f42.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529d0432f42.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529d0432f42.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529d0432f42.png",
            "iconUrl": "https://cdn.freehihi.com/68529d0432f42.png",
            "remoteImage": "https://cdn.freehihi.com/68529d0432f42.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_84",
        "id": "frame_84",
        "name": "Jeans (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_84",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529cfb9748d.png",
        "iconUrl": "https://cdn.freehihi.com/68529cfb9748d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529cfb9748d.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529cfb9748d.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529cfb9748d.png",
            "iconUrl": "https://cdn.freehihi.com/68529cfb9748d.png",
            "remoteImage": "https://cdn.freehihi.com/68529cfb9748d.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_78",
        "id": "frame_78",
        "name": "Lucky (2x3)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_78",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529c87567eb.png",
        "iconUrl": "https://cdn.freehihi.com/68529c87567eb.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529c87567eb.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529c87567eb.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529c87567eb.png",
            "iconUrl": "https://cdn.freehihi.com/68529c87567eb.png",
            "remoteImage": "https://cdn.freehihi.com/68529c87567eb.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_77",
        "id": "frame_77",
        "name": "Lucky (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_77",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529c7e26d92.png",
        "iconUrl": "https://cdn.freehihi.com/68529c7e26d92.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529c7e26d92.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529c7e26d92.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529c7e26d92.png",
            "iconUrl": "https://cdn.freehihi.com/68529c7e26d92.png",
            "remoteImage": "https://cdn.freehihi.com/68529c7e26d92.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_76",
        "id": "frame_76",
        "name": "Instagram",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_76",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529c57c0a28.png",
        "iconUrl": "https://cdn.freehihi.com/68529c57c0a28.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529c57c0a28.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529c57c0a28.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529c57c0a28.png",
            "iconUrl": "https://cdn.freehihi.com/68529c57c0a28.png",
            "remoteImage": "https://cdn.freehihi.com/68529c57c0a28.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_75",
        "id": "frame_75",
        "name": "Y2K (1x4)",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_75",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529c39b1183.png",
        "iconUrl": "https://cdn.freehihi.com/68529c39b1183.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529c39b1183.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529c39b1183.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529c39b1183.png",
            "iconUrl": "https://cdn.freehihi.com/68529c39b1183.png",
            "remoteImage": "https://cdn.freehihi.com/68529c39b1183.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_74",
        "id": "frame_74",
        "name": "Porsche",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_74",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529bdb96806.png",
        "iconUrl": "https://cdn.freehihi.com/68529bdb96806.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529bdb96806.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529bdb96806.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529bdb96806.png",
            "iconUrl": "https://cdn.freehihi.com/68529bdb96806.png",
            "remoteImage": "https://cdn.freehihi.com/68529bdb96806.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_68",
        "id": "frame_68",
        "name": "Việt Nam",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_68",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529b5bf0b08.png",
        "iconUrl": "https://cdn.freehihi.com/68529b5bf0b08.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529b5bf0b08.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529b5bf0b08.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529b5bf0b08.png",
            "iconUrl": "https://cdn.freehihi.com/68529b5bf0b08.png",
            "remoteImage": "https://cdn.freehihi.com/68529b5bf0b08.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_66",
        "id": "frame_66",
        "name": "Se Điếu",
        "category": "Frame Amazing ⭐️",
        "prompt": "frame_66",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6852977303afd.png",
        "iconUrl": "https://cdn.freehihi.com/6852977303afd.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6852977303afd.png",
        "overlayImageURL": "https://cdn.freehihi.com/6852977303afd.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FFA500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FFA500"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6852977303afd.png",
            "iconUrl": "https://cdn.freehihi.com/6852977303afd.png",
            "remoteImage": "https://cdn.freehihi.com/6852977303afd.png",
            "sfSymbol": "star.fill",
            "symbol": "star.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_649",
        "id": "frame_649",
        "name": "Basic_14",
        "category": "Frame Basic",
        "prompt": "frame_649",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a8be78a794e0.png",
        "iconUrl": "https://cdn.freehihi.com/6a8be78a794e0.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a8be78a794e0.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a8be78a794e0.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a8be78a794e0.png",
            "iconUrl": "https://cdn.freehihi.com/6a8be78a794e0.png",
            "remoteImage": "https://cdn.freehihi.com/6a8be78a794e0.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_648",
        "id": "frame_648",
        "name": "Basic_12",
        "category": "Frame Basic",
        "prompt": "frame_648",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a8be7842d7f6.png",
        "iconUrl": "https://cdn.freehihi.com/6a8be7842d7f6.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a8be7842d7f6.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a8be7842d7f6.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a8be7842d7f6.png",
            "iconUrl": "https://cdn.freehihi.com/6a8be7842d7f6.png",
            "remoteImage": "https://cdn.freehihi.com/6a8be7842d7f6.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_637",
        "id": "frame_637",
        "name": "Photobooth2",
        "category": "Frame Basic",
        "prompt": "frame_637",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
        "iconUrl": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
            "iconUrl": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
            "remoteImage": "https://cdn.freehihi.com/6a6d4f4e2e279.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_635",
        "id": "frame_635",
        "name": "XoXo",
        "category": "Frame Basic",
        "prompt": "frame_635",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6cda642c9a5.png",
        "iconUrl": "https://cdn.freehihi.com/6a6cda642c9a5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6cda642c9a5.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6cda642c9a5.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6cda642c9a5.png",
            "iconUrl": "https://cdn.freehihi.com/6a6cda642c9a5.png",
            "remoteImage": "https://cdn.freehihi.com/6a6cda642c9a5.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_632",
        "id": "frame_632",
        "name": "Film2 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_632",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6cd95d455b0.png",
        "iconUrl": "https://cdn.freehihi.com/6a6cd95d455b0.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6cd95d455b0.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6cd95d455b0.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6cd95d455b0.png",
            "iconUrl": "https://cdn.freehihi.com/6a6cd95d455b0.png",
            "remoteImage": "https://cdn.freehihi.com/6a6cd95d455b0.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_626",
        "id": "frame_626",
        "name": "Basic Photobooth",
        "category": "Frame Basic",
        "prompt": "frame_626",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6ac425010a5.png",
        "iconUrl": "https://cdn.freehihi.com/6a6ac425010a5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6ac425010a5.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6ac425010a5.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6ac425010a5.png",
            "iconUrl": "https://cdn.freehihi.com/6a6ac425010a5.png",
            "remoteImage": "https://cdn.freehihi.com/6a6ac425010a5.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_572",
        "id": "frame_572",
        "name": "Retro",
        "category": "Frame Basic",
        "prompt": "frame_572",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ff1d24408cc.png",
        "iconUrl": "https://cdn.freehihi.com/69ff1d24408cc.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ff1d24408cc.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ff1d24408cc.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ff1d24408cc.png",
            "iconUrl": "https://cdn.freehihi.com/69ff1d24408cc.png",
            "remoteImage": "https://cdn.freehihi.com/69ff1d24408cc.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_562",
        "id": "frame_562",
        "name": "Basic-17",
        "category": "Frame Basic",
        "prompt": "frame_562",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ef613158c9e.png",
        "iconUrl": "https://cdn.freehihi.com/69ef613158c9e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ef613158c9e.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ef613158c9e.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ef613158c9e.png",
            "iconUrl": "https://cdn.freehihi.com/69ef613158c9e.png",
            "remoteImage": "https://cdn.freehihi.com/69ef613158c9e.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_561",
        "id": "frame_561",
        "name": "Basic-16",
        "category": "Frame Basic",
        "prompt": "frame_561",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ef61273725c.png",
        "iconUrl": "https://cdn.freehihi.com/69ef61273725c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ef61273725c.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ef61273725c.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ef61273725c.png",
            "iconUrl": "https://cdn.freehihi.com/69ef61273725c.png",
            "remoteImage": "https://cdn.freehihi.com/69ef61273725c.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_558",
        "id": "frame_558",
        "name": "Basic-15",
        "category": "Frame Basic",
        "prompt": "frame_558",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ef60c9a3d12.png",
        "iconUrl": "https://cdn.freehihi.com/69ef60c9a3d12.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ef60c9a3d12.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ef60c9a3d12.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ef60c9a3d12.png",
            "iconUrl": "https://cdn.freehihi.com/69ef60c9a3d12.png",
            "remoteImage": "https://cdn.freehihi.com/69ef60c9a3d12.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_550",
        "id": "frame_550",
        "name": "Basic12",
        "category": "Frame Basic",
        "prompt": "frame_550",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d37f1a81d08.png",
        "iconUrl": "https://cdn.freehihi.com/69d37f1a81d08.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d37f1a81d08.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d37f1a81d08.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d37f1a81d08.png",
            "iconUrl": "https://cdn.freehihi.com/69d37f1a81d08.png",
            "remoteImage": "https://cdn.freehihi.com/69d37f1a81d08.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_549",
        "id": "frame_549",
        "name": "Film2 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_549",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d37d2f690d0.png",
        "iconUrl": "https://cdn.freehihi.com/69d37d2f690d0.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d37d2f690d0.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d37d2f690d0.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d37d2f690d0.png",
            "iconUrl": "https://cdn.freehihi.com/69d37d2f690d0.png",
            "remoteImage": "https://cdn.freehihi.com/69d37d2f690d0.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_548",
        "id": "frame_548",
        "name": "Film1",
        "category": "Frame Basic",
        "prompt": "frame_548",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d37be83c0b5.png",
        "iconUrl": "https://cdn.freehihi.com/69d37be83c0b5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d37be83c0b5.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d37be83c0b5.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d37be83c0b5.png",
            "iconUrl": "https://cdn.freehihi.com/69d37be83c0b5.png",
            "remoteImage": "https://cdn.freehihi.com/69d37be83c0b5.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_541",
        "id": "frame_541",
        "name": "star3",
        "category": "Frame Basic",
        "prompt": "frame_541",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ae2913e9287.png",
        "iconUrl": "https://cdn.freehihi.com/69ae2913e9287.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ae2913e9287.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ae2913e9287.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ae2913e9287.png",
            "iconUrl": "https://cdn.freehihi.com/69ae2913e9287.png",
            "remoteImage": "https://cdn.freehihi.com/69ae2913e9287.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_539",
        "id": "frame_539",
        "name": "star1",
        "category": "Frame Basic",
        "prompt": "frame_539",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ae28bd7352b.png",
        "iconUrl": "https://cdn.freehihi.com/69ae28bd7352b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ae28bd7352b.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ae28bd7352b.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ae28bd7352b.png",
            "iconUrl": "https://cdn.freehihi.com/69ae28bd7352b.png",
            "remoteImage": "https://cdn.freehihi.com/69ae28bd7352b.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_538",
        "id": "frame_538",
        "name": "Save the date",
        "category": "Frame Basic",
        "prompt": "frame_538",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ae28ab885ab.png",
        "iconUrl": "https://cdn.freehihi.com/69ae28ab885ab.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ae28ab885ab.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ae28ab885ab.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ae28ab885ab.png",
            "iconUrl": "https://cdn.freehihi.com/69ae28ab885ab.png",
            "remoteImage": "https://cdn.freehihi.com/69ae28ab885ab.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_482",
        "id": "frame_482",
        "name": "Basic-5 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_482",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692d7d65603ca.png",
        "iconUrl": "https://cdn.freehihi.com/692d7d65603ca.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692d7d65603ca.png",
        "overlayImageURL": "https://cdn.freehihi.com/692d7d65603ca.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692d7d65603ca.png",
            "iconUrl": "https://cdn.freehihi.com/692d7d65603ca.png",
            "remoteImage": "https://cdn.freehihi.com/692d7d65603ca.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_354",
        "id": "frame_354",
        "name": "Basic-6 (2x3)",
        "category": "Frame Basic",
        "prompt": "frame_354",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df47ae9c158.png",
        "iconUrl": "https://cdn.freehihi.com/68df47ae9c158.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df47ae9c158.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df47ae9c158.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df47ae9c158.png",
            "iconUrl": "https://cdn.freehihi.com/68df47ae9c158.png",
            "remoteImage": "https://cdn.freehihi.com/68df47ae9c158.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_353",
        "id": "frame_353",
        "name": "Basic-5 (2x3)",
        "category": "Frame Basic",
        "prompt": "frame_353",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df47965d96e.png",
        "iconUrl": "https://cdn.freehihi.com/68df47965d96e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df47965d96e.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df47965d96e.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df47965d96e.png",
            "iconUrl": "https://cdn.freehihi.com/68df47965d96e.png",
            "remoteImage": "https://cdn.freehihi.com/68df47965d96e.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_352",
        "id": "frame_352",
        "name": "Basic-4 (2x3)",
        "category": "Frame Basic",
        "prompt": "frame_352",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df477dd5360.png",
        "iconUrl": "https://cdn.freehihi.com/68df477dd5360.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df477dd5360.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df477dd5360.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df477dd5360.png",
            "iconUrl": "https://cdn.freehihi.com/68df477dd5360.png",
            "remoteImage": "https://cdn.freehihi.com/68df477dd5360.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_351",
        "id": "frame_351",
        "name": "Basic-3 (2x3)",
        "category": "Frame Basic",
        "prompt": "frame_351",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df4764cfc2b.png",
        "iconUrl": "https://cdn.freehihi.com/68df4764cfc2b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df4764cfc2b.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df4764cfc2b.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df4764cfc2b.png",
            "iconUrl": "https://cdn.freehihi.com/68df4764cfc2b.png",
            "remoteImage": "https://cdn.freehihi.com/68df4764cfc2b.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_350",
        "id": "frame_350",
        "name": "Basic-2 (2x3)",
        "category": "Frame Basic",
        "prompt": "frame_350",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df474dba196.png",
        "iconUrl": "https://cdn.freehihi.com/68df474dba196.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df474dba196.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df474dba196.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df474dba196.png",
            "iconUrl": "https://cdn.freehihi.com/68df474dba196.png",
            "remoteImage": "https://cdn.freehihi.com/68df474dba196.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_349",
        "id": "frame_349",
        "name": "Basic-1 (2x3)",
        "category": "Frame Basic",
        "prompt": "frame_349",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df473214183.png",
        "iconUrl": "https://cdn.freehihi.com/68df473214183.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df473214183.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df473214183.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df473214183.png",
            "iconUrl": "https://cdn.freehihi.com/68df473214183.png",
            "remoteImage": "https://cdn.freehihi.com/68df473214183.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_348",
        "id": "frame_348",
        "name": "Basic-7 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_348",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df437c5f891.png",
        "iconUrl": "https://cdn.freehihi.com/68df437c5f891.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df437c5f891.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df437c5f891.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df437c5f891.png",
            "iconUrl": "https://cdn.freehihi.com/68df437c5f891.png",
            "remoteImage": "https://cdn.freehihi.com/68df437c5f891.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_347",
        "id": "frame_347",
        "name": "Basic-6 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_347",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df435872c67.png",
        "iconUrl": "https://cdn.freehihi.com/68df435872c67.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df435872c67.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df435872c67.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df435872c67.png",
            "iconUrl": "https://cdn.freehihi.com/68df435872c67.png",
            "remoteImage": "https://cdn.freehihi.com/68df435872c67.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_346",
        "id": "frame_346",
        "name": "Basic-10",
        "category": "Frame Basic",
        "prompt": "frame_346",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df42a174a8d.png",
        "iconUrl": "https://cdn.freehihi.com/68df42a174a8d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df42a174a8d.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df42a174a8d.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df42a174a8d.png",
            "iconUrl": "https://cdn.freehihi.com/68df42a174a8d.png",
            "remoteImage": "https://cdn.freehihi.com/68df42a174a8d.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_345",
        "id": "frame_345",
        "name": "Basic-11",
        "category": "Frame Basic",
        "prompt": "frame_345",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df4242dfa05.png",
        "iconUrl": "https://cdn.freehihi.com/68df4242dfa05.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df4242dfa05.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df4242dfa05.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df4242dfa05.png",
            "iconUrl": "https://cdn.freehihi.com/68df4242dfa05.png",
            "remoteImage": "https://cdn.freehihi.com/68df4242dfa05.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_343",
        "id": "frame_343",
        "name": "Basic-8",
        "category": "Frame Basic",
        "prompt": "frame_343",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df420421b73.png",
        "iconUrl": "https://cdn.freehihi.com/68df420421b73.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df420421b73.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df420421b73.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df420421b73.png",
            "iconUrl": "https://cdn.freehihi.com/68df420421b73.png",
            "remoteImage": "https://cdn.freehihi.com/68df420421b73.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_342",
        "id": "frame_342",
        "name": "Basic-7 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_342",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df41df4934f.png",
        "iconUrl": "https://cdn.freehihi.com/68df41df4934f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df41df4934f.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df41df4934f.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df41df4934f.png",
            "iconUrl": "https://cdn.freehihi.com/68df41df4934f.png",
            "remoteImage": "https://cdn.freehihi.com/68df41df4934f.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_341",
        "id": "frame_341",
        "name": "Basic-2 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_341",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df41b70eb0e.png",
        "iconUrl": "https://cdn.freehihi.com/68df41b70eb0e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df41b70eb0e.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df41b70eb0e.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df41b70eb0e.png",
            "iconUrl": "https://cdn.freehihi.com/68df41b70eb0e.png",
            "remoteImage": "https://cdn.freehihi.com/68df41b70eb0e.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_340",
        "id": "frame_340",
        "name": "Basic-1 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_340",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df4196da89b.png",
        "iconUrl": "https://cdn.freehihi.com/68df4196da89b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df4196da89b.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df4196da89b.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df4196da89b.png",
            "iconUrl": "https://cdn.freehihi.com/68df4196da89b.png",
            "remoteImage": "https://cdn.freehihi.com/68df4196da89b.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_339",
        "id": "frame_339",
        "name": "Basic-1 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_339",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df3f19d9d3f.png",
        "iconUrl": "https://cdn.freehihi.com/68df3f19d9d3f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df3f19d9d3f.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df3f19d9d3f.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df3f19d9d3f.png",
            "iconUrl": "https://cdn.freehihi.com/68df3f19d9d3f.png",
            "remoteImage": "https://cdn.freehihi.com/68df3f19d9d3f.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_338",
        "id": "frame_338",
        "name": "Basic-2 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_338",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df3ed02d775.png",
        "iconUrl": "https://cdn.freehihi.com/68df3ed02d775.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df3ed02d775.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df3ed02d775.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df3ed02d775.png",
            "iconUrl": "https://cdn.freehihi.com/68df3ed02d775.png",
            "remoteImage": "https://cdn.freehihi.com/68df3ed02d775.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_337",
        "id": "frame_337",
        "name": "Basic-3 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_337",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df3e1e7dabf.png",
        "iconUrl": "https://cdn.freehihi.com/68df3e1e7dabf.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df3e1e7dabf.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df3e1e7dabf.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df3e1e7dabf.png",
            "iconUrl": "https://cdn.freehihi.com/68df3e1e7dabf.png",
            "remoteImage": "https://cdn.freehihi.com/68df3e1e7dabf.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_336",
        "id": "frame_336",
        "name": "Basic-4 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_336",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df3e1149dce.png",
        "iconUrl": "https://cdn.freehihi.com/68df3e1149dce.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df3e1149dce.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df3e1149dce.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df3e1149dce.png",
            "iconUrl": "https://cdn.freehihi.com/68df3e1149dce.png",
            "remoteImage": "https://cdn.freehihi.com/68df3e1149dce.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_335",
        "id": "frame_335",
        "name": "Basic-5 (2x2)",
        "category": "Frame Basic",
        "prompt": "frame_335",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68df3dfdefc22.png",
        "iconUrl": "https://cdn.freehihi.com/68df3dfdefc22.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68df3dfdefc22.png",
        "overlayImageURL": "https://cdn.freehihi.com/68df3dfdefc22.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68df3dfdefc22.png",
            "iconUrl": "https://cdn.freehihi.com/68df3dfdefc22.png",
            "remoteImage": "https://cdn.freehihi.com/68df3dfdefc22.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_224",
        "id": "frame_224",
        "name": "WeAreOne",
        "category": "Frame Basic",
        "prompt": "frame_224",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/689ab7bec5d76.png",
        "iconUrl": "https://cdn.freehihi.com/689ab7bec5d76.png",
        "overlayImageUrl": "https://cdn.freehihi.com/689ab7bec5d76.png",
        "overlayImageURL": "https://cdn.freehihi.com/689ab7bec5d76.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/689ab7bec5d76.png",
            "iconUrl": "https://cdn.freehihi.com/689ab7bec5d76.png",
            "remoteImage": "https://cdn.freehihi.com/689ab7bec5d76.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_176",
        "id": "frame_176",
        "name": "Vintage2",
        "category": "Frame Basic",
        "prompt": "frame_176",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6873ac02ab5a1.png",
        "iconUrl": "https://cdn.freehihi.com/6873ac02ab5a1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6873ac02ab5a1.png",
        "overlayImageURL": "https://cdn.freehihi.com/6873ac02ab5a1.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6873ac02ab5a1.png",
            "iconUrl": "https://cdn.freehihi.com/6873ac02ab5a1.png",
            "remoteImage": "https://cdn.freehihi.com/6873ac02ab5a1.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_175",
        "id": "frame_175",
        "name": "Vintage1",
        "category": "Frame Basic",
        "prompt": "frame_175",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6873abf8e3917.png",
        "iconUrl": "https://cdn.freehihi.com/6873abf8e3917.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6873abf8e3917.png",
        "overlayImageURL": "https://cdn.freehihi.com/6873abf8e3917.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6873abf8e3917.png",
            "iconUrl": "https://cdn.freehihi.com/6873abf8e3917.png",
            "remoteImage": "https://cdn.freehihi.com/6873abf8e3917.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_133",
        "id": "frame_133",
        "name": "Basic-6 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_133",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/685a41b84c9e3.png",
        "iconUrl": "https://cdn.freehihi.com/685a41b84c9e3.png",
        "overlayImageUrl": "https://cdn.freehihi.com/685a41b84c9e3.png",
        "overlayImageURL": "https://cdn.freehihi.com/685a41b84c9e3.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/685a41b84c9e3.png",
            "iconUrl": "https://cdn.freehihi.com/685a41b84c9e3.png",
            "remoteImage": "https://cdn.freehihi.com/685a41b84c9e3.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_129",
        "id": "frame_129",
        "name": "Basic-5 (1x4)",
        "category": "Frame Basic",
        "prompt": "frame_129",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
        "iconUrl": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
        "overlayImageURL": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
        "tintColor": "#38BDF8",
        "colors": [
            "#38BDF8",
            "#818CF8"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#818CF8"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
            "iconUrl": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
            "remoteImage": "https://cdn.freehihi.com/6857dd9fcbe9d.png",
            "sfSymbol": "camera.fill",
            "symbol": "camera.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_667",
        "id": "frame_667",
        "name": "Hoàng Tôn's Day",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_667",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
        "iconUrl": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
        "overlayImageURL": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
            "iconUrl": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
            "remoteImage": "https://cdn.freehihi.com/frame_6aed8847b39d5.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_662",
        "id": "frame_662",
        "name": "piwon-my garden party",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_662",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
        "iconUrl": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
        "overlayImageURL": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
            "iconUrl": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
            "remoteImage": "https://cdn.freehihi.com/6ae5ed9ea054e.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_643",
        "id": "frame_643",
        "name": "UPRIZE DYLAN x FANDOM YÊU NƯỚC",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_643",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a87fa14b4e66.png",
        "iconUrl": "https://cdn.freehihi.com/6a87fa14b4e66.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a87fa14b4e66.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a87fa14b4e66.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a87fa14b4e66.png",
            "iconUrl": "https://cdn.freehihi.com/6a87fa14b4e66.png",
            "remoteImage": "https://cdn.freehihi.com/6a87fa14b4e66.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_641",
        "id": "frame_641",
        "name": "14 Casper (2x2)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_641",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a77e43ce10ed.png",
        "iconUrl": "https://cdn.freehihi.com/6a77e43ce10ed.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a77e43ce10ed.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a77e43ce10ed.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a77e43ce10ed.png",
            "iconUrl": "https://cdn.freehihi.com/6a77e43ce10ed.png",
            "remoteImage": "https://cdn.freehihi.com/6a77e43ce10ed.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_640",
        "id": "frame_640",
        "name": "14 Casper (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_640",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a77e43639bca.png",
        "iconUrl": "https://cdn.freehihi.com/6a77e43639bca.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a77e43639bca.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a77e43639bca.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a77e43639bca.png",
            "iconUrl": "https://cdn.freehihi.com/6a77e43639bca.png",
            "remoteImage": "https://cdn.freehihi.com/6a77e43639bca.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_639",
        "id": "frame_639",
        "name": "The First SONata (2x2)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_639",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
        "iconUrl": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
            "iconUrl": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
            "remoteImage": "https://cdn.freehihi.com/6a6eadfcdabfc.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_638",
        "id": "frame_638",
        "name": "The First SONata (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_638",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6eadf6e4105.png",
        "iconUrl": "https://cdn.freehihi.com/6a6eadf6e4105.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6eadf6e4105.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6eadf6e4105.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6eadf6e4105.png",
            "iconUrl": "https://cdn.freehihi.com/6a6eadf6e4105.png",
            "remoteImage": "https://cdn.freehihi.com/6a6eadf6e4105.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_625",
        "id": "frame_625",
        "name": "Đào Nguyên Anh Lạc (2x3)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_625",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6804bc7cc73.png",
        "iconUrl": "https://cdn.freehihi.com/6a6804bc7cc73.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6804bc7cc73.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6804bc7cc73.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6804bc7cc73.png",
            "iconUrl": "https://cdn.freehihi.com/6a6804bc7cc73.png",
            "remoteImage": "https://cdn.freehihi.com/6a6804bc7cc73.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_624",
        "id": "frame_624",
        "name": "Đào Nguyên Anh Lạc (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_624",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6804b365e15.png",
        "iconUrl": "https://cdn.freehihi.com/6a6804b365e15.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6804b365e15.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6804b365e15.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6804b365e15.png",
            "iconUrl": "https://cdn.freehihi.com/6a6804b365e15.png",
            "remoteImage": "https://cdn.freehihi.com/6a6804b365e15.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_623",
        "id": "frame_623",
        "name": "UPRIZE LAVM&PN",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_623",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
        "iconUrl": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
            "iconUrl": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
            "remoteImage": "https://cdn.freehihi.com/6a5d3a2a9cbd4.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_620",
        "id": "frame_620",
        "name": "Thanh Hằng (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_620",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a4a142568058.png",
        "iconUrl": "https://cdn.freehihi.com/6a4a142568058.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a4a142568058.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a4a142568058.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a4a142568058.png",
            "iconUrl": "https://cdn.freehihi.com/6a4a142568058.png",
            "remoteImage": "https://cdn.freehihi.com/6a4a142568058.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_619",
        "id": "frame_619",
        "name": "Thanh Hằng (2x2)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_619",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a4a141e1abd5.png",
        "iconUrl": "https://cdn.freehihi.com/6a4a141e1abd5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a4a141e1abd5.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a4a141e1abd5.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a4a141e1abd5.png",
            "iconUrl": "https://cdn.freehihi.com/6a4a141e1abd5.png",
            "remoteImage": "https://cdn.freehihi.com/6a4a141e1abd5.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_618",
        "id": "frame_618",
        "name": "Thanh Hằng (2x3)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_618",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a4a141545025.png",
        "iconUrl": "https://cdn.freehihi.com/6a4a141545025.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a4a141545025.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a4a141545025.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a4a141545025.png",
            "iconUrl": "https://cdn.freehihi.com/6a4a141545025.png",
            "remoteImage": "https://cdn.freehihi.com/6a4a141545025.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_596",
        "id": "frame_596",
        "name": "Eom chíp đi học (2x2)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_596",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a1ce6887fd96.png",
        "iconUrl": "https://cdn.freehihi.com/6a1ce6887fd96.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a1ce6887fd96.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a1ce6887fd96.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a1ce6887fd96.png",
            "iconUrl": "https://cdn.freehihi.com/6a1ce6887fd96.png",
            "remoteImage": "https://cdn.freehihi.com/6a1ce6887fd96.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_595",
        "id": "frame_595",
        "name": "Eom chíp đi học (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_595",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a1c82c6a453d.png",
        "iconUrl": "https://cdn.freehihi.com/6a1c82c6a453d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a1c82c6a453d.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a1c82c6a453d.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a1c82c6a453d.png",
            "iconUrl": "https://cdn.freehihi.com/6a1c82c6a453d.png",
            "remoteImage": "https://cdn.freehihi.com/6a1c82c6a453d.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_593",
        "id": "frame_593",
        "name": "Bùi Duy Ngọc CODCD (2x2)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_593",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
        "iconUrl": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
            "iconUrl": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
            "remoteImage": "https://cdn.freehihi.com/6a059b1dc6f8f.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_592",
        "id": "frame_592",
        "name": "Bùi Duy Ngọc CODCD (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_592",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a059a81d6d23.png",
        "iconUrl": "https://cdn.freehihi.com/6a059a81d6d23.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a059a81d6d23.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a059a81d6d23.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a059a81d6d23.png",
            "iconUrl": "https://cdn.freehihi.com/6a059a81d6d23.png",
            "remoteImage": "https://cdn.freehihi.com/6a059a81d6d23.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_587",
        "id": "frame_587",
        "name": "G-Dragon",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_587",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a03106a69035.png",
        "iconUrl": "https://cdn.freehihi.com/6a03106a69035.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a03106a69035.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a03106a69035.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a03106a69035.png",
            "iconUrl": "https://cdn.freehihi.com/6a03106a69035.png",
            "remoteImage": "https://cdn.freehihi.com/6a03106a69035.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_586",
        "id": "frame_586",
        "name": "BlackPink (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_586",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a03104b67254.png",
        "iconUrl": "https://cdn.freehihi.com/6a03104b67254.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a03104b67254.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a03104b67254.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a03104b67254.png",
            "iconUrl": "https://cdn.freehihi.com/6a03104b67254.png",
            "remoteImage": "https://cdn.freehihi.com/6a03104b67254.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_585",
        "id": "frame_585",
        "name": "BTS_2",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_585",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01b5a37c981.png",
        "iconUrl": "https://cdn.freehihi.com/6a01b5a37c981.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01b5a37c981.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01b5a37c981.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01b5a37c981.png",
            "iconUrl": "https://cdn.freehihi.com/6a01b5a37c981.png",
            "remoteImage": "https://cdn.freehihi.com/6a01b5a37c981.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_584",
        "id": "frame_584",
        "name": "BTS",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_584",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01b5474a131.png",
        "iconUrl": "https://cdn.freehihi.com/6a01b5474a131.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01b5474a131.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01b5474a131.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01b5474a131.png",
            "iconUrl": "https://cdn.freehihi.com/6a01b5474a131.png",
            "remoteImage": "https://cdn.freehihi.com/6a01b5474a131.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_567",
        "id": "frame_567",
        "name": "UPRIZE DYLAN/DUY LÂN",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_567",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69f9c442b0534.png",
        "iconUrl": "https://cdn.freehihi.com/69f9c442b0534.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69f9c442b0534.png",
        "overlayImageURL": "https://cdn.freehihi.com/69f9c442b0534.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69f9c442b0534.png",
            "iconUrl": "https://cdn.freehihi.com/69f9c442b0534.png",
            "remoteImage": "https://cdn.freehihi.com/69f9c442b0534.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_566",
        "id": "frame_566",
        "name": "UPRIZE DYLAN/DUY Lân",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_566",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69f9c4303b7a8.png",
        "iconUrl": "https://cdn.freehihi.com/69f9c4303b7a8.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69f9c4303b7a8.png",
        "overlayImageURL": "https://cdn.freehihi.com/69f9c4303b7a8.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69f9c4303b7a8.png",
            "iconUrl": "https://cdn.freehihi.com/69f9c4303b7a8.png",
            "remoteImage": "https://cdn.freehihi.com/69f9c4303b7a8.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_533",
        "id": "frame_533",
        "name": "아가공'𝑠 𝑂𝑑𝑦𝑠𝑠𝑒𝑦 — ZEKA (2x2)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_533",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ac4f2346868.png",
        "iconUrl": "https://cdn.freehihi.com/69ac4f2346868.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ac4f2346868.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ac4f2346868.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ac4f2346868.png",
            "iconUrl": "https://cdn.freehihi.com/69ac4f2346868.png",
            "remoteImage": "https://cdn.freehihi.com/69ac4f2346868.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_532",
        "id": "frame_532",
        "name": "아가공'𝑠 𝑂𝑑𝑦𝑠𝑠𝑒𝑦 — ZEKA (1x4)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_532",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ac4f1c3282f.png",
        "iconUrl": "https://cdn.freehihi.com/69ac4f1c3282f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ac4f1c3282f.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ac4f1c3282f.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ac4f1c3282f.png",
            "iconUrl": "https://cdn.freehihi.com/69ac4f1c3282f.png",
            "remoteImage": "https://cdn.freehihi.com/69ac4f1c3282f.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_531",
        "id": "frame_531",
        "name": "Dương Domic",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_531",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/699e18607041b.png",
        "iconUrl": "https://cdn.freehihi.com/699e18607041b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/699e18607041b.png",
        "overlayImageURL": "https://cdn.freehihi.com/699e18607041b.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/699e18607041b.png",
            "iconUrl": "https://cdn.freehihi.com/699e18607041b.png",
            "remoteImage": "https://cdn.freehihi.com/699e18607041b.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_529",
        "id": "frame_529",
        "name": "LLYA Rozanov",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_529",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/699e172e8caa3.png",
        "iconUrl": "https://cdn.freehihi.com/699e172e8caa3.png",
        "overlayImageUrl": "https://cdn.freehihi.com/699e172e8caa3.png",
        "overlayImageURL": "https://cdn.freehihi.com/699e172e8caa3.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/699e172e8caa3.png",
            "iconUrl": "https://cdn.freehihi.com/699e172e8caa3.png",
            "remoteImage": "https://cdn.freehihi.com/699e172e8caa3.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_526",
        "id": "frame_526",
        "name": "Shane Hollander",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_526",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/699c22078a038.png",
        "iconUrl": "https://cdn.freehihi.com/699c22078a038.png",
        "overlayImageUrl": "https://cdn.freehihi.com/699c22078a038.png",
        "overlayImageURL": "https://cdn.freehihi.com/699c22078a038.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/699c22078a038.png",
            "iconUrl": "https://cdn.freehihi.com/699c22078a038.png",
            "remoteImage": "https://cdn.freehihi.com/699c22078a038.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_522",
        "id": "frame_522",
        "name": "tripleS 3rd anniversary",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_522",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/698eb32be5f3e.png",
        "iconUrl": "https://cdn.freehihi.com/698eb32be5f3e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/698eb32be5f3e.png",
        "overlayImageURL": "https://cdn.freehihi.com/698eb32be5f3e.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/698eb32be5f3e.png",
            "iconUrl": "https://cdn.freehihi.com/698eb32be5f3e.png",
            "remoteImage": "https://cdn.freehihi.com/698eb32be5f3e.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_511",
        "id": "frame_511",
        "name": "Doggo's Day",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_511",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/695b91d10ae9f.png",
        "iconUrl": "https://cdn.freehihi.com/695b91d10ae9f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/695b91d10ae9f.png",
        "overlayImageURL": "https://cdn.freehihi.com/695b91d10ae9f.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/695b91d10ae9f.png",
            "iconUrl": "https://cdn.freehihi.com/695b91d10ae9f.png",
            "remoteImage": "https://cdn.freehihi.com/695b91d10ae9f.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_474",
        "id": "frame_474",
        "name": "glorious.blue.eyed.king",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_474",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6929d01fd3d8c.png",
        "iconUrl": "https://cdn.freehihi.com/6929d01fd3d8c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6929d01fd3d8c.png",
        "overlayImageURL": "https://cdn.freehihi.com/6929d01fd3d8c.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6929d01fd3d8c.png",
            "iconUrl": "https://cdn.freehihi.com/6929d01fd3d8c.png",
            "remoteImage": "https://cdn.freehihi.com/6929d01fd3d8c.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_441",
        "id": "frame_441",
        "name": "V(BTS)",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_441",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69024313f210d.png",
        "iconUrl": "https://cdn.freehihi.com/69024313f210d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69024313f210d.png",
        "overlayImageURL": "https://cdn.freehihi.com/69024313f210d.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69024313f210d.png",
            "iconUrl": "https://cdn.freehihi.com/69024313f210d.png",
            "remoteImage": "https://cdn.freehihi.com/69024313f210d.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_427",
        "id": "frame_427",
        "name": "ZEUS TBTW",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_427",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68fdab4e38d77.png",
        "iconUrl": "https://cdn.freehihi.com/68fdab4e38d77.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68fdab4e38d77.png",
        "overlayImageURL": "https://cdn.freehihi.com/68fdab4e38d77.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68fdab4e38d77.png",
            "iconUrl": "https://cdn.freehihi.com/68fdab4e38d77.png",
            "remoteImage": "https://cdn.freehihi.com/68fdab4e38d77.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_413",
        "id": "frame_413",
        "name": "Dear Phúc Nguyên",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_413",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68f762788685d.png",
        "iconUrl": "https://cdn.freehihi.com/68f762788685d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68f762788685d.png",
        "overlayImageURL": "https://cdn.freehihi.com/68f762788685d.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68f762788685d.png",
            "iconUrl": "https://cdn.freehihi.com/68f762788685d.png",
            "remoteImage": "https://cdn.freehihi.com/68f762788685d.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_278",
        "id": "frame_278",
        "name": "AnhTraiSayHi",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_278",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68b0907158035.png",
        "iconUrl": "https://cdn.freehihi.com/68b0907158035.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68b0907158035.png",
        "overlayImageURL": "https://cdn.freehihi.com/68b0907158035.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68b0907158035.png",
            "iconUrl": "https://cdn.freehihi.com/68b0907158035.png",
            "remoteImage": "https://cdn.freehihi.com/68b0907158035.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_270",
        "id": "frame_270",
        "name": "FanNCT_DREAM",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_270",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68ab39da93cd1.png",
        "iconUrl": "https://cdn.freehihi.com/68ab39da93cd1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68ab39da93cd1.png",
        "overlayImageURL": "https://cdn.freehihi.com/68ab39da93cd1.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68ab39da93cd1.png",
            "iconUrl": "https://cdn.freehihi.com/68ab39da93cd1.png",
            "remoteImage": "https://cdn.freehihi.com/68ab39da93cd1.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_269",
        "id": "frame_269",
        "name": "Wxrdie",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_269",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
        "iconUrl": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
        "overlayImageURL": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
            "iconUrl": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
            "remoteImage": "https://cdn.freehihi.com/68aa0dcb8dfa1.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_265",
        "id": "frame_265",
        "name": "Juky San",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_265",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68a98d0834147.png",
        "iconUrl": "https://cdn.freehihi.com/68a98d0834147.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68a98d0834147.png",
        "overlayImageURL": "https://cdn.freehihi.com/68a98d0834147.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68a98d0834147.png",
            "iconUrl": "https://cdn.freehihi.com/68a98d0834147.png",
            "remoteImage": "https://cdn.freehihi.com/68a98d0834147.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_150",
        "id": "frame_150",
        "name": "GenG",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_150",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/686f38fecdb0d.png",
        "iconUrl": "https://cdn.freehihi.com/686f38fecdb0d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/686f38fecdb0d.png",
        "overlayImageURL": "https://cdn.freehihi.com/686f38fecdb0d.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/686f38fecdb0d.png",
            "iconUrl": "https://cdn.freehihi.com/686f38fecdb0d.png",
            "remoteImage": "https://cdn.freehihi.com/686f38fecdb0d.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_123",
        "id": "frame_123",
        "name": "EmXinhSayHi",
        "category": "Frame IDOL Hoạt Họa",
        "prompt": "frame_123",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6856bf7547184.png",
        "iconUrl": "https://cdn.freehihi.com/6856bf7547184.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6856bf7547184.png",
        "overlayImageURL": "https://cdn.freehihi.com/6856bf7547184.png",
        "tintColor": "#F43F5E",
        "colors": [
            "#F43F5E",
            "#FB7185"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FB7185"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6856bf7547184.png",
            "iconUrl": "https://cdn.freehihi.com/6856bf7547184.png",
            "remoteImage": "https://cdn.freehihi.com/6856bf7547184.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_636",
        "id": "frame_636",
        "name": "DisneyMickey (2x2)",
        "category": "Frame Cartoon",
        "prompt": "frame_636",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6cda95869e1.png",
        "iconUrl": "https://cdn.freehihi.com/6a6cda95869e1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6cda95869e1.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6cda95869e1.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6cda95869e1.png",
            "iconUrl": "https://cdn.freehihi.com/6a6cda95869e1.png",
            "remoteImage": "https://cdn.freehihi.com/6a6cda95869e1.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_634",
        "id": "frame_634",
        "name": "Mickey2",
        "category": "Frame Cartoon",
        "prompt": "frame_634",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
        "iconUrl": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
            "iconUrl": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
            "remoteImage": "https://cdn.freehihi.com/6a6cda2b14c8b.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_633",
        "id": "frame_633",
        "name": "Mickey1",
        "category": "Frame Cartoon",
        "prompt": "frame_633",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6cda245682a.png",
        "iconUrl": "https://cdn.freehihi.com/6a6cda245682a.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6cda245682a.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6cda245682a.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6cda245682a.png",
            "iconUrl": "https://cdn.freehihi.com/6a6cda245682a.png",
            "remoteImage": "https://cdn.freehihi.com/6a6cda245682a.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_631",
        "id": "frame_631",
        "name": "DisneyMickey (2x3)",
        "category": "Frame Cartoon",
        "prompt": "frame_631",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6cd91496f81.png",
        "iconUrl": "https://cdn.freehihi.com/6a6cd91496f81.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6cd91496f81.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6cd91496f81.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6cd91496f81.png",
            "iconUrl": "https://cdn.freehihi.com/6a6cd91496f81.png",
            "remoteImage": "https://cdn.freehihi.com/6a6cd91496f81.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_588",
        "id": "frame_588",
        "name": "WeAreBear",
        "category": "Frame Cartoon",
        "prompt": "frame_588",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a0310a2aaf34.png",
        "iconUrl": "https://cdn.freehihi.com/6a0310a2aaf34.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a0310a2aaf34.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a0310a2aaf34.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a0310a2aaf34.png",
            "iconUrl": "https://cdn.freehihi.com/6a0310a2aaf34.png",
            "remoteImage": "https://cdn.freehihi.com/6a0310a2aaf34.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_534",
        "id": "frame_534",
        "name": "thomeo",
        "category": "Frame Cartoon",
        "prompt": "frame_534",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69ae27bd104bf.png",
        "iconUrl": "https://cdn.freehihi.com/69ae27bd104bf.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69ae27bd104bf.png",
        "overlayImageURL": "https://cdn.freehihi.com/69ae27bd104bf.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69ae27bd104bf.png",
            "iconUrl": "https://cdn.freehihi.com/69ae27bd104bf.png",
            "remoteImage": "https://cdn.freehihi.com/69ae27bd104bf.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_484",
        "id": "frame_484",
        "name": "Zootopia",
        "category": "Frame Cartoon",
        "prompt": "frame_484",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692d8418563a1.png",
        "iconUrl": "https://cdn.freehihi.com/692d8418563a1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692d8418563a1.png",
        "overlayImageURL": "https://cdn.freehihi.com/692d8418563a1.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692d8418563a1.png",
            "iconUrl": "https://cdn.freehihi.com/692d8418563a1.png",
            "remoteImage": "https://cdn.freehihi.com/692d8418563a1.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_470",
        "id": "frame_470",
        "name": "Steven Universe",
        "category": "Frame Cartoon",
        "prompt": "frame_470",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6921c4526b985.png",
        "iconUrl": "https://cdn.freehihi.com/6921c4526b985.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6921c4526b985.png",
        "overlayImageURL": "https://cdn.freehihi.com/6921c4526b985.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6921c4526b985.png",
            "iconUrl": "https://cdn.freehihi.com/6921c4526b985.png",
            "remoteImage": "https://cdn.freehihi.com/6921c4526b985.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_333",
        "id": "frame_333",
        "name": "ToyStory",
        "category": "Frame Cartoon",
        "prompt": "frame_333",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68dd4388c0191.png",
        "iconUrl": "https://cdn.freehihi.com/68dd4388c0191.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68dd4388c0191.png",
        "overlayImageURL": "https://cdn.freehihi.com/68dd4388c0191.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68dd4388c0191.png",
            "iconUrl": "https://cdn.freehihi.com/68dd4388c0191.png",
            "remoteImage": "https://cdn.freehihi.com/68dd4388c0191.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_316",
        "id": "frame_316",
        "name": "ShinChanPink",
        "category": "Frame Cartoon",
        "prompt": "frame_316",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68d8f10969679.png",
        "iconUrl": "https://cdn.freehihi.com/68d8f10969679.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68d8f10969679.png",
        "overlayImageURL": "https://cdn.freehihi.com/68d8f10969679.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68d8f10969679.png",
            "iconUrl": "https://cdn.freehihi.com/68d8f10969679.png",
            "remoteImage": "https://cdn.freehihi.com/68d8f10969679.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_231",
        "id": "frame_231",
        "name": "Cinnamoroll",
        "category": "Frame Cartoon",
        "prompt": "frame_231",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/689b4afcb36f1.png",
        "iconUrl": "https://cdn.freehihi.com/689b4afcb36f1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/689b4afcb36f1.png",
        "overlayImageURL": "https://cdn.freehihi.com/689b4afcb36f1.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/689b4afcb36f1.png",
            "iconUrl": "https://cdn.freehihi.com/689b4afcb36f1.png",
            "remoteImage": "https://cdn.freehihi.com/689b4afcb36f1.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_197",
        "id": "frame_197",
        "name": "Gumball",
        "category": "Frame Cartoon",
        "prompt": "frame_197",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/687f0219ebe02.png",
        "iconUrl": "https://cdn.freehihi.com/687f0219ebe02.png",
        "overlayImageUrl": "https://cdn.freehihi.com/687f0219ebe02.png",
        "overlayImageURL": "https://cdn.freehihi.com/687f0219ebe02.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/687f0219ebe02.png",
            "iconUrl": "https://cdn.freehihi.com/687f0219ebe02.png",
            "remoteImage": "https://cdn.freehihi.com/687f0219ebe02.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_195",
        "id": "frame_195",
        "name": "Chiikawa",
        "category": "Frame Cartoon",
        "prompt": "frame_195",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/687cd152e026d.png",
        "iconUrl": "https://cdn.freehihi.com/687cd152e026d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/687cd152e026d.png",
        "overlayImageURL": "https://cdn.freehihi.com/687cd152e026d.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/687cd152e026d.png",
            "iconUrl": "https://cdn.freehihi.com/687cd152e026d.png",
            "remoteImage": "https://cdn.freehihi.com/687cd152e026d.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_170",
        "id": "frame_170",
        "name": "Conan",
        "category": "Frame Cartoon",
        "prompt": "frame_170",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68707f70636a1.png",
        "iconUrl": "https://cdn.freehihi.com/68707f70636a1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68707f70636a1.png",
        "overlayImageURL": "https://cdn.freehihi.com/68707f70636a1.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68707f70636a1.png",
            "iconUrl": "https://cdn.freehihi.com/68707f70636a1.png",
            "remoteImage": "https://cdn.freehihi.com/68707f70636a1.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_155",
        "id": "frame_155",
        "name": "Meme",
        "category": "Frame Cartoon",
        "prompt": "frame_155",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/686f84a47a36d.png",
        "iconUrl": "https://cdn.freehihi.com/686f84a47a36d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/686f84a47a36d.png",
        "overlayImageURL": "https://cdn.freehihi.com/686f84a47a36d.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/686f84a47a36d.png",
            "iconUrl": "https://cdn.freehihi.com/686f84a47a36d.png",
            "remoteImage": "https://cdn.freehihi.com/686f84a47a36d.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_152",
        "id": "frame_152",
        "name": "Stitch",
        "category": "Frame Cartoon",
        "prompt": "frame_152",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/686f44ca41c86.png",
        "iconUrl": "https://cdn.freehihi.com/686f44ca41c86.png",
        "overlayImageUrl": "https://cdn.freehihi.com/686f44ca41c86.png",
        "overlayImageURL": "https://cdn.freehihi.com/686f44ca41c86.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/686f44ca41c86.png",
            "iconUrl": "https://cdn.freehihi.com/686f44ca41c86.png",
            "remoteImage": "https://cdn.freehihi.com/686f44ca41c86.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_138",
        "id": "frame_138",
        "name": "Minion",
        "category": "Frame Cartoon",
        "prompt": "frame_138",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6864a24e4b7e2.png",
        "iconUrl": "https://cdn.freehihi.com/6864a24e4b7e2.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6864a24e4b7e2.png",
        "overlayImageURL": "https://cdn.freehihi.com/6864a24e4b7e2.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6864a24e4b7e2.png",
            "iconUrl": "https://cdn.freehihi.com/6864a24e4b7e2.png",
            "remoteImage": "https://cdn.freehihi.com/6864a24e4b7e2.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_108",
        "id": "frame_108",
        "name": "Loopy (1x4)",
        "category": "Frame Cartoon",
        "prompt": "frame_108",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6852d238938b9.png",
        "iconUrl": "https://cdn.freehihi.com/6852d238938b9.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6852d238938b9.png",
        "overlayImageURL": "https://cdn.freehihi.com/6852d238938b9.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6852d238938b9.png",
            "iconUrl": "https://cdn.freehihi.com/6852d238938b9.png",
            "remoteImage": "https://cdn.freehihi.com/6852d238938b9.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_107",
        "id": "frame_107",
        "name": "Loopy (2x3)",
        "category": "Frame Cartoon",
        "prompt": "frame_107",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6852d220360a8.png",
        "iconUrl": "https://cdn.freehihi.com/6852d220360a8.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6852d220360a8.png",
        "overlayImageURL": "https://cdn.freehihi.com/6852d220360a8.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6852d220360a8.png",
            "iconUrl": "https://cdn.freehihi.com/6852d220360a8.png",
            "remoteImage": "https://cdn.freehihi.com/6852d220360a8.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_105",
        "id": "frame_105",
        "name": "BearBare",
        "category": "Frame Cartoon",
        "prompt": "frame_105",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6852d138ea7bf.png",
        "iconUrl": "https://cdn.freehihi.com/6852d138ea7bf.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6852d138ea7bf.png",
        "overlayImageURL": "https://cdn.freehihi.com/6852d138ea7bf.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6852d138ea7bf.png",
            "iconUrl": "https://cdn.freehihi.com/6852d138ea7bf.png",
            "remoteImage": "https://cdn.freehihi.com/6852d138ea7bf.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_88",
        "id": "frame_88",
        "name": "shinosuke",
        "category": "Frame Cartoon",
        "prompt": "frame_88",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529d27481d8.png",
        "iconUrl": "https://cdn.freehihi.com/68529d27481d8.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529d27481d8.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529d27481d8.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529d27481d8.png",
            "iconUrl": "https://cdn.freehihi.com/68529d27481d8.png",
            "remoteImage": "https://cdn.freehihi.com/68529d27481d8.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_87",
        "id": "frame_87",
        "name": "Powerpuff (2x3)",
        "category": "Frame Cartoon",
        "prompt": "frame_87",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529d1e59ef8.png",
        "iconUrl": "https://cdn.freehihi.com/68529d1e59ef8.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529d1e59ef8.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529d1e59ef8.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529d1e59ef8.png",
            "iconUrl": "https://cdn.freehihi.com/68529d1e59ef8.png",
            "remoteImage": "https://cdn.freehihi.com/68529d1e59ef8.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_81",
        "id": "frame_81",
        "name": "shinnosuke",
        "category": "Frame Cartoon",
        "prompt": "frame_81",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529ccce2380.png",
        "iconUrl": "https://cdn.freehihi.com/68529ccce2380.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529ccce2380.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529ccce2380.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529ccce2380.png",
            "iconUrl": "https://cdn.freehihi.com/68529ccce2380.png",
            "remoteImage": "https://cdn.freehihi.com/68529ccce2380.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_80",
        "id": "frame_80",
        "name": "Powerpuff (1x4)",
        "category": "Frame Cartoon",
        "prompt": "frame_80",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529cb7c6d04.png",
        "iconUrl": "https://cdn.freehihi.com/68529cb7c6d04.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529cb7c6d04.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529cb7c6d04.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529cb7c6d04.png",
            "iconUrl": "https://cdn.freehihi.com/68529cb7c6d04.png",
            "remoteImage": "https://cdn.freehihi.com/68529cb7c6d04.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_70",
        "id": "frame_70",
        "name": "HelloKitty (2x3)",
        "category": "Frame Cartoon",
        "prompt": "frame_70",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529ba92966b.png",
        "iconUrl": "https://cdn.freehihi.com/68529ba92966b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529ba92966b.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529ba92966b.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529ba92966b.png",
            "iconUrl": "https://cdn.freehihi.com/68529ba92966b.png",
            "remoteImage": "https://cdn.freehihi.com/68529ba92966b.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_69",
        "id": "frame_69",
        "name": "HelloKitty (1x4)",
        "category": "Frame Cartoon",
        "prompt": "frame_69",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68529b8f964a4.png",
        "iconUrl": "https://cdn.freehihi.com/68529b8f964a4.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68529b8f964a4.png",
        "overlayImageURL": "https://cdn.freehihi.com/68529b8f964a4.png",
        "tintColor": "#A855F7",
        "colors": [
            "#A855F7",
            "#C084FC"
        ],
        "captureButtonColors": [
            "#A855F7",
            "#C084FC"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68529b8f964a4.png",
            "iconUrl": "https://cdn.freehihi.com/68529b8f964a4.png",
            "remoteImage": "https://cdn.freehihi.com/68529b8f964a4.png",
            "sfSymbol": "paintpalette.fill",
            "symbol": "paintpalette.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_659",
        "id": "frame_659",
        "name": "SẮC SON YODY 2026 (2x2)",
        "category": "Frame Sự Kiện",
        "prompt": "frame_659",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6acd0a350583e.png",
        "iconUrl": "https://cdn.freehihi.com/6acd0a350583e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6acd0a350583e.png",
        "overlayImageURL": "https://cdn.freehihi.com/6acd0a350583e.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6acd0a350583e.png",
            "iconUrl": "https://cdn.freehihi.com/6acd0a350583e.png",
            "remoteImage": "https://cdn.freehihi.com/6acd0a350583e.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_658",
        "id": "frame_658",
        "name": "SẮC SON YODY 2026 (1x4)",
        "category": "Frame Sự Kiện",
        "prompt": "frame_658",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6acd0a2e29fac.png",
        "iconUrl": "https://cdn.freehihi.com/6acd0a2e29fac.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6acd0a2e29fac.png",
        "overlayImageURL": "https://cdn.freehihi.com/6acd0a2e29fac.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6acd0a2e29fac.png",
            "iconUrl": "https://cdn.freehihi.com/6acd0a2e29fac.png",
            "remoteImage": "https://cdn.freehihi.com/6acd0a2e29fac.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_655",
        "id": "frame_655",
        "name": "Vầng Trăng Ngọt Ngào (2x2)",
        "category": "Frame Sự Kiện",
        "prompt": "frame_655",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
        "iconUrl": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
        "overlayImageURL": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
            "iconUrl": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
            "remoteImage": "https://cdn.freehihi.com/6aae5b9d36dbc.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_654",
        "id": "frame_654",
        "name": "Vầng Trăng Ngọt Ngào (1x4)",
        "category": "Frame Sự Kiện",
        "prompt": "frame_654",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6aae5b95e9b50.png",
        "iconUrl": "https://cdn.freehihi.com/6aae5b95e9b50.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6aae5b95e9b50.png",
        "overlayImageURL": "https://cdn.freehihi.com/6aae5b95e9b50.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6aae5b95e9b50.png",
            "iconUrl": "https://cdn.freehihi.com/6aae5b95e9b50.png",
            "remoteImage": "https://cdn.freehihi.com/6aae5b95e9b50.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_629",
        "id": "frame_629",
        "name": "Mèo Simmy Birthday",
        "category": "Frame Sự Kiện",
        "prompt": "frame_629",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
        "iconUrl": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
            "iconUrl": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
            "remoteImage": "https://cdn.freehihi.com/6a6b3fd2dda67.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_617",
        "id": "frame_617",
        "name": "ADP 1ST ANNIVERSARY - YOUNGSEO",
        "category": "Frame Sự Kiện",
        "prompt": "frame_617",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a395d8ec572c.png",
        "iconUrl": "https://cdn.freehihi.com/6a395d8ec572c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a395d8ec572c.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a395d8ec572c.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a395d8ec572c.png",
            "iconUrl": "https://cdn.freehihi.com/6a395d8ec572c.png",
            "remoteImage": "https://cdn.freehihi.com/6a395d8ec572c.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_616",
        "id": "frame_616",
        "name": "ADP 1ST ANNIVERSARY - WOOCHAN",
        "category": "Frame Sự Kiện",
        "prompt": "frame_616",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a395d8323f0e.png",
        "iconUrl": "https://cdn.freehihi.com/6a395d8323f0e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a395d8323f0e.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a395d8323f0e.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a395d8323f0e.png",
            "iconUrl": "https://cdn.freehihi.com/6a395d8323f0e.png",
            "remoteImage": "https://cdn.freehihi.com/6a395d8323f0e.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_615",
        "id": "frame_615",
        "name": "ADP 1ST ANNIVERSARY - BAILEY",
        "category": "Frame Sự Kiện",
        "prompt": "frame_615",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a395d776443d.png",
        "iconUrl": "https://cdn.freehihi.com/6a395d776443d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a395d776443d.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a395d776443d.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a395d776443d.png",
            "iconUrl": "https://cdn.freehihi.com/6a395d776443d.png",
            "remoteImage": "https://cdn.freehihi.com/6a395d776443d.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_614",
        "id": "frame_614",
        "name": "ADP 1ST ANNIVERSARY - TARZZAN",
        "category": "Frame Sự Kiện",
        "prompt": "frame_614",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a395d6f9eb60.png",
        "iconUrl": "https://cdn.freehihi.com/6a395d6f9eb60.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a395d6f9eb60.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a395d6f9eb60.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a395d6f9eb60.png",
            "iconUrl": "https://cdn.freehihi.com/6a395d6f9eb60.png",
            "remoteImage": "https://cdn.freehihi.com/6a395d6f9eb60.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_613",
        "id": "frame_613",
        "name": "ADP 1ST ANNIVERSARY - ANNIE",
        "category": "Frame Sự Kiện",
        "prompt": "frame_613",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a395d658c2e1.png",
        "iconUrl": "https://cdn.freehihi.com/6a395d658c2e1.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a395d658c2e1.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a395d658c2e1.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a395d658c2e1.png",
            "iconUrl": "https://cdn.freehihi.com/6a395d658c2e1.png",
            "remoteImage": "https://cdn.freehihi.com/6a395d658c2e1.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_612",
        "id": "frame_612",
        "name": "ADP 1ST ANNIVERSARY",
        "category": "Frame Sự Kiện",
        "prompt": "frame_612",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a395d5bec1ec.png",
        "iconUrl": "https://cdn.freehihi.com/6a395d5bec1ec.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a395d5bec1ec.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a395d5bec1ec.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a395d5bec1ec.png",
            "iconUrl": "https://cdn.freehihi.com/6a395d5bec1ec.png",
            "remoteImage": "https://cdn.freehihi.com/6a395d5bec1ec.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_594",
        "id": "frame_594",
        "name": "Dương Hoàng Yến's birthday",
        "category": "Frame Sự Kiện",
        "prompt": "frame_594",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
        "iconUrl": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
            "iconUrl": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
            "remoteImage": "https://cdn.freehihi.com/6a1c0fcaa44bf.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_578",
        "id": "frame_578",
        "name": "Tem Du Ký",
        "category": "Frame Sự Kiện",
        "prompt": "frame_578",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a01aacc0defd.png",
        "iconUrl": "https://cdn.freehihi.com/6a01aacc0defd.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a01aacc0defd.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a01aacc0defd.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a01aacc0defd.png",
            "iconUrl": "https://cdn.freehihi.com/6a01aacc0defd.png",
            "remoteImage": "https://cdn.freehihi.com/6a01aacc0defd.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_525",
        "id": "frame_525",
        "name": "⪩. .⪨ 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐞 “𝓟𝓮𝓪𝓷𝓾𝓽” 𝟏𝟏𝐭𝐡 𝐝𝐞𝐛𝐮𝐭: 🥜",
        "category": "Frame Sự Kiện",
        "prompt": "frame_525",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6999b129e6732.png",
        "iconUrl": "https://cdn.freehihi.com/6999b129e6732.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6999b129e6732.png",
        "overlayImageURL": "https://cdn.freehihi.com/6999b129e6732.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6999b129e6732.png",
            "iconUrl": "https://cdn.freehihi.com/6999b129e6732.png",
            "remoteImage": "https://cdn.freehihi.com/6999b129e6732.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_500",
        "id": "frame_500",
        "name": "CHIPANDCOD x \"BÁO\" THỨC IN ĐẬM INDIE",
        "category": "Frame Sự Kiện",
        "prompt": "frame_500",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69403bba702c9.png",
        "iconUrl": "https://cdn.freehihi.com/69403bba702c9.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69403bba702c9.png",
        "overlayImageURL": "https://cdn.freehihi.com/69403bba702c9.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69403bba702c9.png",
            "iconUrl": "https://cdn.freehihi.com/69403bba702c9.png",
            "remoteImage": "https://cdn.freehihi.com/69403bba702c9.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_496",
        "id": "frame_496",
        "name": "DẤU VÂN TAY x \"BÁO\" THỨC IN ĐẬM INDIE",
        "category": "Frame Sự Kiện",
        "prompt": "frame_496",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6933cabb1dd7d.png",
        "iconUrl": "https://cdn.freehihi.com/6933cabb1dd7d.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6933cabb1dd7d.png",
        "overlayImageURL": "https://cdn.freehihi.com/6933cabb1dd7d.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6933cabb1dd7d.png",
            "iconUrl": "https://cdn.freehihi.com/6933cabb1dd7d.png",
            "remoteImage": "https://cdn.freehihi.com/6933cabb1dd7d.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_486",
        "id": "frame_486",
        "name": "BMKTCR x \"BÁO\" THỨC IN ĐẬM INDIE",
        "category": "Frame Sự Kiện",
        "prompt": "frame_486",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692e9bec9d990.png",
        "iconUrl": "https://cdn.freehihi.com/692e9bec9d990.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692e9bec9d990.png",
        "overlayImageURL": "https://cdn.freehihi.com/692e9bec9d990.png",
        "tintColor": "#EF4444",
        "colors": [
            "#EF4444",
            "#F97316"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#F97316"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692e9bec9d990.png",
            "iconUrl": "https://cdn.freehihi.com/692e9bec9d990.png",
            "remoteImage": "https://cdn.freehihi.com/692e9bec9d990.png",
            "sfSymbol": "party.popper.fill",
            "symbol": "party.popper.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_621",
        "id": "frame_621",
        "name": "HANU",
        "category": "Frame Đại Học",
        "prompt": "frame_621",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a5396707e531.png",
        "iconUrl": "https://cdn.freehihi.com/6a5396707e531.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a5396707e531.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a5396707e531.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a5396707e531.png",
            "iconUrl": "https://cdn.freehihi.com/6a5396707e531.png",
            "remoteImage": "https://cdn.freehihi.com/6a5396707e531.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_557",
        "id": "frame_557",
        "name": "ULIS-card",
        "category": "Frame Đại Học",
        "prompt": "frame_557",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c812f05e6.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c812f05e6.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c812f05e6.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c812f05e6.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c812f05e6.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c812f05e6.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c812f05e6.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_556",
        "id": "frame_556",
        "name": "HNUE-card",
        "category": "Frame Đại Học",
        "prompt": "frame_556",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c80096719.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c80096719.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c80096719.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c80096719.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c80096719.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c80096719.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c80096719.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_555",
        "id": "frame_555",
        "name": "HUCE-card",
        "category": "Frame Đại Học",
        "prompt": "frame_555",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c7f141687.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c7f141687.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c7f141687.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c7f141687.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c7f141687.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c7f141687.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c7f141687.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_554",
        "id": "frame_554",
        "name": "TMU-card",
        "category": "Frame Đại Học",
        "prompt": "frame_554",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c7de5f74a.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c7de5f74a.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c7de5f74a.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c7de5f74a.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c7de5f74a.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c7de5f74a.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c7de5f74a.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_553",
        "id": "frame_553",
        "name": "NEU-card",
        "category": "Frame Đại Học",
        "prompt": "frame_553",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c7cdc6fa9.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_552",
        "id": "frame_552",
        "name": "AOF-card",
        "category": "Frame Đại Học",
        "prompt": "frame_552",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c7bcb7dc6.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_551",
        "id": "frame_551",
        "name": "HLU-card",
        "category": "Frame Đại Học",
        "prompt": "frame_551",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
        "iconUrl": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
        "overlayImageURL": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
            "iconUrl": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
            "remoteImage": "https://cdn.freehihi.com/69d9c7ac90c0b.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_462",
        "id": "frame_462",
        "name": "HMU",
        "category": "Frame Đại Học",
        "prompt": "frame_462",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/690dd37aca67e.png",
        "iconUrl": "https://cdn.freehihi.com/690dd37aca67e.png",
        "overlayImageUrl": "https://cdn.freehihi.com/690dd37aca67e.png",
        "overlayImageURL": "https://cdn.freehihi.com/690dd37aca67e.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/690dd37aca67e.png",
            "iconUrl": "https://cdn.freehihi.com/690dd37aca67e.png",
            "remoteImage": "https://cdn.freehihi.com/690dd37aca67e.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_461",
        "id": "frame_461",
        "name": "TMU",
        "category": "Frame Đại Học",
        "prompt": "frame_461",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/690dcf7ed31b6.png",
        "iconUrl": "https://cdn.freehihi.com/690dcf7ed31b6.png",
        "overlayImageUrl": "https://cdn.freehihi.com/690dcf7ed31b6.png",
        "overlayImageURL": "https://cdn.freehihi.com/690dcf7ed31b6.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/690dcf7ed31b6.png",
            "iconUrl": "https://cdn.freehihi.com/690dcf7ed31b6.png",
            "remoteImage": "https://cdn.freehihi.com/690dcf7ed31b6.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_431",
        "id": "frame_431",
        "name": "HAU",
        "category": "Frame Đại Học",
        "prompt": "frame_431",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69020f0f64a7c.png",
        "iconUrl": "https://cdn.freehihi.com/69020f0f64a7c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69020f0f64a7c.png",
        "overlayImageURL": "https://cdn.freehihi.com/69020f0f64a7c.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69020f0f64a7c.png",
            "iconUrl": "https://cdn.freehihi.com/69020f0f64a7c.png",
            "remoteImage": "https://cdn.freehihi.com/69020f0f64a7c.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_390",
        "id": "frame_390",
        "name": "HNUE",
        "category": "Frame Đại Học",
        "prompt": "frame_390",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68f216916ea97.png",
        "iconUrl": "https://cdn.freehihi.com/68f216916ea97.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68f216916ea97.png",
        "overlayImageURL": "https://cdn.freehihi.com/68f216916ea97.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68f216916ea97.png",
            "iconUrl": "https://cdn.freehihi.com/68f216916ea97.png",
            "remoteImage": "https://cdn.freehihi.com/68f216916ea97.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_389",
        "id": "frame_389",
        "name": "NEU",
        "category": "Frame Đại Học",
        "prompt": "frame_389",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68f215d332a18.png",
        "iconUrl": "https://cdn.freehihi.com/68f215d332a18.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68f215d332a18.png",
        "overlayImageURL": "https://cdn.freehihi.com/68f215d332a18.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68f215d332a18.png",
            "iconUrl": "https://cdn.freehihi.com/68f215d332a18.png",
            "remoteImage": "https://cdn.freehihi.com/68f215d332a18.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_388",
        "id": "frame_388",
        "name": "FTU",
        "category": "Frame Đại Học",
        "prompt": "frame_388",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68f2143f188f8.png",
        "iconUrl": "https://cdn.freehihi.com/68f2143f188f8.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68f2143f188f8.png",
        "overlayImageURL": "https://cdn.freehihi.com/68f2143f188f8.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68f2143f188f8.png",
            "iconUrl": "https://cdn.freehihi.com/68f2143f188f8.png",
            "remoteImage": "https://cdn.freehihi.com/68f2143f188f8.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_387",
        "id": "frame_387",
        "name": "AOF",
        "category": "Frame Đại Học",
        "prompt": "frame_387",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68f213652773c.png",
        "iconUrl": "https://cdn.freehihi.com/68f213652773c.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68f213652773c.png",
        "overlayImageURL": "https://cdn.freehihi.com/68f213652773c.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68f213652773c.png",
            "iconUrl": "https://cdn.freehihi.com/68f213652773c.png",
            "remoteImage": "https://cdn.freehihi.com/68f213652773c.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_386",
        "id": "frame_386",
        "name": "BAV",
        "category": "Frame Đại Học",
        "prompt": "frame_386",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68f20a3689a97.png",
        "iconUrl": "https://cdn.freehihi.com/68f20a3689a97.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68f20a3689a97.png",
        "overlayImageURL": "https://cdn.freehihi.com/68f20a3689a97.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68f20a3689a97.png",
            "iconUrl": "https://cdn.freehihi.com/68f20a3689a97.png",
            "remoteImage": "https://cdn.freehihi.com/68f20a3689a97.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_264",
        "id": "frame_264",
        "name": "UEder",
        "category": "Frame Đại Học",
        "prompt": "frame_264",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68a98cd549993.png",
        "iconUrl": "https://cdn.freehihi.com/68a98cd549993.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68a98cd549993.png",
        "overlayImageURL": "https://cdn.freehihi.com/68a98cd549993.png",
        "tintColor": "#3B82F6",
        "colors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "captureButtonColors": [
            "#3B82F6",
            "#60A5FA"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68a98cd549993.png",
            "iconUrl": "https://cdn.freehihi.com/68a98cd549993.png",
            "remoteImage": "https://cdn.freehihi.com/68a98cd549993.png",
            "sfSymbol": "graduationcap.fill",
            "symbol": "graduationcap.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_598",
        "id": "frame_598",
        "name": "Juhoon(cortis)",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_598",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a1d27f0e8447.png",
        "iconUrl": "https://cdn.freehihi.com/6a1d27f0e8447.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a1d27f0e8447.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a1d27f0e8447.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a1d27f0e8447.png",
            "iconUrl": "https://cdn.freehihi.com/6a1d27f0e8447.png",
            "remoteImage": "https://cdn.freehihi.com/6a1d27f0e8447.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_597",
        "id": "frame_597",
        "name": "James(cortis)",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_597",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6a1d27c86e757.png",
        "iconUrl": "https://cdn.freehihi.com/6a1d27c86e757.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6a1d27c86e757.png",
        "overlayImageURL": "https://cdn.freehihi.com/6a1d27c86e757.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6a1d27c86e757.png",
            "iconUrl": "https://cdn.freehihi.com/6a1d27c86e757.png",
            "remoteImage": "https://cdn.freehihi.com/6a1d27c86e757.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_508",
        "id": "frame_508",
        "name": "Jang Wonyoung",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_508",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/69567e9b50731.png",
        "iconUrl": "https://cdn.freehihi.com/69567e9b50731.png",
        "overlayImageUrl": "https://cdn.freehihi.com/69567e9b50731.png",
        "overlayImageURL": "https://cdn.freehihi.com/69567e9b50731.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/69567e9b50731.png",
            "iconUrl": "https://cdn.freehihi.com/69567e9b50731.png",
            "remoteImage": "https://cdn.freehihi.com/69567e9b50731.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_492",
        "id": "frame_492",
        "name": "seonghyeon",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_492",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692edb205f3f0.png",
        "iconUrl": "https://cdn.freehihi.com/692edb205f3f0.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692edb205f3f0.png",
        "overlayImageURL": "https://cdn.freehihi.com/692edb205f3f0.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692edb205f3f0.png",
            "iconUrl": "https://cdn.freehihi.com/692edb205f3f0.png",
            "remoteImage": "https://cdn.freehihi.com/692edb205f3f0.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_479",
        "id": "frame_479",
        "name": "Keonho",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_479",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692c32375296f.png",
        "iconUrl": "https://cdn.freehihi.com/692c32375296f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692c32375296f.png",
        "overlayImageURL": "https://cdn.freehihi.com/692c32375296f.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692c32375296f.png",
            "iconUrl": "https://cdn.freehihi.com/692c32375296f.png",
            "remoteImage": "https://cdn.freehihi.com/692c32375296f.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_478",
        "id": "frame_478",
        "name": "Martin",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_478",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/692c31d942db2.png",
        "iconUrl": "https://cdn.freehihi.com/692c31d942db2.png",
        "overlayImageUrl": "https://cdn.freehihi.com/692c31d942db2.png",
        "overlayImageURL": "https://cdn.freehihi.com/692c31d942db2.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/692c31d942db2.png",
            "iconUrl": "https://cdn.freehihi.com/692c31d942db2.png",
            "remoteImage": "https://cdn.freehihi.com/692c31d942db2.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_465",
        "id": "frame_465",
        "name": "ParkBoGum",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_465",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/6910bc26e14da.png",
        "iconUrl": "https://cdn.freehihi.com/6910bc26e14da.png",
        "overlayImageUrl": "https://cdn.freehihi.com/6910bc26e14da.png",
        "overlayImageURL": "https://cdn.freehihi.com/6910bc26e14da.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/6910bc26e14da.png",
            "iconUrl": "https://cdn.freehihi.com/6910bc26e14da.png",
            "remoteImage": "https://cdn.freehihi.com/6910bc26e14da.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_377",
        "id": "frame_377",
        "name": "Jimin(BTS)",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_377",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68e73af797a67.png",
        "iconUrl": "https://cdn.freehihi.com/68e73af797a67.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68e73af797a67.png",
        "overlayImageURL": "https://cdn.freehihi.com/68e73af797a67.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68e73af797a67.png",
            "iconUrl": "https://cdn.freehihi.com/68e73af797a67.png",
            "remoteImage": "https://cdn.freehihi.com/68e73af797a67.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_375",
        "id": "frame_375",
        "name": "Jin(BTS)",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_375",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68e67ec98245f.png",
        "iconUrl": "https://cdn.freehihi.com/68e67ec98245f.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68e67ec98245f.png",
        "overlayImageURL": "https://cdn.freehihi.com/68e67ec98245f.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68e67ec98245f.png",
            "iconUrl": "https://cdn.freehihi.com/68e67ec98245f.png",
            "remoteImage": "https://cdn.freehihi.com/68e67ec98245f.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_365",
        "id": "frame_365",
        "name": "BlackPink (1x4)",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_365",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68e4e44d42393.png",
        "iconUrl": "https://cdn.freehihi.com/68e4e44d42393.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68e4e44d42393.png",
        "overlayImageURL": "https://cdn.freehihi.com/68e4e44d42393.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68e4e44d42393.png",
            "iconUrl": "https://cdn.freehihi.com/68e4e44d42393.png",
            "remoteImage": "https://cdn.freehihi.com/68e4e44d42393.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_364",
        "id": "frame_364",
        "name": "Jisoo",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_364",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68e4dff09e6d5.png",
        "iconUrl": "https://cdn.freehihi.com/68e4dff09e6d5.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68e4dff09e6d5.png",
        "overlayImageURL": "https://cdn.freehihi.com/68e4dff09e6d5.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68e4dff09e6d5.png",
            "iconUrl": "https://cdn.freehihi.com/68e4dff09e6d5.png",
            "remoteImage": "https://cdn.freehihi.com/68e4dff09e6d5.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_276",
        "id": "frame_276",
        "name": "DPR IAN",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_276",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68b0244e76e35.png",
        "iconUrl": "https://cdn.freehihi.com/68b0244e76e35.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68b0244e76e35.png",
        "overlayImageURL": "https://cdn.freehihi.com/68b0244e76e35.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68b0244e76e35.png",
            "iconUrl": "https://cdn.freehihi.com/68b0244e76e35.png",
            "remoteImage": "https://cdn.freehihi.com/68b0244e76e35.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "frame_252",
        "id": "frame_252",
        "name": "QH MasterD",
        "category": "Frame Chụp Cùng Idol",
        "prompt": "frame_252",
        "style": "cutout",
        "type": "normal",
        "filterType": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.freehihi.com/68a463c666438.png",
        "iconUrl": "https://cdn.freehihi.com/68a463c666438.png",
        "overlayImageUrl": "https://cdn.freehihi.com/68a463c666438.png",
        "overlayImageURL": "https://cdn.freehihi.com/68a463c666438.png",
        "tintColor": "#EC4899",
        "colors": [
            "#EC4899",
            "#F472B6"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F472B6"
        ],
        "icon": {
            "url": "https://cdn.freehihi.com/68a463c666438.png",
            "iconUrl": "https://cdn.freehihi.com/68a463c666438.png",
            "remoteImage": "https://cdn.freehihi.com/68a463c666438.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true
    },
    {
        "uid": "stk_dio_pm2",
        "id": "stk_dio_pm2",
        "name": "Practical Magic 2",
        "prompt": "locket",
        "productUrl": null,
        "colors": [
            "#7C3AED",
            "#C4B5FD"
        ],
        "captureButtonColors": [
            "#7C3AED",
            "#C4B5FD"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_pm2.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_looksmaxing",
        "id": "stk_dio_looksmaxing",
        "name": "Looks-Maxxing",
        "prompt": "looks_maxxing",
        "productUrl": null,
        "colors": [
            "#F59E0B",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#F59E0B",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_looksmaxing.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_influencer",
        "id": "stk_dio_influencer",
        "name": "Influencer",
        "prompt": "influencer",
        "productUrl": null,
        "colors": [
            "#EC4899",
            "#F9A8D4"
        ],
        "captureButtonColors": [
            "#EC4899",
            "#F9A8D4"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_influencer.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_toothless",
        "id": "stk_dio_toothless",
        "name": "Toothless",
        "prompt": "toothless",
        "productUrl": null,
        "colors": [
            "#0F172A",
            "#64748B"
        ],
        "captureButtonColors": [
            "#0F172A",
            "#64748B"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_toothless.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_orange_wig",
        "id": "stk_dio_orange_wig",
        "name": "Okay Wig",
        "prompt": "okay_wig",
        "productUrl": null,
        "colors": [
            "#F97316",
            "#FDBA74"
        ],
        "captureButtonColors": [
            "#F97316",
            "#FDBA74"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_orange_wig.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_bye_brows",
        "id": "stk_dio_bye_brows",
        "name": "Bye Brows",
        "prompt": "bye_brows",
        "productUrl": null,
        "colors": [
            "#A8A29E",
            "#E7E5E4"
        ],
        "captureButtonColors": [
            "#A8A29E",
            "#E7E5E4"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bye_brows.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_braces",
        "id": "stk_dio_braces",
        "name": "Braces",
        "prompt": "braces",
        "productUrl": null,
        "colors": [
            "#38BDF8",
            "#E0F2FE"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#E0F2FE"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_braces.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_tatted",
        "id": "stk_dio_tatted",
        "name": "Tatted",
        "prompt": "tatted",
        "productUrl": null,
        "colors": [
            "#111827",
            "#6B7280"
        ],
        "captureButtonColors": [
            "#111827",
            "#6B7280"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_tatted.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_bearded",
        "id": "stk_dio_bearded",
        "name": "Beard",
        "prompt": "beard",
        "productUrl": null,
        "colors": [
            "#78350F",
            "#D6A36A"
        ],
        "captureButtonColors": [
            "#78350F",
            "#D6A36A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_buns",
        "id": "stk_dio_buns",
        "name": "Buns",
        "prompt": "buns",
        "productUrl": null,
        "colors": [
            "#F472B6",
            "#FBCFE8"
        ],
        "captureButtonColors": [
            "#F472B6",
            "#FBCFE8"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_buns.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_mohawk",
        "id": "stk_dio_mohawk",
        "name": "Mohawk",
        "prompt": "mohawk",
        "productUrl": null,
        "colors": [
            "#EF4444",
            "#FCA5A5"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#FCA5A5"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_mohawk.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_bob",
        "id": "stk_dio_bob",
        "name": "Bob Cut",
        "prompt": "bob_cut",
        "productUrl": null,
        "colors": [
            "#1F2937",
            "#9CA3AF"
        ],
        "captureButtonColors": [
            "#1F2937",
            "#9CA3AF"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bob.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_bowling_ball",
        "id": "stk_dio_bowling_ball",
        "name": "Bowling Ball",
        "prompt": "bowling_ball",
        "productUrl": null,
        "colors": [
            "#111827",
            "#4B5563"
        ],
        "captureButtonColors": [
            "#111827",
            "#4B5563"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bowling_ball.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_bleached_hair",
        "id": "stk_dio_bleached_hair",
        "name": "Blond & Bleached",
        "prompt": "blonde_bleached",
        "productUrl": null,
        "colors": [
            "#FACC15",
            "#FEF3C7"
        ],
        "captureButtonColors": [
            "#FACC15",
            "#FEF3C7"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bleached_hair.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_princess",
        "id": "stk_dio_princess",
        "name": "Princess",
        "prompt": "princess",
        "productUrl": null,
        "colors": [
            "#F472B6",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#F472B6",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_princess.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_cash",
        "id": "stk_dio_cash",
        "name": "Ca$h Money",
        "prompt": "cash_money",
        "productUrl": null,
        "colors": [
            "#22C55E",
            "#BBF7D0"
        ],
        "captureButtonColors": [
            "#22C55E",
            "#BBF7D0"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cash.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_slimed",
        "id": "stk_dio_slimed",
        "name": "Slimed",
        "prompt": "slimed",
        "productUrl": null,
        "colors": [
            "#84CC16",
            "#D9F99D"
        ],
        "captureButtonColors": [
            "#84CC16",
            "#D9F99D"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_slimed.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_happy_birthday",
        "id": "stk_dio_happy_birthday",
        "name": "Happy Birthday",
        "prompt": "happy_birthday",
        "productUrl": null,
        "colors": [
            "#F97316",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#F97316",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_happy_birthday.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "disco_lights",
        "id": "disco_lights",
        "name": "Disco",
        "prompt": "Show the persons in the photo with the exact same pose and background, but with disco-style lighting effects cast across the scene, captured with a modern iPhone camera look.\n\nAdd dynamic, multicolored disco light patterns projected onto the subject and background, including soft circular light spots and scattered beams in colors like red, blue, green, and purple. The lights should appear as if coming from an off-camera rotating disco ball or party light, with varying intensity and size across the frame.\n\nEnsure the light spots wrap naturally over the contours of the face, clothing, and environment, slightly warping with surface curvature. Some lights can appear sharper while others are softly diffused depending on depth of field and distance. Include subtle motion blur or variation in brightness to suggest movement without overwhelming the image.\n\nThe lighting should interact realistically with the existing scene, blending with the original light sources rather than replacing them. Maintain proper shadow behavior and avoid flattening the subject.\n\nApply modern iPhone camera characteristics across the entire image: natural HDR, crisp subject detail, balanced highlights and shadows, and slightly vibrant but realistic colors. The disco lights should inherit this same processing so they feel captured in-camera.\n\nDo not alter the person’s face, expression, identity, or pose. Keep the background, framing, depth of field, and image quality exactly the same, with the lighting effect appearing as a natural part of the scene. Do not change the overall compsition of the photo, do not add new people to the photo, only show each person in the photo one time.",
        "productUrl": null,
        "colors": [
            "#8B5CF6",
            "#C4B5FD"
        ],
        "captureButtonColors": [
            "#8B5CF6",
            "#C4B5FD"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_disco.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_flower_crown",
        "id": "stk_dio_flower_crown",
        "name": "Flower Crown",
        "prompt": "flower_crown",
        "productUrl": null,
        "colors": [
            "#FB7185",
            "#BBF7D0"
        ],
        "captureButtonColors": [
            "#FB7185",
            "#BBF7D0"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_flower_crown.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_cutesy",
        "id": "stk_dio_cutesy",
        "name": "Cutesy",
        "prompt": "cutesy",
        "productUrl": null,
        "colors": [
            "#F9A8D4",
            "#FCE7F3"
        ],
        "captureButtonColors": [
            "#F9A8D4",
            "#FCE7F3"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cutesy.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_sticker_face",
        "id": "stk_dio_sticker_face",
        "name": "Sticker Face",
        "prompt": "sticker_face",
        "productUrl": null,
        "colors": [
            "#FBBF24",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#FBBF24",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sticker_face.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_love_bug",
        "id": "stk_dio_love_bug",
        "name": "Love Bug",
        "prompt": "love_bug",
        "productUrl": null,
        "colors": [
            "#F43F5E",
            "#FECDD3"
        ],
        "captureButtonColors": [
            "#F43F5E",
            "#FECDD3"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_love_bug.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_cowboy",
        "id": "stk_dio_cowboy",
        "name": "Cowboy & Cowgirl",
        "prompt": "cowboy_cowgirl",
        "productUrl": null,
        "colors": [
            "#B45309",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#B45309",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_cowboy.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_giraffe",
        "id": "stk_dio_giraffe",
        "name": "Giraffe",
        "prompt": "giraffe",
        "productUrl": null,
        "colors": [
            "#D97706",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#D97706",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_giraffe.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_wedding",
        "id": "stk_dio_wedding",
        "name": "Wedding",
        "prompt": "wedding",
        "productUrl": null,
        "colors": [
            "#F8FAFC",
            "#E2E8F0"
        ],
        "captureButtonColors": [
            "#F8FAFC",
            "#E2E8F0"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_wedding.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_clown",
        "id": "stk_dio_clown",
        "name": "Clown",
        "prompt": "clown",
        "productUrl": null,
        "colors": [
            "#EF4444",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#EF4444",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_clown.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_sweat_hearts",
        "id": "stk_dio_sweat_hearts",
        "name": "Sweet Hearts",
        "prompt": "sweet_hearts",
        "productUrl": null,
        "colors": [
            "#FB7185",
            "#FCE7F3"
        ],
        "captureButtonColors": [
            "#FB7185",
            "#FCE7F3"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_sweat_hearts.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_bearded_holiday",
        "id": "stk_dio_bearded_holiday",
        "name": "Bearded",
        "prompt": "bearded",
        "productUrl": null,
        "colors": [
            "#78350F",
            "#D6A36A"
        ],
        "captureButtonColors": [
            "#78350F",
            "#D6A36A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_bearded.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_frosty",
        "id": "stk_dio_frosty",
        "name": "Frosty",
        "prompt": "frosty",
        "productUrl": null,
        "colors": [
            "#38BDF8",
            "#E0F2FE"
        ],
        "captureButtonColors": [
            "#38BDF8",
            "#E0F2FE"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_frosty.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_elf",
        "id": "stk_dio_elf",
        "name": "Elf",
        "prompt": "elf_cutout",
        "productUrl": null,
        "colors": [
            "#16A34A",
            "#FACC15"
        ],
        "captureButtonColors": [
            "#16A34A",
            "#FACC15"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_elf.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_santa",
        "id": "stk_dio_santa",
        "name": "Santa",
        "prompt": "santa_cutout",
        "productUrl": null,
        "colors": [
            "#DC2626",
            "#F8FAFC"
        ],
        "captureButtonColors": [
            "#DC2626",
            "#F8FAFC"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_santa.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_easter_bunny",
        "id": "stk_dio_easter_bunny",
        "name": "Easter Bunny",
        "prompt": "easter_bunney_cutout",
        "productUrl": null,
        "colors": [
            "#F9A8D4",
            "#E9D5FF"
        ],
        "captureButtonColors": [
            "#F9A8D4",
            "#E9D5FF"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_bunny.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_leprechaun",
        "id": "stk_dio_leprechaun",
        "name": "Leprechaun",
        "prompt": "leprechaun",
        "productUrl": null,
        "colors": [
            "#15803D",
            "#FACC15"
        ],
        "captureButtonColors": [
            "#15803D",
            "#FACC15"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_leprechaun.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_easter_chick",
        "id": "stk_dio_easter_chick",
        "name": "Easter Chick",
        "prompt": "easter_chick_cutout",
        "productUrl": null,
        "colors": [
            "#FACC15",
            "#FDE68A"
        ],
        "captureButtonColors": [
            "#FACC15",
            "#FDE68A"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_easter_chick.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    },
    {
        "uid": "stk_dio_lucky_face",
        "id": "stk_dio_lucky_face",
        "name": "Lucky Face",
        "prompt": "lucky_face",
        "productUrl": null,
        "colors": [
            "#22C55E",
            "#BBF7D0"
        ],
        "captureButtonColors": [
            "#22C55E",
            "#BBF7D0"
        ],
        "icon": {
            "url": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
            "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
            "remoteImage": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
            "sfSymbol": "sparkles",
            "emoji": ""
        },
        "textColor": "#FFFFFF",
        "style": "cutout",
        "overlay": true,
        "overlayImageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
        "overlayImageURL": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
        "imageUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
        "iconUrl": "https://uplocket.io.vn/uploads/stickers/stk_dio_lucky_face.png",
        "referenceImages": [],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true,
        "allowsTryFilter": true,
        "allows_try_filter": true,
        "tryButtonEnabled": true,
        "try_button_enabled": true,
        "type": "normal",
        "filterType": "cutout"
    }
];

var customFilterGroups = [
    {
        "id": "group_color_filters",
        "title": {
            "en": "Bộ Lọc Màu Điện Ảnh 🎨",
            "vi": "Bộ Lọc Màu Điện Ảnh 🎨"
        },
        "filterIds": [
            "color_film_vintage",
            "color_korean_glow",
            "color_black_white_noir",
            "color_golden_sunset",
            "color_cyberpunk_neon",
            "color_teal_orange",
            "color_polaroid_dream",
            "color_fuji_classic",
            "color_kodak_portra",
            "color_cold_nordic",
            "color_retro_sunset",
            "color_indie_mood",
            "color_matcha_green",
            "color_peach_sweet",
            "color_silver_cinema",
            "color_warm_sunshine"
        ],
        "filter_ids": [
            "color_film_vintage",
            "color_korean_glow",
            "color_black_white_noir",
            "color_golden_sunset",
            "color_cyberpunk_neon",
            "color_teal_orange",
            "color_polaroid_dream",
            "color_fuji_classic",
            "color_kodak_portra",
            "color_cold_nordic",
            "color_retro_sunset",
            "color_indie_mood",
            "color_matcha_green",
            "color_peach_sweet",
            "color_silver_cinema",
            "color_warm_sunshine"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_hot_ai_custom",
        "title": {
            "en": "Hiệu Ứng AI Hot Độc Quyền ✨",
            "vi": "Hiệu Ứng AI Hot Độc Quyền ✨"
        },
        "filterIds": [
            "ai_shipper_grab",
            "ai_shipper_shopee",
            "ai_anime_ghibli",
            "ai_cyber_cyborg",
            "ai_angel_wings",
            "ai_barbie_doll",
            "ai_claymation_3d",
            "ai_retro_comic",
            "ai_neon_devil",
            "ai_royal_monarch",
            "ai_galaxy_cosmic",
            "ai_steampunk_inventor",
            "ai_vampire_gothic",
            "ai_disney_pixar",
            "ai_matrix_glitch",
            "ai_y2k_cyber",
            "ai_chibi_mecha"
        ],
        "filter_ids": [
            "ai_shipper_grab",
            "ai_shipper_shopee",
            "ai_anime_ghibli",
            "ai_cyber_cyborg",
            "ai_angel_wings",
            "ai_barbie_doll",
            "ai_claymation_3d",
            "ai_retro_comic",
            "ai_neon_devil",
            "ai_royal_monarch",
            "ai_galaxy_cosmic",
            "ai_steampunk_inventor",
            "ai_vampire_gothic",
            "ai_disney_pixar",
            "ai_matrix_glitch",
            "ai_y2k_cyber",
            "ai_chibi_mecha"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_amazing",
        "title": {
            "en": "Khung Amazing ⭐️",
            "vi": "Khung Amazing ⭐️"
        },
        "filterIds": [
            "frame_664",
            "frame_653",
            "frame_652",
            "frame_651",
            "frame_647",
            "frame_646",
            "frame_645",
            "frame_591",
            "frame_590",
            "frame_583",
            "frame_582",
            "frame_580",
            "frame_579",
            "frame_577",
            "frame_576",
            "frame_575",
            "frame_573",
            "frame_571",
            "frame_570",
            "frame_569",
            "frame_568",
            "frame_564",
            "frame_563",
            "frame_524",
            "frame_509",
            "frame_507",
            "frame_506",
            "frame_504",
            "frame_495",
            "frame_493",
            "frame_491",
            "frame_483",
            "frame_473",
            "frame_472",
            "frame_471",
            "frame_455",
            "frame_385",
            "frame_379",
            "frame_358",
            "frame_334",
            "frame_327",
            "frame_325",
            "frame_319",
            "frame_317",
            "frame_314",
            "frame_312",
            "frame_311",
            "frame_298",
            "frame_297",
            "frame_248",
            "frame_237",
            "frame_223",
            "frame_206",
            "frame_192",
            "frame_185",
            "frame_184",
            "frame_167",
            "frame_118",
            "frame_91",
            "frame_85",
            "frame_84",
            "frame_78",
            "frame_77",
            "frame_76",
            "frame_75",
            "frame_74",
            "frame_68",
            "frame_66"
        ],
        "filter_ids": [
            "frame_664",
            "frame_653",
            "frame_652",
            "frame_651",
            "frame_647",
            "frame_646",
            "frame_645",
            "frame_591",
            "frame_590",
            "frame_583",
            "frame_582",
            "frame_580",
            "frame_579",
            "frame_577",
            "frame_576",
            "frame_575",
            "frame_573",
            "frame_571",
            "frame_570",
            "frame_569",
            "frame_568",
            "frame_564",
            "frame_563",
            "frame_524",
            "frame_509",
            "frame_507",
            "frame_506",
            "frame_504",
            "frame_495",
            "frame_493",
            "frame_491",
            "frame_483",
            "frame_473",
            "frame_472",
            "frame_471",
            "frame_455",
            "frame_385",
            "frame_379",
            "frame_358",
            "frame_334",
            "frame_327",
            "frame_325",
            "frame_319",
            "frame_317",
            "frame_314",
            "frame_312",
            "frame_311",
            "frame_298",
            "frame_297",
            "frame_248",
            "frame_237",
            "frame_223",
            "frame_206",
            "frame_192",
            "frame_185",
            "frame_184",
            "frame_167",
            "frame_118",
            "frame_91",
            "frame_85",
            "frame_84",
            "frame_78",
            "frame_77",
            "frame_76",
            "frame_75",
            "frame_74",
            "frame_68",
            "frame_66"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_basic",
        "title": {
            "en": "Khung Basic 📸",
            "vi": "Khung Basic 📸"
        },
        "filterIds": [
            "frame_649",
            "frame_648",
            "frame_637",
            "frame_635",
            "frame_632",
            "frame_626",
            "frame_572",
            "frame_562",
            "frame_561",
            "frame_558",
            "frame_550",
            "frame_549",
            "frame_548",
            "frame_541",
            "frame_539",
            "frame_538",
            "frame_482",
            "frame_354",
            "frame_353",
            "frame_352",
            "frame_351",
            "frame_350",
            "frame_349",
            "frame_348",
            "frame_347",
            "frame_346",
            "frame_345",
            "frame_343",
            "frame_342",
            "frame_341",
            "frame_340",
            "frame_339",
            "frame_338",
            "frame_337",
            "frame_336",
            "frame_335",
            "frame_224",
            "frame_176",
            "frame_175",
            "frame_133",
            "frame_129"
        ],
        "filter_ids": [
            "frame_649",
            "frame_648",
            "frame_637",
            "frame_635",
            "frame_632",
            "frame_626",
            "frame_572",
            "frame_562",
            "frame_561",
            "frame_558",
            "frame_550",
            "frame_549",
            "frame_548",
            "frame_541",
            "frame_539",
            "frame_538",
            "frame_482",
            "frame_354",
            "frame_353",
            "frame_352",
            "frame_351",
            "frame_350",
            "frame_349",
            "frame_348",
            "frame_347",
            "frame_346",
            "frame_345",
            "frame_343",
            "frame_342",
            "frame_341",
            "frame_340",
            "frame_339",
            "frame_338",
            "frame_337",
            "frame_336",
            "frame_335",
            "frame_224",
            "frame_176",
            "frame_175",
            "frame_133",
            "frame_129"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_idol_cartoon",
        "title": {
            "en": "Khung IDOL Hoạt Họa ✨",
            "vi": "Khung IDOL Hoạt Họa ✨"
        },
        "filterIds": [
            "frame_667",
            "frame_662",
            "frame_643",
            "frame_641",
            "frame_640",
            "frame_639",
            "frame_638",
            "frame_625",
            "frame_624",
            "frame_623",
            "frame_620",
            "frame_619",
            "frame_618",
            "frame_596",
            "frame_595",
            "frame_593",
            "frame_592",
            "frame_587",
            "frame_586",
            "frame_585",
            "frame_584",
            "frame_567",
            "frame_566",
            "frame_533",
            "frame_532",
            "frame_531",
            "frame_529",
            "frame_526",
            "frame_522",
            "frame_511",
            "frame_474",
            "frame_441",
            "frame_427",
            "frame_413",
            "frame_278",
            "frame_270",
            "frame_269",
            "frame_265",
            "frame_150",
            "frame_123"
        ],
        "filter_ids": [
            "frame_667",
            "frame_662",
            "frame_643",
            "frame_641",
            "frame_640",
            "frame_639",
            "frame_638",
            "frame_625",
            "frame_624",
            "frame_623",
            "frame_620",
            "frame_619",
            "frame_618",
            "frame_596",
            "frame_595",
            "frame_593",
            "frame_592",
            "frame_587",
            "frame_586",
            "frame_585",
            "frame_584",
            "frame_567",
            "frame_566",
            "frame_533",
            "frame_532",
            "frame_531",
            "frame_529",
            "frame_526",
            "frame_522",
            "frame_511",
            "frame_474",
            "frame_441",
            "frame_427",
            "frame_413",
            "frame_278",
            "frame_270",
            "frame_269",
            "frame_265",
            "frame_150",
            "frame_123"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_cartoon",
        "title": {
            "en": "Khung Cartoon 🎨",
            "vi": "Khung Cartoon 🎨"
        },
        "filterIds": [
            "frame_636",
            "frame_634",
            "frame_633",
            "frame_631",
            "frame_588",
            "frame_534",
            "frame_484",
            "frame_470",
            "frame_333",
            "frame_316",
            "frame_231",
            "frame_197",
            "frame_195",
            "frame_170",
            "frame_155",
            "frame_152",
            "frame_138",
            "frame_108",
            "frame_107",
            "frame_105",
            "frame_88",
            "frame_87",
            "frame_81",
            "frame_80",
            "frame_70",
            "frame_69"
        ],
        "filter_ids": [
            "frame_636",
            "frame_634",
            "frame_633",
            "frame_631",
            "frame_588",
            "frame_534",
            "frame_484",
            "frame_470",
            "frame_333",
            "frame_316",
            "frame_231",
            "frame_197",
            "frame_195",
            "frame_170",
            "frame_155",
            "frame_152",
            "frame_138",
            "frame_108",
            "frame_107",
            "frame_105",
            "frame_88",
            "frame_87",
            "frame_81",
            "frame_80",
            "frame_70",
            "frame_69"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_event",
        "title": {
            "en": "Khung Sự Kiện 🎉",
            "vi": "Khung Sự Kiện 🎉"
        },
        "filterIds": [
            "frame_659",
            "frame_658",
            "frame_655",
            "frame_654",
            "frame_629",
            "frame_617",
            "frame_616",
            "frame_615",
            "frame_614",
            "frame_613",
            "frame_612",
            "frame_594",
            "frame_578",
            "frame_525",
            "frame_500",
            "frame_496",
            "frame_486"
        ],
        "filter_ids": [
            "frame_659",
            "frame_658",
            "frame_655",
            "frame_654",
            "frame_629",
            "frame_617",
            "frame_616",
            "frame_615",
            "frame_614",
            "frame_613",
            "frame_612",
            "frame_594",
            "frame_578",
            "frame_525",
            "frame_500",
            "frame_496",
            "frame_486"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_university",
        "title": {
            "en": "Khung Đại Học 🎓",
            "vi": "Khung Đại Học 🎓"
        },
        "filterIds": [
            "frame_621",
            "frame_557",
            "frame_556",
            "frame_555",
            "frame_554",
            "frame_553",
            "frame_552",
            "frame_551",
            "frame_462",
            "frame_461",
            "frame_431",
            "frame_390",
            "frame_389",
            "frame_388",
            "frame_387",
            "frame_386",
            "frame_264"
        ],
        "filter_ids": [
            "frame_621",
            "frame_557",
            "frame_556",
            "frame_555",
            "frame_554",
            "frame_553",
            "frame_552",
            "frame_551",
            "frame_462",
            "frame_461",
            "frame_431",
            "frame_390",
            "frame_389",
            "frame_388",
            "frame_387",
            "frame_386",
            "frame_264"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_pb_idol",
        "title": {
            "en": "Khung Chụp Cùng Idol 💖",
            "vi": "Khung Chụp Cùng Idol 💖"
        },
        "filterIds": [
            "frame_598",
            "frame_597",
            "frame_508",
            "frame_492",
            "frame_479",
            "frame_478",
            "frame_465",
            "frame_377",
            "frame_375",
            "frame_365",
            "frame_364",
            "frame_276",
            "frame_252"
        ],
        "filter_ids": [
            "frame_598",
            "frame_597",
            "frame_508",
            "frame_492",
            "frame_479",
            "frame_478",
            "frame_465",
            "frame_377",
            "frame_375",
            "frame_365",
            "frame_364",
            "frame_276",
            "frame_252"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_hot_ai_3d",
        "title": {
            "en": "Hiệu Ứng AI 3D Hot 🔥",
            "vi": "Hiệu Ứng AI 3D Hot 🔥"
        },
        "filterIds": [
            "ai_shipper_grab",
            "ai_shipper_shopee",
            "ai_anime_ghibli",
            "ai_cyber_cyborg",
            "ai_angel_wings",
            "ai_barbie_doll",
            "ai_claymation_3d",
            "ai_retro_comic",
            "ai_neon_devil",
            "ai_royal_monarch",
            "ai_galaxy_cosmic",
            "ai_steampunk_inventor",
            "ai_vampire_gothic",
            "ai_disney_pixar",
            "ai_matrix_glitch",
            "ai_y2k_cyber",
            "ai_chibi_mecha",
            "stk_rose_flower",
            "stk_shrek_ogre",
            "stk_superhero_cape",
            "stk_spooky_ghost",
            "stk_pirate_hat",
            "stk_volcano_lava",
            "stk_rain_storm",
            "stk_fortnite_llama",
            "stk_watercolor_art",
            "stk_golden_hour",
            "stk_jungle_leaf",
            "stk_cute_zombie",
            "stk_fireworks",
            "stk_new_year_2026",
            "stk_harry_potter",
            "stk_minecraft",
            "stk_fire_flame",
            "stk_giant_spider",
            "stk_ocean_underwater",
            "stk_ufo_alien"
        ],
        "filter_ids": [
            "ai_shipper_grab",
            "ai_shipper_shopee",
            "ai_anime_ghibli",
            "ai_cyber_cyborg",
            "ai_angel_wings",
            "ai_barbie_doll",
            "ai_claymation_3d",
            "ai_retro_comic",
            "ai_neon_devil",
            "ai_royal_monarch",
            "ai_galaxy_cosmic",
            "ai_steampunk_inventor",
            "ai_vampire_gothic",
            "ai_disney_pixar",
            "ai_matrix_glitch",
            "ai_y2k_cyber",
            "ai_chibi_mecha",
            "stk_rose_flower",
            "stk_shrek_ogre",
            "stk_superhero_cape",
            "stk_spooky_ghost",
            "stk_pirate_hat",
            "stk_volcano_lava",
            "stk_rain_storm",
            "stk_fortnite_llama",
            "stk_watercolor_art",
            "stk_golden_hour",
            "stk_jungle_leaf",
            "stk_cute_zombie",
            "stk_fireworks",
            "stk_new_year_2026",
            "stk_harry_potter",
            "stk_minecraft",
            "stk_fire_flame",
            "stk_giant_spider",
            "stk_ocean_underwater",
            "stk_ufo_alien"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_mischief",
        "title": {
            "en": "Tinh nghịch",
            "vi": "Tinh nghịch"
        },
        "filterIds": [
            "stk_dio_looksmaxing",
            "stk_dio_influencer",
            "stk_dio_toothless",
            "stk_dio_orange_wig"
        ],
        "filter_ids": [
            "stk_dio_looksmaxing",
            "stk_dio_influencer",
            "stk_dio_toothless",
            "stk_dio_orange_wig"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_appearance",
        "title": {
            "en": "Ngoại hình",
            "vi": "Ngoại hình"
        },
        "filterIds": [
            "stk_dio_bye_brows",
            "stk_dio_braces",
            "stk_dio_tatted",
            "stk_dio_bearded",
            "stk_dio_buns",
            "stk_dio_mohawk",
            "stk_dio_bob",
            "stk_dio_bowling_ball",
            "stk_dio_bleached_hair"
        ],
        "filter_ids": [
            "stk_dio_bye_brows",
            "stk_dio_braces",
            "stk_dio_tatted",
            "stk_dio_bearded",
            "stk_dio_buns",
            "stk_dio_mohawk",
            "stk_dio_bob",
            "stk_dio_bowling_ball",
            "stk_dio_bleached_hair"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_celebrate",
        "title": {
            "en": "Ăn mừng",
            "vi": "Ăn mừng"
        },
        "filterIds": [
            "stk_dio_princess",
            "stk_dio_cash",
            "stk_dio_slimed",
            "stk_dio_happy_birthday",
            "disco_lights"
        ],
        "filter_ids": [
            "stk_dio_princess",
            "stk_dio_cash",
            "stk_dio_slimed",
            "stk_dio_happy_birthday",
            "disco_lights"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_cute",
        "title": {
            "en": "Dễ thương",
            "vi": "Dễ thương"
        },
        "filterIds": [
            "stk_dio_flower_crown",
            "stk_dio_cutesy",
            "stk_dio_sticker_face",
            "stk_dio_love_bug"
        ],
        "filter_ids": [
            "stk_dio_flower_crown",
            "stk_dio_cutesy",
            "stk_dio_sticker_face",
            "stk_dio_love_bug"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_costume",
        "title": {
            "en": "Trang phục",
            "vi": "Trang phục"
        },
        "filterIds": [
            "stk_dio_cowboy",
            "stk_dio_giraffe",
            "stk_dio_wedding",
            "stk_dio_clown"
        ],
        "filter_ids": [
            "stk_dio_cowboy",
            "stk_dio_giraffe",
            "stk_dio_wedding",
            "stk_dio_clown"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    },
    {
        "id": "group_holiday",
        "title": {
            "en": "Ngày lễ",
            "vi": "Ngày lễ"
        },
        "filterIds": [
            "stk_dio_sweat_hearts",
            "stk_dio_bearded_holiday",
            "stk_dio_frosty",
            "stk_dio_elf",
            "stk_dio_santa",
            "stk_dio_easter_bunny",
            "stk_dio_leprechaun",
            "stk_dio_easter_chick",
            "stk_dio_lucky_face"
        ],
        "filter_ids": [
            "stk_dio_sweat_hearts",
            "stk_dio_bearded_holiday",
            "stk_dio_frosty",
            "stk_dio_elf",
            "stk_dio_santa",
            "stk_dio_easter_bunny",
            "stk_dio_leprechaun",
            "stk_dio_easter_chick",
            "stk_dio_lucky_face"
        ],
        "requires_gold": false,
        "requiresGold": false,
        "is_gold": false,
        "isGold": false,
        "unlocked": true,
        "is_unlocked": true,
        "isUnlocked": true,
        "free": true
    }
];

var customPickerFilters = [
    "ai_shipper_grab",
    "ai_shipper_shopee",
    "color_film_vintage",
    "color_korean_glow",
    "color_golden_sunset",
    "color_cyberpunk_neon",
    "color_teal_orange",
    "color_polaroid_dream",
    "ai_anime_ghibli",
    "ai_cyber_cyborg",
    "ai_angel_wings",
    "stk_rose_flower",
    "stk_shrek_ogre",
    "stk_superhero_cape",
    "stk_spooky_ghost",
    "frame_berry_days",
    "frame_happy_snap",
    "frame_sky_diary",
    "photobooth_4cut",
    "photobooth_cute",
    "pb_holo_4cut",
    "pb_scrapbook_ripped_4cut",
    "pb_ripped_paper_4cut",
    "pb_denim_ripped_2x2",
    "frame_classic_pb",
    "stk_dio_looksmaxing",
    "stk_dio_influencer",
    "stk_dio_princess",
    "disco_lights",
    "stk_dio_flower_crown",
    "stk_dio_cutesy",
    "stk_dio_cowboy",
    "stk_dio_wedding",
    "stk_dio_clown",
    "stk_dio_cash",
    "stk_dio_slimed",
    "stk_dio_happy_birthday",
    "stk_dio_frosty",
    "stk_dio_santa",
    "stk_dio_elf",
    "stk_dio_easter_bunny",
    "stk_dio_tatted",
    "stk_dio_bye_brows",
    "stk_dio_bearded"
];

var locketCameraFilterConfig = {
        show_filter_button: true,
        showFilterButton: true,
        allows_custom_filters: true,
        allowsCustomFilters: true,
        sheet_enabled: true,
        sheetEnabled: true,
        open_sheet_immediately: false,
        openSheetImmediately: false,
        reference_image_attachment_enabled: true,
        referenceImageAttachmentEnabled: true,
        picker_filters: customPickerFilters,
        pickerFilters: customPickerFilters,
        sheet_filters: customFilterGroups,
        sheetFilters: customFilterGroups,
        filter_groups: customFilterGroups,
        filterGroups: customFilterGroups,
        remote_filters: customPhotoboothFilters
    };

Object.assign(obj.entries, {
    camera_filter_config: JSON.stringify(locketCameraFilterConfig),
    celebrity_filter_config: JSON.stringify({ celebrity_uid: "locket_admin_custom", enabled: true }),
    live_photos: JSON.stringify({
        capture: true,
        video: true,
        viewing: true,
        catch_up: true,
        widget_looping_mode: "never"
    }),
    camera_roll_preview_enabled: "true",
    camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_max_duration: durationStr,
    camera_roll_max_duration: durationStr,
    camera_roll_duration: durationStr,
    max_video_duration: durationStr,
    video_max_duration: durationStr,
    video_trim_max_duration: durationStr,
    trim_max_duration: durationStr,
    gold_max_duration: durationStr,
    goldMaxDuration: durationStr,
    max_file_size: MAX_SIZE_BYTES.toString(),
    max_upload_bytes: MAX_SIZE_BYTES.toString(),
    video_quality_mbps: "0.6",
    video_sound_enabled: "true",
    microphone_enabled: "true",
    camera_microphone_enabled: "true",
    audio_session_deactivation_enabled: "true",
    zoom_enabled: "true",
    upload_main: "false",
    upload_main_image_quality: "1.0",
    upload_main_image_size: "1440",
    upload_thumbnail_image_quality: "1.0",
    upload_thumbnail_image_size: "1020"
});

// 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
// ============================================================
Object.assign(obj.entries, {
    max_friends_count: "999999",
    friend_limit_mode: "disabled",
    soft_friend_limit_threshold_count: "999999",
    show_friend_limit_on_cam: "false",
    signup_max_friends_count: "999999",
    celebrity_inbox_limit: "999999",
    celebrity_inbox_enabled: "true",
    celebrity_vip_qr_redemption_enabled: "true",
    friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
    friends_sheet_locket_count_config: JSON.stringify({
        items: [
            { threshold: 0, icon_name: "heart" },
            { threshold: 1, icon_name: "heart.fill" },
            { threshold: 10, emoji: "🤍" },
            { threshold: 100, emoji: "💛" },
            { threshold: 500, emoji: "❤️‍🔥" },
            { threshold: 1000, emoji: "🌟🫶🌟" },
            { threshold: 2000, emoji: "✨💟✨" },
            { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
            { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
        ]
    }),
    friend_locket_count_config: JSON.stringify({
        items: [
            { threshold: 0, icon_name: "heart" },
            { threshold: 1, icon_name: "heart.fill" },
            { threshold: 10, emoji: "🤍" },
            { threshold: 100, emoji: "💛" },
            { threshold: 500, emoji: "❤️‍🔥" },
            { threshold: 1000, emoji: "✨💗✨" },
            { threshold: 2000, emoji: "✨️⭐️✨" },
            { threshold: 5000, emoji: "✨💎✨" },
            { threshold: 10000, emoji: "✨🔐💛✨" }
        ]
    }),
    new_friends_monitoring_enabled: "true",
    improved_friend_suggestions: "false",
    show_friend_suggestions_by_default: "false",
    emoji_friend_suggestions: "false",
    prompt_contact_permissions_on_search: "false",
    populate_phone_numbers_from_suggest_friends: "false",
    hide_friends_enabled: "false",
    hide_invite_links: "false",
    hide_skip_contacts: "false",
    show_all_contacts: "false",
    show_invite_suggestions: "false",
    show_no_friends_bottom_sheet: "false",
    signup_allow_skip_add_friends: "true",
    signup_custom_profile_picture: "true",
    user_data_export_enabled: "true",
    username_suggestions_enabled: "true"
});

// ============================================================
// 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
// ============================================================
try {
    var streak = JSON.parse(obj.entries.streak_config || "{}");
    streak.enabled = true;
    streak.show_streak = true;
    streak.minimum_recovery_count = 0;
    streak.minimum_display_count = 0;
    obj.entries.streak_config = JSON.stringify(streak);
} catch (e) { }

Object.assign(obj.entries, {
    moment_views_enabled: "true",
    moment_views_v2: "true",
    record_moment_views: "true",
    notify_moment_views: "true",
    get_moment_views_as_cloud_function: "true",
    moment_reactions_v2: "true",
    chat_reactions_enabled: "true",
    conversation_reactions: "true",
    typing_indicators_enabled: "true",
    unsend_message_enabled: "true",
    reply_prototype_enabled: "true",
    messages_integration: "true",
    conversations_enabled: "true",
    fetch_moments_in_conversation: "true",
    hide_chat_button: "false",
    groups_enabled: "true",
    group_contact_invites_enabled: "true",
    groups_onboarding_accept_invite_preview_enabled: "true",
    chat_hyperlink_enabled_mode: "always_enabled",
    conversation_drafts_enabled: "true",
    send_to_self_only_mode: "always_enabled",
    time_travel_rewind_v2_enabled: "true",
    calendar_delete_moment_enabled: "true",
    calendar_rewind_enabled: "false",
    locket_yearbook_story_sharing_encouraged: "true",
    rollcall_enabled: "true",
    rollcall_comment_actions: "true",
    rollcall_profile_button: "true",
    rollcall_prompt_export_after_share: "true",
    rollcall_confirm_skip_tagging: "false",
    rollcall_tap_to_tag_enabled: "false"
});

// ============================================================
// ============================================================
// 6. WIDGET SỰ KIỆN MỚI, KHUNG HOÀNG GIA & BẬT ĐỊA CHỈ + FOCUS
// ============================================================
var dailyFrames = {
        1: { name: "mon", uid: "frame_mon_galaxy_cat", url: "https://i.ibb.co/84j69JnV/frame-mon-640.png" },
        2: { name: "tue", uid: "frame_tue_mecha_dragon", url: "https://i.ibb.co/fVQvW41Z/frame-tue-640.png" },
        3: { name: "wed", uid: "frame_wed_bamboo_rabbit_v2", url: "https://i.ibb.co/Lzv9bQbJ/frame-wed-640.png" },
        4: { name: "thu", uid: "frame_thu_baby_bear_v2", url: "https://i.ibb.co/8wWQF1R/frame-thu-640.png" },
        5: { name: "fri", uid: "frame_fri_astro_boy", url: "https://i.ibb.co/VYmyDN1g/frame-fri-640.png" },
        6: { name: "sat", uid: "frame_sat_cyber_cat", url: "https://i.ibb.co/wFdwxy9w/frame-sat-640.png" },
        0: { name: "sun", uid: "frame_sun_robot_gamer", url: "https://i.ibb.co/d4vFGDw2/frame-sun-640.png" }
    };

    // Tính chuẩn múi giờ Việt Nam (UTC+7) kể cả trong tiến trình VPN ngầm của iOS
    var nowUtc = new Date();
    var vnTime = new Date(nowUtc.getTime() + (7 * 60 * 60 * 1000));
    var currentDay = vnTime.getUTCDay(); // 0 = CN, 1 = T2, ..., 6 = T7
    var todayFrame = dailyFrames[currentDay] || dailyFrames[1];
    var dayUid = todayFrame.uid + "_" + vnTime.getUTCFullYear() + "_" + (vnTime.getUTCMonth() + 1) + "_" + vnTime.getUTCDate();

// 6. WIDGET SỰ KIỆN MỚI, KHUNG HOÀNG GIA & BẬT ĐỊA CHỈ + FOCUS
// ============================================================
Object.assign(obj.entries, {
    widget_frame_event_max_images: "10",
    android_widget_frame_event_enabled: "true",
    widget_badge_enabled: "true",
    widget_badge_v2: "true",
    widget_stale_state_enabled: "false",
    widget_last_sent_indicator: "false",
    widget_sync_token_reload_mode: "clearTokenNever",

    widget_frame_event: JSON.stringify({
        uid: "custom_frame_event_2026",
        url: "https://i.ibb.co/7dXZMyBg/1.png",
        use_local_time_zone: true,
        placement: "below",
        start_at: "2020-01-01T00:00:00",
        end_at: "2099-12-31T23:59:59"
    }),

    custom_widget_frames: "enabled",
    custom_widget_frames_enabled: "true",

    widget_frames_config: JSON.stringify({
        enabled: true,
        allow_custom_frames: true,
        unlock_all_styles: true,
        default_style: "royal_gold_vip",
        styles: [
            {
                id: "royal_gold_vip",
                name: "👑 VIP Royal Gold",
                border_style: "ornate_gold",
                crown_badge: true,
                badge_text: "VIP",
                corner_radius: 28.0,
                glow_effect: true,
                glow_color: "#FFD700",
                overlay_asset: "royal_crown_frame"
            },
            {
                id: "verified_blue_vip",
                name: "💎 Tích Xanh Verified VIP",
                border_style: "ornate_gold",
                crown_badge: true,
                badge_text: "VERIFIED",
                corner_radius: 28.0,
                glow_effect: true,
                glow_color: "#1D9BF0",
                overlay_asset: ""
            }
        ]
    }),

    widget_frame_styles: JSON.stringify([
        "royal_gold_vip",
        "verified_blue_vip",
        "gold_luxury",
        "classic"
    ]),

    seasonal_frames_config: JSON.stringify({
        enabled: true,
        auto_rotate: false,
        override_default: true,
        current_season_theme: "royal_gold_vip"
    }),

    live_activity_onboarding: "true",
    live_activity_onboarding_variant: "friending",
    register_live_activity_push_to_start_token: "true",
    live_activity_remove_stale_start_token: "true",
    notification_preferences_live_activities: "true",
    notification_preferences: "true",
    notification_reply_body_visible: "true",
    prompt_notification_permissions_after_friending: "true",
    activity_bar_enabled: "true",
    journal_activity_bar_enabled: "true",

    // BẬT ĐỊA CHỈ (location: true) VÀ FOCUS NỘI DUNG ẢNH (focus_animation: true)
    journal_settings: JSON.stringify({
        debug_menu_enabled: false,
        focus_animation: true,
        compact_header: true,
        friends_button: true,
        reverse_scroll_direction: false,
        streak_visualization: true,
        streak_visualization_style: "gradient",
        streak_header_minimum_count: 0,
        streak_visualization_minimum_count: 1,
        overlay_indicators: {
            location: true,
            music: true,
            static_content: true,
            weather: true
        }
    }),

    qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
    custom_profile_pics: "true",
    profile_menu_v2_enabled: "true"
});

// ============================================================
// 7. HỆ THỐNG CDN, CACHE & STORAGE ĐẦY ĐỦ
// ============================================================
Object.assign(obj.entries, {
    storage_bucket: "gs://locket-img",
    storage_bucket_video: "gs://locket-video",
    image_cache_max_age_sec: "157680000",
    image_cache_max_size: "400000000",
    history_cache_age_days: "1000",
    user_cache_max_age_sec: "86400",
    friends_cache_max_age_sec: "86400",
    image_fetch_cache: "true",
    image_cache_use_shared: "true",
    use_doc_dir_for_image_cache: "true",
    efficient_history_cache_invalidation: "true",
    timestamp_based_history_fetches: "true",
    get_latest_moment_v2: "true",
    fetch_users_from_cloud_function: "false",
    refresh_interval: "60",
    firestore_refresh_v2: "true",
    firestore_refresh_v3: "true",
    keychain_access_retries: "true",
    blocked_users_cached_sync_enabled: "true",
    beta_features_enabled: "true",
    join_testflight_enabled: "true",
    safety_center: "true",
    help_center: "true",
    support_v2: "true",
    privacy_choices_setting: "true",
    request_att_permission: "true",
    invite_link_preview_variant: "4",
    share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
    share_history_prompt_enabled: "false",
    use_thumbnails_for_sharing: "true",
    use_thumbnails_in_timeline: "true",
    persist_onboarding_step: "true",
    onboarding_contact_permission_step: "true"
});

// ============================================================
// 8. OVERLAY & CUSTOM CAPTIONS
// ============================================================
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
        "standard", "poll", "color_palette", "review", "music", "location",
        "weather", "time", "streak", "star_sign", "party_time", "locket_count",
        "good_morning", "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
    ]),
    overlay_items: JSON.stringify([
        {
                "section": "🎨 General",
                "items": [
                        {
                                "overlay_id": "caption:standard",
                                "source": "local",
                                "caption": {
                                        "type": "standard"
                                }
                        },
                        {
                                "overlay_id": "caption:link",
                                "source": "local",
                                "caption": {
                                        "type": "link"
                                },
                                "overlay_type": "caption"
                        },
                        {
                                "overlay_id": "caption:review",
                                "source": "local",
                                "caption": {
                                        "type": "review"
                                }
                        },
                        {
                                "overlay_id": "caption:music",
                                "source": "local",
                                "caption": {
                                        "type": "music"
                                }
                        },
                        {
                                "overlay_id": "caption:location",
                                "source": "local",
                                "caption": {
                                        "type": "location"
                                }
                        },
                        {
                                "overlay_id": "caption:weather",
                                "source": "local",
                                "caption": {
                                        "type": "weather"
                                }
                        },
                        {
                                "overlay_id": "caption:time",
                                "source": "local",
                                "caption": {
                                        "type": "time"
                                }
                        },
                        {
                                "overlay_id": "caption:streak",
                                "source": "local",
                                "caption": {
                                        "type": "streak"
                                }
                        },
                        {
                                "overlay_id": "caption:star_sign",
                                "source": "local",
                                "caption": {
                                        "type": "star_sign"
                                }
                        },
                        {
                                "overlay_id": "caption:poll",
                                "source": "local",
                                "caption": {
                                        "type": "poll"
                                }
                        },
                        {
                                "overlay_id": "caption:color_palette",
                                "source": "local",
                                "caption": {
                                        "type": "color_palette"
                                }
                        },
                        {
                                "overlay_id": "caption:live",
                                "source": "local",
                                "caption": {
                                        "type": "live"
                                }
                        },
                        {
                                "overlay_id": "caption:locket_count",
                                "source": "local",
                                "caption": {
                                        "type": "locket_count"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Tình yêu & Cơm chó 💕",
                "items": [
                        {
                                "overlay_id": "caption:em_nho_anhh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF6B81",
                                                        "#FF8E9E",
                                                        "#FFB3C6"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥺",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "em nhớ anhh",
                                        "text_color": "#8C1938",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:nho_anh_phien",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F0B5CB",
                                                        "#F6D0DF",
                                                        "#DCCAF0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥺",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "nhớ anh tới mức hơi phiền",
                                        "text_color": "#70445A",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:i_love_you",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF8FAB",
                                                        "#FFC2D1",
                                                        "#FFE5EC"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💗",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "i love you",
                                        "text_color": "#8A304F",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:yeu_cuc_dang",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F2B5C8",
                                                        "#F8D5D9",
                                                        "#F6E5D2"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "yêu cục dàng",
                                        "text_color": "#754454",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:yeu_emmm",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F2AFC6",
                                                        "#F7C9D9",
                                                        "#E5CFF4"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💗",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Yeu Emmm",
                                        "text_color": "#70445C",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:yeu_anhhh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#B8C9F2",
                                                        "#D5DDF8",
                                                        "#E8CFF0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫶",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Yeu Anhhh",
                                        "text_color": "#414C72",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:baby_love",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFB6C1",
                                                        "#FF69B4",
                                                        "#FF1493"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🧸",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Baby Love 💖",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:muon_duoc_om",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF9A9E",
                                                        "#FECFEF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫂",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Muốn được ôm",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cho_hun_mieng",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F3AFC7",
                                                        "#F8D0D8",
                                                        "#F4C9BB"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😘",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "cho hun miếng coi",
                                        "text_color": "#754252",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:me_anh_me_ngu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#C4C8EF",
                                                        "#DED3F4",
                                                        "#EBCDE4"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💤",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "mê anh hơn mê ngủ",
                                        "text_color": "#4F4770",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:be_be_can_do",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF8FAB",
                                                        "#FFC2D1",
                                                        "#FFE5EC"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "em bé cần được dỗ",
                                        "text_color": "#812D4A",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:iu_thi_noi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFD166",
                                                        "#FFE8A3",
                                                        "#FFF3D0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤭",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "iu thì nói, đừng có ngại",
                                        "text_color": "#704510",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:iu_hong_thi_bao",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF6B6B",
                                                        "#FF9999",
                                                        "#FFD1C9"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "iu hong thì bảo",
                                        "text_color": "#812626",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:anh_thuong_em",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#A0C4FF",
                                                        "#BDE0FE",
                                                        "#DFF3FF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥹",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "anh có thương em thiệt hong",
                                        "text_color": "#23466F",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:yeu_em_nhiem_vu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#B7E4C7",
                                                        "#D8F3DC",
                                                        "#F0FFF1"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫡",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "yêu em là nhiệm vụ cả đời",
                                        "text_color": "#24563A",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:crush_nhin",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#CDB4DB",
                                                        "#E2CFEA",
                                                        "#F3E5F5"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫠",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "crush nhìn em một cái là xong",
                                        "text_color": "#593B68",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ngoai_le_cua_em",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#80CBC4",
                                                        "#B2DFDB",
                                                        "#E0F2F1"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫶",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "anh là ngoại lệ của em",
                                        "text_color": "#205953",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dang_ban_tuong_tu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1A2980",
                                                        "#26D0CE"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💭",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Đang bận tương tư",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:mac_bay_tinh_yeu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EE9CA7",
                                                        "#FFDDE1"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💘",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mắc bẫy tình yêu",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:minh_cuoi_nhau",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F0B8CD",
                                                        "#F7D4DF",
                                                        "#E7C9EF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💍",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "hông ấy mình cưới nhau đi",
                                        "text_color": "#70465B",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:wedding_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFE4E1",
                                                        "#E73C7E"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💍",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Wedding Time!",
                                        "localized_text": {
                                                "en": "Wedding Time!",
                                                "vn": "Đám cưới nè!"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dating_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E91E63",
                                                        "#F44336"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💕",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Dating Time!",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tuong_love_hoa_ra_lop",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#C9184A",
                                                        "#FF4D6D",
                                                        "#FFB3C6"
                                                ]
                                        },
                                        "icon": {
                                                "data": "❤️🩹",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tưởng love hoá ra lốp",
                                        "text_color": "#64152F",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cam_thay_hanh_phuc",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EC407A",
                                                        "#F8BBD0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🇻🇳",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cảm thấy hạnh phúc",
                                        "localized_text": {
                                                "en": "Feeling Happy",
                                                "vn": "Cảm thấy hạnh phúc"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Holiday Caption",
                "items": [
                        {
                                "overlay_id": "caption:halloween_2026",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#150804",
                                                        "#C8540D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎃",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Halloween",
                                        "localized_text": {
                                                "en": "Halloween",
                                                "vn": "Halloween"
                                        },
                                        "text_color": "#FFB182",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:autumn_2026",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFE0A0",
                                                        "#F6A53A"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍂",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xin chào Mùa Thu",
                                        "localized_text": {
                                                "en": "Xin chào Mùa Thu",
                                                "vn": "Xin chào Mùa Thu"
                                        },
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:christmas_eve_2026",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2FA85F",
                                                        "#176B3A"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🕯️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Giáng sinh an lành",
                                        "localized_text": {
                                                "en": "Giáng sinh an lành",
                                                "vn": "Giáng sinh an lành"
                                        },
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:christmas_day_2026",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E53935",
                                                        "#A81818"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎄",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Giáng sinh an lành",
                                        "localized_text": {
                                                "en": "Giáng sinh an lành",
                                                "vn": "Giáng sinh an lành"
                                        },
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:new_years_eve_2026",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFC64B",
                                                        "#FFEDBF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥂",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xin chào 2027!",
                                        "localized_text": {
                                                "en": "Xin chào 2027!",
                                                "vn": "Xin chào 2027!"
                                        },
                                        "text_color": "#643F00",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:new_years_day_2027",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#3B00EC",
                                                        "#823FFF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💫",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xin chào 2027!",
                                        "localized_text": {
                                                "en": "Xin chào 2027!",
                                                "vn": "Xin chào 2027!"
                                        },
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:new_years_day_2027_alternate",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF0062",
                                                        "#FF783F"
                                                ]
                                        },
                                        "max_lines": 1,
                                        "text": "2027",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Decorative by Locket",
                "items": [
                        {
                                "overlay_id": "caption:toi_nho_em",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFFFFF",
                                                        "#6D9EEB"
                                                ]
                                        },
                                        "max_lines": 1,
                                        "text": "보고 싶어 🥺",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:party_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#5EFFF5",
                                                        "#FCFF57"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🪩",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Party Time!",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:good_morning",
                                "source": "remote",
                                "daily_start_hour": 5,
                                "daily_end_hour": 10,
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EF7402",
                                                        "#EABF0F"
                                                ]
                                        },
                                        "icon": {
                                                "data": "☀️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Good morning",
                                        "text_color": "#FFFFFFE5",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:goodnight",
                                "source": "remote",
                                "daily_start_hour": 19.5,
                                "daily_end_hour": 24,
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#370C6F",
                                                        "#575CD4"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌙",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Goodnight",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ootd",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFFFFF",
                                                        "#DBDBDB"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🕶",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "OOTD",
                                        "text_color": "#101010E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:miss_you",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EC0C00",
                                                        "#FF493F"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥰",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Miss you",
                                        "text_color": "#FFFFFFDB",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Decorative by MinhHiep08",
                "items": [
                        {
                                "overlay_id": "caption:bunniesept nah",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF91B4",
                                                        "#FFB9CF",
                                                        "#FFE2ED"
                                                ]
                                        },
                                        "max_lines": 1,
                                        "text": " bunniesept nah 🐰 ",
                                        "text_color": "#77717A",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:MinhHiep08",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#B8E7FF",
                                                        "#A8F5D0",
                                                        "#DCCBFF"
                                                ]
                                        },
                                        "max_lines": 1,
                                        "text": "💻 MinhHiep08",
                                        "text_color": "#183153",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:Hieon",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#B8E7FF",
                                                        "#A8F5D0",
                                                        "#DCCBFF"
                                                ]
                                        },
                                        "max_lines": 1,
                                        "text": "Hieon",
                                        "text_color": "#183153",
                                        "type": "static_content"
                                }
                        },

                        {
                                "overlay_id": "caption:feeling_cute",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F8BBD0",
                                                        "#E91E63"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌷",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Feeling Cute",
                                        "localized_text": {
                                                "en": "Feeling Cute",
                                                "vn": "Cảm thấy dthw"
                                        },
                                        "text_color": "#FFFFFFE5",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFD6A5",
                                                        "#FFF1A8",
                                                        "#FFC4D6"
                                                ]
                                        },
                                        "max_lines": 1,
                                        "text": "Cu 🐎",
                                        "text_color": "#633B24",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tuat",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2C1A0E",
                                                        "#5D4037",
                                                        "#D7A86E"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🐕",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tuất",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:wedding_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFE4E1",
                                                        "#E73C7E"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💍",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Wedding Time!",
                                        "localized_text": {
                                                "en": "Wedding Time!",
                                                "vn": "Đám cưới nè!"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cam_thay_hanh_phuc",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EC407A",
                                                        "#F8BBD0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🇻🇳",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cảm thấy hạnh phúc",
                                        "localized_text": {
                                                "en": "Feeling Happy",
                                                "vn": "Cảm thấy hạnh phúc"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:coffee_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#4E342E",
                                                        "#8D6E63"
                                                ]
                                        },
                                        "icon": {
                                                "data": "☕",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Coffee Time!",
                                        "localized_text": {
                                                "en": "Coffee Time!",
                                                "vn": "Giờ uống cà phê!"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:snake_vibes",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2E7D32",
                                                        "#66BB6A"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🐍",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Snake Vibes",
                                        "localized_text": {
                                                "en": "Snake Vibes",
                                                "vn": "Chất rắn"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:mixue_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFF9C4",
                                                        "#F8BBD0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍦",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mixue Time!",
                                        "localized_text": {
                                                "en": "Mixue Time!",
                                                "vn": "Giờ Mixue!"
                                        },
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:locket_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#ECEFF1",
                                                        "#B3E5FC"
                                                ]
                                        },
                                        "icon": {
                                                "data": "📷",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Locket Time!",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cinema_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1A237E",
                                                        "#455A64"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎬",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cinema Time!",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dating_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E91E63",
                                                        "#F44336"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💕",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Dating Time!",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:graduation_day",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1A237E",
                                                        "#283593"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎓",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Happy Graduation Day!",
                                        "localized_text": {
                                                "en": "Happy Graduation Day!",
                                                "vn": "Chúc mừng tốt nghiệp!"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:shopping_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#B3E5FC",
                                                        "#FFFFFF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🛍️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Shopping Time!",
                                        "localized_text": {
                                                "en": "Shopping Time!",
                                                "vn": "Giờ mua sắm!"
                                        },
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dinner_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFCCBC",
                                                        "#FF8A80"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍽️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Dinner Time!",
                                        "localized_text": {
                                                "en": "Dinner Time!",
                                                "vn": "Giờ ăn tối!"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:chilling_time",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E1BEE7",
                                                        "#F8BBD0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌴",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Chilling Time!",
                                        "localized_text": {
                                                "en": "Chilling Time!",
                                                "vn": "Giờ thư giãn!"
                                        },
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Độc lạ đời sống",
                "items": [
                        {
                                "overlay_id": "caption:xin_vinh_biet_cu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#232526",
                                                        "#414345"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🕯️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xin vĩnh biệt cụ",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:chay_ngay_di",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#D31027",
                                                        "#EA384D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🏃💨",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Chạy ngay đi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:luc_nao_co_tien_thi_moi_di_a",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#0F2027",
                                                        "#203A43",
                                                        "#2C5364"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💸",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Lúc nào có tiền thì mới đi á",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cu_tu_tu_khoai_se_nhu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#56AB2F",
                                                        "#A8E063"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥔",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cứ từ từ khoai sẽ nhừ",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:kiem_tra_nhan_pham",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#654EA3",
                                                        "#EAAFC8"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎲",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Kiểm tra nhân phẩm",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:doc_so_tai_khoan",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1E90FF",
                                                        "#00D4FF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💳",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "đọc số tài khoản",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ai_so_thi_di_ve",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#B71C1C",
                                                        "#FF5722"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🏃",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "ai sợ thì đi về",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:con_cai_nit",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#D7CCC8",
                                                        "#8D6E63"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🧶",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "còn cái nịt",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:canh_bao_co_hat",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#9C27B0",
                                                        "#E91E63"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎤",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "cảnh báo có hát",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:than_chua_ma_don",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#607D8B",
                                                        "#37474F"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😔",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Thân chưa mà dỡn",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ai_muon",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E91E63",
                                                        "#F44336"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤔",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ai mượn?",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:hay_ra_de_qua_a",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFF59D",
                                                        "#80DEEA"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥺",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Hay ra dẻ quá à!",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:giam_suc_manh_con_tuong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#4CAF50",
                                                        "#00BCD4"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎮",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Giảm sức mạnh con tướng",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:mac_co_qua_hai_oi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFB74D",
                                                        "#F8BBD0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😭",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mắc cỡ quá hai ơi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:minh_la_lop",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#263238",
                                                        "#455A64"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🛞",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mình là lốp",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dep_trai_co_gi_sai",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF5722",
                                                        "#FFC107"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😎",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Đẹp trai có gì sai",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:mong_ton_hoa_sen",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#D8B4E2",
                                                        "#F8BBD0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🪷",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mong tôn hoa sen thấy cảnh này",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dam_nhau_khong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E53935",
                                                        "#FF7043"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥊",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "đấm nhau không",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:sieu_cap_ba_khi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EC407A",
                                                        "#F44336"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🐉",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "siêu cấp bá khí",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:du_an_ma",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#263238",
                                                        "#455A64"
                                                ]
                                        },
                                        "icon": {
                                                "data": "👻",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "dự án ma",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:doi_roi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF5F6D",
                                                        "#FFC371"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😤",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Dỗi rồi",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:dang_ban_tuong_tu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1A2980",
                                                        "#26D0CE"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💭",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Đang bận tương tư",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:mo_hon_nhung_tam_hien",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFB75E",
                                                        "#ED8F03"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🐤",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mỏ hỗn nhưng tâm hiền",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:muon_duoc_om",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF9A9E",
                                                        "#FECFEF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫂",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Muốn được ôm",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Trend TikTok (36 Caption)",
                "items": [
                        {
                                "overlay_id": "caption:hoi_chieu_troi_mua",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#546E7A",
                                                        "#263238"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌧️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Hồi chiều trời mưa...",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:con_vien_la_lan",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#12C2E9",
                                                        "#F64F59"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍂",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "côn viên lá làn",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:gian_dang_iu_hong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#3E2723",
                                                        "#6D4C41",
                                                        "#A1887F"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🪳",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Gián đáng iu hong",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:nau_xoi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#7B1FA2",
                                                        "#E91E63",
                                                        "#FFB74D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🙀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Nấu xói",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:co_tien_lam_phien_thien_ha",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#0F0C29",
                                                        "#302B63",
                                                        "#F7971E",
                                                        "#FFD200"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💰",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Có tiền làm phiền thiên hạ",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:nguoi_im_lang_gap_nguoi_hay_noi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#232526",
                                                        "#414345",
                                                        "#6C7A89",
                                                        "#B0BEC5"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤐",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Người im lặng gặp người hay nói",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:roi_let_luon",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF9A9E",
                                                        "#FECFEF",
                                                        "#FBC2EB",
                                                        "#A6C1EE"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💅",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "rồi lét luôn",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:roi_gay_luon",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF6EC7",
                                                        "#7873F5",
                                                        "#4ADEDE",
                                                        "#FFE66D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌈",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "rồi gay luôn",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tuyet_doi_khong_nghe",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF416C",
                                                        "#FF4B2B"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🙉",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tuyệt đối không nghe",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cha_nay_tu_luyen_ghe",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFDEE9",
                                                        "#B5FFFC",
                                                        "#FAD0C4",
                                                        "#FFD1FF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🪞",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cha này tự luyến ghê",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:co_bien_co_bien",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF512F",
                                                        "#F09819",
                                                        "#FFD200"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🚨",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Có biến có biến",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:hong_drama",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#8A2387",
                                                        "#E94057",
                                                        "#F27121"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍿",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Hóng drama",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cuoi_vcl_m_oi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F7971E",
                                                        "#FFD200",
                                                        "#FFEE58"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😂",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cười vcl m oi",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:vl_m_oi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1F1C2C",
                                                        "#928DAB",
                                                        "#C9D6FF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😳",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "vl m ơi?",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:noi_het_bi_mat_thi_co_yeu_hong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EE9CA7",
                                                        "#FFDDE1",
                                                        "#C6FFDD",
                                                        "#FBD786"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤫",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Nói hết bị mật thì có yêu hong",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:flex_den_hoi_tho_cuoi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F7971E",
                                                        "#FFD200"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💎",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Flex đến hơi thở cuối",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:overthinking_vai_chuong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2C3E50",
                                                        "#4CA1AF"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤯",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Overthinking vai chưởng",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:chan_bo_may_di",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#870000",
                                                        "#190A05"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🙄",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Chan bố mày đi",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:oach_xa_lach",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#11998E",
                                                        "#38EF7D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥬",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "oách xà lách",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:lai_phai_lo",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FBD3E9",
                                                        "#BB377D",
                                                        "#6A0572"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💔",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "lại phải lọ",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ua_alo_1",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#8E2DE2",
                                                        "#4A00E0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "📞",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ủa alo",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ke_chuyen_nghe_choi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#8A2387",
                                                        "#E94057"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍿",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Kể chuyện nghe chơi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:hom_nay_toi_buon",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#141E30",
                                                        "#243B55"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "hôm nay tôi buồn",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:xinh_dep_tuyet_voi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FC5C7D",
                                                        "#6A82FB"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💅",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xinh đẹp tuyệt vời",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tram_cam_nhe",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1F1C2C",
                                                        "#928DAB"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫠",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Trầm cảm nhẹ",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:chua_du_wow",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF5349",
                                                        "#EB0C00"
                                                ]
                                        },
                                        "icon": {
                                                "data": "⭐",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Chưa đủ wow",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:boc_trung_sit_rit",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#9C27B0",
                                                        "#7B1FA2"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎁",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Bóc trúng sít rịt",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:hen_lam_moi_xui_duoc_vay_a",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#00BCD4",
                                                        "#0097A7"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😅",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Hên lắm mới xui được vậy á",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ra_duong_ne_moi_anh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2196F3",
                                                        "#1976D2"
                                                ]
                                        },
                                        "icon": {
                                                "data": "👤",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ra đường nể mỗi anh",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cung_cung_di",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFC107",
                                                        "#FFA000"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🚀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cũng cứng đi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tuyet_doi_dien_anh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#455A64",
                                                        "#263238"
                                                ]
                                        },
                                        "icon": {
                                                "data": "📷",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tuyệt đối điện ảnh",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:du_ba_khi_chua",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF5722",
                                                        "#E64A19"
                                                ]
                                        },
                                        "icon": {
                                                "data": "⚡",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Đủ bá khí chưa",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ua_alo_2",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#9C27B0",
                                                        "#7B1FA2"
                                                ]
                                        },
                                        "icon": {
                                                "data": "❓",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ủa alo?",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cai_gi_vay_troi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F44336",
                                                        "#D32F2F"
                                                ]
                                        },
                                        "icon": {
                                                "data": "❗",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cái gì vậy trời",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:nay_la_het_cuu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#607D8B",
                                                        "#455A64"
                                                ]
                                        },
                                        "icon": {
                                                "data": "❌",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Này là hết cứu",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:qua_la_dien_anh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#26A69A",
                                                        "#00897B"
                                                ]
                                        },
                                        "icon": {
                                                "data": "📷",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Quá là điện ảnh",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Gen Z Life 🩻",
                "items": [
                        {
                                "overlay_id": "caption:hao_han",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#114357",
                                                        "#F29492"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🗡️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Hảo hán",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:cam_lanh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2193B0",
                                                        "#6DD5ED"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤧",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cảm lạnh",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:bat_luc",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2C3E50",
                                                        "#3498DB"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🏳️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Bất lực",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:xin_lui_duoc_chua",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F6D365",
                                                        "#FDA085"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🥺",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xin lũi được chưa",
                                        "text_color": "#000000",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:rot_nuoc_mat",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#1CB5E0",
                                                        "#000046"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😭",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Rớt nước mắt",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:guc_nga",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#3A1C71",
                                                        "#D76D77"
                                                ]
                                        },
                                        "icon": {
                                                "data": "📉",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Gục ngã",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tien_dinh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#C33764",
                                                        "#1D2671"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌪️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tiền đình",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:che_manh",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF4E50",
                                                        "#F9D423"
                                                ]
                                        },
                                        "icon": {
                                                "data": "👎",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Chê mạnh",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:xinh_gai_an_phim_1",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F77062",
                                                        "#FE5196"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💅",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Xinh gái ấn phím 1",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:di_lam_vi_dam_me",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FDC830",
                                                        "#F37335"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤡",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Đi làm vì đam mê",
                                        "text_color": "#FFFFFF",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Meme vui nhộn",
                "items": [
                        {
                                "overlay_id": "caption:cuoi_xiu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFEB3B",
                                                        "#FF9800"
                                                ]
                                        },
                                        "icon": {
                                                "data": "😎",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cười xỉu",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:toang_that_roi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F44336",
                                                        "#B71C1C"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🐉",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Toang thật rồi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:toi_roi_toi_roi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#673AB7",
                                                        "#512DA8"
                                                ]
                                        },
                                        "icon": {
                                                "data": "❗",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tới rồi tới rồi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:khong_the_tin_noi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#00BCD4",
                                                        "#0097A7"
                                                ]
                                        },
                                        "icon": {
                                                "data": "❓",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Không thể tin nổi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Đời sống",
                "items": [
                        {
                                "overlay_id": "caption:ngay_moi_vui_ve",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#4CAF50",
                                                        "#2E7D32"
                                                ]
                                        },
                                        "icon": {
                                                "data": "☀️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ngày mới vui vẻ",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ngu_ngon",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#3F51B5",
                                                        "#1A237E"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌙",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ngủ ngon",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:an_com_chua",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF9800",
                                                        "#F57C00"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🍽️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ăn cơm chưa?",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:di_choi_khong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#E91E63",
                                                        "#C2185B"
                                                ]
                                        },
                                        "icon": {
                                                "data": "✈️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Đi chơi không?",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Gen Z Slay",
                "items": [
                        {
                                "overlay_id": "caption:tinh_hoa_hoi_tu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFD700",
                                                        "#FF8C00"
                                                ]
                                        },
                                        "icon": {
                                                "data": "✨",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tinh hoa hội tụ",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:phu_tinh_khong_phu_ban",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#8E2DE2",
                                                        "#4A00E0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🕶️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Phụ tình không phụ bản",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ngoan_xinh_yeu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FFAFBD",
                                                        "#FFC3A0"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌸",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Ngoan xinh yêu của ai?",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:nhin_la_biet_uy_tin",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#2980B9",
                                                        "#2C3E50"
                                                ]
                                        },
                                        "icon": {
                                                "data": "👌",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Nhìn là biết uy tín",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Bất ổn & Khó đỡ",
                "items": [
                        {
                                "overlay_id": "caption:luon_vui_tuoi",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#00F2FE",
                                                        "#4FACFE"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🤡",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Luôn vui tươi",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:bat_on_that_su",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#636363",
                                                        "#A2AB58"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🫠",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Bất ổn thật sự",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:khong_cam_xuc",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#434343",
                                                        "#000000"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🗿",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Không cảm xúc",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:phu_huynh_dung_xem",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#FF0844",
                                                        "#FFB199"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🙈",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Phụ huynh đừng xem",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Check VAR & Hóng hớt",
                "items": [
                        {
                                "overlay_id": "caption:check_var",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#11998E",
                                                        "#38EF7D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "📺",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Check VAR liền",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:qua_nhieu_su_de_thuong",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#F38181",
                                                        "#FCE38A"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🎀",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Quá nhiều sự dễ thương",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:mac_bay_tinh_yeu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#EE9CA7",
                                                        "#FFDDE1"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💘",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Mắc bẫy tình yêu",
                                        "text_color": "#000000E6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:song_gio_phu_doi_trai",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#3A1C71",
                                                        "#D76D77"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🌪️",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Sóng gió phủ đời trai",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        },
        {
                "section": "🎨 Góc Deadline & Đi Làm",
                "items": [
                        {
                                "overlay_id": "caption:deadline_ruot",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#ED213A",
                                                        "#93291E"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🔥",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Deadline dí tụt quần",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:ca_o_ran_doc",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#0F2027",
                                                        "#1B5E20",
                                                        "#66BB6A"
                                                ]
                                        },
                                        "icon": {
                                                "data": "🐍",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cả ổ rắn độc",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:tien_dau_ma_tieu",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#11998E",
                                                        "#38EF7D"
                                                ]
                                        },
                                        "icon": {
                                                "data": "💸",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Tiền đâu mà tiêu",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        },
                        {
                                "overlay_id": "caption:nghien_cuu_khoa_hoc",
                                "source": "remote",
                                "caption": {
                                        "background": {
                                                "colors": [
                                                        "#0F2027",
                                                        "#2C5364"
                                                ]
                                        },
                                        "icon": {
                                                "data": "☕",
                                                "type": "emoji"
                                        },
                                        "max_lines": 1,
                                        "text": "Cần nạp cafein gấp",
                                        "text_color": "#FFFFFFE6",
                                        "type": "static_content"
                                }
                        }
                ]
        }
])
});

// ============================================================
// 9. HÀM VẢ CỰC MẠNH (FORCE OVERRIDE ĐÈ TẤT CẢ GIÁ TRỊ VỀ GOLD & 45S)
// ============================================================
function hamVaForceOverride(entries) {
    if (!entries || typeof entries !== "object") return;
    
    // 1. Vả thời lượng 45 giây vào mọi key video/duration
    var durationKeys = [
        "max_video_duration", "video_max_duration", "camera_roll_max_duration",
        "camera_roll_video_max_duration", "camera_roll_duration",
        "video_trim_max_duration", "trim_max_duration", "gold_max_duration", "goldMaxDuration"
    ];
    for (var i = 0; i < durationKeys.length; i++) {
        entries[durationKeys[i]] = "45.0";
    }

    // 2. Vả cờ Gold & Miễn phí toàn bộ bộ lọc
    entries["is_gold"] = "true";
    entries["has_gold"] = "true";
    entries["is_gold_user"] = "true";
    entries["user_is_gold"] = "true";
    entries["gold_user"] = "true";
    entries["gold_active"] = "true";
    entries["all_filters_free"] = "true";
    entries["unlocked_filters"] = "true";
    entries["free_filters_enabled"] = "true";
    entries["filter_selection_enabled"] = "true";
    entries["require_gold_for_filters"] = "false";
    entries["requires_gold_for_filters"] = "false";
    entries["camera_filter_gold_only"] = "false";
    entries["camera_filters_gold_only"] = "false";
    entries["filter_gold_only"] = "false";
    entries["filters_gold_only"] = "false";
    entries["ai_filter_gold_only"] = "false";
    entries["ai_filters_gold_only"] = "false";
    entries["filter_paywall_enabled"] = "false";
    entries["camera_filter_paywall_enabled"] = "false";
    entries["filter_upsell_enabled"] = "false";

    // 3. Vả đè vô hiệu hóa cache cũ của iOS
    entries["cache_ttl_seconds"] = "0";
    entries["client_cache_ttl_sec"] = "0";
}
hamVaForceOverride(obj.entries);

$done({
    body: JSON.stringify(obj)
});