document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  var buy;
  $.ajax({
      url: 'http://yayinevi.sabanciuniv.edu/content.json',
      dataType: 'json',
      success: function(data) {
        $.each(data.nodes, function(key, value) {
            var d = document,
                a = $('<a>',{'class':'a','data-lightbox':'lightbox','data-title':value.node.title,'href':value.node.field_resim.src}),
                img = $('<img>',{'class':'img','src':value.node.field_resim.src}),
                title = $('<div>',{'class':'title','innerHTML':value.node.title}),
                price = $('<div>',{'class':'price'}),
                btn = $('<input>',{'class':'btn success','type':'button','data-buy':value.node.field_satin_al,'value':price+' TL'}),
                row = $('<div>', 'row'),
                clear = $('<div>', 'clear');
            $('body').append(a);
            a.append(img);
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
                if (window.inappbrowser) window.open = inappbrowser.open;
                window.open('https://supay.sabanciuniv.edu/index.php?do=catalog/payment&lang=tr&id=' + buy);
            });
      }
  });
}
