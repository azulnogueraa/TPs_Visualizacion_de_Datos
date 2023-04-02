d3.csv('astronautas.csv', d3.autoType).then(data => {
  
    const colorScale = d3.scaleOrdinal()
    .domain(["masculino", "femenino"])
    .range(["#03adfc", "#fc03d7"]);

    let chart = Plot.plot({
        marks: [
            Plot.dot(data, 
                Plot.stackY2({
                x: 'edad_mision',
                y: d => d.genero === "masculino" ? 1 : d.genero === "femenino" ? -1 : 0,
                fill: d => colorScale(d.genero),
                size: 10,
            })),
            Plot.ruleY([0])
        ],
        width: 1200,
        height: 600,
        x: {
        label: "Edad →",
        nice: true,
        labelAnchor: 'right',
        labelOffset: 30,
        tickSize: 0,
        ticks: 5,
        },
        y: {
        grid: true,
        nice: true,
        label: "← Femenino · Masculino →",
        labelAnchor: "center",
        tickFormat: Math.abs,
        tickSize: 0,
        ticks: 10,
        },
    })
    d3.select('#chart').append(() => chart)
  })