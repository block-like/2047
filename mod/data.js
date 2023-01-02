const modData = {
    name: "2047", //Name of 2048 mod
    styleLimit: 2047, //Limit where tile-super is used instead
    tileFunction: (currentNumber) => { //Function to calculate next tile
        if (currentNumber == 1024) {
            return 2047
        } else if (currentNumber == 2047) {
            return 4096
        }
        return currentNumber*2
    }
}