import React from "react";
import "./App.css";

export default function Game(props) {
	const handleClick = (i, j) => {
		let nd = [...props.grid];
		nd[i][j] = 1 - nd[i][j];
		props.setGrid(nd);
	};

	return (
		<>
			<div
				className="grid1"
				style={{
					gridTemplateColumns: `repeat(${props.n},1fr)`,
					gridTemplateRows: `repeat(${props.n},1fr)`,
				}}
			>
				{props.grid.map((row, i) =>
					row.map((cell, j) => (
						<button
							onClick={() => {
								handleClick(i, j);
							}}
							className={cell === 1 ? "clicked" : "unclicked"}
							style={{ height: "40px", width: "40px" }}
						>
							{cell}
						</button>
					))
				)}
			</div>
		</>
	);
}
