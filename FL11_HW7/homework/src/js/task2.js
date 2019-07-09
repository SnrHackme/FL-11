let maxRange = 8;
let minRange = 0;
let random;
let maxAttempts = 3;
let total = 0;
let prize;
let maxPrize = 100;
let game = confirm('Do you want to play a game?');
let continueGame = true;
let userChoice;
if(game) {
    while(game) {
        while(continueGame) {
            random = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
            let attempt = 3;
            for(let i = 0;i < maxAttempts;i++) {
                if(attempt === maxAttempts) {
                    prize = maxPrize;
                } else if(attempt === maxAttempts-1) {
                    prize = maxPrize/(maxAttempts-1);
                } else {
                    prize = maxPrize/(maxAttempts+1);
                }
                let userChoice = parseFloat(prompt(`
                Enter number from ${minRange} to ${maxRange}
                Attempts left: ${attempt}
                Total prize: ${total}$
                Possible prize on current attempt: ${prize}$`));
                if(userChoice === random) {
                    total += prize;
                    break;
                } else {
                    attempt--;
                }
            }
            if(attempt === 0) {
                break;
            } else {
                continueGame = confirm(`Congratulation, you won! Your prize is: ${total}$.Do you want to continue?`);
                if(continueGame) {
                    attempt = maxAttempts;
                    maxPrize *= maxAttempts-1;
                    maxRange += maxAttempts+1;
                } else {
                    break;
                }
            }
        }
        alert(`Thank you for your participation. Your prize is: ${total}$`);
        game = confirm('Do you want to play again?');
        if(game) {
            continueGame = true;
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}