function chocolateFeast(n, c, m) {
    // Write your code here


let choc = Math.floor(n / c);
let eaten = choc;


    while ((choc / m) >= 1) {
        let wrap = Math.floor(choc / m);
        eaten += wrap;
        choc = wrap + (choc % m);
    }


    return eaten;


}
