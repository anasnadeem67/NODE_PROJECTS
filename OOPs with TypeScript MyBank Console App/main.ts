namespace MyBank {
    export interface IBankAccount {
        debit(amount: number): string;
        credit(amount: number): string;
    }

    export class BankAccount implements IBankAccount {
        private _accountBalance: number;

        constructor() {
            this._accountBalance = 100;
        }

        public get accountBalance(): number {
            return this._accountBalance;
        }

        public debit(amount: number): string {
            let statement: string = "Sorry, you have insufficient balance";
            if (amount > 0) {
                statement = "The amount you entered is wrong!";
                if (this._accountBalance >= amount) {
                    this._accountBalance -= amount;
                    statement = `Transaction successful! New account balance is ${this._accountBalance}`;
                } else {
                    statement = "You don't have enough money to do this transaction";
                }
            }
            return statement;
        }

        public credit(amount: number): string {
            let statement: string = "";
            if (amount > 0) {
                this._accountBalance += amount;
                statement = `Transaction successful! New account balance is ${this._accountBalance}`;
            } else {
                statement = "The amount you entered is wrong!";
            }
            return statement;
        }
    }

    export class Customer {
        public firstName: string;
        public lastName: string;
        public gender: string;
        public age: number;
        public mobileNumber: string;
        public bankAccount: BankAccount;

        constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.age = age;
            this.mobileNumber = mobileNumber;
            this.bankAccount = new BankAccount();
        }

        public customerInfo(): string {
            return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}
Account Balance: ${this.bankAccount.accountBalance}`;
        }
    }
}

// Usage example
const customer = new MyBank.Customer("Anas", "Nadeem", "Male", 21, "1234567890");
console.log(customer.customerInfo());

console.log(customer.bankAccount.debit(50));
console.log(customer.bankAccount.credit(200));
