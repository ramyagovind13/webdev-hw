let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let emailAddress = document.getElementById("email").value;
  let dateGiven = document.getElementById("date").value;
  let newsLetter = document.forms[0].elements["option"].value;

  if (!username && !emailAddress && !dateGiven && !newsLetter) {
    console.warn("You must enter some data to submit this form");
  } else {
    console.group("=========Form Submission=========");
    if (!username) {
      console.log("Username: no submission");
    } else {
      console.log("Username: " + username);
    }
    if (!emailAddress) {
      console.log("Email: no submission");
    } else {
      console.log("Email: " + emailAddress);
    }
    if (!newsLetter) {
      console.log("News Letter: no submission");
    } else {
      console.log("News Letter: " + newsLetter);
    }
    if (!dateGiven) {
      console.log("Date: no submission");
    } else {
      console.log("Date: " + dateGiven);
    }
  }
}
