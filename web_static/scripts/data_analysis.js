/*const fs = require('fs');
fs.readFile('stats/data.json', 'utf-8', (err, data) => {
  // Handle errors within the callback
  if (err) {
    console.error(err);
    return; // Exit the callback  error occurs
  }*/
async function displayBarChart() {
  let data = fetch('scripts/stats/data.json');
  const barChart = document.getElementById("barChart1");

  try {
    const response = await fetch('scripts/stats/data.json')
    const parsedData = await response.json();

    const repositorySize = [];
    const repositoryNumber = [];
    const repositoryName = [];

    // Process the data here
    for (const repository of parsedData) { 
      repositorySize.push(repository["size"]);
      repositoryNumber.push(repository["name"]);
      if (!repositoryName.includes(repository["name"])) {
        repositoryName.push(repository["name"]);
      }
    }

    const uniqueRepoNames = Array.from(new Set(repositoryName)); // Eliminate duplicates

    console.log("no of repos: ", uniqueRepoNames.length);
    console.log("size of repos: ", repositorySize);
    console.log("repo names: ", uniqueRepoNames);


    const svg = d3.select(barChart)
    .append('svg')
    .attr("width", 200)
    .attr("height", 200)
  
    
    const margin = { top: 10, right: 0, bottom: 35, left: 5 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    
    const xScale = d3.scaleBand()
        .domain(uniqueRepoNames)
        .range([0, width])
        .padding(0.8);
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(repositorySize)])
        .range([height, 0]);
    const colour = d3.scaleLinear()
        .domain([0, d3.max(repositorySize)])
        .range(["red", "blue", "green"]); 


    svg.selectAll("rect")
        .data(repositorySize)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(uniqueRepoNames[i]) + margin.left)
        .attr("y", d => yScale(d))
        .attr("width", 27)
        // .attr("width", xScale.bandwidth())
        .attr("height", d => (height - yScale(d)))
        .attr("fill", function(d) { return colour(d); })
        .attr("opacity", 0.8);

    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale)
            .tickFormat(d => d.substring(0, 10) + (d.length > 10 ? "..." : ""))
            .tickSize(6))
        .selectAll("text")
            .attr("transform", "rotate(-45)")
            .attr("dy", ".35em")
            .attr("text-anchor", "end");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 10)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Repository Size");
    
    // Add chart title and adjust placement
    svg.append("text")
        .attr("class", "chart-title") // Add class for styling
        .attr("x", width / 2)
        .attr("y", margin.top)
        .style("text-anchor", "middle")
        .attr("transform", `translate(100, 2)`)
        .text("Number of Repositories by Size");
    
  } catch (error) {
    console.error("Error parsing JSON data:", error);
  }
  console.log(d3.select('#barChart1').node());

}
window.onload = displayBarChart;
