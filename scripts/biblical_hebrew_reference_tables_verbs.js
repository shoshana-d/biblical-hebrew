"use strict";
	
//-----------------------------------------------------------

//-----------------------------------------------------------
//    VERB TABLES
//-----------------------------------------------------------


//-----------------------------------------------------------
//    used in both generic and specific tables
//-----------------------------------------------------------

function crVerbTableHeaderRow(imperative=false, rootSeparateColumns=false){
	// headings = [["Qatal",""], etc ie array of arrays of length 2
	var i;

    if (imperative) {
       var headings1 = ["Qatal","Weqatal","Yiktol", "Imperative","Wayyiktol"];
       var headings2 = ["","(vav + Qatal)","", "", "(vav + Yiktol)"];
    } else {		
       var headings1 = ["Qatal","Weqatal","Yiktol","Wayyiktol"];
       var headings2 = ["","(vav + Qatal)","","(vav + Yiktol)"];
    }
  
   var thisRow = document.createElement("tr");
	   
   var thisCol = document.createElement("th");
 	  // thisCol.colSpan = "2";
   thisRow.appendChild(thisCol);
	   
	for (i = 0; i < headings1.length; i++) {
	   var thisCol = document.createElement("th");
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
       //thisCol.classList.add("verb-reference-table-column-heading");	   
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
   
   // First person header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("I, we",26));
	
   // first person rows
   // -----------------
	var thisRowSpecs = [[tav+dagesh+chirik+yod,"","","",""],
	                    [tav+dagesh+chirik+yod,"","","",vav],
	                    ["","","","",alef],
	                    ["","","","",vav+kamatz+alef]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("I","",thisRowSpecs));
	var thisRowSpecs = [[nun+vav+dagesh,"","","",""],
	                    [nun+vav+dagesh,"","","",vav],
	                    ["","","","",nun],
	                    ["","","","",vav+patach+nun]
						];
    thisTable.appendChild(crGenericVerbReferenceTableRow("we","",thisRowSpecs));

   // third person rows
   //------------------
	
   // Third person header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("he, she, they",26));
	
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
	var thisRowSpecs = [[vav+dagesh,"","","",""]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("speaking to ",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[yod,"-chirik","","",""]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("speaking to ",femaleSymbol,thisRowSpecs));
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
	var thisRowSpecs = [[yod+finalMem,"-chirik","","",""],[yod+finalMem,"-chirik","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[heh,"-kamatz","","",""],[heh,"-kamatz","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",femaleSymbol,thisRowSpecs));
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
	var thisRowSpecs = [[yod+finalMem,"-chirik","","",""],[yod+finalMem,"-chirik","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",maleSymbol+maleSymbol,thisRowSpecs));
	var thisRowSpecs = [[heh,"-kamatz","","",""],[heh,"-kamatz","","",mem]];
    thisTable.appendChild(crGenericVerbReferenceTableRow("describing ",femaleSymbol,thisRowSpecs));
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


function crVerbReferenceTablesFromHTML(thisDiv){
	var i;
	var v;
	
    var dataDiv = thisDiv.firstElementChild;
    var whichVerbs = dataDiv.firstElementChild.innerHTML.split(globalDivider1);
	
    var mainTable = document.createElement("div");
    var persons1and3Table = document.createElement("div");
    var person2Table = document.createElement("div");
    var imperativeTable = document.createElement("div");
    var participleTable = document.createElement("div");
    var infinitiveConstructTable = document.createElement("div");
//test("hello from crVerbReferenceTablesFromHTML, v=" + v + ", thisverb=" + thisVerb);	
	
	for (v=0; v < whichVerbs.length; v++){
       var thisVerb = whichVerbs[v].trim(); 
	   
       if (thisVerb == "main") {
         // main table - qatal, weqatal, yiktol, vavyiktol
		   var verbData = ["js-qatal", "js-weqatal", "js-yiktol", "js-vavyiktol"];
		   var tableHeading = "";
       } else if (thisVerb == "persons1and3"){
         // main table - qatal, weqatal, yiktol, vavyiktol
		   var verbData = ["js-qatal", "js-weqatal", "js-yiktol", "js-vavyiktol"];
		   var tableHeading = "";
       } else if (thisVerb == "person2"){
         // main table - qatal, weqatal, yiktol, vavyiktol
		   var verbData = ["js-qatal", "js-weqatal", "js-yiktol", "js-vavyiktol"];
		   var tableHeading = "Speaking to one or more persons, giving orders or making requests";
       } else if (thisVerb == "imperative") {
		   var verbData = ["js-imperative"];
		   var tableHeading = "Imperative (giving orders or making requests)";
       } else if (thisVerb == "participle") {
		   var verbData = ["js-participle"];
		   var tableHeading = "Participle (words ending in -ing )";
       } else if (thisVerb == "infinitive-construct") {
		   var verbData = ["js-infinitive-construct"];
		   var tableHeading = "Infinitive construct";
	   } else {
		   break;
	   }
	   
	   var containerDiv = document.createElement("div");
	   
	   var headingPara = document.createElement("p");
       headingPara.appendChild(document.createTextNode(tableHeading));
       headingPara.classList.add("verb-reference-table-table-heading");
	   
	   containerDiv.appendChild(headingPara);
	   
	       // check whether need 2 tables
	   var anyInfrequent = false;
	   for (i=0; i < verbData.length; i++) {
	       if (dataDiv.getElementsByClassName(verbData[i])[0].innerHTML !=  dataDiv.getElementsByClassName(verbData[i]+"-excl-infrequent")[0].innerHTML ){    
		       anyInfrequent = true;
		       break;
	       }	   
	   }

       if (anyInfrequent){	
	       // need 2 tables
		   
	       // create button to toggle between complete view and view excluding infrequently occurring forms
           containerDiv.appendChild(crToggleInfrequentButton());

 	        // create both tables, initially show view excluding infrequently occurring forms
		   var hideInfrequent = [true, false];	
		   for (i=0; i < 2; i++){
	       
              if (thisVerb == "main") {var thisTable = crVerbReferenceTableMain(dataDiv, hideInfrequent[i]);}
              else if (thisVerb == "persons1and3") {var thisTable = crVerbReferenceTablePersons1and3(dataDiv, hideInfrequent[i]);}
              else if (thisVerb == "person2") {var thisTable = crVerbReferenceTablePerson2(dataDiv, hideInfrequent[i]);}
              else if (thisVerb == "imperative") {var thisTable = crVerbReferenceTableImperative(dataDiv, hideInfrequent[i]);}
              else if (thisVerb == "participle") {var thisTable = crVerbReferenceTableParticiple(dataDiv, hideInfrequent[i]);}
              else if (thisVerb == "infinitive-construct") {var thisTable = crVerbReferenceTableInfinitiveConstruct(dataDiv, hideInfrequent[i]);}
	          thisTable.classList.add("js-table");
	          if (hideInfrequent[i] == false) {thisTable.classList.add("hidden");}
		      containerDiv.appendChild(thisTable);
	       }

		  // thisDiv.appendChild(containerDiv);
	   
	   } else {
          // only need to create one table, no button needed
		   
	       var hideInfrequent = false;
           if (thisVerb == "main") {var thisTable = crVerbReferenceTableMain(dataDiv, hideInfrequent);}
           else if (thisVerb == "persons1and3") {var thisTable = crVerbReferenceTablePersons1and3(dataDiv, hideInfrequent[i]);}
           else if (thisVerb == "person2") {var thisTable = crVerbReferenceTablePerson2(dataDiv, hideInfrequent[i]);}
           else if (thisVerb == "imperative") {var thisTable = crVerbReferenceTableImperative(dataDiv, hideInfrequent);}
           else if (thisVerb == "participle") {var thisTable = crVerbReferenceTableParticiple(dataDiv, hideInfrequent);}
           else if (thisVerb == "infinitive-construct") {var thisTable = crVerbReferenceTableInfinitiveConstruct(dataDiv, hideInfrequent);}
	       thisTable.classList.add("js-table");
	       //thisDiv.appendChild(thisTable);
		   
   	       containerDiv.appendChild(thisTable);

       }
	   
       if (thisVerb == "main") { mainTable.appendChild(containerDiv);}
       else if (thisVerb == "persons1and3") {persons1and3Table.appendChild(containerDiv);}
       else if (thisVerb == "person2") {person2Table.appendChild(containerDiv);}
       else if (thisVerb == "imperative") {imperativeTable.appendChild(containerDiv);}
       else if (thisVerb == "participle") {participleTable.appendChild(containerDiv);}
       else if (thisVerb == "infinitive-construct") {infinitiveConstructTable.appendChild(containerDiv);}
	   
    }

    // now add the tables to the document	
    if (mainTable.innerHTML.length > 0 ){thisDiv.appendChild(mainTable);}
    if (persons1and3Table.innerHTML.length > 0 ){thisDiv.appendChild(persons1and3Table);}
    if (person2Table.innerHTML.length > 0 ){thisDiv.appendChild(person2Table);}
    if (imperativeTable.innerHTML.length > 0 ){thisDiv.appendChild(infinitiveConstructTable);}

	if ((infinitiveConstructTable.innerHTML.length > 0 ) || (participleTable.innerHTML.length > 0 )) {
	   var flexDiv = document.createElement("div");
	   flexDiv.classList.add("flex-container-ltr");
	   var flexDivCell = document.createElement("div");
	   if (infinitiveConstructTable.innerHTML.length > 0 ) {flexDivCell.appendChild(infinitiveConstructTable);}
	   flexDiv.appendChild(flexDivCell);
	   
	   var flexDivCell = document.createElement("div");
	   var thisPara = document.createElement("p");
	   thisPara.appendChild(document.createTextNode(" "));
       flexDivCell.appendChild(thisPara);
	   flexDiv.appendChild(flexDivCell);
	   
	   var flexDivCell = document.createElement("div");
	   if (participleTable.innerHTML.length > 0 ) {flexDivCell.appendChild(participleTable);}
	   flexDiv.appendChild(flexDivCell);
	   thisDiv.appendChild(flexDiv);
	}
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

function crVerbReferenceSingleRow(thisDiv){
	//   <p> header </p>
	//   <p> he said, he says, he will say</p>
	//  <p> alef:mem:resh </p>
	//   <p> </p>
	//   <p>frequent :  : root1 alef+kamatz : root2 mem+patach : root3 resh : |  : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh :   |   : yod+cholam  : root1 alef : root2 mem+patach : root3 resh :  *  : yod+tsere : root1 alef+kamatz : root2 mem+tsere : root3 resh :   |  frequent : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+segol : root3 resh :  *  : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh :  
    //   </p>
	
    var headerYN = thisDiv.firstElementChild.children[0].innerHTML.trim();
	var header = false;
	if (headerYN == "header") {var header = true;}
	
	var translation = thisDiv.firstElementChild.children[1].innerHTML.trim();
	var verbRoot = thisDiv.firstElementChild.children[2].innerHTML.trim();
	
	var mfSymbolHTML = thisDiv.firstElementChild.children[3].innerHTML.trim();
	var mfSymbol = "";
	if (mfSymbolHTML == "m") {mfSymbol = maleSymbol;}
	else if (mfSymbolHTML == "f") {mfSymbol = femaleSymbol;}
	else if (mfSymbolHTML == "mm") {mfSymbol = maleSymbol+maleSymbol;}
	else if (mfSymbolHTML == "ff") {mfSymbol = femaleSymbol+femaleSymbol;}
	
    var thisRowSpecs = thisDiv.firstElementChild.children[4].innerHTML.split(globalDivider1);
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");
	
	var nGroups = thisRowSpecs.length;
 		
    thisTable.appendChild(crVerbReferenceTableColgroup(nGroups));
	
    if ( header) {		
	   var imperative = false;
	   if (nGroups == 5) {imperative = true;}
	   thisTable.appendChild(crVerbTableHeaderRow(imperative,false));
	}
	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translation, mfSymbol, thisRowSpecs);


  // insert row in document	
	thisDiv.appendChild(thisTable);
	
	
}
	
function addVerbReferenceTableRow(thisTable, verbRootHTML,  rowTranslation, mfSymbol, verbPartsHTML,lastRow=false){
   var i;
   var col;
   var row;
   var syllable;
   var group;
   var variant;
   var nGroups = verbPartsHTML.length ;	// 4 for main part of verb, 1 for imperative
   
   var verbPartsVariantsHTML = [];
   var nVariants = [];
//test("hello from addVerbReferenceTableRow");  

    // deal with verb root    var verbRootHTML = verbRootPara.innerHTML.split(globalDivider2);

    var verbRootHTMLsplit = verbRootHTML.split(globalDivider2);
	var verbRoot = [];
	var verbRootNChars = [];
	for (i=0; i < verbRootHTMLsplit.length; i++){
	   verbRoot[i] = convertHTMLToJavascript(verbRootHTMLsplit[i].trim());
	   verbRootNChars[i] = verbRoot[i].length;
	}
 //test("hello from addVerbReferenceTableRow,  verb root=" + verbRoot);

     // check whether any cases where > 1 variant for verb part for a particular person
   for (group = 0; group < nGroups; group++){
	  var thisGroupHTML = verbPartsHTML[group].trim();
	  if ((thisGroupHTML == "noVerbPart") | (thisGroupHTML == "noPersonPart")){
	     //nVariants[group] = 0;
	     nVariants[group] = 1;
		 verbPartsVariantsHTML[group] = thisGroupHTML.split(verbDivider); 
	  } else {
	     verbPartsVariantsHTML[group] = thisGroupHTML.split(verbDivider); 
         nVariants[group] = verbPartsVariantsHTML[group].length;
	  }
   }

   var maxVariants = Math.max(...nVariants); 


   for (row = 0; row < maxVariants; row++){ 
 //----------------------------------------   
      var thisRow = document.createElement("tr");
	  if ( row == 0 ) {thisRow.classList.add("reference-table-border-top");}
	  if ( lastRow && row == maxVariants - 1 ) {thisRow.classList.add("reference-table-border-bottom");}
	  
      if ( row == 0 ){
         // first row for this item (usually only row)
		 // this function is in biblical_hebrew_reference_tables_utilities.js
          thisCol = crRowHeadingCol(rowTranslation, mfSymbol);
      } else {
		  // only if > 1 item in this row
          var thisCol = document.createElement("td");
      }		  
      thisRow.appendChild(thisCol);

         // verb columns
		 //-------------
      for (group = 0; group < nGroups; group++){
		  
		 // now not separate columns for root letters, 2 columns, column 1=prefix (if any), column 2=rest of verb
         //--------------------------------------------------------------------------------------------------	 
		
		var infrequent = false;
		var frequent = false;
		
		if (nVariants[group] > row){
		   	if (verbPartsVariantsHTML[group][row].trim() == "noVerbPerson"){
		        var thisGroup = "noVerbPerson";
		   	} else if (verbPartsVariantsHTML[group][row].trim() == "noVerbPart"){
		        var thisGroup = "noVerbPart";
	        } else {
				// verbPartsVariantsHTML= frequent/infrequent : prefix letters : root1 letter(s) : root2 letter(s) : root3 letter(s) : suffix
				var theseHTMLSyllables = verbPartsVariantsHTML[group][row].split(globalDivider2);
				if (theseHTMLSyllables[0].trim() == "infrequent") {infrequent=true;}
				else if (theseHTMLSyllables[0].trim() == "frequent") {frequent=true;}
				theseHTMLSyllables.shift();
				var thisGroup = [];
				var thisGroupRoots = [];
                for (syllable = 0; syllable < theseHTMLSyllables.length; syllable++){
				   var possibleRoot = theseHTMLSyllables[syllable].trim().slice(0,4);	
				   if (possibleRoot == "root"){
					   var rootWord = theseHTMLSyllables[syllable].trim().slice(0,5);
                       thisGroupRoots[syllable] = rootWord;
					   // remove word "rootx"
                       theseHTMLSyllables[syllable] = theseHTMLSyllables[syllable].trim().slice(5);
                   } else {
                       thisGroupRoots[syllable]="";
                   } 					   
                   thisGroup[syllable] = convertHTMLToJavascript(theseHTMLSyllables[syllable]);
				}  
			}	
		} else {
			if (verbPartsVariantsHTML[group][0].trim() == "noVerbPart"){
				var thisGroup = "noVerbPart";
            } else {
				var thisGroup = "";
			}	
		}   
		 
	    if (thisGroup == "" ){
			// no content, no formatting 
            var thisCol = document.createElement("td");
  		    thisRow.appendChild(thisCol);
            var thisCol = document.createElement("td");
  		    thisRow.appendChild(thisCol);
			
		} else if (thisGroup == "noVerbPerson") {
			// insert a -
            var thisCol = document.createElement("td");
			thisCol.classList.add("no-verb-person");
			//var thisSpan = document.createElement("span");
	       // thisSpan.appendChild(document.createTextNode("-"));
			//thisCol.appendChild(thisSpan);
		    thisRow.appendChild(thisCol);
            var thisCol = document.createElement("td");
  		    thisRow.appendChild(thisCol);
			
		} else if (thisGroup == "noVerbPart"){
//test("hello from addVerbReferenceTableRow, in noVerbPart, maxvariants=" + maxVariants);
           var thisCol = document.createElement("td");
			thisCol.classList.add("verb-reference-table-no-verb-part");
 		    thisRow.appendChild(thisCol);
            var thisCol = document.createElement("td");
			thisCol.classList.add("verb-reference-table-no-verb-part");
  		    thisRow.appendChild(thisCol);
		 
		  
	    } else {	

           // first column (root + suffix)	
           //----------------------------		   
             var thisCol = document.createElement("td");
	         thisCol.classList.add("hebrew25");
			 if (infrequent) { thisCol.classList.add("reference-table-infrequent"); }
			 else if (frequent) { thisCol.classList.add("verb-reference-table-frequent-col1"); }
			 
			 for (syllable = 1; syllable < thisGroup.length ; syllable++){
	             var thisSpan = document.createElement("span");
	             thisSpan.appendChild(document.createTextNode(thisGroup[syllable]));
				 if ((thisGroupRoots[syllable].length > 0) && (thisGroup[syllable].length > 0)){
//test("hello from addVerbReferenceTableRow, thisGrouprootsSyllable=" + thisGroupRoots[syllable] + "slice4=" + thisGroupRoots[syllable].slice(4) + ", verb root=" + verbRoot + ",thisgroupsyllable=" +thisGroup[syllable]);
					 // this is a root consonant, check whether is different from root (eg heh in root changed to tav)
	                //var thisRootNum = thisGroupRoots[syllable].slice(4);
					var differentRoot = false;
	                if (thisGroupRoots[syllable] == "root1"){
                     //  if (	(verbRoot[0] == shin) || (verbRoot[0] == sin)){
					 //   if (thisGroup[syllable].slice(0,2) != verbRoot[0]) {differentRoot = true;}
					 // }					   
					 //  else if (thisGroup[syllable].slice(0,1) != verbRoot[0]) {differentRoot = true;}
					 
					 //  if (thisGroup[syllable].slice(0,verbRootNChars[0]) != verbRoot[0]) {differentRoot = true;}
					   if (thisGroup[syllable].slice(0,1) != verbRoot[0].slice(0,1)) {differentRoot = true;}
					}
	                else if (thisGroupRoots[syllable] == "root2"){ 
                     // if (	(verbRoot[1] == shin) || (verbRoot[1] == sin)){
					 //     if (thisGroup[syllable].slice(0,2) != verbRoot[1]) {differentRoot = true;}
					 //  }					   
					 // else if (thisGroup[syllable].slice(0,1) != verbRoot[1]) {differentRoot = true;}
					 
					 //  if (thisGroup[syllable].slice(0,verbRootNChars[1]) != verbRoot[1]) {differentRoot = true;}
					   if (thisGroup[syllable].slice(0,1) != verbRoot[1].slice(0,1)) {differentRoot = true;}
					}
	                else if (thisGroupRoots[syllable] == "root3"){ 
                     // if (	(verbRoot[2] == shin) || (verbRoot[2] == sin)){
					 //     if (thisGroup[syllable].slice(0,2) != verbRoot[2]) {differentRoot = true;}
					 //  }					   
					 // else if (thisGroup[syllable].slice(0,1) != verbRoot[2]) {differentRoot = true;}
					 
					 //  if (thisGroup[syllable].slice(0,verbRootNChars[2]) != verbRoot[2]) {differentRoot = true;}
					   if (thisGroup[syllable].slice(0,1) != verbRoot[2].slice(0,1)) {differentRoot = true;}
					}
					
					if (differentRoot) {thisSpan.classList.add("verb-reference-table-verb-root-different");}
					else               {thisSpan.classList.add("verb-reference-table-root");}
					
				 } else {
					 thisSpan.classList.add("verb-reference-table-non-root");
                 }					 
	             thisCol.appendChild(thisSpan);
			 }
			 thisRow.appendChild(thisCol);

           // second column (prefix, if any)	
           //----------------------------		   
             var thisCol = document.createElement("td");
	         thisCol.classList.add("hebrew25");
			 if (infrequent) { thisCol.classList.add("reference-table-infrequent"); }
			 else if (frequent) { thisCol.classList.add("verb-reference-table-frequent-col2"); }
			 
	         var thisSpan = document.createElement("span");
	         thisSpan.appendChild(document.createTextNode(thisGroup[0]));
  		     thisSpan.classList.add("verb-reference-table-non-root");
	         thisCol.appendChild(thisSpan);
			 thisRow.appendChild(thisCol);

 			 
		}	// group.length > 0 
		 
	  
     } // verb groups
	 thisTable.appendChild(thisRow);
	 
   } // rows	 
//test("hello from addVerbReferenceTableRow,group="+group);	  	 

   return thisTable;
}

function crVerbReferenceTablePersons1and3(dataDiv, hideInfrequent ){
	var i;
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
    var translationIPara = dataDiv.getElementsByClassName("js-translationI")[0];
    var translationI = translationIPara.innerHTML;
    var translationYouPara = dataDiv.getElementsByClassName("js-translationYou")[0];
    var translationYou = translationYouPara.innerHTML;
    var translationHePara = dataDiv.getElementsByClassName("js-translationHe")[0];
    var translationHe = translationHePara.innerHTML;

    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRoot = verbRootPara.innerHTML;
//test("hello from crVerbReferenceTableMain, dataDivverb root=" + verbRoot);	
	
	if (hideInfrequent) {
       var qatalPara = dataDiv.getElementsByClassName("js-qatal-excl-infrequent")[0];
       var weqatalPara = dataDiv.getElementsByClassName("js-weqatal-excl-infrequent")[0];
       var yiktolPara = dataDiv.getElementsByClassName("js-yiktol-excl-infrequent")[0];
       var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol-excl-infrequent")[0];
		
	} else {	
       var qatalPara = dataDiv.getElementsByClassName("js-qatal")[0];
       var weqatalPara = dataDiv.getElementsByClassName("js-weqatal")[0];
       var yiktolPara = dataDiv.getElementsByClassName("js-yiktol")[0];
       var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol")[0];
	}
	
    var qatalHTML = qatalPara.innerHTML.split(globalDivider1);
    var weqatalHTML = weqatalPara.innerHTML.split(globalDivider1);
    var yiktolHTML = yiktolPara.innerHTML.split(globalDivider1);
    var wayyiktolHTML = wayyiktolPara.innerHTML.split(globalDivider1);
	

    var verbI = [qatalHTML[0],weqatalHTML[0],yiktolHTML[0],wayyiktolHTML[0]];
    var verbWe  = [qatalHTML[5],weqatalHTML[5],yiktolHTML[5],wayyiktolHTML[5]];
	var verbHe  = [qatalHTML[3],weqatalHTML[3],yiktolHTML[3],wayyiktolHTML[3]];
	var verbShe  = [qatalHTML[4],weqatalHTML[4],yiktolHTML[4],wayyiktolHTML[4]];
	var verbThey = [qatalHTML[7],weqatalHTML[7],yiktolHTML[7],wayyiktolHTML[7]]; 
	var verbTheyF = ["noVerbPart","noVerbPart",yiktolHTML[9],wayyiktolHTML[9]];	
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(4));

   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = false;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
   // First person rows
   // ------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("I, we",9));
	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationI, "", verbI);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","we"), "", verbWe);
	

   // 3rd person rows
   // ---------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("he, she, they",9));
   
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe, "", verbHe);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe.replaceAll("he","she"), "", verbShe);
   
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","they"), "", verbThey);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","they"), femaleSymbol+femaleSymbol, verbTheyF, true);


    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll-table-550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}

