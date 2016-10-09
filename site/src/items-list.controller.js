(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['items'];
function ItemsListController(items) {
  console.log("items: ");
  var itemlist = this;
  itemlist.items = items.data.menu_items;
}

})();
