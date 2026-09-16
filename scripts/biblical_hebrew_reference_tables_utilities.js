"use strict";
	
	//const noVerbPerson = "-"; 
    const verbDivider = "*";	


function convertHTMLToJavascript(thisHTML){
 // thisHTML is a single word, ie lettername+lettername etc, no spaces	
//	var i;
	var j;
	var k;
	
	var stringLetters=[	 
	 "schwah", 
	 "chatafSegol", 
	 "chatafPatach", 
	 "chatafKamatz", 
	 "chirik",
	 "tsere", 
	 "segol", 
	 "patach",
	 "kamatz", 
	 "cholam", 
	 "cholamVav", 
	 "shureq", 
	 "dagesh", 
	 "alef", 
	 "bet", 
	 "gimel", 
	 "dalet", 
	 "heh", 
     "vav", 
     "zayin", 
     "chet", 
     "tet", 
	 "yod", 
	 "finalChaf", 
	 "chaf", 
	 "lamed", 
	 "mem", 
	 "finalMem", 
	 "nun", 
	 "finalNun", 
	 "samech", 
	 "ayin", 
	 "peh", 
	 "finalPeh", 
	 "tsadi", 
	 "finalTsadi", 
	 "kuf", 
	 "resh", 
	 "shin", 
	 "sin",
	 "tav",
	 "-"
     ];
    var codeLetters = [
	 schwah, 
	 chatafSegol, 
	 chatafPatach, 
	 chatafKamatz, 
	 chirik,
	 tsere, 
	 segol, 
	 patach,
	 kamatz, 
	 cholam, 
	 cholamVav, 
	 shureq, 
	 dagesh, 
	 alef, 
	 bet, 
	 gimel, 
	 dalet, 
	 heh, 
     vav, 
     zayin, 
     chet, 
     tet, 
	 yod, 
	 finalChaf, 
	 chaf, 
	 lamed, 
	 mem, 
	 finalMem, 
	 nun, 
	 finalNun, 
	 samech , 
	 ayin , 
	 peh, 
	 finalPeh, 
	 tsadi, 
	 finalTsadi, 
	 kuf, 
	 resh, 
	 shin, 
	 sin,
     tav,
     dash	 
    ];

	var thisJavascript = "";
    var theseLetters = thisHTML.trim().split("+");	//strings with char codes
    for (j = 0; j < theseLetters.length; j++){
      for (k = 0; k < stringLetters.length; k++){
         if (theseLetters[j] == stringLetters[k]) {
			thisJavascript = thisJavascript + codeLetters[k];
         }
      }
    }		   
   return thisJavascript;	
}	


function crRowHeadingCol(rowHeading, mfSymbol ){
	// the heading for each table row
	var i;
	
	var thisCol = document.createElement("td");
	 
    var rowHeadingSplit = rowHeading.split(globalDivider1);
	
	for (i=0; i < rowHeadingSplit.length; i++){
		
       if (i > 0) { thisCol.appendChild(document.createElement("br"));  }
	   
       thisCol.appendChild(document.createTextNode(rowHeadingSplit[i]));
   
       if (mfSymbol.length > 0){
         var span1 = document.createElement("span");
         span1.appendChild(document.createTextNode(" " + mfSymbol));
	     span1.classList.add("male-female-symbol-reference-table");
         thisCol.appendChild(span1);
		 
		 if (rowHeading.indexOf("(") > -1 ){
            var span2 = document.createElement("span");
            span2.appendChild(document.createTextNode(") "));
            thisCol.appendChild(span2);
		 }	 
       }
	}

     return thisCol;	 

}	

function crReferenceTableSectionHeaderRow(thisHeader, nDataCols=1, translation=false){
	// row within table designating sections (Singular, Plural, Females only)
	var i;
	
	var thisRow = document.createElement("tr");
	
	//thisCol.colSpan = "50";
	var thisCol = document.createElement("td");
	thisCol.colSpan = nDataCols.toString();
	if (translation) {thisCol.classList.add("reference-table-translation-heading");}
	else { thisCol.classList.add("reference-table-section-heading");}
	
    var thisHeaderSplit = thisHeader.split(globalDivider1);
	
	for (i=0; i < thisHeaderSplit.length; i++){
		
       if (i > 0) { thisCol.appendChild(document.createElement("br"));  }
	   
       thisCol.appendChild(document.createTextNode(thisHeaderSplit[i]));
    }
	
 	thisRow.appendChild(thisCol);
	
    return thisRow;
}

	
function crSpaceBetweenTables(){
    // create a space between tables
	var thisPara = document.createElement("p");
	thisPara.appendChild(document.createElement("br"));
	
	return thisPara;
}	
	
function crNoteAboutStressedSyllable(){
 	var thisNote = document.createElement("p");

    thisNote.appendChild(document.createTextNode("Note: Where the stress is on the secondlast syllable, this is indicated by cantillation mark  "));
  	   	  var image1 = document.createElement("img");
	      image1.src = setJpgName("mapach", "vowels");
	      image1.classList.add("cantillation-image-intext");
          thisNote.appendChild(image1);
    thisNote.appendChild(document.createTextNode(" or cantillation mark "));
 	   	  var image1 = document.createElement("img");
	      image1.src = setJpgName("kadma", "vowels");
	      image1.classList.add("cantillation-image-intext");
          thisNote.appendChild(image1);
	return thisNote;
}


// just for checking, this function not used in actual tables
function checkVowelsAndConsonants(thisDiv){

var i;
	
var consonantCodes = [alef,bet,gimel,dalet,heh,vav,zayin,
     chet,tet,yod,finalChaf,chaf,lamed,
	 mem,finalMem,nun,finalNun,samech,
	 ayin,peh,finalPeh,tsadi,finalTsadi,
	 kuf,resh,shin,alternativeshin,sin,alternativesin,tav
	];
var consonantNames = ["alef","bet","gimel","dalet","heh","vav","zayin",
     "chet","tet","yod","finalChaf","chaf","lamed",
	 "mem","finalMem","nun","finalNun","samech",
	 "ayin","peh","finalPeh","tsadi","finalTsadi",
	 "kuf","resh","shin","alternative shin","sin","alternative sin","tav"
	];
	
 for (i = 0; i < consonantCodes.length; i++){
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode(consonantNames[i]+": "));
    var thisSpan = document.createElement("span");
    thisSpan.classList.add("hebrew25");
    thisSpan.appendChild(document.createTextNode(consonantCodes[i]));
    thisPara.appendChild(thisSpan);
	
    thisDiv.appendChild(thisPara);
 }	
}


	

