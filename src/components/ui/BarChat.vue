<template>
      <canvas id="barChart" class="barheight"></canvas>
</template>
<script>
import Chart from 'chart.js/auto';
export default{
  mounted(){
  const ctx = document.getElementById('barChart');
  const myChart = new  Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data['one'],
          backgroundColor: 'rgba(255, 94, 0, 0.7)',
          borderColor: 'rgba(211, 78, 0, 1)',
          borderWidth: 1
        },
        {
          label: this.label,
          data: this.data['two'],
          backgroundColor: 'rgba(32, 32, 30, 0.2)',
          borderColor: 'rgba(31, 32, 30, 0.6)',
          borderWidth: 1
        }    ]
      },
      options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
      }
  });
  myChart;
},
props: ['labels', 'label', 'data'],
}
</script>