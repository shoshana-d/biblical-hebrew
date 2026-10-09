
"use strict";


// code executed on load
//----------------------
document.addEventListener('DOMContentLoaded', function() {
   var i;
   var c;

 // onload data div
   var dataDiv= document.getElementById("js-onload-data");
   
 // data paras
   var dataParas = dataDiv.children; 
	
 // get lesson Title from first para in data div
   var lessonTitle = dataParas[0].textContent.trim();
   
 // get item in menu bar to be highlighted from second para in data div  
   var highlightHTML = dataParas[1].textContent.trim();
   
   
  // top menubar
   var topMenu = document.createElement("nav");
   topMenu.classList.add("navbar");
   topMenu.classList.add("w3-card-4");
   
  // var pageRefs = ["index.html","alefbet.html","lessons.html","lessons-verbs.html","lessons-exercises.html","lessons-extra-vocabulary.html","reference-tables.html","resources.html"];
  // var pageRefsTexts = ["About","Alefbet","Lessons","Verbs","Exercises","Extra vocabulary","Reference tables","Resources"];
   var pageRefs = ["index.html","alefbet.html","lessons.html","lessons-verbs.html","lessons-exercises.html","reference-tables.html","resources.html"];
   var pageRefsTexts = ["About","Alefbet","Lessons","Verbs","Exercises","Reference tables","Resources"];
   for (i=0; i < pageRefs.length; i++){
      var a = document.createElement('a');
	  var thisRef = pageRefs[i];
	  var thisRefText = pageRefsTexts[i];
      a.appendChild(document.createTextNode(thisRefText)); 
      a.href = thisRef; 
	  if (thisRef == highlightHTML) {a.classList.add("this-page");}
      topMenu.appendChild(a);
   }	   
   document.body.prepend(topMenu);
   

 // header
   var header = document.createElement("header");
   //header.classList.add("w3-container-h1"); 
   var headerText = document.createElement("h1");
   headerText.innerHTML = lessonTitle;
   header.appendChild(headerText);
   document.body.prepend(header);

  
 // footer
    var footer = document.createElement("footer");
	var footerContent = document.createElement("p");
	footerContent.innerHTML = "\u00A9 2023 Susan Donath ";
	footer.appendChild(footerContent);
 //   main.parentNode.insertBefore(footer, main.nextSibling);
    document.body.appendChild(footer);

   
   
 // add table of contents created from class="lesson-heading" and class="lesson-exercise-header"
 //--------------------------------------------------------------------------------------------
   var lessonTitle = document.getElementsByClassName("lesson-title");
   
   if (lessonTitle.length > 0) {
	   
     var tocClasses = ["lesson-heading","lesson-exercise-header"];
     var tocHeadings = ["In this lesson:", "Exercises"];
 
     var tocdiv =  document.createElement("div");
     tocdiv.classList.add("lesson-toc-container");
   
     for (c = 0; c < tocClasses.length; c++){
       var tocElements = document.getElementsByClassName(tocClasses[c]);
	 
	   if (tocElements.length > 0 ){

         var tocheader = document.createElement("span");
         tocheader.classList.add("lesson-toc-header"); 
	     tocheader.innerHTML = tocHeadings[c];
         tocdiv.appendChild(tocheader);
   
         const ul = document.createElement('ul');
   
         for (i = 0; i < tocElements.length; i++) {
	       var li = document.createElement('li');
           var a = document.createElement('a');
	   
      // 1. Create a deep clone to preserve HTML structure
           const clone = tocElements[i].cloneNode(true);

     // 2. Remove the unwanted elements, +/- buttons if any
           clone.querySelectorAll('.button-plus').forEach(el => el.remove());

     // 3. Use innerHTML to keep the remaining formatting and spans
           a.innerHTML = clone.innerHTML;
	   
           a.href = "#" + tocElements[i].id; 
	  
	       li.appendChild(a);
           ul.appendChild(li);
         }
   
         tocdiv.appendChild(ul);
	   
	   }
	   
    } // toc instructions	
	
	// insert this section of TOC after lesson title
    lessonTitle[0].after(tocdiv);
	

  }  // any toc


}) 

