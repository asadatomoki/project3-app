// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/* global $ */

$(function(){
  $("table#scoretable td").hover(function() {
    //縦
    var row = $(this).closest('tr').index();
    //横
    var col = this.cellIndex + 1;
    console.log('Row: ' + row + ', Column: ' + col);
    $(this).css("background-color","#f99");
  }, function() {
    $(this).css("background-color","#fff");
  });
});