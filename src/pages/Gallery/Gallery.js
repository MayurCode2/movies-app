import Row from "../../components/Row/Row";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../styles.css";
import "./Gallery.scss";

export default function Gallery(props) {
  const getGenres = () => {
    console.log();
  };
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className="galleryWrapper">
      {props.data.movies &&
        props.data.movies.map((movie) => {
          return (
            <Link key={movie.slug} to={`details/${movie.slug}`}>
              <img src={movie.poster} alt={movie.title}></img>
            </Link>
          );
        })}
    </div>
  );
}
