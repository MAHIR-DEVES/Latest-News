import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex items-center gap-6 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">latest</p>
      <Marquee className="flex gap-3 " pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique, consectetur. end |||
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
<p>hello</p>;
