google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Počet záujemcov', 'Počet úspešných žiakov'],
          ['2017',  1000,      400],
          ['2018',  1170,      460],
          ['2019',  660,       1120],
          ['2020',  1030,      540]
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





