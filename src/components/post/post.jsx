import { MoreVert } from "@material-ui/icons";
import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYYChXCPeV3ou1wdnB_y4AhXAEySC1D6agQ&usqp=CAU"
							alt=""
						/>
						<span className="postUsername">Elon Musk</span>
						<span className="postDate">12:43pm</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">So happy to announce about spaceX new launch</span>
					<img
						className="postImg"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_Xu9KxGdow-U2pBB3d0lqjxJqHtpj7dlaQ&usqp=CAU"
						alt=""
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="postLikeCounter"> people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}
