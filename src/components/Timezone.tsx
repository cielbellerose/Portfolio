import { useEffect, useState } from "react";

const bostonTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function Timezone() {
  const [time, setTime] = useState(() =>
    bostonTimeFormatter.format(new Date()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(bostonTimeFormatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dark:bg-muted font-rubik rounded-pill mx-1 my-6 bg-neutral-400 p-4 text-center text-black dark:text-white">
      <div className="text-lg leading-none font-semibold">Boston</div>
      <div className="mt-1 text-2xl leading-none font-bold">{time}</div>
    </div>
  );
}

export default Timezone;
