import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/HomeLayOut/LeftAside/LeftAside';
import RightAside from '../Components/HomeLayOut/RightAside/RightAside';

const HomeLayOut = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <div className="w-11/12 mx-auto my-3">
        <section>
          <LatestNews></LatestNews>
        </section>

        <nav>
          <Navbar></Navbar>
        </nav>

        <main className=" grid grid-cols-12 my-3 gap-5">
          <aside className="col-span-3 sticky h-fit top-0">
            <LeftAside></LeftAside>
          </aside>
          <section className="main col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className="col-span-3 sticky h-fit top-0">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default HomeLayOut;
