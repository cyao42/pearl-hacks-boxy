$(function(){

  $('#tags input').on('focusout',function(){    
    var txt= this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g,'');
    if(txt) {
      $(this).before('<span class="tag">'+ txt.toLowerCase() +'</span>');
    }
    this.value="";
  }).on('keyup',function( e ){
    // if: comma,enter (delimit more keyCodes with | pipe)
    if(/(188|13)/.test(e.which)) $(this).focusout();     
  });

  $('#tags').on('click','.tag',function(){
     if(confirm("Really delete this tag?")) $(this).remove(); 
  });

});
