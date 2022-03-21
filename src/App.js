
import './App.css';
import Dictionary from "./Dictionary.js"
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        
        </header>
        <main>
          <Dictionary defaultKeyword="cat" />
        </main>
        <footer className="App-footer">
          <small>Coded by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}