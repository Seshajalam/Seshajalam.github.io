// Load project descriptions from external text files
function loadDescription(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(text => {
      document.getElementById(id).innerText = text;
    })
    .catch(err => {
      document.getElementById(id).innerText = "Failed to load description.";
      console.error(`Error loading ${file}:`, err);
    });
}

// Load each description file
loadDescription("hand-desc", "project_descriptions/hand.txt");
loadDescription("pneumonia-desc", "project_descriptions/pneumonia.txt");

// Project activity chart
const ctx = document.getElementById('activityChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Projects',
      data: [2, 3, 1, 4, 2, 3],
      backgroundColor: 'rgba(162, 129, 255, 0.6)',
      borderRadius: 6
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#fff' }
      },
      x: {
        ticks: { color: '#fff' }
      }
    }
  }
});
