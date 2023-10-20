import React, {
	useState,
	useMemo,
	useCallback,
	useRef,
	useEffect,
} from "react";

const getAverage = (numbers) => {
	console.log("평균값 계산중....");
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const UseMemoSample = () => {
	//숫자 배열 목록 상태값 정의
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");

	//useRef 변수를 선언한다.
	const txtValue = useRef(null);

	// 숫자입력 변경처리 이벤트 처리함수
	const handleAverage = (e) => {
		setNumber(e.target.value);
	};

	//useCallback 훅을 이용한 이벤트 함수 최적화 처리
	// const handleAverage = useCallback((e) => {
	// 	setNumber;
	// }, []);

	// const handleInsert = () => {
	// 	const nextList = list.concat(parseInt(number));
	// 	setList(nextList);
	// };

	//useCallback 훅을 이용해 숫자배열의 값이 변경되었을떄만 이벤트 처리 함수가 생성되게 성능최적하를 진행
	//number,list 데이터상태가 변경되었을때만 handleInsert 이벤트 처리함수가 생성되게 설정함.

	const handleInsert = useCallback(() => {
		setList(list.concat(parseInt(number)));
		setNumber("");
		txtValue.current.focus();
	}, [number, list]);

	//배열의 평균값을 구하는 함수 호출
	//const avg = getAverage(list);
	const avg = useMemo(() => getAverage(list), [list]);

	//최초 1번 해당 컴포넌트가 렌더링시 입력요소에 마우스 포커스 지정하기
	useEffect(() => {
		txtValue.current.focus();
	}, []);

	return (
		<div>
			<input ref={txtValue} value={number} onChange={handleAverage} />
			<button onClick={handleInsert}>등록</button>

			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>

			<div>
				<b>평균값:{avg}</b>
			</div>
		</div>
	);
};

export default UseMemoSample;
