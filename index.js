const piano_keys = document.querySelectorAll('.key');

function played(newUrl) {
    console.log(newUrl);

    new Audio(newUrl).play();
}

function getUrl(i) {
    let number = i < 9 ? '0' + (i + 1) : (i + 1);
    const newUrl = 'sounds/key' + number + '.mp3';
    return newUrl;
}

// Array.forEach(() => {}) or Array.forEach((val) => {}) or Array.forEach(val => {})
piano_keys.forEach((piano_keys, i) => {
    const keyUrl = getUrl(i);
    piano_keys.addEventListener('click', () => played(keyUrl));
})

const keysObj = [
    '1', '2', '3','4', '5', '6', '7', '8', '9', '0',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'f', 'g', 'h', 'j'
]

const handleKeyPress = (e) => {
    const pressedKey = e.key;
    const i = keysObj.indexOf(pressedKey);

    console.log(i);

    piano_keys[i].classList.toggle('played');

    setTimeout(() => {
        piano_keys[i].classList.toggle('played');
    }, 200);

    // let number = i < 9 ? '0' + (i + 1) : (i + 1);
    // const newUrl = 'sounds/key' + number + '.mp3';
    played(getUrl(i))
}

window.addEventListener('keypress', handleKeyPress);
