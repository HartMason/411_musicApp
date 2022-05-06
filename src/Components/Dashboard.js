import React, { useEffect, useState } from "react";
import Header from "./Header";
import CustomCard from "./Card";
import Switch from "./Switch";
import Slider from "./Slider";
import Select from "./Select";

export const Dashboard = (props) => {
  const [isOnline, setIsOnline] = useState(true);
  const [volume, setVolume] = useState(30);
  const [quality, setQuality] = useState(2);
  //   const [range, setRange] = useState();

  useEffect(() => {
    console.log(isOnline);
    console.log(volume);
  }, [isOnline]);


  return (
    <div>
      <h1 className="welcomeUser">Welcome User!</h1>

      <div className="Cards">
        <CustomCard
          state={isOnline}
          setState={setIsOnline}
          title="Online mode"
          body="Is this application connected to the internet"
          component={Switch}
        />
        <CustomCard
          state={volume}
          setState={setVolume}
          title="Volume"
          body="Overides all other sound settings in this application"
          component={Slider}
        />
        <CustomCard
          state={quality}
          setState={setQuality}
          title="Sound Quality"
          body="Manually control the music quality in event of poor connection"
          component={Select}
        />
      </div>
      <div>
        <h2 className="notifications">System Notifications: </h2>
        {isOnline === false && (
          <p className="info">
            Your application is offline. You won't be able to share or stream
            music to other devices
          </p>

        )}

        {volume >= 80 && (
            <p>
                Listening to music at a high volume could cause long-term hearing loss.
            </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
