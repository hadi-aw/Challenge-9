// U51313007
document.addEventListener('DOMContentLoaded', function() {
    // Data points to be represented by div elements
    const dataPoints = [10, 20, 30, 40 ,50];

    // Select the body element and append divs for each data point
    d3.select('body').selectAll('.data-point')
        .data(dataPoints)
        .enter()
        .append('div')
        .attr('class', 'data-point')
        .text(d => d);
        .on('mouseover', function() {
            d3.select(this).style('background-color', 'firebrick');
        })
        .on('mouseout', function() {
            d3.select(this).style('background-color', 'steelblue');
        });
});