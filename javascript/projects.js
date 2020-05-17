$(document).ready(function () {

   var projectArr = [{
      id: "carmines-website",
      href: "https://vjeuel.github.io/carmines-pizzeria-grid/' target='_blank'",
      url: "./images/carmines-screen.png",
      title: "Carmine's Pizzeria - Website",
   },{
      id: "carmines-website",
      href: "https://vjeuel.github.io/carmines-pizzeria-grid/' target='_blank'",
      url: "./images/carmines-screen.png",
      title: "Carmine's Pizzeria - Website",
   },{
      id: "carmines-website",
      href: "https://vjeuel.github.io/carmines-pizzeria-grid/' target='_blank'",
      url: "./images/carmines-screen.png",
      title: "Carmine's Pizzeria - Website",
   },{
      id: "carmines-website",
      href: "https://vjeuel.github.io/carmines-pizzeria-grid/' target='_blank'",
      url: "./images/carmines-screen.png",
      title: "Carmine's Pizzeria - Website",
   },{
      id: "carmines-website",
      href: "https://vjeuel.github.io/carmines-pizzeria-grid/' target='_blank'",
      url: "./images/carmines-screen.png",
      title: "Carmine's Pizzeria - Website",
   },{
      id: "tonys-website",
      href: "https://vjeuel.github.io/tonys-pizza/' target='_blank'",
      url: "./images/tonys-screen.png",
      title: "Tony's Pizza and Pasta - Website",
   },{
      id: "white-rock-yoga",
      href: "https://vjeuel.github.io/white-rock-yoga/' target='_blank'",
      url: "./images/yoga-screen.png",
      title: "White Rock Yoga - Website",
   },{
      id: "workout-app",
      href: "https://vjeuel.github.io/workout-program' target='_blank'",
      url: "./images/workout-screen.png",
      title: "Workout - App",
   },{
      id: "favorite-animal-website",
      href: "https://vjeuel.github.io/favorite-animal/' target='_blank'",
      url: "./images//animal-screen.png",
      title: "Favorite Animal - Website",
   }];
   console.log(projectArr);

   for (let i = 0; i < projectArr.length; i++) {  
      var projectBox = $("<a class='project-box' href='" + projectArr[i].href + "'>");
      projectBox.appendTo($(".project-container"));
      
      var figureBox = $("<figure id=" + projectArr[i].id + ">");
      figureBox.appendTo(projectBox);
      
      var imageBox = $("<img src=" + projectArr[i].url + ">");
      // var imageBox = $("<img>");
      imageBox.css({
         "background": "url(" + projectArr[i].url + ")",
         "background-size": "cover",
         "height": "100%"
      });
      imageBox.appendTo(figureBox);

      var titleBox = $("<h3>" + projectArr[i].title + "</h3>");
      titleBox.appendTo(projectBox);
   };

   
   console.log(projectArr[0].href);
   


});