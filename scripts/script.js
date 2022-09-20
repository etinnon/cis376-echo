$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      console.log("user name = ", userName);
      //let coolFacts = generateCoolNameFacts(userName); 

      console.log(nameLength(userName))

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(nameLength(userName));
      
  


    });


});


function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>"

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "the first letter of your name is " + name[0]
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "the last letter of your name is " + name[lastIndex]
}

function reverseName(name) {
  
  let arrName = name.split(); 

  revName = arrName.reverse();
     
}

function getAnimal(name) {
  if(name.length <= 4) {
    return "Your spirit animal is a panda."
  }
  else if(name.length <= 8){
    return "Your spirit animal is a lion."
  }
  else if(name.length <= 12){
    return "Your spirit animal is a gorilla."
  }
  else  {
    return "Your spirit animal is a fish."
  }
}