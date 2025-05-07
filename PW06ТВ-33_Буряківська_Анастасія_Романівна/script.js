document.getElementById('loadForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const P = parseFloat(document.getElementById('P').value);
    const kz = parseFloat(document.getElementById('kz').value);
    const tgf = parseFloat(document.getElementById('tgf').value);
    const n = parseInt(document.getElementById('n').value);
  
    // Активна потужність одного цеху
    const P_цех = P * kz;
    const Q_цех = P_цех * tgf;
    const S_цех = Math.sqrt(P_цех ** 2 + Q_цех ** 2);
  
    // Сумарна потужність трьох однакових цехів
    const P_total = P_цех * n;
    const Q_total = Q_цех * n;
    const S_total = Math.sqrt(P_total ** 2 + Q_total ** 2);
  
    document.getElementById('result').innerHTML = `
      <h2>Результати розрахунку</h2>
      <p>Сумарна активна потужність: <strong>${P_total.toFixed(2)} кВт</strong></p>
      <p>Сумарна реактивна потужність: <strong>${Q_total.toFixed(2)} квар</strong></p>
      <p>Сумарна повна потужність: <strong>${S_total.toFixed(2)} кВА</strong></p>
    `;
  });
  