"use strict";
	
// function crRowHeadingCol is in biblical_hebrew_reference_tables_utilities.js

//-----------------------------------------------------------------------------------------------
//    VERB TABLES ARE IN A SEPARATE FILE, THESE ARE THE OTHER TABLES
//-----------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
   
   var i;
  
   // noun possessive suffixes table
   //------------------------------
   var onloadTable = document.getElementsByClassName("onload-possessive-suffix-table");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crPossessiveSuffixReferenceTable(thisDiv);
   }
	
    // object pronouns on prepositions table
   //----------------------
   
       // content specified in HTML
   var onloadTable = document.getElementsByClassName("onload-object-suffix-on-preposition-table");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crObjectSuffixOnPrepositionReferenceTable(thisDiv);
   }
   
   // personal pronouns table
   //------------------------
   
       // content specified in HTML
   var onloadTable = document.getElementsByClassName("onload-personal-pronouns-table");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crPersonalPronounsReferenceTable(thisDiv);
   }
})

//---------------------------------------------------------
//----------------------------------------------------------
  // prepositions with object suffix
  // content specified in HTML
  
function crObjectSuffixOnPrepositionReferenceTable(thisDiv) {
	var i;
	var prepositionHTML;
	
	var dataDiv = thisDiv.nextElementSibling;
	
    var prepositions = dataDiv.getElementsByClassName("js-preposition");
	var nPrepositions = prepositions.length;
	
	var prepositionTranslation = [];
	var prepositionName = [];
	var suffixS1 =[];
	var suffixS2m =[];
	var suffixS2f =[];
	var suffixS3m =[];
	var suffixS3f =[];
	var suffixP1 =[];
	var suffixP2m =[];
	var suffixP3m =[];
	var suffixP2f =[];
	var suffixP3f =[];
	
    for (i = 0; i < nPrepositions; i++){	
        var prepositionHTML = prepositions[i].innerHTML.split(globalDivider1);
	    prepositionTranslation[i] = prepositionHTML[0] ;
	    prepositionName[i] = prepositionHTML[1] ;
	    suffixS1[i] = prepositionHTML[2] ;
	    suffixS2m[i] = prepositionHTML[3] ;
	    suffixS2f[i] = prepositionHTML[4] ;
	    suffixS3m[i] = prepositionHTML[5] ;
	    suffixS3f[i] = prepositionHTML[6] ;
	    suffixP1[i] = prepositionHTML[7] ;
	    suffixP2m[i] = prepositionHTML[8] ;
	    suffixP3m[i] = prepositionHTML[9] ;
	    suffixP2f[i] = prepositionHTML[10] ;
	    suffixP3f[i] = prepositionHTML[11] ;
    }
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("reference-table");
	
	// table header
	
	var thisRow = document.createElement("tr");

	thisRow.appendChild(document.createElement("th"));
	   
	for (i = 0; i < prepositionName.length; i++) {
	   var thisCol = document.createElement("th");
	   
	   var span = document.createElement("span");
	   span.classList.add("hebrew30");
  	   span.appendChild(document.createTextNode(convertHTMLToJavascript(prepositionName[i])));
	   thisCol.appendChild(span);
	   
	   thisCol.appendChild(document.createElement("br"));
       thisCol.appendChild(document.createTextNode(prepositionTranslation[i]));
 	   thisRow.appendChild(thisCol);
	}
   
    thisTable.appendChild(thisRow);
	

   // "Singular" header row
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular", nPrepositions));

   // singular rows
   //--------------
   
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("me","", suffixS1));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("you",maleSymbol,suffixS2m));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("you",femaleSymbol,suffixS2f));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("him","",suffixS3m));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("her","",suffixS3f,true));

  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural", nPrepositions));

    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("us","",suffixP1));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("you", maleSymbol+maleSymbol,suffixP2m));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("them", maleSymbol+maleSymbol,suffixP3m, true));


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only", nPrepositions));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("you", femaleSymbol+femaleSymbol,suffixP2f));
    thisTable.appendChild(crTableRowObjectSuffixOnPrepositionReferenceTable("them", femaleSymbol+femaleSymbol,suffixP3f,true));

    thisDiv.appendChild(thisTable);
	
	
    // note about cantillation marks indicating stressed
    thisDiv.appendChild(crNoteAboutStressedSyllable());

}

