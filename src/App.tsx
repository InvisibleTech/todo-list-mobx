import { TodoList } from './components/TodoList';
import { TodoNew } from './components/TodoNew';

const App = () => (
  <div className="App">
    <TodoNew />
    <TodoList />
  </div>
);

export default App;
