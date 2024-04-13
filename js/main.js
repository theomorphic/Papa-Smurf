
// УПРАВЛЕНИЕ HTML ИНТЕРФЕЙСОМ
	const sendBtn = document.getElementById("sendBtn");
	const input = document.getElementById("input");
	const chatContainer = document.getElementById("chatContainer");
	const rulesBtn = document.getElementById("rulesBtn");

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
	import { positiveDescriptionWords as positiveDescriptionWords } from "./response.js";


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
	import { thomas as thomas } from "./files/thomas.js";
	import { thomasMessages as thomasMessages } from "./files/thomas.js";
	//реакция на Томми Лавандеру
	import { moose as moose } from "./files/moose.js";
	import { mooseMessages as mooseMessages } from "./files/moose.js";
	//реакция на Лося

	import { youWords as youWords } from "./response.js";
	//обращение напрямую к боту
	import { youPossessiveWords as youPossessiveWords } from "./response.js";
	//притяжательный падеж к боту
	import { meActionWords as meActionWords } from "./response.js";
	//первое лицо для бота к глаголу
	import { meStateWords as meStateWords } from "./response.js";
	//первое лицо бота с глаголом быть


// КАТЕГОРИИ РАЗНЫХ ПОНЯТИЙ
	import {foodNames as foodNames} from "./categories.js";
	import { foodDescription as foodDescription } from "./categories.js";
	import { foodQuestions as foodQuestions } from "./categories.js";
	//описание еды, реакции и вопросы
	import {waterWords as waterWords} from "./categories.js";
	import { waterQuestions as waterQuestions } from "./categories.js";
	//список слов про воду, океаны и т.д.
	import {animalWords as animalWords} from "./categories.js";
	import {animalDescription as animalDescription} from "./categories.js";
	import { animalQuestions as animalQuestions } from "./categories.js";
	//описание животных
	import { loveWords as loveWords } from "./categories.js";
	import { loveDescription as loveDescription } from "./categories.js";
	import { loveQuestions as loveQuestions } from "./categories.js";
	//описание любви и чувств
	import { natureWords as natureWords } from "./categories.js";
	import { natureDescription as natureDescription } from "./categories.js";
	import { natureQuestions as natureQuestions } from "./categories.js";
	//описание природы
	import { musicGenres as musicGenres } from "./categories.js";
	import { musicDescription as musicDescription } from "./categories.js";
	import { musicQuestions as musicQuestions } from "./categories.js";
	//музыкальные жанры и реакция на них
	import { langNames as langNames } from "./categories.js";
	import { langNamesMessages as langNamesMessages } from "./categories.js";
	import { langNamesQuestions as langNamesQuestions } from "./categories.js";
	//языки и лингвистика
	import { movieTitles as movieTitles } from "./categories.js";
	import { movieWords as movieWords } from "./categories.js";

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
	console.warn("Papa Smurf is monitoring the console. Don't be naughty!")

	}, 1500);

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