function crVerbReferenceTablePerson2(dataDiv, hideInfrequent ){
	var i;
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------

    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRoot = verbRootPara.innerHTML;
	
	if (hideInfrequent) {
       var qatalPara = dataDiv.getElementsByClassName("js-qatal-excl-infrequent")[0];
       var weqatalPara = dataDiv.getElementsByClassName("js-weqatal-excl-infrequent")[0];
       var yiktolPara = dataDiv.getElementsByClassName("js-yiktol-excl-infrequent")[0];
       var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol-excl-infrequent")[0];
		
	} else {	
       var qatalPara = dataDiv.getElementsByClassName("js-qatal")[0];
       var weqatalPara = dataDiv.getElementsByClassName("js-weqatal")[0];
       var yiktolPara = dataDiv.getElementsByClassName("js-yiktol")[0];
       var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol")[0];
	}
	
    var qatalHTML = qatalPara.innerHTML.split(globalDivider1);
    var weqatalHTML = weqatalPara.innerHTML.split(globalDivider1);
    var yiktolHTML = yiktolPara.innerHTML.split(globalDivider1);
    var wayyiktolHTML = wayyiktolPara.innerHTML.split(globalDivider1);

	
	if (hideInfrequent) {var imperativePara = dataDiv.getElementsByClassName("js-imperative-excl-infrequent")[0];}
	else                {var imperativePara = dataDiv.getElementsByClassName("js-imperative")[0];}
    var imperativeHTML = imperativePara.innerHTML.split(globalDivider1);
	

	var verbYouSingM = [qatalHTML[1],weqatalHTML[1],yiktolHTML[1],imperativeHTML[0],wayyiktolHTML[1]];
	var verbYouSingF  = [qatalHTML[2],weqatalHTML[2],yiktolHTML[2],imperativeHTML[2],wayyiktolHTML[2]];
	var verbYouPluralM  = [qatalHTML[6],weqatalHTML[6],yiktolHTML[6],imperativeHTML[1],wayyiktolHTML[6]];
	var verbYouPluralF  = [qatalHTML[8],weqatalHTML[8],yiktolHTML[8],imperativeHTML[3],wayyiktolHTML[8]];

    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(5));
	
   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = true;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));

    var translationYouPara = dataDiv.getElementsByClassName("js-translationYou")[0];
    var translationYou = translationYouPara.innerHTML;
    var translationImperativePara = dataDiv.getElementsByClassName("js-translationImperative")[0];
    var translationImperative = translationImperativePara.innerHTML;
	
	var translationYouSplit = translationYou.split(globalDivider1);
	var translationImperativeSplit = translationImperative.split(globalDivider1);
	var translation = translationYouSplit[0] + ", " + translationImperativeSplit[0] + " (imperative)"
	for (i=1; i < translationYouSplit.length; i++){
       var translation = translation + globalDivider1 + translationYouSplit[i] + ", " + translationImperativeSplit[i] + " (imperative)"
    }
    thisTable.appendChild(crReferenceTableSectionHeaderRow(translation, 11,true));

	
   // singular rows

   //--------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", maleSymbol, verbYouSingM);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", femaleSymbol, verbYouSingF);

  // plural rows
  //------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", maleSymbol+maleSymbol, verbYouPluralM);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", femaleSymbol+femaleSymbol, verbYouPluralF, true);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll-table-550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}

