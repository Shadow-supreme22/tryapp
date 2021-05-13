
import './App.css';
import Product from './Product';



function App() {
  
  function doSomething(){
    console.log("hello");
  }
  return (
    <div className="App">
    <h1>My React App</h1>
    <Product name="Brocolli" price="40"/>
    <Product name="Aloo" price="20"/>
    <button onClick={doSomething}>Click me</button>
    </div>

  );
}
//the above return content can be written same as below
//React.createElement('h2',null,'hello'))
//it is not html, its jsx(Javascript XML)
//must include all in a div
//className is used instead of class
export default App;
