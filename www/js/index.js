document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  $.ajax({
    url: 'http://yayinevi.sabanciuniv.edu/content.json',
    dataType: 'json',
    success: function (data) {
      var images = data.nodes.map(function (node) {
        return {image: node.node.field_resim.src};
      });
      var title = data.nodes.map(function (node) {
        return node.node.title;
      });
      var translator=data.nodes.map(function(node) {
        return node.node.field_ceviri;
      });
      var stuff = {images: images};
      var images='{{#images}}<img src="{{image}}">{{/images}}';
      var titles='{{#images}}<img src="{{image}}">{{/images}}';
      var html=Mustache.to_html(images, stuff);
      $("div").html(html);
    },
    error: function (data) {
      alert('Bir hata oluştu');
    }
  });
}
