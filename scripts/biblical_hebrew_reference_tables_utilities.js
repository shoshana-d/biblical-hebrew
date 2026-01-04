"use strict";

	// hebrew global constants
	// vowels
	const schwah = "\u05B0";
	const chatafSegol = "\u05B1";
	const chatafPatach = "\u05B2";
	const chatafKamatz = "\u05B3";
	const chirik = "\u05B4";
	const tsere = "\u05B5";
	const segol = "\u05B6";
	const patach = "\u05B7";
	const kamatz = "\u05B8";
	const cholam = "\u05B9";
	const cholamVav = "\u05BA";
	const shureq = "\u05BB";
	const dagesh = "\u05BC";
	// consonants
	const alef = "\u05D0";
	const bet = "\u05D1";
	const gimel = "\u05D2";
	const dalet = "\u05D3";
	const heh = "\u05D4";
    const vav = "\u05D5";
    const zayin = "\u05D6";
    const chet = "\u05D7";
    const tet = "\u05D8";
	const yod = "\u05D9";
	const finalChaf = "\u05DA";
	const chaf = "\u05DB";
	const lamed = "\u05DC";
	const mem = "\u05DE";
	const finalMem = "\u05DD";
	const nun = "\u05E0";
	const finalNun = "\u05DF";
	const samech  = "\u05E1";
	const ayin  = "\u05E2";
	const peh = "\u05E4";
	const finalPeh = "\u05E3";
	const tsadi = "\u05E6";
	const finalTsadi = "\u05E5";
	const kuf = "\u05E7";
	const resh = "\u05E8";
	const shin = "\u05E9\u05C1";
	const sin = "\u05E9\u05C2";
	// alternative single character, may not display on all devices??, would need to change Excel coding
	const alternativeshin = "\uFB2A";
	const alternativesin = "\uFB2B";
	const tav = "\u05EA";
	
	// cantillation mark to indicate stressed syllable
	const rvii = "\u0597";
	const kadma = "\u05A8";
	const mapach = "\u05A4";
	
	const hairsp = "\u200A"; // hairspace
	const thinsp = "\u2009"; 
	const nspace = "\u2002"; 
	const mspace = "\u2003"; 
	
	const maleSymbol = "\u2642"; 
    const femaleSymbol = "\u2640"; 
	
	const dash = "\u002D"; 
	
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


	

