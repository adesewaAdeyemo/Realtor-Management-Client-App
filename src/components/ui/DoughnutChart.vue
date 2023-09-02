<template>
      <canvas id="doughnutChart" ></canvas>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const ctx = document.getElementById("doughnutChart");
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            backgroundColor: ['#41B883', '#E46651', '#f8d303', '#DD1B16', '#E4AA51', '#00DeeF', '#111B16','#419A83', '#E42951', '#E42EEE'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    myChart;
  },
  props: ["labels", "label", "data"],
};
</script>