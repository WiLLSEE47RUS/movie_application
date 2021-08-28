import React from 'react';
import PropTypes from 'prop-types'
//styles
import {Wrapper, Content} from "./Grid.styles.js";

const Grid = ({header, children}) => {
	return (
		<Wrapper>
			<h1>{header}</h1>
			<Content>{children}</Content>
		</Wrapper>

	);
};

Grid.propTypes = {
	header: PropTypes.string,
	children: PropTypes.array
}
export default Grid;