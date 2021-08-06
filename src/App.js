import Header from './components/Header/Header';
import Routes from './Routes';

function App() {
  return (
    <div className="dfa-app">
      <Header title="Food Delivery App"
              userPhoto="https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"/>
      <Routes/>
    </div>
  );
}
export default App;
