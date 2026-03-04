import type { QAItem } from '../types';

export const qaData: QAItem[] = [
  {
    id: "q1",
    q: "Đau dạ dày hay trào ngược khác nhau thế nào?",
    preview: "Gợi ý phân biệt dựa theo cảm giác nóng rát, vị trí đau và triệu chứng đi kèm.",
    a: `Nếu bạn hay ợ nóng, ợ chua, cảm giác nóng rát lan lên ngực, đôi khi kèm ho khan, khàn tiếng, viêm họng mạn tính, có thể liên quan trào ngược dạ dày thực quản (GERD).<br><br>
       Nếu bạn đau âm ỉ, nóng rát vùng thượng vị, liên quan bữa ăn, kèm đầy bụng, khó tiêu, buồn nôn, có thể gợi ý viêm dạ dày hoặc viêm loét dạ dày tá tràng.`,
    sources: [
      { t: "Bệnh viện Đại học Y Dược Cơ sở 3", u: "https://www.facebook.com/benhviendaihocyduoccoso3/posts/907358211430986/" },
      { t: "Vinmec: trào ngược dạ dày", u: "https://www.vinmec.com/vie/bai-viet/benh-trao-nguoc-da-day-thuc-quan-vi" },
      { t: "Sức khoẻ & Đời sống: viêm loét dạ dày tá tràng", u: "https://suckhoedoisong.vn/benh-viem-loet-da-day-ta-trang-169210802145239692.htm?utm.com" }
    ],
    related: ["q2", "q4"]
  },
  {
    id: "q2",
    q: "GERD phổ biến tới mức nào ở Việt Nam?",
    preview: "Tỷ lệ mắc GERD ở Việt Nam được ước tính khoảng 10-15% dân số.",
    a: `Tỷ lệ mắc GERD ở Việt Nam được ước tính khoảng 10-15% dân số.`,
    sources: [
      { t: "Dân trí: trào ngược dạ dày", u: "https://dantri.com.vn/suc-khoe/10-15-nguoi-viet-mac-benh-trao-nguoc-da-day-thuc-quan-20241208140131585.htm" }
    ],
    related: ["q1", "q4"]
  },
  {
    id: "q3",
    q: "Đau thượng vị, đầy bụng, ợ hơi có phải \"đau dạ dày\" không?",
    preview: "Các biểu hiện như ợ chua, ợ hơi, chướng bụng, khó tiêu có thể gặp trong các vấn đề dạ dày.",
    a: `Các biểu hiện như ợ chua, ợ hơi, chướng bụng, khó tiêu có thể gặp trong các vấn đề dạ dày. Điều quan trọng là quan sát tần suất, mức độ ảnh hưởng sinh hoạt và các dấu hiệu đi kèm để quyết định đi khám phù hợp.`,
    sources: [
      { t: "Sức khoẻ & Đời sống: đau dạ dày", u: "https://suckhoedoisong.vn/benh-dau-da-day-va-nhung-trieu-chung-dien-hinh-169167923.htm" }
    ],
    related: ["q4", "q10"]
  },
  {
    id: "q4",
    q: "Khi nào cần đi khám ngay, không nên tự chịu?",
    preview: "Có dấu hiệu nghi ngờ xuất huyết tiêu hóa như nôn ra máu, đi ngoài phân đen, hoặc sụt cân, thiếu máu.",
    a: `Bạn nên đi khám sớm (hoặc khám ngay) nếu có dấu hiệu nghi ngờ xuất huyết tiêu hóa như nôn ra máu, đi ngoài phân đen/máu, hoặc có triệu chứng nặng như sụt cân, thiếu máu không rõ nguyên nhân. Đây là nhóm dấu hiệu thường được khuyến nghị nội soi và xử trí sớm.`,
    sources: [
      { t: "Vinmec: nội soi thực quản dạ dày tá tràng", u: "https://www.vinmec.com/vie/bai-viet/tim-hieu-phuong-phap-noi-soi-thuc-quan-da-day-ta-trang-chan-doan-cac-benh-ve-da-day-tai-vinmec-vi" },
      { t: "Vinmec: cần nhịn ăn bao lâu", u: "https://www.vinmec.com/vie/bai-viet/can-nhin-an-bao-lau-truoc-khi-noi-soi-da-day-vi" }
    ],
    related: ["q8", "q10"]
  },
  {
    id: "q5",
    q: "Trào ngược dạ dày nên kiêng gì để cải thiện triệu chứng?",
    preview: "Hạn chế cà phê, bia rượu, thuốc lá và thức ăn nhiều chất béo, dầu mỡ.",
    a: `Một số khuyến nghị thường gặp là hạn chế cà phê, bia rượu, thuốc lá; hạn chế thức ăn nhiều chất béo, dầu mỡ; cân nhắc tránh một số nhóm thực phẩm dễ làm nặng triệu chứng (tùy cơ địa).`,
    sources: [
      { t: "Vinmec: nên ăn gì và kiêng gì", u: "https://www.vinmec.com/vie/bai-viet/trao-nguoc-da-day-thuc-quan-nen-an-gi-va-kieng-an-gi-vi" }
    ],
    related: ["q1", "q6"]
  },
  {
    id: "q6",
    q: "Stress có thể làm nặng vấn đề dạ dày không?",
    preview: "Stress có thể tăng tiết acid, co thắt thực quản và làm triệu chứng đường tiêu hóa trầm trọng hơn.",
    a: `Stress có thể liên quan đến tăng tiết acid, co thắt thực quản, khó tiêu và làm triệu chứng đường tiêu hóa trầm trọng hơn, đặc biệt khi căng thẳng kéo dài. Nếu bạn thấy đau dạ dày "bùng" vào giai đoạn stress cao, hãy ưu tiên điều chỉnh giấc ngủ, nhịp sinh hoạt, và tìm cách giảm căng thẳng.`,
    sources: [
      { t: "Vinmec: stress và bệnh dạ dày", u: "https://www.vinmec.com/vie/bai-viet/moi-lien-he-giua-stress-va-benh-da-day-vi" }
    ],
    related: ["q1", "q5"]
  },
  {
    id: "q7",
    q: "Vi khuẩn HP lây qua đường nào?",
    preview: "HP có thể lây qua đường miệng-miệng và liên quan thói quen sinh hoạt chung.",
    a: `HP có thể lây qua đường miệng-miệng và liên quan đến thói quen sinh hoạt chung như dùng chung đồ cá nhân, dùng chung bát đũa, hoặc tiếp xúc gần có nước bọt. Nếu trong nhà có người nhiễm HP, nên chú ý vệ sinh và thói quen ăn uống để giảm nguy cơ lây.`,
    sources: [
      { t: "Vinmec: đường lây nhiễm HP", u: "https://www.vinmec.com/vie/bai-viet/cac-con-duong-lay-nhiem-cua-vi-khuan-hp-vi" }
    ],
    related: ["q8"]
  },
  {
    id: "q8",
    q: "Khi nào nên nội soi dạ dày?",
    preview: "Nội soi được cân nhắc khi có triệu chứng kéo dài, đau thượng vị thường xuyên hoặc nghi ngờ xuất huyết.",
    a: `Nội soi thường được cân nhắc khi bạn có triệu chứng kéo dài như đau thượng vị thường xuyên, buồn nôn-nôn, sụt cân, ăn uống kém, hoặc nghi ngờ xuất huyết tiêu hóa (nôn ra máu, đi ngoài phân đen), hoặc cần kiểm tra HP và tầm soát tổn thương.`,
    sources: [
      { t: "Vinmec: nội soi thực quản dạ dày tá tràng", u: "https://www.vinmec.com/vie/bai-viet/tim-hieu-phuong-phap-noi-soi-thuc-quan-da-day-ta-trang-chan-doan-cac-benh-ve-da-day-tai-vinmec-vi" }
    ],
    related: ["q4", "q7"]
  },
  {
    id: "q9",
    q: "Tự uống thuốc giảm đau có thể làm hại dạ dày không?",
    preview: "Thuốc giảm đau NSAID có thể gây khó chịu dạ dày và tăng nguy cơ viêm loét nếu dùng không đúng cách.",
    a: `Một số thuốc giảm đau, chống viêm không steroid (NSAID) như ibuprofen, naproxen… có thể gây khó chịu dạ dày và làm tăng nguy cơ viêm loét, đặc biệt nếu dùng không đúng cách hoặc lạm dụng. Nếu hay đau dạ dày, bạn nên hạn chế tự dùng thuốc và hỏi ý kiến chuyên môn khi cần.`,
    sources: [
      { t: "Sức khoẻ & Đời sống: viêm loét do thuốc", u: "https://suckhoedoisong.vn/viem-loet-da-day-do-tu-y-dung-thuoc-giam-dau-169174763.htm" },
      { t: "YHCT: thuốc NSAID", u: "https://www.yhct.vn/thong-tin-thuoc/danh-cho-nvyt/canh-giac-duoc/cac-thuoc-chong-viem-khong-steroid-nsaid-thoi-gian-su-dung-toi-da" },
      { t: "Sức khoẻ & Đời sống: thuốc giảm đau gây đau dạ dày", u: "https://suckhoedoisong.vn/vi-sao-thuoc-giam-dau-chong-viem-lai-gay-dau-da-day-169241014162326131.htm" }
    ],
    related: ["q3", "q10"]
  },
  {
    id: "q10",
    q: "Buồn nôn, nôn ra máu, đi ngoài phân đen có nguy hiểm không?",
    preview: "Đây là nhóm dấu hiệu liên quan xuất huyết tiêu hóa, cần đi khám ngay để xử trí kịp thời.",
    a: `Đây là nhóm dấu hiệu có thể liên quan xuất huyết tiêu hóa và được khuyến nghị đi khám ngay để đánh giá và xử trí kịp thời.`,
    sources: [
      { t: "Nhà thuốc Long Châu: xuất huyết dạ dày", u: "https://nhathuoclongchau.com.vn/bai-viet/xuat-huyet-da-day-non-ra-mau-co-nguy-hiem-khong.html" }
    ],
    related: ["q4", "q8"]
  }
];
