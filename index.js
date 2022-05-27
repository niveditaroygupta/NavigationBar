var navstatus = 0;
function opennav()
{
    if(!navstatus)
    {
      $('.mainbar').css('width','100%')
      $('li').css('display','block')
      navstatus = 1
    }
    else{
       $('.mainbar').css('width','0')
       $('li').css('display','none')
       navstatus = 0
    }
}