# 💛 Locket Gold + Filter AI + Photobooth by Thanh Lê (@thanhlh05)

Bộ Module & Script tinh chỉnh cao cấp dành cho **Locket Widget** trên iOS. Mở khóa toàn diện **Locket Gold VIP**, hỗ trợ quay & tải video **45 giây**, mở khóa bộ lọc ảnh **Photobooth 4 ô**, **AI Filter 3D**, gỡ làm mờ ảnh (**Unblur Moments**) và hiển thị huy hiệu vương miện / viền vàng chính chủ.

Hỗ trợ đầy đủ các ứng dụng proxy iOS: **Loon**, **Shadowrocket**, **Surge**, **Quantumult X**.

---

## ✨ Tính Năng Nổi Bật

1. **Mở Khóa Locket Gold VIP vĩnh viễn**:
   - Tự động nhận diện tài khoản chủ máy và cấp quyền Gold VIP.
   - Hiển thị đầy đủ **Huy hiệu Gold**, vương miện và viền vàng chuẩn Locket.
   - Mở khóa toàn bộ biểu tượng ứng dụng (App Icons), Theme camera và tính năng độc quyền.
2. **Nâng Cấp Video Lên Đến 45 Giây**:
   - Quay trực tiếp hoặc tải từ thư viện ảnh (Camera Roll) video thời lượng **45.0s**.
   - Tối ưu chất lượng bitrate (0.6 Mbps) và Lanczos upscale giúp ảnh/video sắc nét, không bị vỡ hình.
3. **Mở Khóa 100% Bộ Lọc Photobooth & Khung Ảnh Độc Quyền**:
   - Hơn **50+ bộ lọc Photobooth** (4-cut Hàn Quốc, Vintage, Cute Pastel, Y2K Hologram, Scrapbook, Denim Ripped, ...).
   - Đầy đủ các khung ảnh hot trend, sticker bình luận và hàng trăm caption nghệ thuật.
4. **Bộ Lọc AI Filter 3D & Chống Lỗi Tuyệt Đối**:
   - Định tuyến an toàn sang Cloudflare Worker bảo mật.
   - Khắc phục **100% lỗi "Không thể áp dụng bộ lọc"** thường gặp trên Shadowrocket / Loon do cơ chế HTTP 307 redirect cũ.
   - Tự động chuẩn hóa mã bộ lọc (`filter_id`) và tự động gắn AI prompt chuẩn từ máy chủ.
5. **Gỡ Mờ Ảnh (Unblur Moments & Filters)**:
   - Tự động thay thế ảnh bị che mờ (`blurred_url`) thành ảnh gốc sắc nét (`clearUrl`).
   - Gỡ bỏ hoàn toàn cờ đòi tiền, paywall và mã lỗi `400`, `402`, `403`, `422`.
6. **Mạng Lưới Bạn Bè VIP Cộng Đồng**:
   - Nhận diện bạn bè trong danh sách VIP và tự động gắn huy hiệu viền vàng & tim vàng (💛).
   - Hỗ trợ tham số cấu hình `all_friends=true` nếu bạn muốn bật Gold cho toàn bộ bạn bè trong danh bạ.

---

## 🛠️ Danh Sách Các Lỗi Đã Được Sửa Hoàn Thiện

