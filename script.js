// U51313007

function main() {
    d3.select('body').append('div');
 
    d3.selectAll('div')
    .on('mouseover', function() {
        d3.select(this).style('background-color', 'firebrick');
    })
    .on('mouseout', function() {
        d3.select(this).style('background-color', 'blue');
    });
}

