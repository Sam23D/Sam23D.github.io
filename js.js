var appScreen = $("#screen");
var menu = $("#menu");
var row = $("#row");
var question = $("#question");
var remaining = $("#remaining");
var funnyQuote ="Alcohol... because no great story ever started with someone eating a salad";


var settingsButton = $("#settingsBtn");
var rulesButton = $("#rulesBtn");
var refreshQuestionsButton = $("#refreshQuestions");
var startButton = $("#startDrinking");

var settingsView = $("#settings");
var questionView = $("#cQuestion");
var rulesView = $("#rules");

var quoteNoneBtn = $("#quoteNone");
var quoteEzBtn = $("#quoteEasy");
var quoteMedBtn = $("#quoteMedium");
var quoteHardBtn = $("#quoteHard");

var dareNoneBtn = $("#dareNone");
var dareEzBtn = $("#dareEasy");
var dareMedBtn = $("#dareMedium");
var dareHardBtn = $("#dareHard");

var dareDificulty = 8;
var quotesDificulty = 13;
var currentQuoteTick = quotesDificulty;

//controllers
var random = function(){
  var listSize = auxQuestions.length
  return Math.floor( (Math.random() * listSize ) );
}
var getRemaining = function(){
  return auxQuestions.length
}
var getNextQuestion = function(){
  var dare = rollDare()
  if (dare.length !=0 ) {
    return '! ' + dare + ' !'
  }
  var quote = tickQuote()
  if (quote.length !=0 ) {
    return '"'+ quote+'"'
  }
  var question =  auxQuestions.splice( random(), 1 );
  if(question.length != 0){
      return question;
  }else {
    return funnyQuote
  }

}

