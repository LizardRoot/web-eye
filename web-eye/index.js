

// Функция скриншота тега video
function snapshotTake(tag_video) {

  var hidden_canvas = document.createElement('canvas'),
    image = document.createElement('img'),
    // Получаем размер видео элемента.
    width = tag_video.videoWidth,
    height = tag_video.videoHeight;

  // Установка размеров canvas идентичных с tag_video.
  hidden_canvas.style.display = 'none';
  hidden_canvas.classList.add('hidden_canvas');
  hidden_canvas.width = width;
  hidden_canvas.height = height;

  if (!document.querySelector('.hidden_canvas')) {
    // Возможно это лишнее и можно сделать без явного добавления canvas в DOM
    document.querySelector('body').appendChild(hidden_canvas);
  }

  var hidcanv = document.querySelector('.hidden_canvas');

  // Отрисовка текущего кадра с tag_video в canvas.
  document.querySelector('.hidden_canvas').getContext('2d').drawImage(tag_video, 0, 0, width, height);

  // Преобразование кадра в изображение dataURL.
  image.classList.add('img-canvas');
  var img = document.querySelector('.img-canvas')
  var imageDataURL = hidcanv.toDataURL('image/png');

  // Помещение изображения в элемент img.
  image.setAttribute('src', imageDataURL);
  return imageDataURL;
}



// Функция отправки скриншота на сервер
function snapshotSubmit(url_parent_directory, image) {
  const formData = new FormData();
  formData.append('my_hidden', image)
  console.log(image)

  fetch(url_parent_directory + '/web-eye/index.php', { // Куда отправляем
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.status !== 200) {
        console.log(`ERROR: ${response.status}`);
        return false;
      } else {
        return response;
      }
    })
    .then(response => response.text())
    .then(img_path => {
      //console.log(img_path)
    })
    .catch(error => {
      console.error(error)
    });
}



/*

  Сюда можно дописать скринкаст к cookie пользователя и сохранять в отдельную папку на сервере.

*/
