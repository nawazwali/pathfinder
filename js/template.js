$(document).ready(function() {
  var width = $(document).width()
  var height = $(document).height()
  var p16 = 25

  var columns = Math.floor(width / p16)

  var rows = Math.floor(height / p16) - 2
  var startingpoint = Math.floor(rows / 2) + '_' + Math.floor(columns * 0.1)
  var endpoint = Math.floor(rows / 2) + '_' + Math.floor(columns * 0.9)

  //alert(columns)
  for (i = 1; i <= rows; i++) {
    $('tbody').append('<tr id=' + i + '>')
    for (j = 1; j <= columns; j++) {
      //if($("td").hasClass())
      $('#' + i).append('<td id=' + i + '_' + j + '></td>')
    }
    //$("tabody").append("</tr>");
  }

  $('tbody #' + startingpoint).attr('class', 'startingpoint')

  $('tbody #' + endpoint).attr('class', 'endpoint')

  var flag
  $('td').click(function() {
    var clickcount

    if ($(this).data('count')) {
      // already been clicked
      $(this).data('count', $(this).data('count') + 1) // add one
    } else {
      // first click
      $(this).data('count', 1) // initialize the count
    }

    clickcount = $(this).data('count')
    if (clickcount % 2 == 0) {
      $(this).removeClass('wall')
    } else if (
      $(this).hasClass('startingpoint') ||
      $(this).hasClass('endpoint')
    ) {
      $(this).removeClass('wall')
    } else {
      var buildwall = $(this).attr('id')
      $('#' + buildwall).addClass('wall')
    }
  })

  $(document).on('mouseup', function() {
    if ($(this).hasClass('startingpoint') || $(this).hasClass('endpoint')) {
      $(this).removeClass('wall')
    }
    flag = false
  })
  $('tbody tr td').on('mousedown', function(e) {
    e.preventDefault()
    rowIndex = $(this)
      .closest('tr')
      .index()
    colIndex = $(e.target)
      .closest('td')
      .index()

    if ($(this).hasClass('wall')) {
      $(this).removeClass('wall')
    } else if (
      $(this).hasClass('startingpoint') ||
      $(this).hasClass('endpoint')
    ) {
      $('tbody tr')
        .eq(rowIndex)
        .find('td')
        .eq(colIndex)
        .removeClass('wall')
    } else {
      $('tbody tr')
        .eq(rowIndex)
        .find('td')
        .eq(colIndex)
        .addClass('wall')
    }
    flag = true
    return false
  })
  document.onmousemove = function() {
    return false
  }
  $('tbody tr td').on('mouseenter', function(e) {
    e.preventDefault()

    rowIndex = $(this)
      .closest('tr')
      .index()
    colIndex = $(e.target)
      .closest('td')
      .index()
    if ($(this).hasClass('startingpoint') || $(this).hasClass('endpoint')) {
      $(this).removeClass('wall')
    }
    if (flag) {
      if ($(this).hasClass('startingpoint') || $(this).hasClass('endpoint')) {
        $('tbody tr')
          .eq(rowIndex)
          .find('td')
          .eq(colIndex)
          .removeClass('wall')
      } else {
        $('tbody tr')
          .eq(rowIndex)
          .find('td')
          .eq(colIndex)
          .addClass('wall')
      }

      //$('tbody tr').eq(rowIndex).find('td').eq(colIndex).addClass('wall');

      e.preventDefault()
    }
  })
})
