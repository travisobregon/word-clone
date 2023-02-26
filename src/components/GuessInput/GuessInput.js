import React from "react";

function GuessInput({ handleGuessSubmission, disabled }) {
	const [guess, setGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();

		handleGuessSubmission(guess);
		setGuess("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				required
				pattern="[A-Za-z]{5}"
				minLength={5}
				maxLength={5}
				title="Five letters only, please."
				disabled={disabled}
				value={guess}
				onChange={(event) => setGuess(event.target.value.toUpperCase())}
			/>
		</form>
	);
}

export default GuessInput;
