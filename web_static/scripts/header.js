async function displayGreetings() {
  try {
    const response = await fetch('scripts/data/user.json')
    const parsedData = await response.json();
    
    const name = parsedData.login;
    const greetingsElement = document.getElementById('greetings');
    const date = new Date();
    const hours = date.getHours();
  
    const greetings = {
      morning: "Good Morning",
      afternoon: "Good Afternoon",
      evening: "Good Evening",
      night: "Good Night"
    };
  
    let greeting = "";
    if (hours < 3) {
      greeting = greetings.night;
    } else if (hours < 12) {
      greeting = greetings.morning;
    } else if (hours < 17) {
      greeting = greetings.afternoon;
    } else if (hours < 21) {
      greeting = greetings.evening;
    } else {
      greeting = greetings.night;
    }
    greetingsElement.style.width = '80%';
  
  
    if (greetingsElement) {
      greetingsElement.textContent = `${greeting}, ${name}!`; 
    } else {
      console.log('${greeting}, ${name}');
    }
  } catch(error) {
    console.log("error is: ", error);
  }
}
setInterval(displayGreetings, 3600000);
window.onload = displayGreetings;