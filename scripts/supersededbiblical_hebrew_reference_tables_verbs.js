
//-----------------------------------------------------------
//-----------------------------------------------------------
//   non-generic tables with 5 columns for each verb
//-----------------------------------------------------------
//-----------------------------------------------------------


function crVerbReferenceTablesFromHTML(thisDiv){
		
    var rootSeparateColumns = true;

	crVerbReferenceTableMain(thisDiv);
	crVerbReferenceTableImperative(thisDiv);
	crVerbReferenceTableParticiple(thisDiv);
}	


function addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, rowTranslation, mfSymbol, verbPartsHTML, lastRow=false){
//test("hello from  addVerbReferenceTableRow");                
   var col;
   var row;
   var group;
   var nGroups = verbPartsHTML.length ;	// 4 for main part of verb, 1 for imperative
   
   var verbPartsVariantsHTML = [];
   var nVariants = [];
   
     // check whether any cases where > 1 variant for verb part for a particular person
   for (group = 0; group < nGroups; group++){
	  var thisGroupHTML = verbPartsHTML[group];
	  if (thisGroupHTML.length > 0){
		 verbPartsVariantsHTML[group] = thisGroupHTML.split(verbDivider); 
	     nVariants[group] = verbPartsVariantsHTML[group].length;
	  } else {	
		 verbPartsVariantsHTML[group] = ""; 
	     nVariants[group] = 0;
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
          thisCol = crRowHeadingCol(rowTranslation, mfSymbol);
      } else {
		  // only if > 1 item in this row
          var thisCol = document.createElement("td");
      }		  
      thisRow.appendChild(thisCol);

         // verb columns
		 //-------------
      for (group = 0; group < nGroups; group++){
		  
		if (nVariants[group] > row){
		   	if (verbPartsVariantsHTML[group][row].trim() == "noVerbPart"){
		        var thisGroup = noVerbPart;
	        } else {
				var theseHTMLCols = verbPartsVariantsHTML[group][row].split(globalDivider2);
				var thisGroup = [];
                for (col = 0; col < theseHTMLCols.length; col++){
                   thisGroup[col] = convertHTMLToJavascript(theseHTMLCols[col]);
				}  
			}	
		} else {
           var thisGroup = "";
		}   
			
	  
        if (rootSeparateColumns){
		 // separate columns in the root letters
         //-------------------------------------	
	      if ((thisGroup.length == 0 ) | (thisGroup == noVerbPart)){
		  // no content
		     for (col = 0; col < 5; col++) {
               var thisCol = document.createElement("td");
			   
			   if (thisGroup.length == 0 ){
				   if (row == 0) {thisCol.classList.add("verb-reference-table-blank-cell");}
				   
			   } else {	   
                    // thisGroup == noVerbPart
			      if (col==2) {
				     var thisSpan = document.createElement("span");
	                 thisSpan.appendChild(document.createTextNode("-"));
				     thisCol.appendChild(thisSpan);
			      }
			   }
               
		       if (col==0){
                    thisCol.classList.add("verb-reference-table-hebrew-suffix");
  	           } else if (col==4){
                    thisCol.classList.add("verb-reference-table-hebrew-prefix");
			   }	
				   
			   thisRow.appendChild(thisCol);
		     }  

	      } else {	  
	  
		     for (col = 0; col < 5; col++) {
                var thisCol = document.createElement("td");
		        if (col==0){
                   thisCol.classList.add("verb-reference-table-hebrew-suffix");
                   thisCol.classList.add("verb-reference-table-non-emphasis");
		        } else if (col==4){
                   thisCol.classList.add("verb-reference-table-hebrew-prefix");
                   thisCol.classList.add("verb-reference-table-non-emphasis");
                } else {
                   thisCol.classList.add("verb-reference-table-hebrew-middle");
                   thisCol.classList.add("verb-reference-table-emphasis");
                }
			
			    if ( thisGroup[col].length > 0) {
                  var thisSpan = document.createElement("span");
	              thisSpan.appendChild(document.createTextNode(thisGroup[col]));
	              thisSpan.classList.add("hebrew25");
			      if (col==1 | col==2 | col==3){
              
				      if (thisGroup[col].search(verbRoot[col-1]) > -1){
				         thisCol.classList.add("verb-reference-table-verb-root");
				         thisSpan.classList.add("verb-reference-table-verb-root");
				      } else {
				         thisSpan.classList.add("verb-reference-table-verb-root-different");
                      }					   
			      }
                  thisCol.appendChild(thisSpan);
                }
			
			    thisRow.appendChild(thisCol);
		     }  		  	
	  

		  }	// group.length > 0  
		 
        } else {  
		 // not separate columns for root letters, 2 columns, column 1=prefix (if any), column 2=rest of verb
         //-------------------------------------------------------	 
           var thisCol = document.createElement("td");
		 
	       if (thisGroup.length == 0){
		  // no content
               thisCol.classList.add("verb-reference-table-blank-cell");
		  
	       } else {	  
	         thisCol.classList.add("hebrew25");
	         thisCol.classList.add("verb-reference-table-hebrew");
			 
		     for (col = 4; col > -1; col--) {
			    if (col==0 | col==4 ){
			       if ( thisGroup[col].length > 0) {
	                  var thisSpan = document.createElement("span");
	                  thisSpan.appendChild(document.createTextNode(thisGroup[col]));
	                  thisCol.appendChild(thisSpan);
				   }
				} else 	if (col==1 | col==2 | col==3){
	               var thisSpan = document.createElement("span");
			       if ( thisGroup[col].length > 0) {
	                  thisSpan.appendChild(document.createTextNode(hairsp+thisGroup[col]+hairsp));
				      if (thisGroup[col].search(verbRoot[col-1]) > -1){
				         thisSpan.classList.add("verb-reference-table-verb-root");
				      } else {
				         thisSpan.classList.add("verb-reference-table-verb-root-different");
                      }	
					  
                   } else {
	                  thisSpan.appendChild(document.createTextNode(thinsp));
                   }
				   
	               thisCol.appendChild(thisSpan);
					
				}	
			
		     } // 5 sections of verb, not separate columns			 
			 
		   }	// group.length > 0 , not separate columns
		 
		   thisRow.appendChild(thisCol);
	  
	    } // not separate columns
	  
     } // verb columns
	 thisTable.appendChild(thisRow);
	 
   } // rows	 
//test("hello from addVerbReferenceTableRow,group="+group);	  	 

   return thisTable;
}



