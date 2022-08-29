var myQuestions = [
	{
		question: "<br/> 1 - Em projetos de design gráfico, o procedimento no editor Adobe Photoshop para definir o uso de cores especiais é: <br/> <br/> ",
		answers: {
			a: ' Uso de equivalentes das cores Pantone nos canais R, G eB ou C, M, Y e K. <br/> <br/>',
			b: ' Criação de um ou mais Canais de Spot na Paleta de Canais, especificando os parâmetros da cor e de solidez. <br/> <br/>',
			c: ' Substituir uma ou mais camadas normais da imagem pela(s) cor(es) especial(is). <br/> <br/>'
		},
		correctAnswer: 'b'
	},
	{
		question: "2 - Os arquivos de fontes utilizados nos editores de projetos gráficos digitais são, tipicamente: <br/> <br/>",
		answers: {
			a: ' TIF e OTF. <br/> <br/>',
			b: ' PDF e PNG. <br/> <br/>',
			c: ' TTF e OTF. <br/> <br/>',
			d: ' TTF e JPG. <br/> <br/>'
		},
		correctAnswer: 'c'
	},
	{
		question: "3 - Para utilizar a palheta de pincéis, o usuário deve selecionar a ferramenta Lápis, ou a ferramenta Pincel, e escolher o tipo de grafite para desenhar. <br/> <br/>",
		answers: {
			a: ' Verdadeiro. <br/> <br/>',
			b: ' Falso. <br/> <br/>', 
		}, 
		correctAnswer: 'a'
	},
	{
		question: "4 - O que é Pixel? <br/> <br/>",
		answers: {
			a: ' É a menor unidade de imagem digital, independente de sua fonte. <br/> <br/>',
			b: ' É a maior unidade de imagem digital, independente de sua fonte. <br/> <br/>',
			c: ' É um sistema de transferência bancária. <br/> <br/>', 
			d: ' Nenhuma das alternativas acima. <br/> <br/>'
		},
		correctAnswer: 'a'
	},
	{
		question: "5 - Complete a frase: O uso inadequado das cores pode influenciar diretamente ____________________ . <br/> <br/>",
		answers: {
			a: ' A legibilidade da página e das imagens, comprometendo a compreensão do leitor. <br/> <br/>',
			b: ' Qualidade de uma imagem. <br/> <br/>',
			c: ' O modo de pensar do leitor <br/> <br/>', 
			d: ' Nenhuma das alternativas acima. <br/> <br/>'
		},
		correctAnswer: 'a'
	},
	{
		question: "6 - Quais são os três padrões de cores? <br/> <br/>",
		answers: {
			a: ' RYB, RGB e BITMAP <br/> <br/>',
			b: ' RGB, RYB, CMYJ. <br/> <br/>',
			c: ' RYB, RGB e CMYK. <br/> <br/>', 
			d: ' Nenhuma das alternativas acima. <br/> <br/>'
		},
		correctAnswer: 'c'
	},
	{
		question: '7 - O que significa a sigla RGB? <br/> <br/>',
		answers: {
			a: ' Red, Groselia, Blue. <br/> <br/>',
			b: ' Red, Green, Blue. <br/> <br/>',
			c: ' Roxo, Grey, Blue. <br/> <br/>',
			d: ' Nenhuma das alternativas acima. <br/> <br/>'
		},
		correctAnswer: 'b'
	},
	{
		question: '8 - Quais as vantagens do formato .PNG? <br/> <br/>',
		answers: {
			a: ' Imagem estática. <br/> <br/>',
			b: ' Perda de qualidade. <br/> <br/>',
			c: ' Suporta milhões de cores. <br/> <br/>',
			d: ' Peso elevado. <br/> <br/>'
		},
		correctAnswer: 'c'
	},
	{
		question: '9 - Qual é o formato de arquivo mais utilizado na internet hoje? <br/> <br/>',
		answers: {
			a: ' JPEG. <br/> <br/>',
			b: ' GIF. <br/> <br/>',
			c: ' BITMAP. <br/> <br/>',
			d: ' TIFF. <br/> <br/>'
		},
		correctAnswer: 'a'
	},
	{
		question: '10 - Qual é a extensão do formato BITMAP? <br/> <br/>',
		answers: {
			a: ' .jpg <br/> <br/>',
			b: ' .png <br/> <br/>',
			c: ' .mp4 <br/> <br/>',
			d: ' .bmp/.dib <br/> <br/>'
		},
		correctAnswer: 'd'
	},
	{
		question: '11 - Qual é a extensão do formato JPEG? <br/> <br/>',
		answers: {
			a: ' .jpg <br/> <br/>',
			b: ' .png <br/> <br/>',
			c: ' .mp4 <br/> <br/>',
			d: ' .bmp/.dib <br/> <br/>'
		},
		correctAnswer: 'a'
	},
	{
		question: '12 - As imagens BITMAPS são... <br/> <br/>',
		answers: {
			a: ' Compostas por uma junção de 1 pixel. <br/> <br/>',
			b: ' Compostas por uma junção de vários pixels. <br/> <br/>',
			c: ' Compostas por um conjunto de fontes. <br/> <br/>',
			d: ' Nenhuma das alternativas acima. <br/> <br/>'
		},
		correctAnswer: 'b'
	},

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'green';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

		if (numCorrect >= 8) {
			alert('Parabéns, você atingiu a meta de aprovação com um total de ' + numCorrect + ' acertos ! Você será redirecionado para a página onde poderá baixar o seu certificado!');
			window.location.href = '../Certificado/index.html';

		} else {
			alert('Infelizmente você não atingiu a meta de aprovação...');
			window.location.href = '../Curso Design Gráfico/introdução.html';
		}
		
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer == 0) {
            // timer = window.close();

			window.location.href = '../tentenovamente.html';
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 10; // Converter para segundos//
        display = document.querySelector('#timer'); // selecionando o timer//
    startTimer(duration, display); // iniciando o timer//
};
