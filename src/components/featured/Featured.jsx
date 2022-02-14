import './featured.scss';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';

const Featured = () => {
	return (
		<div className="featured">
			<img
				src="https://w.namu.la/s/138a1a6ca3a13ca1e79681d500ecb09b818373990bf5fec478ba977decb95cca34a3278ae9fd2596f1fcaab86f82f6d30c51d48e904cf61931fd876c1290c607cfdf9ff60c506b01f02f8fb7b49744b016cd0aa286e0df3f9b0a11acc28600a4"
				alt=""
			/>
			<div className="info">
				<img src="https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202201/30/kukinews/20220130070203373ynyn.jpg" alt="" />
				<span className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis officiis? Nam, harum reprehenderit illum explicabo quos deserunt. Cum odit
					architecto accusamus voluptatem magnam adipisci ducimus fugit, quo officia necessitatibus.
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