function crVerbReferenceTableMain(dataDiv, hideInfrequent ){
	var i;
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
    var translationIPara = dataDiv.getElementsByClassName("js-translationI")[0];
    var translationI = translationIPara.innerHTML;
    var translationYouPara = dataDiv.getElementsByClassName("js-translationYou")[0];
    var translationYou = translationYouPara.innerHTML;
    var translationHePara = dataDiv.getElementsByClassName("js-translationHe")[0];
    var translationHe = translationHePara.innerHTML;

    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRoot = verbRootPara.innerHTML;
//test("hello from crVerbReferenceTableMain, dataDivverb root=" + verbRoot);	
	
	if (hideInfrequent) {
       var qatalPara = dataDiv.getElementsByClassName("js-qatal-excl-infrequent")[0];
       var weqatalPara = dataDiv.getElementsByClassName("js-weqatal-excl-infrequent")[0];
       var yiktolPara = dataDiv.getElementsByClassName("js-yiktol-excl-infrequent")[0];
       var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol-excl-infrequent")[0];
		
	} else {	
       var qatalPara = dataDiv.getElementsByClassName("js-qatal")[0];
       var weqatalPara = dataDiv.getElementsByClassName("js-weqatal")[0];
       var yiktolPara = dataDiv.getElementsByClassName("js-yiktol")[0];
       var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol")[0];
	}
	
    var qatalHTML = qatalPara.innerHTML.split(globalDivider1);
    var weqatalHTML = weqatalPara.innerHTML.split(globalDivider1);
    var yiktolHTML = yiktolPara.innerHTML.split(globalDivider1);
    var wayyiktolHTML = wayyiktolPara.innerHTML.split(globalDivider1);
	

    var verbI = [qatalHTML[0],weqatalHTML[0],yiktolHTML[0],wayyiktolHTML[0]];
	var verbYouSingM = [qatalHTML[1],weqatalHTML[1],yiktolHTML[1],wayyiktolHTML[1]];
	var verbYouSingF  = [qatalHTML[2],weqatalHTML[2],yiktolHTML[2],wayyiktolHTML[2]];
	var verbHe  = [qatalHTML[3],weqatalHTML[3],yiktolHTML[3],wayyiktolHTML[3]];
	var verbShe  = [qatalHTML[4],weqatalHTML[4],yiktolHTML[4],wayyiktolHTML[4]];
    var verbWe  = [qatalHTML[5],weqatalHTML[5],yiktolHTML[5],wayyiktolHTML[5]];
	var verbYouPluralM  = [qatalHTML[6],weqatalHTML[6],yiktolHTML[6],wayyiktolHTML[6]];
	//var verbThey = [qatalHTML[7],weqatalHTML[7],[],[]]; 
	//var verbTheyM  = [[],[],yiktolHTML[7],wayyiktolHTML[7]];
	var verbThey = [qatalHTML[7],weqatalHTML[7],"noVerbPart","noVerbPart"]; 
	var verbTheyM  = ["noVerbPart","noVerbPart",yiktolHTML[7],wayyiktolHTML[7]];
	var verbYouPluralF  = [qatalHTML[8],weqatalHTML[8],yiktolHTML[8],wayyiktolHTML[8]];
	//var verbTheyF = [[],[],yiktolHTML[9],wayyiktolHTML[9]];	
	var verbTheyF = ["noVerbPart","noVerbPart",yiktolHTML[9],wayyiktolHTML[9]];	
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(4));

   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = false;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
   // "Singular" header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",9));

   // singular rows
   //--------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationI, "", verbI);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, maleSymbol, verbYouSingM);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, femaleSymbol, verbYouSingF);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe, "", verbHe);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe.replaceAll("he","she"), "", verbShe, true);

  // plural rows
  //------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",9));

    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","we"), "", verbWe);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, maleSymbol+maleSymbol, verbYouPluralM);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","they"), "", verbThey);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","they"), maleSymbol+maleSymbol,verbTheyM, true);


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",9));
	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, femaleSymbol+femaleSymbol, verbYouPluralF);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","they"), femaleSymbol+femaleSymbol, verbTheyF, true);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll-table-550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}

