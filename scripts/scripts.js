// this file holds any scripts that have to do with communicating with the learning management system (LMS)
// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  
// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function loadOLM()
{
	
}
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    		
    		sessionStorage.setItem( "Intro", "unvisited" );    		
    		sessionStorage.setItem( "topic1", "unvisited" );
    		sessionStorage.setItem( "topic1a", "unvisited" );
    		sessionStorage.setItem( "topic1b", "unvisited" );
    		sessionStorage.setItem( "topic1c", "unvisited" );
    		sessionStorage.setItem( "topic1d", "unvisited" );
    		sessionStorage.setItem( "topic1e", "unvisited" );
    		sessionStorage.setItem( "topic1f", "unvisited" );
    		sessionStorage.setItem( "topic2", "unvisited" );
    		sessionStorage.setItem( "topic2a", "unvisited" );    
    		sessionStorage.setItem( "topic2b", "unvisited" );
    		sessionStorage.setItem( "topic2c", "unvisited" );
    		sessionStorage.setItem( "topic2d", "unvisited" );
    		sessionStorage.setItem( "topic2e", "unvisited" );
    		sessionStorage.setItem( "topic3", "unvisited" );
    		sessionStorage.setItem( "topic3a", "unvisited" );
    		sessionStorage.setItem( "topic3b", "unvisited" );
    		sessionStorage.setItem( "topic3c", "unvisited" );
    		sessionStorage.setItem( "topic3d", "unvisited" );
    		sessionStorage.setItem( "topic3e", "unvisited" );
    		sessionStorage.setItem( "topic3f", "unvisited" );
    		sessionStorage.setItem( "draganddrop", "unvisited" );
    		sessionStorage.setItem( "cert", "unvisited" );
    		
			// set the values you want to persist throughout the website here
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
        // always set the status to incomplete
		oScorm.set( "cmi.success_status", "unknown" );
		oScorm.set( "cmi.lesson_status", "incomplete" );
		oScorm.set( "cmi.completion_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores(score)
{	
	oScorm.set("cmi.score.raw", score );
	oScorm.set("cmi.score.min", 0 );
	oScorm.set("cmi.score.max", 100 );
	oScorm.set("cmi.score.scaled", score / 100 );
	
	if( score >= 70 )
	{ 
		oScorm.set("cmi.success_status", "passed" ); 
		oScorm.set("cmi.completion_status", "completed" );
		oScorm.set("cmi.lesson_status", "passed"  );
	}
	else
	{
		oScorm.set("cmi.success_status", "failed" ); 
		oScorm.set("cmi.completion_status", "incomplete" );
		oScorm.set("cmi.lesson_status", "failed"  );
	
	}
	
	oScorm.save();
}


function visitCertificate()
{
	var learner_name = oScorm.get( "cmi.learner_name" );
	document.getElementById( "content-frame" ).
	contentWindow.document.getElementById( "user-name" ).innerHTML = learner_name;
}
function visitQuiz()
{
	sessionStorage.setItem( "quiz", "visited" );
}

function gradeQuiz1()
{
var score = 0;
/* some code goes here to grade the quiz
 and to assign a whole number between 0
 and 100 to the variable score. */
// call the function to report scores
parent.reportScores( 70 );
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}
function finishOLM()
{
	
}
function visitIntro()
{
	sessionStorage.setItem( "Intro", "visited" );
	checkVisits();
}
function visitTopic1()
{
	sessionStorage.setItem( "topic1", "visited" );
	checkVisits();
}
function visitTopic1a()
{
	sessionStorage.setItem( "topic1a", "visited" );
	checkVisits();
}
function visitTopic1b()
{
	sessionStorage.setItem( "topic1b", "visited" );
	checkVisits();
}
function visitTopic1c()
{
	sessionStorage.setItem( "topic1c", "visited" );
	checkVisits();
}
function visitTopic1d()
{
	sessionStorage.setItem( "topic1d", "visited" );
	checkVisits();
}
function visitTopic1e()
{
	sessionStorage.setItem( "topic1e", "visited" );
	checkVisits();
}
function visitTopic1f()
{
	sessionStorage.setItem( "topic1f", "visited" );
	checkVisits();
}
function visitTopic2()
{
	sessionStorage.setItem( "topic2", "visited" );
	checkVisits();
}
function visitTopic2a()
{
	sessionStorage.setItem( "topic2a", "visited" );
	checkVisits();
}
function visitTopic2b()
{
	sessionStorage.setItem( "topic2b", "visited" );
	checkVisits();
}
function visitTopic2c()
{
	sessionStorage.setItem( "topic2c", "visited" );
	checkVisits();
}
function visitTopic2d()
{
	sessionStorage.setItem( "topic2d", "visited" );
	checkVisits();
}
function visitTopic2e()
{
	sessionStorage.setItem( "topic2e", "visited" );
	checkVisits();
}
function visitTopic3()
{
	sessionStorage.setItem( "topic3", "visited" );
	checkVisits();
}
function visitTopic3a()
{
	sessionStorage.setItem( "topic3a", "visited" );
	checkVisits();
}
function visitTopic3b()
{
	sessionStorage.setItem( "topic3b", "visited" );
	checkVisits();
}
function visitTopic3c()
{
	sessionStorage.setItem( "topic3c", "visited" );
	checkVisits();
}
function visitTopic3d()
{
	sessionStorage.setItem( "topic3d", "visited" );
	checkVisits();
}
function visitTopic3e()
{
	sessionStorage.setItem( "topic3e", "visited" );
	checkVisits();
}
function visitTopic3f()
{
	sessionStorage.setItem( "topic3f", "visited" );
	checkVisits();
}
function visitTopicdraganddrop()
{
	sessionStorage.setItem( "draganddrop", "visited");
	checkVisits();
}
function visitQuiz()
{
	sessionStorage.setItem( "cert", "visited");
	checkCert();
}
function checkVisits()
{
	var value1 = sessionStorage.getItem( "topic1" );
	var value2 = sessionStorage.getItem( "topic1a" );
	var value3 = sessionStorage.getItem( "topic1b" );
	var value4 = sessionStorage.getItem( "topic1c" );
	var value5 = sessionStorage.getItem( "topic1d" );
	var value6 = sessionStorage.getItem( "topic1e" );
	var value7 = sessionStorage.getItem( "topic1f" );
	var value8 = sessionStorage.getItem( "topic2" );
	var value9 = sessionStorage.getItem( "topic2a" );
	var value10 = sessionStorage.getItem( "topic2b" );
	var value11 = sessionStorage.getItem( "topic2c" );
	var value12 = sessionStorage.getItem( "topic2d" );
	var value13 = sessionStorage.getItem( "topic2e" );
	var value14 = sessionStorage.getItem( "topic3" );
	var value15 = sessionStorage.getItem( "topic3a" );	
	var value16 = sessionStorage.getItem( "topic3b" );
	var value17 = sessionStorage.getItem( "topic3c" );
	var value18 = sessionStorage.getItem( "topic3d" );
	var value19 = sessionStorage.getItem( "topic3e" );
	var value20 = sessionStorage.getItem( "topic3f" );
	var value21 = sessionStorage.getItem( "draganddrop" );
	var value22 = sessionStorage.getItem( "Intro" );
	
	
	if( 	value1 == "visited" && 
			value2 == "visited" &&
			value3 == "visited" && 
			value4 == "visited" &&
			value5 == "visited" && 
			value6 == "visited" &&
			value7 == "visited" &&
			value8 == "visited" && 
			value9 == "visited" &&
			value10 == "visited" &&				
			value11 == "visited" && 
			value12 == "visited" &&
			value13 == "visited" &&
			value14 == "visited" && 
			value15 == "visited" &&
			value16 == "visited" &&
			value17 == "visited" && 
			value18 == "visited" &&
			value19 == "visited" &&
			value20 == "visited" &&
			value21 == "visited" &&
			value22 == "visited" )
		{
			document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display="inline";
		}
		
}
function checkCert()
{
	var value23 = sessionStorage.getItem( "cert" );
		
	if( 	value23 == "visited" )
		{
			document.getElementById( "content-frame" ).contentWindow.document.getElementById( "cert-link" ).style.display="inline";
		}
		
}


