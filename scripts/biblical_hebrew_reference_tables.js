"use strict";
	


//-----------------------------------------------------------------------------------------------
//    VERB TABLES ARE IN A SEPARATE FILE, THESE ARE THE OTHER TABLES
//-----------------------------------------------------------------------------------------------

function crReferenceTableRow(thisRowHeader,mfSymbol,thisRowSpecs,lastRow=false){
	// thisRowSpecs is an array, each array item is NOT an array
	// thisRowSpecs strings of letter names separated by "+", need to be converted to JS codes
	// allows for >1 item in row, if >1 items in array item are separated by globalDivider2
   var i;
   var col;
   
   var thisRow = document.createElement("tr");
   thisRow.classList.add("reference-table-border-top");
   if (lastRow){thisRow.classList.add("reference-table-border-bottom");}
   
   // row heading column
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


function crSuffixReferenceTableRow(thisRowHeader,mfSymbol,thisRowSpecs, lastRow=false){
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


    
   // row heading column
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
   
    thisTable.appendChild(crReferenceTableRow("me","", suffixS1));
    thisTable.appendChild(crReferenceTableRow("you",maleSymbol,suffixS2m));
    thisTable.appendChild(crReferenceTableRow("you",femaleSymbol,suffixS2f));
    thisTable.appendChild(crReferenceTableRow("him","",suffixS3m));
    thisTable.appendChild(crReferenceTableRow("her","",suffixS3f,true));

  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural", nPrepositions));

    thisTable.appendChild(crReferenceTableRow("us","",suffixP1));
    thisTable.appendChild(crReferenceTableRow("you", maleSymbol+maleSymbol,suffixP2m));
    thisTable.appendChild(crReferenceTableRow("them", maleSymbol+maleSymbol,suffixP3m, true));


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only", nPrepositions));
    thisTable.appendChild(crReferenceTableRow("you", femaleSymbol+femaleSymbol,suffixP2f));
    thisTable.appendChild(crReferenceTableRow("them", femaleSymbol+femaleSymbol,suffixP3f,true));

    thisDiv.appendChild(thisTable);
	
	
    // note about cantillation marks indicating stressed
    thisDiv.appendChild(crNoteAboutStressedSyllable());

}

//---------------------------------------------------------
//----------------------------------------------------------
 // possessive suffixes

function crPossessiveSuffixTable(thisDiv){
    var i;
	
	var thisTable = document.createElement("table");
    thisTable.classList.add("reference-table");
    thisTable.classList.add("table-center");
	
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
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",2));

	var thisRowSpecs = [[yod,"chirik-white"],[yod,"patach-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("my","",thisRowSpecs));
	var thisRowSpecs = [[finalChaf+kamatz,"schwah-white"],[yod+finalChaf+kamatz,"segol-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("your",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[finalChaf+schwah,"tsere-white"],[yod+chirik+finalChaf+schwah,"patach-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("your",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[vav+cholam],[yod+vav,"kamatz-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("his","",thisRowSpecs));
	var thisRowSpecs = [[heh+dagesh,"kamatz-white"],[yod+heh+kamatz,"segol-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("her","",thisRowSpecs, true));


  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",2));

	var thisRowSpecs = [[nun+vav+dagesh,"tsere-white"],[yod+nun+vav+dagesh,"tsere-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("our","",thisRowSpecs));
	var thisRowSpecs = [[chaf+segol+finalMem,"schwah-white"],[yod+chaf+segol+finalMem,"tsere-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("your",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[finalMem,"kamatz-white"],[yod+heh+segol+finalMem,"tsere-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("their",maleSymbol+maleSymbol,thisRowSpecs, true));

  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",2));
	
	var thisRowSpecs = [[chaf+segol+finalNun,"schwah-white"],[yod+chaf+segol+finalNun,"tsere-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("your",femaleSymbol+femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[finalNun,"kamatz-white"],[yod+heh+segol+finalNun,"tsere-white"]];
    thisTable.appendChild(crSuffixReferenceTableRow("their",femaleSymbol+femaleSymbol,thisRowSpecs, true));
	
   // insert table in document	
	thisDiv.appendChild(thisTable);
	
}
//----------------------------------------------------------


//-------- old, content specified in JS -----------------------------------------
//-------------------------------------------------------------------------------


function crHeaderRow(headings){
	var i;
   // header row

	var thisRow = document.createElement("tr");
	   
	var thisCol = document.createElement("td");
    thisRow.appendChild(thisCol);
	var thisCol = document.createElement("td");
    thisRow.appendChild(thisCol);
	   
	for (i = 0; i < headings.length; i++) {
	   var thisCol = document.createElement("th");
	   var thisHeading = headings[i];

	   // if 2 items, first is hebrew
	   if (thisHeading.length > 1){

       }		   
       thisCol.appendChild(document.createTextNode(thisHeading[0]));
       //thisCol.classList.add("reference-table-column-heading");
       //if (tableType == "possessive-suffix"){ thisCol.classList.add("possessive-suffix-table-column-heading");	}  
       //else if (tableType == "object-suffix"){ thisCol.classList.add("object-suffix-table-header-cell");	}  
 	   thisRow.appendChild(thisCol);
	}
		
	return thisRow;	
	
}	




// content specified in JS
function crObjectSuffixOnPrepositionReferenceTableOld(thisDiv) {
    var selectedPrepositions = ["l","b"];								  
    var thisTableData = crSelectedPrepositionsWithObjects(selectedPrepositions);
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("reference-table");
	
    var headings = extractObjectSuffixRow(thisTableData,0);
 	thisTable.appendChild(crHeaderRow(headings));

   // "Singular" header row
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular"));

   // singular rows
   //--------------
	
    thisTable.appendChild(oldcrReferenceTableRow("test","", extractObjectSuffixRow(thisTableData,1), false));
    thisTable.appendChild(oldcrReferenceTableRow("you",maleSymbol,extractObjectSuffixRow(thisTableData,2), false));
    thisTable.appendChild(oldcrReferenceTableRow("you",femaleSymbol,extractObjectSuffixRow(thisTableData,7), false));
    thisTable.appendChild(oldcrReferenceTableRow("him","",extractObjectSuffixRow(thisTableData,3), false));
    thisTable.appendChild(oldcrReferenceTableRow("her","",extractObjectSuffixRow(thisTableData,8), false));

  // plural rows
  //------------
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural"));

    thisTable.appendChild(oldcrReferenceTableRow("us","",extractObjectSuffixRow(thisTableData,4), false));
    thisTable.appendChild(oldcrReferenceTableRow("you", maleSymbol+maleSymbol,extractObjectSuffixRow(thisTableData,5), false));
    thisTable.appendChild(oldcrReferenceTableRow("them", maleSymbol+maleSymbol,extractObjectSuffixRow(thisTableData,6), false));


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only"));
    thisTable.appendChild(oldcrReferenceTableRow("you", femaleSymbol+femaleSymbol,extractObjectSuffixRow(thisTableData,9), false));
    thisTable.appendChild(oldcrReferenceTableRow("them", femaleSymbol+femaleSymbol,extractObjectSuffixRow(thisTableData,10), false));

    thisDiv.appendChild(thisTable);
	
	
    // note about cantillation marks indicating stressed
    thisDiv.appendChild(crNoteAboutStressedSyllable());
   
}
//-------- old, content specified in JS -----------------------------------------
//-------------------------------------------------------------------------------

function oldcrReferenceTableRow(thisRowHeader,mfSymbol,thisRowSpecs, dash=false){
   var i;
   var col;
   var thisRow = document.createElement("tr");
   
   var thisCol = document.createElement("td");
   thisRow.appendChild(thisCol);


   var thisCol = document.createElement("td");
   thisCol.appendChild(document.createTextNode(thisRowHeader));
   
   if (mfSymbol.length > 0){
      var span1 = document.createElement("span");
      span1.appendChild(document.createTextNode(" " + mfSymbol));
	  span1.classList.add("male-female-symbol-reference-table");
      thisCol.appendChild(span1);
   }	   

   thisRow.appendChild(thisCol);
	
   var nCols = thisRowSpecs.length ;	
   
   for (col = 0; col < nCols; col++){
	  // if 2 items in a column, 
 	  //    first item in each column is consonant image, second is hebrew letters
	  // otherwise, item is hebrew letters
      var thisCol = document.createElement("td");
      thisCol.classList.add("reference-table-cell");
	  
	  var thisColText = thisRowSpecs[col];
//if (thisRowHeader == "test") {test("hello from oldcrReferenceTableRow, thisColtext[0]="+thisColText[0]);}

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
	  
	  if (dash) {
	     var thisSpan = document.createElement("span");
	     thisSpan.classList.add("hebrew25");
	     thisSpan.appendChild(document.createTextNode("-"));
	     thisCol.appendChild(thisSpan);
	  }
	  
      thisRow.appendChild(thisCol);
   
   }  

   return thisRow;
}

//-------- old, content specified in JS -----------------------------------------
//-------------------------------------------------------------------------------

function crSelectedPrepositionsWithObjects(selectedPrepositions){
	var i;
	
	var selectedPrepositionsWithObjects = [];
	for (i = 0; i < selectedPrepositions.length; i++) {
	   if (selectedPrepositions[i] == "l"){
		   var thisPrep = [[lamed+schwah,"(to)"],
		                   lamed+chirik+yod, lamed+schwah+finalChaf+kamatz, lamed+vav+cholam,
						   lamed+kadma+kamatz+nun+vav+dagesh, lamed+kamatz+chaf+segol+finalMem, lamed+kamatz+heh+segol+finalMem,
						   lamed+kamatz+finalChaf+schwah, lamed+kamatz+heh+dagesh,""  , lamed+kamatz+heh+segol+finalNun];
		   selectedPrepositionsWithObjects.push(thisPrep);
	   } else if (selectedPrepositions[i] == "b"){	
		   var thisPrep = [[bet+dagesh+schwah,"(in)"],
		                   bet+dagesh+chirik+yod, bet+dagesh+schwah+finalChaf+kamatz+thinsp+bet+dagesh+kamatz+finalChaf+schwah, bet+dagesh+vav+cholam,
						   bet+dagesh+kadma+kamatz+nun+vav+dagesh, bet+dagesh+kamatz+chaf+segol+finalMem, bet+dagesh+kamatz+heh+segol+finalMem+thinsp+bet+dagesh+kamatz+finalMem,
						   bet+dagesh+kamatz+finalChaf+schwah, bet+dagesh+kamatz+heh+dagesh,""  , bet+dagesh+kamatz+heh+tsere+finalNun];
		   selectedPrepositionsWithObjects.push(thisPrep);
	   
	   } else if (selectedPrepositions[i] == "k"){	
		   var thisPrep = [[bet+dagesh+schwah,"(in)"],
		                   bet+dagesh+chirik+yod, bet+dagesh+schwah+finalChaf+kamatz+thinsp+bet+dagesh+kamatz+finalChaf+schwah, bet+dagesh+vav+cholam,
						   bet+dagesh+kadma+kamatz+nun+vav+dagesh, bet+dagesh+kamatz+chaf+segol+finalMem, bet+dagesh+kamatz+heh+segol+finalMem+thinsp+bet+dagesh+kamatz+finalMem,
						   bet+dagesh+kamatz+finalChaf+schwah, bet+dagesh+kamatz+heh+dagesh,""  , bet+dagesh+kamatz+heh+tsere+finalNun];
		   selectedPrepositionsWithObjects.push(thisPrep);

       }	   
		
	}	
	
	return selectedPrepositionsWithObjects;

}
//-------- old, content specified in JS -----------------------------------------
//-------------------------------------------------------------------------------


function extractObjectSuffixRow(tableData, itemNumber){
	var i;
	var columns = [];
	
	for (i=0; i < tableData.length; i ++) {
	   var thisPreposition = tableData[i];
	   var thisColumn = [thisPreposition[itemNumber]];
	   columns.push(thisColumn);	
	}
	
	return columns;
}	

//------------- end of old -----------------------------------------	
