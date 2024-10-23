import React from "react";
import scss from "./bestSellers.module.scss";
import leftIcon from "@/assets/images/leftIcon.png";
import Image from "next/image";
import ImageSwiper from "./swaiper/ImageSwiper";

const BestSellers = () => {
  return (
    <section className={scss.BestSellers}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image src={leftIcon} alt="photo" width={51} height={14} />
            <h3>Best Sellers</h3>
          </div>
          <div className={scss.block}>
            <div className={scss.text}>
              <h1>You Only Reserve Exception</h1>
              <p>
                Each location has a menu that`s curated just for them. See what
                new at your Cafesio and You`ll find Cafesio Covent Carden
                moments.
              </p>
            </div>
            <div className={scss.images}>
              <ImageSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
