import React, { useState, useEffect } from "react";

const UseEffectSample = () => {
	//유저 정보 셋팅
	const [user, setUser] = useState({ name: "", nickName: "", email: "" });

	//유저정보 핸들링

	const handleUserInfo = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	//Case1: 최초로 해당 컴포넌트가 렌더링될때 최초1회발생
	useEffect(() => {
		//최초로 현재 컴포넌트 렌더링 될떄 실행해야하는 로직을 여기에 구현합니다.
		console.log("프로필 최초로 로딩되었습니다.");
	}, []);

	//Case2: 화면내의 각종 렌더링이 발생할때마다 특정 로직을 실행시키고 싶은경우...

	useEffect(() => {
		console.log("화면이 다시 그려질때마다 실행됩니다.");

		return () => {
			console.log("clean up........");
		};
	});

	//Case3:특정 데이터 상태가 변경될때마다 특정 로직을 실행시키고 싶은 경우
	useEffect(() => {
		console.log(
			"user 객체 데이터가 변경되어 UI가 렌더링 될때마다 실행 됩니다.",
			user
		);

		//cleanup 함수를 정의하고 실행할수 있다.
		//데이터가 변경되기전에 값이 출력 됩니다.
		return () => {
			console.log("clean up.........", user);
		};
	});

	return (
		<div>
			<h1>사용자 정보 입력영역</h1>
			<input value={user.name} name="name" onChange={handleUserInfo} />
			<input
				value={user.nickName}
				name="nickName"
				onChange={handleUserInfo}
			/>
			<input value={user.email} name="email" onChange={handleUserInfo} />

			<h1>사용자 정보 출력영역</h1>
			<div>이름: {user.name}</div>
			<div>닉네임: {user.nickName}</div>
			<div>이메일: {user.email}</div>
		</div>
	);
};

export default UseEffectSample;
