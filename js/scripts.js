
//This up here is what they done call "business logic."

function findClass(playstyle) {
  let fighter = 0;
  let ranger = 0;
  let thief = 0;
  let cleric = 0;
  let magician = 0;
  
  playstyle.forEach(function(choice){
    if (choice === "Fighter"){
      fighter += 1;
    };
    if (choice === "Ranger"){
      ranger += 1;
    };
    if (choice === "Thief"){
      thief += 1;
    };
    if (choice === "Cleric"){
      cleric += 1;
    };
    if (choice === "Magician"){
      magician += 1;
    };
  });

  const biggest = Math.max(fighter, ranger, thief, cleric, magician);
  let finalChoice = [];

  
  if (biggest === fighter){
    finalChoice.push("Fighter");
  };
  if (biggest === ranger){
    finalChoice.push("Ranger");
  };
  if (biggest === thief){
    finalChoice.push("Thief");
  };
  if (biggest === cleric){
    finalChoice.push("Cleric");
  };
  if (biggest === magician){
    finalChoice.push("Magic User");
  };

  if (finalChoice[2]){
    return "Bard. That's...nice."
  } else if (finalChoice[1] + ", won't that be fun?"){
    return "Muticlass " + finalChoice[1] + " / " + finalChoice[0] + ", won't that be fun?";
  } else {
    return finalChoice[0];
  }

};


//That down thar is the UI logic.


$(document).ready(function() {
  $("form#classCheck").submit(function(event) {
    event.preventDefault();
    
    let playstyle = []; 
    $("input:checkbox[name=playstyle]:checked").each(function() {
      const junk = $(this).val();
      playstyle.push(junk);
    });
    
    const result = findClass(playstyle);    

    $("#classResult").show();
    $("#classResult").append(result);
    $("#classCheck").hide();
  });
});