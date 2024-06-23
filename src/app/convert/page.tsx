"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import "./convertpage.css";

const ConvertPage: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [shouldSummarize, setShouldSummarize] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string>("");

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

  const handleShowFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setPdfPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleConvertClick = async () => {
    setLoading(true);
    setVideoLink("");
    try {
      let endpoint = "get-pdf";
      if (file) {
        const formData = new FormData();
        formData.append("video", file);
        formData.append("shouldSummarize", shouldSummarize.toString());
        endpoint = "upload-video";
        await axios.post(
          `https://5000-0armaan025-stream2scrip-b9k60oacmtb.ws-us114.gitpod.io/${endpoint}`,
          formData,
          { responseType: "blob" }
        );
      } else if (videoLink) {
        endpoint = shouldSummarize ? "summarize" : "get-pdf";
        await axios.get(
          `https://5000-0armaan025-stream2scrip-b9k60oacmtb.ws-us114.gitpod.io/${endpoint}`,
          {
            params: { video_link: videoLink },
            responseType: "blob",
          }
        );
      } else {
        throw new Error(
          "Please provide a YouTube video link or upload a file."
        );
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

  const PdfPreview = () => {
    if (pdfPreviewUrl) {
      return (
        <object
          className="mt-4"
          data={pdfPreviewUrl}
          type="application/pdf"
          width="80%"
          height="400px"
        >
          <p>PDF Preview could not be displayed.</p>
        </object>
      );
    }
    return null;
  };

  return (
    <>
      <Navbar />
      <div className="convertPage">
        <div className="flex flex-col md:flex-row justify-between items-start mx-4 md:mx-12 my-8">
          <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 mt-4">
            <h3 className="font-bold text-6xl mb-2">
              <span style={{ color: "#d79f88" }}>Easier</span> and{" "}
              <span style={{ color: "#d79f88" }}>faster</span>
              <br /> way to convert
              <br />
              and save time!
            </h3>
            <h4 className="font-light text-gray-500 mb-4 w-96">
              Simply put the YouTube video URL, or upload the MP4 and get the
              PDF generated with snaps!
            </h4>
            <div className="flex flex-col md:flex-row items-start w-full">
              <input
                type="text"
                className="mb-4 md:mb-0 px-2 py-1 rounded-md border-2 border-gray-500 w-full md:w-2/3"
                placeholder="https://youtube.com/@demohere/blahblah/blah"
                value={videoLink}
                onChange={handleInputChange}
              />
              <button
                className="mt-1 md:ml-2 px-2 py-1 rounded-full bg-[#aff049] text-white hover:bg-[#86c029] transition-all"
                onClick={handleConvertClick}
              >
                &gt;
              </button>
            </div>
            <div className="flex mt-2 items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={shouldSummarize}
                onChange={handleCheckboxChange}
              />
              <p className="text-sm" style={{ fontFamily: "Poppins" }}>
                Make sure that the PDF has the summary of the video
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-center">
            <div className="uploadFileBoxContainer w-full h-[50vh] md:h-[80vh] border-2 px-6 py-8 border-[#fae6dc] bg-[#d9d9d9] rounded-lg">
              <div className="w-full h-[85%] flex justify-center items-center bg-[#cdcbcb] border-dashed border-2 border-gray-500 rounded-lg">
                <input
                  type="file"
                  className="p-2 px-4 rounded-md font-semibold cursor-pointer bg-[#f7bcbc] transition-all"
                  onChange={handleFileChange}
                />
              </div>
              <button
                className="w-full  bg-white py-2 px-4 mt-3 rounded-md font-semibold cursor-pointer hover:bg-[#fff8f8] transition-all"
                onClick={handleConvertClick}
              >
                Convert -&gt;
              </button>
              <div className="flex mt-2 items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={shouldSummarize}
                  onChange={handleCheckboxChange}
                />
                <p className="text-sm" style={{ fontFamily: "Poppins" }}>
                  Make sure that the PDF has the summary of the video
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          {loading && (
            <p className="font-semibold text-lg text-[#d79f88] mt-4">
              Please wait... Loading
            </p>
          )}
        </div>
        <div className="w-full flex justify-center mb-8  items-center mt-8">
          <input
            type="file"
            accept=".pdf"
            className="p-2 px-4 rounded-md font-semibold cursor-pointer bg-[#f7bcbc] transition-all"
            onChange={handleShowFileChange}
          />
          <button className="bg-[#e8a1a1] px-4 rounded-sm text-xl py-2 ml-4 text-[#72371c] cursor-pointer hover:bg-[#d68b8b]">
            Preview PDF
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          {PdfPreview()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConvertPage;
