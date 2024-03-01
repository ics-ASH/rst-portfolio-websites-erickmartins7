function greeter() {
    let name = prompt("What's your name?");
    document.getElementById("greet").innerHTML =
    "Hello "+name+", welcome to my website!";
  }