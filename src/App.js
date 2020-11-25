import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
