$(document).ready(function(){
    $("input").keyup(function(){
        if($("input").val().length < 5){
            $("input").addClass("is-invalid");
        }else{
            $("input").removeaddClass("is-invalid");
            $("input").addClass("is-valid");
        }
    });
  
  });