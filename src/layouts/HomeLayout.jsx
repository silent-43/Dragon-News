import React from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  const data = useLoaderData();

  return (
    <div>
      <header>
        <Header />

        <section className="w-11/12 mx-auto my-3">
          <LatestNews data={data} />
        </section>
      </header>

      <nav className="w-11/12 mx-auto my-3">
        <Navbar />
      </nav>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>

        <section className="main col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
