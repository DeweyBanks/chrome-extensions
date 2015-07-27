window.addEventListener('mouseup',function(event)
{
	var sel = window.getSelection().toString();
  // console.log($(‘.a3s’).first().html());
  var txt = '';
  $('.a3s p').each(function(){
    txt = txt + $(this).text();
  });

    console.log(txt);
	if(sel.length)
		chrome.extension.sendRequest({'message':'setText','data': sel},function(response){
      $('.a3s p').attr('style', 'color:red;');
    })
})
