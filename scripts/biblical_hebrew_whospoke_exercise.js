"use strict";

document.addEventListener('DOMContentLoaded', function() {
   var i;

   //------ code creating content----------------------------------------
//---------------------------------------------------------------------------

     // create Who spoke to whom exercise    
   var onloadExercise = document.getElementsByClassName("onload-whospoke-exercise");
   for (i = 0; i < onloadExercise.length; i++) {
	  var thisDiv = onloadExercise[i];
      createWhoSpokeExercise(thisDiv);
   }	
 

})

function reCreateWhoSpokeExercise(thisId){
	// thisId is the id of the who spoke exercise overall container div
	
  // first, delete existing test
  var overallExerciseDiv = document.getElementById(thisId);
  if (overallExerciseDiv != null) { overallExerciseDiv.remove();}
   
  // now recreate the test
  
   var instructionsDivId = "cr-" + thisId;
   var instructionsDiv =  document.getElementById(instructionsDivId);
   createWhoSpokeExercise(instructionsDiv);

}


function createWhoSpokeExercise(thisDiv){
   var i;
   
   	// overall container
	//-----------------
   var overallExerciseDiv = document.createElement("div");
   overallExerciseDiv.setAttribute("id", thisDiv.id.replace("cr-",""));
   overallExerciseDiv.classList.add("exercise-container");
   //overallExerciseDiv.classList.add("vocab-color");
   
   var dataDiv = thisDiv.nextElementSibling;
   
   	// flexbox with draggable (but not droppable) answers
	//--------------------------------------------------
   var answersPara = dataDiv.getElementsByClassName("whospoke-exercise-answers")[0];
   var answers = answersPara.innerHTML.split("|");
   
   var answersFlexdiv = document.createElement("div");
   answersFlexdiv.classList.add("whospoke-flex-container-drag-drop");
   for (i=0; i < answers.length; i++){
	  var celldiv = document.createElement("div");
      var span1 = document.createElement("span");
      span1.classList.add("flex-drag-drop-content");
      span1.classList.add("flex-drag-drop-english");
      span1.classList.add("clickable"); /* changes pointer when hovering */
 	  span1.setAttribute("draggable", true);
      var text1= document.createTextNode(answers[i]);
	  span1.appendChild(text1);
      span1.addEventListener("dragstart",function(){handleDragStartWhoSpoke(event);});
     // span1.addEventListener("click", function(){selectAnswerWhoSpoke(event);});
      span1.addEventListener("click", function(){checkAnswerWhoSpoke(event);});
	  celldiv.appendChild(span1);
      answersFlexdiv.appendChild(celldiv);
	}
    overallExerciseDiv.appendChild(answersFlexdiv);

    // flexboxes with hebrew question text and query boxes for answers
	//------------------------------------------------------------
   var questionsDivs = createQuestionsDivs(dataDiv);
   overallExerciseDiv.appendChild(questionsDivs);

   // add overall container to document	
   //answersPara.parentNode.insertBefore(overallExerciseDiv, answersPara);
   thisDiv.append(overallExerciseDiv);
}

