let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }
let homeLocation2 = { x: 7, y: 13 }

console.log(findClosestPoint(pizzaLocations, homeLocation)) // should return {x: 3, y: 1}
console.log(findClosestPoint(pizzaLocations, homeLocation2)) // should return {x: 6, y: 12}


function findClosestPoint(points, destinationPoint) {
    if(!points.length)
        return null;
    
    let min_dist = Number.MAX_VALUE;
    let min_point_i = -1;
    for(const i in points) {
        const distance = pointDist(points[i], destinationPoint);
        if(distance < min_dist) {
            min_dist = distance;
            min_point_i = i;
        }
    }
    console.log(min_point_i)
    return points[min_point_i];
}

function pointDist(point, destination) {
    return Math.abs(point.x - destination.x) 
        + Math.abs(point.y - destination.y);
}