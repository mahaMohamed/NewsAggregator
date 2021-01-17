import CustomCard from "./components/Card"
import CustomNavbar from "./components/CustomNavbar"
import HomePage from "./components/HomePage.js"
import SingleNewsPage from "./components/SingleNewsPage.js"
import CustomFooter from "./components/CustomFooter"
import newsJSON from "./assets/news"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

import NewsPage from "./components/NewsPage";


let newsArray = newsJSON.map((item, index) => <CustomCard title={item.title} content={item.content}
  url={item.urlToImage} id={item.id} date={item.publishedAt} />)

let sortedNewsArray = newsArray.sort((a, b) => b.date - a.date)
let partialNewsArray = sortedNewsArray.filter((item, index) => index < 8)


function App() {

  return (
    <Router>
      <div>
        <CustomNavbar />
        <Switch>
          <Route exact path="/" component={() => <HomePage cards={partialNewsArray}/>} />
          <Route path="/all" component={() => <NewsPage cards={sortedNewsArray} />} />
          <Route  path="/news/:id" component={() =><SingleNewsPage news={newsJSON} />} />
        </Switch>
        <CustomFooter/>
      </div>
    </Router>
  );
}

export default App;



