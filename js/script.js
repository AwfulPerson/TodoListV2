
   function submitElement(form) {
    var div = document.createElement("div");
    document.getElementById("bud");
    var NewActionName = $('#action-name').val();
    var NewActionDescription = $('#description').val();
    $('p').remove();
    $('#bud').append('<div class="actilon-heading"><h3>' + NewActionName +'</h3><button class=butt type=submit></button><button class=buttt type=submit></button></div>');
    $('#bud').append('<div class="text">' + NewActionDescription + '</div>');
    $('.butt').click(function(){ 
    $('.text').slideToggle();
  });
    $('.buttt').click(function(){
     $(".text" ).remove();
     $(".actilon-heading" ).remove();
    });
  };
