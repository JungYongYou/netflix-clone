import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const getRandomLists = async () => {
			try {
				const res = await axios.get(`lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTg4ZDFhZmM3YWNhYzlhNmZjOWU0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU3NzYyNCwiZXhwIjoxNjQ4MDA5NjI0fQ.mfd5JIOKdj4W21V_PUsRHHxo9XyE2LT5BXeYQKbaaho',
					},
				});
				// console.log(res);
				setLists(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getRandomLists();
	}, [type, genre]);

	return (
		<div className="home">
			<Navbar />
			<Featured type={type} />
			{lists.map((list) => (
				<List list={list} />
			))}
		</div>
	);
};

export default Home;