function crVerbReferenceTableImperative(dataDiv, hideInfrequent){
	var i;

	// imperative table
	//-----------------
	
    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRoot = verbRootPara.innerHTML;
								  
    var translationImperativePara = dataDiv.getElementsByClassName("js-translationImperative")[0];
    var translationImperative = translationImperativePara.innerHTML;
	
	if (hideInfrequent) {var imperativePara = dataDiv.getElementsByClassName("js-imperative-excl-infrequent")[0];}
	else                {var imperativePara = dataDiv.getElementsByClassName("js-imperative")[0];}
    var imperativeHTML = imperativePara.innerHTML.split(globalDivider1);
	
   // table with imperative
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));


	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	//var thisTranslation = translationImperative + "\u2003" + " speaking to "
	var thisTranslation = translationImperative +  " (speaking to "
 	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol, [imperativeHTML[0]], hideInfrequent);
//test("hello from crVerbReferenceTableImperative");	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol+maleSymbol,[imperativeHTML[1]], hideInfrequent);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol,[imperativeHTML[2]], hideInfrequent);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol+femaleSymbol,[imperativeHTML[3]], hideInfrequent, true);

    return thisTable;

}

function crVerbReferenceTableParticiple(dataDiv, hideInfrequent){
	var i;

	// participles table
	//-----------------
	
    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRoot = verbRootPara.innerHTML;
								  
    var translationParticiplePara = dataDiv.getElementsByClassName("js-translationParticiple")[0];
    var translationParticiple = translationParticiplePara.innerHTML;
//test("hello from crVerbReferenceTableparticiple, translationParticiple=" + translationParticiple);	

	if (hideInfrequent) {var participlePara = dataDiv.getElementsByClassName("js-participle-excl-infrequent")[0];}
	else                {var participlePara = dataDiv.getElementsByClassName("js-participle")[0];}
    var participleHTML = participlePara.innerHTML.split(globalDivider1);
	
   // table with participles
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translationParticiple + " (describing "; 
 	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol, [participleHTML[0]], hideInfrequent);
