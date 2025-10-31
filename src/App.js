import "./styles.css";
import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle";
import { useFetch } from "./useFetch";
import { useLogger } from "./useLogger";
import { useLocalStorage } from "./useLocalStorage";

function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function ToggleSwitch() {
  const { value, toggle } = useToggle(false);
  return (
    <div>
      <h3>Current State: {value ? "True" : "False"}</h3>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("data", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function LoggerComponent() {
  const { value, setValue } = useLogger("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </div>
  );
}

function LocalStorageComponent() {
  const { value, setValue } = useLocalStorage("inputValue", "3");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Stored value: {value}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Playing with custom_hooks</h1>
      <h1>1. useCounter</h1>
      <Counter />
      <h1>2. useToggle</h1>
      <ToggleSwitch />
      <h1>3. useFetch</h1>
      <UserList />
      <h1>4. useLogger</h1>
      <LoggerComponent />
      <h1>5. useLocalStorage</h1>
      <LocalStorageComponent />
    </div>
  );
}
