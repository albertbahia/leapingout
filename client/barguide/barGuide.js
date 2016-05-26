function builtColumn() {
    
    $('#container-column').highcharts({
        
        chart: {
            type: 'bar'
        },
        
        title: {
            text: 'Happy Hour'
        },
        
        subtitle: {
            text: 'Morristown'
        },
        
        credits: {
            enabled: false
        },
        
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wedsnesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
                
            ]
        },
        
        yAxis: {
            min: 4,
            title: {
                text: 'Time'
            }
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} hours</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        
        series: [{
            name: 'Grass Hopper',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]

        }, {
            name: 'Iron Bar',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 100]

        }, {
            name: 'Sona',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

        }, {
            name: 'George and Marthas',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]

        }]
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.barGuide.rendered = function() {    
    builtColumn();
}