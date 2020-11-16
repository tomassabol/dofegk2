google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Počet účastníkov'],
          ['2017',     19],
          ['2018',     57],
          ['2019',     71]
        ]);

        var options = {
          height: 600,
          backgroundColor: '#FAFAFA',
          title: 'Počet účastníkov Dofe na Gymnáziu Konštantínova 2, Prešov',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);

        function resize() {
          var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
          chart.draw(data, options);
        }
        window.onload = resize();
        window.onresize = resize;
      
      }





