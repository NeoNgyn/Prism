# Hướng dẫn cấu hình EmailJS

## Bước 1: Đăng ký tài khoản EmailJS

1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí (Free tier cho phép 200 email/tháng)
3. Xác nhận email đăng ký

## Bước 2: Tạo Email Service

1. Sau khi đăng nhập, vào **Email Services**
2. Click **Add New Service**
3. Chọn Gmail (hoặc email provider khác)
4. Đăng nhập với email **nguyenphucnhan2004@gmail.com**
5. Copy **Service ID** (ví dụ: service_abc123)

## Bước 3: Tạo Email Template

1. Vào **Email Templates**
2. Click **Create New Template**
3. Đặt tên template: "Prism Contact Form"

4. Cấu hình **Settings** tab:
   - **To Email**: nguyenphucnhan2004@gmail.com
   - **From Name**: Prism Landing Page
   - **Subject**: [Liên hệ] {{topic}} | Êm Dạ Mode
   - **Reply To**: {{reply_to}}

5. Chuyển sang **Content** tab:
   - **Phiên bản 1** (Recommended): Mở file `email-template.html` - Dark theme, giống website
   - **Phiên bản 2** (Simple): Mở file `email-template-simple.html` - Light theme, tương thích tốt hơn
   - Copy toàn bộ nội dung HTML của phiên bản bạn chọn
   - Paste vào phần **HTML Content** của EmailJS
   - Click **Save**

6. Test template bằng cách click **Test It** và điền các giá trị mẫu

7. Copy **Template ID** (ví dụ: template_xyz789)

## Bước 4: Lấy Public Key

1. Vào **Account** > **General**
2. Trong phần **API Keys**, copy **Public Key**

## Bước 5: Cập nhật file .env

Mở file `.env` trong thư mục `prism.landing_page` và cập nhật:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Bước 6: Khởi động lại dev server

```bash
npm run dev
```

## Template Variables được sử dụng

Trong form liên hệ, các biến sau sẽ được gửi đến EmailJS:

- `from_name`: Họ và tên người gửi
- `reply_to`: Email người gửi
- `phone`: Số điện thoại
- `topic`: Chủ đề liên hệ
- `message`: Nội dung tin nhắn

## Giới hạn Free Tier

- 200 email/tháng
- 2 email services
- 3 email templates
- Không có ads trong email

Nếu cần nhiều hơn, có thể nâng cấp lên gói trả phí.

## Troubleshooting

### Email không được gửi
- Kiểm tra console để xem lỗi
- Đảm bảo các biến môi trường được cấu hình đúng
- Kiểm tra xem email service có được kết nối đúng không

### Email vào spam
- Xác thực domain trong EmailJS (chỉ có ở gói trả phí)
- Yêu cầu người nhận đánh dấu không phải spam

### Rate limit
- Free tier giới hạn 200 email/tháng
- Nếu vượt quá, cần nâng cấp gói hoặc chờ tháng sau
