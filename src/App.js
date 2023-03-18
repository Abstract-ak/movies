import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Favourite from './Components/Favourite';
function App() {
  return (
    <>
    <Navbar/>
    {/* <Banner/>
    <Movies/> */}
    <Favourite/>
    </>
  );
}

export default App;