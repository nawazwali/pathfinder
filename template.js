
		$(document).ready(function() {
			var width= $(document).width();
			var height = $(document).height();
			var p16 = 25;

			var columns = Math.floor(width/p16);
			
			var rows =  Math.floor(height/p16)-2;
			var startingpoint = Math.floor(rows/2)+'_'+Math.floor(columns*0.1);
			var endpoint = Math.floor(rows/2)+'_'+Math.floor(columns*0.9);
			console.log(rows);
			console.log(columns);
			//alert(columns)
			for(i=1;i<=rows;i++){
				$("tbody").append("<tr id="+i+">");
				for(j=1;j<=columns;j++){
					
					//if($("td").hasClass())
					$("#"+i).append('<td id='+i+'_'+j+'></td>');
				}
				//$("tabody").append("</tr>");
			}

			console.log(startingpoint);
			$("tbody #"+startingpoint).attr('class','startingpoint');

			$("tbody #"+endpoint).attr('class','endpoint');
				
			
			$("td").click(function() {
				/* Act on the event */
				//alert($(this).attr('class'));

				
				if($(this).hasClass("wall")){
					$(this).removeClass('wall');
					//alert("hi");
				}else if($(this).hasClass("startingpoint") || $(this).hasClass("endpoint") ){
					
				}else{
					var buildwall = $(this).attr('id');
					$("#"+buildwall).addClass('wall');
				}
			});

			 $( "tbody tr" ).on('mousedown',function(e){
			 	 	
			 	 	
			 });



		});
