import "./css/App.css";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { loadWeatherData } from "./Services/api";
import { useEffect, useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const loadInitialWeather = async () => {
      try {
        const fetchData = await loadWeatherData("London");
        setSearchResult(fetchData);
      } catch (err) {
        console.log("Error: ", err);
      } finally {
        setLoading(false);
      }
    };
    loadInitialWeather();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await loadWeatherData(searchQuery.trim());
      if (result.cod === "404") {
        setError("City not found.");
        // searchResult(null);
      } else {
        setSearchResult(result);
        setError(null);
      }
    } catch (err) {
      console.log("Error in searching: ", err);
      // setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="app-box">
        <SearchBar
          onSubmit={handleSubmit}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        ></SearchBar>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && <Result searchResult={searchResult}></Result>}
        {loading && <div className="loading-message">Loading...</div>}
      </div>
    </div>
  );
}

export default App;