
//This up here is what they done call "business logic."

function findClass(playstyle) {
  let fighter = [0, "Fighter"];
  let ranger = [0, "Ranger"];
  let thief = [0, "Thief"];
  let cleric = [0, "Cleric"];
  let magician =[0, "Magic User"];
  
  //Read responses, each answer adds 1 point to a corresponding result.

  playstyle.forEach(function(choice){
    if (choice === "Fighter"){
      fighter[0] += 1;
    };
    if (choice === "Ranger"){
      ranger[0] += 1;
    };
    if (choice === "Thief"){
      thief[0] += 1;
    };
    if (choice === "Cleric"){
      cleric[0] += 1;
    };
    if (choice === "Magician"){
      magician[0] += 1;
    };
  });

  //Check which results have the most points, and push them to a new array

  const options = [fighter, ranger, thief, cleric, magician]
  const biggest = Math.max(fighter[0], ranger[0], thief[0], cleric[0], magician[0]);
  let finalChoice = [];

  options.forEach(function(element){
    if (element[0] === biggest){
      finalChoice.push(element[1]);
    }
  })

  //Check to see if there there are any tied results. 

  if (finalChoice[2]){
    return "Bard. That's...nice."
  } else if (finalChoice[1]){
    return "Muticlass " + finalChoice[1] + " / " + finalChoice[0] + ", won't that be fun?";
  } else {
    return finalChoice[0] + ", won't that be fun?";
  }

};


//That down thar is the UI logic.


$(document).ready(function() {
  $("form#classCheck").submit(function(event) {
    event.preventDefault();

    let playstyle = [];
    let complete = true;

    for (let i = 1; i <= 8; i +=1) {
      if ($("input:checkbox[name=q" + i + "]:checked").val() === undefined){
        complete = false;
      }
      $("input:checkbox[name=q" + i + "]:checked").each(function() {
        playstyle.push($(this).val());
      });
    }

    if (complete === false){
      alert("Please provide at least one answer to each question.");
    } else if (complete === true) {
      
      const result = findClass(playstyle);

      $("#classResult").show();
      $("#classResult").append(result);
      $("#classCheck").hide();
    }
  });
});