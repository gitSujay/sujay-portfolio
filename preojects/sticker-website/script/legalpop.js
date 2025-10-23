// open popup
document.querySelectorAll('[data-target]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    let targetId = link.getAttribute('data-target');
    document.getElementById(targetId).classList.add('show');
  });
});

// close popup
document.querySelectorAll('.closePopup').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.legal-popup').classList.remove('show');
  });
});