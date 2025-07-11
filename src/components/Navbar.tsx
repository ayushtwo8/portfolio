import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata", // ensures IST even if system time is different
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-14 sm:h-16 px-4 sm:px-6">
      <div className="flex justify-between items-center h-full mx-2 sm:mx-4 lg:mx-8">
        <div className="text-white/90 font-bold text-lg sm:text-xl lg:text-2xl font-serif">
          <a href="#">{time}</a>
        </div>
        <div className="flex gap-6 sm:gap-8 lg:gap-16 text-white/70 text-sm sm:text-base">
          <a
            href="#experience"
            className="hover:text-white transition cursor-pointer"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-white transition cursor-pointer"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;