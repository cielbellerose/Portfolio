import resumePdf from "../assets/Kinsey_Bellerose_Resume.pdf";

function Resume() {
  return (
    <section className="mt-5 box-border flex min-h-60 w-full flex-1 flex-col p-5">
      <a
        href={resumePdf}
        download="Kinsey_Bellerose_Resume.pdf"
        className="bg-blue font-rubik rounded-chip h-10 w-full cursor-pointer border-none px-3.5 py-1.5 text-left text-base font-semibold text-white no-underline transition-opacity duration-200 sm:w-[calc(25%-15px)]"
      >
        Download
      </a>
      <iframe
        src={resumePdf}
        title="Resume"
        className="rounded-image mt-5 aspect-[8.5/11] w-full max-w-[850px] self-center border-none"
      />
    </section>
  );
}

export default Resume;
