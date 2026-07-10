
function Home() {
  return (
    <>
      <section className="title-section">
        <div className="name-box">
          <h1>Kinsey Bellerose</h1>
          <p>
            Software Developer and Computer Science Student at Northeastern
            University
          </p>
        </div>
      </section>
      <div className="columns">
        <div className="content">{/* experiences, projects ... */}</div>
        <aside className="sidebar">{/* timezone, links, skills ... */}</aside>
      </div>
    </>
  );
}

export default Home;
