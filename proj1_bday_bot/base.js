function runChatbot() {

    const response = document.getElementById("response");

    const answer = document.getElementById("answer").value;

    response.innerText = "Your name is " + answer + " : ^ )";

    const question = document.getElementById("question");

    question.innerText = "When is your birthday?"

}

function runBirthdaybot() {

    const response = document.getElementById("birthdayResponse");

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const birthday = day + "/" + month + "/" + year;
    
    birthdayResponse.innerText = "Your birthday is: " + birthday + " ; ^ )";

}

// declare constant var that uses getElement func to fetch submitted form
const answerForm = document.getElementById("answerForm");

const birthdayForm = document.getElementById("birthdayForm");

//when submit happens, function is executed
answerForm.addEventListener("submit", function(event){

event.preventDefault();
runChatbot()

});



//when submit happens, function is executed
birthdayForm.addEventListener("submit", function(event){

event.preventDefault();
runBirthdaybot();

});

