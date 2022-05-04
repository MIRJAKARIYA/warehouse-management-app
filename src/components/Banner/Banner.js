import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Tank from "../../banner-images/tank.jpg";
import Jet from "../../banner-images/zet .jpg";
import Ship from "../../banner-images/ship.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Pagination } from "swiper";
import BannerComponent from "./BannerComponent/BannerComponent";

const Banner = () => {
  const tankDes = {
    title: 'BATTLE TANKS',
    des: "The history of the tank begins with World War I, when armoured all-terrain fighting vehicles were introduced as a response to the problems of trench warfare, ushering in a new era of mechanized warfare. Though initially crude and unreliable, tanks eventually became a mainstay of ground armies. By World War II, tank design had advanced significantly, and tanks were used in quantity in all land theatres of the war. The Cold War saw the rise of modern tank doctrine and the rise of the general-purpose main battle tank. The tank still provides the backbone to land combat operations in the 21st century.",
  };
  const jetDes = {
    title: 'FIGTER JETS',
    des: "Fighter aircraft are fixed-wing military aircraft designed primarily for air-to-air combat. In military conflict, the role of fighter aircraft is to establish air superiority of the battlespace. Domination of the airspace above a battlefield permits bombers and attack aircraft to engage in tactical and strategic bombing of enemy targets.The key performance features of a fighter include not only its firepower but also its high speed and maneuverability relative to the target aircraft. The success or failure of a combatant's efforts to gain air superiority hinges on several factors including the skill of its pilots, the tactical soundness of its doctrine for deploying its fighters, and the numbers and performance of those fighters.",
  };
  const shipDes = {
    title: 'BATTLE SHIPS',
    des: "The term battleship came into use in the late 1880s to describe a type of ironclad warship,now referred to by historians as pre-dreadnought battleships.In 1906,the commissioning of HMS Dreadnought into the United Kingdom's Royal Navy heralded a revolution in the field of battleship design. Subsequent battleship designs,influenced by HMS Dreadnought, were referred to as dreadnoughts, though the term eventually became obsolete as dreadnoughts became the only type of battleship in common use.",
  };
  return (
    <div className="swiper-container mt-10">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerComponent Des={tankDes} image={Tank}></BannerComponent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerComponent Des={jetDes} image={Jet}></BannerComponent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerComponent Des={shipDes} image={Ship}></BannerComponent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
