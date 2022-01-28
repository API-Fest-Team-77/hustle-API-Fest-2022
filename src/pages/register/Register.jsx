import "./register.css";

export default function Register() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Hustle</h3>
					<span className="loginDesc">LET YOUR HUSTLE SPEAK LOUDER!</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Username" className="loginInput" />
						<input placeholder="First name" className="loginInput" />
						<input placeholder="Last name" className="loginInput" />
						<input placeholder="Email" className="loginInput" />
						<input placeholder="Password" className="loginInput" />
						<input placeholder="Password Again" className="loginInput" />
						<input placeholder="location" className="loginInput" />
						<input placeholder="Company name" className="loginInput" />
						<input placeholder="About company" className="loginInput" />
						<button className="loginButton">Sign Up</button>
						<button className="loginRegisterButton">Log into Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
