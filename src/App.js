import './App.css';
import Pages from "./components/pages"
import Header from "./components/header"

function App() {

  return (
    <div className="App">
      <header className='header' style={{backgroundColor: 'black'}}>
				<Header/>
			</header>
      <main style={{ marginTop: "100px", justifyContent: 'center', alignItems: 'center'}}>
				<Pages/>
			</main>
    </div>
  );
}

export default App;
