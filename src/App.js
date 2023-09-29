import { Container, TextField } from "@mui/material/";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import SingerPage from "./SingerPage";
import FirstSinger from "./FirstSinger";
import SecondSinger from "./SecondSinger";
import ThirdSinger from "./ThirdSinger";
import FourthSinger from "./FourthSinger";
import "./App.css";

function App() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100vh",
        }}
      >
        <div className="header">
          <h1>Complete the Lyrics</h1>
        </div>

        <div className="singer-row">
          <Link to="/singers/first" style={{ textDecoration: "none" }}>
            <div className="singer-box" style={{ backgroundColor: "#E0B0FF" }}>
              FIRST SINGER
            </div>
          </Link>

          <Link to="/singers/second" style={{ textDecoration: "none" }}>
            <div className="singer-box" style={{ backgroundColor: "#74C365" }}>
              SECOND SINGER
            </div>
          </Link>

          <Link to="/singers/third" style={{ textDecoration: "none" }}>
            <div className="singer-box" style={{ backgroundColor: "#29AB87" }}>
              THIRD SINGER
            </div>
          </Link>

          <Link to="/singers/fourth" style={{ textDecoration: "none" }}>
            <div className="singer-box" style={{ backgroundColor: "#FF91AF" }}>
              FOURTH SINGER
            </div>
          </Link>
          <Routes>
            <Route path="/singers" element={<SingerPage />} />
            <Route path="/singers/first" element={<FirstSinger />} />
            <Route path="/singers/second" element={<SecondSinger />} />
            <Route path="/singers/third" element={<ThirdSinger />} />
            <Route path="/singers/fourth" element={<FourthSinger />} />
          </Routes>
        </div>

        <TextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            style: {
              width: "700px",
              marginTop: "15px",
              marginBottom: "15px",
              borderRadius: "15px",
              border: "1px solid #6CB4EE",
            },
          }}
        />

        <div className="lyrics-box"></div>
      </Container>
    </>
  );
}

export default App;
