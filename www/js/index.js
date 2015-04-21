document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  $.ajax({
    url: 'http://yayinevi.sabanciuniv.edu/content.json',
    dataType: 'json',
    success: function (data) {
      var title = data.nodes.map(function (node) {
        return node.node.title;
      });
      var images = data.nodes.map(function (node) {
        return node.node.field_resim.src;
      });
      alert(images);
      /*
         var template = "<img src='{{images}}'";
         var html = Mustache.to_html(template, images);
         $(".img").html(html);
         */
    },
    error: function (data) {
      alert('Bir hata oluştu');
    }
  });
}
