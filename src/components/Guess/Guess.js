import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
	const result = checkGuess(value, answer);

	return (
		<p className="guess">
			{range(5).map((num) => (
				<span key={num} className={`cell ${result?.[num].status ?? ""}`}>
					{result?.[num].letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
