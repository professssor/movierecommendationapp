import { useState } from "react";
import "./App.css";
import myfavfile from "./myfavfile.json";
import moviesData from "./movieData.json";
import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

function App() {
  const [series, setSeries] = useState([]);
  const myfavArray = myfavfile;

  const movieArray = moviesData;
  // recommends few series
  function seriesSorter() {
    const seriesData = movieArray.filter((s) => s.Type === "series");

    setSeries(seriesData);
  }
  // recommed few movies
  function movieSorter() {
    const movieData = movieArray.filter((m) => m.Type === "movie");
    setSeries(movieData);
  }
  //

  // recommend my fav 5 series/movies from the list shown
  function mySuggestions() {
    const myfavList = myfavArray.map((list) => list);
    setSeries(myfavList);
  }

  return (
    <div className="App">
      <header className="title">
        <h2>
          <span> 🎥</span>Movie & Series Recommendation
        </h2>{" "}
      </header>
      <p> My recommended shows and movies</p>
      <hr></hr>

      <section className="button-container">
        <button onClick={seriesSorter}> series</button>
        <button onClick={movieSorter}> movie</button>
        <button onClick={mySuggestions}>My top 5 </button>
      </section>
      {/* list of all the suggested movies/ series */}
      <section>
        {series.length == 0 ? (
          <h3>click to see recommended movie or series</h3>
        ) : (
          <ul>
            {series.map((item) => (
              <li key={item.name}>
                <div className="content-container">
                  <img
                    className="movi-image"
                    src={item.Images[1]}
                    alt="movie-image"
                  ></img>
                  <h3>{item.Title}</h3>
                  <p>release date {item.Released}</p>
                  <h5>{item.Genre}</h5>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer>
        <section className="footer-links">
          {/* footer link */}
          <a className="mx-4 text-xl" href="https://twitter.com/coderGent">
            {" "}
            <FaTwitter className="text-[1.5rem]" />
          </a>

          <a className="mx-4 " href="https://github.com/professssor/">
            {" "}
            <FaGithub className="text-[1.5rem]" />
          </a>
        </section>
        <h6> © | 2022 | san</h6>
      </footer>
    </div>
  );
}

export default App;
