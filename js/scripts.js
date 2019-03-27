$().ready(function(){

  $("#color").change(function(){
    var favoriteColor = $("#color").val();
    document.body.style.backgroundColor = favoriteColor;
  });
});