function crVerbReferenceTableMain(thisDiv, rootSeparateColumns=true){
	var i;
	
	var dataDiv = thisDiv.nextElementSibling;
	
	// main table - qatal, weqatal, yiktol, vavyiktol
	//----------------------------------------------
    var translationIPara = dataDiv.getElementsByClassName("js-translationI")[0];
// test("hello from crVerbReferenceTableMainAndImpFromHTML");   
    var translationI = translationIPara.innerHTML;
    var translationYouPara = dataDiv.getElementsByClassName("js-translationYou")[0];
    var translationYou = translationYouPara.innerHTML;
    var translationHePara = dataDiv.getElementsByClassName("js-translationHe")[0];
    var translationHe = translationHePara.innerHTML;
	
    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRootHTML = verbRootPara.innerHTML.split(globalDivider1);
	var verbRoot = convertHTMLToJavascript(verbRootHTML[0]);
	
    var qatalPara = dataDiv.getElementsByClassName("js-qatal")[0];
    var qatalHTML = qatalPara.innerHTML.split(globalDivider1);
    var weqatalPara = dataDiv.getElementsByClassName("js-weqatal")[0];
    var weqatalHTML = weqatalPara.innerHTML.split(globalDivider1);
    var yiktolPara = dataDiv.getElementsByClassName("js-yiktol")[0];
    var yiktolHTML = yiktolPara.innerHTML.split(globalDivider1);
    var wayyiktolPara = dataDiv.getElementsByClassName("js-vavyiktol")[0];
    var wayyiktolHTML = wayyiktolPara.innerHTML.split(globalDivider1);
	

    var verbI = [qatalHTML[0],weqatalHTML[0],yiktolHTML[0],wayyiktolHTML[0]];
	var verbYouSingM = [qatalHTML[1],weqatalHTML[1],yiktolHTML[1],wayyiktolHTML[1]];
	var verbYouSingF  = [qatalHTML[2],weqatalHTML[2],yiktolHTML[2],wayyiktolHTML[2]];
	var verbHe  = [qatalHTML[3],weqatalHTML[3],yiktolHTML[3],wayyiktolHTML[3]];
	var verbShe  = [qatalHTML[4],weqatalHTML[4],yiktolHTML[4],wayyiktolHTML[4]];
    var verbWe  = [qatalHTML[5],weqatalHTML[5],yiktolHTML[5],wayyiktolHTML[5]];
	var verbYouPluralM  = [qatalHTML[6],weqatalHTML[6],yiktolHTML[6],wayyiktolHTML[6]];
	var verbThey = [qatalHTML[7],weqatalHTML[7],[],[]]; 
	var verbTheyM  = [[],[],yiktolHTML[7],wayyiktolHTML[7]];
	var verbYouPluralF  = [qatalHTML[8],weqatalHTML[8],yiktolHTML[8],wayyiktolHTML[8]];
	var verbTheyF = [[],[],yiktolHTML[9],wayyiktolHTML[9]];	
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

	thisTable.appendChild(crVerbMainHeaderRow(rootSeparateColumns));
	
   // "Singular" header row
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular",20));

   // singular rows
   //--------------
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationI, "", verbI);
//test("hello from crVerbReferenceTableMainFromHTML");	
       
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou, maleSymbol, verbYouSingM);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou, femaleSymbol, verbYouSingF);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationHe, "", verbHe);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationHe.replaceAll("he","she"), "", verbShe, true);

  // plural rows
  //------------
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural",20));

    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou.replaceAll("you","we"), "", verbWe);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou, maleSymbol+maleSymbol, verbYouPluralM);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), "", verbThey);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), maleSymbol+maleSymbol,verbTheyM, true);


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only",20));
	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou, femaleSymbol+femaleSymbol, verbYouPluralF);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), femaleSymbol+femaleSymbol, verbTheyF, true);

    // create a scrolling div to contain the table
    var scrollDiv = document.createElement("div");
    scrollDiv.classList.add("scroll-table-550");

    scrollDiv.append(thisTable);
    thisDiv.appendChild(scrollDiv);
	

}

function crVerbReferenceTableImperative(thisDiv, rootSeparateColumns=true){
	var i;
	var dataDiv = thisDiv.nextElementSibling;

	// imperative table
	//-----------------
	
    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRootHTML = verbRootPara.innerHTML.split(globalDivider1);
	var verbRoot = convertHTMLToJavascript(verbRootHTML[0]);
								  
    var translationImperativePara = dataDiv.getElementsByClassName("js-translationImperative")[0];
    var translationImperative = translationImperativePara.innerHTML;

    var imperativePara = dataDiv.getElementsByClassName("js-imperative")[0];
    var imperativeHTML = imperativePara.innerHTML.split(globalDivider1);
	
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Imperative (giving orders or making requests)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
   // table with imperative
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");


	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	//var thisTranslation = translationImperative + "\u2003" + " speaking to "
	var thisTranslation = translationImperative +  " speaking to "
 	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, maleSymbol, [imperativeHTML[0]]);
