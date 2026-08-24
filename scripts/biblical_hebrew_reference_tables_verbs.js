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
       var headings1 = ["Qatal","Weqatal","Yiktol", "Imperative","Vavyiktol"];
       var headings2 = ["","(vav + Qatal)","", "", "(vav + Yiktol)"];
    } else {		
       var headings1 = ["Qatal","Weqatal","Yiktol","Vavyiktol"];
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
//test("hello from crVerbReferenceTablesFromHTML, v=" + v + ", thisverb=" + thisVerb);	
	   
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

       var hideInfrequent = [true];  // if there are no infrequent verbs, then hiding infrequent doesn't do anything
      
	   if (anyInfrequent){	
	       // need 2 tables
	       // create button to toggle between complete view and view excluding infrequently occurring forms
         containerDiv.appendChild(crToggleInfrequentButton());
		 var hideInfrequent = [true, false];	// need to create 2 tables, one with everything, one omitting infrequent
       }
	   for (i=0; i < hideInfrequent.length; i++){
 	        // if anyInfrequent, create both tables, initially show view excluding infrequently occurring forms
         if (thisVerb == "main") {var thisTable = crVerbReferenceTableMain(dataDiv, hideInfrequent[i]);}
         else if (thisVerb == "persons1and3") {var thisTable = crVerbReferenceTablePersons1and3(dataDiv, hideInfrequent[i]);}
         else if (thisVerb == "person2") {var thisTable = crVerbReferenceTablePerson2(dataDiv, hideInfrequent[i]);}
         else if (thisVerb == "imperative") {var thisTable = crVerbReferenceTableImperative(dataDiv, hideInfrequent[i]);}
         else if (thisVerb == "participle") {var thisTable = crVerbReferenceTableParticiple(dataDiv, hideInfrequent[i]);}
         else if (thisVerb == "infinitive-construct") {var thisTable = crVerbReferenceTableInfinitiveConstruct(dataDiv, hideInfrequent[i]);}
	     thisTable.classList.add("js-table");  // used with button, probably don't need if only one table
	     if (hideInfrequent[i] == false) {thisTable.classList.add("hidden");}
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
    if (imperativeTable.innerHTML.length > 0 ){thisDiv.appendChild(imperativeTable);}

	if ((infinitiveConstructTable.innerHTML.length > 0 ) || (participleTable.innerHTML.length > 0 )) {
		// these are side by side if both required
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
    // <div class="onload-verb-reference-single-row">
    // <div class="hidden"> 
	//  <p> header </p>
    //  <p class="js-root">alef:mem:resh</p>
	//  <p class="js-translation"> he said, he says, he will say</p>
	//  <p class="js-mfsymbol"></p>
	//  <p class="js-verb">frequent :  : root1 alef+kamatz : root2 mem+patach : root3 resh : |  : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh :   |   : yod+cholam  : root1 alef : root2 mem+patach : root3 resh :  *  : yod+tsere : root1 alef+kamatz : root2 mem+tsere : root3 resh :   |  frequent : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+segol : root3 resh :  *  : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh :  
    //  </p>
	//  <p class="js-audio-dir">verbs/amar</p>
    //  <p class="js-audio">amar|vuhamar|yomar*yeamer|vayomer*vayomar</p>
	// </div></div>
    var headerYN = thisDiv.firstElementChild.children[0].innerHTML.trim();
	var header = headerYN == "header";
	
	//var translation = thisDiv.getElementsByClassName("js-translation")[0].innerHTML.trim();
	//var verbRoot = thisDiv.getElementsByClassName("js-root")[0].innerHTML.trim();
	var translation = getHTMLTextByClass(thisDiv, "js-translation");
	var verbRoot = getHTMLTextByClass(thisDiv, "js-root");
	
	//var mfSymbolHTML = thisDiv.getElementsByClassName("js-mfsymbol")[0].innerHTML.trim();
	var mfSymbolHTM = getHTMLTextByClass(thisDiv, "js-mfsymbol");
	var mfSymbol = "";
	if (mfSymbolHTML == "m") {mfSymbol = maleSymbol;}
	else if (mfSymbolHTML == "f") {mfSymbol = femaleSymbol;}
	else if (mfSymbolHTML == "mm") {mfSymbol = maleSymbol+maleSymbol;}
	else if (mfSymbolHTML == "ff") {mfSymbol = femaleSymbol+femaleSymbol;}
	
     var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");
	
	var thisRowSpecs = crArrayOfArrays(thisDiv, "js-verb")
   // var thisRowSpecs = thisDiv.getElementsByClassName("js-verb")[0].innerHTML.split(globalDivider1);

	var nGroups = thisRowSpecs.length;
 		
    thisTable.appendChild(crVerbReferenceTableColgroup(nGroups));
	
    if ( header) {		
	   var imperative = false;
	   if (nGroups == 5) {imperative = true;}
	   thisTable.appendChild(crVerbTableHeaderRow(imperative,false));
	}
	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translation, mfSymbol, thisRowSpecs, lastRow);


  // insert row in document	
	thisDiv.appendChild(thisTable);
	
	
}
	
function addVerbReferenceTableRow(thisTable, verbRootHTML,  rowTranslation, mfSymbol, verbPartsHTML,lastRow, audioHTML){
  // NB if any audio, assumes length of verbPartsHTML and audioHTML the same 
  // verbPartsHTML is array of arrays
   var i;
   var row;
   var group;
  
//test("hello from addVerbReferenceTableRow, verbPArtsHTML="+verbPartsHTML+ rowTranslation+ " " +  " MF=" +mfSymbol  ); 

    // check if any audio (audioHTML is array of arrays with audio dir added to soundfilename)
    var anyAudio = audioHTML != null;	 

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
//test("hello from addVerbReferenceTableRow, nVariants=" +nVariants ); 
    		
   

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
      } else {
		  // nothing in column 1 for subswequent rows
          var col1 = document.createElement("td");
 	  }	 
      thisTableRow.appendChild(col1);

         // verb columns
		 //-------------
      for (group = 0; group < nGroups; group++){
		  
		 // now not separate columns for root letters, 2 columns, column 1=prefix (if any), column 2=rest of verb
         //--------------------------------------------------------------------------------------------------	 
         var groupCol1 = document.createElement("td"); // root+suffix column
         var groupCol2 = document.createElement("td"); // prefix column

         groupCol1.classList.add("hebrew25");
         groupCol2.classList.add("hebrew25");
	
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
			// verbPartsHTML[group][row]= frequent/infrequent : prefix letters : root1 letter(s) : root2 letter(s) : root3 letter(s) : suffix
			
			 var theseHTMLSyllables = verbPartsHTML[group][row].split(globalDivider2);
			 var frequentInfrequent = theseHTMLSyllables[0].trim();
			 var thisPrefix = theseHTMLSyllables[1].trim();
			 var thisRoot1 = theseHTMLSyllables[2].replace("root1","").trim();
			 var thisRoot2 = theseHTMLSyllables[3].replace("root2","").trim();
			 var thisRoot3 = theseHTMLSyllables[4].replace("root3","").trim();
			 var thisSuffix = theseHTMLSyllables[5].trim();
			
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
//element.addEventListener("click",soundclickEventListener);		   
		   // root 1
		    var thisSpan = document.createElement("span");
		    if (thisRoot1.length > 0){
			
               thisSpan.appendChild(document.createTextNode(convertHTMLToJavascript(thisRoot1)));
			   if (thisRoot1.slice(0,1) != verbRoot[0].slice(0,1)) {
				  thisSpan.classList.add("verb-reference-table-verb-root-different");
			   } else {         
			      thisSpan.classList.add("verb-reference-table-root");
			   }
		    }
		    groupCol1.appendChild(thisSpan);

		   // root 2
		    var thisSpan = document.createElement("span");
		    if (thisRoot2.length > 0){
              thisSpan.appendChild(document.createTextNode(convertHTMLToJavascript(thisRoot2)));
			  if (thisRoot2.slice(0,1) != verbRoot[1].slice(0,1)) {
				  thisSpan.classList.add("verb-reference-table-verb-root-different");
			  } else {
				  thisSpan.classList.add("verb-reference-table-root");
			  }
		    }
		    groupCol1.appendChild(thisSpan);
		   
		   // root 3
		    var thisSpan = document.createElement("span");
		    if (thisRoot3.length > 0){
              thisSpan.appendChild(document.createTextNode(convertHTMLToJavascript(thisRoot3)));
			  if (thisRoot3.slice(0,1) != verbRoot[2].slice(0,1)) {
				  thisSpan.classList.add("verb-reference-table-verb-root-different");
			  } else  {
				  thisSpan.classList.add("verb-reference-table-root");
			  }
		    }
		    groupCol1.appendChild(thisSpan);
		   
		   // suffix
		    var thisSpan = document.createElement("span");
		    if (thisSuffix.length > 0){
              thisSpan.appendChild(document.createTextNode(convertHTMLToJavascript(thisSuffix)));
			  thisSpan.classList.add("verb-reference-table-non-root");
		    }
		    groupCol1.appendChild(thisSpan);
		   
		   // prefix (second column)
		   //-----------------------
		    var thisSpan = document.createElement("span");
		    if (thisPrefix.length > 0){
              thisSpan.appendChild(document.createTextNode(convertHTMLToJavascript(thisPrefix)));
			  thisSpan.classList.add("verb-reference-table-non-root");
		    }
		    groupCol2.appendChild(thisSpan);

		 }

         thisTableRow.appendChild(groupCol1);
		 thisTableRow.appendChild(groupCol2);
		 
      } // for group
	  
      thisTable.appendChild(thisTableRow);
	  
  } // for row

   
   return thisTable;
}

