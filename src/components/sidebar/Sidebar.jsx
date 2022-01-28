import { Chat, Group, PlayCircleFilledOutlined, RssFeed } from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Chat className="sidebarIcon" />
						<span className="sidebarListItemText">Post an Idea</span>
					</li>
					<li className="sidebarListItem">
						<PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Grow business</span>
					</li>
					<li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Update Profile</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHZsc3xwRGK_buY_o47OogoecMLL8W_dfjw&usqp=CAU"
						/>
						<span className="sidebarFriendName">Eren Yeager</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHZsc3xwRGK_buY_o47OogoecMLL8W_dfjw&usqp=CAU"
						/>
						<span className="sidebarFriendName">Eren Yeager</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHZsc3xwRGK_buY_o47OogoecMLL8W_dfjw&usqp=CAU"
						/>
						<span className="sidebarFriendName">Eren Yeager</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
