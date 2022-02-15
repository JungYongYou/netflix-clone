import { useState } from 'react';
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import './listItem.scss';

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false);
	const trailer = 'https://youtu.be/U1K9SZr6Ej4';
	return (
		<div className="listItem" style={{ left: isHovered && index * 225 - 50 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<img src="https://image.news1.kr/system/photos/2022/1/14/5168731/article.jpg/dims/optimize" alt="" />
			{isHovered && (
				<>
					{/* <video src={trailer} autoPlay loop muted /> */}
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/U1K9SZr6Ej4?autoplay=1&mute=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<div className="itemInfo">
						<div className="icons">
							<PlayArrow />
							<Add />
							<ThumbUpAltOutlined />
							<ThumbDownOutlined />
						</div>
						<div className="itemInfoTop">
							<span>1 hour 14 mins</span>
							<span className="limit">+18</span>
							<span>2022</span>
						</div>
						<div className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora facilis id laboriosam modi dolore mollitia illum velit provident beatae amet
							consectetur dolorum numquam hic architecto nesciunt, ullam, ex accusamus!
						</div>
						<div className="genre">Horror</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
