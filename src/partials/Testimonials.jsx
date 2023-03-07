import React from "react";

import profile from "../images/profile.jpeg";

function Testimonials() {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Get to know me better</h2>
            <p className="text-xl text-gray-400">
              No holds barred, hear it straight from me
            </p>
          </div>

          {/* About text */}
          <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
            <div
              className="flex flex-col lg:flex-row h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
            >
              <img src={profile} className="h-40 rounded-full mb-4 lg:mb-0 lg:mr-6"/>
              <blockquote className="text-lg text-gray-400 grow">
                — I am a full-stack developer from Argentina, specialized in
                creating visually appealing and functional content both working
                in a team and individually. My passion for technology and web
                development led me to graduate from a full-stack coding bootcamp
                a year ago and I am focused on continuing to develop my career
                in the tech industry. I am an empathetic, enthusiastic and
                proactive person, with an assertive communication style and
                always looking to learn new things. I am currently working on
                interesting projects and developing my skills to reach my full
                potential. If you are interested in collaborating or just
                chatting, feel free to contact me below.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
