import "./App.css";
import CountryInfo from "./components/CountryInfo.js";
import Statistics from "./components/Statistics.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container ">
        <div>
          <div class="row">
            <div class="d-flex justify-content-center col-md-6 mt-2">
              <Link to="" type="button" class="btn btn-primary btn-lg">
                Country List
              </Link>
            </div>
            <div class="d-flex justify-content-center col-md-6 mt-2">
              <Link
                to="statistics"
                type="button"
                class="btn btn-primary btn-lg"
              >
                Statistics
              </Link>
            </div>
          </div>
        </div>

        <Route path="/statistics" component={Statistics} exact />
        <Route path="/" component={CountryInfo} exact />
      </div>
    </Router>
  );
}

export default App;
