import React, { useState } from "react";

const UserProfile = () => {
	//유저 정보 셋팅
	const [user, setUser] = useState({ name: "", nickName: "", email: "" });

	//유저정보 핸들링

	const handleUserInfo = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

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

export default UserProfile;