//test("hello from crVerbReferenceTableImperative");	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, maleSymbol+maleSymbol,[imperativeHTML[1]]);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol,[imperativeHTML[2]]);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol+femaleSymbol,[imperativeHTML[3]], true);

    thisDiv.appendChild(thisTable);

}


function crVerbReferenceTableParticiple(thisDiv, rootSeparateColumns=true){
	var i;
	var dataDiv = thisDiv.nextElementSibling;

	// participles table
	//-----------------
	
    var verbRootPara = dataDiv.getElementsByClassName("js-root")[0];
    var verbRootHTML = verbRootPara.innerHTML.split(globalDivider1);
	var verbRoot = convertHTMLToJavascript(verbRootHTML[0]);
								  
    var translationParticiplePara = dataDiv.getElementsByClassName("js-translationParticiple")[0];
    var translationParticiple = translationParticiplePara.innerHTML;

    var participlePara = dataDiv.getElementsByClassName("js-participle")[0];
    var participleHTML = participlePara.innerHTML.split(globalDivider1);
	
	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Participle (-ing)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
   // table with participles
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");


	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translationParticiple; 
 	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, maleSymbol, [participleHTML[0]]);
//test("hello from crVerbReferenceTableparticiple");	
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, maleSymbol+maleSymbol,[participleHTML[1]]);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol,[participleHTML[2]]);
    thisTable = addVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol+femaleSymbol,[participleHTML[3]], true);

    thisDiv.appendChild(thisTable);

}



//-----------------------------------------------------------------------------------------------

//--------- superseded code-----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


function oldaddVerbReferenceTableRow(thisTable, verbRoot, rootSeparateColumns, rowTranslation, mfSymbol, verbPartsHTML, lastRow=false){
                 
   var col;
   var row;
   var group;
   var nGroups = verbPartsHTML.length ;	// 4 for main part of verb, 1 for imperative
   
   var verbPartsVariantsHTML = [];
   var nVariants = [];
   
   for (group = 0; group < nGroups; group++){
	  var thisGroupHTML = verbPartsHTML[group];
	  if (thisGroupHTML.length > 0){
		 verbPartsVariantsHTML[group] = thisGroupHTML.split(verbDivider); 
	     nVariants[group] = verbPartsVariantsHTML[group].length;
	  } else {	
		 verbPartsVariantsHTML[group] = ""; 
	     nVariants[group] = 0;
	  }
   }

   var maxVariants = Math.max(...nVariants); 
   


   for (row = 0; row < maxVariants; row++){ 
 //----------------------------------------   
      var thisRow = document.createElement("tr");
	  if ( row == 0 ) {thisRow.classList.add("verb-reference-table-top-border");}
	  if ( lastRow && row == maxVariants - 1 ) {thisRow.classList.add("verb-reference-table-bottom-border");}
	  
       // row heading columns
	   //--------------------
      var thisCol = document.createElement("td");
      thisRow.appendChild(thisCol);
 
      var thisCol = document.createElement("td");
      if ( row == 0 ) {
         // first row 
         thisCol.appendChild(document.createTextNode(rowTranslation));
   
         if (mfSymbol.length > 0){
            var span1 = document.createElement("span");
            span1.appendChild(document.createTextNode(" " + mfSymbol));
	        span1.classList.add("male-female-symbol-reference-table");
            thisCol.appendChild(span1);
         }	   
	  } 	  
      thisRow.appendChild(thisCol);

         // verb columns
		 //-------------
      for (group = 0; group < nGroups; group++){
 
		  
		if (nVariants[group] > row){
           var thisGroup = convertHTMLToJavascript(verbPartsVariantsHTML[group][row]);
		} else {
           var thisGroup = "";
		}   
			
	  
        if (rootSeparateColumns){
		 // separate columns in the root letters
         //-------------------------------------	
	      if (thisGroup.length == 0 ){
		  // no content
		     for (col = 0; col < 5; col++) {
               var thisCol = document.createElement("td");
               if (row == 0) {
				   thisCol.classList.add("verb-reference-table-blank-cell");
			   } else {
			      if (col==0){
                    thisCol.classList.add("verb-reference-table-hebrew-suffix");
		          } else if (col==4){
                    thisCol.classList.add("verb-reference-table-hebrew-prefix");
				  }	
				   
			   }	   
			   thisRow.appendChild(thisCol);
		     }  
	      } else if (thisGroup == noVerbPart){
		  // no content
		     for (col = 0; col < 5; col++) {
                var thisCol = document.createElement("td");
			    if (col==2) {
				  var thisSpan = document.createElement("span");
	              thisSpan.appendChild(document.createTextNode("-"));
				  thisCol.appendChild(thisSpan);
			    } else if (col==0){
                  thisCol.classList.add("verb-reference-table-hebrew-suffix");
		        } else if (col==4){
                  thisCol.classList.add("verb-reference-table-hebrew-prefix");
			    }
			   thisRow.appendChild(thisCol);
		     }  

	      } else {	  
	  
		     for (col = 0; col < 5; col++) {
                var thisCol = document.createElement("td");
		        if (col==0){
                   thisCol.classList.add("verb-reference-table-hebrew-suffix");
		        } else if (col==4){
                   thisCol.classList.add("verb-reference-table-hebrew-prefix");
                } else {
                   thisCol.classList.add("verb-reference-table-hebrew-middle");
                }
			
			    if ( thisGroup[col].length > 0) {
                  var thisSpan = document.createElement("span");
	              thisSpan.appendChild(document.createTextNode(thisGroup[col]));
	              thisSpan.classList.add("hebrew25");
			      if (col==1 | col==2 | col==3){
              
				      if (thisGroup[col].search(verbRoot[col-1]) > -1){
				         thisCol.classList.add("verb-reference-table-verb-root");
				         thisSpan.classList.add("verb-reference-table-verb-root");
				      } else {
				         thisSpan.classList.add("verb-reference-table-verb-root-different");
                      }					   
			      }
                  thisCol.appendChild(thisSpan);
                }
			
			    thisRow.appendChild(thisCol);
		     }  		  	
	  

		  }	// group.length > 0  
		 
        } else {  
		 // not separate columns, 3 root letters all in one column not sure if this works
         //-------------------------------------------------------	 
           var thisCol = document.createElement("td");
		 
	       if (thisGroup.length == 0){
		  // no content
               thisCol.classList.add("verb-reference-table-blank-cell");
		  
	       } else {	  
	         thisCol.classList.add("hebrew25");
	         thisCol.classList.add("verb-reference-table-hebrew");
			 
		     for (col = 4; col > -1; col--) {
			    if (col==0 | col==4 ){
			       if ( thisGroup[col].length > 0) {
	                  var thisSpan = document.createElement("span");
	                  thisSpan.appendChild(document.createTextNode(thisGroup[col]));
	                  thisCol.appendChild(thisSpan);
				   }
				} else 	if (col==1 | col==2 | col==3){
	               var thisSpan = document.createElement("span");
			       if ( thisGroup[col].length > 0) {
	                  thisSpan.appendChild(document.createTextNode(hairsp+thisGroup[col]+hairsp));
				      if (thisGroup[col].search(verbRoot[col-1]) > -1){
				         thisSpan.classList.add("verb-reference-table-verb-root");
				      } else {
				         thisSpan.classList.add("verb-reference-table-verb-root-different");
                      }	
					  
                   } else {
	                  thisSpan.appendChild(document.createTextNode(thinsp));
                   }
				   
	               thisCol.appendChild(thisSpan);
					
				}	
			
		     } // 5 sections of verb, not separate columns			 
			 
		   }	// group.length > 0 , not separate columns
		 
		   thisRow.appendChild(thisCol);
	  
	    } // not separate columns
	  
     } // verb columns
	 thisTable.appendChild(thisRow);
	 
   } // rows	 
//test("hello from addVerbReferenceTableRow,group="+group);	  	 

   return thisTable;
}

	 // not sure what this is, just initial checking maybe, doessn't deal with possible multiple versions of verb
