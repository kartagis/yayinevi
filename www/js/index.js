document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
    var buy;
    $.ajax({
        url: 'http://yayinevi.sabanciuniv.edu/content.json',
        dataType: 'json',
        success: function (data) {
            $.each(data.nodes, function (key, value) {
                var b = $('body'),
                main = $('<div>', {
                    'id': 'main'
                }),
                row = $('<div>', {
                    'class': 'row'
                }),
                a = $('<a>', {
                    'class': 'a',
                    'data-lightbox': 'lightbox',
                    'data-title': value.node.title,
                    'href': value.node.field_resim.src
                }),
                img = $('<img>', {
                    'class': 'img',
                    'src': value.node.field_resim.src
                }),
                cnt = $('<div>', {
                    'class': 'container'
                }),
                ttl = $('<div>', {
                    'class': 'title'
                }),
                p = $('<p>', {
                    'class': 'p'
                }),
                btn = $('<button>', {
                    'class': 'btn success',
                    'data-buy': value.node.field_satin_al
                }),
                price = $('<div>', {
                    'class': 'price'
                }),
                hr = $('<hr>');
                p[0].textContent = value.node.title.titleize();
                btn[0].innerHTML = 'Buy';
                price[0].innerHTML = value.node.field_fiyat_1 + ' TL';
                ttl[0].innerHTML = value.node.title.titleize();
                b.append(row);
                row.append(a);
                row.append(img);
                row.append(cnt);
                cnt.append(ttl);
                cnt.append(price);
                cnt.append(btn);
                row.append(hr);
            });
        }
    });
    $(document).on('click', '.success', function (ev) {
        var buy = $(ev.target).attr("data-buy");
        var r = new XMLHttpRequest();
        r.open('GET', 'https://supay.sabanciuniv.edu/index.php?do=catalog/payment&lang=tr&id='+buy', true);
        r.send();
        alert(r.status);
        window.open('https://supay.sabanciuniv.edu/index.php?do=catalog/payment&lang=tr&id=' + buy);
    });
}
