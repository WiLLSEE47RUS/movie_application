import React from 'react';
import PropTypes from 'prop-types'
//styles
import { Image } from "./Thumb.styles.js";
//Link
import { Link } from "react-router-dom";

const Thumb = ({image, movieId, clickable}) => {
	return (
		<div>
			{clickable ? (
				<Link to ={`/${movieId}`}>
					<Image src = {image} alt = 'movieThumb'/>
				</Link>
			):(
				<Image src = {image} alt = 'movieThumb'/>
			) }

		</div>
	);
};

Thumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool
}
export default Thumb;