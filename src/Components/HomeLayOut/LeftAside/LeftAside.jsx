import React, { Suspense } from 'react';
import Categories from '../../Categories/Categories';

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-secondary "></span>
          </div>
        }
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
