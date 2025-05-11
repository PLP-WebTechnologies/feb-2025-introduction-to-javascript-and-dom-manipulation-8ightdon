function changeText() {
    const heading = document.getElementById("mainHeading");
    heading.textContent = "This will be my main Heading!";
  }
  
  function changeStyle() {
    const description = document.getElementById("description");
    description.style.color = "teal";
    description.style.fontWeight = "bold";
    description.style.fontSize = "20px";
  }
  
  function toggleElement() {
    const box = document.getElementById("contentBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
  }
  