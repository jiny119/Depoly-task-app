let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
let referrals = localStorage.getItem("referrals") ? parseInt(localStorage.getItem("referrals")) : 0;
let clicks = localStorage.getItem("clicks") ? parseInt(localStorage.getItem("clicks")) : 0;
let withdrawalStatus = localStorage.getItem("withdrawalStatus") || "None";

document.getElementById("balance").innerText = balance;
document.getElementById("withdrawal-status").innerText = "Withdrawal Status: " + withdrawalStatus;

function earnCoins(amount) {
    balance += amount;
    localStorage.setItem("balance", balance);
    document.getElementById("balance").innerText = balance;
    alert("You earned " + amount + " coins!");
}

function increaseClicks() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
}

function watchAd() {
    window.open("https://www.youradurl.com", "_blank");
    earnCoins(5);
    increaseClicks();
}

function playGame() {
    window.open("https://www.yourgameurl.com", "_blank");
    earnCoins(5);
    increaseClicks();
}

function installApp() {
    window.open("https://www.yourappurl.com", "_blank");
    earnCoins(5);
    increaseClicks();
}

function completeSurvey() {
    let confirmSubscribe = confirm("Please subscribe to our YouTube channel before continuing!");
    if (confirmSubscribe) {
        window.open("https://www.youtube.com/@ToonCraftStudio-f7o", "_blank");
        earnCoins(5);
        increaseClicks();
    }
}

function withdraw() {
    if (balance >= 15000) {
        if (referrals >= 10 && clicks >= 5) {
            let method = prompt("Choose Withdrawal Method: JazzCash, EasyPaisa, Payoneer, PayPal");
            if (method) {
                alert("Withdrawal Request Submitted. Waiting for Approval.");
                withdrawalStatus = "Pending";
                localStorage.setItem("withdrawalStatus", withdrawalStatus);
                document.getElementById("withdrawal-status").innerText = "Withdrawal Status: " + withdrawalStatus;
            }
        } else {
            alert("You need at least 10 referrals and 5 clicks to withdraw!");
        }
    } else {
        alert("You need at least 15000 coins to withdraw!");
    }
}

function approveWithdrawal() {
    if (withdrawalStatus === "Pending") {
        alert("Withdrawal Approved! Coins Deducted.");
        balance -= 15000;
        localStorage.setItem("balance", balance);
        document.getElementById("balance").innerText = balance;
        withdrawalStatus = "Approved";
        localStorage.setItem("withdrawalStatus", withdrawalStatus);
        document.getElementById("withdrawal-status").innerText = "Withdrawal Status: " + withdrawalStatus;
    } else {
        alert("No pending withdrawal request!");
    }
}

function openSettings() {
    window.location.href = "settings.html";
}

function changeTheme() {
    alert("Theme Changed!");
}

function toggleSound() {
    alert("Sound Toggled!");
}

function logout() {
    localStorage.clear();
    alert("Logged out!");
    window.location.href = "index.html";
}
