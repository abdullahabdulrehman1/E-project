

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle") ;
   
    if ("#sidebarToggle") {
        // Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') == 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
    const sidebarTogglef = document.body.querySelector("#sidebarTogglef");
    if ("#sidebarTogglef") {
        // Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarTogglef.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-togglef', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
var acc = document.getElementsByClassName("course-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        //when one of the buttons are clicked run this function
      acc[i].onclick = function() {
        //variables
        var panel = this.nextElementSibling;
        var coursePanel = document.getElementsByClassName("course-panel");
        var courseAccordion = document.getElementsByClassName("course-accordion");
        var courseAccordionActive = document.getElementsByClassName("course-accordion active");

        /*if pannel is already open - minimize*/
        if (panel.style.maxHeight){
            //minifies current pannel if already open
            panel.style.maxHeight = null;
            //removes the 'active' class as toggle didnt work on browsers minus chrome
            this.classList.remove("active");
        } else { //pannel isnt open...
            //goes through the buttons and removes the 'active' css (+ and -)
            for (var ii = 0; ii < courseAccordionActive.length; ii++) {
                courseAccordionActive[ii].classList.remove("active");
            }
            //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
            for (var iii = 0; iii < coursePanel.length; iii++) {
              this.classList.remove("active");
              coursePanel[iii].style.maxHeight = null;
            }
          //opens the specified pannel
          panel.style.maxHeight = panel.scrollHeight + "px";

          this.classList.add("active");
        } 
      }
    }
    $(document).ready(function() {
        $('.f').mouseover(function(){
            $(this).addClass("bg-light");
            // $("div").addClass("important");
            $(this).css('border-bottom','3px solid black');
            // $(this).addClass("border");
            // $(this).addClass("border-dark");
          });
          $('.f').mouseout(function(){
            $(this).removeClass("btn-sm");
            // $(this).css('Transform','2s');
            $(this).css('border-bottom','');
            $(this).removeClass("bg-light");
          });
          $('.t').mouseover(function(){
            // $(this).css('Font-Weight','bolder');

            // $("div").addClass("important");
            $(this).css('border-bottom','3px solid black');
            $(this).addClass("opacity-75");
            // $(this).addClass("border-dark");
          });
          $('.t').mouseout(function(){
            $(this).removeClass("opacity-75");
            // $(this).css('border-top','');
            $(this).removecss('border-bottom','3px solid black');

        });
        
        
    });
   
      
 