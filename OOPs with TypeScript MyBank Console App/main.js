var MyBank;
(function (MyBank) {
    var BankAccount = /** @class */ (function () {
        function BankAccount() {
            this._accountBalance = 100;
        }
        Object.defineProperty(BankAccount.prototype, "accountBalance", {
            get: function () {
                return this._accountBalance;
            },
            enumerable: false,
            configurable: true
        });
        BankAccount.prototype.debit = function (amount) {
            var statement = "Sorry, you have insufficient balance";
            if (amount > 0) {
                statement = "The amount you entered is wrong!";
                if (this._accountBalance >= amount) {
                    this._accountBalance -= amount;
                    statement = "Transaction successful! New account balance is ".concat(this._accountBalance);
                }
                else {
                    statement = "You don't have enough money to do this transaction";
                }
            }
            return statement;
        };
        BankAccount.prototype.credit = function (amount) {
            var statement = "";
            if (amount > 0) {
                this._accountBalance += amount;
                statement = "Transaction successful! New account balance is ".concat(this._accountBalance);
            }
            else {
                statement = "The amount you entered is wrong!";
            }
            return statement;
        };
        return BankAccount;
    }());
    MyBank.BankAccount = BankAccount;
    var Customer = /** @class */ (function () {
        function Customer(firstName, lastName, gender, age, mobileNumber) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.age = age;
            this.mobileNumber = mobileNumber;
            this.bankAccount = new BankAccount();
        }
        Customer.prototype.customerInfo = function () {
            return "Name: ".concat(this.firstName, " ").concat(this.lastName, "\nAge: ").concat(this.age, "\nGender: ").concat(this.gender, "\nMobile: ").concat(this.mobileNumber, "\nAccount Balance: ").concat(this.bankAccount.accountBalance);
        };
        return Customer;
    }());
    MyBank.Customer = Customer;
})(MyBank || (MyBank = {}));
// Usage example
var customer = new MyBank.Customer("Anas", "Nadeem", "Male", 21, "1234567890");
console.log(customer.customerInfo());
console.log(customer.bankAccount.debit(50));
console.log(customer.bankAccount.credit(200));
