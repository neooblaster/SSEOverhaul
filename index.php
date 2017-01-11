<!DOCTYPE html>
<html>
	<head>
		<title>SSOverhaul Dev Page</title>
		<meta charset="utf-8" />
		<script type="text/javascript" src="SSE.js"></script>
		<script type="text/javascript">
		
			function defcallback(e){
				document.write(e.data);
			}
			
			function worka(){
				console.log("lancement de work ok");
			}
			
			
			//var MySSE = new SSE('MySEE');
			//	MySSE.consoleOn();
			//	MySSE.target('target.php');
			//	MySSE.callback(defcallback);
			//	MySSE.setTimeoutRestart(true);
			//	MySSE.setTimeoutDelay(30000);
			//	MySSE.workaround(worka);
			//	MySSE.addEvent('test', worka);
			//	MySSE.start();
			
			new SSE('MySSE').consoleOn().target('target.php').callback(defcallback).start();
			
		</script>
	</head>
	<body>
		
		
		
	</body>
</html>