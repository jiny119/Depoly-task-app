function changeTheme() {
    alert("Theme change coming soon!");
}

function toggleSound() {
    alert("Sound toggled!");
}

function logout() {
    alert("Logging out...");
    localStorage.clear();
    window.location.href = "index.html";
}

function approveWithdrawal() {
    document.getElementById("withdrawal-status").innerText = "Approved";
    localStorage.setItem("withdrawalStatus", "Approved");
    alert("Withdrawal approved!");
}

function goBack() {
    window.location.href = "index.html";
}
