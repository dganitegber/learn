import { count } from "console";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyFirstComponent } from "../Components/MyFirstComponent";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ onClick }) => {
  let counter = 1;
  onClick = counter--;
  return (
    <>
      <MyFirstComponent dganit />
      <span>{counter}</span>
    </>
  );
};

export default Home;
