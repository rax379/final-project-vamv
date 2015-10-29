function processQuiz() 
{
		alert ("Hello!!");
	var score =0;
	var q1 = document.forms.quiz1.question1;
	var q2 = document.forms.quiz1.question2;
	var q3 = document.forms.quiz1.question3;
	var q4 = document.forms.quiz1.question4;
	var q5 = document.forms.quiz1.question5;
	var q6 = document.forms.quiz1.question6;
	var q7 = document.forms.quiz1.question7;
	var q8 = document.forms.quiz1.question8;

	
	if( q1[ 2 ].checked ) 
	{ 
	score = score + 1; 
	alert( "Correct!" );
	} 
	
	if( q2[ 1 ].checked ) 
	{ 
	score = score + 1; 
	alert( "Correct!" );
	} 
	
	if( q3[ 2 ].checked ) 
	{ 
	score = score + 1; 
	alert( "Correct!" );
	} 
	
	if( q4[ 0 ].checked ) 
	{ 
	score = score + 1; 
	alert( "Correct!" );
	} 
	
	if( q5[ 2 ].checked ) 
	{ 
	score = score + 1; 
	alert( "Correct!" );
	} 
	
	if( q6[ 2 ].checked ) 
	{ 
	score = score + 1; 
	alert( "Correct!" );
	} 
	
	if( q7[ 2 ].checked ) 
		{ 
		score = score + 1; 
		alert( "Correct!" );
		} 
	if( q8[ 1 ].checked )
		{
			score = score + 1; 
		alert( "Correct!" );
		}		
   
    
	alert( "You got " + score + " correct!" );
}
	