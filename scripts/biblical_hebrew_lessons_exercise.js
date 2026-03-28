
"use strict";

document.addEventListener('DOMContentLoaded', function() {
   var i;
   // create the exercise tables in JS on load (includes event listeners) 
   var onloadLessonsExerciseClass = document.getElementsByClassName("onload-lessons-exercise");
   for (i = 0; i < onloadLessonsExerciseClass.length; i++) {
      var thisSpec = onloadLessonsExerciseClass[i];
      createLessonsExercise(thisSpec);
   }	
 	
})	


// -when user clicks on correct answer word it is outlined
// and if there is a translation it is displayed beneath

function lessonsExerciseAnswerEventListener(ev, tableid){
	var thisElement = ev.target;
	if (thisElement.nextSibling != null){ 
       thisElement.nextSibling.classList.remove("hidden");
    }
	thisElement.classList.add("lesson-exercise-answer-text-border");

    thisElement.classList.remove("notchecked");
	
	var thisTable = document.getElementById(tableid);
	var nUnchecked = thisTable.getElementsByClassName("notchecked").length;
    if (nUnchecked == 0) {
	   var nWrong = thisTable.getElementsByClassName("lesson-exercise-wrong-answer").length;	
	   rewardModalExerciseTable(nWrong); 
    }	  
}	

// -when user clicks on wrong answer class lesson-exercise-wrong-answer is added to the word
function lessonsExerciseWrongAnswerEventListener(ev, tableid){
	var thisElement = ev.target;
	if (!(thisElement.classList.contains("lesson-exercise-wrong-answer"))){
		thisElement.classList.add("lesson-exercise-wrong-answer");
	}	
}	

function lessonsExerciseShowTranslationEventListener(ev){
	var i;
	var thisElement = ev.target;
	var translations = thisElement.parentElement.parentElement.getElementsByClassName("js-should-know");

    for (i = 0; i < translations.length; i++) {
	   if (thisElement.classList.contains("button-plus")){
		  translations[i].classList.remove("hidden");
	   } else {
		  translations[i].classList.add("hidden");
       }		   
    }
    thisElement.classList.toggle("button-plus");
    thisElement.classList.toggle("button-minus");
}	

function reCreateLessonsExercise(thisTableId){
	// thisTableId is the id of the exercise table
	
   // remove the exercise table if it exists
   var thisDiv = document.getElementById(thisTableId);	 
   if ( thisDiv != null) {
	   // remove div
	   thisDiv.parentNode.removeChild(thisDiv);
    }

   // now create the list again
   var instructionsDivId = "cr-" + thisTableId;
   var instructionsDiv =  document.getElementById(instructionsDivId);
   createLessonsExercise(instructionsDiv);

}	

