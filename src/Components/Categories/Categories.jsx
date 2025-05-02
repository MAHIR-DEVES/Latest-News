import React, { use } from 'react';
import { NavLink } from 'react-router';
import './categories.css';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  // console.log(categories);

  return (
    <div>
      <h2 className="font-bold">All Categories {categories.length}</h2>
      <div className="grid grid-cols-1 gap-3 mt-5 ">
        {categories.map(category => (
          <NavLink
            className={
              ' px-10 py-2 bg-white border-0 hover:bg-base-200 text-accent font-semibold'
            }
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
