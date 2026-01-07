
"use strict";
// create the navigation menu at the top of the page

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
   
   var pageRefs = ["index.html","alefbet.html","lessons.html","lessons-extra-vocabulary.html","reference-tables.html","resources.html"];
   var pageRefsTexts = ["About","Alefbet","Lessons","Extra vocabulary","Reference tables","Resources"];
   for (i=0; i < pageRefs.length; i++){
      var a = document.createElement('a');
      var reftext = document.createTextNode(pageRefsTexts[i]);
      a.appendChild(reftext); 
      a.href = pageRefs[i]; 
      topMenu.appendChild(a);
   }
 
   //document.body.prepend(topMenu);
   // insert menu after header
   var pageHeader = document.getElementsByTagName("header")[0];
   pageHeader.parentNode.insertBefore(topMenu, pageHeader.nextSibling); 

   var pageHeader = document.getElementsByTagName("nav")[0];
   var atags = pageHeader.getElementsByTagName("a");
   for (i=0; i < atags.length; i++){
      var lastSlashIndex = Math.max(atags[i].href.lastIndexOf('/'), atags[i].href.lastIndexOf('\\'));
      var atagFilename = atags[i].href.substring(lastSlashIndex + 1);
	  if (atagFilename == htmlFilename){
		  atags[i].classList.add("this-page");
	  }	  
   }		   

}) 

