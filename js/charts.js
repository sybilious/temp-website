// Render satire marketing chart
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('claimsChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Automation', 'Productivity', 'ROI', 'Investor Hype'],
      datasets: [
        {
          label: 'Marketing Claims',
          data: [100, 95, 120, 180],
          backgroundColor: 'rgba(142, 68, 173, 0.7)'
        },
        {
          label: 'Actual Results',
          data: [15, 10, -10, 100],
          backgroundColor: 'rgba(46, 204, 113, 0.7)'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 180
        }
      }
    }
  });
});
