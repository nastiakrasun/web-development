function calculateReliability() {
    // Частота відмов одноколової системи
    const omegaOC = 0.295; // рік^-1

    // Середня тривалість відновлення
    const tVOC = 10.7; // годин

    // Коєфіцієнт аварійного простою одноколової системи
    const kAOC = (omegaOC * tVOC) / 8760; // 8760 годин на рік

    // Коєфіцієнт планового простою одноколової системи
    const kpMax = 43; // годин
    const kPOC = 1.2 * kpMax / 8760;

    // Частота відмов двох кіл двоколової системи
    const omegaDK = 2 * omegaOC * (kAOC + kPOC);

    // Частота відмов двоколової системи з секційним вимикачем
    const omegaDS = omegaDK + 0.02; // 0.02 рік^-1 - секційний вимикач

    const resultText = `
        Частота відмов одноколової системи: ${omegaOC.toFixed(3)} рік⁻¹<br>
        Частота відмов двоколової системи: ${omegaDS.toFixed(4)} рік⁻¹<br>
        Висновок: Надійність двоколової системи вища, ніж одноколової.
    `;

    document.getElementById("reliabilityResult").innerHTML = resultText;
}

function calculateLosses() {
    const zAvar = parseFloat(document.getElementById("zAvar").value);
    const zPlan = parseFloat(document.getElementById("zPlan").value);

    // Дано для аварійного недопостачання
    const omega = 0.01; // рік^-1
    const tV = 45 * 10 ** -3; // року
    const PM = 5.12 * 10 ** 3; // кВт
    const TM = 6451; // годин

    const MWNedA = omega * tV * PM * TM; // кВт·год

    // Для планового недопостачання
    const kP = 4 * 10 ** -3;
    const MWNedP = kP * PM * TM; // кВт·год

    // Загальні збитки
    const losses = zAvar * MWNedA + zPlan * MWNedP;

    const resultText = `
        Збитки при аварійному недопостачанні: ${(zAvar * MWNedA).toFixed(2)} грн<br>
        Збитки при плановому недопостачанні: ${(zPlan * MWNedP).toFixed(2)} грн<br>
        Загальні збитки: ${losses.toFixed(2)} грн
    `;

    document.getElementById("lossesResult").innerHTML = resultText;
}