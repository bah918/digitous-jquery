var grille =[
             ["","",""],
             ["","",""],
             ["","",""]
            ];
var joueur={
    joueur1:"",
    joueur2:""
};

function remplirGrille(){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            grille[i][j]=`L${i}${j}`;
        }
    }
    console.log(grille);
}



function ordinateur(){
    for(var i = 0; i<3; i++){
            var j = 0;
            if(grille[i][j]!=""){
               return grille[i][j]="O";
            }
            j++;
        }
}

function personne(){
    for(var i = 0; i<3; i++){
            var j = 0;
            if(grille[i][j]!=""){
               return grille[i][j]="x";
            }
            j++;
        }
}


function gagneOrd(joueur){
    var tab="";
  for(var i = 0; i<0; i++){
      for(var j = 0; j<0; j++){
        tab +=grille[i][j];
      }
      if(tab=="000"){
        console.log("GAGNE"); 
        return true;
      }else if(grille[0][0]===grille[1][0]==grille[2][0]=="0"){
          console.log("GAGNE");//1ere colonne du grille
          return true;
      }else if(grille[0][1]===grille[1][1]==grille[2][1]=="0"){
        console.log("GAGNE");//2eme colonne du grille
        return true;
      } else if(grille[0][2]===grille[1][2]==grille[2][2]=="0"){
            console.log("GAGNE"); // 3eme colonne du grille
            return true;
      }else if(grille[0][2]===grille[1][1]==grille[2][0]=="0"){
        console.log("GAGNE");// 1ere diagonale
        return true;
      }else if(grille[0][0]===grille[1][0]==grille[2][0]=="0"){
        console.log("GAGNE"); // 2eme diagonale
        return;
      }else{
          console.log("MATCH NUL");
      }
  }  
    
}


function gagnePersonne(joueur){
    var tab="";
  for(var i = 0; i<0; i++){
      for(var j = 0; j<0; j++){
        tab +=grille[i][j];
      }
      if(tab=="xxx"){
        console.log("GAGNE"); 
        return true;
      }else if(grille[0][0]===grille[1][0]==grille[2][0]=="x"){
          console.log("GAGNE");//1ere colonne du grille
          return true;
      }else if(grille[0][1]===grille[1][1]==grille[2][1]=="x"){
        console.log("GAGNE");//2eme colonne du grille
        return true;
      } else if(grille[0][2]===grille[1][2]==grille[2][2]=="x"){
            console.log("GAGNE"); // 3eme colonne du grille
            return true;
      }else if(grille[0][2]===grille[1][1]==grille[2][0]=="x"){
        console.log("GAGNE");// 1ere diagonale
        return true;
      }else if(grille[0][0]===grille[1][0]==grille[2][0]=="x"){
        console.log("GAGNE"); // 2eme diagonale
        return;
      }else{
          console.log("MATCH NUL");
      }
  }  
}

function afficheGrille(){ 
        $(document).ready(function(){
          remplirGrille(); 
        var creerGrille = '<div class="container">';
        for(var i = 0; i<3; i++){
            creerGrille +=`<div id="row${i}" class="row">`;
            for(var j = 0; j<3; j++){
                creerGrille +=`<div class="col${j}" class="col-1 case">${grille[i][j]}</div>`;
            }
            creerGrille += '</div>';
        }
        creerGrille += '</div>';
        $("#grille").html(creerGrille); 
        });
}

$(document).ready(function(){
    
    $(".btn").click(function(){
    
      afficheGrille();
        
    });
  });

  
