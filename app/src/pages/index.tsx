import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import Header from "layouts/MainLayout/header";

const Home: NextPage = (props) => {
  return (
    <div>
      <Header/>
      <HomeView />
    </div>
  );
};

export default Home;
