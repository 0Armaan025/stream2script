import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="aboutUsPage flex flex-col justify-center items-center">
        <div className="text-center items-center justify-center flex flex-col">
          <h2 className="bg-gray-200 px-4 py-2 w-20 text-gray-800 rounded-xl border border-black">
            About
          </h2>
          <h1 className="font-semibold text-5xl mt-8 font-poppins">About Us</h1>
          <h4 className="max-w-3xl text-gray-500 mt-6 font-poppins">
            Stream2Script is a fun software made at{" "}
            <a
              className="text-[#d79f88] font-semibold"
              href="https://wafflehacks.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              WaffleHacks
            </a>{" "}
            by Armaan that utilizes the power of AI to convert YouTube videos
            into PDFs, providing a lot of benefits. For example, helping to save
            time by getting summarized PDFs, storing them for later, preparing
            lecture notes, etc.{" "}
            <a
              href="https://github.com/0Armaan025/stream2script/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9e4927] font-light underline-offset-1"
            >
              Check here how this works and expand your knowledge or help me
              learn more!
            </a>
          </h4>
          <br />
          <img src="/logo.png" className="max-w-full mt-8" alt="Logo" />
        </div>
      </div>
      <div className="h-32"></div> {/* Spacer for footer */}
      <Footer />
    </>
  );
};

export default AboutUsPage;
