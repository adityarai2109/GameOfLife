import { useState, useEffect } from "react";
import "./App.css";
import Game from "./Game";
import Navbar from "./Navbar";
import rules from "./assets/GameRules.json";
import R1A from "./assets/R1A.jpg";
import R1B from "./assets/R1B.jpg";
import R2A from "./assets/R2A.jpg";
import R2B from "./assets/R2B.jpg";
import R3A from "./assets/R3A.jpg";
import R3B from "./assets/R3B.jpg";
import R4A from "./assets/R4A.jpg";
import R4B from "./assets/R4B.jpg";
import Right from "./assets/Right.jpg";

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
	const [simulating, setSimulating] = useState(0);

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

	useEffect(() => {
		if (simulating) {
			setTimeout(() => {
				life();
			}, 500);
		}
	}, [simulating, grid, n]);

	return (
		<div className="App">
			<Navbar playing={playing} setPlaying={setPlaying} />
			{playing ? (
				<div className="Rules">
					<h3 style={{ textAlign: "center" }}>RULES</h3>
					<ul>
						<li>
							<div className="list">
								<h4>{rules[0].text}</h4>
								<div className="pics">
									<img src={R1A} alt="R1A" />
									<img src={Right} alt="Right" />
									<img src={R1B} alt="R1B" />
								</div>
							</div>
						</li>
						<li>
							<h4>{rules[1].text}</h4>
							<div>
								<img src={R2A} alt="R1A" />
								<img src={Right} alt="Right" />
								<img src={R2B} alt="R1B" />
							</div>
						</li>
						<li>
							<h4>{rules[2].text}</h4>
							<div>
								<img src={R3A} alt="R1A" />
								<img src={Right} alt="Right" />

								<img src={R3B} alt="R1B" />
							</div>
						</li>
						<li>
							<h4>{rules[3].text}</h4>
							<div>
								<img src={R4A} alt="R1A" />
								<img src={Right} alt="Right" />

								<img src={R4B} alt="R1B" />
							</div>
						</li>
					</ul>
				</div>
			) : (
				<div className="Simulation">
					<Game n={n} grid={grid} setGrid={setGrid} />
					<div className="controls">
						<button
							onClick={() => {
								setSimulating(!simulating);
							}}
						>
							{!simulating ? "Simulate" : "Stop"}
						</button>
						<button
							onClick={() => {
								setGrid(init());
							}}
						>
							Reset
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