function createLessonsExercise(thisDiv){
	// thisDiv is div with the instructions for creating the exercise table
	var r;
	var i;
	var j;
    var thisTable = document.createElement("table");
    thisTable.setAttribute("id", thisDiv.id.replace("cr-",""));
    thisTable.classList.add("exercise-table");
	var translations = thisDiv.getElementsByClassName("js-lessons-exercise-translation");
	var references = thisDiv.getElementsByClassName("js-lessons-exercise-reference");
	var hebrewAudio = thisDiv.getElementsByClassName("js-lessons-exercise-hebrew-audio"); // includes directory
	var hebrewText = thisDiv.getElementsByClassName("js-lessons-exercise-hebrew-text");
	var answerWords = thisDiv.getElementsByClassName("js-lessons-exercise-answer-words");
	var shouldKnowWords = thisDiv.getElementsByClassName("js-lessons-exercise-should-know-words");
	
	//var audioDir = thisDiv.getElementsByClassName("js-lessons-exercise-audio-dir")[0].innerHTML.trim();
	var nselectionDiv = thisDiv.getElementsByClassName("js-lessons-exercise-nselection");
	if (nselectionDiv.length > 0) {
		var nItems = nselectionDiv[0].innerHTML.trim();
		if (nItems > translations.length) {var nItems = translations.length;}
	} else 	{ 
		var nItems = translations.length;
	}

    var shuffleOrder = shuffleArray(createIntegerArray(0, translations.length-1));

	
    for (r = 0; r < nItems; r++) {
	
	   var thisRow = document.createElement("tr");
	   
	   var thisTranslation = translations[shuffleOrder[r]];
	   var thisReference = references[shuffleOrder[r]];
	   var thisHebrewAudio = hebrewAudio[shuffleOrder[r]];
	   var thisHebrewText = hebrewText[shuffleOrder[r]];
	   var thisAnswerWords = answerWords[shuffleOrder[r]];
	   var thisShouldKnowWords = shouldKnowWords[shuffleOrder[r]];
		
	  // column 1
      //---------	  
	   var col1 = document.createElement("td");
	   
 	   var sections = thisTranslation.innerHTML.trim().split(globalDivider1);
	   var para = document.createElement('p');
	   for (i = 0; i < sections.length; i++) {
          var text0 = document.createTextNode(sections[i]);
	      var span0 = document.createElement("span");
		    // put a border round every second block
			// these are the questions
		  if (i % 2 == 1) {
			  span0.classList.add("lesson-exercise-question-text-border");
		  }
	      span0.appendChild(text0);
	      para.appendChild(span0);
       }
	   col1.appendChild(para);
	   
	  // var para = document.createElement('p');
      // para.classList.add("biblical-reference");
	  // para.innerHTML = thisReference.innerHTML;
	  // col1.appendChild(para);
	   var para = document.createElement('span');
       para.classList.add("biblical-reference");
	   para.innerHTML = thisReference.innerHTML;
	   col1.appendChild(para);
	   
	   thisRow.appendChild(col1);

	   
	  // column 2
      //---------	  
	   
	   var col2 = document.createElement("td");
  
	 //   var thisAudio = document.createElement('audio');
     //   thisAudio.controls = 'controls';
     //   thisAudio.src = setMp3Name(addAudioDirToSoundName(thisHebrewAudio.innerHTML.trim(),audioDir));
     //   thisAudio.type = 'audio/mpeg';
	 //   col2.appendChild(thisAudio);
	   
	 //   var br = document.createElement("br");
	 //   col2.appendChild(br);
		
	   
	   var answerDiv = document.createElement("div");
	   answerDiv.classList.add("flex-container-rtl");
	//   answerDiv.classList.add("flex-container-heb-lesson-exercise");
	   
	   //var thisAnswerList = thisAnswer.children;
	   var hebrewWords = thisHebrewText.innerHTML.trim().split(/\s+/); //split by one or more spaces

	   var anyShouldKnowWords = false;
	   var shouldKnowWordsList = [];
 	   for (i = 0; i < hebrewWords.length; i++) {shouldKnowWordsList[i]="";}
	   if (thisShouldKnowWords.innerHTML.trim().length > 0) {
		   anyShouldKnowWords = true;
		   var tempList = thisShouldKnowWords.innerHTML.trim().split(globalDivider1);
		   for (i=0; i < tempList.length; i++){
			   var thisPair = tempList[i].trim().split(globalDivider2);
			   shouldKnowWordsList[Number(thisPair[0])-1] = thisPair[1].trim();
		   }	   
	   }
	   
			// save text of questions
	   var questionWords = [];
	   for (i = 0; i < sections.length; i++) {
		  if (i % 2 == 1) {questionWords[(i-1)/2] = sections[i];}
       }
	   var hebrewAnswerWordNumbers = thisAnswerWords.innerHTML.split(/\s+/); //split by one or more spaces
	   
 	   for (i = 0; i < hebrewWords.length; i++) {
          var thisAnswerDiv = document.createElement("div");
		  
	      var hebrewPara = document.createElement("p");
	      hebrewPara.classList.add("hebrew30");
	      hebrewPara.classList.add("clickable");
		  var thisHebrewWords = hebrewWords[i].split(globalDivider1);
          hebrewPara.appendChild(document.createTextNode(thisHebrewWords[0]));
		  if (thisHebrewWords.length > 1) {
			  // deal with case where >1 word for example adonai elohim
			 for (j=1; j < thisHebrewWords.length; j++){
                hebrewPara.appendChild(document.createTextNode(" "));
                hebrewPara.appendChild(document.createTextNode(thisHebrewWords[j]));
			 }	 
		  }	  
		  
		  var anyTranslation = false;
		  var isAnswerWord = false;
		  
	    // is this hebrew word an answer word?
		  for (j=0; j < hebrewAnswerWordNumbers.length; j++) {
			 if (hebrewAnswerWordNumbers[j]-1 ==  i){
		        hebrewPara.addEventListener("click", function(){lessonsExerciseAnswerEventListener(event, thisTable.id);});
			    hebrewPara.classList.add("notchecked");
				 
				anyTranslation = true;
				isAnswerWord = true;
				var translationPara = document.createElement("p");
                translationPara.appendChild(document.createTextNode(questionWords[j]));
				translationPara.classList.add("flex-container-lesson-exercise-tooltip");
				translationPara.classList.add("hidden");
             }			 
		  }	
//test("hello from createExerciseTableRevised,r=" + r + ",nitems=" + nItems);   
          
		 // is this hebrew word a should know word?
		  if (anyShouldKnowWords){
			   if (shouldKnowWordsList[i] != ""){
				   anyTranslation = true;
				   var translationPara = document.createElement("p");
                   translationPara.appendChild(document.createTextNode(shouldKnowWordsList[i]));
				   //translationPara.classList.add("flex-container-lessons-tooltip");
			       translationPara.classList.add("js-should-know");
				   translationPara.classList.add("hidden");
			   }	   
		  }	
		  
          if (!(isAnswerWord)) {hebrewPara.addEventListener("click", function(){lessonsExerciseWrongAnswerEventListener(event, thisTable.id);});}
          thisAnswerDiv.appendChild(hebrewPara);
		  
		  if (anyTranslation) {thisAnswerDiv.appendChild(translationPara);}
		  
		  answerDiv.appendChild(thisAnswerDiv);
        }      

	    col2.appendChild(answerDiv);
	   
	    thisRow.appendChild(col2);
	   
	   
	  // column 3
      //---------	
	    var col3 = document.createElement("td");

        addExtendedAudioElements(col3, thisHebrewAudio.innerHTML.trim())
//        var span1 = document.createElement("span");   
//	    span1.classList.add("start-audio");
//	    span1.classList.add("clickable");
//	    span1.addEventListener('click', startPauseClickEventListener )
//        col3.appendChild(span1);
		
//		var span2 = crStopClickSpan();
//		col3.appendChild(span2);

//        var audioElement = document.createElement("audio"); 
//        audioElement.src = 	setMp3Name(addAudioDirToSoundName(thisHebrewAudio.innerHTML.trim(),audioDir));
//        audioElement.addEventListener('ended', endedEventListener)
//        col3.appendChild(audioElement);
	  
	 //   var thisAudio = document.createElement('audio');
     //   thisAudio.controls = 'controls';
     //   thisAudio.src = setMp3Name(addAudioDirToSoundName(thisHebrewAudio.innerHTML.trim(),audioDir));
     //   thisAudio.type = 'audio/mpeg';
	 //   col2.appendChild(thisAudio);
	    if (anyShouldKnowWords){
		   var br1 =  document.createElement("br");
           col3.appendChild(br1);
	       var span4 = document.createElement("span");
	       span4.classList.add("button-plus");
		   span4.addEventListener("click", function(){lessonsExerciseShowTranslationEventListener(event);});
           col3.appendChild(span4);
		}
	    thisRow.appendChild(col3);
		
	    thisTable.appendChild(thisRow);
 	 }

     thisDiv.appendChild(thisTable);
	
}


//