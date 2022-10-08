import './App.scss';
import Board from './components/Board';
import Input from './components/Input';
import Tips from './components/Tips';

const view = [
  <Input name='Bill' type='number' icon='Attach_Money' />,
  <Tips />
]

function App() {
  return (
    <section className="App">
      <div id='title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Board view={view} />
      {/*
        <Percentage />
      */}
      {
        
      }
    </section>
  );
}

export default App;
