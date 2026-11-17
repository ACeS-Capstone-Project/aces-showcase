const dialog = document.querySelector('.image-dialog');
const image = dialog.querySelector('img');
const caption = dialog.querySelector('#image-caption');

if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('.screenshot').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      const screenshot = link.querySelector('img');
      image.src = link.href;
      image.alt = screenshot.alt;
      caption.textContent = link.closest('figure').querySelector('h3')?.textContent
        ?? 'Acme Co. slide editor';
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
