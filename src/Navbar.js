import React from "react";

export default function Navbar(props) {
	return (
		<div className="nav">
			<div className="left-nav">
				<h3>Game of Life</h3>
			</div>
			<div className="right-nav">
				<button>
					<a
						href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
						target="_blank"
						rel="noreferrer"
						style={{ textDecoration: "none", color: "black" }}
					>
						Conway's Game of Life
					</a>
				</button>
				<button onClick={() => props.setPlaying(!props.playing)}>
					{!props.playing ? "Show Rules" : "Play"}
				</button>
			</div>
		</div>
	);
}
