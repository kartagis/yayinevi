document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  var buy;
  $.ajax({
      url: 'http://yayinevi.sabanciuniv.edu/content.json',
      dataType: 'json',
      success: function(data) {
        function createElement(eleType, className) {
          var ele = document.createElement(eleType);
          ele.className = className;
          return ele;
        }
        $.each(data.nodes, function(key, value) {
            var d = document,
                a = createElement('a', 'img'),
                img = createElement('img', 'img'),
                title = createElement('div', 'title'),
                price = createElement('div', 'price'),
                btn = createElement('input', 'btn success'),
                row = createElement('div', 'row'),
                clear = createElement('div', 'clear');
            a.dataset.title = value.node.title;
            a.setAttribute('href', value.node.field_resim.src);
            a.dataset.lightbox = 'lightbox';
            d.body.appendChild(a);
            a.appendChild(img);
            img.src = value.node.field_resim.src;
            title.innerHTML = value.node.title;
            price = value.node.field_fiyat_1;
            buy = value.node.field_satin_al;
            btn.type = 'button';
            btn.value = price + ' TL';
            btn.dataset.buy = buy;
            row.appendChild(title);
            row.appendChild(btn);
            row.appendChild(clear);
            d.body.appendChild(row);
            });
            $(document).on('click', '.success', function (ev) {
                var buy = $(ev.target).attr("data-buy");
                inappbrowser.open('https://supay.sabanciuniv.edu/index.php?do=catalog/payment&lang=tr&id=' + buy);
            });
      }
  });
}
