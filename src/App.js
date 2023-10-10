import { Container, TextField } from "@mui/material/";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import SingerPage from "./SingerPage";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [singer, setSinger] = useState(-1);
  const singerColors = ["#E0B0FF", "#74C365", "#29AB87", "#FF91AF"];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSingerChange = (newSinger) => {
    if (input.trim() !== "") {
      setLyrics((prevLyrics) => [
        { text: input, singer: singer !== null ? singer : newSinger },
        ...prevLyrics,
      ]);
      setInput("");
    }
    setSinger(newSinger);
  };

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
          <Link
            to="/singers/first"
            style={{ textDecoration: "none" }}
            onClick={() => handleSingerChange(0)}
          >
            <div className="singer-box" style={{ backgroundColor: "#E0B0FF" }}>
              FIRST SINGER
            </div>
          </Link>

          <Link
            to="/singers/second"
            style={{ textDecoration: "none" }}
            onClick={() => handleSingerChange(1)}
          >
            <div className="singer-box" style={{ backgroundColor: "#74C365" }}>
              SECOND SINGER
            </div>
          </Link>

          <Link
            to="/singers/third"
            style={{ textDecoration: "none" }}
            onClick={() => handleSingerChange(2)}
          >
            <div className="singer-box" style={{ backgroundColor: "#29AB87" }}>
              THIRD SINGER
            </div>
          </Link>

          <Link
            to="/singers/fourth"
            style={{ textDecoration: "none" }}
            onClick={() => handleSingerChange(3)}
          >
            <div className="singer-box" style={{ backgroundColor: "#FF91AF" }}>
              FOURTH SINGER
            </div>
          </Link>
          <Routes>
            <Route path="/" element={<Navigate to="/singers" />} />
            <Route path="/singers" element={<SingerPage />} />
          </Routes>
        </div>

        {singer !== -1 && (
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
            value={input}
            onChange={handleInputChange}
          />
        )}

        <div className="lyrics-box">
          <div>
            {lyrics
              .slice()
              .reverse()
              .map((lyric, index) => (
                <div
                  className="lyric"
                  key={index}
                  style={{ backgroundColor: singerColors[lyric.singer] }}
                >
                  {lyric.text}
                </div>
              ))}
          </div>
          {input.trim() !== "" && (
            <div
              className="lyric"
              style={{
                backgroundColor: singer !== null ? singerColors[singer] : "",
                marginTop: "1px",
              }}
            >
              {input}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
