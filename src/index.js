const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);

    function convert(a) {
      return a.map(s => {
      s = s.match(/.{1,2}/g);
      s = s.filter(elem => elem != "00");
      for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
          case "10": 
            s[i] = '.';
            break;
          case "11":
            s[i] = '-';
            break; 
        }
      }
      return s.join('');      
    });
    }

    return convert(arr).map(el => MORSE_TABLE[el]).join('');
}

module.exports = {
    decode
}