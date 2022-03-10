import React from "react";
import heroImage from "../../assets/undraw_welcoming_re_x0qo.svg";

const Hero = ({ name }) => {
  return (
    <section className="container w-full flex pt-8">
      <div className="w-6">
        <h1 className="text-3xl">Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          nesciunt quia, exercitationem ad, nulla iste quasi enim soluta
          consectetur dignissimos voluptate, minus nostrum accusamus eius quod
          hic officiis inventore quaerat.
        </p>
      </div>
      <div className="w-6 h-20rem">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
