$(document).ready(function () {

   var projectArr = [{
      id: "hungry-at-home",
      href: "https://vjeuel.github.io/food_api_app/' target='_blank'",
      url: "../images/hungry_at_home_api_connection.png",
      title: "Hungry at Home",
      about: "API connected website"
   },{
      id: "weather-app",
      href: "https://vjeuel.github.io/weather_app/' target='_blank'",
      url: "./images/weather_api.png",
      title: "Weather|APP",
      about: "API connected website"
   },{
      id: "work-day-scheduler",
      href: "https://vjeuel.github.io/work_day_scheduler/' target='_blank'",
      url: "./images/work_day_scheduler.png",
      title: "Work Day Scheduler",
      about: "Website that uses Local Storage"
   },{
      id: "password-generator",
      href: "https://vjeuel.github.io/Homework-3/' target='_blank'",
      url: "./images/password_generator.png",
      title: "Password Generator",
      about: "App"
   },{
      id: "carmines-pizzeria",
      href: "https://vjeuel.github.io/carmines-pizzeria-grid/' target='_blank'",
      url: "./images/carmines_pizzeria.png",
      title: "Carmine's Pizzeria",
      about: "Static website"
   },{
      id: "tonys-pizza",
      href: "https://vjeuel.github.io/tonys-pizza/' target='_blank'",
      url: "./images/tonys_pizza.png",
      title: "Tony's Pizza and Pasta",
      about: "Static website"
   },{
      id: "tip-calculator",
      href: "https://vjeuel.github.io/TipCalculator/' target='_blank'",
      url: "./images/tip_calculator.png",
      title: "Tip Calculator",
      about: "App"
   },{
      id: "white-rock-yoga",
      href: "https://vjeuel.github.io/white-rock-yoga/' target='_blank'",
      url: "./images/white_rock_yoga.png",
      title: "White Rock Yoga",
      about: "Static website - under construction"
   },{
      id: "neomorphism-form",
      href: "https://vjeuel.github.io/neomorphism-form/' target='_blank'",
      url: "./images/neomorphism_form.png",
      title: "Neomorphism Form",
      about: "Form"
   },{
      id: "code-quiz",
      href: "https://vjeuel.github.io/JavaScript_Quizz/' target='_blank'",
      url: "./images/code_quiz.png",
      title: "Code Quiz Challenge",
      about: "App"
   },{
      id: "favorite-animal",
      href: "https://vjeuel.github.io/favorite-animal/' target='_blank'",
      url: "./images/favorite_animal.png",
      title: "Favorite Animal",
      about: "Static website"
   },{
      id: "workout-app",
      href: "https://vjeuel.github.io/workout-program/' target='_blank'",
      url: "./images/workout_app.png",
      title: "Workout App",
      about: "App / Website - Under development"
   }];
   console.log(projectArr);

   for (let i = 0; i < projectArr.length; i++) {  
      var projectBox = $("<div class='project-box'>");
      projectBox.appendTo($(".project-container"))

      var projectLink = $("<a href='" + projectArr[i].href + "'>");
      projectLink.appendTo(projectBox);
      
      // var image = $("<img src=" + projectArr[i].url + ">");
      var image = $("<img>");
      image.css({
         "background": "url(" + projectArr[i].url + ")",
         "background-size": "cover",
         "background-position": "center top",
         "width": "100%",
         "height": "73%"
      });
      image.appendTo(projectLink);

      var titleBox = $("<h3>" + projectArr[i].title + "</h3>");
      titleBox.appendTo(projectBox);

      var aboutBox = $("<h4>" + projectArr[i].about + "</h4>");
      aboutBox.appendTo(projectBox);
   };

   
   console.log(projectArr[0].href);
   


});