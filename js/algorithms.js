$(document).ready(function() {
  var width = $(document).width()
  var height = $(document).height()
  var p16 = 25
  var PathStack = []
  var Xaxis = ''
  var Yaxis = ''
  var columns = Math.floor(width / p16)
  var rows = Math.floor(height / p16) - 2
  var startingpoint = Math.floor(rows / 2) + '_' + Math.floor(columns * 0.1)
  var endpoint = Math.floor(rows / 2) + '_' + Math.floor(columns * 0.9)
  var current_node = startingpoint
  var TargetNode = ''
  var endReached;
  console.log(columns)
  $('#StartAlgorithm').click(function() {
    DijkstraStart()
  })

  function DijkstraStart() {
    //var id = '#' + i + '_' + j
    //$(id).addClass('visitedTargetNodePurple')
    //console.log('this is X ' + x)
    //ReachTopEdge()
    //ReachRightEdge()
    //ReachDownEdge()
    //var [next_node, y, x] = IdGenerator(current_node, 'left')
    //$(next_node).addClass('visitedTargetNodePurple')
    //ReachTopEdge()
    //var moveArray=['down','left-step','up']
    //var count = 0
    ReachTopEdge()
    ReachRightEdge()

    
    while(TargetNode==''){
    
      if(endReached){
        break
      }
      ReachDownEdge()
      step('left')
      ReachTopEdge()
      step('left')
      
      
      
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

      case 'up':
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
      case 'no':
        x = x
        y = y
        break
    }
    node[0] = y
    node[1] = x
    //Xaxis = x
    //Yaxis = y
    console.log('X = ' + x)
    console.log('Y = ' + y)
    node = node.join('_')
    current_node = node
    //console.log('Now Current= ' + current_node)
    return ['#' + node, y, x]
  }
  function ReachTopEdge() {
    var [next_node, y, x] = IdGenerator(current_node, 'no')
     endReached =$(next_node).hasClass("endpoint")
    while (y > 1) {
      if(endReached){
        break;
      }
      var [next_node, y, x] = IdGenerator(current_node, 'up')
     endReached =$(next_node).hasClass("endpoint")
      animatePath(next_node, i)
      //console.log('Reaching Top')
    }
  }
  function ReachRightEdge() {
    var [next_node, y, x] = IdGenerator(current_node, 'no')
    endReached =$(next_node).hasClass("endpoint")
    while (x < columns) {
      endReached =$(next_node).hasClass("endpoint")
      if(endReached){
         break;
      }
      var [next_node, y, x] = IdGenerator(current_node, 'right')
      animatePath(next_node, i)
    }
  }

  function ReachDownEdge() {
    var [next_node, y, x] = IdGenerator(current_node, 'no')
    endReached =$(next_node).hasClass("endpoint")
    
    while (y < rows) {
      endReached =$(next_node).hasClass("endpoint")
      if(endReached){
              break;
            }
      var [next_node, y, x] = IdGenerator(current_node, 'down')
      animatePath(next_node, i)
    }
  }

  function ReachLeftEdge() {
    var [next_node, y, x] = IdGenerator(current_node, 'no')
    while (x < columns && endReached) {
     endReached =$(next_node).hasClass("endpoint")
      var [next_node, y, x] = IdGenerator(current_node, 'left')
      animatePath(next_node, i)
    }
  }
  function CheckforObstruction(next_node) {
    var haswall = $(next_node).hasClass('wall')
    var hasStart = $(next_node).hasClass('startingpoint')
    var hasEnd = $(next_node).hasClass('endpoint')


    if (haswall) return true
    if (hasStart) return true
    if (hasEnd) {
      TargetNode = next_node
      return true
    }
    return false
  }
  function step(direction){
    var [next_node, y, x] = IdGenerator(current_node, direction)
    $(next_node).addClass('visitedTargetNodePurple')
  }
  function animatePath(next_node, i) {
    var obstruction = CheckforObstruction(next_node)
    if (!obstruction) {
      $(next_node).addClass('visitedTargetNodePurple')
    }
  }
})