//РАБОТА СО ИНТЕРФЕЙСОМ

	sendBtn.addEventListener("click", clickSendBtn);
	//добавляем кнопке функцию отправки готового сообщения от пользователя

	function clickSendBtn(){
		if(input.value == ""){
			alert("Little Smurf, looks like you've forgot to type a text")
			rulesBtn.style.display = "";
		}else{
			let messageText =  input.value.trim();
			user.message = messageText;
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

	rulesBtn.addEventListener("click", showRules);
	//добавляем иконке правил функционал

	function showRules(){
		let listOfRules = document.getElementById("rulesList");
		listOfRules.classList.toggle("active")
	}
	//функция показа списка правил


//ГЕНЕРАЦИЯ СООБЩЕНИЯ ЧАТ БОТА: ИЗВИЛИНЫ

	function processTopics(topic, description, question){

		let answers = [
				`About ${topic}, I find it pretty ${description}`,
				`${topic}? Yeah, it's ${description} for my taste. ${question}`,
				`Are you talking about ${topic}? That is so ${description}. ${question}`,
				`Funny, you mentioned ${topic}, I see it as something ${description}`,
				`${description}. You think it applies to ${topic}?`,
				`You know what? ${toUpperCaseAnswer(topic)} is just ${description}. I needed to say it`,
				`In my perspective, ${topic} is ${description}. ${question}`,
				`To me, ${topic} is simply ${description}. Do you agree?`,
				`It's my belief that ${topic} is ${description}`,
				`${topic} is simply ${description} in my eyes`,
				`Personally, I find ${topic} ${description}`,
				`One adjective I would use for ${topic} is ${description}`,
				`From my standpoint, ${topic} is ${description}. ${question}`,
				`I perceive ${topic} as ${description}. What about you?`,
				`Expressing my opinion about ${topic}, I would describe it as ${description}`,
				`I find ${topic} to be ${description}. ${question}`,
				`To me, ${topic} appears ${description}. ${question}`,
				`It seems to me that ${topic} is ${description}. It should be ${description}`,
				`When it comes to ${topic}, I see it as ${description}. ${question}`,
				`My take on ${topic} is ${description}. ${question}`,
				`My stance on ${topic} is ${description}, agree?`,
				`I reckon ${topic} is ${description}. ${question}`,
				`It strikes me that ${topic} is ${description}, right? ${question}`,
				`I regard ${topic} as ${description}. ${question}`,
				`I opine that ${topic} is ${description}. What do you think here?`,
				`In my estimation, ${topic} is ${description}. ${question}`,
				`As far as I'm concerned, ${topic} is ${description}. ${question}`,
				`My position on ${topic} is that it is ${description}. ${question}`,
				`In my judgment, ${topic} is ${description}. ${question}`,
				`My perspective leads me to see ${topic} as ${description}`,
				`My sense of ${topic} is ${description}. ${question}`,
				`I understand ${topic} as ${description}. ${question}`,
				`I am convinced that ${topic} is ${description}. ${question}`,
				`It is my belief that ${topic} is ${description}. ${question}`,
				`I interpret ${topic} as something ${description}. ${question}`,
				`To my mind, ${topic} falls under the category of ${description}`,
				`I categorize ${topic} as ${description}. And I'm not joking here`,
				`In a nutshell, ${topic} is ${description}. ${question}`,
				`It is my considered view that ${topic} is ${description}. ${question}`,
				`It is my belief that ${topic} can be defined as ${description}. ${question}`,
				`I put ${topic} in the category of ${description}. ${question}`,
				`My considered opinion is that ${topic} is ${description}. But I'm not sure. ${question}`,


			]

		let answer = answers[randomArrayNumber(answers)];
		return answer;
	}
	//функция формирования мнения по определенной тематике

	function discussingMovies(movie, opinion){

		let answers = [
			`Hmm, I found ${movie} quite intriguing.`,
			`I must say, ${movie} was simply fantastic!`,
			`I think ${movie} deserves all the awards.`,
			`I was pleasantly surprised by ${movie}.`,
			`I didn't expect the ${movie} to be that good.`,
			`${movie} really touched my heart.`,
			`I believe everyone should watch ${movie}.`,
			`What an emotional journey that ${movie} was.`,
			`I'm still thinking about that ${movie}. It's ${opinion}.`,
			`The actors in this ${movie} were exceptional.`,
			`The soundtrack of ${movie} was breathtaking.`,
			`I was completely captivated by ${movie}.`,
			`What an outstanding performance in ${movie}, ${opinion}!`,
			`The visual effects in ${movie} were mind-blowing.`,
			`I laughed and cried throughout ${movie}.`,
			`${movie} is a must-watch for everyone.`,
			`I can't stop recommending ${opinion} ${movie} to everyone!`,
			`The storyline of ${movie} was so well-crafted.`,
			`The dialogues in ${movie} were so powerful.`,
			`What a masterpiece ${movie} is!`,
			`I was on the edge of my seat watching ${movie}.`,
			`The cinematography in ${movie} was stunning.`,
			`After watching ${movie}, I feel so inspired.`,
			`I can't get over how ${opinion} ${movie} was.`,
			`The message conveyed in ${movie} was profound.`,
			`I want to relive the experience of ${movie}.`,
			`The cast of ${movie} was perfectly chosen.`,
			`I have a newfound appreciation for ${movie}.`,
			`I'll always remember the impact of ${movie}.`,
			`The setting of ${movie} was so ${opinion}.`,
			`The climax of ${movie} was so ${opinion}.`,
			`I'm in awe of the creativity in ${movie}.`,
			`I couldn't take my eyes off the screen during ${movie}.`,
			`Every scene in ${movie} was filled with emotion.`,
			`The transitions in ${movie} were seamless.`,
			`The ending of ${movie} left me speechless.`,
			`My favorite part of ${movie} was ${opinion}`,
			`I was so invested in the characters of ${movie}.`,
			`The humor in ${movie} was well-placed.`,
			`The suspense in ${movie} kept me hooked.`,
			`I connected with the themes of ${movie} deeply.`,
			`I wish I could watch ${movie} for the first time again.`,
			`The sound design of ${movie} was superb.`,
			`${movie} will definitely stay with me for a long time.`,
			`I felt a range of emotions while watching ${movie}, ${opinion}!`,
			`I have to say, that ${movie} was truly unforgettable.`,
		]

		let answer = answers[randomArrayNumber(answers)];
		return answer;
	}
	//функция для выражения мнения про кино

	function processMessage(){

		//ФИЛЬТР ДЛЯ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ

		let marks = /[,.!?';:\s]+/; 
		// параметр, который фильтрует знаки через regexp
		let message = new String(user.message).toLowerCase().split(marks); 
		//создает массив из сообщения
		
		//ТОЧКИ СОПРИКОСНОВЕНИЯ, СОВПАДЕНИЯ С ИЗВЕСТНЫМИ ДАННЫМИ

		//личный счёт
		const youMatch = youWords.filter(element => message.includes(element));
		const youPossessiveMatch = youPossessiveWords.filter(element => message.includes(element));

		//оскорбления, старость,грубость	
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
		const tommyMatch = thomas.filter(element => message.includes(element));
		const mooseMatch = moose.filter(element => message.includes(element));

		//короткие ответы: согласие и отрицание
		const agreeMatch = agreeWords.filter(element => message.includes(element));
		const disagreeMatch = disagreeWords.filter(element => message.includes(element));

		//категории познаний
		const waterMatch = waterWords.filter(element => message.includes(element));
		const foodMatch = foodNames.filter(element => message.includes(element));
		const animalMatch = animalWords.filter(element => message.includes(element));
		const loveMatch = loveWords.filter(element => message.includes(element));
		const natureMatch = natureWords.filter(element => message.includes(element));
		const langMatch = langNames.filter(element => message.includes(element));

		//искусство: кино, музыка
		const musicMatch = musicGenres.filter(element => message.includes(element));
		const movieWordsMatch = movieWords.filter(element => message.includes(element));

		//фотографии и мотивационные цитаты
		const pictureMatch = pictureWords.filter(element => message.includes(element));
		const quoteMatch = quotesAsking.filter(element => message.includes(element));

		//вопросы
		const questionsMatch = generalQuestions.filter(element => message.includes(element));



		//ОСКОРБЛЕНИЯ, СТАРОСТЬ,ГРУБОСТЬ

			//лично оскорбили
			if(youMatch.length != 0 && negativeMatch.length != 0){
				setTimeout(() => {
					let answers =[
						`${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`Did you call me this bad word? ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`${disagreeWords[randomArrayNumber(disagreeWords)]}, you called me such a disgusting word. ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`Don't say that to me!${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						`Dear Smurf, this word is too bad for you. That's how you talk to elders? ${negativePersonalMessages[randomArrayNumber(negativePersonalMessages)]}`,
						
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
			//просто сказали слово "rude" лично Папе
			else if(message.includes("rude") && youMatch.length != 0){
				setTimeout(() => {

					let answer = `${disagreeWords[randomArrayNumber(disagreeWords)]}, don't call me rude. It's actually rude of you!`
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1400);
			}
			//просто сказали "rude"
			else if(message.includes("rude")){
				setTimeout(() => {

					let answer = `${disagreeWords[randomArrayNumber(disagreeWords)]}, rudness is against smurfness!`
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1400);
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
						`${toUpperCaseAnswer(unknownNameMatch[0])}! This name is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`Oh it's ${toUpperCaseAnswer(unknownNameMatch[0])}. ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
						`${toUpperCaseAnswer(unknownNameMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
						`${toUpperCaseAnswer(unknownNameMatch[0])}? You sound more like ${toUpperCaseAnswer(unknownNames[randomArrayNumber(unknownNames)])}. Don't take it to heart, Papa Smurf could be wrong`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}

			//заговорили про Мишу
			else if(mishaMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${toUpperCaseAnswer(mishaMatch[0])}? ${mishaMessages[randomArrayNumber(mishaMessages)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`${mishaMessages[randomArrayNumber(mishaMessages)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
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
						`${alexResponse[randomArrayNumber(alexResponse)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`${agreeWords[randomArrayNumber(agreeWords)]} ${alexResponse[randomArrayNumber(alexResponse)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`${alexMatch[0]}? He loves ${alexLang[randomArrayNumber(alexLang)]}`,
						`Ohh ${toUpperCaseAnswer(alexMatch[0])}? That guy speaks ${alexLang[randomArrayNumber(alexLang)]}`,
						`You said ${toUpperCaseAnswer(alexMatch[0])}? He is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`Yeah, ${toUpperCaseAnswer(alexMatch[0])}, what about him? I think he's ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`Oh I know him. His favorite movie, if I remember correctly is "${movieTitles[randomArrayNumber(movieTitles)]}"`,
						`That Smurf. "${movieTitles[randomArrayNumber(movieTitles)]}" is his favorite movie, right?`,
						`${toUpperCaseAnswer(alexMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
						`${toUpperCaseAnswer(alexMatch[0])}? ${musicQuestions[randomArrayNumber(musicQuestions)]}`,
						`He likes westerns a lot. Also he's Latvian`,
						
					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1200);

			}

			//заговорили про Лося
			else if(mooseMatch.length != 0){
				setTimeout(() => {

					let answer = mooseMessages[randomArrayNumber(mooseMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1200);
			}
			//заговорили про Матвея
			else if(mattMatch.length !=0){
				setTimeout(() => {
					let answers = [
						`${mattMessages[randomArrayNumber(mattMessages)]}`,
						`Ohh ${toUpperCaseAnswer(mattMatch[0])}, I know him! He's ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}!`,
						`${toUpperCaseAnswer(mattMatch[0])}? Yeah, ${mattMessages[randomArrayNumber(mattMessages)]}`,
						`${toUpperCaseAnswer(mattMatch[0])} is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}!`,
						`${toUpperCaseAnswer(mattMatch[0])} is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}!`,
						`This guy? Yeah, ${toUpperCaseAnswer(mattMatch[0])} is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}!`,
						`${toUpperCaseAnswer(mattMatch[0])} watches ${mattAnimeNames[randomArrayNumber(mattAnimeNames)]}`,
						`I remember him! ${toUpperCaseAnswer(mattMatch[0])} is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}!`,	
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
						`${toUpperCaseAnswer(yarmanMatch[0])} is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`${toUpperCaseAnswer(yarmanMatch[0])} likes ${yarmanActivities[randomArrayNumber(yarmanActivities)]}`,
						`That smurf loves ${yarmanActivities[randomArrayNumber(yarmanActivities)]}`,
						`${yarmanMessages[randomArrayNumber(yarmanMessages)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`${toUpperCaseAnswer(yarmanMatch[0])} is so ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}, his favorite movie must be "${movieTitles[randomArrayNumber(movieTitles)]}"`,
						`${toUpperCaseAnswer(yarmanMatch[0])}, I would say he's ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`${toUpperCaseAnswer(yarmanMatch[0])}! ${unknownNamesMessages[randomArrayNumber(unknownNamesMessages)]}`,
						`${toUpperCaseAnswer(yarmanMatch[0])}? ${musicQuestions[randomArrayNumber(musicQuestions)]}`,
					]
					
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1300);
			}
			//заговорили про Томми
			else if(tommyMatch.length != 0){
				setTimeout(() => {
					let answer = thomasMessages[randomArrayNumber(thomasMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1500);
			}


		//КАТЕГОРИИ ПОЗНАНИЙ

			//вода и морская тематика
			else if(waterMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(waterMatch[0], natureDescription[randomArrayNumber(natureDescription)], waterQuestions[randomArrayNumber(waterQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}
			
			//еда
				//любимые блюда Папы
			else if(youMatch.length != 0 && foodMatch.length != 0){
				setTimeout(() => {

					
					let answer = `I like ${foodMatch[0]}. But my favorite delicacy are Sarsaparilla and Smurfberries`;
					chatbotSendMessage(toUpperCaseAnswer(answer))

					

				}, 1300);
			}
			//разгоны про еду
			else if(foodMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(foodMatch[0], foodDescription[randomArrayNumber(foodDescription)], foodQuestions[randomArrayNumber(foodQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}

			//животные
			else if(animalMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(animalMatch[0], animalDescription[randomArrayNumber(animalDescription)], animalQuestions[randomArrayNumber(animalQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}
			//любовь и чувства
			else if(loveMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(loveMatch[0], loveDescription[randomArrayNumber(loveDescription)], loveQuestions[randomArrayNumber(loveQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}						
			//природа
			else if(natureMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(natureMatch[0], natureDescription[randomArrayNumber(natureDescription)], natureQuestions[randomArrayNumber(natureQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}	
			
			//языки и лингвистика лично у Папы Смурфа
			else if(youMatch.length != 0 && langMatch.length != 0){
				setTimeout(() => {

					if(langMatch[0] == "english"){
			
						let answer = `${agreeWords[randomArrayNumber(agreeWords)]}, I speak English`;
						chatbotSendMessage(toUpperCaseAnswer(answer))
					}
					else if(langMatch[0] != "english"){
						
						let answer = `${toUpperCaseAnswer(langMatch[0])}? ${langNamesMessages[randomArrayNumber(langNamesMessages)]}`;
						chatbotSendMessage(toUpperCaseAnswer(answer))

					}

				}, 1300);
			}
			//просто разговоры о лингвистике
			else if(langMatch.length != 0){

				setTimeout(() => {
					let answers = [
						`${toUpperCaseAnswer(langMatch[0])}? ${langNamesQuestions[randomArrayNumber(langNamesQuestions)]}`,
						processTopics(toUpperCaseAnswer(langMatch[0]), musicDescription[randomArrayNumber(musicDescription)], langNamesQuestions[randomArrayNumber(langNamesQuestions)]),
						]
		
						let answer = answers[randomArrayNumber(answers)];
						chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
	
			}	

		
		
		//ИСКУССТВО: КИНО, МУЗЫКА
		
			//музыка
			//общий вопрос про музыку лично Папе
			else if(message.includes("music") && (youPossessiveMatch.length != 0 || youMatch.length != 0)){
				setTimeout(() => {

					let answers = [
						`Papa Smurf likes instrumental, of course, blues and ${musicGenres[randomArrayNumber(musicGenres)]}`,
						`Oh, talking about music. Papa Smurf thinks that he likes instrumental, blues and ${musicGenres[randomArrayNumber(musicGenres)]}`,
						`Well, it's instrumental, blues and maybe ${musicGenres[randomArrayNumber(musicGenres)]}`,
						`I like blues. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} and ${musicGenres[randomArrayNumber(musicGenres)]} are ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
						`Blues is number one. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} and ${musicGenres[randomArrayNumber(musicGenres)]} are ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			else if(message.includes("music")){
				setTimeout(() => {

					let answers = [
						`Oh, talking about music. Papa Smurf thinks that he likes instrumental, blues and ${musicGenres[randomArrayNumber(musicGenres)]}`,
						`You strike me as a ${musicGenres[randomArrayNumber(musicGenres)]} lover. Am I right?`,
						`Any specific genre you do you like to listen to? ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])}?`,
						`Music! ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is so ${musicDescription[randomArrayNumber(musicDescription)]}`,
						`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])}?`,
						`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is very ${musicDescription[randomArrayNumber(musicDescription)]}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
				//разгоны про жанры
			else if(musicMatch.length != 0){
				setTimeout(() => {
	
					let answer = processTopics(musicMatch[0], musicDescription[randomArrayNumber(musicDescription)], musicQuestions[randomArrayNumber(musicQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}
			else if(message.includes("music") && (message.includes("genre") || message.includes("genres"))){
				setTimeout(() => {
	
					let answers = [
						`Music genre? Hmm, let me think, ${musicGenres[randomArrayNumber(musicGenres)]} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
						`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} and ${musicGenres[randomArrayNumber(musicGenres)]} are ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}
			
			//кино
			//любимые фильмы папы
			else if(youMatch.length != 0 && movieWordsMatch.length != 0){
				setTimeout(() => {

					let answers = [
						`It's hard to name just one thing, but ${movieTitles[randomArrayNumber(movieTitles)]} comes to mind`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
						`My favorite movie is probably ${movieTitles[randomArrayNumber(movieTitles)]}, it's so ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			else if(youPossessiveMatch.length != 0 && movieWordsMatch.length != 0){
				setTimeout(() => {

					let answer = "I like The Smurfs. What else did you expect, little Smurf?";	
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			else if(movieWordsMatch.length != 0 && (message.includes("genre") || message.includes("genres"))){
				setTimeout(() => {

					let answers = [
					`Movie genre? Well, I don't know much, I like just movies. ${movieTitles[randomArrayNumber(movieTitles)]} is really ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
					`Sorry, my wisdom does not extend to movie genres. But I do know some music genres! ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`
					]
					let answer = answers[randomArrayNumber(answers)];

					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			// просто упомянули кино
			else if(movieWordsMatch.length != 0){
				setTimeout(() => {

					let answers = [
						`I love cinéma! So about ${movieWordsMatch[0]}, I bet you have seen ${movieTitles[randomArrayNumber(movieTitles)]}? Isn't it ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`I know a good movie! ${movieTitles[randomArrayNumber(movieTitles)]} is really ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`I can recommend you ${movieTitles[randomArrayNumber(movieTitles)]}`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			else if(message.includes("genre") || message.includes("genres")){
				setTimeout(() => {

					let answers = [
					`Movie or music genre?`,
					`Genre? Little Smurf, are we talking about music or moves?`
					]
					let answer = answers[randomArrayNumber(answers)];

					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			else if(message.includes("art")){
				setTimeout(() => {

					let answers = [
					`Art is limitless. But personally I love movies and music`,
					`What types of art do you like?`,
					]
					let answer = answers[randomArrayNumber(answers)];

					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
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
		//ОСОБЫЕ УПОМИНАНИЯ
			else if(message.includes("grumpy") || message.includes("grump") ){

				setTimeout(() => {
					let answer = `Grumpy? My rude brother. He lives <a href='https://theomorphic.github.io/Grumpy' target='_blank'>right here</a>`;
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);

				
			}

		//КОРОТКИЕ ОТВЕТЫ: СОГЛАСИЕ И ОТРИЦАНИЕ

			//согласие и несогласие
			else if(agreeMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${agreeWords[randomArrayNumber(agreeWords)]}`,
						`${agreeWords[randomArrayNumber(agreeWords)]}. ${toUpperCaseAnswer(noIdeaMessages[randomArrayNumber(noIdeaMessages)])}`,
						`${agreeWords[randomArrayNumber(agreeWords)]}, but you sound like ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}
			//несогласие
			else if(disagreeMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${disagreeWords[randomArrayNumber(disagreeWords)]}`,
						`${agreeWords[randomArrayNumber(agreeWords)]}`,
						`${agreeWords[randomArrayNumber(agreeWords)]}. ${toUpperCaseAnswer(noIdeaMessages[randomArrayNumber(noIdeaMessages)])}`,
						`${disagreeWords[randomArrayNumber(disagreeWords)]}. ${toUpperCaseAnswer(noIdeaMessages[randomArrayNumber(noIdeaMessages)])}`,
						`You strike me as ${descriptionWords[randomArrayNumber(descriptionWords)]} ${foodNames[randomArrayNumber(foodNames)]}`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}

		//АБСОЛЮТНОЕ НЕПОНИМАНИЕ

			else{
				setTimeout(() => {

					const answers = [
						`${binderPhrases[randomArrayNumber(binderPhrases)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}, but ${toUpperCaseAnswer(noIdeaMessages[randomArrayNumber(noIdeaMessages)])}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${musicQuestions[randomArrayNumber(musicQuestions)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${smalltalk[randomArrayNumber(smalltalk)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${smalltalk[randomArrayNumber(smalltalk)]}`,
						`${binderPhrases[randomArrayNumber(binderPhrases)]} ${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${smalltalk[randomArrayNumber(smalltalk)]}`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1500);
			}

	}
	//функция обработки сообщения пользователя и формирования ответа

	function askingAuestions(){
		setInterval(() => {
			const answers = [
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`${smalltalk[randomArrayNumber(smalltalk)]}`,
				`Here my question. ${smalltalk[randomArrayNumber(smalltalk)]}`,
				`Oh, I have a question! ${smalltalk[randomArrayNumber(smalltalk)]}`,
				`Hey, I have one for you. ${smalltalk[randomArrayNumber(smalltalk)]}`,

			]

			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
			
		}, 120000);

	} askingAuestions()
	//функция автоматического задавания вопросов в интервале до 1.5 минуты



