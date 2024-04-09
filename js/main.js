
// УПРАВЛЕНИЕ HTML ИНТЕРФЕЙСОМ
	const sendBtn = document.getElementById("sendBtn");
	const input = document.getElementById("input");
	const chatContainer = document.getElementById("chatContainer");

	const user = {message:"", counter:0};
	//буферная зона для сообщения от пользователя


// КОРОТКИЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
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


// ДЛИННЫЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
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


// СЛОВА ДЛЯ КОНСТРУИРОВАНИЯ РАЗБОРНЫХ ПРЕДЛОЖЕНИЙ
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


// РЕАКЦИЯ НА ОТДЕЛЬНЫЕ ИМЕНА И ОБРАЩЕНИЯ
	import { unknownNames as unknownNames } from "./response.js";
	import { unknownNamesMessages as unknownNamesMessages } from "./response.js";
	//список неизвестных имён и реакций на них
	import {alex as alex} from "./files/alex.js";
	import {alexResponse as alexResponse} from "./files/alex.js";
	//реакция на Алёшу
	import { alexLang as alexLang } from "./files/alex.js";
	//Языки Алёши
	import { misha as misha } from "./files/misha.js";
	import { mishaMessages as mishaMessages } from "./files/misha.js";
	//реакции на Мишу
	import { matt as matt } from "./files/matt.js";
	import { mattMessages as mattMessages } from "./files/matt.js";
	import {mattAnimeNames as mattAnimeNames } from "./files/matt.js";
	import { mishaActivities as mishaActivities } from "./files/misha.js";
	//реакция на Матвея
	import { yarman as yarman } from "./files/yarman.js";
	import { yarmanMessages as yarmanMessages } from "./files/yarman.js";
	import { yarmanActivities as yarmanActivities } from "./files/yarman.js";
	//реакция на Ярика
	import { youWords as youWords } from "./response.js";
	//обращение напрямую к боту
	import { youPossessiveWords as youPossessiveWords } from "./response.js";
	//притяжательный падеж к боту
	import { meActionWords as meActionWords } from "./response.js";
	//первое лицо для бота к глаголу
	import { meStateWords as meStateWords } from "./response.js";
	//первое лицо бота с глаголом быть


// КАТЕГОРИИ РАЗНЫХ ПОНЯТИЙ
	import {foodNames as foodNames, movieTitles} from "./categories.js";
	//список названий различной еды
	import {waterWords as waterWords} from "./categories.js";
	//список слов про воду, океаны и т.д.
	import {animalWords as animalWords} from "./categories.js";
	import { loveWords as loveWords } from "./categories.js";
	//слова о любви и чувствах


// РАБОТА С ФОТОГРАФИЯМИ
	import {pictureWords as pictureWords} from "./response.js";
	import {pictureMessages as pictureMessages} from "./response.js";
	//короткие реакции на слова о фотографиях
	import {pictures as pictures} from "./pictures.js";
	//альбом подгружаемых фотографий


//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
	function randomArrayNumber(arrayName){
		let lastIndex = arrayName.length;
		const randomNumber = Math.floor(Math.random()*lastIndex);
		return randomNumber;
	}
	//функция для выведения рандомного числа из длины массива
	function toUpperCaseAnswer(answer){
		return answer.charAt(0).toUpperCase() + answer.slice(1);
	}
	//функция делает первую букву ответа заглавной

	
						// АЛГОРИТМ РАБОТЫ ЧАТ БОТА\\

//Вступительное сообщение 
	setTimeout(() => {
	chatbotSendMessage(smalltalk[randomArrayNumber(smalltalk)]);

	}, 2000);

//Добавление в HTML уже готовое сообщение от бота
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

//Добавление в HTML уже готовое сообщение от пользователя
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

//Отправка картинки в чат
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


