import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";
export default function Rightbar({ profile }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img
						className="birthdayImg"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNsVrQogF0Ks3FdVshm4EX_-XyUENly3K1Q&usqp=CAU"
						alt=""
					/>
					<span className="birthdayText">
						<b>Startup</b> reaching <b>heights</b> WON FORBES AWARD.
					</span>
				</div>
				<img
					className="rightbarAd"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYwpr_Qc7b4gIGKtdyj6ubG2JfR8NfRh9_w&usqp=CAU"
					alt=""
				/>
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">User information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Company name:</span>
						<span className="rightbarInfoValue">XYZ</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Location:</span>
						<span className="rightbarInfoValue">Madrid</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">About your company:</span>
						<span className="rightbarInfoValue">vhjvdbkj</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Required funding:</span>
						<span className="rightbarInfoValue">vhjvdbkj</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Stock value:</span>
						<span className="rightbarInfoValue">43243</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">John Carter</span>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
		</div>
	);
}
