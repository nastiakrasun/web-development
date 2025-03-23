function calculateProfit() {
    let P = parseFloat(document.getElementById("power").value);
    let sigma = parseFloat(document.getElementById("sigma").value);
    let V = parseFloat(document.getElementById("price").value);
    
    let deltaP1 = (sigma === 1) ? 0.2 : 0.68;
    let deltaP2 = 1 - deltaP1;
    
    let W1 = P * 24 * deltaP1;
    let W2 = P * 24 * deltaP2;
    
    let P1 = W1 * V;
    let S1 = W2 * V;
    
    let profit = P1 - S1;
    
    document.getElementById("result").innerHTML = `Очікуваний прибуток: ${profit.toFixed(2)} тис. грн`;
}
