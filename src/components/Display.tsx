import React from 'react';

type Props = {
	content: string[] | string;
};

const Display: React.FunctionComponent<Props> = ({ content }) => {
	return <div id="display">{content}</div>;
};

export default Display;
