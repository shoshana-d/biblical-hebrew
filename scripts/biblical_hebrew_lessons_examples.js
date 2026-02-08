
"use strict";
	  	 //thisP = thisP.split(/\s+/); split by one or more spaces
		 // soundclickEventListener() function defined in biblical_hebrew_soundclick_hideshow_utilities.js
		 

// code executed on load
//-----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    //-------------------------------------------------------------------
     // creating examples flexbox lists and tables used in lessona
	 // see examples-template.html
  var i;

    // use this when want to display only hebrew, ie no translations under hebrew words
	// optional audio for whole quote
	// no audio for individual words
   var javascriptListClass = document.getElementsByClassName("javascript-inline-quote");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
      createJavascriptExampleTable(thisDiv); 
   }

    // use this when want to display hebrew with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words
   var javascriptListClass = document.getElementsByClassName("javascript-example-rtl");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
      createJavascriptExampleFlexbox(thisDiv); 
   }
 
})
//---------------------------------------------------------------------

     // use this when want to display only hebrew, ie no translations under hebrew words
	// optional audio for whole quote
	// no audio for individual words

function createJavascriptExampleTable(thisDiv){
   var dataDiv = thisDiv.nextElementSibling;

   var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
   var audioPara = dataDiv.getElementsByClassName("js-audio");
   
   var hebrewText = hebrewPara.innerHTML;
	
   var thisTable = document.createElement("table");
	
   var thisRow = document.createElement("tr");	
   thisRow.classList.add("main-color");
   
   var thisCol = document.createElement("td");	 
   thisCol.classList.add("hebrew30-wrap");
   thisCol.appendChild(document.createTextNode(hebrewText));
   thisRow.appendChild(thisCol);

   if (audioPara.length > 0 ){
      var audioText = audioPara[0].innerHTML.trim();
      var thisCol = document.createElement("td");
      thisCol.style.verticalAlign = "top";
	  thisCol.style.textAlign = "center";
	  
      addExtendedAudioElements(thisCol, audioText)
	  
//      var thisSpan = document.createElement("span");   
//      thisSpan.classList.add("start-audio");
//      thisSpan.classList.add("soundclick");
//      thisSpan.addEventListener("click", soundclickEventListener);
//      thisCol.appendChild(thisSpan);
   
//      var thisSpan = document.createElement("span");   
//      thisSpan.classList.add("hidden");
//      thisSpan.appendChild(document.createTextNode(audioText));
//      thisCol.appendChild(thisSpan);
   
      thisRow.appendChild(thisCol);  
   }
   thisTable.appendChild(thisRow);
 
   thisDiv.appendChild(thisTable);
	
}	

//-----------------------------------------------------------------------------------------------

    // use this when want to display hebrew with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words

function createJavascriptExampleFlexbox(thisDiv){
   var i;
   var j;
	
   var dataDiv = thisDiv.nextElementSibling;

   var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
   var audioPara = dataDiv.getElementsByClassName("js-audio");
   var individualAudioPara = dataDiv.getElementsByClassName("js-audio-individual");
   var translationPara = dataDiv.getElementsByClassName("js-translation");
   var emphasisPara = dataDiv.getElementsByClassName("js-emphasis");

   var flexDiv = document.createElement("div");
 
   flexDiv.classList.add("flex-container-rtl");
   flexDiv.classList.add("flex-container-examples");
   if (audioPara.length > 0){
      var audioText = audioPara[0].innerHTML;
      var cellDiv = document.createElement("div");
	  
      addExtendedAudioElements(cellDiv, audioText)
	  
 //     var thisSpan = document.createElement("span");   
 //    thisSpan.classList.add("start-audio");
 //     thisSpan.classList.add("soundclick");
//      thisSpan.addEventListener("click", soundclickEventListener);
//      cellDiv.appendChild(thisSpan);
   
//      var thisSpan = document.createElement("span");   
//      thisSpan.classList.add("hidden");
//      thisSpan.appendChild(document.createTextNode(audioText));
//      cellDiv.appendChild(thisSpan);
   
      flexDiv.appendChild(cellDiv);  
   }	   
   
   var hebrewWords = hebrewPara.innerHTML.split(/\s+/); //split by one or more spaces

   var anyTranslations = false;
   if (translationPara.length > 0){
	   anyTranslations = true;
	   var translations = translationPara[0].innerHTML.split(globalDivider1);
   }
//test("hello from createJavascriptExampleFlexbox");   
   
   var anyIndividualAudio = false;
   if (individualAudioPara.length > 0){
	   anyIndividualAudio = true;
	   var audios = individualAudioPara[0].innerHTML.split(globalDivider1);
   }
    
   var anyEmphasis = false;
   if (emphasisPara.length > 0){
	   anyEmphasis = true;
	   var emphasisSpecs = emphasisPara[0].innerHTML.split(/\s+/);
	   var wordEmphasised = [];
       for (i=0; i < hebrewWords.length; i++){
		  wordEmphasised[i] = false;
          for (j=0; j < emphasisSpecs.length; j++){
       		 if (Number(emphasisSpecs[j] - 1) == i){wordEmphasised[i] = true;}
		  }
	   }	   
   }
  
   
   for (i=0; i < hebrewWords.length; i++){
//test("hello from createJavascriptExampleFlexbox,i=" + i);   
      var cellDiv = document.createElement("div");
      var thisSpan = document.createElement("span"); 
	  thisSpan.classList.add("hebrew30");
	  thisSpan.classList.add("vocab-word-color");
	  if (anyEmphasis){
		  if (wordEmphasised[i]) {thisSpan.classList.add("emphasised-word");}
	  }	  
	  if (anyIndividualAudio) {
		  thisSpan.classList.add("soundclick");
          thisSpan.addEventListener("click", soundclickEventListener);
	  }
      thisSpan.appendChild(document.createTextNode(hebrewWords[i]));
      cellDiv.appendChild(thisSpan);
	  
	  if (anyIndividualAudio){
         var thisSpan = document.createElement("span");   
         thisSpan.classList.add("hidden");
         thisSpan.appendChild(document.createTextNode(audios[i]));
         cellDiv.appendChild(thisSpan);
	  }	  
	  
	  if (anyTranslations) {
		  var thisPara = document.createElement("p");
		  thisPara.appendChild(document.createTextNode(translations[i]));
		  cellDiv.appendChild(thisPara);
	  }	  
	  
	  flexDiv.appendChild(cellDiv);
   }
   
   thisDiv.appendChild(flexDiv);

}

// end