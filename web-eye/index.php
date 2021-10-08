<?php

/*

  ! Этот файл должен называться index.php, чтобы скрыть содержимое папки.
  * Или придётся её скрыть любым другим способом.

*/

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

if (!empty($_POST['my_hidden'])) {
  $img = $_POST['my_hidden'];
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $data = base64_decode($img);
  $success = file_put_contents("./z_".time().'.png', $data);
}

?>