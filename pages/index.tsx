import type { NextPage } from "next";
import { MyFirstComponent } from "../Components/MyFirstComponent";

const Home: NextPage = () => {
  return (
    <>
      <MyFirstComponent className budget={100} budgetName="food" />
      <MyFirstComponent className budget={200} budgetName="therapy" />
      <MyFirstComponent className budget={100} budgetName="cleanning" />
    </>
  );
};

export default Home;
