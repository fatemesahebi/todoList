import './App.css';
import {TodoListContexProvider,Container} from "./components";
function App() {
  return (
    <div>
      <TodoListContexProvider>
        <Container/>
      </TodoListContexProvider>

    </div>
  );
}

export default App;
