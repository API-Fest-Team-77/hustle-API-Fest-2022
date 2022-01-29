import "./share.css";

export default function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYYChXCPeV3ou1wdnB_y4AhXAEySC1D6agQ&usqp=CAU"
						alt=""
					/>
					<input placeholder="Share your idea" className="shareInput" />
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<button className="shareButton">Share</button>
				</div>
			</div>
		</div>
	);
}
