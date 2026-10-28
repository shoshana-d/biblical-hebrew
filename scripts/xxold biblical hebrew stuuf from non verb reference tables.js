
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
