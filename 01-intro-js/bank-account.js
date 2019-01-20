// function getNewBankAccount(creditLimit) {

var balance = 0;
function getNewBankAccount() {
    return {
        balance: balance,
        deposit: function(amount){
            this.balance = this.balance + amount
        },
    
        widthraw: function(money){
         //  if(money>balance){money = 0;}
            
            this.balance = this.balance - money
        }
    }
} 



bbb1  = getNewBankAccount().deposit(100);
console.log(bbb1);
module.exports = getNewBankAccount;