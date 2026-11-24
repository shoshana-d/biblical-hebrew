"use strict";
	
//-----------------------------------------------------------

//-----------------------------------------------------------
//    VERB TABLES
//-----------------------------------------------------------

// new version 19/11/2026
// previous version read in all data from HTML
// this version, data is in biblical_hebrew_reference_tables_verbs_data.js (must come before this file in .js list)

document.addEventListener('DOMContentLoaded', function() {
   
   var i;
  
  // single row of verb tables
  //---------------------------
	
 // single row of generic verb table 
   var onloadVerbRow = document.getElementsByClassName("onload-generic-verb-reference-single-row");
   for (i = 0; i < onloadVerbRow.length; i++) {
	  var thisDiv = onloadVerbRow[i];
      crGenericVerbReferenceSingleRow(thisDiv);
    }
 
	
 // single row of verb table 
   var onloadVerbRow = document.getElementsByClassName("onload-verb-reference-single-row");
   for (i = 0; i < onloadVerbRow.length; i++) {
	  var thisDiv = onloadVerbRow[i];
      crVerbReferenceSingleRow(thisDiv);
    }
 
 
  // verb reference tables
  //----------------------
  
      // create  verb reference tables
	  
	 // non-generic verb tables with content specified in file biblical_hebrew_reference_tables_verbs_data.js
	 //------------------------------------------------------------------------------------------------------
   var onloadTable = document.getElementsByClassName("onload-verb-table");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crVerbReferenceTables(thisDiv);
    }
 
   // create generic verb reference table
   //--------------------------------------
   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-persons1and3");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTablePersons1and3(thisDiv);
    }

   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-person2");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTablePerson2(thisDiv);
    }
   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-main");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTableMain(thisDiv);
    }
   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-imperative");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTableImperative(thisDiv);
    }
   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-infinitive-construct-and-participle");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTableInfinitiveConstructAndActiveParticiple(thisDiv);
    }
   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-participle");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTableActiveParticiple(thisDiv);
    }
   var onloadTable = document.getElementsByClassName("onload-generic-verb-reference-table-infinitive-construct");
   for (i = 0; i < onloadTable.length; i++) {
	  var thisDiv = onloadTable[i];
      crGenericVerbReferenceTableInfinitiveConstruct(thisDiv);
    }
	
})


//-----------------------------------------------------------
//    used in both generic and specific tables
//-----------------------------------------------------------


function crVerbTableHeaderRow(imperative=false, rootSeparateColumns=false){
	var i;

    if (imperative) {
       var headings1 = ["Qatal","Weqatal","Yiktol", "Imperative","Vavyiktol"];
       var headings2 = ["","(vav + Qatal)","", "", "(vav + Yiktol)"];
    } else {		
       var headings1 = ["Qatal","Weqatal","Yiktol","Vavyiktol"];
       var headings2 = ["","(vav + Qatal)","","(vav + Yiktol)"];
    }
  
   var thisRow = document.createElement("tr");
	   
   //var thisCol = document.createElement("th");
   var thisCol = document.createElement("td");
   thisCol.classList.add("verb-reference-table-column-heading");	   
   thisRow.appendChild(thisCol);
	   
	for (i = 0; i < headings1.length; i++) {
	  // var thisCol = document.createElement("th");
	   var thisCol = document.createElement("td");
	   if (rootSeparateColumns) {
		   thisCol.colSpan = "5"; //prefix,root1,root2,root3,suffix (only in generic tables)
	   }
       else	{
		   thisCol.colSpan = "2"; //prefix,root+suffix
	   }
 		   
       thisCol.appendChild(document.createTextNode(headings1[i]));
	   if (headings2[i].length > 0){
		  thisCol.appendChild(document.createElement("br"));
		  thisCol.appendChild(document.createTextNode(headings2[i]));
	   }
       thisCol.classList.add("verb-reference-table-column-heading");	   
 	   thisRow.appendChild(thisCol);
	}
	
	return thisRow;
}
	
	
	
// function crReferenceTableSectionHeaderRow(thisHeader, nDataCols=1)
// creates row within table designating sections (eg Singular, Plural, Females only)
// used for all reference tables	
// in biblical_hebrew_reference_tables_utilities.js

//-----------------------------------------------------------
//   generic table (3 columns for root)
//-----------------------------------------------------------


function crGenericVerbReferenceTableRow(thisRowHeader,mfSymbol, thisRowSpecs, lastRow=false){
//test("in crGenericVerbReferenceTableRow(thisRowHeader,thisRowSpecs)" + thisRowSpecs );	   
   var i;
   var group;
 
   var thisRow = document.createElement("tr");
   thisRow.classList.add("reference-table-border-top");
   if ( lastRow  ) {thisRow.classList.add("reference-table-border-bottom");}
   
   // row heading columns
   //-------------------
   
   //var thisCol = document.createElement("td");
  // thisRow.appendChild(thisCol);

   thisRow.appendChild(crRowHeadingCol(thisRowHeader, mfSymbol));
	
   // verb columns
   //-------------
   
   var nGroups = thisRowSpecs.length;	
   
   for (group = 0; group < nGroups; group++){
      var thisGroup = thisRowSpecs[group];
	  
	  if ( thisGroup == "noVerbPart" ){ 
	     for (i = 0; i < 5; i++) {
            var thisCol = document.createElement("td");
            thisCol.classList.add("verb-reference-table-no-verb-part");
            thisRow.appendChild(thisCol);
	     }
		 
	  } else {
         var thisCol = document.createElement("td");
  //     thisCol.classList.add("table-border-bottom");
    //   thisCol.classList.add("table-border-left");
         thisCol.classList.add("generic-verb-reference-table-hebrew-suffix");
         if ( thisGroup[0].length > 0) {
	        var thisSpan = document.createElement("span");
	        thisSpan.classList.add("hebrew25");
	        thisSpan.appendChild(document.createTextNode(thisGroup[0]));
	        thisCol.appendChild(thisSpan);
         }
         thisRow.appendChild(thisCol);
   
	     for (i = 1; i < 4; i++) {
	        var thisCol = document.createElement("td");
   //       thisCol.classList.add("table-border-bottom");
 		    var thisSpan = document.createElement("span");
	        thisSpan.classList.add("generic-consonant-image" + thisGroup[i]);
	        thisCol.appendChild(thisSpan);
 	        thisRow.appendChild(thisCol);
		 }	

	//var thisRowSpecs = [tavChirik,"","","",""];
	
	     var thisCol = document.createElement("td");
    //   thisCol.classList.add("table-border-bottom");
     //  thisCol.classList.add("table-border-right");
         thisCol.classList.add("generic-verb-reference-table-hebrew-prefix");
         if ( thisGroup[4].length > 0) {
	        var thisSpan = document.createElement("span");
	        thisSpan.classList.add("hebrew25");
	        thisSpan.appendChild(document.createTextNode(thisGroup[4]));
	        thisCol.appendChild(thisSpan);
         }	
         thisRow.appendChild(thisCol);

      }  

   }
   return thisRow;
}


 // blank row at the top of the table to set the column widths
function crGenericVerbReferenceTableColgroup(nGroups){
    var i;
	var j;
	
    var colGroup = document.createElement('colgroup');
		
     var thisCol = document.createElement('col');
	 colGroup.appendChild(thisCol);

	 for (i=0; i < nGroups; i++){
		 var thisCol = document.createElement('col');
		 thisCol.style.width = '30px';
		 colGroup.appendChild(thisCol);
		 for (j=0; j < 3; j++){ 
		    var thisCol = document.createElement('col');
		    thisCol.style.width = '15px';
		    colGroup.appendChild(thisCol);
		 }
		 var thisCol = document.createElement('col');
		 thisCol.style.width = '30px';
		 colGroup.appendChild(thisCol);
	 }
	
	return colGroup;
}
	
