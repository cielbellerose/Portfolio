import resumePdf from "../assets/Kinsey_Bellerose_Resume.pdf";

function Resume() {
  return (
    <section className="mt-5 box-border flex min-h-60 w-full flex-1 flex-col p-5">
      <a
        href={resumePdf}
        download="Kinsey_Bellerose_Resume.pdf"
        className="bg-blue h-10 w-[calc(25%-15px)] cursor-pointer rounded-[2px] border-none px-3.5 py-1.5 text-left text-base text-white no-underline transition-opacity duration-200"
      >
        Download
      </a>
      <iframe
        src={resumePdf}
        title="Resume"
        className="mt-5 aspect-[8.5/11] w-full max-w-[850px] self-center rounded-[5px] border-none"
      />
    </section>
  );
}

export default Resume;
