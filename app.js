$(document).ready(function(){

  $('.set-data').on('click', function() {
    let nameInput = $('#save-name');
    let name = nameInput.val();
    let snippetInput = $('#snippet-container');
    let snippet = snippetInput.val();
    
    if(localStorage.getItem(name)){
      alert(`It seems you already saved a snippet with that name. Please try a different name.`);
    } else {
      localStorage.setItem(name, snippet);
    }

    nameInput.val('');
    snippetInput.val('');
  });

  $('.get-data').on('click', function(){
    $('all-snippets').hide();
    let getNameInput = $('#get-name');
    let getName = getNameInput.val();
    let snippet = localStorage.getItem(getName);

    if(snippet){
      $('.show-snippet').html(`
      <div class="specific-snippet">${snippet}</div>
    `).show();
    } else {
      alert(`It seems you didn't save any snippets with that name...`);
    }
 ;

  });

});

