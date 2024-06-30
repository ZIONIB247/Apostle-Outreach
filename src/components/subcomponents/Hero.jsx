import React from "react";
import "../styles.css";
import bgImg from "../../assets/homeless.webp";

const Hero = () => {
  return (
    <section className="secOne">
      <div className="heroWrapper genLayout">
        <div className="leftSide">
          <h1>
            <span>Emergency:</span> Help homeless Youth Face This Crisis Today
          </h1>
          <p>
            Your gift will be matched and help provide TWICE the safe shelter,
            healthy meals and vital care these kids need.
          </p>
          <h5>make a monthly gift to help all year long</h5>
        </div>
        <div className="rightSide">
          <div className="bgImg">
            <img src={bgImg} alt="bg picture" />
          </div>

          <div className="bgContent">
            <p>
              Today's unsustainable cost of living is forcing more youth into
              homelessness – at a time when fewer beds are available. This makes
              Apostle Chidi Alagwu Outreach provides more important than ever, and we
              need your help right now to keep our doors open 24/7.
            </p> <br />

            <p>
              Your generosity will provide them with a wide range of
              opportunities to break the cycle of homelessness permanently.
              Please give today and help homeless youth access the care and
              services they urgently need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
