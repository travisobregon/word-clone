import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [result, setResult] = React.useState(null);

	function handleGuessSubmission(guess) {
		const nextGuesses = [...guesses, guess];

		setGuesses(nextGuesses);

		if (nextGuesses.includes(answer)) {
			setResult("win");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setResult("lose");
		}
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />

			<GuessInput
				handleGuessSubmission={handleGuessSubmission}
				disabled={result !== null}
			/>

			{result === "win" && (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in{" "}
						<strong>{guesses.length} guesses</strong>.
					</p>
				</div>
			)}

			{result === "lose" && (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</div>
			)}
		</>
	);
}

export default Game;
