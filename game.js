//Valid selections players can choose for playing rock paper scissors
const SELECTIONS = ['Rock', 'Paper', 'Scissors'];

//Valid result string values for round outcomes
const RESULT_TYPES = {
    win: 'Win',
    lose: 'Lose',
    draw: 'Draw'
}

/**
 * Generate a random number between 0 and max
 * @param {number} max Max value of random number
 * @returns {number} Returns a number between 0 and max -1
 */
const getRandomInt = (max) => Math.floor(Math.random() * max);

/**
 * Changes the first character of a string to uppercase
 * @param {string} string_value Any string input value
 * @returns {string} string_value changed to all lower case with a capital first letter
 */
const formatString = (string_value) =>{
    return string_value
    .charAt(0).toLocaleUpperCase()
    + string_value.slice(1).toLocaleLowerCase();
}

/**
 * Request the player to type in their hand to throw and returns the string.
 * This function uses formatString() to format the player input to get the correct format of the player input  
 * to test the input the player provided according to the valid selections.
 * @returns {string} returns the string value of what the player typed in.
 */
const playerPlay = () => {
    let player_selection = ''

    //Loop until player enters a valid selection input
    while (true) {
        //Get player input and format to required format of first character capitalized string
        const player_input = prompt('Choose your hand: ROCK! PAPER! SCISSORS!');;
        player_selection = formatString(player_input);

        if (SELECTIONS.includes(player_selection)) {
            alert(`You played: ${player_selection}`);
            break;
        } else {
            alert('Incorrect input, please try again.');
        }
    }

    return player_selection;
}

/**
 * Computer chooses his hand to throw
 * This function uses getRandomInt() to get a random number for computers selection
 * @returns {string} returns a random selection 
 */
const computerPlay = () => {
    const selection_number = getRandomInt(SELECTIONS.length);
    const computer_selection = SELECTIONS[selection_number];
    alert(`Computer played: ${computer_selection}`);
    return computer_selection;
}

/**
 * Calculates if the hand the player played beats the computer and returns the round result
 * @param {string} player_selection The hand the player played
 * @param {string} computer_selection The hand the computer played
 * @returns {object} returns an object with the following key value pairs :  
 * 
 *      {string} player_selection  : player selected hand: 'Rock' 'Paper' 'Scissors'
 * 
 *      {string} computer_selection  : computer selected hand: 'Rock' 'Paper' 'Scissors'
 * 
 *      {string} value  : round result value of 'Win' 'Lose' or 'Draw'  
 */
const calculateRoundResult = (player_selection, computer_selection) => {
    let result = {
        playerSelection: player_selection,
        computerSelection: computer_selection,
        value: ''
    };

    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection) {
                case 'Rock':
                    result.value = RESULT_TYPES.draw;
                    break;
                case 'Paper':
                    result.value = RESULT_TYPES.lose;
                    break;
                case 'Scissors':
                    result.value = RESULT_TYPES.win;
                    break;
                default:
                    break;
            }
            break;
        case 'Paper':
            switch (computerSelection) {
                case 'Rock':
                    result.value = RESULT_TYPES.win;
                    break;
                case 'Paper':
                    result.value = RESULT_TYPES.draw;
                    break;
                case 'Scissors':
                    result.value = RESULT_TYPES.lose;
                    break;
                default:
                    break;
            }
            break;
        case 'Scissors':
            switch (computerSelection) {
                case 'Rock':
                    result.value = RESULT_TYPES.lose;
                    break;
                case 'Paper':
                    result.value = RESULT_TYPES.win;
                    break;
                case 'Scissors':
                    result.value = RESULT_TYPES.draw;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return result;
}

/**
 * Displays an alert prompt with the game results
 * @param {string} result String value of the game results pulled from RESULT_TYPES object
 */
const displayResult = (result) => {
    let message_text = ''
    switch (result.value) {
        case RESULT_TYPES.win:
            message_text = `${result.playerSelection} beats ${result.computerSelection} \nYou Win!`;
            break;
        case RESULT_TYPES.lose:
            message_text = `${result.computerSelection} beats ${result.playerSelection} \nYou Lose!`;
            break;
        case RESULT_TYPES.draw:
            message_text = `Both chose ${result.playerSelection} \nIt's a Draw!`;
            break;
        default:
            message_text = 'Something went wrong. No results found.';
            break;
    }
    console.log(`Player chose: ${result.playerSelection}`);
    console.log(`Computer chose: ${result.computerSelection}`);
    alert(message_text);
    console.log(message_text);
}

/**
 * Starts a round of rock paper scissor and returns the result string value
 * This function uses the calculateRoundResult to get the resulting data of the round
 * @returns {string} returns result of the round as 'Win', 'Lose', or 'Draw'
 */
const playRound = () => {
    let player_selection = playerPlay();
    let computer_selection = computerPlay();

    let round_result = calculateRoundResult(player_selection, computer_selection);

    displayResult(round_result);

    return round_result.value;
}

/**
 * Starts the game with a provided number of rounds
 * Results of each round will be displayed on the screen as a message
 * Finally after each round the game will display your total win/lose/draw score
 * @param {number} rounds number of round the game will be
 */
const game = () => {
    const game_results = {
        wins: 0,
        loses: 0,
        draws: 0
    }

    let game_rounds = 0;

    //Get player input for round number until a valid number over 0 is provided
    while (true) {
        player_input = prompt('How many rounds would you like to play?')
        if (isNaN(player_input) || player_input <= 0) {
            alert('Please enter a valid number more than 0.')
        }
        else {
            game_rounds = player_input;
            break;
        }
    }

    //Initiate game rounds
    for (let i = 0; i < game_rounds; i++) {
        let round_result = playRound();

        switch (round_result) {
            case RESULT_TYPES.win:
                game_results.wins++;
                break;
            case RESULT_TYPES.lose:
                game_results.loses++;
                break;
            case RESULT_TYPES.draw:
                game_results.draws++;
                break;
            default:
                break;
        }
    }

    alert(`Game results: Wins(${game_results.wins}) | Loses(${game_results.loses}) | Draws(${game_results.draws})`);
    alert('Thank you for playing!');
}

//Initiate game to start
//game();