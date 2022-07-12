import { useState } from "react";
import "./App.css";
import moviesData from "./movieData.json";

function App() {
  const [series, setSeries] = useState([]);

  const movieArray = moviesData;
  function seriesSorter() {
    const seriesData = movieArray.filter((s) => s.Type === "series");
    setSeries(seriesData);
  }

  function movieSorter() {
    const movieData = movieArray.filter((m) => m.Type === "movie");
    setSeries(movieData);
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
    </div>
  );
}

export default App;
