//document.addEventListener('deviceready', createXHR, false);
//document.addEventListener('resume', createXHR, false);
document.addEventListener('deviceready',function(){
    alert(windows.plugins);
});

/*
function createXHR() {
    var buy;
    $.ajax({
        url: 'http://yayinevi.sabanciuniv.edu/content.json',
        dataType: 'json',
        success: function (data) {
            function titleCase(text) {
                var words = text.split(' ');
                var results = [];
                for (var i = 0; i < words.length; i++) {
                    var letter = words[i].charAt(0).toUpperCase();
                    results.push(letter + words[i].slice(1));
                }
                return results.join(' ');
            };

            function createElement(eleType, className) {
                var ele = document.createElement(eleType);
                ele.className = className;
                return ele;
            }
            $.each(data.nodes, function (key, value) {
                var d = document,
                a = createElement('a', 'a'),
                img = createElement('img', 'img'),
                p = createElement('p', 'title'),
                cnt=createElement('div', 'container'),
                price = createElement('div', 'price'),
                btn = createElement('input', 'btn success'),
                row = createElement('div', 'row'),
                clear = createElement('div', 'clear'),
                title=titleCase(value.node.title);
                $(".a").attr("data-title", value.node.title);
                $(".a").attr('href', value.node.field_resim.src);
                $(".a").attr("data-lightbox", "lightbox");
                d.body.appendChild(a);
                a.appendChild(img);
                $(img).attr("src", value.node.field_resim.src);
                p.innerHTML = title;
                price = value.node.field_fiyat_1;
                $(btn).attr("data-buy", value.node.field_satin_al);
                btn.type = 'button';
                btn.value = price + ' TL';
                row.appendChild(p);
                row.appendChild(btn);
                row.appendChild(clear);
                d.body.appendChild(row);
            });
            $(document).on('click', '.success', function (ev) {
                    var buy = $(ev.target).attr("data-buy");
                    window.plugins.toast.showShortTop('Redirecting you to payment page', function(a){console.log('toast success'+a)}, function(b){alert('toast failure'+b)});
                    window.open('https://supay.sabanciuniv.edu/index.php?do=catalog/payment&lang=tr&id=' + buy);
                    });
        }
    });
}
*/
