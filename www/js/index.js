document.addEventListener('DOMContentLoaded', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  $.ajax({
    url: 'http://yayinevi.sabanciuniv.edu/content.json',
    dataType: 'json',
    success: function (data) {
      $.each(data.nodes, function (key, value) {
        var d = document;
        var img = d.createElement('img');
        img.className = 'img';
        img.src = value.node.field_resim.src;
        var title = d.createElement('div');
        title.className = 'title';
        title.innerHTML = value.node.title;
        var price = d.createElement('div');
        price.className = 'price';
        price.innerHTML = value.node.field_fiyat_1;
        var buy = d.createElement('div');
        buy.innerHTML = value.node.field_satin_al;
        var btn = d.createElement('input');
        btn.type = 'button';
        btn.value = 'Buy';
        var hr = d.createElement('hr');
        btn.className = 'btn success';
        d.body.appendChild(title);
        d.body.appendChild(img);
        d.body.appendChild(price);
        d.body.appendChild(btn);
        d.body.appendChild(hr);
        $('.success').on('click', function() {
          $(this).blur();
          window.location = 'http://yayinevi.sabanciuniv.edu/index.php?do=catalog/payment&amp;lang=tr&amp;id='+buyinnerHTML+'&amp;externalId=";"';
        });
      });
    }
  });
}
