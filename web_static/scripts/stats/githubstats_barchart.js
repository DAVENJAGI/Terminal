
/*function displayBarChart() {
    const barChartConst = document.getElementById('barChart');

    var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

    var svgWidth = 50, svgHeight = 200, barPadding = 5;
    var barWidth = svgWidth / dataset.length;

    var svg = d3.select(barChartConst)
        .append('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
    
    var barChart = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y", function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr("width", barWidth - barPadding)
        .attr("tranform", function (d, i) {
            var translate = [barWidth * i, 0];
            return "translate("+ translate +")";
        });
}
displayBarChart();
    /*async function barChart() {
       const response = await fetch('https://api.github.com/users/NdipoKeith/repos');
        if (!response.ok) {
            console.error('Error fetching data', response.statusText);
            return;
        }
        const data = await response.json();
        const dataArray = [];
        for (const repo of data) {
            const size = repo.size ? repo.size : 0;

            dataArray.push({
                name: repo.name,
                size
            });
        
        }
        barChartConst.textContent = dataArray;
        /*
        const svg = d3.select('barChart')
            .append('svg')
            .attr('width', 100)
            .attr('height', 50);
        
        const xScale = d3.scaleBand()
            .domain(dataArray.map(d => d.name))
            .range([0, svg.attr('width')])
            .padding(0.5);
        
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataArray, d => d.size)])
            .range([svg.attr('height'), 0]);

        svg.selectAll('rect')
            .data(dataArray)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.name))
            .attr('y', d => yScale(d.size))
            .attr('height', d => yScale(0) - yScale(d.size))
            .attr('fill', d => d3.hsl(d.size * 0.7, 0.7, 0.5));
        
        svg.append('g')
            .attr('transform', `translate(0, ${svg.attr('height')})`)
            .call(d3.axisBottom(xScale));
        svg.append('g')
            .call(d3.axisLeft(yScale));
    }
    barChart();
}*/