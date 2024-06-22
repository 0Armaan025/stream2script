import LandingPage from "@/landing/LandingPage";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className="homePage">
        <LandingPage />
      </div>
    </>
  );
};

export default HomePage;
