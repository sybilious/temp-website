document.addEventListener('DOMContentLoaded', () => {
  const cta = document.getElementById('cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Trial activated! Please hold while we reinvent business models.');
    });
  }
  const span = document.createElement('span');
  span.textContent = `Investors misled: ${Math.floor(1000 + Math.random() * 9000)}`;
  span.style.display = 'block';
  span.style.textAlign = 'center';
  span.style.margin = '20px';
  span.style.fontWeight = 'bold';
  document.body.appendChild(span);
});
