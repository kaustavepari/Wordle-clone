const container = document.getElementById("container")
const body = document.body

url="https://api.datamuse.com/words?sp=?????&max=1000"

const words = []
let letterPointer = 0
let randomWord=""
const hashMap = new Map();

async function fetchData(){
    try{
        const response = await fetch(url);
        const data = await response.json()
        data.forEach((object)=>{
            const word = object.word;
            words.push(word)
            hashMap.set(word.toUpperCase(), true);  // Store uppercase words for consistency
        });
          console.log(words)
          randomWord=pickRandomWord()
          console.log(randomWord)  // Pick random word after words have been fetched
    }
    catch(error){
        console.log(error)
    }
}
fetchData()


function pickRandomWord (){
    const numberOfWords = words.length
    const randomIndex = Math.floor(Math.random()*numberOfWords)
    
    return words[randomIndex];
}

const generateBoard = ()=>{
    for(let i=0; i<6; i++){
        const row = document.createElement("div")
        row.classList.add("row")
        for(let j=0; j<5; j++){
            const box = document.createElement("div")
            const boxText = document.createElement("p")
            boxText.id=`row=${i}col=${j}`
            box.id=`boxrow=${i}col=${j}`
            box.classList.add("box")
            boxText.className="boxText"
            box.appendChild(boxText)
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}

function isLetter(str) {
    return /^[a-zA-Z]$/.test(str);
}

function getWord(){
    const row = Math.floor(letterPointer/5);
    let word = "";
    for(let col=0; col<5; col++){
        const boxId = `row=${row-1}col=${col}`
        const box = document.getElementById(boxId)
        word += box.textContent;
        
    }
    return word;
}

function gameLogic(){
    if(letterPointer % 5 === 0){
        let currentWord = getWord();
        
        if(!hashMap.get(currentWord)){
            alert("Enter a valid word")
        }else{
            for(let i=0; i<5; i++){
                const row = Math.floor(letterPointer/5) - 1;
                const boxId = `boxrow=${row}col=${i}`
                const box = document.getElementById(boxId)
                currentWord=currentWord.toLowerCase()
                console.log(currentWord,randomWord)
                if(currentWord[i] === randomWord[i]){
                    box.style.backgroundColor = "darkgreen"
                }else if(randomWord.includes(currentWord[i])){
                    box.style.backgroundColor = "lightgreen"
                }
            }
            
        }
    }
}

body.addEventListener("keydown", (event)=>{
    if(letterPointer < 30){
        if(event.key === "Enter"){
            gameLogic()
        }

        if(isLetter(event.key)){
            const row = Math.floor(letterPointer/5);
            const col = letterPointer % 5
            const boxId = `row=${row}col=${col}`
            const boxText = document.getElementById(boxId);
            
            boxText.textContent = event.key.toUpperCase();
            letterPointer += 1;
        }else if(event.key === "Backspace"){
            if(letterPointer > 0){
                letterPointer -= 1;
                const row = Math.floor(letterPointer/5);
                const col = letterPointer % 5;
                const boxId = `row=${row}col=${col}`;
                const boxText = document.getElementById(boxId);
                boxText.textContent = "";
            }
        }
    }
})

generateBoard()
