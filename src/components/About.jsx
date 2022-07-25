import React from "react";

const About = () => {
  return (

    <div
      name="about"
      className="about_bg w-full h-auto pb-16 pt-8 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Sunny Kumar from Bihar dist Patna. I have completed my Engineering from National Institute Of Technology Sikkim in the academic year 2017 - 2021 and I have A CGPA of 7.5. I did my schooling from Patna Central School and have a percentage of 95 in it and after completing my Engineering I have also done React Course from Coursera which is of 3 months. Right Now,I am working as a Frontend Developer with an experince of more than 1 years and My objective is to To secure a challenging position in a reputable organization to expand my learning, knowledge, Experience and skills.
        </p>

        <br />

      </div>
    </div>
   
  );
};

export default About;
