import './App.css'; 
import { BrowserRouter as Router } from "react-router-dom"; 

import Navbar from './components/Navbar'; 
import AllRoutes from './components/AllRoutes'; 
import Footer from './components/Footer'; 

function App() {
  document.body.classList.add("d-flex", "h-100", "text-white", "bg-dark" ); 

  return (
    <Router>
      <Navbar /> 
      <AllRoutes /> 
      <Footer /> 
    </Router>
  );
}

export default App;
