let coins = 0;

function updateCoins() {
    document.getElementById("coins").innerText = coins;
}

function watchAd() {
    alert("Ad watched! You earned 5 coins.");
    coins += 5;
    updateCoins();
}

function playGame() {
    let games = [
        "https://www.crazygames.com/t/bike",
        "https://www.poki.com/en/g/rally-champion",
        "https://www.miniclip.com/games/basketball-stars/en/",
        "https://www.y8.com/games/moto_x3m",
        "https://www.crazygames.com/game/real-city-driving-2",
        "https://www.poki.com/en/g/bullet-force",
        "https://www.y8.com/games/super_star_car"
    ];
    let randomGame = games[Math.floor(Math.random() * games.length)];
    window.open(randomGame, "_blank");
    alert("Game played! You earned 5 coins.");
    coins += 5;
    updateCoins();
}

function completeSurvey() {
    let surveys = [
        "https://youtube.com/yourchannel",
        "https://youtu.be/NZ-mcJyqdBs",
        "https://yourbloggerlink.com"
    ];
    let randomSurvey = surveys[Math.floor(Math.random() * surveys.length)];
    window.open(randomSurvey, "_blank");
    alert("Survey completed! You earned 5 coins.");
    coins += 5;
    updateCoins();
}

function installApp() {
    alert("App installed! You earned 5 coins.");
    coins += 5;
    updateCoins();
}

function withdraw() {
    if (coins >= 15000) {
        alert("Withdrawal request sent! Processing within 48 hours.");
    } else {
        alert("You need at least 15,000 coins to withdraw!");
    }
}

function logout() {
    alert("You have been logged out!");
}

function openPage(page) {
    window.location.href = page;
}
