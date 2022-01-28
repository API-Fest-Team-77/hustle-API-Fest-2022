import "./rightbar.css";

export default function Rightbar({ profile }) {
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
					<li className="rightbarFriend"></li>
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
						<span className="rightbarInfoKey">City:</span>
						<span className="rightbarInfoValue">New York</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">From:</span>
						<span className="rightbarInfoValue">Madrid</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Relationship:</span>
						<span className="rightbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVuNxIQe46ycLkSFaakQ7eggqDoKzFv9gog&usqp=CAU"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3sswRZ2WB0Scr1ZO6WVM7aZSNeBzKukxTg&usqp=CAU"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fhaikyuu%2Fimages%2Fe%2Fe5%2FKaine-2014-06-14-03h04m04s54.png%2Frevision%2Flatest%3Fcb%3D20140614121105&imgrefurl=https%3A%2F%2Fhaikyuu.fandom.com%2Fwiki%2FT%25C5%258Dru_Oikawa&tbnid=fG-eCOvmCQ4BjM&vet=12ahUKEwit-47Rq9X1AhUWgGMGHTf2AKwQMyg4egQIARBQ..i&docid=VEqRpG3epaEMkM&w=853&h=480&itg=1&q=haikyu%20profile%20picture&hl=en&ved=2ahUKEwit-47Rq9X1AhUWgGMGHTf2AKwQMyg4egQIARBQ"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsof6w2l_aNlOcq95cAkJtR8XsjWBJYokQlQ&usqp=CAU"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-ADS8us--elFiRax1i7YjAQlZqR3Wzr2w&usqp=CAU"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EWEpp2muW4t25Ra3RuxkUMny9KwqHP3IhA&usqp=CAU"
							alt=""
							className="rightbarFollowingImg"
						/>
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