function createQuestionsDivs(dataDiv){

   	// flexboxes with hebrew question text and query boxes for answers
	//------------------------------------------------------------
	
	var r;
	
	var audioDir = "tanakh";
	
	var questionsDivs =  document.createElement("div");
	questionsDivs.classList.add("whospoke-scrollable");
	
    var hebrew = dataDiv.getElementsByClassName("whospoke-exercise-hebrew");
    var reference = dataDiv.getElementsByClassName("whospoke-exercise-reference");
    var audio = dataDiv.getElementsByClassName("whospoke-exercise-audio");
    var english = dataDiv.getElementsByClassName("whospoke-exercise-english");
	
	var selectedItems = shuffleArray(createIntegerArray(0, hebrew.length-1));
	
	var nQuestions = dataDiv.getElementsByClassName("whospoke-exercise-nselection")[0].innerHTML;
	
    //for (r = 0; r < globalWhoSpokenItems; r++) {
    for (r = 0; r < nQuestions; r++) {
 
	   var thisHebrew = hebrew[selectedItems[r]].innerHTML;
	   var thisReference = reference[selectedItems[r]].innerHTML;
	   var thisAudio = audio[selectedItems[r]].innerHTML.trim();
	   var thisEnglish = english[selectedItems[r]].innerHTML.split("|");
		 // row divided into 3 divs so that linebreaks occur properly if page resized
	   var thisRow = document.createElement("div");
	   thisRow.classList.add("whospoke-flex-container-drag-drop");
	   
		 // (i) biblical source
	   
	   var thisRowDiv0 = document.createElement("div");
	   
	   var span0 = document.createElement("span");
       var text0 = document.createTextNode(thisReference);
       span0.classList.add("biblical-reference");
	   span0.appendChild(text0);
	   thisRowDiv0.appendChild(span0);
	   
	   thisRow.appendChild(thisRowDiv0);
	   
	      // (ii) hebrew text and audio reference
	   var thisRowDiv1 = document.createElement("div");
	   
	   var span1 = document.createElement("span");
       var text1 = document.createTextNode(thisHebrew);
       span1.classList.add("hebrew30-wrap");
       //span1.classList.add("soundclick");
	   //addsoundclickEventListener(span1);
	   span1.appendChild(text1);
	   thisRowDiv1.appendChild(span1);
	   
	   var span1a = document.createElement("span");
	   var text1a = document.createTextNode(" ");
	   span1a.appendChild(text1a);
       span1a.classList.add("start-audio");
       span1a.classList.add("soundclick");
	   addsoundclickEventListener(span1a);
	   thisRowDiv1.appendChild(span1a);
	
	   
	   var span2 = document.createElement("span");
       var text2 = document.createTextNode(addAudioDirToSoundName(thisAudio,audioDir));
       span2.classList.add("hidden");
	   span2.appendChild(text2);
	   thisRowDiv1.appendChild(span2);
	   
	   thisRow.appendChild(thisRowDiv1);
	   
	     // (iii) answer boxes
	   var thisRowDiv2 = document.createElement("div");
	   
	   var span0 = document.createElement("span");
       span0.classList.add("whospoke-flex-drag-drop-query");
       span0.classList.add("clickable");
       span0.addEventListener("drop", function(){handleDropWhoSpoke(event);});
	   span0.addEventListener("dragenter",function(){handleDragEnterWhoSpoke(event);});
	   span0.addEventListener("dragleave",function(){handleDragLeaveWhoSpoke(event);});
	   span0.addEventListener("dragover",function(){handleDragOverWhoSpoke(event);});
	   
     //  span0.addEventListener("click", function(){checkAnswerWhoSpoke(event);});
       span0.addEventListener("click", function(){selectQuestionWhoSpoke(event);});

	   thisRowDiv2.appendChild(span0);
	   
	   var span1 = document.createElement("span");
       var text1 = document.createTextNode(thisEnglish[0]);
       span1.classList.add("english20");
       span1.classList.add("hidden");
	   span1.appendChild(text1);
	   span1.style.fontWeight = 'bold'; 
	   thisRowDiv2.appendChild(span1);
	   
	   var span2 = document.createElement("span");
       var text2 = document.createTextNode(" spoke to ");
	   span2.appendChild(text2);
	   thisRowDiv2.appendChild(span2);
	   
	   var span3 = document.createElement("span");
       span3.classList.add("whospoke-flex-drag-drop-query");
       span3.classList.add("clickable");
       span3.addEventListener("drop", function(){handleDropWhoSpoke(event);});
	   span3.addEventListener("dragenter",function(){handleDragEnterWhoSpoke(event);});
	   span3.addEventListener("dragleave",function(){handleDragLeaveWhoSpoke(event);});
	   span3.addEventListener("dragover",function(){handleDragOverWhoSpoke(event);});
	   
	   //span3.addEventListener("click", function(){checkAnswerWhoSpoke(event);});
	   span3.addEventListener("click", function(){selectQuestionWhoSpoke(event);});
	   
	   thisRowDiv2.appendChild(span3);
	   
	   var span4 = document.createElement("span");
       var text4 = document.createTextNode(thisEnglish[1]);
       span4.classList.add("english20");
       span4.classList.add("hidden");
	   span4.appendChild(text4);
	   span4.style.fontWeight = 'bold'; 
	   thisRowDiv2.appendChild(span4);
	   
	   thisRow.appendChild(thisRowDiv2);
	   
       questionsDivs.appendChild(thisRow);
    } 
	return questionsDivs;
}

//------ used by both point and click and drag-drop ---
//-----------------------------------------------------

function CheckFinishedWhoSpoke(thisSpec){
   // thisSpec is one of the query boxes in the questions flexbox
   // if none of the answer boxes have the class "hidden" then all the questions have been answered 
//test("hello from CheckFinishedWhoSpoke, thisSpec.innerHTML=" + thisSpec.nextElementSibling.innerHTML);   
   var i;
   var finished = true;	
   const questionsFlexdiv = thisSpec.parentNode.parentNode.parentNode;
   const questionsDivs = questionsFlexdiv.children;
	     // only check the rows which are visible
   //for (i=0; i < globalWhoSpokenItems; i++) { 
   for (i=0; i < questionsDivs.length; i++) { 
	  var thisRowDivs = questionsDivs[i].children;
	    // thisRowDive[0] is the biblical reference
	    // thisRowDive[1] is the hebrew and audio
	  var thisRowQueriesDiv = thisRowDivs[2].children;
          // check whether answer 1 completed
      if ((thisRowQueriesDiv [1].classList.contains("hidden"))){
		 finished = false;
		 break;
	  }	 
          // check whether answer 2 completed
      if ((thisRowQueriesDiv [4].classList.contains("hidden"))){
		 finished = false;
		 break;
	  }	
   }
   return finished;

}

