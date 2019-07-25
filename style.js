$(document).ready(function() {
  var $liCollection = $(".progressive-elems li");
  var $firstListItem = $liCollection.first(); 
  $firstListItem.addClass("blink");
  setInterval(function() {

      var $activeListItem = $(".blink");

      $activeListItem.removeClass("blink");

      var $nextListItem = $activeListItem.next();

      if ($nextListItem.length == 0) {
          $nextListItem = $firstListItem;
      }

      $nextListItem.addClass("blink");
  }, 500);
});

