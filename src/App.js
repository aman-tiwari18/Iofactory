import Chef from "./components/Chef";
import Cuisine from "./components/Cuisine";
import FoodGuide from "./components/FoodGuide";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
     <Navbar/>
     <Homepage/>
     <Cuisine/>
     <Chef/>
     <FoodGuide/>
    </div>
  );
}

export default App;