//------ point and click functions ------------------
//------------------------------------------------
function oldselectAnswerWhoSpoke(ev) {
	var i;

    // already selected? don't do anything
	if (ev.target.classList.contains("flex-drag-drop-selected")){
	   
    } else {
	   // first, unselect any answers that are selected
       var selected = ev.target.parentElement.parentElement.getElementsByClassName("flex-drag-drop-selected");
	   for (i=0; i < selected.length; i++) {
		   selected[i].classList.remove("flex-drag-drop-selected");
	   }

       // now flag this answer as selected
	   ev.target.classList.add("flex-drag-drop-selected"); 
	}   
}	

function selectQuestionWhoSpoke(ev) {
	var i;

    // already selected? don't do anything
	if (ev.target.classList.contains("flex-drag-drop-selected")){
	   
    } else {
	   // first, unselect any question boxes that are selected
       var selected = ev.target.parentElement.parentElement.parentElement.getElementsByClassName("flex-drag-drop-selected");
	   for (i=0; i < selected.length; i++) {
		   selected[i].classList.remove("flex-drag-drop-selected");
	   }

       // now flag this question box as selected
	   ev.target.classList.add("flex-drag-drop-selected"); 
	}   
}	

function oldcheckAnswerWhoSpoke(ev) {
	// when user clicks on "?" box
	var selectedAnswer =  document.getElementById(globalOverallWhoSpokeExerciseId).getElementsByClassName("flex-drag-drop-selected");
    if (selectedAnswer.length == 1){
   
       var proposedAnswer = selectedAnswer[0].innerHTML;
       var actualAnswer = 	ev.target.nextElementSibling.innerHTML;   
       if (proposedAnswer == actualAnswer){
          ev.target.classList.add("hidden"); //make the query box invisible
          ev.target.nextElementSibling.classList.remove("hidden"); // make answer box visible
		  
	       // set answer unselected
		  selectedAnswer[0].classList.remove("flex-drag-drop-selected");
		  
	       //document.getElementById(answerId).classList.add("hidden"); 
	      var finished = CheckFinishedWhoSpoke(ev.target);
       }
	
       if (finished) {
	      rewardModal("Well done!"); 
       }	  
	}   

}

function checkAnswerWhoSpoke(ev) {
	// when user clicks on an answer in the top row
	// is there a selected question box?
	//var selectedQuestion =  document.getElementById(globalOverallWhoSpokeExerciseId).getElementsByClassName("flex-drag-drop-selected");
	var selectedQuestion =  ev.target.parentElement.parentElement.parentElement.getElementsByClassName("flex-drag-drop-selected");
    if (selectedQuestion.length == 1){
		// yes
   
       var proposedAnswer = ev.target.innerHTML;  
       var actualAnswer = selectedQuestion[0].nextElementSibling.innerHTML;
//test("hello from checkAnswerWhoSpoke, proposed answer=" + proposedAnswer + ", actual answer=" + actualAnswer);	
	   
       if (proposedAnswer == actualAnswer){
          selectedQuestion[0].classList.add("hidden"); //make the query box invisible
          selectedQuestion[0].nextElementSibling.classList.remove("hidden"); // make answer box visible
		  
		  
	      var finished = CheckFinishedWhoSpoke(selectedQuestion[0]);
		  
	       // set answer unselected (have to do this after call to CheckFinishedWhoSpoke)
		  selectedQuestion[0].classList.remove("flex-drag-drop-selected");
		  
          if (finished) {
	         rewardModal("Well done!"); 
          }	
		  
       }
	
	}   

}

//------ drag and drop functions ------------------
//------------------------------------------------

function handleDragStartWhoSpoke(ev) {
	//test("hi");
// changed this so stores ev.target.innerHTML, then each answer doesn't have to have an id
	//test(ev.target.id);
   //ev.dataTransfer.setData("text", ev.target.id);
   ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function handleDragEnterWhoSpoke(ev) {
   if (ev.target.classList.contains("whospoke-flex-drag-drop-query")){
      ev.target.classList.add("flex-drag-drop-droppable"); 
	          // visual cue showing that this cell available for dropping
   }
}
function handleDragLeaveWhoSpoke(ev) {
   ev.target.classList.remove("flex-drag-drop-droppable");
}
function handleDragOverWhoSpoke(ev) {
   ev.preventDefault();
}

function handleDropWhoSpoke(ev) {
   ev.preventDefault();
   var proposedAnswer = ev.dataTransfer.getData("text");
   var actualAnswer = ev.target.nextElementSibling.innerHTML;
//test("hello from handleDropWhoSpoke, proposedAnswer=" + proposedAnswer + ", actual answer= " + actualAnswer);
   if (proposedAnswer == actualAnswer){
      ev.target.classList.add("hidden"); //make the query box invisible
      ev.target.nextElementSibling.classList.remove("hidden"); // make answer box visible

	  var finished = CheckFinishedWhoSpoke(ev.target);
	  
      if (finished) {
	     rewardModal("Well done!"); 
      }	  
	  
    }else{
		//don't know why this is needed
       ev.target.classList.remove("flex-drag-drop-droppable");
    }
	
}