var rollDare = function(){
   if (Math.floor( (Math.random() * dareDificulty ) ) == 0) {
     var position = Math.floor(Math.random() * drinkingDares.length);
     var dare =  drinkingDares[ position ]
     return dare
   }else {
     return [];
   }
}
var tickQuote = function(){
  currentQuoteTick -= 1;
  if (currentQuoteTick == -1) {
    currentQuoteTick = quotesDificulty;
    var quote = auxQuotes.splice(  Math.floor(Math.random() * auxQuotes.length), 1 )
    if (quote.length != 0) {
      return quote;
    }else {
      auxQuotes = JSON.parse(JSON.stringify( drinkingQuotes ));
    }
  }else {
    return [];
  }
}
var refreshQuestions = function(){
  auxQuestions = JSON.parse(JSON.stringify( questions ));
  console.log("refreshed");
}
//models
var drinkingDares = [
  "Drink a body shot from the person on your right",
  "Double shot!",
  "TRITRITRIPLESHOOOOOT",
  "Take one clothe of, sexy",
  "Take a shower",
  "Take a shot and do a cartwheel",
  "Take a shot, then spin around for 15 seconds, after that try to run to the door",
  "Moan as loud as you can",
  "Take a shot, balance a sweep for 15 seconds, if it falls take another shot",
  "Do a lap dance to the person on your right",
  "Choose a drinking mate and drink",
  "Take a shot and compliment the person to your right"

]
var drinkingQuotes = [
  "HAKUNA MA'VODKA",
  "You look like you could use a drink",
  "Life is better when you are drunk",
  "There is a time and place for alcohol. In my hand and now.",
  "I do not get drunk, i get awesome",
  "Alcohol may not solve your problems, but neither will water or milk",
  "Warning! drinking alcoholic beverages before pregnancy can cause pregnancy",
  "Keep calm and drink more",
  "Drink responsibly means dont spill it",
  "Drunk people, children and leggigs always tell the truth",
  "Don't worry, don't cry, drink vodka & fly",
  "Alcohol may be man's worst enemy, but the bible says love your enemy",
  "I don't have a drinking problem 'Cept when I can't get a drink",
  "According to chemistry, alcohol is a solution",
  "Let's get drunk and tell each other everything we're too afraid to say sober",
  "If you lose your shoe at midnight, you're drunk",
  "Looks like you have a lot on your mind. Do you wanna drink about it?",
  "Yoga class? I tought you said pour a glass",
  "I used to think drinking was bad for me. ....so I gave up thinking.",
  "Soup of the day, wisky with H2O croutons",
  "Drunk is when you feel sophisticated, but you can't pronounce it",
  "A party Without Alcohol is Just a Meeting"
]
var questions = [
  "How many people have you slept with?",
  "What is the most annoying thing that your roommate has ever done?",
  "What was the craziest thing you did on your freshman year?",
  "Would you ever have sex with one of your professors? If so, which one?",
  "Never have I ever blacked out from drinking too much",
  "What is the craziest thing that you have ever done while drunk?",
  "Who is the best roommate that you have ever had?",
  "Never have I ever ever had sex anywhere on campus",
  "Never have I ever ever had sex in a friends’s bed",
  "Did you smoke or drink before college? Or did you start when you got here?",
  "Never have I ever ever done a striptease",
  "Never have I ever slept with a friend's bf/gf/, xbf/xgf",
  "Never have I ever had sex in my parent’s bed",
  "Would you drop out of school if you were to win the lottery?",
  "What is the best party that you’ve ever been to?",
  "How many parties have you thrown at your house?",
  "Never have I ever had a threesome",
  "Never have I ever farted while having sex",
  "Never have I ever been walked in, while having sex",
  "Never have I ever have/wanted an orgy",
  "Have you used a toy while have sex?",
  "Have you used a sextoy?",
  "What is the longest you’ve had sex in one session?",
  "What is most amount of shots that you have taken in one night?",
  "Never have I ever thrown up in someone’s car",
  "Never have I ever had sex in a car",
  "Never have I ever wet bed from being too drunk",
  "What is the longest you have gone without sleep?",
  "What is the longest you’ve gone without sex?",
  "Never have I ever gotten an STD",
  "Never have I ever woken up to a stranger in bed",
  "What is the earliest you have ever started drinking in the day?",
  "Never have I ever spent my parent’s money on alcohol",
  "How many freshmen/virgins have you slept with?",
  "Never have I ever lied to my parents about being in classes, and where drinking instead?",
  "What is the most annoying thing your roommate does?",
  "Have you been in any fights while in school?",
  "Never have I ever done a sex train",
  "Never have I ever watched porn with someone else",
  "Never have I ever walked in on my parents",
  "Never have I ever had sex in front of other people",
  "Never have I ever wanted to have sex with anyone in this room",
  "Never have I ever taken someone's virginity",
  "Never have I ever had a friend turned into a fuck buddy",
  "Never have I ever had Skype sex",
  "Never have I ever slept with someone that you met the same night",
  "Never have I ever masturbated at someone else’s house",
  "Never have I ever flashed someone",
  "Never have I ever ended up naked and can’t remember why",
  "Never have I ever slept with someone i thought was ‘ugly’",
  "Do you like “doggy-style” or “missionary” better?",
  "What is your favorite sex position?",
  "Do you like drunk sex?",
  "What sexual position have you always wanted to try?",
  "What is the best sexual experience that you remember?",
  "What is the thing in sex you like the most",
  "What thing turns you on the most out of bed",
  "Never have I ever thought about someone else while having sex",
  "Do you enjoy giving/getting oral sex?",
  "What's the most sensitive part of your body?",
  "Never have I ever had phone sex",
  "Never have I ever had a wet dream",
  "Never have I ever had a 69",
  "Never have I ever filmed yourself having sex with someone",
  "Do you like gentle, sweet lovemaking or rough and aggressive sex?",
  "Never have I ever had sex in a public place? where",
  "Never have I ever had sex in front of a mirror? or want to",
  "Never have I ever fell asleep during sex",
  "Where do you like being kissed the most?",
  "What is your favourite thing to do in bed?",
  "Do you like shower sex?",
  "Would you try homosexual sex?",
  "Do you use a vibrator? How often?",
  "Never have I ever had sexual fantasies about a relative",
  "What is the biggest turn off for you?",
  "What turns you on most during sex?",
  "What’s the ultimate role play for you?",
  "Never have I ever had an accident with a condom bursting? What was the outcome",
  "What’s the most number of sexual positions you have had in one session?",
  "After sex, are you a sleeper or one who is ready for more?",
  "How ofter do you masturbate?",
  "Never have I ever gone without wearing underwear",
  "Where’s the craziest place you’ve had sex?",
  "Do you have any wild fantasies? say one",
  "Where is the most public place you have masturbated?",
  "What sounds do you make during sex?",
  "Do you use condoms when performing oral sex?",
  "Never have I ever been sexually attracted to a someone of the same sex",
  "How man times a week you think is good to have sex? Why?",
  "Never have I ever tried whipped cream during sex"
]

