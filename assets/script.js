$(function(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);    
    });
    var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
        trigger: 'focus'
    })


    var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
        container: 'body'
      })
      
    var discord = $('#tocopy');
    $('#btn-discord').click(function(){
        navigator.clipboard.writeText('Arshess#1700').then(function(){
            // $('#link-Discord').attr('data-bs-toggle',"tooltip");
            // $('#link-Discord').attr('data-bs-placement',"top");
            // $('#link-Discord').attr('title',"Copié !");
            
            
        });
          
        }
        
      );

    // navigator.clipboard.writeText().then(text => outputElem.innerText = text);


});