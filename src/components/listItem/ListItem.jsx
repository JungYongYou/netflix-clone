import { useState, useEffect } from 'react';
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import './listItem.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get('/movies/find/' + item, {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTg4ZDFhZmM3YWNhYzlhNmZjOWU0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU3NzYyNCwiZXhwIjoxNjQ4MDA5NjI0fQ.mfd5JIOKdj4W21V_PUsRHHxo9XyE2LT5BXeYQKbaaho',
					},
				});
				setMovie(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMovie();
	}, [item]);

	return (
		<Link to={{ pathname: '/watch' }} state={{ movie }}>
			<div
				className="listItem"
				style={{ left: isHovered && index * 225 - 50 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img src={movie.img} alt="" />
				{isHovered && (
					<>
						{/* <video src={trailer} autoPlay loop muted /> */}
						<iframe
							width="560"
							height="315"
							src={movie.trailer}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
						<div className="itemInfo">
							<div className="icons">
								<PlayArrow className="icon" />
								<Add className="icon" />
								<ThumbUpAltOutlined className="icon" />
								<ThumbDownOutlined className="icon" />
							</div>
							<div className="itemInfoTop">
								<span>1 hour 14 mins</span>
								<span className="limit">+{movie.limit}</span>
								<span>{movie.year}</span>
							</div>
							<div className="desc">{movie.desc}</div>
							<div className="genre">{movie.genre}</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
};

export default ListItem;