//test("hello from crVerbReferenceTableparticiple");	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol+maleSymbol,[participleHTML[1]], hideInfrequent);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol,[participleHTML[2]], hideInfrequent);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol+femaleSymbol,[participleHTML[3]], hideInfrequent, true);

    return thisTable;

}

function crVerbReferenceTableInfinitiveConstruct(dataDiv, hideInfrequent){

	// infinitive construct table
	//-----------------
    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRoot = verbRootPara.innerHTML;
//test("hello from crVerbReferenceTableInfinitiveConstruct, verbroot=" + verbRoot);								  
    var translationInfinitiveConstructPara = dataDiv.getElementsByClassName("js-translationInfinitiveConstruct")[0];
    var translationInfinitiveConstruct = translationInfinitiveConstructPara.innerHTML;

	if (hideInfrequent) {var infinitiveConstructPara = dataDiv.getElementsByClassName("js-infinitive-construct-excl-infrequent")[0];}
	else                {var infinitiveConstructPara = dataDiv.getElementsByClassName("js-infinitive-construct")[0];}
    var infinitiveConstructHTML = infinitiveConstructPara.innerHTML.split(globalDivider1);
	        // (should be only one)
	
   // table with infinitive construct
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translationInfinitiveConstruct; 
 	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, "", [infinitiveConstructHTML[0]], hideInfrequent);

    return thisTable;

}