function crGenericVerbReferenceSingleRow(thisDiv){
//test("hello from crGenericVerbReferenceSingleRow");
	
    var data = thisDiv.firstElementChild.firstElementChild.innerHTML.split(globalDivider1);
	var header = false;
	if (data[0].trim() == "header") {var header = true;}
	var person = data[1].trim();
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
	var nGroups = 4;
	var imperative = false;
	if (person == "you") {imperative = true;}
	if (imperative) {nGroups = 5;}
 		
    thisTable.appendChild(crGenericVerbReferenceTableColgroup(nGroups));
	
    if (header) {		
	   thisTable.appendChild(crVerbTableHeaderRow(imperative,true));
	}
	
	if (person == "I"){
	   var thisRowSpecs = [[tav+dagesh+chirik+yod,"","","",""],
	                    [tav+dagesh+chirik+yod,"","","",vav],
	                    ["","","","",alef],
	                    ["","","","",vav+kamatz+alef]
						];
       thisTable.appendChild(crGenericVerbReferenceTableRow("I","",thisRowSpecs));
    } else if (person == "he"){
	   var thisRowSpecs = [["","","","",""],
	                    ["","","","",vav],
	                    ["","","","",yod],
	                    ["","","","",vav+patach+yod]
						];
       thisTable.appendChild(crGenericVerbReferenceTableRow("he","",thisRowSpecs));
		
    } else if (person == "theyf"){
	   var thisRowSpecs = [["noVerbPart"],
	                    ["noVerbPart"],
	                    [nun+kamatz+heh,"","","",tav+dagesh],
	                    [nun+kamatz+heh,"","","",vav+patach+tav+dagesh]
						];
       thisTable.appendChild(crGenericVerbReferenceTableRow("they",femaleSymbol+femaleSymbol,thisRowSpecs));
		
	}	

  // insert row in document	
	thisDiv.appendChild(thisTable);
	
}
	
