import './App.css';
import MessageDrawer from './components/MessageDrawer';

function App() {
  return (
   <>
    <div style={{
      background:"url('./images/jnj.png')", 
      backgroundSize: "cover",
      height: "600px",
      objectFit: "cover"
    }} // Remove this background-Image & its styling
    >
      <MessageDrawer/>
    </div>
   </>
  );
}

export default App;
