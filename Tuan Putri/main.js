 var index = 1;
 var textContent = document.getElementById('text-content')
 var buttonText = document.getElementById('buttonText')
 var text = document.getElementById('text')
 var last = document.getElementById('poem')
last.style.display = 'none'

 
 function hide() {
    var elements = document.querySelectorAll('.hehe');
    elements.forEach(function(element) {
        element.style.display = 'none';
    });

};

function display() {
   document.getElementById(index).style.display = 'block'
};

function start(){
    hide()
    index++
    display()
}

function ya(){
    hide()
    index++
    display()
}

function tak(){
    hide()
    index = 7
    display()
}

function ok(){
    hide()
    index = 4
    display()
}

function poem() {
    hide()
    last.style.display = 'block'

    // Your poem content with line breaks represented by "\n"
    const poemContent = `The moon is beautiful, isn’t it?
It makes creatures fall in love with it,
even though it's impossible to reach.

Are you okay??
Ahh, what a pretty word,
is there any magic in it?

Thank you.....
It’s me who should thank you,
for turning this grey view into blue.

I am sorry....
Why?? You never make me mad.
Please don't ever say that word again.

Heyyy……
Helping you is already my priority,
putting aside my time and duty,
in hopes I can see your beauty.

Goodnight.....
Why does this word feel so hurtful?
Why can’t the night wait?
Why are you leaving me?

Don't you think you deserve better?
Rather than a foolish kid,
a foolish kid who doesn't know what love is.

Please... Don't leave this foolish kid
Teach him what love is
Please... Don't leave this foolish kid

P.S.: I wrote it at 3 AM, sorry if it's too simple`;

    // Target HTML element
    const container = document.getElementById('poem-container');
    container.textContent = ''; // Clear previous content if any

    // Variables for typewriter effect
    let index = 0;
    const typingSpeed = 70; // Adjust typing speed (milliseconds)

    // Typewriter function
    function typeWriter() {
        if (index < poemContent.length) {
            // If the current character is a newline, replace it with a <br> tag
            if (poemContent.charAt(index) === '\n') {
                container.innerHTML += '<br>';
            } else {
                container.innerHTML += poemContent.charAt(index);
            }
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start typewriter
    typeWriter();
}




hide()
display()