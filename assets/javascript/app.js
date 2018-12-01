
function submitAnswers(){
    var total = 5;
    var score = 0;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

   
    for (var i=1; i<=total; i++){
        if(eval('q'+i) == null  || eval('q'+i) == ''){
            alert('You missed question '+i);
            return false; 
        }
    }

    var answers = ["b", "a", "d", "a", "d"];

    for (var n=1; n<=total; n++) {
        if (eval('q'+n) == answers[n-1]){
            score++;
        }
    }
    
    var results = document.getElementById('results');
    results.innerHTML = '<h4>You Score <span>'+score+'</span> out of <span>' +total+ '</span></h4>';
    alert('You scored '+score+ ' out of ' +total);

    return false; 
}

function countDown(secs, elem){
    var element = document.getElementById(elem);
    element.innerHTML="Time Remaining "+secs+ " seconds";
    if(secs < 1) {
        clearTimeout(timer); 
        element.innerHTML='<h2>Quiz Complete!</h2>';
    }
    secs --;
    var timer = setTimeout('countDown('+secs+',"'+elem+'")', 1000);
}
countDown (60, "timeRemaining");

