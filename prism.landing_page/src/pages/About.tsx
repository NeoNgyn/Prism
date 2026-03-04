export const About = () => {
  return (
    <>
      <section className="section">
        <div className="panel pad">
          <p className="kicker"><span className="badge">About us</span></p>
          <h2 style={{ marginTop: 0 }}>
            {/* <span className="bar" aria-hidden="true"></span> */}
            ÊM DẠ MODE
          </h2>
          <p className="sub">
            <strong>ÊM DẠ MODE</strong> là đồ án tốt nghiệp của nhóm sinh viên ngành Truyền thông Đa phương tiện, 
            Trường Đại học FPT TP.HCM. Chiến dịch hướng đến truyền thông cộng đồng nhằm nâng cao nhận thức và thúc đẩy hành vi chăm sóc sức khỏe dạ dày ở người trẻ.
          </p>

          {/* <div className="grid-3" style={{ marginTop: '14px' }}>
            <div className="kpi">
              <h3>Why</h3>
              <p>Giảm tình trạng xem nhẹ triệu chứng và trì hoãn hành động chăm sóc dạ dày.</p>
            </div>
            <div className="kpi">
              <h3>How</h3>
              <p>Truyền thông dễ tiếp cận, đi từ nhận diện đến bước nhỏ có thể làm ngay.</p>
            </div>
            <div className="kpi">
              <h3>What</h3>
              <p>Nội dung giáo dục sức khỏe, Q&A có nguồn và test demo để tự rà soát.</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="section">
        <h2>
          <span className="bar" aria-hidden="true"></span>Thông qua chiến dịch
          chúng mình mong muốn
        </h2>
        <div className="grid-3">
          <div className="kpi">
            <h3>Nhận thức</h3>
            <p>
              Nâng cao nhận thức về mức độ nghiêm trọng của các vấn đề dạ dày.
            </p>
          </div>
          <div className="kpi">
            <h3>Kiến thức</h3>
            <p>Trang bị những hiểu biết đúng đắn, dễ hiểu về các nguyên nhân gốc rễ và những giải pháp thực tế để phòng ngừa và cải thiện.</p>
          </div>
          <div className="kpi">
            <h3>Hành động</h3>
            <p>
              Thúc đẩy chủ động thay đổi ít nhất một thói quen để bảo vệ sức khoẻ dạ dày.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel pad">
          <h2 style={{ marginTop: 0 }}>
            <span className="bar" aria-hidden="true"></span>Ý tưởng sáng tạo
          </h2>
          <p className="sub">
            <strong>Người trẻ sợ bị gián đoạn nhịp sống hơn là sợ bệnh dạ dày</strong> – trì hoãn vì thiếu mốc để hành động, rào cản thời gian và phiền phức khi đi khám và hơn hết là sợ ảnh hưởng hiệu suất làm việc, học tập.
          </p>
          <p className="sub" style={{ marginTop: "10px" }}>
            <strong>Từ thực tế đó, chiến dịch đã đưa ra thông điệp:</strong> Đừng để cơn đau dạ dày “pop-up” làm gián đoạn nhịp sống – upgrade để giữ trải nghiệm sống mượt mà.
          </p>
          <div className="highlight-box">
            <p className="sub">
              Chiến dịch kêu gọi bật <b>Êm Dạ Mode</b> như một cách upgrade lối sống theo hướng nhẹ nhàng, dễ làm: check sớm - chọn bước nhỏ phù hợp – duy trì đúng nhịp, để hạn chế pop-up quay lại và giữ cho ngày làm việc/học tập “mượt” hơn.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel pad">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0 }}><span className="bar" aria-hidden="true"></span>Core team</h2>
            <span className="badge">Team Prism</span>
          </div>

          <div className="team" style={{ marginTop: '14px' }}>
            <div className="member">
              <div className="avatar" aria-hidden="true"></div>
              <div className="name">Nguyễn Đặng Mỹ Hạnh</div>
              <div className="role">Project Leader</div>
            </div>
            <div className="member">
              <div className="avatar" aria-hidden="true"></div>
              <div className="name">Đặng Anh Hào</div>
              <div className="role">Planning Leader</div>
            </div>
            <div className="member">
              <div className="avatar" aria-hidden="true"></div>
              <div className="name">Lê Nguyễn Mai Thảo</div>
              <div className="role">Communications Leader</div>
            </div>
            <div className="member">
              <div className="avatar" aria-hidden="true"></div>
              <div className="name">Nguyễn Thị Thanh Thảo</div>
              <div className="role">Production Leader</div>
            </div>
            <div className="member">
              <div className="avatar" aria-hidden="true"></div>
              <div className="name">Phan Thị Trà My</div>
              <div className="role">Event Leader</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
