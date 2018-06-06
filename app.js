$(document).ready(function(){

  $('.setData').on('click', function() {
    let nameInput = $('#save-name');
    let name = nameInput.val();
    let snippetInput = $('#snippetContainer');
    let snippet = snippetInput.val();

    localStorage.setItem(name, snippet);
    nameInput.val('');
    snippetInput.val('');
  });

  $('.getData').on('click', function(){
    let retrievedData = localStorage.getItem('myFormTextData');
  });

});

