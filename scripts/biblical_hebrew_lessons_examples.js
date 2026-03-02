
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
      createJavascriptInlineQuote(thisDiv); 
   }

    // use this when want to display hebrew with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words
   var javascriptListClass = document.getElementsByClassName("javascript-example-rtl");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
	  var border = false;
	  if (thisDiv.classList.contains("javascript-border")){ border=true;}
      createJavascriptExampleRTLFlexbox(thisDiv, border); 
   }
   
//test("hello from lessons_examples.js addEventListener");
   
    // use this when want to display individual hebrew 
	// not a quote, so display left to right
	// optional translations under hebrew words
	// optional audio for individual words
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//                         - first item is the class to be applied to highlight each consonant
   var javascriptListClass = document.getElementsByClassName("javascript-example-ltr");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
	  var border = false;
	  if (thisDiv.classList.contains("javascript-border")){ border=true;}
      createJavascriptExampleLTRFlexbox(thisDiv, border); 
   }


 
})
//---------------------------------------------------------------------

     // use this when want to display only hebrew, ie no translations under hebrew words
	// optional audio for whole quote
	// no audio for individual words
	// this is a table 

function createJavascriptInlineQuote(thisDiv){
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
	// in Hebrew input, include single bet with space on either side if want a space left (for example, for [is] translation)

function createJavascriptExampleRTLFlexbox(thisDiv, border=true){
   var i;
   var j;
   const bet = "\u05D1";
   const mspace = "\u2003"; 
	
   var dataDiv = thisDiv.nextElementSibling;

   var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
   var audioPara = dataDiv.getElementsByClassName("js-audio");
   var individualAudioPara = dataDiv.getElementsByClassName("js-audio-individual");
   var translationPara = dataDiv.getElementsByClassName("js-translation");
   var emphasisPara = dataDiv.getElementsByClassName("js-emphasis");
   if (audioPara.length > 0){
      var audioText = audioPara[0].innerHTML;
      var cellDiv = document.createElement("div");
	  
      addExtendedAudioElements(cellDiv, audioText)
//test("hello from createJavascriptExampleRTLFlexbox");   
	  
 //     var thisSpan = document.createElement("span");   
 //    thisSpan.classList.add("start-audio");
 //     thisSpan.classList.add("soundclick");
//      thisSpan.addEventListener("click", soundclickEventListener);
//      cellDiv.appendChild(thisSpan);
   
//      var thisSpan = document.createElement("span");   
//      thisSpan.classList.add("hidden");
//      thisSpan.appendChild(document.createTextNode(audioText));
//      cellDiv.appendChild(thisSpan);
   
      //flexDiv.appendChild(cellDiv);  
   }	   
   
   var hebrewWords = hebrewPara.innerHTML.trim().split(/\s+/); //split by one or more spaces

   var anyTranslations = false;
   if (translationPara.length > 0){
	   anyTranslations = true;
	   var translations = translationPara[0].innerHTML.split(globalDivider1);
   }
   
   var anyIndividualAudio = false;
   if (individualAudioPara.length > 0){
	   anyIndividualAudio = true;
	   var audios = individualAudioPara[0].innerHTML.split(globalDivider1);
   }
    
   var anyEmphasis = false;
   if (emphasisPara.length > 0){
	   anyEmphasis = true;
	   var emphasisSpecs = emphasisPara[0].innerHTML.trim().split(/\s+/);
	   var wordEmphasised = [];
       for (i=0; i < hebrewWords.length; i++){
		  wordEmphasised[i] = false;
          for (j=0; j < emphasisSpecs.length; j++){
       		 if (Number(emphasisSpecs[j] - 1) == i){wordEmphasised[i] = true;}
		  }
	   }	   
   }
  

   var flexDiv = document.createElement("div");
 
   flexDiv.classList.add("flex-container-rtl");
   flexDiv.classList.add("flex-container-examples");
   if (border) {flexDiv.classList.add("dotted-border");}

   if (audioPara.length > 0){
      var audioText = audioPara[0].innerHTML;
      var cellDiv = document.createElement("div");
	  
      addExtendedAudioElements(cellDiv, audioText)
//test("hello from createJavascriptExampleRTLFlexbox");   
	  
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
	  
	  if (hebrewWords[i] == bet ) {
         thisSpan.appendChild(document.createTextNode(mspace));
      } else {	
         thisSpan.appendChild(document.createTextNode(hebrewWords[i]));
	  }	 
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


//-----------------------------------------------------------------------------------------------

    // use this when want to display individual hebrew 
	// not a quote, so display left to right
	// optional translations under hebrew words
	// optional audio for individual words
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//                         - first item is the class to be applied to highlight each consonant

function createJavascriptExampleLTRFlexbox(thisDiv, border=true){
   var i;
   var j;
   var dataDiv = thisDiv.nextElementSibling;

  // var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
   var hebrewDiv = dataDiv.getElementsByClassName("js-hebrew")[0];
   var translationPara = dataDiv.getElementsByClassName("js-translation");
   var individualAudioPara = dataDiv.getElementsByClassName("js-audio-individual");
  // var emphasisPara = dataDiv.getElementsByClassName("js-emphasis");
   var highlightPara = dataDiv.getElementsByClassName("js-highlight");
   
  // var hebrewWords = hebrewPara.innerHTML.trim().split(/\s+/); //split by one or more spaces
  // var hebrewWords = reverseArray(hebrewWords);
   var hebrewParas = hebrewDiv.children;
   
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
    
//   var anyEmphasis = false;
//   if (emphasisPara.length > 0){
//	   anyEmphasis = true;
//	   var emphasisSpecs = emphasisPara[0].innerHTML.split(/\s+/);
//	   var wordEmphasised = [];
//       for (i=0; i < hebrewWords.length; i++){
//		    wordEmphasised[i] = false;
//          for (j=0; j < emphasisSpecs.length; j++){
//      		 if (Number(emphasisSpecs[j] - 1) == i){wordEmphasised[i] = true;}
//		  }
//	   }	   
//   }
   
   var anyHighlight = false;
   if (highlightPara.length > 0){
	   anyHighlight = true;
	   var highlights = highlightPara[0].innerHTML.trim().split(globalDivider1);
	   var highlightClass = highlights.shift(); // extract name of class to use for highlighting 
   }
  

   var flexDiv = document.createElement("div");
 
   flexDiv.classList.add("flex-container-ltr");
   flexDiv.classList.add("flex-container-examples");
   if (border) {flexDiv.classList.add("dotted-border");}
   
   for (i=0; i < hebrewParas.length; i++){
//test("hello from createJavascriptExampleFlexbox,i=" + i); 
      var hebrewWord = hebrewParas[i].innerHTML.trim();
//test("hello from createJavascriptExampleLTRFlexbox");	
  
      var cellDiv = document.createElement("div");
	  if (anyIndividualAudio){
		 if (audios[i].trim().length > 0) {
			cellDiv.classList.add("soundclick");
            cellDiv.addEventListener("click", soundclickEventListener);
		 } 
	  }	

	  if (anyHighlight) {
         var thisHebrewConsonants = convertHebrewWordToArray(hebrewWord);
         var thisHebrewHighlight = crSelectedArray(highlights[i],thisHebrewConsonants.length);
		 var currentSpan = false;
         for (j=0; j < thisHebrewConsonants.length; j++){
			if (thisHebrewHighlight[j]){
			   if (currentSpan) {cellDiv.appendChild(thisSpan);}
               var thisSpan = document.createElement("span"); 
	           thisSpan.classList.add("hebrew30");
	           thisSpan.classList.add(highlightClass);
               thisSpan.appendChild(document.createTextNode(thisHebrewConsonants[j]));
               cellDiv.appendChild(thisSpan);
			   currentSpan = false;
            } else {
               if (!(currentSpan)){
                  var thisSpan = document.createElement("span"); 
	              thisSpan.classList.add("hebrew30");
	              thisSpan.classList.add("vocab-word-color");
				  var currentSpan = true;
			   }   
               thisSpan.appendChild(document.createTextNode(thisHebrewConsonants[j]));
            }
         }
		 if (currentSpan) {cellDiv.appendChild(thisSpan);}
	  } else {
         var thisSpan = document.createElement("span"); 
	     thisSpan.classList.add("hebrew30");
	     thisSpan.classList.add("vocab-word-color");
	 // if (anyEmphasis){
	 //	  if (wordEmphasised[i]) {thisSpan.classList.add("emphasised-word");}
	 // }	  
         thisSpan.appendChild(document.createTextNode(hebrewWord));
         cellDiv.appendChild(thisSpan);
	  }	 
	  
	  if (anyTranslations) {
		  var thisPara = document.createElement("p");
		  thisPara.appendChild(document.createTextNode(translations[i]));
		  cellDiv.appendChild(thisPara);
	  }	  
	  
	  flexDiv.appendChild(cellDiv);
	  
	  if (anyIndividualAudio){
		 if (audios[i].trim().length > 0){ 
            var thisSpan = document.createElement("span");   
            thisSpan.classList.add("hidden");
            thisSpan.appendChild(document.createTextNode(audios[i]));
            flexDiv.appendChild(thisSpan);
		 }	
	  }	  
   }
   
   thisDiv.appendChild(flexDiv);

}


// end