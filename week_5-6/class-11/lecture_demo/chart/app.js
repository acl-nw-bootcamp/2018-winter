var images = [
  { label: "bag",  y: 10  },
  { label: "banana", y: 15  },
  { label: "boots", y: 25  },
  { label: "cthulhu",  y: 30  },
  { label: "chair",  y: 28  }
]

window.addEventListener("load", function() {
  document.getElementById("show-chart-button").addEventListener("click", showChart);
})

function showChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "BusMall Image Results"
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: images
      }
    ]
  });
  chart.render();
}