//we clone the element of questions into another variable incase we want to restart the questions
var auxQuestions = JSON.parse(JSON.stringify( questions ));
var auxQuotes = JSON.parse(JSON.stringify( drinkingQuotes ));


//rendering functions
var renderRemaining = function(){
  remaining.html( String(getRemaining()) + "/" + String(questions.length) )
}
var renderNextQuestion = function( ){
  question.html(getNextQuestion());
}
var renderView = function( view ){
  if( view == "rules"){
    settingsView.hide()
    questionView.hide()
    rulesView.show()

  }else if ( view == "settings" ) {
    settingsView.show()
    questionView.hide()
    rulesView.hide()
  }else if ( view == "start" ) {
    settingsView.hide()
    questionView.show()
    rulesView.hide()
  }
  renderRemaining();
}
var removeSelectedDare = function(){
  $(".activeDare").removeClass("activeDare")
}
var removeSelectedQuote = function(){
  $(".activeQuote").removeClass("activeQuote")
}
var selectDare = function(obj){
  obj.addClass("activeDare")
}
var selectQuote = function(obj){
  obj.addClass("activeQuote")
}
//events
$("#cQuestion").click(
  function(){
    renderNextQuestion();
    renderRemaining();
  }
);

settingsButton.click(
  function(){
    console.log("settings");
    renderView("settings")
  }
);
rulesButton.click(
  function(){
    renderView("rules")
  }
);
startButton.click(
  function(){
    renderView("start")
  }
);
dareNoneBtn.click(function(){
  dareDificulty = 100000;
  removeSelectedDare();
  selectDare(dareNoneBtn);
});
dareEzBtn.click(function(){
  dareDificulty = 7;
  removeSelectedDare();
  selectDare(dareEzBtn);
});
dareMedBtn.click(function(){
  dareDificulty = 5;
  removeSelectedDare();
  selectDare(dareMedBtn);
});
dareHardBtn.click(function(){
  dareDificulty = 4;
  removeSelectedDare();
  selectDare(dareHardBtn);
});
quoteNoneBtn.click(function(){
  quotesDificulty = 10000;
  removeSelectedQuote();
  selectQuote(quoteNoneBtn);
});
quoteEzBtn.click(function(){
  quotesDificulty = 9;
  removeSelectedQuote();
  selectQuote(quoteEzBtn);
});
quoteMedBtn.click(function(){
  quotesDificulty = 7;
  removeSelectedQuote();
  selectQuote(quoteMedBtn);
});
quoteHardBtn.click(function(){
  quotesDificulty = 4;
  removeSelectedQuote();
  selectQuote(quoteHardBtn);
});
refreshQuestionsButton.click(function(){
  refreshQuestions();
  renderView("rules");
});

//initilization
// screen size setting
$('body').height( String($(window).height(  )) + "px" );
renderNextQuestion();
renderRemaining();
