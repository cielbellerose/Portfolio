import photo from "../assets/photo.png";

function Header() {
  return (
    <section className="flex min-h-25 w-full flex-col justify-center py-5">
      <div className="rounded-card relative border-4 border-neutral-600 p-4 pr-35 dark:border-neutral-400">
        <div>
          <h1 className="text-text-h font-rubik text-3xl font-bold tracking-tight">
            Kinsey Bellerose
          </h1>
          <p className="text-text text-lg font-medium">
            Software Developer and Computer Science Student at Northeastern
            University
          </p>
        </div>
        <img
          className="absolute top-1/2 right-2.5 h-30 w-30 -translate-y-1/2 rounded-full border-4 border-neutral-600 object-cover dark:border-neutral-400"
          src={photo}
          alt="Kinsey Bellerose"
        />
      </div>
    </section>
  );
}

export default Header;
