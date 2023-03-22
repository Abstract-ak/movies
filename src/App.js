import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Switch,Route, BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Movies />} />

        {/* <Route path='/' exact render={(props)=>(
          <>
            <Banner {...props}/>
            <Movies {...props}/>
          </>
        )} /> */}
        <Route path='/favourites' Component={Favourite} />
      </Routes>
      {/* <Banner/>
      <Movies/> */}
    {/* <Favourite/> */}
    </Router>
  );
}

export default App;