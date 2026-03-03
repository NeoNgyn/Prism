export const About = () => {
  return (
    <>
      <section className="section">
        <div className="panel pad">
          <p className="kicker"><span className="badge">About us</span></p>
          <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Team Prism</h2>
          <p className="sub">
            Êm Dạ Mode là đồ án tốt nghiệp của nhóm sinh viên ngành Truyền thông Đa phương tiện, Trường Đại học FPT TP.HCM.
            Chiến dịch hướng đến truyền thông cộng đồng nhằm nâng cao nhận thức và thúc đẩy hành vi chăm sóc sức khỏe dạ dày ở người trẻ.
          </p>

          <div className="grid-3" style={{ marginTop: '14px' }}>
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
