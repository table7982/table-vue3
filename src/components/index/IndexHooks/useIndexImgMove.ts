export default function (containerClass: any, imgClass: any) {
  document.addEventListener('DOMContentLoaded', () => {
    const img: any = document.querySelector(imgClass);
    const container: any = document.querySelector(containerClass);

    if (!img || !container) {
      console.error('Target elements not found. Please check your HTML structure and selectors.');
      return;
    }

    container.addEventListener('mousemove', (e: any) => {
      const { clientX, clientY } = e; // 获取鼠标位置
      const { offsetWidth, offsetHeight } = container; // 获取容器尺寸

      // 计算鼠标相对位置
      const xPercent = (clientX / offsetWidth - 0.5) * 10; // 范围 -10% 到 10%
      const yPercent = (clientY / offsetHeight - 0.5) * 10;

      // 应用平移效果
      img.style.transform = `translate(-50%, -50%) translate(${xPercent}%, ${yPercent}%)`;
    });
  });

}