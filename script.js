
document.getElementById('token-address').addEventListener('click', function() {
    const tokenAddress = this.innerText;
    navigator.clipboard.writeText(tokenAddress).then(() => {
        alert('Contract address copied to clipboard!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});
