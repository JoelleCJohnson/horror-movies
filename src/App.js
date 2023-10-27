import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
        <section class="movies-container">
          <Home />
        </section>
    </>
  );
}

export default App;
