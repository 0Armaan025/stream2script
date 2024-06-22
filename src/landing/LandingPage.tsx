import React from "react";
import "./landingpage.css";
import Navbar from "@/components/navbar/Navbar";

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
        <div className="version1Div w-full  " style={{ marginTop: "50px" }}>
          <h4
            style={{
              fontFamily: "Jura, sans-serif",
              background: "#e1e4e8",
              padding: "6px",
              paddingRight: "20px",
              paddingLeft: "20px",
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
            <h4>Revolutionize the way manage time</h4>
            <h4>take the control back!</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