function crVerbReferenceTablePersons1and3(dataDiv, hideInfrequent ){
	var i;
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
 	
	var translationI = getPersonTranslation(dataDiv, "I");
	var translationYou = getPersonTranslation(dataDiv, "you");
	var translationHe = getPersonTranslation(dataDiv, "he");
	var translationShe = getPersonTranslation(dataDiv, "she");
	var translationWe = getPersonTranslation(dataDiv, "we");
	var translationThey = getPersonTranslation(dataDiv, "they");

	var verbRoot = getHTMLTextByClass(dataDiv, "js-root");
	
//test("hello from crVerbReferenceTableMain, dataDivverb root=" + verbRoot);
    var audioDir = getHTMLTextByClass(dataDiv, "js-audio");	
	

	var qatalHTML = crArrayOfArrays(dataDiv, "js-qatal", hideInfrequent);
	var weqatalHTML = crArrayOfArrays(dataDiv, "js-weqatal" , hideInfrequent);
	var yiktolHTML = crArrayOfArrays(dataDiv, "js-yiktol" , hideInfrequent);
	var vavyiktolHTML = crArrayOfArrays(dataDiv, "js-vavyiktol", hideInfrequent);

    var verbI = [qatalHTML[0],weqatalHTML[0],yiktolHTML[0],vavyiktolHTML[0]];
    var verbWe  = [qatalHTML[5],weqatalHTML[5],yiktolHTML[5],vavyiktolHTML[5]];
	var verbHe  = [qatalHTML[3],weqatalHTML[3],yiktolHTML[3],vavyiktolHTML[3]];
	var verbShe  = [qatalHTML[4],weqatalHTML[4],yiktolHTML[4],vavyiktolHTML[4]];
	var verbThey = [qatalHTML[7],weqatalHTML[7],yiktolHTML[7],vavyiktolHTML[7]]; 
	var verbTheyF = [["noVerbPart"],["noVerbPart"],yiktolHTML[9],vavyiktolHTML[9]];	
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(4));

   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = false;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
	var lastRow = false;

   // 3rd person rows
   // ---------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("he, she, they",9));
   
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe, "", verbHe,lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationShe, "", verbShe,lastRow);
   
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, "", verbThey,lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, femaleSymbol+femaleSymbol, verbTheyF,lastRow);

	
   // First person rows
   // ------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("I, we",9));
	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationI, "", verbI,lastRow);
	var lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationWe, "", verbWe,lastRow);
	

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

 	var verbRoot = getHTMLTextByClass(dataDiv, "js-root");
	
	
	var qatalHTML = crArrayOfArrays(dataDiv, "js-qatal" ,hideInfrequent);
	var weqatalHTML = crArrayOfArrays(dataDiv, "js-weqatal", hideInfrequent);
	var yiktolHTML = crArrayOfArrays(dataDiv, "js-yiktol", hideInfrequent);
	var vavyiktolHTML = crArrayOfArrays(dataDiv, "js-vavyiktol", hideInfrequent);
	var imperativeHTML = crArrayOfArrays(dataDiv, "js-imperative", hideInfrequent);
	

	var verbYouSingM = [qatalHTML[1],weqatalHTML[1],yiktolHTML[1],imperativeHTML[0],vavyiktolHTML[1]];
	var verbYouSingF  = [qatalHTML[2],weqatalHTML[2],yiktolHTML[2],imperativeHTML[2],vavyiktolHTML[2]];
	var verbYouPluralM  = [qatalHTML[6],weqatalHTML[6],yiktolHTML[6],imperativeHTML[1],vavyiktolHTML[6]];
	var verbYouPluralF  = [qatalHTML[8],weqatalHTML[8],yiktolHTML[8],imperativeHTML[3],vavyiktolHTML[8]];

    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(5));
	
   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = true;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));

	var translationYou = getPersonTranslation(dataDiv, "you");
	var translationImperative = getHTMLTextByClass(dataDiv, "js-translationImperative");

	//not sure what this does??
	var translationYouSplit = translationYou.split(globalDivider1);
	var translationImperativeSplit = translationImperative.split(globalDivider1);
	var translation = translationYouSplit[0] + ", " + translationImperativeSplit[0] + " (imperative)"
	for (i=1; i < translationYouSplit.length; i++){
		// crReferenceTableSectionHeaderRow inserts <br> at globalDivider1
       var translation = translation + globalDivider1 + translationYouSplit[i] + ", " + translationImperativeSplit[i] + " (imperative)";
    }
    thisTable.appendChild(crReferenceTableSectionHeaderRow(translation, 11,true));

	var lastRow = false;
	
   // masc rows

   //--------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", maleSymbol, verbYouSingM, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", maleSymbol+maleSymbol, verbYouPluralM, lastRow);

  // fem rows
  //------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", femaleSymbol, verbYouSingF, lastRow);
	lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, "addressing", femaleSymbol+femaleSymbol, verbYouPluralF, lastRow);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll-table-550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}

