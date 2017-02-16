<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache'); // recommended to prevent caching of event data.
header("Connection: Keep-alive");
header("Access-Control-Allow-Origin: *");
 
function sendMsg($msg) {
  echo "data: $msg" . PHP_EOL;
  echo "id: 1".PHP_EOL;
  echo PHP_EOL;
 
  ob_flush();
  flush();
}
 
sendMsg('server time: ' . date("h:i:s"));
?> 