let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
document.getElementById("balance").innerText = balance;

function updateBalance(amount) {
    balance += amount;
    localStorage.setItem("balance", balance);
    document.getElementById("balance").innerText = balance;
}

function watchAd() {
    window.open("https://www.youradurl.com", "_blank");
    alert("Ad watched! You earned 5 coins.");
    updateBalance(5);
}

function playGame() {
    window.open("https://www.yourgameurl.com", "_blank");
    alert("Game played! You earned 5 coins.");
    updateBalance(5);
}

function completeSurvey() {
    window.open("https://www.youtube.com/@yourchannel", "_blank");
    alert("Subscribe to the channel and take a screenshot for verification.");
}

function withdraw() {
    if (balance >= 15000) {
        alert("Withdrawal request sent. Processing...");
        document.getElementById("withdrawal-status").innerText = "Pending";
        localStorage.setItem("withdrawalStatus", "Pending");
    } else {
        alert("You need at least 15,000 coins to withdraw.");
    }
}

function openSettings() {
    window.location.href = "settings.html";
}
