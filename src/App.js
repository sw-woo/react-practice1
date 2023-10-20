import logo from "./logo.svg";
import "./App.css";
import Counter from "./UseStateSample";
import UserProfile from "./UserProfile";
import UseReducerSample from "./UseReducerSample";
import UseEffectSample from "./UseEffectSample";
import UseMemoSample from "./UseMemoSample";

function App() {
	return (
		<div className="App">
			<Counter></Counter>
			<UserProfile></UserProfile>
			<UseReducerSample></UseReducerSample>
			<UseEffectSample></UseEffectSample>
			<UseMemoSample></UseMemoSample>
		</div>
	);
}

export default App;
