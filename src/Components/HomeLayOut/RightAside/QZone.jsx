import React from 'react';
import swimmingImage from '../../../assets/swimming.png';
import classImage from '../../../assets/class.png';
import playGroundImage from '../../../assets/playground.png';

const QZone = () => {
  return (
    <div className="bg-base-200 p-4">
      <h2 className="font-bold mb-7">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playGroundImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;
