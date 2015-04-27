document.addEventListener('deviceready', createXHR, false);
document.addEventListener('resume', createXHR, false);

function createXHR() {
  $.ajax({
    url: 'http://yayinevi.sabanciuniv.edu/content.json',
    dataType: 'json',
    success: function (data) {
      //console.log(content.nodes[1].node.title);
      addNode(data.nodes, data.nodes.length, 0);
    }
  });
}

function addNode(nodes, l, i) {
  var img = document.createElement('img');
  img.className = 'img';
  img.src = nodes[i].node.field_resim.src;
  img.onload = function () {
    document.body.appendChild(img);
    i++;
    if (i < l) addNode(nodes, l, i);
  };
}
/*
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
   var pid = d.createElement('div');
   pid.innerHTML = value.node.field_pid;
   d.body.appendChild(title);
   d.body.appendChild(img);
   d.body.appendChild(price);
   d.body.appendChild(pid);
   });
   }
   });
   */
