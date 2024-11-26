import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Kevin</p>
              <p className="grid-subtext">
                With 3 years of experience, i have honed my skills in frontend
                and backend developement, with a focus on creating creatively
                animated websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
            <div>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
