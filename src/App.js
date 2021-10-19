import Todo from './components/Todo';

function App() {
    return (
        <div>
            <h1>My todos</h1>
            <Todo text="learn react" />
            <Todo />
            <Todo />
        </div>
    );
}

export default App;