function crAmarVerbReferenceTableNew(thisDiv){

   var verbRoot = [resh,mem,alef];

   var translationI = "I said, I say, I will say ";
   var translationYou = "you said, you say, you will say ";
   var translationHe = "he said, he says, he will say";
   
   var qatal = [[tav+dagesh+chirik+yod,resh+schwah,mem+patach,alef+kamatz,""],
                [tav+dagesh+kamatz,resh+schwah,mem+patach,alef+kamatz,""],
				[tav+dagesh+schwah,resh+schwah,mem+patach,alef+kamatz,""],
				["",resh,mem+patach,alef+kamatz,""],
				[heh,resh+kamatz,mem+schwah,alef+kamatz,""],
				[nun+vav+dagesh,resh+schwah,mem+kadma+patach,alef+kamatz,""],
				[tav+dagesh+segol+finalMem,resh+schwah,mem+patach,alef+chatafPatach,""],
				[vav+dagesh,resh,mem+schwah,alef+kamatz,""],
				noVerbPart
               ];
//test("hello from crAmarVerbReferenceTableNew");	   
var weqatal = [[tav+dagesh+chirik+yod,resh+schwah,mem+patach,alef+kamatz,vav+schwah],
                  [tav+dagesh+kamatz,resh+schwah,mem+patach,alef+kamatz,vav+schwah],
                  noVerbPart,
				  ["",resh,mem+patach,alef+kamatz,vav+schwah],
				  [heh,resh+kamatz,mem+schwah,alef+kamatz,vav+schwah],
				  [nun+vav+dagesh,resh+schwah,mem+kadma+patach,alef+kamatz,vav+schwah],
				  [tav+dagesh+segol+finalMem,resh+schwah,mem+patach,alef+chatafPatach,vav+patach],
				  [vav+dagesh,resh,mem+schwah,alef+kamatz,vav+schwah],
				  noVerbPart
               ];
   var yiktol = [["",resh,mem+patach,"",alef+cholam],
                 ["",resh,mem+patach,alef,tav+dagesh+cholam],
                 [yod,resh+chirik,mem+schwah,alef,tav+dagesh+cholam],
				 ["",resh,mem+patach,alef,yod+cholam],
				 ["",resh,mem+patach,alef,tav+dagesh+cholam],
				 ["",resh,mem+patach,alef,nun+dagesh+cholam],
				 [vav+dagesh,resh,mem+schwah,alef,tav+dagesh+cholam],
				 [vav+dagesh,resh,mem+schwah,alef,yod+cholam],
				 noVerbPart,
				 [nun+kamatz+heh,resh+schwah,mem+patach+kadma,alef,tav+dagesh+cholam]
                ];
   var wayyiktol = [["",resh,mem+patach,"",vav+kamatz+alef+cholam],
                    ["",resh,mem+segol,alef,vav+patach+tav+dagesh+cholam+mapach],
                    [yod,resh+chirik,mem+schwah,alef,vav+patach+tav+dagesh+cholam],
					["",resh,mem+segol,alef,vav+patach+dagesh+yod+cholam+mapach],
					["",resh,mem+segol,alef,vav+patach+tav+dagesh+cholam+mapach],
					["",resh,mem+segol,alef,vav+patach+nun+mapach+dagesh+cholam],
					[vav+dagesh,resh,mem+schwah,alef,vav+patach+tav+dagesh+cholam],
					[vav+dagesh,resh,mem+schwah,alef,vav+patach+yod+dagesh+cholam],
					noVerbPart,
					[nun+kamatz+heh,resh+schwah,mem+patach+kadma,alef,vav+patach+tav+dagesh+cholam]
                ];
			   
   var imperativeTranslation = "Say! ";
   var imperative = [["",resh,mem+cholam,alef+chatafSegol,""],
                     [vav+dagesh,resh,mem+schwah,alef+chirik,""],
					 [yod,resh+chirik,mem+schwah,alef+chirik,""],
					 noVerbPart
                    ];
   
   crVerbReferenceTableMainNew(thisDiv,
                           verbRoot,
						   true,
 							  translationI,
							  translationYou,
							  translationHe,							  
							  qatal,
							  weqatal,
							  yiktol,
							  wayyiktol
                            );	

	
    // note about cantillation marks indicating stressed
    thisDiv.appendChild(crNoteAboutStressedSyllable());
     // create a space between tables
   //thisDiv.appendChild(crSpaceBetweenTables());
   
   crVerbReferenceTableImperativeNew(thisDiv,
                           verbRoot,
						   true,
						   imperativeTranslation,
						   imperative);


}	


