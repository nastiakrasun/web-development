#include <iostream>
#include <iomanip> // Для форматованого виведення

using namespace std;

// Завдання 1: Калькулятор для розрахунку складу сухої та горючої маси палива та нижчої теплоти згоряння
void calculateFuelComposition() {
    // Введення значень компонентів палива
    double H_P = 3.7, C_P = 50.6, S_P = 4.00, N_P = 1.10, O_P = 8.00, W_P = 13.0, A_P = 19.6;
    
    // Перевірка складу (підсумок всіх компонентів має бути 100%)
    double totalComposition = H_P + C_P + S_P + N_P + O_P + W_P + A_P;
    cout << "ПЕРЕВІРКА: НС + СС + SC + NC + ОС + АС = " << fixed << setprecision(2)
         << H_P + C_P + S_P + N_P + O_P + A_P << " = 100%" << endl;

    // Розрахунок складу горючої маси (ГМ) за допомогою коефіцієнтів
    double KRG = 3.04; // Коефіцієнт горючої маси
    double H_G = H_P * KRG;
    double C_G = C_P * KRG;
    double S_G = S_P * KRG;
    double N_G = N_P * KRG;
    double O_G = O_P * KRG;
    
    // Виведення результатів
    cout << "НГ = " << H_G << endl;
    cout << "СГ = " << C_G << endl;
    cout << "SГ = " << S_G << endl;
    cout << "NГ = " << N_G << endl;
    cout << "ОГ = " << O_G << endl;
}

// Завдання 2: Калькулятор для перерахунку елементарного складу та нижчої теплоти згоряння мазуту на робочу масу
void calculateFuelBurning() {
    // Введення параметрів для складу горючої маси мазуту
    double carbon, hydrogen, oxygen, sulfur, lowerHeatingValue, moistureContent, ashContent, vanadium;
    
    cout << "Введіть вуглець (%): ";
    cin >> carbon;
    cout << "Введіть водень (%): ";
    cin >> hydrogen;
    cout << "Введіть кисень (%): ";
    cin >> oxygen;
    cout << "Введіть сірку (%): ";
    cin >> sulfur;
    cout << "Введіть нижчу теплоту згоряння (МДж/кг): ";
    cin >> lowerHeatingValue;
    cout << "Введіть вологість робочої маси (%): ";
    cin >> moistureContent;
    cout << "Введіть зольність сухої маси (%): ";
    cin >> ashContent;
    cout << "Введіть вміст ванадію (мг/кг): ";
    cin >> vanadium;

    // Розрахунок маси горючої та робочої маси
    double dryMass = 100 - moistureContent - ashContent; // Суха маса палива
    double combustibleMass = carbon + hydrogen + oxygen + sulfur; // Горюча маса палива
    double totalMass = dryMass - ashContent;

    // Розрахунок елементарного складу на робочу масу
    double adjustedCarbon = carbon * (100 - moistureContent) / 100;
    double adjustedHydrogen = hydrogen * (100 - moistureContent) / 100;
    double adjustedOxygen = oxygen * (100 - moistureContent) / 100;
    double adjustedSulfur = sulfur * (100 - moistureContent) / 100;

    // Виведення результатів
    cout << "\nРозрахунок на робочу масу мазуту:\n";
    cout << "Вуглець: " << adjustedCarbon << "%" << endl;
    cout << "Водень: " << adjustedHydrogen << "%" << endl;
    cout << "Кисень: " << adjustedOxygen << "%" << endl;
    cout << "Сірка: " << adjustedSulfur << "%" << endl;
    cout << "Нижча теплота згоряння: " << lowerHeatingValue * (100 - moistureContent) / 100 << " МДж/кг" << endl;
}

int main() {
    // Виклик функцій
    cout << "Завдання 1: Розрахунок складу палива" << endl;
    calculateFuelComposition();

    cout << "\nЗавдання 2: Розрахунок елементарного складу мазуту" << endl;
    calculateFuelBurning();

    return 0;
}
