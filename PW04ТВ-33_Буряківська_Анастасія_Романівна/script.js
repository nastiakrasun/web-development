const zValues = {
    normal: 0.233,
    minimum: 0.423,
    emergency: 0.679
  };
  
  document.getElementById("mode").addEventListener("change", () => {
    const mode = document.getElementById("mode").value;
    document.getElementById("z").value = zValues[mode];
  });
  
  function calculate() {
    const voltage = parseFloat(document.getElementById("voltage").value); // кВ
    const z = parseFloat(document.getElementById("z").value); // Ом
  
    if (isNaN(voltage) || isNaN(z) || z === 0) {
      alert("Будь ласка, введіть коректні дані.");
      return;
    }
  
    const U = voltage * 1000;
  
    const i3ph = +(U / (Math.sqrt(3) * z) / 1000).toFixed(2);
    const i1ph = +(U / z / 1000).toFixed(2);
  
    const thermalLimit = 20; // кА
    const dynamicLimit = 50; // кА
  
    document.getElementById("i3ph").textContent = i3ph;
    document.getElementById("i1ph").textContent = i1ph;
  
    document.getElementById("thermal").textContent = i3ph < thermalLimit ? "В межах норми" : "Перевищено!";
    document.getElementById("dynamic").textContent = i3ph * 2.5 < dynamicLimit ? "В межах норми" : "Перевищено!";
  }
   