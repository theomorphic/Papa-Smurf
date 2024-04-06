

const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("input");
const chatContainer = document.getElementById("chatContainer");

//буферная зона для сообщения от пользователя
const user = {message:"", counter:0};


import {beginnigMessages as beginnigMessages} from "./response.js";

import {firstDictionary as firstDictionary} from "./response.js";

import {beingOldMessages as beingOldMessages} from "./response.js";
import {beingOldForms as beingOldForms} from "./response.js";

import { negativeMessages as negativeMessages } from "./response.js";
import { negativeWords as negativeWords } from "./response.js";

import { conjunction as conjunction } from "./response.js";

import { noIdeaMessages as noIdeaMessages } from "./response.js";


const dictionary = ["lox", "plox", "old"];

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
	"<span>Papa Smurf: </span>"+
	"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"

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
	"<span>You: </span>"+
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
	
	const matchesDictionary = message.filter(element => firstDictionary.includes(element)); //находим общее между сообщением и словарем
	//это словарь совпадений

	const oldMatch = beingOldForms.filter(element => message.includes(element));
	const negativeMatch = negativeWords.filter(element => message.includes(element));

	//функция делает первую букву ответа заглавной
	function toUpperCaseAnswer(answer){
		return answer.charAt(0).toUpperCase() + answer.slice(1);
	}
	

	//назвали матом стариком
	if(oldMatch.length != 0 && negativeMatch.length != 0){
		setTimeout(() => {
			let answer = `${beingOldMessages[randomArrayNumber(beingOldMessages)]} ${conjunction[randomArrayNumber(conjunction)]} ${negativeMessages[randomArrayNumber(negativeMessages)]} `;
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1000);
		
	}
	//нзвали стариком
	else if(oldMatch.length != 0){		
		setTimeout(() => {
			let answer = beingOldMessages[randomArrayNumber(beingOldMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1000);
	}
	//негитив
	else if(negativeMatch.length != 0){
		setTimeout(() => {
			let answer = negativeMessages[randomArrayNumber(negativeMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1500);
	}

	//когда вообще ничего не понял
	else{
		setTimeout(() => {
			let answer = noIdeaMessages[randomArrayNumber(noIdeaMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}

}





