import Home from "./Component/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route to="/" component={Home} />
      </Router>
    </div>

  )
}

export default App;
