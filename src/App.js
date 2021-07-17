import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlesPage from "./pages/ArticlesPage";
import NavBar from "./NavBar";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
   <Router>

     <div className="App" id ="page-body">
     <NavBar />
     <Switch>
     <Route path="/" component={HomePage} exact />
     <Route path="/about" component={AboutPage} />
     <Route path="/articles-list" component={ArticlesListPage}/>
     <Route path="/articles" component={ArticlesPage}/>
     <Route component ={NotFoundPage} />

     </Switch>
     
     </div>

  </Router>
   
  );
}

export default App;
