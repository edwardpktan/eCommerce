//console.log("I am in login.js");
var attempt = 3;

function validate() {
  //console.log("I am in validate");
  const Account = [
    {
      Fname: "Person1",
      Role: "Admin",
      Email: "123@gmail.com",
      Password: "123Password",
    },
    {
      Fname: "Person2",
      Role: "Admin",
      Email: "456@gmail.com",
      Password: "456Password",
    },
    {
      Fname: "Person3",
      Role: "Admin",
      Email: "789@gmail.com",
      Password: "789Password",
    },
  ];

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let value1 = Account.some((item) => {
    return item.Email == email;
    
  });
  console.log("Value1:" +value1);
  let value2 = Account.some((item) => {
    return item.Password == password;
  });

  if (email == "" || email == null) {
    alert("Email required");
    return false;
  }
  if (password == "") {
    alert("Password required");
    return false;
  }
  if (value1 && value2) {
    alert("Login successfully");
    location.href = "adminMain.html";
    return false;
  } else {
    attempt--;
    alert("Invalid Data ,you have left " + attempt + " attempt");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
    }
    return false;
  }
}
function forgotpassword() {
  var email = prompt("Please enter your Email-id");
  if (isValidMail(email)) {
    alert("Link send please check email");
    sendotp(email);
  } else {
    alert("please enter valid Email-id");
  }
}
function isValidMail(email) {
  var emailRegex = ["123@gmail.com", "456@gmail.com", "789@gmail.com"];
  return emailRegex.some((item) => {
    return item == email;
  });
}
function sendotp(email) {
  console.log("sending password reset email to" + email);
}