function crTableRowObjectSuffixOnPrepositionReferenceTable(thisRowHeader,mfSymbol,thisRowSpecs,lastRow=false){
	// thisRowSpecs is an array, each array item is NOT an array
	// thisRowSpecs strings of letter names separated by "+", need to be converted to JS codes
	// allows for >1 item in row, if >1 items in array item are separated by globalDivider2
   var i;
   var col;
   
   var thisRow = document.createElement("tr");
   thisRow.classList.add("reference-table-border-top");
   if (lastRow){thisRow.classList.add("reference-table-border-bottom");}
   
   // row heading column 1
   //-------------------

   thisRow.appendChild(crRowHeadingCol(thisRowHeader, mfSymbol));

	// data columns
	//-------------
	
   var nCols = thisRowSpecs.length ;	
   
   for (col = 0; col < nCols; col++){
      var thisCol = document.createElement("td");
      //thisCol.classList.add("reference-table-cell");
	  
	  var thisColText = thisRowSpecs[col].split(globalDivider2);

      for (i=0; i < thisColText.length; i++){
		if (i > 0) {
            thisCol.appendChild(document.createElement("br"));
        }			
 	    var thisJavascript = convertHTMLToJavascript(thisColText[i]);
	    var thisSpan = document.createElement("span");
	    thisSpan.classList.add("hebrew25");
	    thisSpan.appendChild(document.createTextNode(thisJavascript));
	    thisCol.appendChild(thisSpan);
	  }
      thisRow.appendChild(thisCol);
   
   }  

   return thisRow;
}


//---------------------------------------------------------
//----------------------------------------------------------
 // possessive suffixes
 // content specified in JS

