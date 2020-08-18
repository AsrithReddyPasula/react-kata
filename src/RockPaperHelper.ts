export function playGame (playerOne: string, playerTwo: string) {
    if (playerOne === playerTwo) {
        return "Draw";
    } else if (playerOne === "Scissors" && playerTwo === "Rock") {
        return "Player Two Wins";
    } else if (playerOne === "Paper" && playerTwo === "Rock") {
        return "Player One Wins";
    } else if (playerOne === "Rock" && playerTwo === "Scissors") {
        return "Player One Wins";
    } else if (playerOne === "Rock" && playerTwo === "Paper") {
        return "Player Two Wins";
    } else if (playerOne === "Scissors" && playerTwo === "Paper") {
        return "Player One Wins";
    } else if (playerOne === "Paper" && playerTwo === "Scissors") {
        return "Player Two Wins";
    } else {
        return "Invalid Inputs: Please use Rock, Paper, or Scissors"
    }
}

export function toDisplayText (text: string, isUpperCase: boolean) {
    return isUpperCase ? text.toUpperCase() : text;
}