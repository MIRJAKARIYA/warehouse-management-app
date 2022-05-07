import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useSelectedVehicles from "../../hooks/useSelectedVehicles";
import MySingleItem from "./MySingleItem/MySingleItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [reload, setReload] = useState(false);
  const email = user?.email;
  const query = `user=${email}`;
  const [vehicles] = useSelectedVehicles(query, reload);

  return (
    <div className="bg-slate-200 min-h-screen flow-root">
      {
          vehicles.length === 0?
          <div>
              <h1 className="md:text-[35px] text-[18px] mt-52 sm:text-[28px] font-semibold text-center">YOU HAVE NOT ADDED ANY ITEM YET 🙁</h1>
              <p></p>
          </div>
          :
          <div className={`w-[90%] max-w-[1000px] mt-10 justify-items-center ${vehicles.length>=2?'md:grid-cols-2':''} mx-auto gap-4 grid grid-cols-1`}>
          {vehicles.map((vehicle) => (
            <MySingleItem key={vehicle._id} reload={reload} setReload={setReload} vehicle={vehicle}></MySingleItem>
          ))}
        </div>
      }
    </div>
  );
};

export default MyItems;
