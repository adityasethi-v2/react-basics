import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Become Fullstack Developer' />
    </div>
  );
}

export default App;
