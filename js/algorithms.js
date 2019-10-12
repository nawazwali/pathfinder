$(document).ready(function() {
  var width = $(document).width()
  var height = $(document).height()
  var p16 = 25

  var columns = Math.floor(width / p16)
  var rows = Math.floor(height / p16) - 2
  var startingpoint = Math.floor(rows / 2) + '_' + Math.floor(columns * 0.1)
  var endpoint = Math.floor(rows / 2) + '_' + Math.floor(columns * 0.9)
  var current_node = startingpoint
  console.log(columns)
  $('#StartAlgorithm').click(function() {
    DijkstraStart()
  })

  function DijkstraStart() {
    for (var i = 1; i < rows + 1; i++) {
      for (var j = 1; j < columns + 1; j++) {
        //var id = '#' + i + '_' + j
        var next_node = IdGenerator(current_node, 'top')
        var haswall = $(next_node).hasClass('wall')
        var hasStart = $(next_node).hasClass('startingpoint')
        var hasEnd = $(next_node).hasClass('endpoint')
        if (!haswall && !hasStart && !hasEnd) {
          //$(id).addClass('visitedTargetNodePurple')
          var previous_node = ''

          $(next_node).addClass('visitedTargetNodePurple')
        }
      }
    }
  }

  function IdGenerator(node, direction) {
    console.log('submitted= ' + node)
    var node = node.split('_')
    var x = parseInt(node[1])
    var y = parseInt(node[0])
    switch (direction) {
      case 'left':
        if (x > 0) {
          x = x - 1
        }
        break

      case 'right':
        if (x < columns) {
          x = x + 1
        }
        break

      case 'top':
        if (y > 0) {
          y = y - 1
        }
        break

      case 'down':
        if (y < rows) {
          y = y + 1
          console.log('down')
        }
        break
    }
    node[0] = y
    node[1] = x
    console.log('X = ' + x)
    console.log('Y = ' + y)
    node = node.join('_')
    current_node = node
    console.log('Now Current= ' + current_node)
    return '#' + node
  }
})
