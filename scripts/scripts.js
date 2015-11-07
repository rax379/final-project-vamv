// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
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
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    		sessionStorage.setItem( "topic-2", "unvisited" );
    		sessionStorage.setItem( "topic-2a", "unvisited" );    
    		sessionStorage.setItem( "topic-2b", "unvisited" );
    		sessionStorage.setItem( "topic-2c", "unvisited" );
    		sessionStorage.setItem( "topic-2d", "unvisited" );
    		sessionStorage.setItem( "topic-2e", "unvisited" );
    			
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
function reportScores()
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}

function visitTopic2()
{
	sessionStorage.setItem( "topic-2", "visited" );
	checkVisits();
}
function visitTopic2a()
{
	sessionStorage.setItem( "topic-2a", "visited" );
	checkVisits();
}
function visitTopic2b()
{
	sessionStorage.setItem( "topic-2b", "visited" );
	checkVisits();
}
function visitTopic2c()
{
	sessionStorage.setItem( "topic-2c", "visited" );
	checkVisits();
}
function visitTopic2d()
{
	sessionStorage.setItem( "topic-2d", "visited" );
	checkVisits();
}
function visitTopic2e()
{
	sessionStorage.setItem( "topic-2e", "visited" );
	checkVisits();
}
function checkVisits()
{
	var value1 = sessionStorage.getItem( "topic-2" );
	var value2 = sessionStorage.getItem( "topic-2a" );
	var value3 = sessionStorage.getItem( "topic-2b" );
	var value4 = sessionStorage.getItem( "topic-2c" );
	var value5 = sessionStorage.getItem( "topic-2d" );
	var value6 = sessionStorage.getItem( "topic-2e" );
	
	if( value1 == "visited" && value2 == "visited" &&
			value3 == "visited" && value4 == "visited" &&
			value5 == "visited" && value6 == "visited" )
		{
			document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display="inline";
		}
		
}

