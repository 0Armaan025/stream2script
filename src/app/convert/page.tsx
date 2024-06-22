import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./convertpage.css";

type Props = {};

const ConvertPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="convertPage">
        <div className="flex flex-row justify-start items-center">
          <div className="flex flex-col justify-center items-start ml-16 mt-8">
            <h3
              className="font-bold text-5xl mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              <span style={{ color: "#d79f88", fontFamily: "Poppins" }}>
                Easier
              </span>{" "}
              and{" "}
              <span style={{ color: "#d79f88", fontFamily: "Poppins" }}>
                faster
              </span>
            </h3>
            <h3
              className="font-bold text-5xl mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              way to convert
            </h3>
            <h3
              className="font-bold text-5xl mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              and save time!
            </h3>
            <br />
            <h4
              className="w-96 mb-4 font-light text-gray-500"
              style={{ fontFamily: "Poppins" }}
            >
              Simply put the youtube video url, or upload the mp4 and get the
              pdf generated with snaps!
            </h4>
            <div className="flex flex-row">
              <input
                type="text"
                className="mb-8 mt-4 px-2 py-1 rounded-md w-[23rem] border-2 border-gray-500"
                style={{ fontFamily: "Poppins" }}
                placeholder="https://youtube.com/@demohere/blahblah/blah"
              />
              <input
                type="button"
                value="->"
                className="mt-5 px-2 ml-2 rounded-full cursor-pointer transition-all hover:bg-[#86c029] bg-[#aff049] h-8 "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ml-64">
            <div className="uploadFileBoxContainer h-[50vh] w-[50vh] mt-4  mb-4">
              hi
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConvertPage;