function crVerbReferenceTableMainNew(thisDiv,
                              verbRoot,
							  rootSeparateColumns,
							  translationI,
							  translationYou,
							  translationHe,
							  qatal,
							  weqatal,
							  yiktol,
							  wayyiktol
                              ){
 								  
	var i;

    var verbI = [qatal[0],weqatal[0],yiktol[0],wayyiktol[0]];
	var verbYouSingM = [qatal[1],weqatal[1],yiktol[1],wayyiktol[1]];
	var verbYouSingF  = [qatal[2],weqatal[2],yiktol[2],wayyiktol[2]];
	var verbHe  = [qatal[3],weqatal[3],yiktol[3],wayyiktol[3]];
	var verbShe  = [qatal[4],weqatal[4],yiktol[4],wayyiktol[4]];
    var verbWe  = [qatal[5],weqatal[5],yiktol[5],wayyiktol[5]];
	var verbYouPluralM  = [qatal[6],weqatal[6],yiktol[6],wayyiktol[6]];
	var verbThey = [qatal[7],weqatal[7],[],[]]; 
	var verbTheyM  = [[],[],yiktol[7],wayyiktol[7]];
	var verbYouPluralF  = [qatal[8],weqatal[8],yiktol[8],wayyiktol[8]];
	var verbTheyF = [[],[],yiktol[9],wayyiktol[9]];	
	
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

	thisTable.appendChild(crVerbMainHeaderRow(rootSeparateColumns));
	
   // "Singular" header row
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular"));

   // singular rows
   //--------------
	
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationI, "", verbI));
       
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, maleSymbol, verbYouSingM));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, femaleSymbol, verbYouSingF));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationHe, "", verbHe));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationHe.replaceAll("he","she"), "", verbShe));

  // plural rows
  //------------
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural"));

    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","we"), "", verbWe));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, maleSymbol+maleSymbol, verbYouPluralM));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), "", verbThey));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), maleSymbol+maleSymbol,verbTheyM));


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only"));
	
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, femaleSymbol+femaleSymbol, verbYouPluralF));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), femaleSymbol+femaleSymbol, verbTheyF));

    thisDiv.appendChild(thisTable);

}


function crVerbReferenceTableImperativeNew(thisDiv,
                              verbRoot,
							  rootSeparateColumns,
							  translation,
							  imperative){
								  
	var i;							  

	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Imperative (giving orders or making requests)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
   // table with imperative
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");


	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
	   
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translation + "\u2003" + " speaking to "
 	
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, maleSymbol, [imperative[0]]));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, maleSymbol+maleSymbol,[imperative[1]]));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol,[imperative[2]]));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol+femaleSymbol,[imperative[3]]));

   thisDiv.appendChild(thisTable);

}


//--- end of new ------------



