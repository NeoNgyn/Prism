import type { TestItem } from '../types';

export const testItems: TestItem[] = [
  {
    id: "q1",
    tag: "PHẦN 1 — TRIỆU CHỨNG CẢM NHẬN",
    q: "Bạn có cảm giác đau hoặc nóng rát vùng thượng vị (trên rốn) không?",
    opts: [
      ["Không bao giờ", 0],
      ["Thỉnh thoảng (1–2 lần/tuần)", 1],
      ["Khá thường xuyên (3–5 lần/tuần)", 2],
      ["Gần như mỗi ngày hoặc dữ dội", 3]
    ]
  },
  {
    id: "q2",
    tag: "PHẦN 1 — TRIỆU CHỨNG CẢM NHẬN",
    q: "Bạn có bị đầy hơi, chướng bụng sau ăn?",
    opts: [
      ["Hiếm khi", 0],
      ["Thỉnh thoảng", 1],
      ["Thường xuyên", 2],
      ["Hầu như sau mọi bữa ăn", 3]
    ]
  },
  {
    id: "q3",
    tag: "PHẦN 1 — TRIỆU CHỨNG CẢM NHẬN",
    q: "Ợ chua hoặc trào ngược xảy ra mức nào?",
    opts: [
      ["Không có", 0],
      ["Thỉnh thoảng", 1],
      ["Nhiều lần/tuần", 2],
      ["Hàng ngày hoặc ảnh hưởng giấc ngủ", 3]
    ]
  },
  {
    id: "q4",
    tag: "PHẦN 1 — TRIỆU CHỨNG CẢM NHẬN",
    q: "Buồn nôn hoặc khó tiêu kéo dài?",
    opts: [
      ["Không", 0],
      ["Ít khi", 1],
      ["Hay gặp", 2],
      ["Rất thường xuyên", 3]
    ]
  },
  {
    id: "q5",
    tag: "PHẦN 2 — YẾU TỐ NGUY CƠ LỐI SỐNG",
    q: "Thói quen ăn uống của bạn:",
    opts: [
      ["Điều độ, đúng giờ", 0],
      ["Thỉnh thoảng bỏ bữa", 1],
      ["Hay ăn thất thường, ăn nhanh", 2],
      ["Rất thất thường, hay ăn khuya", 3]
    ]
  },
  {
    id: "q6",
    tag: "PHẦN 2 — YẾU TỐ NGUY CƠ LỐI SỐNG",
    q: "Căng thẳng tâm lý gần đây:",
    opts: [
      ["Thấp", 0],
      ["Trung bình", 1],
      ["Cao", 2],
      ["Rất cao kéo dài", 3]
    ]
  },
  {
    id: "q7",
    tag: "PHẦN 2 — YẾU TỐ NGUY CƠ LỐI SỐNG",
    q: "Sử dụng chất kích thích (cà phê, rượu, thuốc lá):",
    opts: [
      ["Không", 0],
      ["Ít", 1],
      ["Thường xuyên", 2],
      ["Hàng ngày mức cao", 3]
    ]
  },
  {
    id: "q8",
    tag: "PHẦN 3 — DẤU HIỆU CẢNH BÁO",
    q: "Bạn có sụt cân không chủ ý?",
    opts: [
      ["Không", 0],
      ["Giảm nhẹ", 1],
      ["Giảm rõ", 2],
      ["Giảm nhanh", 3]
    ]
  },
  {
    id: "q9",
    tag: "PHẦN 3 — DẤU HIỆU CẢNH BÁO",
    q: "Đi ngoài phân đen hoặc có máu?",
    opts: [
      ["Không", 0],
      ["Không chắc", 1],
      ["Có 1 lần", 2],
      ["Có nhiều lần", 3]
    ]
  },
  {
    id: "q10",
    tag: "PHẦN 3 — DẤU HIỆU CẢNH BÁO",
    q: "Cơn đau dạ dày có làm bạn thức giấc ban đêm?",
    opts: [
      ["Không", 0],
      ["Hiếm khi", 1],
      ["Thỉnh thoảng", 2],
      ["Thường xuyên", 3]
    ]
  }
];
