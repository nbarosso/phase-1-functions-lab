// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
    return Math.abs(pickupLocation - 42) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    const realDistance = Math.abs(start - destination) * 264;
    const fareDistance = realDistance - 400
    if(realDistance <= 400) {
        return 0
    }
    else if(realDistance > 400 && realDistance < 2000) {
        return fareDistance * .02
    }
    else if(realDistance > 2000 && realDistance < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}
