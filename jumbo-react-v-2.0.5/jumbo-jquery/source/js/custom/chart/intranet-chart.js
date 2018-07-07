(function ($) {
    "use strict";

    var chart = c3.generate({
        bindto: '#intranet',
        data: {
            columns: [
                ['Expenses', 32,5,100,3,126,16,140,12,95,5,126],
                ['Income', 3,74,2,56,15,80,2,135,5,80,20]
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

    ///Customer Around The World --c3 chart
    var chart = c3.generate({
        bindto: '#around-the-world',
        data: {
            columns: [
                ['Expenses', 10, 5, 15, 13, 35, 25, 20, 25],
                ['Income', 22, 16, 26, 22, 26, 20, 32, 35]
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
            show: false,
            position: 'inset',
            inset: {
                anchor: 'top-left',
                x: 20,
                y: 0,
                step: 1
            }
        },tooltip: {
            show: false
        }
    });
    
})(jQuery);