import React, { useState } from "react";

const UseStateSample = () => {
	const [count, setCount] = useState(0);

	//증가처리 이벤트 핸들러
	const inCrease = () => {
		setCount(count + 1);
	};

	//감소처리 이벤트 핸들러
	const deCrease = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>카운터 상태값 표시: {count}</h1>
			<button onClick={inCrease}>증가</button>
			<button onClick={deCrease}>감소</button>
		</div>
	);
};

export default UseStateSample;
