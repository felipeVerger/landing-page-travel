import './App.css';
import Home from './components/Home';
import Slider from './components/Slider';
import travel_01 from "./assets/beach.jpg"
import travel_02 from "./assets/island.jpg"
import travel_03 from "./assets/rock.jpg"
import Navbar from './components/Navbar';

const navbarLinks = [
  {url: "#", title: "home"},
  {url: "#", title: "trips"},
  {url: "#", title: "rewards"}
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Home imageSrc={travel_01}/>
      <Slider 
      imageSrc={travel_02} 
      title={"Be an explorer"} 
      subtitle={"Our platform offers a wide variety of unique travel locations"}/>
      <Slider 
      imageSrc={travel_03} 
      title={"Memories for a lifetime"} 
      subtitle={"Your dream vacation is a few clicks away"}
      flipped={true}/>
    </div>
  );
}

export default App;
