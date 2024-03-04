
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar';
import AppCarrosuel from './components/hero';
import AppLogo from './components/logoSection';
import { Provider } from 'react-redux';
import Store from './redux/store';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <AppNavbar/>
      <AppCarrosuel/>
      <AppLogo/>
    </div>
    </Provider>
  );
}

export default App;
