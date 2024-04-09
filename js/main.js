
// Управление HTML интерфейсом
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("input");
const chatContainer = document.getElementById("chatContainer");

const user = {message:"", counter:0};
//буферная зона для сообщения от пользователя


// Готовые короткие предложения и фразы
import { greetingsWords as greetingsWords } from "./response.js";
import { greetingsMessages as greetingsMessages } from "./response.js";
//короткие приветствия и пожелания
import {negativeMessages as negativeMessages} from "./response.js";
import {negativeWords as negativeWords} from "./response.js";
//реакции на бранные слова и оскорбления
import {noIdeaMessages as noIdeaMessages} from "./response.js";
//короткие реакции на полное непонимание темы
import { questions as generalQuestions } from "./response.js";
import { answers as generalAnswers } from "./response.js";
//короткие ответы на вопросы


// Готовые длинные предложения и фразы
import {smalltalk as smalltalk} from "./response.js";
//small talk
import {beingOldMessages as beingOldMessages} from "./response.js";
import {beingOldForms as beingOldForms} from "./response.js";
//реакции на слова о старости
import{quotes as quotes} from "./response.js";
import { quotesAsking as quotesAsking } from "./response.js";
//длинные цитаты-наставления
import { negativePersonalMessages as negativePersonalMessages } from "./response.js";
//реакция на личные оскорбления

// Слова для конструирования разборных предложений
import {conjunction as conjunction} from "./response.js";
// союзны и союзные слова
import {agreeWords as agreeWords} from "./response.js";
//слова согласия, как короткие, так и отдельные фразы
import {disagreeWords as disagreeWords} from "./response.js";
//слова несогласия, как короткие, так и отдельные фразы
import { introductoryWords as introductoryWords } from "./response.js";
//вводные вступительные, заключительные и нейтральные фразы
import { binderPhrases as binderPhrases } from "./response.js";
//конструкции мосты, вроде "это есть" или "оно такое"
import { descriptionWords as descriptionWords } from "./response.js";
//прилагательные и наречия для выражения своего мнения


// Реакция на отдельные имена и обращения
import {alex as alex} from "./response.js";
import {alexResponse as alexResponse} from "./response.js";
//реакция на Алёшу
import { misha as misha } from "./response.js";
//реакции на Мишу
import { matt as matt } from "./response.js";
import { mattMessages as mattMessages } from "./response.js";
//реакция на Матвея
import { youWords as youWords } from "./response.js";
//обращение напрямую к боту
import { youPossessiveWords as youPossessiveWords } from "./response.js";
//притяжательный падеж к боту
import { meActionWords as meActionWords } from "./response.js";
//первое лицо для бота к глаголу
import { meStateWords as meStateWords } from "./response.js";
//первое лицо бота с глаголом быть


//Категории разных понятий
import {foodNames as foodNames} from "./categories.js";
//список названий различной еды
import {waterWords as waterWords} from "./categories.js";
//список слов про воду, океаны и т.д.
import {animalWords as animalWords} from "./categories.js";
import { loveWords as loveWords } from "./categories.js";
//слова о любви и чувствах

// Работа с фотографиями
import {pictureWords as pictureWords} from "./response.js";
import {pictureMessages as pictureMessages} from "./response.js";
//короткие реакции на слова о фотографиях
import {pictures as pictures} from "./pictures.js";
//альбом подгружаемых фотографий

//Извилины
import { gyrus as gyrus } from "./gyruses.js";


//функция для выведения рандомного числа из длины массива
function randomArrayNumber(arrayName){
	let lastIndex = arrayName.length;
	const randomNumber = Math.floor(Math.random()*lastIndex);
	return randomNumber;
}


//Вступительное сообщение 
setTimeout(() => {
chatbotSendMessage(smalltalk[randomArrayNumber(smalltalk)]);

}, 2000);

//добавляет в HTML уже готовое сообщение от бота
function chatbotSendMessage(messageText){
	const messageElement = document.createElement("div");
	messageElement.classList.add("botMessage");
	messageElement.classList.add("w-50");
	messageElement.classList.add("shadow-sm");

	messageElement.innerHTML =
	"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"

	messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700});
	chatContainer.appendChild(messageElement);
	//скроллим вниз по сообщениям
	chatContainer.scrollTop = chatContainer.scrollHeight;
}

//отправляет картинки в чат
function chatbotSendPictures(){
	const messageElement = document.createElement("div");

	messageElement.innerHTML =
	// "<img src='./img/Smurf-Village.jpg' style='width:50vw;height:auto'>"
	pictures[randomArrayNumber(pictures)];

	messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700});
	chatContainer.appendChild(messageElement);
	//скроллим вниз по сообщениям
	chatContainer.scrollTop = chatContainer.scrollHeight;
}

