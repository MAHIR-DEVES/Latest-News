import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../Components/HomeLayOut/LeftAside/LeftAside';
import RightAside from '../../Components/HomeLayOut/RightAside/RightAside';
import Loading from '../../Pages/Loading/Loading';

const HomeLayOut = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <div className="w-11/12 mx-auto my-3">
        <section className="sticky h-fit top-0 z-10">
          <LatestNews></LatestNews>
        </section>

        <nav>
          <Navbar></Navbar>
        </nav>

        <main className=" grid grid-cols-12 my-3 gap-5">
          <aside className="col-span-3 sticky h-fit top-20">
            <LeftAside></LeftAside>
          </aside>
          <section className="main col-span-6">
            {state == 'loading' ? <Loading /> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-3 sticky h-fit top-20">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default HomeLayOut;
