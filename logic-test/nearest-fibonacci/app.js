function nearestFib(numArr) {
    let totalNum = 0;

    // sum array
    for (let num of numArr) {
        totalNum += num;
    }

    // fibonacci sequence
    let first = 0;
    let second = 1;
    let third = first + second;
    let nearFib = 0;

    while (third <= totalNum) {
        first = second;
        second = third;
        third = first + second
    }

    // check nearest fibonacci & return how near
    if (Math.abs(totalNum - third) < Math.abs(totalNum - second)) {
        return Math.abs(totalNum - third);
    } else {
        return Math.abs(totalNum - second);
    }
}