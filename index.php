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
			
			function errFn(){
				console.error("SSE Failed");
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
			
			new SSE('MySSE').consoleOn().target('target.php').callback(defcallback).error(errFn).start();
			
			//var source = new EventSource("target2.php");
			//
			//source.onmessage = function(event) {
			//	console.log(event.data, this);
			//}.bind(source);
			//
			//source.onerror = function(event) {
			//    console.error("ERROR", this);
			//}.bind(source);
			
		</script>
	</head>
	<body>
		
		
		
	</body>
</html>