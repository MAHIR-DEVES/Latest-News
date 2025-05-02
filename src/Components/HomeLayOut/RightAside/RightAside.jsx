import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './Qzone';

const RightAside = () => {
  return (
    <div className="space-y-10">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;
