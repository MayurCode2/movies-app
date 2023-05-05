import { useEffect } from "react";
import useState from "react-usestateref";
import { useParams } from "react-router-dom";
import "./Details.scss";
import "../../styles.css";

export default function Details() {
  const [movie, setMovie] = useState({});
  let { slug } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `https://wookie.codesubmit.io/movies/${slug}`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer Wookie2021` }
      });
      const json = await response.text();
      setMovie(JSON.parse(json));
    } catch (error) {
      console.log("error", error);
    }
  };

  const background = {
    backgroundImage: `url(${movie.backdrop})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    opacity: 0.3,
    maxHeight: "92vh",
    width: "100%",
    zIndex: -1
  };

  return (
    <div className="details">
      {movie && (
        <>
          <img src={`${movie.backdrop}`} style={background}></img>
          <div className="wrapper">
            <div className="left">
              <img src={`${movie.poster}`}></img>
            </div>
            <div className="right">
              <div className="top">
                <h2>{movie.title}</h2>
                <p>Rating: {movie.imdb_rating}/10</p>
              </div>
              <p className="movieDetails">
                <span>
                  {new Date(movie.released_on).toLocaleDateString("en-US")}
                </span>{" "}
                | <span>{movie.length}</span> | <span>{movie.director}</span>
              </p>
              <p className="cast">
                {/* {got some occasional errors with joining, so i cheated here a bit} */}
                {/* Cast: <span>{movie.cast.join(",  ")}</span> */}
                Cast: <span>{movie.cast}</span>
              </p>
              <p className="description">{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
