import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlesPage from "./pages/ArticlesPage";
import "./App.css";

function App() {
  return (
   <Router>

     <div className="App" id ="page-body">
     
     <Route path="/" component={HomePage} exact />
     <Route path="/about" component={AboutPage} />
     <Route path="/articles-list" component={ArticlesList}/>
     <Route path="/articles" component={ArticlesPage}/>
     </div>

  </Router>
   
  );
}

export default App;
