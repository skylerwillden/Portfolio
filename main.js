document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

var modal = document.getElementById("modal");
var modalDiv = document.getElementById("modalDiv")

function activateModal(theElement){
    modal.setAttribute("class", "is-active modal")
    let currentElement = theElement.getAttribute('id');
    let tempModal
    switch(currentElement){
      case 'movies':
          tempModal = movieManagement;
          break;
      case 'rockPaperScissors':
          tempModal = rockPaperScissors;
          break;
      case 'mahjong':
          tempModal = mahjong;
          break;
      case 'php':
          tempModal = php;
          break;
      case 'poi':
          tempModal = poi;
          break;
      default:
          tempModal = movieManagement;
    }
    modalDiv.innerHTML= tempModal;
}

function deactivateModal(){
  modal.setAttribute("class", "modal");
}

var movieManagement = '<h1 class="title is-3 has-text-success  has-text-centered pt-2">~Movie Management System~</h1>' +             
'<div class="columns is-mobile mb-0">' +
  
  '<div class="column ml-5">' +
    
   ' <div class="tile is-ancestor">' +
      '<div class="tile is-parent is-vertical">' +
          '<div id="management" class="tile is-child notification is-info">' +
          '</div>' +
          '<div id="management2" class="tile is-child notification is-success"></div>' +
      '</div>'+
    '</div>' +
    
    
  '</div>'+
  '<div class="column is-family-secondary">'+ 
    '<h1 class="title is-5 has-text-centered has-text-success">Project Description</h1>'+   
    '<p class="pb-4">'+
      'The Movie management system enables users to organize movie related data, including: '+
      'images, actors, directors,  and other relevant information. The system is comprised of the Angular'+ 
      'front end which displays a library of movies which are drawn from a Mongo database.'+ 
      'The interface allows users to add, edit, and delete movie entries.'+
   ' </p>  '+
    '<h1 class="title is-5 has-text-centered has-text-success">Technologies Used:</h1>'+  
    '<div class="wideBar is-flex">'+
      '<img src="../logos/angular.png" alt="">'+
      '<img src="../logos/mongo.png" alt="">'+
      '<img src="../logos/bulma-logo.png" style="height: 35px;" alt="">'+
    '</div>'+
    '<p class="mt-3 has-text-centered">'+
      'The movie management system is built on an Angular frontend system with '+
      'the Bulma CSS framework as well as Express Server with Mongo DB.'+
   ' </p> '+
    '<h1 class="has-text-centered mt-5"><strong> This project was the subject of'+
      'WEB 3430 - MEAN Stack </strong>'+
      '</h1>'+
      '<div class="github has-text-centered mt-3">'+
        '<a class="button is-primary is-inverted">'+
          '<span class="icon">'+
            '<i class="fab fa-github"></i>'+
          '</span>'+
          '<span>Github</span>'+
        '</a>'+
      '</div>'+
  '</div>'+
'</div>'; 

var rockPaperScissors = '<h1 class="title is-3 has-text-success  has-text-centered pt-2">~Rock, Paper, Scissors~</h1> '+               
'<div class="columns is-mobile mb-0">'+  
  
  '<div class="column ml-5">'+  
    
    '<div class="tile is-ancestor">'+  
      '<div class="tile is-parent is-vertical">'+  
          '<div id="rockpaper" style="min-height: 520px;" class="tile is-child notification is-info">'+  
          '</div>'+  
       
      '</div>'+  
    '</div>'+  
    
    
 ' </div>'+
  '<div class="column is-family-secondary"> '+  
    '<h1 class="title is-5 has-text-centered has-text-success">Project Description</h1>  '+   
    '<p class="pb-4">'+  
      'Rock, Paper, Scissors is game  seemingly as old as time itself . This project is a practice in the fundamentals of android development.'+  
    '</p>  '+  
    '<h1 class="title is-5 has-text-centered has-text-success">Technologies Used:</h1>  '+  
    '<div class="wideBar is-flex">'+  
      '<img style="height: 40px;" src="../logos/android.png" alt="">'+  
      '<img src="../logos/java_logo.png" alt=""> '+                         
    '</div>'+  
    '<p class="mt-3 has-text-centered">'+  
      'The Android Development kit utilizes the Java '+  
      'Programming language.'+  
    '</p> '+  
    '<h1 class="has-text-centered mt-5"><strong> This project was the subject of'+  
      'CS3270 - Android Development'+  
       '</strong>'+  
      '</h1>'+  
      '<div class="github has-text-centered mt-3">'+  
        '<a class="button is-primary is-inverted">'+  
          '<span class="icon">'+  
            '<i class="fab fa-github"></i>'+  
         '</span>'+  
          '<span>Github</span>'+  
        '</a>'+  
      '</div>    '+          
  '</div>  '+                                      
'</div>  ';

