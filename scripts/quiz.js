function processQuiz()
{
	var q1 = document.forms.quiz.question1;
	if (q1[ 0 ].checked )
	var score = 0;
		{
			score = score + 1;
		}

	var q2 = document.forms.quiz.question2;
	if (q2[ 2 ].checked )
		{
			score = score +1
		}
	var q3 = document.forms.quiz.question3;
	if (q3[ 1 ].checked )
		{
			score = score +1
		}
	alert( "You got " + score + " correct!" );
} 
