document.addEventListener('deviceready', function() {
  $.ajax({
    url: 'http://yayinevi.sabanciuniv.edu/content.json',
  dataType: 'json',
  success: function(data){
    var images = data.nodes.map(function (node) { 
      return node.node.field_resim.src; 
    });
    alert(images);
  },
  error: function(data) {
    alert('Bir hata oluştu');
  }
  })
});
