const magic8Ball = document.getElementById('magic-8-ball');
const answerDiv = document.getElementById('answer');

const answers = [
    'Yes',
    'No',
    'Maybe',
    'Ask again later',
    'Cannot predict now',
    'Don’t count on it',
    'Most likely',
    'Outlook not so good',
    'probably',
    'yes, definitely'
];

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

function shakeMagic8Ball() {
    magic8Ball.classList.add('shake-animation');
    setTimeout(() => {
        magic8Ball.classList.remove('shake-animation');
        const answer = getRandomAnswer();
        answerDiv.textContent = answer;
    }, 1000);
}
