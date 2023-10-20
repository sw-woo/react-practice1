import React, { useReducer } from "react";

function countReducer(state, action) {
	switch (action.type) {
		case "INCREASE":
			return state + 1;
		case "DECREASE":
			return state - 1;
		case "INIT":
			return 0;
		default:
			return state;
	}
}

const UseReducerSample = () => {
	const [count, dispatchCount] = useReducer(countReducer, 0);

	return (
		<div>
			<h1>카운터 상태값 표시:{count}</h1>

			<button onClick={() => dispatchCount({ type: "INCREASE" })}>
				증가
			</button>
			<button onClick={() => dispatchCount({ type: "DECREASE" })}>
				감소
			</button>
			<button onClick={() => dispatchCount({ type: "INIT" })}>
				초기화
			</button>
		</div>
	);
};

export default UseReducerSample;
