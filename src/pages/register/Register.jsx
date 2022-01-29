
import { Input,Space,Button } from '@mantine/core';
import { IoPerson,IoBriefcase,IoLockClosed,IoMail,IoMap,IoBook } from "react-icons/io5";
import { PasswordInput } from '@mantine/core';

export default function Register() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Hustle</h3>
					<span className="loginDesc">LET YOUR HUSTLE SPEAK LOUDER!</span>
				</div>
				<div className="loginRight">
					
						<Input placeholder="Username" radius="lg" size="lg" variant="filled" icon= {<IoPerson/>}/>
						<Space h="xs"/>
						<Input placeholder="First name" radius="lg" size="lg" variant="filled"  />
						<Space h="xs"/>
						<Input placeholder="Last name" radius="lg" size="lg" variant="filled" />
						<Space h="xs"/>
						<Input placeholder="Email" radius="lg" size="lg" variant="filled" icon= {<IoMail/>} />	
						<Space h="xs"/>					
						<PasswordInput placeholder="Password" radius="lg" size="lg" variant="filled" icon={<IoLockClosed />} />
						<Space h="xs"/>
						<Input placeholder="location" radius="lg" size="lg" variant="filled" icon={<IoMap/>} />
						<Space h="xs"/>
						<Input placeholder="Company name" radius="lg" size="lg" variant="filled" icon={<IoBriefcase/>}/>
						<Space h="xs"/>
						<Input placeholder="About company" radius="lg" size="lg" variant="filled" icon={<IoBook/>} />
						<Space h="xs"/>
						<div style={{ width: 120 }}>
						<Button radius="xl" size="md">Get Started </Button>
						<Space h="xs"/>
						<Button radius="xl" size="lg">Log In </Button>
					    </div>
				</div>
			</div>
		</div>
	);
}
