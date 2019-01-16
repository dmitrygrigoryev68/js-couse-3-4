// function getNewBankAccount(creditLimit) {
function getNewBankAccount() {
    return {
        balance: 0,
        deposit: function(amount){
            // deposit money here
        },
    
        widthraw: function(money){
            // widthraw money here
        }
    }
} 

module.exports = getNewBankAccount;