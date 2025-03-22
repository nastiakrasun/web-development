function calculateEmissions() {
    let coal = parseFloat(document.getElementById("coal").value);
    let mazut = parseFloat(document.getElementById("mazut").value);
    let gas = parseFloat(document.getElementById("gas").value);
    
    // Фіктивні коефіцієнти викидів для прикладу
    const emissionFactorCoal = 0.15; // Викиди від вугілля (умовні значення)
    const emissionFactorMazut = 0.10; // Викиди від мазуту
    const emissionFactorGas = 0.05; // Викиди від газу
    
    let emissionsCoal = coal * emissionFactorCoal;
    let emissionsMazut = mazut * emissionFactorMazut;
    let emissionsGas = gas * emissionFactorGas;
    
    let totalEmissions = emissionsCoal + emissionsMazut + emissionsGas;
    
    document.getElementById("result").innerText = `Загальні викиди: ${totalEmissions.toFixed(2)} тонн`;
}