function crVerbReferenceTableMain(dataDiv, hideInfrequent ){
//test("hello from crVerbReferenceTableMain=" );

	var i;
	// "standard" order, singular, plural, plural females only
	// "you" forms don't include imperative
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
	var translationI = getPersonTranslation(dataDiv, "I");
	var translationYou = getPersonTranslation(dataDiv, "you");
	var translationHe = getPersonTranslation(dataDiv, "he");
	var translationShe = getPersonTranslation(dataDiv, "she");
	var translationWe = getPersonTranslation(dataDiv, "we");
	var translationThey = getPersonTranslation(dataDiv, "they");

  //  var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
  //  var verbRoot = verbRootPara.innerHTML;
    var verbRoot = getHTMLTextByClass(dataDiv, "js-root");

//test("hello from crVerbReferenceTableMain, dataDivverb root=" + verbRoot);	
	
	var qatalHTML = crArrayOfArrays(dataDiv, "js-qatal", hideInfrequent);
    var weqatalHTML = crArrayOfArrays(dataDiv, "js-weqatal", hideInfrequent);
    var yiktolHTML = crArrayOfArrays(dataDiv, "js-yiktol", hideInfrequent);
    var vavyiktolHTML = crArrayOfArrays(dataDiv, "js-vavyiktol", hideInfrequent);
//test("hello from crVerbReferenceTableMain, qatalHTML=" + qatalHTML);	


    var verbI = [qatalHTML[0],weqatalHTML[0],yiktolHTML[0],vavyiktolHTML[0]];
	var verbYouSingM = [qatalHTML[1],weqatalHTML[1],yiktolHTML[1],vavyiktolHTML[1]];
	var verbYouSingF  = [qatalHTML[2],weqatalHTML[2],yiktolHTML[2],vavyiktolHTML[2]];
	var verbHe  = [qatalHTML[3],weqatalHTML[3],yiktolHTML[3],vavyiktolHTML[3]];
	var verbShe  = [qatalHTML[4],weqatalHTML[4],yiktolHTML[4],vavyiktolHTML[4]];
    var verbWe  = [qatalHTML[5],weqatalHTML[5],yiktolHTML[5],vavyiktolHTML[5]];
	var verbYouPluralM  = [qatalHTML[6],weqatalHTML[6],yiktolHTML[6],vavyiktolHTML[6]];
	//var verbThey = [qatalHTML[7],weqatalHTML[7],[],[]]; 
	//var verbTheyM  = [[],[],yiktolHTML[7],vavyiktolHTML[7]];
	var verbThey = [qatalHTML[7],weqatalHTML[7],["noVerbPart"],["noVerbPart"]]; 
	var verbTheyM  = [["noVerbPart"],["noVerbPart"],yiktolHTML[7],vavyiktolHTML[7]];
	var verbYouPluralF  = [qatalHTML[8],weqatalHTML[8],yiktolHTML[8],vavyiktolHTML[8]];
	//var verbTheyF = [[],[],yiktolHTML[9],vavyiktolHTML[9]];	
	var verbTheyF = [["noVerbPart"],["noVerbPart"],yiktolHTML[9],vavyiktolHTML[9]];	
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(4));

   // thisTable.appendChild(crVerbMainHeaderRow());
    var imperative = false;
    thisTable.appendChild(crVerbTableHeaderRow(imperative));
	
   // "Singular" header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",9));

    var lastRow = false;
	
   // singular rows
   //--------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationI, "", verbI, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, maleSymbol, verbYouSingM, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, femaleSymbol, verbYouSingF, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationHe, "", verbHe, lastRow);
	lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationShe, "", verbShe, lastRow);

  // plural rows
  //------------
  
    lastRow = false;
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",9));

    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationWe, "", verbWe, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, maleSymbol+maleSymbol, verbYouPluralM, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, "", verbThey, lastRow);
    lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationThey, maleSymbol+maleSymbol,verbTheyM, lastRow);


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",9));
	
    lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou, femaleSymbol+femaleSymbol, verbYouPluralF, lastRow);
    lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, translationYou.replaceAll("you","they"), femaleSymbol+femaleSymbol, verbTheyF, lastRow);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
  //  scrollDiv.classList.add("scroll-table-550");
    scrollDiv.append(thisTable);
	
    return scrollDiv;
	

}

