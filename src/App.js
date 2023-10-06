import logo from './logo.svg';
import './App.css';
import  {useState} from'react'
import { categories } from './components/ShoppingList';
import Banner from './components/Banner';
import ShoppingList from './components/ShoppingList';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <div className="App">
      <Banner/>
      <Categories
      categories={categories} 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}/>
      <div style={{display:'flex'}}>
        <Cart/>
      <ShoppingList selectedCategory={selectedCategory} />
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
