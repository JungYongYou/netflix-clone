import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

const Watch = () => {
	const { state } = useLocation();
	const movie = state?.movie;

	return (
		<div className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			{/* <video src="https://youtu.be/U1K9SZr6Ej4" className="video" autoPlay progress controls></video> */}
			<iframe
				width="100%"
				height="100%"
				src={movie.video}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default Watch;
