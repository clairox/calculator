import React, { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
	// if operator pressed and previous key was also operator, replace with new operator

	const [queue, setQueue] = useState<string[]>(['0']);
	const [result, setResult] = useState<string>('');

	const _setQueue = (v: string[]) => {
		setQueue(
			v.filter((q, i) => {
				if (i === v.length - 1) {
					return true;
				}
				if (!/\d/.test(q)) {
					return false;
				}
				if (!'+-*/'.includes(q)) {
					return true;
				}
				return false;
			})
		);
	};

	const _setResult = (v: string) => {
		setQueue(['0']);
		setResult(v);
	};

	const operate = () => {
		if (!queue.length) {
			throw new Error('Something went wrong');
		}

		if (queue.length === 1) return _setResult(queue[0]);

		let result = parseFloat(queue[0]);

		for (let i = 1; i < queue.length; i++) {
			const operator = queue[i][0];
			const operand = parseFloat(queue[i].slice(1));

			switch (operator) {
				case '+':
					result += operand;
					break;
				case '-':
					result -= operand;
					break;
				case '*':
					result *= operand;
					break;
				case '/':
					result /= operand;
					break;
			}
		}

		return _setResult(result.toString());
	};

	const addToOperationQueue = (v: string) => {
		const operators = '+-*/';

		if (!operators.includes(v) && result) {
			setResult('');
		} else if (operators.includes(v) && result) {
			setQueue([result, v]);
			setResult('');
			return;
		}

		if (v === 'C') return setQueue(['0']);

		if (v === '=') return operate();

		if (!queue.length && operators.includes(v)) return;

		const currentIdx = queue.length - 1;

		if (operators.includes(v)) {
			if (operators.includes(queue[currentIdx]) && v === '-') {
				const currentOperation = queue[currentIdx] + v;
				_setQueue(queue.slice(0, currentIdx).concat(currentOperation));
				return;
			}
			_setQueue(queue.concat(v));
			return;
		} else {
			if (!queue.length) {
				_setQueue(queue.concat(v));
				return;
			}

			if (queue.length === 1 && queue[0] === '0') {
				_setQueue([v]);
				return;
			}

			if (v === '.' && queue[currentIdx].includes('.')) {
				return;
			}

			const currentOperation = queue[currentIdx] + v;
			_setQueue(queue.slice(0, currentIdx).concat(currentOperation));
			return;
		}
	};

	useEffect(() => {
		console.log(queue);
	}, [queue]);

	return (
		<div className="App m-auto w-full flex flex-col justify-center items-center">
			<Display {...{ content: result || queue }} />
			<Keypad {...{ addToOperationQueue }} />
		</div>
	);
}

export default App;
