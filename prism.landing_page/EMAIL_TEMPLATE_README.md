# Email Template - Prism Landing Page

File này chứa HTML template cho email liên hệ từ Prism Landing Page.

## 📁 Các file template

### 1. `email-template.html` (Recommended)
- **Theme**: Dark with gradient background
- **Style**: Giống website, chuyên nghiệp
- **Tương thích**: Tốt trên Gmail, Apple Mail, Outlook modern
- **Sử dụng**: Phù hợp khi muốn brand consistency

### 2. `email-template-simple.html` (Alternative)
- **Theme**: Light, clean design
- **Style**: Đơn giản, dễ đọc
- **Tương thích**: Tốt trên mọi email client
- **Sử dụng**: Khi cần đảm bảo tương thích tối đa

## 🎨 Thiết kế

Template được thiết kế với màu sắc của website:
- **Background**: Dark gradient (#070b16 → #0b1330)
- **Primary Colors**: 
  - Mint Green: #6ee7c8
  - Blue: #7aa6ff
  - Pink: #ff7bd4
- **Text Colors**: 
  - Main: #eef2ff
  - Muted: #a6b0d6

## 📋 Thông tin hiển thị

Email template sẽ hiển thị đầy đủ thông tin từ form liên hệ:
- ✅ Họ và tên người gửi
- ✅ Email người gửi (reply-to)
- ✅ Số điện thoại
- ✅ Chủ đề liên hệ
- ✅ Nội dung tin nhắn

## 🔧 Cách sử dụng

### 1. Chọn template phù hợp

**Nên chọn `email-template.html` nếu:**
- ✅ Muốn giữ brand identity với website (dark theme)
- ✅ Đối tượng chủ yếu dùng Gmail, Apple Mail, Outlook hiện đại
- ✅ Ưu tiên thiết kế đẹp mắt, chuyên nghiệp

**Nên chọn `email-template-simple.html` nếu:**
- ✅ Cần tương thích tối đa với mọi email client
- ✅ Đối tượng có thể dùng email client cũ hoặc corporate email
- ✅ Ưu tiên nội dung rõ ràng hơn thiết kế

### 2. Copy template vào EmailJS

1. Đăng nhập vào https://dashboard.emailjs.com/
2. Vào **Email Templates**
3. Tạo template mới hoặc edit template hiện tại
4. Mở file template bạn đã chọn (`email-template.html` hoặc `email-template-simple.html`)
5. Copy toàn bộ nội dung (Ctrl+A, Ctrl+C)
6. Paste vào phần **HTML Content** trong EmailJS
7. Click **Save**

### 2. Cấu hình Settings

Trong tab **Settings** của template:

```
To Email: nguyenphucnhan2004@gmail.com
From Name: Prism Landing Page
Subject: [Liên hệ] {{topic}} | Êm Dạ Mode
Reply To: {{reply_to}}
```

### 3. Template Variables

Template sử dụng các biến sau (được gửi từ Contact form):

| Biến | Mô tả | Ví dụ |
|------|-------|-------|
| `{{from_name}}` | Họ và tên người gửi | Nguyễn Văn A |
| `{{reply_to}}` | Email người gửi | user@example.com |
| `{{phone}}` | Số điện thoại | 0909123456 |
| `{{topic}}` | Chủ đề liên hệ | Hợp tác chuyên môn |
| `{{message}}` | Nội dung tin nhắn | Xin chào, tôi muốn... |

### 4. Test template

Trong EmailJS template editor:
1. Click nút **Test It**
2. Điền các giá trị mẫu cho các biến
3. Gửi test email để kiểm tra giao diện
4. Verify rằng các button và link hoạt động đúng

## ✨ Tính năng

- 📱 **Responsive**: Tự động điều chỉnh trên mọi thiết bị
- 🎨 **Brand colors**: Sử dụng màu sắc đồng nhất với website
- 🔘 **Action buttons**: Nút phản hồi nhanh qua email/phone
- 💌 **Professional layout**: Thiết kế chuyên nghiệp, dễ đọc
- 🌈 **Gradient design**: Hiệu ứng gradient đẹp mắt

## 🔍 Preview

Email sẽ có cấu trúc:

```
┌─────────────────────────────────────┐
│ 🏷️ LIÊN HỆ MỚI                      │
│ Prism Project - Êm Dạ Mode          │
├─────────────────────────────────────┤
│                                     │
│  👤  Tên người gửi                  │
│      📧 email@example.com          │
│      📱 0909123456                  │
│                                     │
│  Chủ đề: [Badge chủ đề]            │
│                                     │
│  ┃ Nội dung tin nhắn:               │
│  ┃ Lorem ipsum dolor...             │
│                                     │
│  [📧 Phản hồi Email] [📱 Gọi điện] │
│                                     │
├─────────────────────────────────────┤
│ Email tự động từ Prism Landing Page │
└─────────────────────────────────────┘
```

## ⚠️ Lưu ý

- EmailJS có giới hạn HTML size, template này đã được tối ưu
- Một số email client có thể không hiển thị đầy đủ CSS gradient
- Các button và link đều hoạt động trên mọi email client phổ biến
- Template tương thích với Gmail, Outlook, Apple Mail, v.v.

## 🛠️ Troubleshooting

**Email không hiển thị đúng màu sắc:**
- Một số email client chặn CSS inline, nhưng nội dung vẫn đọc được
- Gmail web thường hiển thị tốt nhất

**Nút không click được:**
- Kiểm tra xem email client có chặn images/links không
- Một số corporate email có security policy nghiêm ngặt

**Thiếu thông tin:**
- Verify rằng form đang gửi đúng tên biến (from_name, reply_to, etc.)
- Check console trong browser khi submit form

## 📝 Customization

Nếu muốn chỉnh sửa template:

1. Edit file `email-template.html`
2. Thay đổi màu sắc trong các style inline
3. Tùy chỉnh text/layout theo ý muốnSave và copy lại vào EmailJS
5. Test lại trước khi deploy

## 📚 Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [HTML Email Best Practices](https://www.campaignmonitor.com/css/)
- [Email on Acid - Testing Tool](https://www.emailonacid.com/)
