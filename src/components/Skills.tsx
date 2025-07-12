// Skills.jsx

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "SQL", icon: SiMysql },
  { name: "C/C++", icon: SiCplusplus },
  { name: "Socket.IO", icon: SiSocketdotio },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "VSCode", icon: VscVscode },
];

const half = Math.ceil(skills.length / 2);
const topRowSkills = skills.slice(0, half);
const bottomRowSkills = skills.slice(half);

const animation = { duration: 30000, easing: (t: any) => t };

const Skills = () => {
  const [sliderRefTop] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  const [sliderRefBottom] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  return (
    <section className="-mx-4 sm:-mx-8 py-12 sm:py-16 lg:py-20 font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white/90 text-base sm:text-lg font-medium mt-2">
          Technologies
        </h2>

        <div className="mt-6 sm:mt-10 mx-2 sm:mx-6 lg:mx-12 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {/* Container for our two rows */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Top Row */}
            <div ref={sliderRefTop} className="keen-slider">
              {topRowSkills.map((skill, i) => (
                <div
                  key={i}
                  className="keen-slider__slide"
                  style={{ minWidth: "120px" }}
                >
                  <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 rounded-full border border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-1.5 sm:py-2">
                    <skill.icon
                      className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-400"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm font-medium text-neutral-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div ref={sliderRefBottom} className="keen-slider">
              {bottomRowSkills.map((skill, i) => (
                <div
                  key={i}
                  className="keen-slider__slide"
                  style={{ minWidth: "120px" }}
                >
                  <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 rounded-full border border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-1.5 sm:py-2">
                    <skill.icon
                      className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-400"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm font-medium text-neutral-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;