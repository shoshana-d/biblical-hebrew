
"use strict";
// create the navigation menu at the top of the page
// lessons pages have a separate script for doing this

// code executed on load
//----------------------
document.addEventListener('DOMContentLoaded', function() {
   var i;
 
 // get name of calling .html file
   var htmlFilename= document.getElementById("htmlfilename").innerHTML.trim();
   
  // top menubar
   var topMenu = document.createElement("nav");
   topMenu.classList.add("navbar");
   topMenu.classList.add("w3-card-4");
   
   var pageRefs = ["index.html","alefbet.html","lessons.html","lessons-exercises.html","lessons-extra-vocabulary.html","reference-tables.html","resources.html"];
   var pageRefsTexts = ["About","Alefbet","Lessons","Exercises","Extra vocabulary","Reference tables","Resources"];
   for (i=0; i < pageRefs.length; i++){
      var a = document.createElement('a');
	  var thisPageRef = pageRefs[i];
	  var thisPageRefText = pageRefsTexts[i];
      var reftext = document.createTextNode(thisPageRefText);
      a.appendChild(reftext); 
      a.href = thisPageRef; 
	  if (thisPageRef == htmlFilename ){a.classList.add("this-page");}
	  
	  if ( thisPageRefText == "Alefbet"){
	      if (
		        htmlFilename == "alefbet-learn-alefbet.html"
		     || htmlFilename == "alefbet-practise-alefbet.html"
			 || htmlFilename == "alefbet-extra.html" )
			 {
		     a.classList.add("this-page");
		 }
	  }
      topMenu.appendChild(a);
   }
 
   //document.body.prepend(topMenu);
   // insert menu after header
   var pageHeader = document.getElementsByTagName("header")[0];
   pageHeader.parentNode.insertBefore(topMenu, pageHeader.nextSibling); 

}) 