function crPossessiveSuffixReferenceTable(thisDiv){
    var i;
	
	var thisTable = document.createElement("table");
    thisTable.classList.add("reference-table");
	
	// table header row
	var thisRow = document.createElement("tr");
	
	var headings = [" Singular nouns "," Plural nouns "];

	thisRow.appendChild(document.createElement("th"));
	   
	for (i = 0; i < headings.length; i++) {
	   var thisCol = document.createElement("th");
       thisCol.appendChild(document.createTextNode(headings[i]));
      // thisCol.classList.add("reference-table-column-heading");
      // thisCol.classList.add("object-suffix-table-header-cell");
 	   thisRow.appendChild(thisCol);
	}
   
    thisTable.appendChild(thisRow);


   // "Singular" header row
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",3));

	var thisRowSpecs = [[yod,"chirik-white"],[yod,"patach-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("my","",thisRowSpecs));
	var thisRowSpecs = [[finalChaf+kamatz,"schwah-white"],[yod+finalChaf+kamatz,"segol-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("your",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[finalChaf+schwah,"tsere-white"],[yod+chirik+finalChaf+schwah,"patach-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("your",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[vav+cholam],[yod+vav,"kamatz-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("his","",thisRowSpecs));
	var thisRowSpecs = [[heh+dagesh,"kamatz-white"],[yod+heh+kamatz,"segol-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("her","",thisRowSpecs, true));


  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",3));

	var thisRowSpecs = [[nun+vav+dagesh,"tsere-white"],[yod+nun+vav+dagesh,"tsere-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("our","",thisRowSpecs));
	var thisRowSpecs = [[chaf+segol+finalMem,"schwah-white"],[yod+chaf+segol+finalMem,"tsere-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("your",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[finalMem,"kamatz-white"],[yod+heh+segol+finalMem,"tsere-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("their",maleSymbol+maleSymbol,thisRowSpecs, true));

  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",3));
	
	var thisRowSpecs = [[chaf+segol+finalNun,"schwah-white"],[yod+chaf+segol+finalNun,"tsere-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("your",femaleSymbol+femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[finalNun,"kamatz-white"],[yod+heh+segol+finalNun,"tsere-white"]];
    thisTable.appendChild(crTableRowPossessiveSuffixReferenceTable("their",femaleSymbol+femaleSymbol,thisRowSpecs, true));
	
   // insert table in document	
	thisDiv.appendChild(thisTable);
	
}


function crTableRowPossessiveSuffixReferenceTable(thisRowHeader,mfSymbol,thisRowSpecs, lastRow=false){
	// allows for vowel image (dotted circle with vowel mark) before suffix letters
	// adds a dash at beginning to indicate that this is a suffix
	
	// thisRowSpecs is an array, each item in array is also an array
	// data created in JS, ie, not read in from HTML
	// does not allow for >1 item in a row
   var i;
   var col;
   
   var thisRow = document.createElement("tr");
   thisRow.classList.add("reference-table-border-top");
   if (lastRow){thisRow.classList.add("reference-table-border-bottom");}


    
   // row heading column 1
   //-------------------
   
   thisRow.appendChild(crRowHeadingCol(thisRowHeader, mfSymbol));
	
   // data columns
   //-------------
   	
   var nCols = thisRowSpecs.length ;	
   
   for (col = 0; col < nCols; col++){
	  // if 2 items in a column, 
 	  //  first item in each column is consonant image, second is hebrew letters
	  // otherwise, item is hebrew letters
      var thisCol = document.createElement("td");
      //thisCol.classList.add("reference-table-cell");
	  
	  var thisColText = thisRowSpecs[col];

 	  var thisSuffix = thisColText[0];
	  var thisSpan = document.createElement("span");
	  thisSpan.classList.add("hebrew25");
	  thisSpan.appendChild(document.createTextNode(thisSuffix));
	  thisCol.appendChild(thisSpan);
	  
	  if (thisColText.length == 2){
         var thisConsonantImg = thisColText[1];
 		 var thisSpan = document.createElement("span");
	     thisSpan.classList.add("generic-consonant-image-" + thisConsonantImg);
	     thisCol.appendChild(thisSpan);
      }
	  
	  // add dash to indicate that this is a suffix
	     var thisSpan = document.createElement("span");
	     thisSpan.classList.add("hebrew25");
	     thisSpan.appendChild(document.createTextNode("-"));
	     thisCol.appendChild(thisSpan);
	  
      thisRow.appendChild(thisCol);
   
   }  

   return thisRow;
}



//---------------------------------------------------------
//----------------------------------------------------------
 // personal pronouns
 // content specified in JS

function crPersonalPronounsReferenceTable(thisDiv){
    var i;
	
	var thisTable = document.createElement("table");
    thisTable.classList.add("reference-table");
	
	// table header row
//	var thisRow = document.createElement("tr");
	
//	var headings = [" "];

//	thisRow.appendChild(document.createElement("th"));
	   
//	for (i = 0; i < headings.length; i++) {
//	   var thisCol = document.createElement("th");
 //      thisCol.appendChild(document.createTextNode(headings[i]));
 //	   thisRow.appendChild(thisCol);
//	}
   
 //   thisTable.appendChild(thisRow);


   // "Singular" header row
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",3));

	var thisRowText = [[alef+chatafPatach+nun+chirik+yod],[alef+kamatz+nun+cholam +chaf+chirik+yod]];
	var thisRowAudio = ["w052_ani","w052_anochi"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("I","",thisRowText, thisRowAudio));

	var thisRowText = [[alef+patach+tav+dagesh+kamatz+heh]];
	var thisRowAudio = ["w067_atah"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("you",maleSymbol,thisRowText, thisRowAudio));

	var thisRowText = [[alef+patach+tav+dagesh+schwah]];
	var thisRowAudio = ["w512_at"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("you",femaleSymbol,thisRowText, thisRowAudio));

	var thisRowText = [[heh+vav+dagesh+alef]];
	var thisRowAudio = ["w031_hu"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("he","",thisRowText, thisRowAudio));

	var thisRowText = [[heh+chirik+yod+alef],[heh+chirik+vav+alef]];
	var thisRowAudio = ["w104_hi","w104_hi"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("she","",thisRowText, thisRowAudio));

  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",3));
	
	var thisRowText = [[alef+chatafPatach+nun+patach+chet+schwah+nun+vav+dagesh]];
	var thisRowAudio = ["w330_anachnu"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("we","",thisRowText, thisRowAudio));

	var thisRowText = [[alef+patach+tav+dagesh+segol+finalMem]];
	var thisRowAudio = ["w166_atem"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("you",maleSymbol+maleSymbol,thisRowText, thisRowAudio));

	var thisRowText = [[heh+tsere+finalMem],[heh+tsere+mem+dagesh+kamatz+heh]];
	var thisRowAudio = ["w088_hem","w088_hema"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("they",maleSymbol+maleSymbol,thisRowText, thisRowAudio));

	var thisRowText = [[heh+tsere+nun+dagesh+kamatz+heh]];
	var thisRowAudio = ["w570_hena"];
    thisTable.appendChild(crTableRowPersonalPronounsReferenceTable("they",femaleSymbol+femaleSymbol,thisRowText, thisRowAudio));

	
   // insert table in document	
	thisDiv.appendChild(thisTable);
	
}


function crTableRowPersonalPronounsReferenceTable(thisRowHeader,mfSymbol,thisRowText,thisRowAudio, lastRow=false){
	
	// thisRowText is an array, each item in array is also an array
	// thisRowAudio is an array
	// data created in JS, ie, not read in from HTML
	// allows for 2 items
	// optional audio for each row
   var i;
   
   const audioDir = "words/";
   
   var thisRow = document.createElement("tr");
   thisRow.classList.add("reference-table-border-top");
   if (lastRow){thisRow.classList.add("reference-table-border-bottom");}


    
   // row heading column 1
   //---------------------
   
   thisRow.appendChild(crRowHeadingCol(thisRowHeader, mfSymbol));
	
   // data column 2 and optionally column 3
   //--------------------------------------
   	
   
   var nItems = thisRowText.length ;
   
   for (i = 0; i < nItems; i++){
	  
      var thisCol = document.createElement("td");

      var thisColText = thisRowText[i][0];
      var thisColAudio = thisRowAudio[i];

	  var thisSpan = document.createElement("span");
	  thisSpan.classList.add("hebrew25");
	  thisSpan.classList.add("clickable");
	  thisSpan.addEventListener("click",soundclickEventListener);   //defined in reference_utilities.js
	  thisSpan.appendChild(document.createTextNode(thisColText));
	  thisCol.appendChild(thisSpan);
	  
	  var thisSpan = document.createElement("span");
	  thisSpan.classList.add("hidden");
	  thisSpan.appendChild(document.createTextNode(audioDir + thisColAudio));
	  thisCol.appendChild(thisSpan);
	  
      thisRow.appendChild(thisCol);

   }  
	  

   return thisRow;
}

//----------------------------------------------------------

