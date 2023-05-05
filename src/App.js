import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Gallery from "./pages/Gallery/Gallery";
import Details from "./pages/Details/Details";
import { useEffect, React } from "react";
import useState from "react-usestateref";

export default function App() {
  const [movies, setMovies] = useState([]);

  // const categorize = (genre) => {
  //   let group = [];
  //   let list = movies;

  //   movies.movies.map((item) => {
  //     if (item.genres.includes(genre)) {
  //       group.push(item);
  //     }
  //   });

  //   return group;
  // };

  const fetchData = async () => {
    const url = "https://wookie.codesubmit.io/movies";

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer Wookie2021` }
      });
      const json = await response.text();
      setMovies(JSON.parse(json));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    //console.log(categorize("Action"));
  }, [movies]);
  return (
    <Router>
      <div className="App">
        <Header data={movies} />
        <div className="content">
          <Switch>
            <Route exact path="/" children={<Gallery data={movies} />} />
            <Route exact path="/details/:slug" children={<Details />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
