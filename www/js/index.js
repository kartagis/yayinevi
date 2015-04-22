document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  $.ajax({
    url: 'http://yayinevi.sabanciuniv.edu/content.json',
    dataType: 'json',
    success: function (data) {
      $.each(content.nodes, function (key, value) {
        var d=document;
        var img = d.createElement('img');
        img.className = 'img';
        img.src = value.node.field_resim.src;
        d.body.appendChild(img);
      });
    },
    error: function (data) {
      alert('Bir hata oluştu');
    }
  });
}
