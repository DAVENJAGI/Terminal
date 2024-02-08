function displayGreetings() {
    // const greetingsElement = document.getElementById('greetings');
    const date = new Date();
    const hours = date.getHours();
  
    const greetings = {
      morning: "Good Morning",
      afternoon: "Good Afternoon",
      evening: "Good Evening",
      night: "Good Night"
    };
  
    let greeting = "";
    if (hours < 12) {
      greeting = greetings.morning;
    } else if (hours < 17) {
      greeting = greetings.afternoon;
    } else if (hours < 21) {
      greeting = greetings.evening;
    } else {
      greeting = greetings.night;
    }
  
    let name = "DAVE";
  
    if (greetingsElement) {
      greetingsElement.textContent = '${greeting}, ${name}!'; 
    } else {
      console.log('${greeting}, ${name}');
    }
}
  setInterval(displayGreetings, 3600000);