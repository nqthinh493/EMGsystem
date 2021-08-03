//------------------ DrawChart--------------------//
view.graphTimeDomain = (data) => {

    var y_data = [],
        x_data = []

    for (var i = 0; i < data.length; i++) {
        y_data.push(data[i])
        x_data.push(i / 1000)


    }
    let trace = {
        x: x_data,
        y: y_data
    }
    let type_of_sensor = "Ag/AgCl";
    let layout_timedomain = {
        title: {
            text: 'EMG Signal' + ' ' + '(' + type_of_sensor + ')' + ' / Time Domain',
            font: {
                family: 'Roboto',
                size: 24
            },

        },
        xaxis: {
            title: {
                text: 'Time (s)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Atitude (mV)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    Plotly.newPlot(document.getElementById('stage4'), [trace], layout_timedomain);
};

view.graphFrequencyDomain = (data) => {
    var fft = new FFT();
    var y_data = [],
        x_data = []

    for (var i = 0; i < data.length; i++) {
        y_data.push(data[i])
        x_data.push(0)
    }
    let mean = y_data.reduce((a, b) => a + b, 0) / y_data.length
    re = y_data.map(e => e - mean);
    im = x_data;
    console.log(re.length);
    document.getElementById('timer').innerHTML = ' ' + re.length / 1000 + ' (s)';
    var NFFT = fft.dim(re, im);
    console.log(NFFT);

    fft.calc(1, re, im);
    console.log(re, im);


    var frequencies = fft.frequencies(re, im, 1000)
    var amplitude = fft.amplitude(re, im);
    console.log(frequencies, amplitude);
    let trace2 = {
        x: frequencies,
        y: amplitude,
        line: {
            color: 'rgb(219, 64, 82)'
        }

    }
    let type_of_sensor = "Ag/AgCl";
    let layout_freqdomain = {
        title: {
            text: 'EMG Signal' + ' ' + '(' + type_of_sensor + ')' + ' / Frequency Domain',
            font: {
                family: 'Roboto',
                size: 24
            },

        },

        xaxis: {
            title: {
                text: 'Frequency (Hz)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Atitude (mV)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    Plotly.newPlot(document.getElementById('stage5'), [trace2], layout_freqdomain); //signal in Time Domain
};