//добавляет в HTML уже готовое сообщение от пользователя
function sendMessage(messageText){

	const messageElement = document.createElement("div");
	messageElement.classList.add("userMessage");
	messageElement.classList.add("w-50");
	messageElement.classList.add("shadow-sm");

	messageElement.innerHTML =
	"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"

	messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700}); //анимация с появлением
	chatContainer.appendChild(messageElement);

	//скроллим вниз по сообщениям
	chatContainer.scrollTop = chatContainer.scrollHeight;

}

//добавляем кнопке функцию отправки готового сообщения от пользователя
sendBtn.addEventListener("click", clickSendBtn);

//сама функция отправки сообщения от пользователя
function clickSendBtn(){
	if(input.value == ""){
		alert("Little Smurf, looks like you've forgot to type a text")
	}else{
		let messageText =  input.value.trim();
		user.message = messageText;
		// input.value = messageText;
		sendMessage(messageText);
		input.value = "";

		processMessage();

	}
};

//ивент для нажатия на энтер, это 13 клавиша
//он поставлен на текстовое поле, а не на кнопку, как я изначально пытался

input.addEventListener("keypress", function(e){

	if(e.which == 13){
		clickSendBtn();
	}
});

function processMessage(){

	let marks = /[,.!?';:\s]+/; 
	// параметр, который фильтрует знаки через regexp
	let message = new String(user.message).toLowerCase().split(marks); //создает массив из сообщения
	
	const youMatch = youWords.filter(element => message.includes(element));
	const oldMatch = beingOldForms.filter(element => message.includes(element));
	const negativeMatch = negativeWords.filter(element => message.includes(element));
	const pictureMatch = pictureWords.filter(element => message.includes(element));
	const greetingsMatch = greetingsWords.filter(element => message.includes(element));
	const agreeMatch = agreeWords.filter(element => message.includes(element));
	const disagreeMatch = disagreeWords.filter(element => message.includes(element));
	const alexMatch = alex.filter(element => message.includes(element));
	const mattMatch = matt.filter(element => message.includes(element));
	const quoteMatch = quotesAsking.filter(element => message.includes(element));

	const questionsMatch = generalQuestions.filter(element => message.includes(element));

	//функция делает первую букву ответа заглавной
	function toUpperCaseAnswer(answer){
		return answer.charAt(0).toUpperCase() + answer.slice(1);
	}
	
	if(youMatch.length != 0 && negativeMatch.length != 0){
		setTimeout(() => {
			let answers =[
				`${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
				`Did you call me ${negativeMatch[0]}? ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`
			]
			
			let answer = answers[randomArrayNumber(answers)];

			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1000);
	}
	//оскорбили и назвали стариком
	else if(oldMatch.length != 0 && negativeMatch.length != 0){
		setTimeout(() => {
			let answer = `${beingOldMessages[randomArrayNumber(beingOldMessages)]} ${conjunction[randomArrayNumber(conjunction)]} ${negativeMessages[randomArrayNumber(negativeMessages)]} `;
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1000);
		
	}
	//назвали стариком
	else if(oldMatch.length != 0){		
		setTimeout(() => {
			let answer = beingOldMessages[randomArrayNumber(beingOldMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1000);
	}
	//негатив
	else if(negativeMatch.length != 0){
		setTimeout(() => {

			let answers =[
				`${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`You are ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}, ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}, ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`You sound like ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,
				`I'm gonna call you ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,
				`This is not okay, ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,
				`Very ${descriptionWords[randomArrayNumber(descriptionWords)]}, you ${foodNames[randomArrayNumber(foodNames)]}`,
				`Oh so ${descriptionWords[randomArrayNumber(descriptionWords)]}, ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`It's rude, you are ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,
				`You didn't offend me by using words like that, but remember ${quotes[randomArrayNumber(quotes)]}`,

			]

			let answer = answers[randomArrayNumber(answers)];
			
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1500);
	}

	//приветствие
	else if(greetingsMatch.length != 0){
		setTimeout(() => {
			let answer = greetingsMessages[randomArrayNumber(greetingsMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}

	//попросили показать фотки
	else if(pictureMatch.length != 0){
		setTimeout(() => {
			chatbotSendPictures()
		}, 1400);
		setTimeout(() => {
			let answer = pictureMessages[randomArrayNumber(pictureMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1800);
	} 
	else if(quoteMatch.length != 0){
		setTimeout(() => {

			let answers =[
				`${quotes[randomArrayNumber(quotes)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]} ${quotes[randomArrayNumber(quotes)]}`,
				`${introductoryWords[randomArrayNumber(introductoryWords)]} ${quotes[randomArrayNumber(quotes)]}`,
			
			]
			
			let answer = answers[randomArrayNumber(answers)];
			
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}
	
	//заговорили про Алёшу
	else if(alexMatch.length != 0){
		setTimeout(() => {

			let answers =[
				`${alexResponse[randomArrayNumber(alexResponse)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]} ${alexResponse[randomArrayNumber(alexResponse)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${binderPhrases[randomArrayNumber(binderPhrases)]} ${alexResponse[randomArrayNumber(alexResponse)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]} ${alexResponse[randomArrayNumber(alexResponse)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,

			]

			let answer = answers[randomArrayNumber(answers)];;

			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}
	//заговорили про Матвея
	else if(mattMatch.length !=0){
		setTimeout(() => {
			let answers = [
				`${mattMessages[randomArrayNumber(mattMessages)]}`,
				`Ohh ${toUpperCaseAnswer(mattMatch[0])}, I know him! He's ${descriptionWords[randomArrayNumber(descriptionWords)]}!`,
				`${toUpperCaseAnswer(mattMatch[0])}? Yeah, ${mattMessages[randomArrayNumber(mattMessages)]}`,
				`${toUpperCaseAnswer(mattMatch[0])} is ${descriptionWords[randomArrayNumber(descriptionWords)]}!`,
				`${toUpperCaseAnswer(mattMatch[0])} is ${descriptionWords[randomArrayNumber(descriptionWords)]} ${animalWords[randomArrayNumber(animalWords)]}!`,
				`This guy? Yeah, ${toUpperCaseAnswer(mattMatch[0])} is ${descriptionWords[randomArrayNumber(descriptionWords)]}!`,
				`I remember him! ${toUpperCaseAnswer(mattMatch[0])} is ${descriptionWords[randomArrayNumber(descriptionWords)]}!`,	
			]
			
			let answer = answers[randomArrayNumber(answers)];;
	
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}

	//согласие и несогласие
	else if(disagreeMatch.length != 0 || agreeMatch.length != 0){
		setTimeout(() => {

			let answers =[
				`${agreeWords[randomArrayNumber(agreeWords)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]} ${conjunction[randomArrayNumber(conjunction)]} ${disagreeWords[randomArrayNumber(disagreeWords)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]} ${conjunction[randomArrayNumber(conjunction)]} ${agreeWords[randomArrayNumber(agreeWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]} ${conjunction[randomArrayNumber(conjunction)]} ${quotes[randomArrayNumber(quotes)]} `,
				`${disagreeWords[randomArrayNumber(disagreeWords)]} ${conjunction[randomArrayNumber(conjunction)]} ${quotes[randomArrayNumber(quotes)]} `,
				`${agreeWords[randomArrayNumber(agreeWords)]} ${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]} ${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]} ${conjunction[randomArrayNumber(conjunction)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]} ${conjunction[randomArrayNumber(conjunction)]}`,
				`You sound like ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,

			
			]

			let answer = answers[randomArrayNumber(answers)];;

			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}

	else if(questionsMatch.length != 0){
		setTimeout(() => {

			let answers = [
				`${generalAnswers[randomArrayNumber(generalAnswers)]}`,
				`${generalAnswers[randomArrayNumber(generalAnswers)]} ${conjunction[randomArrayNumber(conjunction)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]} ${conjunction[randomArrayNumber(conjunction)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,

			]
			
			

			let answer = answers[randomArrayNumber(answers)];;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}

	//когда вообще ничего не понял
	else{
		setTimeout(() => {

			const answers = [
				`${introductoryWords[randomArrayNumber(introductoryWords)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]} ${conjunction[randomArrayNumber(conjunction)]}  ${quotes[randomArrayNumber(quotes)]}`,
				`${introductoryWords[randomArrayNumber(introductoryWords)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]} ${conjunction[randomArrayNumber(conjunction)]}  ${quotes[randomArrayNumber(quotes)]}`,
				`${introductoryWords[randomArrayNumber(introductoryWords)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]} ${conjunction[randomArrayNumber(conjunction)]}  ${quotes[randomArrayNumber(quotes)]}`,
				`${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${descriptionWords[randomArrayNumber(descriptionWords)]} ${quotes[randomArrayNumber(quotes)]}`,
				`You sound like ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]} ${smalltalk[randomArrayNumber(smalltalk)]}`,
			]

			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1500);
	}

}