| Lỗi cũ trong phiên bản trước | Nguyên nhân kỹ thuật | Cách xử lý trong bản hoàn thiện |
|---|---|---|
| **SyntaxError: Illegal return statement** | Trong file `locket_change_profile.js` và `locket_filter_resp.js` có các lệnh `return;` nằm ngoài function ở cấp độ root, khiến JavaScriptCore / iOS crash cú pháp ngay khi nạp script. | Đã bao bọc toàn bộ mã nguồn vào hàm IIFE `(function () { ... })();`, kiểm soát luồng `return` hợp lệ chuẩn ECMAScript. |
| **Lỗi "Không thể áp dụng bộ lọc" (AI Filter / Photobooth)** | Cơ chế `[URL Rewrite] 307` gửi redirect HTTP 307 về cho app Locket. Khi upload ảnh bằng phương thức `POST`, app iOS không hỗ trợ giữ nguyên body khi redirect 307 nên request bị hỏng. | Loại bỏ URL Rewrite 307 xung đột; chuyển sang xử lý Reroute nội bộ trong script `locket_pb_req.js`, chuyển tiếp trực tiếp URL & Headers mà không làm gián đoạn kết nối của app. |
| **Lỗi ngày tháng trong `revenuecat.js`** | Ngày mua (`purchase_date`) bị đặt ở tương lai (`2027`), ngày hết hạn đặt `9999` gây lỗi tràn số trên bộ phân tích ngày của iOS. | Sửa ngày mua thành quá khứ (`2024-01-01`), hạn dùng cố định chuẩn `2099-12-31T23:59:59Z`. |
| **Lỗi crash khi thiếu User-Agent / Headers** | Truy cập trực tiếp `ua.includes()` khi headers rỗng dẫn đến `TypeError: Cannot read properties of undefined`. | Bổ sung fallback kiểm tra an toàn `(req && req.headers)` và safe optional handling. |
| **Lỗi file sai tên `evenuecat.js`** | Thiếu chữ cái 'r' gây nhầm lẫn và lỗi liên kết. | Đổi tên chuẩn thành `revenuecat.js`, đồng thời giữ file alias `evenuecat.js` để tương thích ngược 100%. |
| **Lỗi ghi đè Content-Type thành JSON trên ảnh/media** | Script `locket_filter_resp.js` ép `Content-Type: application/json` ngay cả khi dữ liệu trả về là ảnh/binary. | Bổ sung điều kiện chỉ sửa headers khi dữ liệu thực sự là JSON hợp lệ. |

---

## 📲 Hướng Dẫn Cài Đặt

### 1. Dành Cho Loon
1. Mở ứng dụng **Loon** -> Chuyển sang tab **Cấu hình (Configuration)** -> Chọn **Modules (Plugin)**.
2. Nhấn nút **Thêm (+)** -> Dán đường dẫn sau vào ô URL:
   ```
   https://raw.githubusercontent.com/thanhlh05/Locket-Gold-Thanhle-FilterAI/main/module/Locket-Filter-AI.module
   ```
3. Nhấn lưu và bật Module.

### 2. Dành Cho Shadowrocket
1. Mở ứng dụng **Shadowrocket** -> Chọn tab **Cấu hình (Config)**.
2. Nhấn vào mục **Modules** -> Chọn **Thêm Module (+)** -> Dán URL:
   ```
   https://raw.githubusercontent.com/thanhlh05/Locket-Gold-Thanhle-FilterAI/main/module/Locket-Filter-AI.module
   ```
3. Bật Module vừa thêm.

### 3. Dành Cho Surge
1. Mở ứng dụng **Surge** -> Tab **Modules** -> Chọn **Cài đặt Module mới**.
2. Dán link file `.sgmodule`:
   ```
   https://raw.githubusercontent.com/thanhlh05/Locket-Gold-Thanhle-FilterAI/main/module/Locket-Filter-AI.sgmodule
   ```

### 4. Dành Cho Quantumult X
1. Mở **Quantumult X** -> Nhấn vào icon góc dưới bên phải -> Mục **Phần mở rộng (Rewrite)**.
2. Chọn **Remote Rewrite** -> Nhấn icon (+) và dán link:
   ```
   https://raw.githubusercontent.com/thanhlh05/Locket-Gold-Thanhle-FilterAI/main/module/Locket-Filter-AI.snippet
   ```

---

## ⚠️ Lưu Ý Quan Trọng Sau Khi Cài Đặt
1. **Bật giải mã HTTPS (MITM)**:
   - Trong ứng dụng proxy (Loon/Shadowrocket/Surge/Q-X), hãy đảm bảo bạn đã **Tạo CA Certificate** -> **Cài đặt vào máy** -> Vào **Cài đặt iOS > Cài đặt chung > Giới thiệu > Cài đặt tin cậy chứng nhận** và bật tin cậy chứng chỉ.
2. **Khởi động lại Locket**:
   - Vuốt tắt hoàn toàn ứng dụng Locket trong đa nhiệm (App Switcher), sau đó mở lại để app nhận dữ liệu Remote Config và kích hoạt Gold.

---

## ⚖️ Giấy phép & Tác quyền
- **Phân phối & Tinh chỉnh**: Thanh Lê (@thanhlh05)
- **Base tham khảo**: Nightmarket & MinhHiep08
- Dự án được phát triển nhằm mục đích học tập, nghiên cứu kỹ thuật phân tích gói tin mạng di động.