function crGenericVerbReferenceTablePersons1and3(thisDiv){
    var i;
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
    thisTable.appendChild(crGenericVerbReferenceTableColgroup(4));
	
    thisTable.appendChild(crVerbTableHeaderRow(false,true));
   
   // singular header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("singular",26));
	
   // I
   // -----------------
	var thisRowSpecs = [[tav+dagesh+chirik+yod,"","","",""],
	                    [tav+dagesh+chirik+yod,"","","",vav],
	                    ["","","","",alef],
	                    ["","","","",vav+kamatz+alef]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("I","",thisRowSpecs));
   // he, she
   // -----------------
	
	var thisRowSpecs = [["","","","",""],
	                    ["","","","",vav],
	                    ["","","","",yod],
	                    ["","","","",vav+patach+yod]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("he","",thisRowSpecs));
	var thisRowSpecs = [[heh,"-kamatz","","",""],
	                    [heh,"-kamatz","","",vav],
	                    ["","","","",tav+dagesh],
	                    ["","","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("she","",thisRowSpecs, true));
	
   // plural header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("plural",26));
   // we
   // -----------------
	var thisRowSpecs = [[nun+vav+dagesh,"","","",""],
	                    [nun+vav+dagesh,"","","",vav],
	                    ["","","","",nun],
	                    ["","","","",vav+patach+nun]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("we","",thisRowSpecs));
   // they
   // -----------------
	var thisRowSpecs = [[vav+dagesh,"","","",""],
	                    [vav+dagesh,"","","",vav],
	                    [vav+dagesh,"","","",yod],
	                    [vav+dagesh,"","","",vav+patach+yod]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("they","",thisRowSpecs));

	var thisRowSpecs = [["noVerbPart"],
	                    ["noVerbPart"],
	                    [nun+kamatz+heh,"","","",tav+dagesh],
	                    [nun+kamatz+heh,"","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("they",femaleSymbol+femaleSymbol,thisRowSpecs, true));

	
  // insert table in document	
	thisDiv.appendChild(thisTable);
	
 
}

function crGenericVerbReferenceTablePerson2(thisDiv){
    var i;
	
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Speaking to one or more persons, giving orders or making requests"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);

    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
    thisTable.appendChild(crGenericVerbReferenceTableColgroup(5));
	
   // thisTable.appendChild(crVerbMainHeaderRow(true));
    thisTable.appendChild(crVerbTableHeaderRow(true,true));
	
	var thisRowSpecs = [[tav+dagesh+kamatz,"","","",""],
	                    [tav+dagesh+kamatz,"","","",vav],
	                    ["","","","",tav+dagesh],
						["","","","",""],
	                    ["","","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("Addressing",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[tav+dagesh+schwah,"","","",""],
	                    [tav+dagesh+schwah,"","","",vav],
	                    [yod,"-chirik","","",tav+dagesh],
						[yod,"-chirik","","",""],
	                    [yod,"-chirik","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("Addressing",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[tav+dagesh+segol+finalMem,"","","",""],
	                    [tav+dagesh+segol+finalMem,"","","",vav],
	                    [vav+dagesh,"","","",tav+dagesh],
						[vav+dagesh,"","","",""],
	                    [vav+dagesh,"","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("Addressing",maleSymbol+maleSymbol,thisRowSpecs));

	
	var thisRowSpecs = [[tav+dagesh+segol+finalNun,"","","",""],
	                    [tav+dagesh+segol+finalNun,"","","",vav],
	                    [nun+kamatz+heh,"","","",tav+dagesh],
						[nun+kamatz+heh,"","","",""],
	                    [nun+kamatz+heh,"","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("Addressing",femaleSymbol+femaleSymbol,thisRowSpecs));

	
  // insert table in document	
	thisDiv.appendChild(thisTable);
	
 
}

function crGenericVerbReferenceTableMain(thisDiv){
    var i;
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
    thisTable.appendChild(crGenericVerbReferenceTableColgroup(4));
	
   // thisTable.appendChild(crVerbMainHeaderRow(true));
    thisTable.appendChild(crVerbTableHeaderRow(false,true));
   
   // "Singular" header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",20));

   // singular rows
   //--------------
	
	var thisRowSpecs = [[tav+dagesh+chirik+yod,"","","",""],
	                    [tav+dagesh+chirik+yod,"","","",vav],
	                    ["","","","",alef],
	                    ["","","","",vav+kamatz+alef]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("I","",thisRowSpecs));
	var thisRowSpecs = [[tav+dagesh+kamatz,"","","",""],
	                    [tav+dagesh+kamatz,"","","",vav],
	                    ["","","","",tav+dagesh],
	                    ["","","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("you",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[tav+dagesh+schwah,"","","",""],
	                    [tav+dagesh+schwah,"","","",vav],
	                    [yod,"-chirik","","",tav+dagesh],
	                    [yod,"-chirik","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("you",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [["","","","",""],
	                    ["","","","",vav],
	                    ["","","","",yod],
	                    ["","","","",vav+patach+yod]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("he","",thisRowSpecs));
	var thisRowSpecs = [[heh,"-kamatz","","",""],
	                    [heh,"-kamatz","","",vav],
	                    ["","","","",tav+dagesh],
	                    ["","","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("she","",thisRowSpecs, true));
	
  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",20));

	var thisRowSpecs = [[nun+vav+dagesh,"","","",""],
	                    [nun+vav+dagesh,"","","",vav],
	                    ["","","","",nun],
	                    ["","","","",vav+patach+nun]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("we","",thisRowSpecs));
	var thisRowSpecs = [[tav+dagesh+segol+finalMem,"","","",""],
	                    [tav+dagesh+segol+finalMem,"","","",vav],
	                    [vav+dagesh,"","","",tav+dagesh],
	                    [vav+dagesh,"","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("you",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[vav+dagesh,"","","",""],
	                    [vav+dagesh,"","","",vav],
	                    ["noVerbPart"],
	                    ["noVerbPart"]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("they","",thisRowSpecs));
	var thisRowSpecs = [["noVerbPart"],
	                    ["noVerbPart"],
	                    [vav+dagesh,"","","",yod],
	                    [vav+dagesh,"","","",vav+patach+yod]
     				   ];
    thisTable.appendChild(crGenericVerbReferenceTableRow("they",maleSymbol+maleSymbol,thisRowSpecs, true));

  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",20));
	
	var thisRowSpecs = [[tav+dagesh+segol+finalNun,"","","",""],
	                    [tav+dagesh+segol+finalNun,"","","",vav],
	                    [nun+kamatz+heh,"","","",tav+dagesh],
	                    [nun+kamatz+heh,"","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("you",femaleSymbol+femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [["noVerbPart"],
	                    ["noVerbPart"],
	                    [nun+kamatz+heh,"","","",tav+dagesh],
	                    [nun+kamatz+heh,"","","",vav+patach+tav+dagesh]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("they",femaleSymbol+femaleSymbol,thisRowSpecs, true));

	
  // insert table in document	
	thisDiv.appendChild(thisTable);
	
 
}

function crGenericVerbReferenceTableImperative(thisDiv){
    var i;
	
 	
  // imperative
  //------------------
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Imperative (giving orders or making requests)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
	var thisRowSpecs = [["","","","",""]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("speaking to ",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[yod,"-chirik","","",""]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("speaking to ",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[vav+dagesh,"","","",""]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("speaking to ",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[nun+kamatz+heh,"","","",""]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("speaking to ",femaleSymbol+femaleSymbol,thisRowSpecs));


  // insert table in document	
	thisDiv.appendChild(thisTable);
	

}

function crGenericVerbReferenceTableInfinitiveConstructAndActiveParticiple(thisDiv){
	var flexDiv = document.createElement("div");
    flexDiv.classList.add("flex-container-ltr");
	
  // infinitive construct
  //------------------
    var flexDivCell = document.createElement("div");
	
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Infinitive construct"));
    thisPara.classList.add("verb-reference-table-table-heading");
	flexDivCell.appendChild(thisPara);
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
	var thisRowSpecs = [["","","","",lamed]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("","",thisRowSpecs));
	flexDivCell.appendChild(thisTable);
	
    flexDiv.appendChild(flexDivCell);
	
  
	   var flexDivCell = document.createElement("div");
	   var thisPara = document.createElement("p");
	   thisPara.appendChild(document.createTextNode(" "));
       flexDivCell.appendChild(thisPara);
	   flexDiv.appendChild(flexDivCell);

 	
  // active participle
  //------------------
    var flexDivCell = document.createElement("div");
	
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Participle (-ing words like saying, being)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	flexDivCell.appendChild(thisPara);
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
	var thisRowSpecs = [["","","","",""],["","","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[heh,"-kamatz","","",""],[heh,"-kamatz","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[yod+finalMem,"-chirik","","",""],[yod+finalMem,"-chirik","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[tav,"-segol","","",""],[tav,"-segol","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow(" ","",thisRowSpecs));
	var thisRowSpecs = [[vav+cholam+tav,"","","",""],[vav+cholam+tav,"","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",femaleSymbol+femaleSymbol,thisRowSpecs));

	flexDivCell.appendChild(thisTable);
    flexDiv.appendChild(flexDivCell);


  // insert tables in document	
   thisDiv.appendChild(flexDiv);
	
}	

function crGenericVerbReferenceTableActiveParticiple(thisDiv){
 	
  // active participle
  //------------------
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Participle (-ing words like saying, being)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
	var thisRowSpecs = [["","","","",""],["","","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[heh,"-kamatz","","",""],[heh,"-kamatz","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",femaleSymbol,thisRowSpecs));
	var thisRowSpecs = [[yod+finalMem,"-chirik","","",""],[yod+finalMem,"-chirik","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[tav,"-segol","","",""],[tav,"-segol","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow(" ","",thisRowSpecs));
	var thisRowSpecs = [[vav+cholam+tav,"","","",""],[vav+cholam+tav,"","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",femaleSymbol+femaleSymbol,thisRowSpecs));


  // insert table in document	
	thisDiv.appendChild(thisTable);
	

}

function crGenericVerbReferenceTableInfinitiveConstruct(thisDiv){
 	
  // infinitive construct
  //------------------
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Infinitive construct"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("generic-verb-reference-table");
	
	var thisRowSpecs = [["","","","",lamed]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("","",thisRowSpecs));


  // insert table in document	
	thisDiv.appendChild(thisTable);
	

}

//-----------------------------------------------------------
//-----------------------------------------------------------
//   non-generic tables with 2 columns for each verb
//-----------------------------------------------------------
//-----------------------------------------------------------


function crVerbReferenceTables(thisDiv){
	var i;
	var v;
    var dataDiv = thisDiv.firstElementChild;
	
    var verbData = dataDiv.firstElementChild.innerHTML.split(globalDivider1);
	var verbName = verbData[0].trim();
//console.log("hello from crVerbReferenceTables, verbname=" ,verbName,",verbdata=",verbData);
    var mainTable = document.createElement("div");
    var persons1and3Table = document.createElement("div");
    var person2Table = document.createElement("div");
    var imperativeTable = document.createElement("div");
    var participleTable = document.createElement("div");
    var infinitiveConstructTable = document.createElement("div");
	
	for (v=1; v < verbData.length; v++){
       var verbParts = verbData[v].trim(); 
//console.log("hello from crVerbReferenceTables, v=" ,v,",verb part=",verbParts);
	   
	   var containerDiv = document.createElement("div");
	   
	   // Table heading
	   //--------------
	   var tableHeading = "";
       if (verbParts == "person2"){
         // main table - qatal, weqatal, yiktol, vavyiktol
		 //  var verbData = ["js-qatal", "js-weqatal", "js-yiktol", "js-vavyiktol"];
		   var tableHeading = "Speaking to one or more persons, giving orders or making requests";
       } else if (verbParts == "imperative") {
		   var tableHeading = "Imperative (giving orders or making requests)";
       } else if (verbParts == "participle") {
		   var tableHeading = "Participle (words ending in -ing )";
       } else if (verbParts == "infinitive-construct") {
		   var tableHeading = "Infinitive construct";
	   }
		
	   if (tableHeading.length > 0){
	      var headingPara = document.createElement("h3");
          headingPara.appendChild(document.createTextNode(tableHeading));
          headingPara.classList.add("no-bottom-margin");
	      containerDiv.appendChild(headingPara);
       }
	   
	   // check whether need 2 tables
	   //----------------------------
       if (verbParts == "main") {
         // main table - qatal, weqatal, yiktol, vavyiktol
		   var verbPartsData  = ["I","youMs","youFs","he","she","we","youMp","they","youFp","theyFp"] ;
       } else if (verbParts == "persons1and3"){
         // main table - qatal, weqatal, yiktol, vavyiktol
		   var verbPartsData  = ["I","he","she","we","they","theyFp"] ;
       } else if (verbParts == "person2"){
         //  qatal, weqatal, yiktol, vavyiktol, imperative
		   var verbPartsData  = ["youMs","youFs","youMp","youFp","imperative"] ;
       } else if (verbParts == "imperative") {
		   var verbPartsData  = ["imperative"];
       } else if (verbParts == "participle") {
		   var verbPartsData  = ["participle"];
       } else if (verbParts == "infinitive-construct") {
		   var verbPartsData  = ["infinitiveConstruct"];
	   }
	   
       var anyInfrequent = checkForInfrequent(verbName, verbPartsData);
//console.log("hello from crVerbReferenceTables, anyinfrequent =",anyInfrequent);
	   
	  // var anyInfrequent = false;
	  //for (i=0; i < verbPartsData.length; i++) {
	  //     if (dataDiv.getElementsByClassName(verbPartsData   [i])[0].innerHTML.includes("infrequent") ){    
		//       anyInfrequent = true;
		//       break;
	  //     }	   
	  // }

       var hideInfrequent = [true];  // if there are no infrequent verbs, then hiding infrequent doesn't do anything
      
	   if (anyInfrequent){	
	       // need 2 tables
	       // create button to toggle between complete view and view excluding infrequently occurring forms
         containerDiv.appendChild(crToggleInfrequentButton());
		 var hideInfrequent = [true, false];	// need to create 2 tables, one with everything, one omitting infrequent
       }
	   for (i=0; i < hideInfrequent.length; i++){
 	        // if anyInfrequent, create both tables, initially show view excluding infrequently occurring forms
         if (verbParts == "main") {var thisTable = crVerbReferenceTableMain(verbName, hideInfrequent[i]);}
         else if (verbParts == "persons1and3") {var thisTable = crVerbReferenceTablePersons1and3(verbName, hideInfrequent[i]);}
         else if (verbParts == "person2") {var thisTable = crVerbReferenceTablePerson2(verbName, hideInfrequent[i]);}
         else if (verbParts == "imperative") {var thisTable = crVerbReferenceTableImperative(verbName, hideInfrequent[i]);}
         else if (verbParts == "participle") {var thisTable = crVerbReferenceTableParticiple(verbName, hideInfrequent[i]);}
         else if (verbParts == "infinitive-construct") {var thisTable = crVerbReferenceTableInfinitiveConstruct(verbName, hideInfrequent[i]);}
	     thisTable.classList.add("js-table");  // used with button, probably don't need if only one table
	     if (hideInfrequent[i] == false) {thisTable.classList.add("hidden");}
		 containerDiv.appendChild(thisTable);
	   }

       if (verbParts == "main") { mainTable.appendChild(containerDiv);}
       else if (verbParts == "persons1and3") {persons1and3Table.appendChild(containerDiv);}
       else if (verbParts == "person2") {person2Table.appendChild(containerDiv);}
       else if (verbParts == "imperative") {imperativeTable.appendChild(containerDiv);}
       else if (verbParts == "participle") {participleTable.appendChild(containerDiv);}
       else if (verbParts == "infinitive-construct") {infinitiveConstructTable.appendChild(containerDiv);}
	   
    }

    // now add the tables to the document	
    if (mainTable.innerHTML.length > 0 ){thisDiv.appendChild(mainTable);}
    if (persons1and3Table.innerHTML.length > 0 ){thisDiv.appendChild(persons1and3Table);}
    if (person2Table.innerHTML.length > 0 ){thisDiv.appendChild(person2Table);}
    if (imperativeTable.innerHTML.length > 0 ){thisDiv.appendChild(imperativeTable);}
	if (participleTable.innerHTML.length > 0 ) {thisDiv.appendChild(participleTable);}
	if (infinitiveConstructTable.innerHTML.length > 0 ) {thisDiv.appendChild(infinitiveConstructTable);}

}

function crVerbReferenceSingleRow(thisDiv){
    // <div class="onload-verb-reference-single-row">
    // <div class="hidden"> 
	//  <p> verb person | verb name [| verb name ]</p>
	//  <p> "no-header"   "root-translation"/"person-translation" </p>
	// </div></div>
	
	// possible verb persons:
	// I youMs youFs he she we youMp they youFp theyFp

    var v;	

    var dataDiv = thisDiv.firstElementChild;
	var tableData1 = dataDiv.children[0].innerHTML.split(globalDivider1);
	if (dataDiv.children.length > 1){
	   var tableData2 = dataDiv.children[1].innerHTML;
       var headerRow = !tableData2.includes("no-header");
	   var personTranslationCol1 = tableData2.includes("person-translation");
	   var rootCol1 = tableData2.includes("root");
    }
	else {
       var headerRow = true;
	   var personTranslationCol1 = false;
	}	
	var verbPerson = tableData1[0].trim();
	var verbNames = tableData1.slice(1);
//console.log("hello from crVerbReferenceSingleRow, verbNames=",verbNames);	   

    var tableInclInfrequent = document.createElement("table");
    var tableExclInfrequent = document.createElement("table");
    //thisTable.classList.add("verb_reference_table");

    var nGroups = 4;
	var imperative = false;
	if (verbPerson.slice(0,3) == "you") {
		nGroups = 5;
		imperative = true;
	}

    tableInclInfrequent.appendChild(crVerbReferenceTableColgroup(nGroups));
    tableExclInfrequent.appendChild(crVerbReferenceTableColgroup(nGroups));
    if (headerRow) {
	   tableInclInfrequent.appendChild(crVerbTableHeaderRow(imperative));
	   tableExclInfrequent.appendChild(crVerbTableHeaderRow(imperative));
	}

	
    var anyInfrequent = false;
	
	for (v=0; v < verbNames.length; v++){
       var thisVerbName = verbNames[v].trim();
       var verbRoot = getVerbData(thisVerbName, "root");
//console.log("hello from crVerbReferenceSingleRow, v=",v);	   
//console.log("hello from crVerbReferenceSingleRow, thisVerbName=",thisVerbName);	   
//console.log("hello from crVerbReferenceSingleRow, verbPerson=",verbPerson);	   
	   var tempInclInfrequent = crVerbArrayOfArrays(thisVerbName, verbPerson, false);
	   var tempExclInfrequent = crVerbArrayOfArrays(thisVerbName, verbPerson, true);
       var tempAudio = getAndAssembleVerbAudio(thisVerbName,verbPerson);
//console.log("hello from crVerbReferenceSingleRow, tempAudio=",tempAudio);	   

       if (!imperative){
		  if (checkForInfrequent(thisVerbName, [verbPerson])) {anyInfrequent = true;} 
	      var thisVerbInclInfrequent = tempInclInfrequent;
	      var thisVerbExclInfrequent = tempExclInfrequent;
		  var thisAudio = tempAudio;
	   }
       else {
		  if (checkForInfrequent(thisVerbName, [verbPerson, "imperative"])) {anyInfrequent = true;} 
          var imperativeInclInfrequent = crVerbArrayOfArrays(thisVerbName, "imperative", false);
          var imperativeExclInfrequent = crVerbArrayOfArrays(thisVerbName, "imperative", true);

          if (verbPerson == "youMs") {var imperativeIndex = 0;} 
		  else if (verbPerson == "youFs") {var imperativeIndex = 1;} 
		  else if (verbPerson == "youMp") {var imperativeIndex = 2;} 
		  else if (verbPerson == "youFp") {var imperativeIndex = 3;} 
		  
	      var thisVerbInclInfrequent = [tempInclInfrequent[0],tempInclInfrequent[1],tempInclInfrequent[2],imperativeInclInfrequent[imperativeIndex],tempInclInfrequent[3]];
	      var thisVerbExclInfrequent = [tempExclInfrequent[0],tempExclInfrequent[1],tempExclInfrequent[2],imperativeExclInfrequent[imperativeIndex],tempExclInfrequent[3]];

	      var imperativeAudio = getAndAssembleVerbAudio(thisVerbName,"imperative");
		  var thisAudio = [tempAudio[0],tempAudio[1],tempAudio[2],imperativeAudio[imperativeIndex],tempAudio[3]];
	   }		   
 
       var mfSymbol = "";
	   var verbRootJS = convertHTMLToJavascript(verbRoot.replaceAll(":","+"));
       if (personTranslationCol1){
	       var col1 = getVerbPersonTranslation(thisVerbName, verbPerson);
		   if (rootCol1) {col1 = "hebrew " + verbRootJS + ": " + col1}
	       var mfSymbol = getMaleFemaleSymbolForVerbPerson(verbPerson);
       }
       else {
		   var verbRootTranslation = getVerbPersonTranslation(thisVerbName, "root");
           var col1 = "hebrew " + verbRootJS + ": " + verbRootTranslation;
       }		   
       tableInclInfrequent = addVerbReferenceTableRow(tableInclInfrequent, verbRoot, col1, mfSymbol, thisVerbInclInfrequent, false,thisAudio);
       tableExclInfrequent = addVerbReferenceTableRow(tableExclInfrequent, verbRoot, col1, mfSymbol, thisVerbExclInfrequent, false,thisAudio);
	
	}
     
    if (!anyInfrequent){
      // only one table		
       thisDiv.appendChild(tableInclInfrequent);		
    }
	else{
	  // need 2 tables
      // create button to toggle between complete view and view excluding infrequently occurring forms
       thisDiv.appendChild(crToggleInfrequentButton());
	   
	   tableExclInfrequent.classList.add("js-table");  // used with button
       thisDiv.appendChild(tableExclInfrequent);
	   
	   tableInclInfrequent.classList.add("js-table");  // used with button
	   tableInclInfrequent.classList.add("hidden");  
       thisDiv.appendChild(tableInclInfrequent);
	 
	}
	

}

function checkForInfrequent(verbName, verbPartsData){
	var i;
	
	var anyInfrequent = false;
	for (i=0; i < verbPartsData.length; i++) {
	   if (getVerbData(verbName, verbPartsData[i]).includes("infrequent")){	
	 //  if (dataDiv.getElementsByClassName(verbPartsData   [i])[0].innerHTML.includes("infrequent") ){    
		  anyInfrequent = true;
		  break;
	   }	   
    }
	
	return anyInfrequent;
}
	
function crToggleInfrequentButton(){

 // <p>
 // <span class="button-reference-table button-reference-table-show jsHideShowInfrequent" > </span>
 //</p>thisRow = document.createElement("tr");
	
   var button = document.createElement("p");
   var span = document.createElement("span");
   span.classList.add("button-reference-table");
   span.classList.add("button-reference-table-show");
   span.addEventListener("click", function (e) {
	   var j;
	   var searchDiv = this.parentElement.parentElement;  
	   var jsClass = searchDiv.getElementsByClassName("js-table");
           for (j = 0; j < jsClass.length; j++) {
             jsClass[j].classList.toggle("hidden");
	       }
	   this.classList.toggle("button-reference-table-show");
	   this.classList.toggle("button-reference-table-hide");
   });
   button.appendChild(span);
   return button;
	
}

 // blank row at the top of the table to set the column widths
function crVerbReferenceTableColgroup(nGroups){
    var i;
	var j;
	
    var colGroup = document.createElement('colgroup');
		
     var thisCol = document.createElement('col');
	 colGroup.appendChild(thisCol);

	 for (i=0; i < nGroups; i++){
		 var thisCol = document.createElement('col');
		 thisCol.style.width = '75px';
		 colGroup.appendChild(thisCol);
		 
		 var thisCol = document.createElement('col');
		 thisCol.style.width = '30px';
		 colGroup.appendChild(thisCol);
	 }
	
	return colGroup;
}		

	
function addVerbReferenceTableRow(thisTable, verbRootHTML,  rowTranslation, mfSymbol, verbPartsHTML,lastRow, audio=[]){
  // NB if any audio, assumes length of verbPartsHTML and audioHTML the same 
  // verbPartsHTML is array of arrays, audio is array of arrays
   var i;
   var row;
   var group;
  
//console.log("hello from addVerbReferenceTableRow, verbPArtsHTML=",verbPartsHTML  ); 
//console.log("hello from addVerbReferenceTableRow, verbRootHTML=",verbRootHTML  ); 
//console.log("hello from addVerbReferenceTableRow, rowTranslation=",rowTranslation  ); 

    // check if any audio (audio is array of arrays with audio dir added to soundfilename)
    var anyAudio = audio.length > 0;	 

    // deal with verb root  
    var verbRootHTMLsplit = verbRootHTML.split(globalDivider2);
	var verbRoot = [];
	//var verbRootNChars = [];
	for (i=0; i < verbRootHTMLsplit.length; i++){
	   verbRoot[i] = verbRootHTMLsplit[i].trim();
	 //  verbRoot[i] = convertHTMLToJavascript(verbRootHTMLsplit[i].trim());
	//   verbRootNChars[i] = verbRoot[i].length;
	}
  
    var nGroups = verbPartsHTML.length ;	// 4 for main part of verb, 1 for imperative

     // check whether any cases where > 1 variant for verb part for a particular person
	 // note that verbPartsHTML is an array of arrays, each verb part [i] is an array, usually of length 1
    var maxVariants = 1;
    var nVariants = [];
	for (group = 0; group < nGroups; group++){
	   nVariants[group] = verbPartsHTML[group].length;
	   if (nVariants[group] > maxVariants){maxVariants = nVariants[group];}
	}	
//console.log("hello from addVerbReferenceTableRow, nVariants=" ,nVariants ); 
    		
   

   for (row = 0; row < maxVariants; row++){ 
 //----------------------------------------   
      var thisTableRow = document.createElement("tr");
	  
	  if ( lastRow && row == maxVariants - 1 ) {thisTableRow.classList.add("reference-table-border-bottom");}
	  
	  // first table column (has row heading if first row)
	  //-------------------------------------------------
	  if (row == 0 ){
        // first row (often, the only row)
          thisTableRow.classList.add("reference-table-border-top");
          var col1 = crRowHeadingCol(rowTranslation, mfSymbol);
          col1.classList.add("verb-reference-table-col1");
		  col1.rowSpan = maxVariants;
          thisTableRow.appendChild(col1);
      } else {
		  // nothing in column 1 for subsequent rows
         // var col1 = document.createElement("td");
 	  }	 
    //  thisTableRow.appendChild(col1);

         // verb columns
		 //-------------
      for (group = 0; group < nGroups; group++){
		  
		 // now not separate columns for root letters, 2 columns, column 1=prefix (if any), column 2=rest of verb
         //--------------------------------------------------------------------------------------------------	 
         var groupCol1 = document.createElement("td"); // root+suffix column
         var groupCol2 = document.createElement("td"); // prefix column

         groupCol1.classList.add("hebrew25");
         groupCol2.classList.add("hebrew25");

         groupCol1.classList.add("verb-reference-table-root-suffix");
         groupCol2.classList.add("verb-reference-table-prefix");
	
 		// noVerbPerson = this verb doesn't have instances of this person, from Excel
		// noVerbPart = qatal, weqatal fem plural, from javascript
		
		 if (verbPartsHTML[group][0].trim() == "noVerbPart"  ){
			// no content, flag that never any content for this category, ie qatal fem plural "they"
			groupCol1.classList.add("verb-reference-table-no-verb-part");
			groupCol2.classList.add("verb-reference-table-no-verb-part");
		 } 
		 else if (verbPartsHTML[group][0].trim() == "noVerbPerson" && row == 0 ){
            // for this verb, no content for this category			
			groupCol1.classList.add("no-verb-person");
			//var thisSpan = document.createElement("span");
	       // thisSpan.appendChild(document.createTextNode("-"));
			//groupCol1.appendChild(thisSpan);
		 }
		 else if (nVariants[group] > row){
			// there is some content for these 2 table cells
			//----------------------------------------------
            // "standard"
			// verbPartsHTML[group][row]= frequent/infrequent : prefix letters : root1 letter(s) : root2 letter(s) : root3 letter(s) : suffix
            // when non-root consonant between 1st and 2nd root consonant
			// verbPartsHTML[group][row]= frequent/infrequent : prefix letters : root1 letter(s) :letter(s): root2 letter(s) : root3 letter(s) : suffix
            // when non-root consonant between 2nd and 3rd root consonant
			// verbPartsHTML[group][row]= frequent/infrequent : prefix letters : root1 letter(s): root2 letter(s)  :letter(s): root3 letter(s) : suffix
			
			 if (anyAudio) {
				 var thisAudio = audio[group][row];
			 }
			 var theseHTMLSyllables = verbPartsHTML[group][row].split(globalDivider2);

			 var frequentInfrequent = theseHTMLSyllables[0].trim();
			 var thisPrefix = theseHTMLSyllables[1].trim();
			
			 if (frequentInfrequent == "infrequent") {
				groupCol1.classList.add("reference-table-infrequent");
				groupCol2.classList.add("reference-table-infrequent");
			 }
			 else if (frequentInfrequent == "frequent") {
				groupCol1.classList.add("verb-reference-table-frequent-col1");
				groupCol2.classList.add("verb-reference-table-frequent-col2");
		    }
		   
		   // root + suffix (first column)
		   //-----------------------------
		   
		    for (i = 2; i < theseHTMLSyllables.length; i++){
			   var spanCreated = false;	
				
			   var thisSyllable = theseHTMLSyllables[i].trim();
			   
			   if (thisSyllable.length > 0){
			      // is this a root consonant?
                  if (thisSyllable.slice(0, 4)	== "root") {
                     // yes, root consonant
				     var rootNum = Number(thisSyllable.slice(4,5));
				     var thisRoot = thisSyllable.slice(5).trim();
					 if (thisRoot.length > 0){
						var thisRootJS = convertHTMLToJavascript(thisRoot);
		                var thisSpan = document.createElement("span");
						spanCreated = true; 
                        thisSpan.appendChild(document.createTextNode(thisRootJS));
                        if (verbRootCharDifferent(verbRoot,rootNum, thisRoot)){
				          thisSpan.classList.add("verb-reference-table-verb-root-different");
			            } else {
				          thisSpan.classList.add("verb-reference-table-root");
                        }
                     }						 
				   
			      } else {
                   // no, not root consonant
		                var thisSpan = document.createElement("span");
						spanCreated = true; 
						var thisSyllableJS = convertHTMLToJavascript(thisSyllable);
                        thisSpan.appendChild(document.createTextNode(thisSyllableJS));
			            thisSpan.classList.add("verb-reference-table-non-root");
			      }	
				  
				  if (spanCreated){
			         if (anyAudio) {
				        thisSpan.addEventListener("click",soundclickEventListener);
				        thisSpan.classList.add("soundclick");
			         }
			         groupCol1.appendChild(thisSpan);
			         if (anyAudio) {groupCol1.appendChild(crHiddenSpan(thisAudio));}
				  }

               } // syllable length > 0				  
				
			}	// root + suffix
 		   
		   
		   // prefix (second column)
		   //-----------------------
		    var thisSpan = document.createElement("span");
		    if (thisPrefix.length > 0){
              thisSpan.appendChild(document.createTextNode(convertHTMLToJavascript(thisPrefix)));
			  thisSpan.classList.add("verb-reference-table-non-root");
			   if (anyAudio) {
				   thisSpan.addEventListener("click",soundclickEventListener);
				   thisSpan.classList.add("soundclick");
			   }
			   groupCol2.appendChild(thisSpan);
			   if (anyAudio) {groupCol2.appendChild(crHiddenSpan(thisAudio));}
		    }
			else {
		       groupCol2.appendChild(thisSpan);
            }

		 }

         thisTableRow.appendChild(groupCol1);
		 thisTableRow.appendChild(groupCol2);
		 
      } // for group
	  
      thisTable.appendChild(thisTableRow);
	  
  } // for row

   
   return thisTable;
}
	
function crVerbReferenceTableMain(verbName, hideInfrequent ){
//console.log("hello from crVerbReferenceTableMain=" );

	var i;
	// "standard" order, singular, plural, plural females only
	// "you" forms don't include imperative
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
	var translationI = getVerbPersonTranslation(verbName, "I");
	var translationYou = getVerbPersonTranslation(verbName, "you");
	var translationHe = getVerbPersonTranslation(verbName, "he");
	var translationShe = getVerbPersonTranslation(verbName, "she");
	var translationWe = getVerbPersonTranslation(verbName, "we");
	var translationThey = getVerbPersonTranslation(verbName, "they");

   // var verbRoot = getHTMLTextByClass(dataDiv, "js-root");
    var verbRoot = getVerbData(verbName, "root");

	var verbI = crVerbArrayOfArrays(verbName, "I", hideInfrequent);
	var verbYouMS = crVerbArrayOfArrays(verbName, "youMs", hideInfrequent);
	var verbYouFS = crVerbArrayOfArrays(verbName, "youFs", hideInfrequent);
	var verbHe = crVerbArrayOfArrays(verbName, "he", hideInfrequent);
	var verbShe = crVerbArrayOfArrays(verbName, "she", hideInfrequent);
	var verbWe = crVerbArrayOfArrays(verbName, "we", hideInfrequent);
	var verbYouMP = crVerbArrayOfArrays(verbName, "youMp", hideInfrequent);
	var verbYouFP = crVerbArrayOfArrays(verbName, "youFp", hideInfrequent);
	var verbThey = crVerbArrayOfArrays(verbName, "they", hideInfrequent);
	var verbTheyF = crVerbArrayOfArrays(verbName, "theyFp", hideInfrequent);
    
	var IAudio = getAndAssembleVerbAudio(verbName,"I");
    var youMSAudio = getAndAssembleVerbAudio(verbName,"youMs");
    var youFSAudio = getAndAssembleVerbAudio(verbName,"youFs");
    var heAudio = getAndAssembleVerbAudio(verbName,"he");
    var sheAudio = getAndAssembleVerbAudio(verbName,"she");
    var weAudio = getAndAssembleVerbAudio(verbName,"we");
    var youMPAudio = getAndAssembleVerbAudio(verbName,"youMp");
    var youFPAudio = getAndAssembleVerbAudio(verbName,"youFp");
    var theyAudio = getAndAssembleVerbAudio(verbName,"they");
    var theyFAudio = getAndAssembleVerbAudio(verbName,"theyFp");



    var thisTable = document.createElement("table");
    //thisTable.classList.add("verb_reference_table");

    thisTable.appendChild(crVerbReferenceTableColgroup(4));

   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = false;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
   // "Singular" header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",9));

    var lastRow = false;
	
   // singular rows
   //______________
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationI, "", verbI, lastRow,IAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, maleSymbol, verbYouMS, lastRow,youMSAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, femaleSymbol, verbYouFS, lastRow,youFSAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe, "", verbHe, lastRow,heAudio);
	lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationShe, "", verbShe, lastRow,sheAudio);

  // plural rows
  //____________
  
    lastRow = false;
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",9));

    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationWe, "", verbWe, lastRow,weAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, maleSymbol+maleSymbol, verbYouMP, lastRow,youMPAudio);
     lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, "", verbThey, lastRow, theyAudio);
   // thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, maleSymbol+maleSymbol,verbTheyM, lastRow);


  // females only rows
  //__________________
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",9));
	
    lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, femaleSymbol+femaleSymbol, verbYouFP, lastRow), youFPAudio;
    lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, femaleSymbol+femaleSymbol, verbTheyF, lastRow, theyFAudio);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll_table_550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}

function crVerbReferenceTablePersons1and3(verbName, hideInfrequent ){
	var i;
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
 	
	var translationI = getVerbPersonTranslation(verbName, "I");
	var translationHe = getVerbPersonTranslation(verbName, "he");
	var translationShe = getVerbPersonTranslation(verbName, "she");
	var translationWe = getVerbPersonTranslation(verbName, "we");
	var translationThey = getVerbPersonTranslation(verbName, "they");

	//var verbRoot = getHTMLTextByClass(dataDiv, "js-root");
	var verbRoot = getVerbData(verbName, "root");

	var verbI = crVerbArrayOfArrays(verbName, "I", hideInfrequent);
	var verbHe = crVerbArrayOfArrays(verbName, "he", hideInfrequent);
	var verbShe = crVerbArrayOfArrays(verbName, "she", hideInfrequent);
	var verbWe = crVerbArrayOfArrays(verbName, "we", hideInfrequent);
	var verbThey = crVerbArrayOfArrays(verbName, "they", hideInfrequent);
	var verbTheyF = crVerbArrayOfArrays(verbName, "theyFp", hideInfrequent);
    
	var IAudio = getAndAssembleVerbAudio(verbName,"I");
    var heAudio = getAndAssembleVerbAudio(verbName,"he");
    var sheAudio = getAndAssembleVerbAudio(verbName,"she");
    var weAudio = getAndAssembleVerbAudio(verbName,"we");
    var theyAudio = getAndAssembleVerbAudio(verbName,"they");
    var theyFAudio = getAndAssembleVerbAudio(verbName,"theyFp");



    var thisTable = document.createElement("table");
    //thisTable.classList.add("verb_reference_table");

    thisTable.appendChild(crVerbReferenceTableColgroup(4));

   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = false;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
   // "Singular" header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",9));

    var lastRow = false;
	
   // singular rows
   //______________
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationI, "", verbI, lastRow,IAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe, "", verbHe, lastRow,heAudio);
	lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationShe, "", verbShe, lastRow,sheAudio);

  // plural rows
  //____________
  
    lastRow = false;
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",9));

    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationWe, "", verbWe, lastRow,weAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, "", verbThey, lastRow, theyAudio);
   // thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, maleSymbol+maleSymbol,verbTheyM, lastRow);
    lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, femaleSymbol+femaleSymbol, verbTheyF, lastRow, theyFAudio);



    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll_table_550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;

}

function crVerbReferenceTablePerson2(verbName, hideInfrequent ){
	var i;
	
	//  qatal, weqatal, yiktol, imperative, vavyiktol  
	//------------------------------------------------------------

    var verbRoot = getVerbData(verbName, "root");
	
	  // these have qatal, weqatal, yiktol, vavyiktol
	var verbYouMS = crVerbArrayOfArrays(verbName, "youMs", hideInfrequent);
	var verbYouFS = crVerbArrayOfArrays(verbName, "youFs", hideInfrequent);
	var verbYouMP = crVerbArrayOfArrays(verbName, "youMp", hideInfrequent);
	var verbYouFP = crVerbArrayOfArrays(verbName, "youFp", hideInfrequent);
      // this has ms, fs, mp, fp
	var verbImperative = crVerbArrayOfArrays(verbName, "imperative", hideInfrequent);


	var verbYouMSImp = [verbYouMS[0],verbYouMS[1],verbYouMS[2],verbImperative[0],verbYouMS[3]];
	var verbYouFSImp = [verbYouFS[0],verbYouFS[1],verbYouFS[2],verbImperative[2],verbYouFS[3]];
	var verbYouMPImp = [verbYouMP[0],verbYouMP[1],verbYouMP[2],verbImperative[1],verbYouMP[3]];
	var verbYouFPImp = [verbYouFP[0],verbYouFP[1],verbYouFP[2],verbImperative[3],verbYouFP[3]];
    
    var youMSAudio = getAndAssembleVerbAudio(verbName,"youMs");
    var youFSAudio = getAndAssembleVerbAudio(verbName,"youFs");
    var youMPAudio = getAndAssembleVerbAudio(verbName,"youMp");
    var youFPAudio = getAndAssembleVerbAudio(verbName,"youFp");
	var imperativeAudio = getAndAssembleVerbAudio(verbName,"imperative");
	
	var youMSImpAudio = [youMSAudio[0],youMSAudio[1],youMSAudio[2],imperativeAudio[0],youMSAudio[3]];
	var youFSImpAudio = [youFSAudio[0],youFSAudio[1],youFSAudio[2],imperativeAudio[2],youFSAudio[3]];
	var youMPImpAudio = [youMPAudio[0],youMPAudio[1],youMPAudio[2],imperativeAudio[1],youMPAudio[3]];
	var youFPImpAudio = [youFPAudio[0],youFPAudio[1],youFPAudio[2],imperativeAudio[3],youFPAudio[3]];

    var thisTable = document.createElement("table");
    //thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(5));
	
    var imperative = true;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
	  // this table has translations in a row at top of table
	  // individual rows just have male, female symbols

	var translationYou = getVerbPersonTranslation(verbName, "you");
	var translationImperative = getVerbPersonTranslation(verbName, "imperative");

	// deals with case where 2 or more different translations, eg bo go, bring
	var translationYouSplit = translationYou.split(globalDivider1);
	var translationImperativeSplit = translationImperative.split(globalDivider1);
	var translation = translationYouSplit[0] + ", " + translationImperativeSplit[0] + " (imperative)"
	for (i=1; i < translationYouSplit.length; i++){
		// crReferenceTableSectionHeaderRow inserts <br> at globalDivider1
       var translation = translation + globalDivider1 + translationYouSplit[i] + ", " + translationImperativeSplit[i] + " (imperative)";
    }
    thisTable.appendChild(crReferenceTableSectionHeaderRow(translation, 11,true));

	var lastRow = false;
	
   // singular rows

   //--------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", maleSymbol, verbYouMSImp, lastRow,youMSImpAudio);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", femaleSymbol, verbYouFSImp, lastRow,youFSImpAudio);
 
  // plural rows
  //------------
	thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", maleSymbol+maleSymbol, verbYouMPImp, lastRow,youMPImpAudio);
    lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", femaleSymbol+femaleSymbol, verbYouFPImp, lastRow,youFPImpAudio);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll-table-550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}


function crVerbReferenceTableImperative(verbName, hideInfrequent){
	var i;

	// imperative table
	//_________________
	
    var verbRoot = getVerbData(verbName, "root");

	
	var verbImperative = crVerbArrayOfArrays(verbName, "imperative", hideInfrequent);
	var imperativeMS = [verbImperative[0]];
	var imperativeFS = [verbImperative[2]];
	var imperativeMP = [verbImperative[1]];
	var imperativeFP = [verbImperative[3]];
	
	var audio = getAndAssembleVerbAudio(verbName,"imperative");
	var audioMS = [audio[0]];
	var audioFS = [audio[2]];
	var audioMP = [audio[1]];
	var audioFP = [audio[3]];
	
	
   // table with imperative
    var thisTable = document.createElement("table");
   // thisTable.classList.add("verb_reference_table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    thisTable.appendChild(thisRow);
	
	var translationImperative = getVerbPersonTranslation(verbName, "imperative");
	var thisTranslation = translationImperative +  " (speaking to ";
 	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol, imperativeMS, lastRow,audioMS);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol,imperativeFS, lastRow,audioFS);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol+maleSymbol,imperativeMP, lastRow,audioMP);
    var lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol+femaleSymbol,imperativeFP, lastRow,audioFP);

    return thisTable;

}

function crVerbReferenceTableParticiple(verbName, hideInfrequent){
	var i;

	// participles table
	//_________________
	
    var verbRoot = getVerbData(verbName, "root");
								  
	var verbParticiple = crVerbArrayOfArrays(verbName, "participle", hideInfrequent);
	var participleMS = [verbParticiple[0]];
	var participleFS = [verbParticiple[2]];
	var participleMP = [verbParticiple[1]];
	var participleFP = [verbParticiple[3]];
	
	var audio = getAndAssembleVerbAudio(verbName,"participle");
	var audioMS = [audio[0]];
	var audioFS = [audio[2]];
	var audioMP = [audio[1]];
	var audioFP = [audio[3]];


  // table with participles
    var thisTable = document.createElement("table");
    //thisTable.classList.add("verb_reference_table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table_border_bottom");
    thisTable.appendChild(thisRow);
	
	
	var translationParticiple = getVerbPersonTranslation(verbName, "participle");
	var thisTranslation = translationParticiple + " (describing "; 
 	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol, participleMS, lastRow,audioMS);
//test("hello from crVerbReferenceTableparticiple");	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol,participleFS, lastRow,audioFS);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol+maleSymbol,participleMP, lastRow,audioMP);
    var lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol+femaleSymbol,participleFP, lastRow,audioFP);

    return thisTable;

}

function crVerbReferenceTableInfinitiveConstruct(verbName, hideInfrequent){

	// infinitive construct table
	// -------------------------
    var verbRoot = getVerbData(verbName, "root");

	var verbInfinitiveConstruct = crVerbArrayOfArrays(verbName, "infinitiveConstruct", hideInfrequent);
	var audio = getAndAssembleVerbAudio(verbName,"infinitiveConstruct");
	
	        // (should be only one)
    var infinitiveConstruct = [verbInfinitiveConstruct[0]]	;		
    var infinitiveConstructAudio = [audio[0]]	;		
	
   // table with infinitive construct
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb_reference_table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    thisTable.appendChild(thisRow);
	

	var translationInfinitiveConstruct = getVerbPersonTranslation(verbName, "infinitiveConstruct");
	var thisTranslation = translationInfinitiveConstruct; 
 	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, "", infinitiveConstruct, lastRow,infinitiveConstructAudio );

    return thisTable;

}

//__________________________________________________________________________________________________________________
//__________________________________________________________________________________________________________________

// utility functions //
//___________________//


function crHiddenSpan(thisAudio){
    var thisSpan = document.createElement("span");
    thisSpan.appendChild(document.createTextNode(thisAudio));
    thisSpan.classList.add("hidden");
	
	return thisSpan;
}	

function verbRootCharDifferent(verbRoot,rootNum, thisRoot){
	// checks whether thisRoot (a single consonant which may have dagesh)
	// is the same as rootNum number consonant of verbRoot (excluding possible dagesh)
	var different = true;
	if (verbRoot[rootNum - 1].slice(0,1) == thisRoot.slice(0,1)) {different = false;}

    return different;	
}

function getVerbData(verbName, verbPart) {
//console.log("hello from getVerbData,${verbName}_${verbPart}=",`${verbName}_${verbPart}`); 	
  return verbs[`${verbName}_${verbPart}`];
}

function crVerbArrayOfArrays(verbName, verbPart, hideInfrequent=false){
   var i;
   var j;
//console.log("hello from crVerbArrayOfArrays, verbName=",verbName );
//console.log("hello from crVerbArrayOfArrays, verbPart=",verbPart );
  
   var thisArray = [];

 //  var HTMLParas = dataDiv.getElementsByClassName(className);  
 //  if (HTMLParas.length > 0) {
 //     var array1 = HTMLParas[0].innerHTML.trim().split(globalDivider1);
 
    var array1 = getVerbData(verbName, verbPart).trim().split(globalDivider1);
	
	  for (i=0; i < array1.length; i++){
		  
		  var array2 = array1[i].trim().split(verbDivider);
		  
		  if (!hideInfrequent){
		     thisArray[i] = array2;
	      }
          else{
			 if (array2[0].split(globalDivider2).length == 1) {
				// not a verb, only one item noVerbPerson or noVerbPart, and no more verbs
				 thisArray[i] = array2;
			 }
             else {
                 var subArray = [];
                 subArray[0] = "noVerbPerson";
                 var currenti = 0;				 
  	             for (j=0; j < array2.length; j++){
			        if (!array2[j].includes("infrequent") ){
						subArray[currenti] = array2[j];
						currenti = currenti + 1;
					}
			    }

               thisArray[i] = subArray;				
            }				
		 }
     }		  
 // }	  
  return thisArray;	

}

function getAndAssembleVerbAudio(verbName, verbPart){
	// verbPart is "I", "imperative", etc
	var i;
	var j;
	
	var audioVerbPart = "audio_" + verbPart
    var audioArray = crVerbArrayOfArrays(verbName, audioVerbPart);	
	
	if (audioArray.length > 0) {
		
      var audioDir = getVerbData(verbName, "audioDir");
	  if (audioDir.length > 0){
		   var audioArrayWithDir = [];
		   for (i=0; i < audioArray.length; i++){
			  var temp = [];
		      for (j=0; j < audioArray[i].length; j++){
			     temp[j] = audioDir + "/" + audioArray[i][j].trim();
		      }
			  audioArrayWithDir[i] = temp;
		   }
		   return audioArrayWithDir;
	  }
	  else { 
	      return audioArray;
	  }
	}
	
	else {	return audioArray;}
}	
 	
function getVerbPersonTranslation(verbName, person){
	
   
   if (person == "I"){
	  var verbPart = "translation_I"; 

   } else if (person == "you"){
	  var verbPart = "translation_you"; 

   } else if (person == "youMs"){
	  var verbPart = "translation_you"; 

   } else if (person == "youFs"){
	  var verbPart = "translation_you"; 

   } else if (person == "youMp"){
	  var verbPart = "translation_you"; 

   } else if (person == "youFp"){
	  var verbPart = "translation_you"; 

   } else if (person == "he") {
	  var verbPart = "translation_he"; 

   } else if (person == "she") {
	  var verbPart = "translation_he"; 
	  
   } else if (person == "we") {
	  var verbPart = "translation_you"; 

   } else if (person == "they"){
	  var verbPart = "translation_you"; 
	  
   } else if (person == "theyFp"){
	  var verbPart = "translation_you"; 
   }
   else {
	   // imperative, constructs, root
	  var verbPart = "translation_" + person;
   }	   

   var translation =  getVerbData(verbName, verbPart);  

   if (person == "she") {
      translation = translation.replaceAll("he","she");  
   } else if (person == "we") {
      translation = translation.replaceAll("you","we"); 	  
   } else if (person == "they"){
      translation = translation.replaceAll("you","they");  
   }
 
 //  return personTranslation;
   return translation;

}

function getMaleFemaleSymbolForVerbPerson(person){
	  
   var mfSymbol = "";
	
   if (person == "youMs"){
	  mfSymbol = maleSymbol; 

   } else if (person == "youFs"){
	  mfSymbol = femaleSymbol; 

   } else if (person == "youMp"){
	  mfSymbol = maleSymbol+maleSymbol; 

   } else if (person == "youFp"){
	  mfSymbol = femaleSymbol+femaleSymbol; 

   } else if (person == "theyFp"){
	  mfSymbol = femaleSymbol+femaleSymbol; 

   }

   return mfSymbol;

}
	
// no longer needed 20/11/2026
function oldgetHTMLTextByClass(dataDiv, jsClass){	
	var checkClass = dataDiv.getElementsByClassName(jsClass);
	if (checkClass.length > 0){	var textItem = checkClass[0].innerHTML.trim();}
	else                      { var textItem = "";                            }
	
	return textItem;
}
