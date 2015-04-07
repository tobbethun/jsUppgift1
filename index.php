<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<link type="text/css" rel="stylesheet" href="css/normalize.css"/>
	<link type="text/css" rel="stylesheet" href="css/style.css"/>

	<title>SLIDESHOW</title>
</head>
<body>
	<div class="wrapper">
		<h1>ARNOLD</h1>
		<div id="imgSource">	
			<?php
			$directory = "./img/";
			$images = glob($directory . "*.jpg");
			$count = 0;
			foreach($images as $image) {
				
	            
				echo "<img class='img'id='" . $count . "'src='" . $image . "'/>";
				++$count;
			}
			?>
		</div>
		<input type="button" id="btn-left" value="PREV"/>
		<input type="button" id="btn-right" value="NEXT"/>
		
	</div>
	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src='main.js'></script>

</body>
</html>