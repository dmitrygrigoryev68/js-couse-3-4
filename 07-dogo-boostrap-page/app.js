(function(){

    var data = {
        image: './Photo.jpg',
        greeting: 'Hi guys!',
        intro: "My name is Dmitry Grigoryev. I was born in USSR and spend half of my life there. Now I live in Berlin. I very like to travel and my favorite cities are Moscow, New York and Rome. If you have an interest in my stories, don't hasistate and subscribe me"
    }

    var dogoImageElement = document.getElementById('dogo-image');
    var dogoGreetingElement = document.querySelector('[woof=dogo-greeting]');
    var dogoIntroTextElement = document.querySelector('#dogo-intoduction-text');

    dogoImageElement.src = data.image;
    dogoGreetingElement.innerHTML = data.greeting;
    dogoIntroTextElement.innerHTML = data.intro;
})();