//-------------------------------------------------------------------
//-------------------------------------------------------------------
function crVerbReferenceTableRow(verbRoot, rootSeparateColumns, rowTranslation, mfSymbol, verbParts){
   var col;
   var group;
   
   var thisRow = document.createElement("tr");
   
   var thisCol = document.createElement("td");
   thisRow.appendChild(thisCol);

   var thisCol = document.createElement("td");
   thisCol.appendChild(document.createTextNode(rowTranslation));
   
   if (mfSymbol.length > 0){
      var span1 = document.createElement("span");
      span1.appendChild(document.createTextNode(" " + mfSymbol));
	  span1.classList.add("male-female-symbol-reference-table");
      thisCol.appendChild(span1);
   }	   
   thisRow.appendChild(thisCol);

	
   //var nGroups = thisRowSpecs.length - 1;	
   var nGroups = verbParts.length ;	
   
   for (group = 0; group < nGroups; group++){
    
      var thisGroup = verbParts[group];
	  
      if (rootSeparateColumns){
		 // separate columns in the root letters
         //-------------------------------------	
	     if (thisGroup.length == 0 ){
		  // no content
		    for (col = 0; col < 5; col++) {
               var thisCol = document.createElement("td");
               thisCol.classList.add("verb-reference-table-blank-cell");
		     //  if (col==0){
             //     thisCol.classList.add("verb-reference-table-hebrew-suffix");
		     //  } else if (col==4){
             //     thisCol.classList.add("verb-reference-table-hebrew-prefix");
             //  } else {
             //     thisCol.classList.add("verb-reference-table-hebrew-middle");
             //  }
			   thisRow.appendChild(thisCol);
		    }  
	     } else if (thisGroup == noVerbPart){
		  // no content
		    for (col = 0; col < 5; col++) {
               var thisCol = document.createElement("td");
			   if (col==2) {
				  var thisSpan = document.createElement("span");
	              thisSpan.appendChild(document.createTextNode("-"));
				  thisCol.appendChild(thisSpan);
			    } else if (col==0){
                  thisCol.classList.add("verb-reference-table-hebrew-suffix");
		        } else if (col==4){
                  thisCol.classList.add("verb-reference-table-hebrew-prefix");
			    }
			   thisRow.appendChild(thisCol);
		    }  

	     } else {	  
	  
		     for (col = 0; col < 5; col++) {
                var thisCol = document.createElement("td");
		        if (col==0){
                   thisCol.classList.add("verb-reference-table-hebrew-suffix");
		        } else if (col==4){
                   thisCol.classList.add("verb-reference-table-hebrew-prefix");
                } else {
                   thisCol.classList.add("verb-reference-table-hebrew-middle");
                }
			
			    if ( thisGroup[col].length > 0) {
                  var thisSpan = document.createElement("span");
	              thisSpan.appendChild(document.createTextNode(thisGroup[col]));
	              thisSpan.classList.add("hebrew25");
			      if (col==1 | col==2 | col==3){
              
				      if (thisGroup[col].search(verbRoot[col-1]) > -1){
				         thisCol.classList.add("verb-reference-table-verb-root");
				         thisSpan.classList.add("verb-reference-table-verb-root");
				      } else {
				         thisSpan.classList.add("verb-reference-table-verb-root-different");
                      }					   
			      }
                  thisCol.appendChild(thisSpan);
                }
			
			    thisRow.appendChild(thisCol);
		     }  		  	
	  

		 }	// group.length > 0  
		 
      } else {  
		 // not separate columns, 3 root letters all in one column
         //-------------------------------------------------------	 
         var thisCol = document.createElement("td");
		 
	     if (thisGroup.length == 0){
		  // no content
               thisCol.classList.add("verb-reference-table-blank-cell");
		  
	     } else {	  
	         thisCol.classList.add("hebrew25");
	         thisCol.classList.add("verb-reference-table-hebrew");
			 
		     for (col = 4; col > -1; col--) {
			    if (col==0 | col==4 ){
			       if ( thisGroup[col].length > 0) {
	                  var thisSpan = document.createElement("span");
	                  thisSpan.appendChild(document.createTextNode(thisGroup[col]));
	                  thisCol.appendChild(thisSpan);
				   }
				} else 	if (col==1 | col==2 | col==3){
	               var thisSpan = document.createElement("span");
			       if ( thisGroup[col].length > 0) {
	                  thisSpan.appendChild(document.createTextNode(hairsp+thisGroup[col]+hairsp));
				      if (thisGroup[col].search(verbRoot[col-1]) > -1){
				         thisSpan.classList.add("verb-reference-table-verb-root");
				      } else {
				         thisSpan.classList.add("verb-reference-table-verb-root-different");
                      }	
					  
                   } else {
	                  thisSpan.appendChild(document.createTextNode(thinsp));
                   }
				   
	               thisCol.appendChild(thisSpan);
					
				}	
			
		     } // 5 sections of verb			 
			 
		 }	// group.length > 0 
		 
		 thisRow.appendChild(thisCol);
	  
	  } // not separate columns
	  
   }	  

   return thisRow;
}



//-------------------------------------------

function oldcrVerbReferenceTableMain(thisDiv,
                              verbRoot,
							  rootSeparateColumns,
							  translationI,
							  translationYou,
							  translationHe,
                              verbI,verbYouSingM, verbHe, 
                              verbWe,verbYouPluralM, verbThey, verbTheyM, 
							  verbShe, verbYouSingF, verbYouPluralF, verbTheyF){
  
								  
	var i;							  
	
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

	
	thisTable.appendChild(crVerbMainHeaderRow(rootSeparateColumns));
	
   // "Singular" header row
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Singular"));

   // singular rows
   //--------------
	
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationI, "", verbI));
       
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, maleSymbol, verbYouSingM));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, femaleSymbol, verbYouSingF));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationHe, "", verbHe));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationHe.replaceAll("he","she"), "", verbShe));

  // plural rows
  //------------
   thisTable.appendChild(crReferenceTableSectionHeaderRow("Plural"));

    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","we"), "", verbWe));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, maleSymbol+maleSymbol, verbYouPluralM));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), "", verbThey));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), maleSymbol+maleSymbol,verbTheyM));


  // females only rows
  //------------------
    thisTable.appendChild(crReferenceTableSectionHeaderRow("Females only"));
	
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou, femaleSymbol+femaleSymbol, verbYouPluralF));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, translationYou.replaceAll("you","they"), femaleSymbol+femaleSymbol, verbTheyF));

    thisDiv.appendChild(thisTable);

}



