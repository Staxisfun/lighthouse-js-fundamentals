const stations = [
  ['Big Bear Donair', 10, 'restraunt'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Mose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restraunt'],
]

//Good stations have at least 20 capacity
//Stations can be schools OR Community centres

function chooseStations (stations) {
  const goodStations = []
  
  
  for (const station of stations) {
    const capacity = station[1]
   
    if (capacity >= 20) {
  
      const type = station[2]
   
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0])
}
} 
}
  return goodStations
}
  
console.log(chooseStations(stations))   

