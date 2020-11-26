import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndividualPage from './pages/individual/IndividualPage';
import PageNotFound from './pages/page-not-found/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/individual" component={IndividualPage} exact />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