function oldcrVerbReferenceTableImperative(thisDiv,
                              verbRoot,
							  rootSeparateColumns,
							  translation,
							  verbSingM, verbPluralM,  verbSingF, verbPluralF){
								  
	var i;							  

	var thisPara = document.createElement("p");
    thisPara.appendChild(document.createTextNode("Imperative (giving orders or making requests)"));
    thisPara.classList.add("verb-reference-table-table-heading");
	thisDiv.appendChild(thisPara);
	
   // table with imperative
    var thisTable = document.createElement("table");
    thisTable.classList.add("verb-reference-table");

	var thisRow = document.createElement("tr");
    //thisRow.classList.add("table-border-bottom");
	   
	   
    thisTable.appendChild(thisRow);
	
	var thisTranslation = translation + "\u2003" + " speaking to "
	
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, maleSymbol, verbSingM));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, maleSymbol+maleSymbol,verbPluralM));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol,verbSingF));
    thisTable.appendChild(crVerbReferenceTableRow(verbRoot, rootSeparateColumns, thisTranslation, femaleSymbol+femaleSymbol,verbPluralF));

   thisDiv.appendChild(thisTable);

}


//------- specific tables-------------

//-----------------------------------------------------------------------------------
	
function crAmarVerbReferenceTable(thisDiv){
    
	
   var verbRoot = [resh,mem,alef];

   var translationI = "I said, I say, I will say ";
   var translationYou = "you said, you say, you will say ";
   var translationHe = "he said, he says, he will say";
   
   var verbI = [[tav+dagesh+chirik+yod,resh+schwah,mem+patach,alef+kamatz,""],
	            [tav+dagesh+chirik+yod,resh+schwah,mem+patach,alef+kamatz,vav+schwah],
	            ["",resh,mem+patach,"",alef+cholam],
	            ["",resh,mem+patach,"",vav+kamatz+alef+cholam]
			   ];
   var verbYouSingM = [[tav+dagesh+kamatz,resh+schwah,mem+patach,alef+kamatz,""],
	            [tav+dagesh+kamatz,resh+schwah,mem+patach,alef+kamatz,vav+schwah],
	            ["",resh,mem+patach,alef,tav+dagesh+cholam],
	            ["",resh,mem+segol,alef,vav+patach+tav+dagesh+cholam+mapach]
			   ];
   var verbHe = [["",resh,mem+patach,alef+kamatz,""],
	             ["",resh,mem+patach,alef+kamatz,vav+schwah],
	             ["",resh,mem+patach,alef,yod+cholam],
	             ["",resh,mem+segol,alef,vav+patach+dagesh+yod+cholam+mapach]
			   ];
   var verbWe = [[nun+vav+dagesh,resh+schwah,mem+kadma+patach,alef+kamatz,""],
	             [nun+vav+dagesh,resh+schwah,mem+kadma+patach,alef+kamatz,vav+schwah],
	             ["",resh,mem+patach,alef,nun+dagesh+cholam],
	             ["",resh,mem+segol,alef,vav+patach+nun+mapach+dagesh+cholam]
			   ];
   var verbYouPluralM = [[tav+dagesh+segol+finalMem,resh+schwah,mem+patach,alef+chatafPatach,""],
	            [tav+dagesh+segol+finalMem,resh+schwah,mem+patach,alef+chatafPatach,vav+patach],
	            [vav+dagesh,resh,mem+schwah,alef,tav+dagesh+cholam],
	            [vav+dagesh,resh,mem+schwah,alef,vav+patach+tav+dagesh+cholam]
			   ];
   var verbTheyMF= [[vav+dagesh,resh,mem+schwah,alef+kamatz,""],
	            [vav+dagesh,resh,mem+schwah,alef+kamatz,vav+schwah],
	            [],
	            []
			   ];
   var verbTheyM= [[],
	            [],
                [vav+dagesh,resh,mem+schwah,alef,yod+cholam],
	            [vav+dagesh,resh,mem+schwah,alef,vav+patach+yod+dagesh+cholam]
			   ];
   var verbShe = [[heh,resh+kamatz,mem+schwah,alef+kamatz,""],
	             [heh,resh+kamatz,mem+schwah,alef+kamatz,vav+schwah],
	             ["",resh,mem+patach,alef,tav+dagesh+cholam],
	             ["",resh,mem+segol,alef,vav+patach+tav+dagesh+cholam+mapach]
			   ];
   var verbYouSingF = [[tav+dagesh+schwah,resh+schwah,mem+patach,alef+kamatz,""],
	            ["","","","",""],
	            [yod,resh+chirik,mem+schwah,alef,tav+dagesh+cholam],
	            [yod,resh+chirik,mem+schwah,alef,vav+patach+tav+dagesh+cholam]
			   ];
   var verbYouPluralF = [["","","","",""],
	            ["","","","",""],
	            ["","","","",""],
	            ["","","","",""]
			   ];
   var verbTheyF= [[],
	            [],
                [nun+kamatz+heh,resh+schwah,mem+patach+kadma,alef,tav+dagesh+cholam],
	            [nun+kamatz+heh,resh+schwah,mem+patach+kadma,alef,vav+patach+tav+dagesh+cholam]
			   ];
			   
   var imperativeTranslation = "Say! ";
   var verbImpSingM = [
                ["",resh,mem+cholam,alef+chatafSegol,""],
	            ];
   var verbImpPluralM = [
                [vav+dagesh,resh,mem+schwah,alef+chirik,""],
	            ];
   var verbImpSingF = [
                [yod,resh+chirik,mem+schwah,alef+chirik,""],
	            ];
   var verbImpPluralF = [
                ["","","","",""],
	            ];

   
   oldcrVerbReferenceTableMain(thisDiv,
                           verbRoot,
						   true,
 							  translationI,
							  translationYou,
							  translationHe,
                           verbI,verbYouSingM, verbHe, 
                           verbWe, verbYouPluralM, verbTheyMF, verbTheyM,
						   verbShe, verbYouSingF, verbYouPluralF, verbTheyF);	

	
    // note about cantillation marks indicating stressed
    thisDiv.appendChild(crNoteAboutStressedSyllable());
     // create a space between tables
   //thisDiv.appendChild(crSpaceBetweenTables());
   
   oldcrVerbReferenceTablesFromHTML(thisDiv,
                           verbRoot,
						   true,
						   imperativeTranslation,
						   verbImpSingM, verbImpPluralM,  verbImpSingF, verbImpPluralF);

						   

}	

