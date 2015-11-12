function processQuiz() 
{
	var score =0;
	var q1 = document.forms.quiz.question1;
	var q2 = document.forms.quiz.question2;
	var q3 = document.forms.quiz.question3;
	var q4 = document.forms.quiz.question4;
	var q5 = document.forms.quiz.question5;
	var q6 = document.forms.quiz.question6;
	var q7 = document.forms.quiz.question7;
	var q8 = document.forms.quiz.question8;

	
	if( q1[ 2 ].checked ) 
	{ 
	score = score + 12.5; 
	} 
	
	if( q2[ 1 ].checked ) 
	{ 
	score = score + 12.5; 
	} 
	
	if( q3[ 2 ].checked ) 
	{ 
	score = score + 12.5; 
	} 
	
	if( q4[ 0 ].checked ) 
	{ 
	score = score + 12.5; 

	} 
	
	if( q5[ 2 ].checked ) 
	{ 
	score = score + 12.5; 

	} 
	
	if( q6[ 2 ].checked ) 
	{ 
	score = score + 12.5; 

	} 
	
	if( q7[ 2 ].checked ) 
	{ 
	score = score + 12.5; 
		
	} 
	if( q8[ 1 ].checked )
	{
	score = score + 12.5; 

	}		
	alert( "You scored a " + score + "%." );
	parent.reportScores( score );
	javascript:parent.visitQuiz();
}
	