import React from "react";
import CountUp from "react-countup";
import { AiFillCaretUp } from 'react-icons/ai';
import './QuantitySoldCount.css';

const QuantitySoldCount = ({ vehiclTypes,vehicleCount, vehicleDelivered }) => {
  <CountUp
    className="account-balance"
    start={0}
    end={vehicleCount}
    duration={10}
  />;
  return (
    <div className="text-center my-5">
      <div className="stats mx-auto w-[95%] text-yellow-600 shadow md:60% lg:w-[45%] count-extra-style">
        <div className="stat">
          <div className="font-semibold text-white">VEHICLE TYPES</div>
          <div className="stat-value">
            <CountUp
              className="account-balance"
              start={0}
              end={vehiclTypes}
              duration={10}
            />
          </div>
          <div>
              <AiFillCaretUp className="mx-auto text-4xl text-white"></AiFillCaretUp>
          </div>
        </div>

        <div className="stat">
          <div className="font-semibold text-white">VEHICLE QUANTITY</div>
          <div className="stat-value">
            <CountUp
              className="account-balance"
              start={0}
              end={vehicleCount}
              duration={10}
            />
          </div>
          <div>
              <AiFillCaretUp className="mx-auto text-4xl text-white"></AiFillCaretUp>
          </div>
        </div>

        <div className="stat">
          <div className="font-semibold text-white">VEHICLE DELIVERED</div>
          <div className="stat-value">
            <CountUp
              className="account-balance"
              start={0}
              end={vehicleDelivered}
              duration={10}
            />
          </div>
          <div>
              <AiFillCaretUp className="mx-auto text-4xl text-white"></AiFillCaretUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitySoldCount;
