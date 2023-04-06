import logo from './logo.svg';
import './App.css';
import TableComponenet from './components/TableComponent';
import ButtonComp from './components/Button';
function App() {
  const items=[
    {name:'Mobile',quantity:10,price:400},
    {name:'Desk',quantity:3,price:1000},
    {name:'Laptop',quantity:5,price:300},
    {name:'Fruit',quantity:5,price:200},
    {name:'Bike',quantity:0,price:100},
  ]
  return (
    <div className="App">
      <TableComponenet items={items}/>
      <ButtonComp/>
    </div>
  );
}

export default App;
