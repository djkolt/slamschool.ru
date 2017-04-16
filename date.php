<?php
	if ($_POST['todo'] == "read"){
		if (!is_file ("date.txt")){
			$file = fopen ("date.txt", "w");
				fwrite ($file, $_POST['date']);
			fclose ($file);
		}
		
		$file = fopen ("date.txt", "r");
			$date = fread ($file, 1024);
		fclose ($file);
		echo $date;		
	}


	if ($_POST['todo'] == "write"){
		
		$file = fopen ("date.txt", "w");
			fwrite ($file, $_POST['date']);
		fclose ($file);
		echo $_POST['date'];
		
	}
?>
