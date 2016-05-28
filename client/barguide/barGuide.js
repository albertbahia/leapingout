function builtColumn() {
    
    $('#container-column').highcharts({

       chart: {
            type: 'columnrange',
            inverted: 'true'
        },
        title: {
            text: 'Morristown Happy Hour'
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        yAxis: {
            
            title: {
                text: 'Hours'
            }
        },
        legend: {
            reversed: true
        },
       
       plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y ;
                    }
                }
            }
        },
        series: [{
            name: 'Office',
            data: [ [2, 4], [4,8] ]
        }, {
            name: 'Grasshopper',
            data: [ [4,6], [6,7] ]
        }, {
            name: 'Iron Bar',
            data: [ [4,8], [4,8] ]
        }]
    });
}

       

/*
 * Call the function to built the chart when the template is rendered
 */
Template.barGuide.rendered = function() {    
    builtColumn();
}