

// Получить случайное слово из массива dictionary
function loadWords() {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

// Загружаем голос

function speakWord(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

let numbers = 0;

// Показ слов при нажатии на кнопку
function displayWords() {
    const sentences = document.getElementById("sentences");
    const placeForText = document.getElementById("placeForSentence");
    numbers = +prompt("введите количество слов")
    let dictionary = JSON.parse(localStorage.getItem("dictionary")) || []

    

    // Проверка на корректность
    if (isNaN(numbers) || numbers <= 0) {
        alert("Введите корректное положительное число!");
        return;
    }

    if (numbers > 7) {
        alert("Введите число от 1 до 7");
        return;
    }

    if (numbers > dictionary.length) {
        alert (`У вас только ${dictionary.length} слов в словаре!`)
        return
    }

    // Найти или создать блок отображения
    let displayForSentence = document.getElementById("displayForSentence");

    if (!displayForSentence) {
        displayForSentence = document.createElement("div");
        displayForSentence.id = "displayForSentence";
        displayForSentence.classList.add("frame");
        sentences.insertBefore(displayForSentence, placeForText);
    } else {
        displayForSentence.innerHTML = "";
    }

    let randomWords = [];

    // Отобразить слова
    for (let i = 1; i <= numbers; i++) {

        const result = loadWords();
        randomWords.push(result);

    }

    // Функция проверки ответов 

    function random () {
        randomWords.forEach(word => {
        const itemOfWords = document.createElement("div")
        itemOfWords.classList.add("itemOfWords-default")
        
        const button = document.createElement("button");
        button.textContent = "🔊"
        button.classList.add("voiceBtn")

        const text = document.createElement("p");
        text.textContent = word.word;
        text.title = word.translation;
        text.classList.add("word");

        const translate = document.createElement("input")
        translate.placeholder = "Перевод"
        translate.classList.add("translate")

        function triggerAnimation(element, className) {
            element.classList.remove(className);
            void element.offsetWidth; // Принудительный reflow
            element.classList.add(className);
        }

        function correctAnswer () {
            triggerAnimation(translate, "correctly");
            const correctAnswer = document.createElement("p")
            correctAnswer.classList.add("answer");
            correctAnswer.textContent = word.translation;
    
            if (translate) {
                itemOfWords.removeChild(translate)
            }

            itemOfWords.appendChild(correctAnswer)
    
            itemOfWords.classList.toggle("itemOfWords-correct")
            itemOfWords.classList.toggle("itemOfWords-default")
        }

        // Функция проверки слов

        let count = 0;

        function checkTranslation() {

            if (count === 2) {
                correctAnswer()                
            }

            if (translate.value.trim() === "") {
                return;
            }
            
            if (translate.value.trim().toLowerCase() === word.translation) {
                correctAnswer()
            } else {
                triggerAnimation(translate, "wrong")
            }

            count += 1;
        }

        // Обработчик событий нажатия вне input

        translate.addEventListener("blur", (value) => {
            checkTranslation()
        })

        // Обработчик событий нажатия на enter

        translate.addEventListener("keydown", (event) => {
            
            if (event.key === "Enter") {
                checkTranslation()
            }


                
        })

        button.addEventListener("click", () => {
            speakWord(word.word)
        })

        displayForSentence.appendChild(itemOfWords)
        itemOfWords.appendChild(button);        
        itemOfWords.appendChild(text);
        itemOfWords.appendChild(translate)
    })
}

random()




// Кнопка обновления
let updateButton = document.getElementById("buttonUpdateWords");

if (!updateButton) {
    updateButton = document.createElement("button");
    updateButton.textContent = "Обновить слова";
    updateButton.id = "buttonUpdateWords";
    sentences.appendChild(updateButton);

    // Обработчик кнопки
    updateButton.addEventListener("click", () => {
        displayForSentence.innerHTML = "";
        randomWords = [];
        for (let i = 1; i <= numbers; i++) {
            const result = loadWords();
            randomWords.push(result);

        }
        random()
        document.getElementById("inputText").value = "";
    });

    
}

// Кнопка очистки textarea

let cleanWords = document.getElementById("cleanWords")

if (!cleanWords) {
    cleanWords = document.createElement("button")
    cleanWords.textContent = "Очистить"
    cleanWords.id = "cleanWords"
    cleanWords.classList.add("cleanButtons")
    cleanWords.addEventListener("click", () => {
        document.getElementById("inputText").value = "";
    })
    sentences.appendChild(cleanWords)
}}


// Обработчки событый на кнопку Ввести количество слов

const showWords = document.getElementById("showWords")

if (showWords) {
    showWords.addEventListener("click", displayWords)
}


// Загрузка фразеологизмов

function loadIdioms () {
    let index = Math.floor(Math.random() * idioms.length)
    return idioms[index];
}


// Отображение фразеологизмов

function displayIdiom() {

    const button = document.getElementById("showIdiom");
    if (!button) return
    
    const displayForIdiom = document.getElementById("displayForIdiom")
    const placeForIdiom = document.getElementById("placeForIdiom")

    button.addEventListener("click", () => {
        let displayForIdiom = document.getElementById("displayForIdiom")

        if (!displayForIdiom) {
            displayForIdiom = document.createElement("div")
            displayForIdiom.id = "displayForIdiom"
            idiom.insertBefore(displayForIdiom, placeForIdiom)
        } else {
            displayForIdiom.innerHTML = ""
        }

        const result = loadIdioms();
        

        const itemIdiom = document.createElement("p")
        itemIdiom.innerHTML = `<strong>Идиома:</strong> ${result.idiom}`

        const itemTranslate = document.createElement("p")
        itemTranslate.innerHTML = `<strong>Перевод:</strong> ${result.translate}`

        const itemMeaning = document.createElement("p")
        itemMeaning.innerHTML = `<strong>Значение:</strong> ${result.meaning}`

        const itemExample = document.createElement("p")
        itemExample.innerHTML = `<strong>Пример:</strong> ${result.example}`

        const itemExampleTranslate = document.createElement("p")
        itemExampleTranslate.innerHTML = `<strong>Перевод примера:</strong> ${result.exampleTranslate}` 


        // Кнопка очистки textarea

        let cleanIdioms = document.getElementById("cleanIdioms")
        if (!cleanIdioms) {
            cleanIdioms = document.createElement("button")
            cleanIdioms.textContent = "Очистить"
            cleanIdioms.classList.add("cleanButtons")
            cleanIdioms.id = "cleanIdioms"
            cleanIdioms.addEventListener("click", () => {
                document.getElementById("inputText2").value = "";
            })
            document.getElementById("idiom").appendChild(cleanIdioms)
        }
        


        displayForIdiom.appendChild(itemIdiom)
        displayForIdiom.appendChild(itemTranslate)
        displayForIdiom.appendChild(itemMeaning)
        displayForIdiom.appendChild(itemExample)
        displayForIdiom.appendChild(itemExampleTranslate)
        

        })
    }

displayIdiom()




// Обработчик кнопки гамбургер меню
document.getElementById("showHide").addEventListener("click", () => {
    document.body.classList.toggle("body-hide");
    document.body.classList.toggle("body-show");
    document.getElementById("aside").classList.toggle("aside-hide");
    document.getElementById("aside").classList.toggle("aside-show");
});



// Программа показывания неправильных глаголов

const showVerb = document.getElementById("showVerb")
const verbs = document.getElementById("verbs")


function loadVerbs () {
    let index = Math.floor(Math.random() * irregularVerbs.length)
    return irregularVerbs[index];
}

function displayVerbs () {


    function triggerAnimation(element, className) {
        element.classList.remove(className);
        void element.offsetWidth; // Принудительный reflow
        element.classList.add(className);
    }

    function correctAnswer (input, key) {
        
        let p = document.createElement("p")
        p.textContent = result[key];
        p.className = key
        div.insertBefore(p, input)
        input.replaceWith(p)

    }

    function trueOrFalse (input, key) {

        if (input.dataset.checked) return;

        if (input.value.trim() === "") {
            return
        }

        if (input.value.trim().toLowerCase() === result[key].toLowerCase()) {
            input.dataset.checked = "true"
            correctAnswer(input, key)
            } else {
            triggerAnimation(input, "wrong")
        }


    }

    const result = loadVerbs();
    

    let div = document.querySelector(".screenVerb")

    if (!div) {
        div = document.createElement("div")
        div.className = "screenVerb"
        verbs.insertBefore(div, showVerb)
    }    

    div.innerHTML = "";
    
    let p = document.createElement("p")
    p.textContent = result.translation;
    div.appendChild(p)
    p.className = "translation"
    p.title = result.base

    let base = document.createElement("input")
    div.appendChild(base)
    base.className = "base-default"

    let past = document.createElement("input")
    div.appendChild(past)
    past.className = "past-default"

    let participle = document.createElement("input")
    div.appendChild(participle)
    participle.className = "participle-default";

    let helpButton = document.getElementById("help")

    if (!helpButton) {
        helpButton = document.createElement("button")
        helpButton.id = "help"
        helpButton.className = "helpButton"
        helpButton.textContent = "Не знаю"
        verbs.appendChild(helpButton)
    }

    helpButton.addEventListener("click", () => {
        if (!div.querySelector(".base")) {
            correctAnswer(base, "base")  
        }

        if (!div.querySelector(".past")) {
            correctAnswer(past, "past")  
        }

        if (!div.querySelector(".participle")) {
            correctAnswer(participle, "participle")  
        } 
    })


    base.addEventListener("blur", () => {
        trueOrFalse(base, "base")
    })

    base.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            trueOrFalse(base, "base")
        }
    })


    past.addEventListener("blur", () => {
        trueOrFalse(past, "past")
    })

    past.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            trueOrFalse(past, "past")
        }
    })



    participle.addEventListener("blur", () => {
        trueOrFalse(participle, "participle")
    })

    participle.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            trueOrFalse(participle, "participle")
        }
    })

}




if (showVerb) {
    showVerb.addEventListener ("click", () => {
        displayVerbs()
    })
}



function sections() {
    const turnSentences = document.getElementById("turnSentences")
    const turnIdioms = document.getElementById("turnIdioms")
    const turnVerbs = document.getElementById("turnVerbs")
    const sentences = document.getElementById("sentences")
    const idiom = document.getElementById("idiom")
    const verbs = document.getElementById("verbs")
    
    
    
    turnSentences.addEventListener("click", () => {
        sentences.classList.toggle("hidden")
        turnSentences.classList.toggle ("chosen")
    })

    turnIdioms.addEventListener("click", () => {
        idiom.classList.toggle("hidden")
        turnIdioms.classList.toggle ("chosen")
    })

    turnVerbs.addEventListener("click", () => {
        verbs.classList.toggle("hidden")
        turnVerbs.classList.toggle ("chosen")
    })
}


sections()


