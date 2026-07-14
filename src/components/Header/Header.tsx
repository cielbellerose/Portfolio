import "./Header.css";
import photo from "../../assets/photo.png";

function Header() {
  return (
    <section className="title-section">
      <div className="name-box">
        <div className="name-box__text">
          <h1>Kinsey Bellerose</h1>
          <p>
            Software Developer and Computer Science Student at Northeastern
            University
          </p>
        </div>
        <img className="photo" src={photo} alt="Kinsey Bellerose" />
      </div>
    </section>
  );
}

export default Header;
