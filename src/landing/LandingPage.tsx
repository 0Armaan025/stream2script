import React from "react";
import "./landingpage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div
        className="landingPageDiv flex flex-col justify-center items-center "
        style={{
          textAlign: "center",
          justifyItems: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="version1Div  " style={{ marginTop: "50px" }}>
          <h4
            style={{
              fontFamily: "Jura, sans-serif",
              background: "#e1e4e8",
              padding: "6px",
              paddingRight: "5px",
              paddingLeft: "5px",
              borderRadius: "20px",
            }}
          >
            v1.0 - This Website from scratch
          </h4>
          <div className="superCoolTextDiv">
            <h3>Get your</h3>
            <h3>
              pdfs in{" "}
              <span
                style={{
                  border: "2px solid yellow",
                  borderRadius: "30px",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                }}
              >
                seconds
              </span>
              <br />
            </h3>
            <h4 style={{ marginTop: "12px", fontFamily: "Poppins" }}>
              Revolutionize the way you manage time by reading pdfs
            </h4>
            <h4>and watching videos, take the control back!</h4>
          </div>
        </div>
        <center>
          <Link href="/convert">
            <button className="startNowBtn">Start now</button>
          </Link>
          <img
            src="/real-ss.png"
            height={800}
            width={1100}
            className="my-4"
            style={{ marginTop: "20px" }}
          />
          <img src="/inputoutput.png" />
        </center>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
