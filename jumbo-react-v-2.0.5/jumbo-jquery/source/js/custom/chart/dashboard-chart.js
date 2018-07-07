(function ($) {
    "use strict";
    
    var chart = c3.generate({
        bindto: '#c3-chart',
        data: {
            columns: [
                ['Expenses', 10, 5, 15, 13, 35, 25, 20, 25],
                ['Income', 22, 20, 26, 22, 26, 20, 32, 35]
            ],
            types: {
                Expenses: 'area-spline',
                Income: 'area-spline'
            },
            colors: {
                Expenses: '#F5C361',
                Income: '#5C85DE'
            }
        },
        axis: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },
        padding: {
            right: -10,
            left:-10,
            bottom:-10
        }, point: {
            show: false
        },legend: {
            position: 'inset',
            inset: {
                anchor: 'top-left',
                x: 20,
                y: 0,
                step: 1
            }
        }
    });


    //////// c3 Line chart
    // line chart
    var lineChart = new c3.generate({
        bindto: '#ct-chart',
        data: {
            columns: [
                ['data1', 10, 50, 20, 60, 20,80,30,70,30]
            ],
            colors: {
                data1: '#FFFFFF'
            }
        }, padding: {
            right: 20,
            left:20,
            bottom:0
        },axis: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },legend: {
            show: false
        },tooltip: {
            show: false
        }
    });

    /////////


    var chart = c3.generate({
        bindto: '#c4-chart',
        data: {
            columns: [
                ['data1', 24,13, 98, 39,48,38, 43]
            ],
            types: {
                data1: 'area-spline'
            },
            colors: {
                data1: '#FFF'
            }
        },
        axis: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },
        padding: {
            right: -10,
            left:-10,
            bottom:-10
        }, point: {
            show: false
        },legend: {
            show: false
        },tooltip: {
            show: false
        }

    });

    var chart = c3.generate({
        bindto: '#c8-chart',
        data: {
            columns: [
                ['data1',15,22, 13, 25,14,28, 18,30,16]
            ],
            types: {
                data1: 'spline'
            },
            colors: {
                data1: "#FFF"
            }
        },
        axis: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },
        padding: {
            right: 10,
            left:10,
            bottom:10
        },legend: {
            show: false
        },tooltip: {
            show: false
        }

    });



    /// Chartist bar
    var data1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 6, 4,7, 3, 5,6,7,6]
        ]
    };

    var options1 = {
        seriesBarDistance: 10,
        axisX: {
            showLabel: false,
            showGrid: false,
            offset:0
        },
        axisY: {
            showLabel: false,
            showGrid: false,
            offset:0
        }
    };

    var responsiveOptions = [
        ['screen and (max-width: 800px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('#ch-chart6', data1, options1, responsiveOptions);

    ////////ch-11




    //pie chart

    new Chartist.Pie('#ct-chart9', {
        series: [20, 30, 30, 40,20,35]
    }, {
        donut: true,
        donutWidth: 20,
        donutSolid: true,
        startAngle: 270,
        showLabel: false
    });


    ///// Bar chart Data
    var barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [90, 80, 85, 45, 25, 22, 65, 55, 45,30, 50,75,81, 28, 80, 70, 90,]
        ]
    };

    var barOptions = {
        seriesBarDistance: 5,
        color:'#FFFFFF',
        fullWidth: true,
        chartPadding: {
            right: 0,
            left:0,
            bottom:0
        },
        axisX: {
            showLabel: false,
            showGrid: false,
            offset: 5
        },axisY: {
            showLabel: false,
            showGrid: false,
            offset: 0
        }
    };

    var barResponsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 10,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('#bar-chart', barData, barOptions, barResponsiveOptions);

    ///multipal
    var chart = c3.generate({
        bindto: '#c3-chart2',
        data: {
            columns: [
                ['data1',15,22, 13, 25,14,28, 18,30,16],
                ['data2',12,25, 22,30,15,22, 10,18,12],
                ['data3',10,22,30, 24,26,32, 44,30,16],
            ],
            types: {
                data1: 'spline',
                data2: 'spline',
                data3: 'spline'
            },
            colors: {
                data1: "#FFF",
                data2: "#FFF",
                data3: "#FFF"
            }
        },
        axis: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },
        padding: {
            right: 0,
            left:0,
            bottom:-20
        },legend: {
            show: false
        },tooltip: {
            show: false
        }

    });
    
})(jQuery);