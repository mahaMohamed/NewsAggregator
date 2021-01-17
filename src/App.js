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

console.log("news array", newsArray)
let sortedNewsArray = newsArray.sort((a, b) => b.date - a.date)
let partialNewsArray = sortedNewsArray.filter((item, index) => index < 8)


let news = {
  title: "Hello World",
  date: "12-3-2021",
  image: "https://www.bt.com/content/dam/bt/portal/images/articles/sport/football/sport_football_salah_0405.jpg",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem animi accusantium ea aspernatur quidem iure voluptate magnam facilis delectus, qui harum adipisci recusandae? In voluptate quos ratione earum, necessitatibus tempore."
}
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



