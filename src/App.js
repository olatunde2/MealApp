import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import TopPicks from "./components/TopPicks";
import NewLetter from "./components/NewLetter";
import Meal from "./components/Meal";
import Footer from "./components/Footer";
import Delivery from "./components/Delivery";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewLetter />
      <Footer />
    </div>
  );
}

export default App;
