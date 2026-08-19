import photo from "../assets/photo.png";

function Header() {
  return (
    <section className="flex min-h-25 w-full flex-col justify-center py-5">
      <div className="rounded-card flex items-center justify-center gap-4 border-4 border-neutral-600 px-4 py-4 sm:justify-between sm:px-6 sm:py-3 lg:px-4 lg:py-1 dark:border-neutral-400">
        <div className="min-w-0 text-center sm:text-left">
          <h1 className="text-text-h font-rubik text-3xl font-bold tracking-tight">
            Kinsey Bellerose
          </h1>
          <p className="text-text text-lg font-medium">
            Software Developer and Computer Science Student at Northeastern
            University
          </p>
        </div>
        <img
          className="-my-8 hidden h-36 w-36 shrink-0 rounded-full border-4 border-neutral-600 object-cover sm:block min-[900px]:-my-7 lg:-my-6 dark:border-neutral-400"
          src={photo}
          alt="Kinsey Bellerose"
        />
      </div>
    </section>
  );
}

export default Header;
