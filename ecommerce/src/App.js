import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage';
import Footer from './customer/components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
