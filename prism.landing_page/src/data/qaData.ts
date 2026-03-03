import type { QAItem } from '../types';

export const qaData: QAItem[] = [
  {
    id: "q1",
    q: "Đau dạ dày hay trào ngược khác nhau thế nào?",
    preview: "Gợi ý phân biệt dựa theo cảm giác nóng rát, vị trí đau và triệu chứng đi kèm.",
    a: `Nếu bạn hay ợ nóng, ợ chua, cảm giác nóng rát lan lên ngực, đôi khi kèm ho khan, khàn tiếng, có thể liên quan trào ngược dạ dày thực quản (GERD).<br><br>
       Nếu bạn đau âm ỉ, nóng rát vùng thượng vị, liên quan bữa ăn, kèm đầy bụng, khó tiêu, buồn nôn, có thể gợi ý viêm dạ dày hoặc viêm loét dạ dày tá tràng.`,
    sources: [
      { t: "Vinmec: trào ngược dạ dày", u: "https://www.vinmec.com/vie/benh/trao-nguoc-da-day-thuc-quan-2634" },
      { t: "Sức khoẻ & Đời sống: viêm loét dạ dày tá tràng", u: "https://suckhoedoisong.vn/benh-viem-loet-da-day-ta-trang-169210802145239692.htm" }
    ],
    related: ["q4", "q5"]
  },
  {
    id: "q4",
    q: "Khi nào cần đi khám ngay, không nên tự chịu?",
    preview: "Có dấu hiệu nghi ngờ xuất huyết tiêu hóa hoặc sụt cân, thiếu máu không rõ nguyên nhân.",
    a: `Bạn nên đi khám sớm (hoặc khám ngay) nếu có dấu hiệu nghi ngờ xuất huyết tiêu hóa như nôn ra máu, đi ngoài phân đen hoặc có triệu chứng nặng như sụt cân, thiếu máu không rõ nguyên nhân.`,
    sources: [
      { t: "Mayo Clinic: peptic ulcer", u: "https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223" },
      { t: "NHS: indigestion", u: "https://www.nhs.uk/conditions/indigestion/" }
    ],
    related: ["q1", "q10"]
  },
  {
    id: "q5",
    q: "Trào ngược dạ dày nên kiêng gì để cải thiện triệu chứng?",
    preview: "Thường khuyến nghị hạn chế cà phê, rượu bia, thuốc lá, đồ nhiều dầu mỡ.",
    a: `Một số khuyến nghị thường gặp là hạn chế cà phê, bia rượu, thuốc lá; hạn chế thức ăn nhiều chất béo, dầu mỡ; cân nhắc tránh một số nhóm thực phẩm dễ làm nặng triệu chứng (tùy cơ địa).`,
    sources: [
      { t: "Vinmec: nên ăn gì và kiêng gì", u: "https://www.vinmec.com/vie/bai-viet/trao-nguoc-da-day-thuc-quan-nen-an-gi-va-kieng-an-gi-vi" }
    ],
    related: ["q1", "q10"]
  },
  {
    id: "q10",
    q: "Nôn ra máu, đi ngoài phân đen có nguy hiểm không?",
    preview: "Có thể liên quan xuất huyết tiêu hóa và nên đi khám ngay.",
    a: `Đây là nhóm dấu hiệu có thể liên quan xuất huyết tiêu hóa và được khuyến nghị đi khám ngay để đánh giá và xử trí kịp thời.`,
    sources: [
      { t: "Vinmec: xuất huyết tiêu hóa", u: "https://www.vinmec.com/vie/benh/xuat-huyet-tieu-hoa-2740" },
      { t: "Mayo Clinic: GI bleeding", u: "https://www.mayoclinic.org/diseases-conditions/gastrointestinal-bleeding/symptoms-causes/syc-20372729" }
    ],
    related: ["q4", "q5"]
  },
];
