$(function() {

  var allmodules;



  
  function loadModules() {
   $.getJSON('data/modules.json') 
     .done( function(data){
       allmodules = data;
       console.log(allmodules);
     }).fail(function(){console.log('failed')});

  }
   
  
loadModules();


  
  
  
  $('#content').on('click', '#topic a', function(e){
    
   e.preventDefault(); 
   var loc = this.id;
   newHTML = "";
   for (var i = 0; i < allmodules[loc].length; i ++){
     newHTML += '<li><span class="modulenumber">' + allmodules[loc][i].module + '</span>';
     newHTML += '<a href="descriptions.html#';
     newHTML += allmodules[loc][i].title.replace(/ /g, '-')+ '">';
     newHTML += allmodules[loc][i].title + '</a></li>';
     
   } //loop
    
    $('#modules').html('<ul>' + newHTML + '</ul>');
    
    $('#topic a.selected').removeClass('selected');
    $(this).addClass('selected');
    
    $('#details').text('');
  })//clickfunction


  $('#content') .on('click', '#modules li a', function(e) {
	e.preventDefault();
	var fragment = this.href;

	fragment= fragment.replace('#', ' #');
	$('#details').load(fragment);

	$('#modules a.current').removeClass('current ');
	$(this).addClass('current');

});

});


