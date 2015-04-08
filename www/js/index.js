/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
var ad=new Array();
var soyad=new Array();
var nick=new Array();
 
/*
$.ajax({
  url:'content.json',
  type:'POST',
  dataType:'json',
  success:function(gelen){
    var i=0;
    //xml sayfasından bütün kişileri al
    $(gelen).find('kisi').each(function(){
      //kişilerin değerlerini diziye aktar
      ad[i]=$(this).find('ad').text();
      soyad[i]=$(this).find('soyad').text();
      nick[i]=$(this).find('nick').text();
      i++;
    });
    //bir kişinin değerlerini ekrana yaz
    $("#adi").val('Ad: '+ad[1]);
    $("#soyadi").val('Soyad: '+soyad[1]);
    $("#nicki").val('Nick: '+nick[1]);
  }
});
var person = {
    firstName: "Tolga",
    lastName: "Özses",
    websiteURL: "http://webcinizim.com"
};
var template = "<h1>{{firstName}} {{lastName}}</h1>Website: {{websiteURL}}";
var html = Mustache.render(template, person);
console.log(html);
$('#div').html(html);
*/
if ($(".search").val()) {
  $.ajax({
    url: "http://yayinevi.sabanciuniv.edu/",
    type: 'GET',
    dataType: 'json', // added data type
//data: {"q": "search/node/"+$(".search").val()},   // querystring params passed
    data: {"q": "search/node/felsefi"},   // querystring params passed
    success: function(data) {
      alert(data);
    }
  });
}
