import React from 'react';

type Props = {
	addToOperationQueue: (v: string) => void;
};

const Keypad: React.FunctionComponent<Props> = ({ addToOperationQueue }) => {
	const onKeyPress = (e: React.MouseEvent) => {
		addToOperationQueue((e.target as HTMLButtonElement).innerText);
	};
	return (
		<div>
			<button id="zero" onClick={onKeyPress}>
				0
			</button>
			<button id="one" onClick={onKeyPress}>
				1
			</button>
			<button id="two" onClick={onKeyPress}>
				2
			</button>
			<button id="three" onClick={onKeyPress}>
				3
			</button>
			<button id="four" onClick={onKeyPress}>
				4
			</button>
			<button id="five" onClick={onKeyPress}>
				5
			</button>
			<button id="six" onClick={onKeyPress}>
				6
			</button>
			<button id="seven" onClick={onKeyPress}>
				7
			</button>
			<button id="eight" onClick={onKeyPress}>
				8
			</button>
			<button id="nine" onClick={onKeyPress}>
				9
			</button>

			<button id="decimal" onClick={onKeyPress}>
				.
			</button>

			<button id="add" onClick={onKeyPress}>
				+
			</button>
			<button id="subtract" onClick={onKeyPress}>
				-
			</button>
			<button id="multiply" onClick={onKeyPress}>
				*
			</button>
			<button id="divide" onClick={onKeyPress}>
				/
			</button>

			<button id="equals" onClick={onKeyPress}>
				=
			</button>

			<button id="clear" onClick={onKeyPress}>
				C
			</button>
		</div>
	);
};

export default Keypad;
