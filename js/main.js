

const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("input");
const chatContainer = document.getElementById("chatContainer");

//буферная зона для сообщения от пользователя
const user = {message:"", counter:0};

import {beginnigMessages as beginnigMessages} from "./response.js";

import {beingOldMessages as beingOldMessages} from "./response.js";
import {beingOldForms as beingOldForms} from "./response.js";

import {negativeMessages as negativeMessages} from "./response.js";
import {negativeWords as negativeWords} from "./response.js";

import {conjunction as conjunction} from "./response.js";

import {noIdeaMessages as noIdeaMessages} from "./response.js";

import {pictureWords as pictureWords} from "./response.js";
import {pictureMessages as pictureMessages} from "./response.js";
import { pictures as pictures } from "./pictures.js";

import { greetingsWords as greetingsWords } from "./response.js";
import { greetingsMessages as greetingsMessages } from "./response.js";

import {agreeWords as agreeWords} from "./response.js";
import {disagreeWords as disagreeWords} from "./response.js";

import{quotes as quotes} from "./response.js";

import { introductoryWords as introductoryWords } from "./response.js";
import { binderPhrases as binderPhrases } from "./response.js";
import { descriptionWords as descriptionWords } from "./response.js";


//функция для выведения рандомного числа из длины массива
function randomArrayNumber(arrayName){
	let lastIndex = arrayName.length;
	const randomNumber = Math.floor(Math.random()*lastIndex);
	return randomNumber;
}


//Вступительное сообщение 
setTimeout(() => {
chatbotSendMessage(beginnigMessages[randomArrayNumber(beginnigMessages)])

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

	let marks = /[,.!?';:\s]+/; // параметр, который эти знаки через regexp
	let message = new String(user.message).toLowerCase().split(marks); //создает массив из сообщения
	
	const oldMatch = beingOldForms.filter(element => message.includes(element));
	const negativeMatch = negativeWords.filter(element => message.includes(element));
	const pictureMatch = pictureWords.filter(element => message.includes(element));
	const greetingsMatch = greetingsWords.filter(element => message.includes(element));
	const agreeMatch = agreeWords.filter(element => message.includes(element));
	const disagreeMatch = disagreeWords.filter(element => message.includes(element));

	//функция делает первую букву ответа заглавной
	function toUpperCaseAnswer(answer){
		return answer.charAt(0).toUpperCase() + answer.slice(1);
	}
	

	//оскорбили и назвали стариком
	if(oldMatch.length != 0 && negativeMatch.length != 0){
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
			let answer = negativeMessages[randomArrayNumber(negativeMessages)];
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
			
			]

			let answer = answers[randomArrayNumber(answers)];;

			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
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
				`${introductoryWords[randomArrayNumber(introductoryWords)]}`,
				
			]

			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1500);
	}

}