var mahjong = '<h1 class="title is-3 has-text-success  has-text-centered pt-2">~Mahjong~</h1> '+               
'<div class="columns is-mobile mb-0">'+
  
  '<div class="column ml-5">'+
    
    '<div class="tile is-ancestor">'+
      '<div class="tile is-parent is-vertical">'+
          '<div id="mahjong1" class="tile is-child notification is-info"></div>'+
           ' <div id="mahjong2" class="tile is-child notification is-info"></div>  '+                                                   
      '</div>'+
    '</div>'+
    
    
  '</div>'+
  '<div class="column is-family-secondary"> '+
    '<h1 class="title is-5 has-text-centered has-text-success">Project Description</h1>   '+
    '<p class="pb-4">'+
      'This mahjong game was a result of a variety of fundamental Java subjects, most importantly Java graphical user interfaces.'+

    '</p>  '+
    '<h1 class="title is-5 has-text-centered has-text-success">Technologies Used:</h1> '+ 
    '<div class="wideBar is-flex">  '+                      
      '<img src="../logos/java_logo.png" alt=""> '+                       
    '</div>'+
    '<p class="mt-3 has-text-centered">'+
      'This graphical user interface is'+
     ' written in plain Java.    '+  
    '</p> '+
    '<h1 class="has-text-centered mt-5"><strong> This Project was part of the '+
      'CS 3230 - Java GUI course.'+
      ' </strong>'+
      '</h1>'+
      '<div class="github has-text-centered mt-3">'+
      ' <a class="button is-primary is-inverted">'+
      '  <span class="icon">'+
      ' <i class="fab fa-github"></i>'+
      ' </span>'+
      ' <span>Github</span>'+
      '</a>'+
      '</div> '+           
      '</div>  '+                                    
      '</div>  '; 

var php = '<h1 class="title is-3 has-text-success  has-text-centered pt-2">~PHP API~</h1>  '+               
'<div class="columns is-mobile mb-0">'+ 
  
'<div class="column ml-5">'+ 
    
'<div class="tile is-ancestor">'+ 
'<div class="tile is-parent is-vertical">'+ 
'<div id="php1" class="tile is-child notification is-info"></div>'+ 
'<div id="php2" class="tile is-child notification is-info"></div>    '+                                                  
'</div>'+ 
'</div>'+ 
    
    
'</div>'+ 
'<div class="column is-family-secondary">'+ 
'<h1 class="title is-5 has-text-centered has-text-success">Project Description</h1>  '+  
'<p class="pb-4">'+ 
' This API written in foundational PHP without the use of any framework, is an exercise in fundamental PHP usage. It was created '+ 
' in tandem with a separate front end '+ 
' application that is not included which functions as a budgeting Web application. It stores such information as income and expenditures.'+ 

'</p>  '+ 
'<h1 class="title is-5 has-text-centered has-text-success">Technologies Used:</h1> '+  
'<div class="wideBar is-flex">          '+               
' <img src="../logos/php.png" alt="">  '+                       
'</div>'+ 
'<p class="mt-3 has-text-centered">'+ 
'The API utilizes PHP alone.'+      
'</p> '+ 
'<h1 class="has-text-centered mt-5"><strong> This Project was part of the '+ 
'WEB 3200 Lamp Stack courses.'+ 
'</strong>'+ 
'</h1>'+ 
'<div class="github has-text-centered mt-3">'+ 
'<a class="button is-primary is-inverted">'+ 
'<span class="icon">'+ 
'<i class="fab fa-github"></i>'+ 
'</span>'+ 
'<span>Github</span>'+ 
'</a>'+ 
'</div>  '+           
'</div>   '+                                    
'</div> ';
  
var poi = '<h1 class="title is-3 has-text-success  has-text-centered pt-2">~POI Map~</h1>  '+              
'<div class="columns is-mobile mb-0">'+
  
'<div class="column ml-5">'+
    
'<div class="tile is-ancestor">'+
'<div class="tile is-parent is-vertical">'+
'<div id="iceland1" class="tile is-child notification is-info"></div>'+
'<div id="iceland2" class="tile is-child notification is-info"></div>  '+                                                   
'</div>'+
'</div>'+
    
    
'</div>'+
'<div class="column is-family-secondary"> '+
'<h1 class="title is-5 has-text-centered has-text-success">Project Description</h1>  '+ 
'<p class="pb-4">'+
'The Iceland POI Map is built using the Google Map Services API. As illustrated below, '+
'various points of interest are represented on the Google Map interface as green circles. '+
'Upon a single tap, an image and location title is revealed and a second tap  reveals a modal which includes'+
'topical information such as imagery, descriptions, historical information, special instructions'+
'to find the location, and user reviews.'+
'</p>  '+
'<h1 class="title is-5 has-text-centered has-text-success">Technologies Used:</h1> '+ 
'<div class="wideBar is-flex">     '+                   
'<img src="../logos/react.png" alt="">   '+                     
'</div>'+
'<p class="mt-3 has-text-centered">'+
'The front-end of the web service is built'+
'Utilizing React while the backend API is written '+
'in PHP with Laravel. The core of the project'+
'depended upon use of  Google Map’s'+
'API.     '+
' </p> '+
'<h1 class="has-text-centered mt-5"><strong> This project was the subject of'+
'WEB 4800 '+
'Independent Study'+
'</strong>'+
'</h1>'+
'<div class="github has-text-centered mt-3">'+
'<a class="button is-primary is-inverted">'+
'<span class="icon">'+
'<i class="fab fa-github"></i>'+
'</span>'+
'<span>Github</span>'+
'</a>'+
'</div>       '+     
'</div>   '+                                   
'</div> ';