export default function About() {
  const team = [
    { name: 'Võ Phúc Khang', role: 'Leader / Designer' },
    { name: 'Đinh Phước Thiện', role: 'Designer' },
    { name: 'Huỳnh Thị Minh Thy', role: 'Designer' },
    { name: 'Lý Gia Bảo', role: 'Designer' },
    { name: 'Đỗ Thị Huỳnh Như', role: 'Designer' }
  ];

  return (
    <main>
      <div className="container">
        <section className="section">
          <div className="panel pad">
            <div className="kicker">VỀ CHÚNG TÔI</div>
            <h1 className="h1">Đội ngũ Êm Dạ Mode</h1>
            <p className="sub">
              Chúng tôi là nhóm sinh viên Đại học FPT, khoa Thiết kế Đồ họa, với mục tiêu nâng cao nhận thức về sức khỏe dạ dày cho thế hệ trẻ 18–24 tuổi tại TP.HCM thông qua chiến dịch truyền thông sáng tạo.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="bar"></span>
            Đội ngũ thực hiện
          </h2>
          <div className="team">
            {team.map((member, idx) => (
              <div key={idx} className="member">
                <div className="avatar"></div>
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="bar"></span>
            Sứ mệnh của chúng tôi
          </h2>
          <div className="grid-2">
            <div className="kpi">
              <h3>Truyền thông sáng tạo</h3>
              <p>
                Sử dụng các kênh truyền thông số, nội dung đồ họa bắt mắt, dễ hiểu để tiếp cận sinh viên một cách tự nhiên và hiệu quả.
              </p>
            </div>
            <div className="kpi">
              <h3>Nội dung chất lượng</h3>
              <p>
                Cung cấp thông tin khoa học, đáng tin cậy về nguyên nhân, triệu chứng và cách phòng ngừa bệnh dạ dày.
              </p>
            </div>
            <div className="kpi">
              <h3>Thay đổi hành vi</h3>
              <p>
                Khuyến khích sinh viên cải thiện thói quen ăn uống, quản lý stress, bảo vệ sức khỏe dạ dày bền vững.
              </p>
            </div>
            <div className="kpi">
              <h3>Xây dựng cộng đồng</h3>
              <p>
                Tạo không gian để sinh viên chia sẻ, hỗ trợ lẫn nhau trong hành trình chăm sóc sức khỏe.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="panel pad">
            <h2 style={{ marginTop: 0 }}>
              <span className="bar"></span>
              Câu chuyện của chúng tôi
            </h2>
            <p className="sub">
              Trong quá trình học tập và nghiên cứu, chúng tôi nhận thấy nhiều bạn sinh viên gặp vấn đề về dạ dày do căng thẳng học tập, 
              ăn uống không đều, thức khuya. Tuy nhiên, đa số chưa thực sự nhận thức rõ mức độ nghiêm trọng hoặc cách phòng ngừa hiệu quả.
            </p>
            <p className="sub" style={{ marginTop: '14px' }}>
              Vì vậy, chúng tôi quyết định xây dựng chiến dịch <strong>"Êm Dạ Mode"</strong> – nơi mang đến thông tin khoa học, 
              dễ hiểu, gần gũi với đời sống sinh viên, đồng thời tạo không gian để mọi người chia sẻ kinh nghiệm, 
              hỗ trợ lẫn nhau trong hành trình chăm sóc sức khỏe dạ dày.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="helper">
            <span className="dot"></span>
            <span>
              <strong>Liên hệ với chúng tôi:</strong> Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác, đừng ngần ngại liên hệ qua trang <a href="/contact">Liên hệ</a>.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
