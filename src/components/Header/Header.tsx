import photo from "../../assets/photo.png";

function Header() {
  return (
    <section className="outline-debug-border flex min-h-25 w-full flex-col justify-center py-5 outline-1 outline-dashed">
      <div className="relative rounded-[5px] border-2 border-white p-[15px] pr-35">
        <div>
          <h1 className="text-text-h mb-[5px] text-[30px] tracking-[0.5px]">
            Kinsey Bellerose
          </h1>
          <p className="text-text text-base font-medium">
            Software Developer and Computer Science Student at Northeastern
            University
          </p>
        </div>
        <img
          className="absolute top-1/2 right-2.5 h-30 w-30 -translate-y-1/2 rounded-full border-3 border-white object-cover"
          src={photo}
          alt="Kinsey Bellerose"
        />
      </div>
    </section>
  );
}

export default Header;
