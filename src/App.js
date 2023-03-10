import { useState } from "react";
import "./App.css";
import Game from "./Game";

function App() {
	const [n, setN] = useState(15);
	const init = () => {
		let ans = [];
		for (let i = 0; i < n; i++) {
			let temp = [];
			for (let j = 0; j < n; j++) temp.push(0);
			ans.push(temp);
		}
		return ans;
	};

	const [grid, setGrid] = useState(init());
	const [playing, setPlaying] = useState(0);

	const habitable = (ng, i, j) => {
		let nbr = 0;
		for (let a = i - 1; a <= i + 1; a++) {
			for (let b = j - 1; b <= j + 1; b++) {
				if (a === i && b === j) continue;
				if (a >= 0 && a < grid.length && b >= 0 && b < grid[0].length)
					nbr += grid[a][b];
			}
		}
		if (grid[i][j] === 1)
			nbr < 2 || nbr > 3 ? (ng[i][j] = 0) : (ng[i][j] = 1);
		else nbr === 3 ? (ng[i][j] = 1) : ([i][j] = 0);
	};

	const life = () => {
		let ng = init();
		for (let i = 0; i < grid.length; i++)
			for (let j = 0; j < grid[0].length; j++) habitable(ng, i, j);
		setGrid(ng);
	};

	return (
		<div className="App">
			<Game n={n} grid={grid} setGrid={setGrid} playing={playing} />
			<button
				onClick={() => {
					life();
				}}
			>
				Start/Stop
			</button>
		</div>
	);
}

export default App;
