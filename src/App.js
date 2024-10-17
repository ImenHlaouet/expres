import logo from './logo.svg';
import './App.css';
import ab  from './Image/a.jpg'
import Hello from './componet/Hello';
function App() {
  

  const name='jhon';
  const a=1;
  const b=5;
  let firstName='Imen';
  let secondName='Hlaouet';
  const multuplication = (x,y)=>x*y;
  let btn='Ajouter';
  return (
    <div className="App">
      <Hello/>
      <h1 style={{ color: "red", fontSize: 60, width:50, justifyContent: 'flex-start'}}>Hello Imen</h1>
      <img src={ab} width={200} height={400}/>
      <h2>{name} </h2>
      <h3>{a+b}</h3>
      <h3 >{firstName + ' ' + secondName}</h3>
      <h4>{multuplication(5,7)}</h4>
      <button>{btn}</button>

    </div>
  );
}

export default App;
