import { Input, PasswordInput,Button } from '@mantine/core';
import "./login.css"
import { IoMail,IoLockClosed } from "react-icons/io5";

export default function Login() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Hustle.</h3>
					<span className="loginDesc">LET YOUR HUSTLE SPEAK LOUDER!</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<Input placeholder="Email" radius="lg" size="lg" icon={<IoMail/>}/>
						<PasswordInput placeholder="Password" radius="lg" size="lg" icon={<IoLockClosed/>} />
						<Button className="loginButton">Log In</Button>
						<span></span>
						<button className="loginRegisterButton">Create a New Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
