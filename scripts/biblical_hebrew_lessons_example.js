
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
   
    // use this when want to display hebrew quote with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words
	// optional specification of which words to highlight
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//                         - first item is the class to be applied to highlight each consonant
	// in Hebrew input, include single bet with space on either side if want a space left (for example, for [is] translation)
   var javascriptListClass = document.getElementsByClassName("javascript-example-rtl");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
	  var border = false;
	  if (thisDiv.classList.contains("javascript-border")){ border=true;}
      //createJavascriptExampleRTLFlexbox(thisDiv, border); 
      createJavascriptExampleRTLLTRFlexbox(thisDiv, "RTL", border=true)
   }
   
//test("hello from lessons_examples.js addEventListener");


    // use this when want to display individual hebrew 
	// not a quote, so display left to right
	// optional translations under hebrew words
	// optional audio for individual words
	// optional specification of which words to highlight
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//                         - first item is the class to be applied to highlight each consonant
	// optional specification of first word in list is to be flagged infrequent (all words after are also infrequent)

   var javascriptListClass = document.getElementsByClassName("javascript-example-ltr");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
	  var border = false;
	  if (thisDiv.classList.contains("javascript-border")){ border=true;}
      //createJavascriptExampleLTRFlexbox(thisDiv, border); 
      createJavascriptExampleRTLLTRFlexbox(thisDiv, "LTR", border=true)
   }

    // use this when want to include apparent RTL in another LTR flexbox
	// if too long, entire content appear under first div
	// note that content within the div will not wrap properly, so only suitable for short hebrew content
	// use this when want to display hebrew with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words
	// in Hebrew input, include single bet with space on either side if want a space left (for example, for [is] translation)
   var javascriptListClass = document.getElementsByClassName("javascript-example-false-rtl");
   for (i = 0; i < javascriptListClass.length; i++) {
 	  var thisDiv = javascriptListClass[i];
	  var border = false;
	  if (thisDiv.classList.contains("javascript-border")){ border=true;}
      createJavascriptExampleFalseRTLFlexbox(thisDiv, border); 
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
	// specify direction="RTL" or direction="LTR"
	// RTL for quotes, LTR for individual words reading left to right
	// optional audio for individual words
	// optional specification of which words to highlight
	//          - optional first item is class to be applied to highlight a word (default class is "emphasised-word")
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//          - optional first item is the class to be applied to highlight each consonant (default class is "highlighted-char")
    //
 	// when RTL 
	//    optional audio for whole quote
	//    in Hebrew input, include single bet with space on either side if want a space left (for example, for [is] translation)
	// 
	// when LTR
	//    optional specification of first word in list to be flagged infrequent (all words after are also infrequent)
	//      - these words have class "reference-table-infrequent2"

function createJavascriptExampleRTLLTRFlexbox(thisDiv, direction, border=true){
   var i;
   var j;
   
   const LTR = "LTR";
   const RTL = "RTL";
   
   if (direction != LTR && direction != RTL) {return;}
   
   const bet = "\u05D1";
   const mspace = "\u2003"; 
   
   var emphasisedWordClass = "emphasised-word";
   var highlightedCharClass = "highlighted-char";
   var infrequentWordClass = "reference-table-infrequent2";
      
   var dataDiv = thisDiv.nextElementSibling;

   if (direction == RTL){ 
      var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
      var hebrewWords = hebrewPara.innerHTML.trim().split(/\s+/); //split by one or more spaces
   } else {   
     //  LTR, each hebrew word is in a separate paragraph   
      var hebrewDiv = dataDiv.getElementsByClassName("js-hebrew")[0];
      var hebrewParas = hebrewDiv.children;
	  var hebrewWords = [];
      for (i=0; i < hebrewParas.length; i++){
	     hebrewWords[i] = hebrewParas[i].innerHTML.trim();
	  }	 
   }

   var nHebrewWords = hebrewWords.length;
   
   var individualAudioPara = dataDiv.getElementsByClassName("js-audio-individual");
   var translationPara = dataDiv.getElementsByClassName("js-translation");
   var emphasisPara = dataDiv.getElementsByClassName("js-emphasis");
   var highlightPara = dataDiv.getElementsByClassName("js-highlight");
   // only if direction = RTL
   var audioPara = dataDiv.getElementsByClassName("js-audio");
   // only if direction = LTR
   var firstInfrequentPara = dataDiv.getElementsByClassName("js-first-infrequent");

   
   var anyIndividualAudio = false;
   if (individualAudioPara.length > 0){
	   anyIndividualAudio = true;
	   var audios = individualAudioPara[0].innerHTML.split(globalDivider1);
   }

   var anyTranslations = false;
   if (translationPara.length > 0){
	   anyTranslations = true;
	   var translations = translationPara[0].innerHTML.split(globalDivider1);
   }
    
   var anyEmphasis = false;
   if (emphasisPara.length > 0){
	   anyEmphasis = true;
	   // list of hebrew words to be emphasised (numbers separated by spaces)is in 
	   // a single para, with optional name of class to be used in first position
	   var emphasisSpecs = emphasisPara[0].innerHTML.trim().split(/\s+/);
	   // check whether first item is class name
	   if (emphasisSpecs[0].length > 2 ){
//test("hello from createJavascriptExampleRTLLTRFlexbox, emphasisSpecs[0].length=" + emphasisSpecs[0].length + ",nHebrewWords="+nHebrewWords );
	      emphasisedWordClass = emphasisSpecs[0].trim(); //extract name of class to use for emphasising 
		  emphasisSpecs.shift(); // remove first item
	   }	   
	   var wordEmphasised = [];
       for (i=0; i < hebrewWords.length; i++){
		  wordEmphasised[i] = false;
          for (j=0; j < emphasisSpecs.length; j++){
       		 if (Number(emphasisSpecs[j] - 1) == i){wordEmphasised[i] = true;}
		  }
	   }	   
   }
   
   var anyHighlights = false;
   if (highlightPara.length > 0){
	   anyHighlights = true;
	   // create array
	   // for each hebrew word, list of consonant number(s) starting from 1 to be highlighted
	   // - empty if no highlighted consonants for that word
	   var highlightsSpecs = highlightPara[0].innerHTML.trim().split(globalDivider1);
	   // check whether first iem is class name
	   if (highlightsSpecs[0].length > 2){
	      highlightedCharClass = highlightsSpecs[0].trim(); // extract name of class to use for highlighting 
		  highlightsSpecs.shift(); // remove first item
	   }	   
   }
   
   // only if direction = LTR
   // single number, first hebrew word in list to be flagged as infrequent
   //     all subsequent words in list also flagged infrequent
   // optional class name at beginning
   var firstInfrequent = hebrewWords.length + 1;
   if (firstInfrequentPara.length > 0){
	   var firstInfrequentSpecs = firstInfrequentPara[0].innerHTML.trim().split(/\s+/);
	   if (Number(firstInfrequentSpecs[0]) == NaN){
          infrequentWordClass = firstInfrequentSpecs[0];
		  firstInfrequent = Number(firstInfrequentSpecs[1]);
	   } else {	   
		  firstInfrequent = Number(firstInfrequentSpecs[0]);
       }
   }	   
   
   //-------- create the list-------------------

   var flexDiv = document.createElement("div");
 
   if (direction = RTL){flexDiv.classList.add("flex-container-rtl");}
   else                {flexDiv.classList.add("flex-container-ltr");}

   flexDiv.classList.add("flex-container-examples");
   if (border) {flexDiv.classList.add("dotted-border");}

   // only if direction = RTL
   // this is the audio for the whole verse
   if (audioPara.length > 0){
      var audioText = audioPara[0].innerHTML;
      var cellDiv = document.createElement("div");
	  
      addExtendedAudioElements(cellDiv, audioText)
   
      flexDiv.appendChild(cellDiv);  
   }	   
   
   //for (i=0; i < hebrewWords.length; i++){
   for (i=0; i < nHebrewWords; i++){
      var hebrewWord = hebrewWords[i];

      var cellDiv = document.createElement("div");

	  if (anyIndividualAudio){
		 if (audios[i].trim().length > 0) {
			cellDiv.classList.add("soundclick");
            cellDiv.addEventListener("click", soundclickEventListener);
		 } 
	  }	

	  if (anyEmphasis){
   		  if (wordEmphasised[i]) {cellDiv.classList.add(emphasisedWordClass);}
	  }	 

      if ( i >= firstInfrequent ) {cellDiv.classList.add(infrequentWordClass);}	  
	
	  
	  if (hebrewWord == bet ) {
		 // bet indicates leave a space in hebrew 
         var thisSpan = document.createElement("span"); 
         thisSpan.appendChild(document.createTextNode(mspace));
 	     thisSpan.classList.add("hebrew30");
         cellDiv.appendChild(thisSpan);
      } else {
		 var noHighlightsThisWord = true;
		 if (anyHighlights){
			if (highlightsSpecs[i] != ""){	
			    noHighlightsThisWord = false;
		    }
         }
         if (noHighlightsThisWord){
            var thisSpan = document.createElement("span"); 
	        thisSpan.classList.add("hebrew30");
            thisSpan.appendChild(document.createTextNode(hebrewWord));
            cellDiv.appendChild(thisSpan);

         } else {			 
            var thisHebrewConsonants = convertHebrewWordToArray(hebrewWord);
            var thisHebrewHighlight = crSelectedArray(highlightsSpecs[i],thisHebrewConsonants.length);
		    var currentSpan = false;
            for (j=0; j < thisHebrewConsonants.length; j++){
			   if (thisHebrewHighlight[j]){
			      if (currentSpan) {cellDiv.appendChild(thisSpan);}
                  var thisSpan = document.createElement("span"); 
	              thisSpan.classList.add("hebrew30");
	              thisSpan.classList.add(highlightedCharClass);
                  thisSpan.appendChild(document.createTextNode(thisHebrewConsonants[j]));
                  cellDiv.appendChild(thisSpan);
			      currentSpan = false;
               } else {
                   if (!(currentSpan)){
                     var thisSpan = document.createElement("span"); 
	                 thisSpan.classList.add("hebrew30");
	            //  thisSpan.classList.add("vocab-word-color");
				     var currentSpan = true;
			       }   
                   thisSpan.appendChild(document.createTextNode(thisHebrewConsonants[j]));

              }
            }
		    if (currentSpan) {cellDiv.appendChild(thisSpan);}
		 }	
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



//-----------------------------------------------------------------------------------------------
    // use this when want to include apparent RTL in another LTR flexbox
	// if too long, entire content appear under first div
	// note that content within the div will not wrap properly, so only suitable for short hebrew content
	// use this when want to display hebrew with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words
	// in Hebrew input, include single bet with space on either side if want a space left (for example, for [is] translation)

    // doesn't have word or character highlighting
function createJavascriptExampleFalseRTLFlexbox(thisDiv, border=true){
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
 
   flexDiv.classList.add("flex-container-ltr");
   flexDiv.classList.add("flex-container-examples");
   if (border) {flexDiv.classList.add("dotted-border");}
   //for (i=0; i < hebrewWords.length; i++){
   for (i=hebrewWords.length-1; i >=0 ; i--){
//test("hello from createJavascriptExampleFlexbox,i=" + i);   
      var cellDiv = document.createElement("div");
      var thisSpan = document.createElement("span"); 
	  thisSpan.classList.add("hebrew30");
	//  thisSpan.classList.add("vocab-word-color");
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
   

   if (audioPara.length > 0){
      var audioText = audioPara[0].innerHTML;
      var cellDiv = document.createElement("div");
	  
      addExtendedAudioElements(cellDiv, audioText)
   
      flexDiv.appendChild(cellDiv);  
   }
   
   thisDiv.appendChild(flexDiv);

}




//--------------------------------------------------------------------------------------------------
//-------- original separate functions for LTR and RTl, now (19/6/2026) combined in single function

//-----------------------------------------------------------------------------------------------

    // use this when want to display hebrew with (optional) translations under hebrew words
	// optional audio for whole quote
	// optional audio for individual words
	// optional specification of which words to highlight
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//                         - first item is the class to be applied to highlight each consonant
	// in Hebrew input, include single bet with space on either side if want a space left (for example, for [is] translation)

function createJavascriptExampleRTLFlexbox(thisDiv, border=true){
   var i;
   var j;
   const bet = "\u05D1";
   const mspace = "\u2003"; 
   var emphasisedWordClass = "emphasised-word";
	
   var dataDiv = thisDiv.nextElementSibling;

   var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
   var audioPara = dataDiv.getElementsByClassName("js-audio");
   var individualAudioPara = dataDiv.getElementsByClassName("js-audio-individual");
   var translationPara = dataDiv.getElementsByClassName("js-translation");
   var emphasisPara = dataDiv.getElementsByClassName("js-emphasis");
   var highlightPara = dataDiv.getElementsByClassName("js-highlight");
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
   
   var anyHighlight = false;
   if (highlightPara.length > 0){
	   anyHighlight = true;
	   var highlights = highlightPara[0].innerHTML.trim().split(globalDivider1);
	   var highlightClass = highlights.shift().trim(); // extract name of class to use for highlighting 
   }
 //test("hello from createJavascriptExampleRTLFlexbox, highlights=" + highlights + ", highlightClass=" + highlightClass);  

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
      var hebrewWord = hebrewWords[i];

      var cellDiv = document.createElement("div");

	//  if (anyIndividualAudio) {
	//	  thisSpan.classList.add("soundclick");
    //      thisSpan.addEventListener("click", soundclickEventListener);
	//  }
	  if (anyIndividualAudio){
		 if (audios[i].trim().length > 0) {
			cellDiv.classList.add("soundclick");
            cellDiv.addEventListener("click", soundclickEventListener);
		 } 
	  }	
	
    //  var thisSpan = document.createElement("span"); 
	//  thisSpan.classList.add("hebrew30");
	//  thisSpan.classList.add("vocab-word-color");
	//  if (anyEmphasis){
	//	  if (wordEmphasised[i]) {thisSpan.classList.add("emphasised-word");}
	//  }
	  if (anyEmphasis){
   		  if (wordEmphasised[i]) {cellDiv.classList.add(emphasisedWordClass);}
	  }	 
	
	  
	  if (hebrewWord == bet ) {
         var thisSpan = document.createElement("span"); 
         thisSpan.appendChild(document.createTextNode(mspace));
         cellDiv.appendChild(thisSpan);
      } else {
	     if (anyHighlight) {
		 if (highlights[i] != ""){	 
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
	            //  thisSpan.classList.add("vocab-word-color");
				     var currentSpan = true;
			      }   
                  thisSpan.appendChild(document.createTextNode(thisHebrewConsonants[j]));

              }
            }
		    if (currentSpan) {cellDiv.appendChild(thisSpan);}
			
		    } else{
              var thisSpan = document.createElement("span"); 
	          thisSpan.classList.add("hebrew30");
              thisSpan.appendChild(document.createTextNode(hebrewWord));
              cellDiv.appendChild(thisSpan);
				
			}	
		  } else { 
              var thisSpan = document.createElement("span"); 
	          thisSpan.classList.add("hebrew30");
              thisSpan.appendChild(document.createTextNode(hebrewWord));
              cellDiv.appendChild(thisSpan);
		 }	
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


//-----------------------------------------------------------------------------------------------

    // use this when want to display individual hebrew 
	// not a quote, so display left to right
	// optional translations under hebrew words
	// optional audio for individual words
	// optional specification of which words to highlight
	// optional specification of which consonant(s) in each word should be highlighted (numbering starting at 1)
	//                         - first item is the class to be applied to highlight each consonant
	// optional specification of first word in list is to be flagged infrequent (all words after are also infrequent)

function createJavascriptExampleLTRFlexbox(thisDiv, border=true){
   var i;
   var j;
   var dataDiv = thisDiv.nextElementSibling;

  // var hebrewPara = dataDiv.getElementsByClassName("js-hebrew")[0];
   var hebrewDiv = dataDiv.getElementsByClassName("js-hebrew")[0];
   var translationPara = dataDiv.getElementsByClassName("js-translation");
   var individualAudioPara = dataDiv.getElementsByClassName("js-audio-individual");
   var emphasisPara = dataDiv.getElementsByClassName("js-emphasis");
   var highlightPara = dataDiv.getElementsByClassName("js-highlight");
   var firstInfrequentPara = dataDiv.getElementsByClassName("js-first-infrequent");
   
  // var hebrewWords = hebrewPara.innerHTML.trim().split(/\s+/); //split by one or more spaces
  // var hebrewWords = reverseArray(hebrewWords);
   var hebrewParas = hebrewDiv.children;
   
   var emphasisedWordClass = "emphasised-word";
   var infrequentWordClass = "reference-table-infrequent2";
  // var highlightedCharClass = "highlighted-char";
   

   
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
       for (i=0; i < hebrewParas.length; i++){
		  wordEmphasised[i] = false;
          for (j=0; j < emphasisSpecs.length; j++){
      		 if (Number(emphasisSpecs[j] - 1) == i){wordEmphasised[i] = true;}
		  }
	   }	   
   }
   
   var anyHighlight = false;
   if (highlightPara.length > 0){
	   anyHighlight = true;
	   var highlights = highlightPara[0].innerHTML.trim().split(globalDivider1);
	   var highlightClass = highlights.shift().trim(); // extract name of class to use for highlighting 
   }
  
   var firstInfrequent = hebrewParas.length + 1;
   if (firstInfrequentPara.length > 0){
	   firstInfrequent = Number(firstInfrequentPara[0].innerHTML.trim()) - 1;
   }	   

   var flexDiv = document.createElement("div");
 
   flexDiv.classList.add("flex-container-ltr");
   flexDiv.classList.add("flex-container-examples");
   if (border) {flexDiv.classList.add("dotted-border");}
   
   for (i=0; i < hebrewParas.length; i++){
      var hebrewWord = hebrewParas[i].innerHTML.trim();
  
      var cellDiv = document.createElement("div");
	  if (anyIndividualAudio){
		 if (audios[i].trim().length > 0) {
			cellDiv.classList.add("soundclick");
            cellDiv.addEventListener("click", soundclickEventListener);
		 } 
	  }	
	 
	  if (anyEmphasis){
   		  if (wordEmphasised[i]) {cellDiv.classList.add(emphasisedWordClass);}
	  }	 

      if ( i >= firstInfrequent ) {cellDiv.classList.add(infrequentWordClass);}	  

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
	            //  thisSpan.classList.add("vocab-word-color");
				  var currentSpan = true;
			   }   
               thisSpan.appendChild(document.createTextNode(thisHebrewConsonants[j]));
            }
         }
		 if (currentSpan) {cellDiv.appendChild(thisSpan);}
	  } else {
         var thisSpan = document.createElement("span"); 
	     thisSpan.classList.add("hebrew30");
	   //  thisSpan.classList.add("vocab-word-color");
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