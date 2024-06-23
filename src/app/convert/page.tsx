"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import "./convertpage.css";
import FlipbookViewer from "./Flipbook";

const ConvertPage: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [shouldSummarize, setShouldSummarize] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pdfImages, setPdfImages] = useState<string[]>([]);
  const [showFlipbook, setShowFlipbook] = useState<boolean>(false);

  const handleFlipbookOpen = () => {
    // Toggle the state to show the flipbook
    setShowFlipbook(!showFlipbook);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoLink(e.target.value);
  };

  const handleCheckboxChange = () => {
    setShouldSummarize(!shouldSummarize);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleConvertClick = async () => {
    setLoading(true);
    setVideoLink("");
    try {
      if (file) {
        const formData = new FormData();
        formData.append("video", file);
        formData.append("shouldSummarize", shouldSummarize.toString());

        const response = await axios.post(
          "https://5000-0armaan025-stream2scrip-b9k60oacmtb.ws-us114.gitpod.io/upload-video",
          formData,
          {
            responseType: "blob",
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "output.pdf");
        document.body.appendChild(link);
        link.click();
      } else if (videoLink) {
        const endpoint = shouldSummarize ? "summarize" : "get-pdf";
        const response = await axios.get(
          `https://5000-0armaan025-stream2scrip-b9k60oacmtb.ws-us114.gitpod.io/${endpoint}`,
          {
            params: { video_link: videoLink },
            responseType: "blob",
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "output.pdf");
        document.body.appendChild(link);
        link.click();
      } else {
        alert("Please provide a YouTube video link or upload a file.");
      }
    } catch (error) {
      console.error("Error during conversion:", error);
      alert(
        "An error occurred during the conversion process. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
              Simply put the YouTube video URL, or upload the MP4 and get the
              PDF generated with snaps!
            </h4>
            <div className="flex flex-row">
              <input
                type="text"
                className="mb-8 mt-4 px-2 py-1 rounded-md w-[23rem] border-2 border-gray-500"
                style={{ fontFamily: "Poppins" }}
                placeholder="https://youtube.com/@demohere/blahblah/blah"
                value={videoLink}
                onChange={handleInputChange}
              />
              <input
                type="button"
                value="->"
                className="mt-5 px-2 ml-2 rounded-full cursor-pointer transition-all hover:bg-[#86c029] bg-[#aff049] h-8"
                onClick={handleConvertClick}
              />
            </div>
            <div className="flex mt-2 flex-row justify-start items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={shouldSummarize}
                onChange={handleCheckboxChange}
              />
              <h4 style={{ fontFamily: "Poppins" }} className="text-sm">
                Make sure that the PDF has the summary of the video
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ml-56">
            <div className="uploadFileBoxContainer h-[85vh] w-[90vh] border-2 px-12 py-8 border-[#fae6dc] bg-[#d9d9d9] rounded-lg mt-4 mb-4">
              <div className="flex flex-col justify-center items-center bg-[#cdcbcb] w-full h-[62vh] border-dashed border-2 border-gray-500 rounded-lg">
                <input
                  type="file"
                  className="bg-[#eba7a7] p-2 px-4 rounded-md font-semibold cursor-pointer hover:bg-[#f7bcbc] transition-all"
                  style={{ color: "#72371c", fontFamily: "Poppins" }}
                  onChange={handleFileChange}
                />
              </div>
              <input
                type="button"
                value="Convert ->"
                style={{ fontFamily: "Jura, sans-serif" }}
                className="w-full bg-white py-2 px-4 mt-6 rounded-md font-semibold cursor-pointer hover:bg-[#fff8f8] transition-all"
                onClick={handleConvertClick}
              />
              <div className="flex mt-2 flex-row justify-start items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={shouldSummarize}
                  onChange={handleCheckboxChange}
                />
                <h4 style={{ fontFamily: "Poppins" }} className="text-sm">
                  Make sure that the PDF has the summary of the video
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <p style={{ fontFamily: "Poppins", color: "#d79f88" }}>
            Please wait... loading
          </p>
        </div>
      )}
      <br />
      <br />
      <center>
        <input
          type="file"
          accept=".pdf"
          className="bg-[#eba7a7] p-2 px-4 rounded-md font-semibold cursor-pointer hover:bg-[#f7bcbc] transition-all"
          style={{ color: "#72371c", fontFamily: "Poppins" }}
          onChange={handleFileChange}
        />
        <input
          type="button"
          value="Open PDF as Flipbook"
          className="bg-[#e8a1a1] px-4 rounded-sm text-xl py-1 text-[#72371c] cursor-pointer hover:bg-[#d68b8b] mt-4"
          style={{ fontFamily: "Poppins" }}
          onClick={handleFlipbookOpen}
        />
        {showFlipbook && file && (
          <div className="flipbookContainer">
            <FlipbookViewer pdfFile={file} />
          </div>
        )}
        <br />
      </center>

      <Footer />
    </>
  );
};

export default ConvertPage;