function crVerbReferenceTableImperative(dataDiv, hideInfrequent){
//test("hello from crVerbReferenceTableImperative");	
	var i;

	// imperative table
	//-----------------
	
    //var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    //var verbRoot = verbRootPara.innerHTML;
	var verbRoot = getHTMLTextByClass(dataDiv, "js-root");
                                                                       				  
    //var translationImperativePara = dataDiv.getElementsByClassName("js-translationImperative")[0];
   // var translationImperative = translationImperativePara.innerHTML;
	var translationImperative = getHTMLTextByClass(dataDiv, "js-translationImperative");
	
//	var exclInfrequent = "";
//	if (hideInfrequent) { var exclInfrequent = "-excl-infrequent";}
	
	//var imperativePara = dataDiv.getElementsByClassName("js-imperative" + exclInfrequent)[0];
    //var imperativeHTML = imperativePara.innerHTML.split(globalDivider1);

	var imperativeHTML = crArrayOfArrays(dataDiv, "js-imperative" , hideInfrequent);
	
	var imperativeMS = [imperativeHTML[0]];
	var imperativeMP = [imperativeHTML[1]];
	var imperativeFS = [imperativeHTML[2]];
	var imperativeFP = [imperativeHTML[3]];
	
   // table with imperative
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));


	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	//var thisTranslation = translationImperative + "\u2003" + " speaking to "
	var thisTranslation = translationImperative +  " (speaking to ";
 	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol, imperativeMS, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol+maleSymbol,imperativeMP, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol,imperativeFS, lastRow);
    var lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol+femaleSymbol,imperativeFP, lastRow);

    return thisTable;

}

