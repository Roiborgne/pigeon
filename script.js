let pigeonCount = 0;
let pigeonsPerClick = 1;
let upgrades = {
    1: { cost: 10, multiplier: 2 },
    2: { cost: 50, multiplier: 5 }
};

let goals = [
    { goal: 10, message: "Conquête de la Rue : Atteignez 100 pigeons pour contrôler le quartier." },
    { goal: 100, message: "Conquête du Quartier : Atteignez 10,000 pigeons pour conquérir la ville." },
    { goal: 10000, message: "Conquête de la Ville : Atteignez 1 milliard de pigeons pour dominer le monde !" },
    { goal: 1000000000, message: "Domination Mondiale : Conquête de l'Espace débloquée !" }
];

let currentGoalIndex = 0;

function clickPigeon() {
    pigeonCount += pigeonsPerClick;
    updateUI();
}

function buyUpgrade(upgradeId) {
    if (pigeonCount >= upgrades[upgradeId].cost) {
        pigeonCount -= upgrades[upgradeId].cost;
        pigeonsPerClick *= upgrades[upgradeId].multiplier;
        upgrades[upgradeId].cost *= 2; // Double le coût après chaque achat
        updateUI();
    }
}

function updateUI() {
    document.getElementById("pigeonCount").textContent = pigeonCount;

    // Mise à jour des coûts des améliorations
    for (let id in upgrades) {
        document.getElementById(`cost${id}`).textContent = upgrades[id].cost;
        document.getElementById(`upgrade${id}`).disabled = pigeonCount < upgrades[id].cost;
    }

    // Mise à jour des objectifs
    if (currentGoalIndex < goals.length && pigeonCount >= goals[currentGoalIndex].goal) {
        document.getElementById("goal").textContent = goals[currentGoalIndex].message;
        currentGoalIndex++;
    }
}
