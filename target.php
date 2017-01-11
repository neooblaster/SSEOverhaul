<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$red = rand(100, 255);
$green = rand(100, 255);
$blue = rand(100, 255);

echo "data: Each color are associated to his own event. This text is associated to defaultCallback! \n\n";

echo "event: red\n";
echo "data: Message for 'red' event \n\n";

echo "event: green\n";
echo "data: Message for 'green' event \n\n";

echo "event: blue\n";
echo "data: Message for 'blue' event \n\n";

echo "retry: 2500\n";
?>