function crVerbReferenceTableParticiple(dataDiv, hideInfrequent){
	var i;

	// participles table
	//-----------------
	
   // var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
  //  var verbRoot = verbRootPara.innerHTML;
	var verbRoot = getHTMLTextByClass(dataDiv, "js-root");
								  
   // var translationParticiplePara = dataDiv.getElementsByClassName("js-translationParticiple")[0];
   // var translationParticiple = translationParticiplePara.innerHTML;
	var translationParticiple = getHTMLTextByClass(dataDiv, "js-translationParticiple");
	
//test("hello from crVerbReferenceTableparticiple, translationParticiple=" + translationParticiple);	

//	var exclInfrequent = "";
//	if (hideInfrequent) { var exclInfrequent = "-excl-infrequent";}
	
	//var participlePara = dataDiv.getElementsByClassName("js-participle" + exclInfrequent)[0];
   // var participleHTML = participlePara.innerHTML.split(globalDivider1);

	var participleHTML = crArrayOfArrays(dataDiv, "js-participle", hideInfrequent);
	
	var participleMS = [participleHTML[0]];
	var participleMP = [participleHTML[1]];
	var participleFS = [participleHTML[2]];
	var participleFP = [participleHTML[3]];
	
   // table with participles
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translationParticiple + " (describing "; 
 	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol, participleMS, lastRow);
