// U51313007

function main() {
    d3.select('body').selectAll('div')
        .data([1, 2, 3, 4, 5])
        .enter()
        .append('div')
        


    
    d3.selectAll('div')
    .on('mouseover', function() {
        d3.select(this).style('background-color', 'firebrick');
    })
    .on('mouseout', function() {
        d3.select(this).style('background-color', 'blue');
});
}

