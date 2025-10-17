let fname= "";

function greet(){
    let greetParagraph = document.getElementById("greet");
    
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value; 

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    // get values from the form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give result based off of what they got
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong, Sweet tooth eh?";

    }
    else if (tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong, rotten dingling!";

    }
    else if (honeySelected){
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }

}

function trivia2() {
    let TriviaAnswer2 = document.getElementById("trivia2-answer");

    // get values from the form
    let AstronautSelected = document.getElementById("Astronaut").checked;
    let PizzaSelected = document.getElementById("pizza").checked;
    let MusicSelected = document.getElementById("Music").checked;

    // give result based off of what they said
    if (AstronautSelected) {
        TriviaAnswer2.innerHTML = fname + ", you are incorrect!";
        
    }
    else if (PizzaSelected){
        TriviaAnswer2.innerHTML = fname + ", you are incorrect!, I love pizza!";
    }
    else if (MusicSelected){
        TriviaAnswer2.innerHTML = fname + ", you are correct! i really like music";
    }
}
