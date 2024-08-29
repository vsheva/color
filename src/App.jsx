import './App.css';
import RandomColor from './components/random-color/RandomColor';
import Star from './components/star/Star';

function App() {
  return (
    <div className="App">
      {/* <RandomColor /> */}
      <Star numStars={10} />
    </div>
  );
}

export default App;
