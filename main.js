$(document).ready(function() {
  
  //efeito que faz formulario descer
  $('header button').click(function() {
    $('form').slideDown()
  })
  
  //faz o formulario suybir e desaparecer
  $('#button-cancel').click(function() {
    $('form').slideUp()
  })

  $('form').on('submit', function(evt) {
    evt.preventDefault();
    const newImageAdress = $('#new-image-adress').val();
    const newItem = $('<li style="display: none"></li>');
    $(`<img src="${newImageAdress}" />`).appendTo(newItem);
    $(`
      <div class="overlay-imagem-link">
        <a href="${newImageAdress}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
        </a>
      </div>    
    `).appendTo(newItem)
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(1000); //esse mil quer dizer 1s
    $('#new-image-adress').val('')
  })

})