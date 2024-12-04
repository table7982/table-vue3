export default function () {

  function getImageColor(img: any, id: string) {
    let canvas: any = document.createElement('canvas');
    canvas.id = id
    canvas.width = img.width;
    canvas.height = img.height;
    console.log('canvas的高度是:', canvas.height)
    console.log('canvas的宽度是:', canvas.width)
    let skipNumCol = canvas.width / 15
    let skipNumRol = canvas.height / 15
    skipNumCol = Math.round(skipNumCol)
    skipNumRol = Math.round(skipNumRol)
    // console.log(img)
    let context: any = canvas.getContext("2d");

    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 获取像素数据
    let data = context.getImageData(0, 0, img.width, img.height).data;
    // console.log(data)
    let r = 1, g = 1, b = 1;
    let cnt = 0
    // 取所有像素的平均值
    for (var row = 0; row < img.height; row++) {
      for (var col = 0; col < img.width; col++) {
        // console.log(data[((img.width * row) + col) * 4])
        if (row == 0) {
          r += data[((img.width * row) + col)];
          g += data[((img.width * row) + col) + 1];
          b += data[((img.width * row) + col) + 2];
        } else {
          r += data[((img.width * row) + col) * 4];
          g += data[((img.width * row) + col) * 4 + 1];
          b += data[((img.width * row) + col) * 4 + 2];
        }
        cnt++
        // console.log(r, g, b)
        col += skipNumCol
      }
      row += skipNumRol
    }
    console.log(cnt, '运行了这些次。')
    // console.log(r, g, b)
    // 求取平均值
    // r /= (img.width * img.height);
    // g /= (img.width * img.height);
    // b /= (img.width * img.height);
    r /= cnt;
    g /= cnt;
    b /= cnt;
    // 将最终的值取整
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    console.log(r, g, b)
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  return { getImageColor }
}
