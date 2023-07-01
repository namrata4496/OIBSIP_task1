import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import styles from './styles.module.css';


const EmailVerify = () => {
	
	
	const [validUrl, setValidUrl] = useState(true);
	const { id, token } = useParams();

	useEffect(() => {
		return async () => {
			if (id && token) {
				const url = `http://localhost:4000/api/${id}/verify/${token}`;
				const { data } = await axios.get(url);
				if (data?.success) {
					alert(data?.message);
					setValidUrl(true);
				} else {
					setValidUrl(false);
				}
			}
		};
	}, [id, token]);

	return (
		<div>


	
			{validUrl ? (
				<div className={styles.container}>
					
					<h1>Email verified successfully</h1>
					<Link to='/login'>
						<button className={styles.green_btn}>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
			
		</div>
		
	);
};

export default EmailVerify;