//РАБОТА СО СПОСОБАМИ ОТПРАВКИ СООБЩЕНИЯ

	sendBtn.addEventListener("click", clickSendBtn);
	//добавляем кнопке функцию отправки готового сообщения от пользователя

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
	//сама функция отправки сообщения от пользователя



	input.addEventListener("keypress", function(e){

		if(e.which == 13){
			clickSendBtn();
		}
	});
	//ивент для нажатия на энтер, это 13 клавиша
	//он поставлен на текстовое поле, а не на кнопку, как я изначально пытался

//ГЕНЕРАЦИЯ СООБЩЕНИЯ ЧАТ БОТА: ИЗВИЛИНЫ

	function processMessage(){

		//ФИЛЬТР ДЛЯ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ

		let marks = /[,.!?';:\s]+/; 
		// параметр, который фильтрует знаки через regexp
		let message = new String(user.message).toLowerCase().split(marks); 
		//создает массив из сообщения
		
		//ТОЧКИ СОПРИКОСНОВЕНИЯ, СОВПАДЕНИЯ С ИЗВЕСТНЫМИ ДАННЫМИ
		
		//оскорбления, старость,грубость	
		const youMatch = youWords.filter(element => message.includes(element));
		const oldMatch = beingOldForms.filter(element => message.includes(element));
		const negativeMatch = negativeWords.filter(element => message.includes(element));
		
		//приветствие и прощание
		const greetingsMatch = greetingsWords.filter(element => message.includes(element));

		//реакция на имена
		const unknownNameMatch = unknownNames.filter(element => message.includes(element));
		const mishaMatch = misha.filter(element => message.includes(element));
		const alexMatch = alex.filter(element => message.includes(element));
		const mattMatch = matt.filter(element => message.includes(element));
		const yarmanMatch = yarman.filter(element => message.includes(element));

		//короткие ответы: согласие и отрицание
		const agreeMatch = agreeWords.filter(element => message.includes(element));
		const disagreeMatch = disagreeWords.filter(element => message.includes(element));

		//вопросы
		const questionsMatch = generalQuestions.filter(element => message.includes(element));

		//фотографии и мотивационные цитаты
		const pictureMatch = pictureWords.filter(element => message.includes(element));
		const quoteMatch = quotesAsking.filter(element => message.includes(element));


		//ОСКОРБЛЕНИЯ, СТАРОСТЬ,ГРУБОСТЬ

			//лично оскорбили
			if(youMatch.length != 0 && negativeMatch.length != 0){
				setTimeout(() => {
					let answers =[
						`${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`You said to me "${negativeMatch[0]}"? ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`${disagreeWords[randomArrayNumber(disagreeWords)]}, you said to me "${negativeMatch[0]}"? ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`${negativeMatch[0]}, huh? ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`So "${negativeMatch[0]}", right? That's how you talk to me. ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						
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

		//ПРИВЕТСТВИЕ И ПРОЩАНИЕ

			//приветствие
			else if(greetingsMatch.length != 0){
				setTimeout(() => {
					let answer = greetingsMessages[randomArrayNumber(greetingsMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1200);
			}	
		
		//РЕАКЦИЯ НА ИМЕНА

			//назвали неизвестное имя из списка
			else if(unknownNameMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${toUpperCaseAnswer(unknownNameMatch[0])}! This name is ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`Oh it's ${toUpperCaseAnswer(unknownNameMatch[0])}. ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
						`${toUpperCaseAnswer(unknownNameMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}

			//заговорили про Мишу
			else if(mishaMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${toUpperCaseAnswer(mishaMatch[0])}? ${mishaMessages[randomArrayNumber(mishaMessages)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`${mishaMessages[randomArrayNumber(mishaMessages)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`Ohh, that Smurf. "${movieTitles[randomArrayNumber(movieTitles)]}" is his favorite movie, as I remember`,
						`Well, ${toUpperCaseAnswer(mishaMatch[0])} likes ${mishaActivities[randomArrayNumber(mishaActivities)]}`,
						`${toUpperCaseAnswer(mishaMatch[0])} loves ${mishaActivities[randomArrayNumber(mishaActivities)]}`,
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
						`${alexMatch[0]}? He loves ${alexLang[randomArrayNumber(alexLang)]}`,
						`Ohh ${toUpperCaseAnswer(alexMatch[0])}? That guy speaks ${alexLang[randomArrayNumber(alexLang)]}`,
						`You said ${toUpperCaseAnswer(alexMatch[0])}? He is ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`Yeah, ${toUpperCaseAnswer(alexMatch[0])}, what about him? I think he's ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`Oh I know him. His favorite movie, if I remember correctly is "${movieTitles[randomArrayNumber(movieTitles)]}"`,
						`That Smurf. "${movieTitles[randomArrayNumber(movieTitles)]}" is his favorite movie, right?`,
						`${toUpperCaseAnswer(alexMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
					
					]

					let answer = answers[randomArrayNumber(answers)];
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
						`${toUpperCaseAnswer(mattMatch[0])} watches ${mattAnimeNames[randomArrayNumber(mattAnimeNames)]}`,
						`I remember him! ${toUpperCaseAnswer(mattMatch[0])} is ${descriptionWords[randomArrayNumber(descriptionWords)]}!`,	
						`${toUpperCaseAnswer(mattMatch[0])} likes so much ${mattAnimeNames[randomArrayNumber(mattAnimeNames)]}`,
						`Oh I know him. His favorite movie, if I remember correctly is "${movieTitles[randomArrayNumber(movieTitles)]}"`,
						`${toUpperCaseAnswer(mattMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
					]
					
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1300);
			}
			//заговорили про Ярика
			else if(yarmanMatch.length !=0){
				setTimeout(() => {
					let answers = [
						`${toUpperCaseAnswer(yarmanMatch[0])} is ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`${toUpperCaseAnswer(yarmanMatch[0])} likes ${yarmanActivities[randomArrayNumber(yarmanActivities)]}`,
						`That smurf loves ${yarmanActivities[randomArrayNumber(yarmanActivities)]}`,
						`${yarmanMessages[randomArrayNumber(yarmanMessages)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`${toUpperCaseAnswer(yarmanMatch[0])} is so ${descriptionWords[randomArrayNumber(descriptionWords)]}, his favorite movie must be "${movieTitles[randomArrayNumber(movieTitles)]}"`,
						`${toUpperCaseAnswer(yarmanMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
					]
					
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1300);
			}

		//КОРОТКИЕ ОТВЕТЫ: СОГЛАСИЕ И ОТРИЦАНИЕ

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

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}

		//ВОПРОСЫ

			else if(questionsMatch.length != 0){
				setTimeout(() => {

					let answers = [
						`${generalAnswers[randomArrayNumber(generalAnswers)]}`,
						`${generalAnswers[randomArrayNumber(generalAnswers)]} ${conjunction[randomArrayNumber(conjunction)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]} ${conjunction[randomArrayNumber(conjunction)]} ${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,

					]
					
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1200);
			}

		//ФОТОГРАФИИ И МОТИВАЦИОННЫЕ ЦИТАТЫ

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
			//умные цитаты и мотивация
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

		//АБСОЛЮТНОЕ НЕПОНИМАНИЕ

			else{
				setTimeout(() => {

					const answers = [
						`${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]} ${conjunction[randomArrayNumber(conjunction)]}  ${quotes[randomArrayNumber(quotes)]}`,
						`${binderPhrases[randomArrayNumber(binderPhrases)]} ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${toUpperCaseAnswer(quotes[randomArrayNumber(quotes)])}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${smalltalk[randomArrayNumber(smalltalk)]}`,
						`${binderPhrases[randomArrayNumber(binderPhrases)]}, ${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${smalltalk[randomArrayNumber(smalltalk)]}`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1500);
			}

	}





