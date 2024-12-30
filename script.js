// Example: Transaction Form Submission
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const assetName = document.getElementById('assetName').value;
    const amount = document.getElementById('amount').value;

    if (assetName && amount) {
        const transactionList = document.getElementById('transactionList');
        const newTransaction = document.createElement('div');
        newTransaction.classList.add('transaction');
        newTransaction.innerHTML = `<strong>${assetName}</strong>: $${amount}`;
        transactionList.appendChild(newTransaction);

        // Clear form inputs
        document.getElementById('assetName').value = '';
        document.getElementById('amount').value = '';
    }
});

// Example: Logout Function
function logout() {
    alert('You have logged out');
    window.location.href = 'index.html';
}

// Function to open the portfolio modal
function openPortfolioModal() {
    document.getElementById("portfolioModal").style.display = "block"; // Show the modal
}

// Function to close the portfolio modal
function closePortfolioModal() {
    document.getElementById("portfolioModal").style.display = "none"; // Hide the modal
}
    

