export const changeImgBlackOrWhite = (dataUrl: any, imgType: string, threshold: number) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx: any = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      // 遍历每个像素，红、绿、蓝
      for (let i = 0; i < pixels.length; i += 4) {
        const grey = 0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2];

        // 平均值  > threshold 置白; <= threshold 置黑
        const blackOrWhite = grey > threshold ? 255 : 0;

        pixels[i] = blackOrWhite;
        pixels[i + 1] = blackOrWhite;
        pixels[i + 2] = blackOrWhite;
      }

      ctx.putImageData(imageData, 0, 0);

      resolve(canvas.toDataURL(imgType, 0.8));
    };
    img.onerror = (err) => reject(err);
    img.src = dataUrl;
  });
};

export const readImgToDataUrl = (imgFile: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e: any) => resolve(e.target.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(imgFile);
  });
};