//-----------------------------------------------------------------------------------
function crHayaVerbReferenceTable(thisDiv){
	
   var verbRoot = [heh,yod,heh];
   

   var translationI = "I was, I will be ";
   var translationYou = "you were, you will be ";
   var translationHe = "he was, he will be ";

   var verbI = [
                [tav+chirik+yod,yod,yod+kadma+chirik,heh+kamatz,""],
	            [tav+chirik+yod,yod,yod+kadma+chirik,heh+kamatz,vav+schwah],
	            ["",heh,yod+segol,heh+schwah,alef+segol],
	            ["",heh,yod+segol,heh+schwah,vav+kamatz+alef+segol]
			   ];
   var verbYouSingM = [
                [tav+kamatz,yod,yod+kadma+chirik,heh+kamatz,""],
	            [tav+kamatz,yod,yod+kadma+chirik,heh+kamatz,vav+schwah],
	            ["",heh,yod+segol,heh+schwah,tav+dagesh+chirik],
	            ["","",yod,heh+chirik,vav+patach+tav+dagesh+schwah]
			   ];
   var verbHe = [
                 ["",heh,yod+kamatz,heh+kamatz,""],
	             ["",heh,yod+kamatz,heh+kamatz,vav+schwah],
	             ["",heh,yod+segol,heh+schwah,yod+chirik],
	             ["","",yod,heh+chirik,vav+patach+yod+schwah]
			   ];
   var verbWe = [
                [nun+vav+dagesh,yod,yod+kadma+chirik,heh+kamatz,""],
	            [nun+vav+dagesh,yod,yod+kadma+chirik,heh+kamatz,vav+schwah],
	            ["",heh,yod+segol,heh+schwah,nun+chirik],
	            ["",heh,yod+segol,heh+schwah,vav+schwah+nun+chirik]
			   ];
   var verbYouPluralM = [
                [tav+segol+finalMem,yod,yod+chirik,heh+chatafSegol,""],
	            [tav+segol+finalMem,yod,yod+chirik,heh+schwah,vav+chirik],
	            [vav+dagesh,"",yod,heh+schwah,tav+dagesh+chirik],
	            [vav+dagesh,"",yod,heh+schwah,vav+patach+tav+dagesh+chirik]
			   ];
   var verbTheyMF= [
                [vav+dagesh,"",yod,heh+kamatz,""],
	            [vav+dagesh,"",yod,heh+kamatz,vav+schwah],
	            [],
	            []
			   ];
   var verbTheyM= [
	            [],
	            [],
                [vav+dagesh,"",yod,heh+schwah,yod+chirik],
	            [vav+dagesh,"",yod,heh+schwah,vav+patach+yod+dagesh+chirik]
			   ];
   var verbShe = [
                 [heh,tav+kamatz,yod+schwah,heh+kamatz,""],
	             [heh,tav+kamatz,yod+schwah,heh+kamatz,vav+schwah],
	             ["",heh,yod+segol,heh+schwah,tav+dagesh+chirik],
	             ["","",yod,heh+chirik,vav+patach+tav+dagesh+schwah]
			   ];
   var verbYouSingF = [
                [tav,yod,yod+chirik,heh+kamatz,""],
	            [tav,yod,yod+chirik,heh+kamatz,vav+schwah],
	            ["",yod,yod+chirik,heh+schwah,tav+chirik],
	            ["",yod,yod+chirik,heh+schwah,vav+patach+tav+dagesh+chirik]
			   ];
   var verbYouPluralF = [
                ["","","","",""],
	            ["","","","",""],
	            ["","","","",""],
	            ["","","","",""]
			   ];
   var verbTheyF= [
	            [],
	            [],
                [nun+kamatz+heh,yod,yod+segol+kadma,heh+schwah,tav+dagesh+chirik],
	            [nun+kamatz+heh,yod,yod+segol+kadma,heh+schwah,vav+patach+tav+dagesh+chirik]
			   ];
			   
   var imperativeTranslation = "Be! ";
   var verbImpSingM = [
                ["",heh,yod+tsere,heh+chatafSegol,""],
	            ];
   var verbImpPluralM = [
                [vav+dagesh,"",yod,heh+chatafSegol,""],
	            ];
   var verbImpSingF = [
                ["",yod,yod+chirik,heh+chatafPatach,""],
	            ];
   var verbImpPluralF = [
                ["","","","",""],
	            ];

   
  oldcrVerbReferenceTableMain(thisDiv,
                           verbRoot,
						   true,
 							  translationI,
							  translationYou,
							  translationHe,
                           verbI,verbYouSingM, verbHe, 
                           verbWe, verbYouPluralM, verbTheyMF, verbTheyM,
						   verbShe, verbYouSingF, verbYouPluralF, verbTheyF);	
	
    // note about cantillation marks indicating stressed
    thisDiv.appendChild(crNoteAboutStressedSyllable());
    // create a space between tables
   //thisDiv.appendChild(crSpaceBetweenTables());
   
   oldcrVerbReferenceTablesFromHTML(thisDiv,
                           verbRoot,
						   true,
						   imperativeTranslation,
						   verbImpSingM, verbImpPluralM,  verbImpSingF, verbImpPluralF);


}	