//test("hello from crVerbReferenceTableparticiple");	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, maleSymbol+maleSymbol,participleMP, lastRow);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol,participleFS, lastRow);
    var lastRow = true;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, femaleSymbol+femaleSymbol,participleFP, lastRow);

    return thisTable;

}

function crVerbReferenceTableInfinitiveConstruct(dataDiv, hideInfrequent){

	// infinitive construct table
	//-----------------
   // var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
   // var verbRoot = verbRootPara.innerHTML;
	var verbRoot = getHTMLTextByClass(dataDiv, "js-root");

//test("hello from crVerbReferenceTableInfinitiveConstruct, verbroot=" + verbRoot);								  
    //var translationInfinitiveConstructPara = dataDiv.getElementsByClassName("js-translationInfinitiveConstruct")[0];
    //var translationInfinitiveConstruct = translationInfinitiveConstructPara.innerHTML;
	var translationInfinitiveConstruct = getHTMLTextByClass(dataDiv, "js-translationInfinitiveConstruct");

//	var exclInfrequent = "";
//	if (hideInfrequent) { var exclInfrequent = "-excl-infrequent";}
	
	//var infinitiveConstructPara = dataDiv.getElementsByClassName("js-infinitive-construct" + exclInfrequent)[0];
   // var infinitiveConstructHTML = infinitiveConstructPara.innerHTML.split(globalDivider1);

	var infinitiveConstructHTML = crArrayOfArrays(dataDiv, "js-infinitive-construct" , hideInfrequent);

	        // (should be only one)
    var infinitiveConstruct = [infinitiveConstructHTML[0]]	;		
	
   // table with infinitive construct
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

    thisTable.appendChild(crVerbReferenceTableColgroup(1));

	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translationInfinitiveConstruct; 
 	
	var lastRow = false;
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, thisTranslation, "", infinitiveConstruct, lastRow);

    return thisTable;

}


// utility functions //
//-------------------//

function getHTMLTextByClass(dataDiv, jsClass){	
	var checkClass = dataDiv.getElementsByClassName(jsClass);
	if (checkClass.length > 0){	var textItem = checkClass[0].innerHTML.trim();}
	else                    {   var textItem = ""; }
	
	return textItem;
}	
 
 
function getPersonTranslation(dataDiv, person){
	
   var personTranslation = "";
   
   if (person == "I"){
	  personTranslation = getHTMLTextByClass(dataDiv, "js-translationI" );

   } else if (person == "you"){
	  personTranslation = getHTMLTextByClass(dataDiv, "js-translationYou" );

   } else if (person == "he") {
	  personTranslation = getHTMLTextByClass(dataDiv, "js-translationHe" );

   } else if (person == "she") {
	  personTranslation = getHTMLTextByClass(dataDiv, "js-translationHe" );
      if (personTranslation.length > 0){
		 personTranslation = personTranslation.replaceAll("he","she"); 
	  }	  
   } else if (person == "we") {
	  personTranslation = getHTMLTextByClass(dataDiv, "js-translationYou" );
      if (personTranslation.length > 0){
		 personTranslation = personTranslation.replaceAll("you","we"); 
	  }	  

   } else if (person == "they"){
	  personTranslation = getHTMLTextByClass(dataDiv, "js-translationYou" );
      if (personTranslation.length > 0){
		 personTranslation = personTranslation.replaceAll("you","they"); 
	  }	  

   }	   
 
   return personTranslation;

}
 
function addAudioDirToAudio(dataDiv, audioArray){
	var i;
	var j;
	
	var audioParas = dataDiv.getElementsByClassName("js-audio-dir"); 
	if (audioParas.length > 0) {
	   var audioDir = audioParas[0].innerHTML.trim();
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
	else { 
	   return audioArray;
   }
	
}
 	
function crArrayOfArrays(dataDiv, className, hideInfrequent=false){
   var i;
   var j;
//test("hello from crArrayOfArrays, classname=" + className  );
  
   var thisArray = [];

   var HTMLParas = dataDiv.getElementsByClassName(className);  
   if (HTMLParas.length > 0) {
      var array1 = HTMLParas[0].innerHTML.trim().split(globalDivider1);
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
  }	  
//test("hello from crArrayOfArrays, classname=" + className + " ,HTMLPAras[0]=" + HTMLParas[0].innerHTML + ", thisArray=" + thisArray);
  return thisArray;	

}		
