import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomCartContext  from './context';


function App() {
  return (<CustomCartContext>
            <div className='App'>
              <h2>Shopping Cart</h2>
                <Navbar />
                <Items />
            </div>
        </CustomCartContext>
  );
}
export default App;
