class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  // submit budget method
  submitBudgetForm(){
      const valueInput = this.budgetInput.value;
      if( valueInput === ""|| valueInput < 0){
        this.budgetFeedback.classList.add("showItem");
        this.budgetFeedback.innerHTML = `<p>Insert a non zero and positive value</p>`;
        // it is need to explicit point "this" that after been called refer to windows
        // global Object
        const self = this;
        setTimeout(()=>{
          self.budgetFeedback.classList.remove("showItem");
        },2000);

      }else{
        this.budgetAmount.textContent = valueInput;
        this.budgetInput.value = '';
        this.showBalance();
      }
  }
  //show balance
  showBalance(){
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent)-expense;
    this.balanceAmount.textContent = total;
    if(total < 0){
      this.balance.classList.remove('showGreen','showBlack');
      this.balance.classList.add('showred');
    } else  if(total === 0){
      this.balance.classList.remove('showred','showGreen');
      this.balance.classList.add('showBlack');
    }
  }
  totalExpense(){
    let total =  400;
    return total;
  }
  // total expense
/*   submitExpenseForm(){
        const expenseInput = this.expenseInput.value;
        if( expenseInput === ""|| expenseInput < 0){
          this.expenseFeedback.classList.add("showItem");
          this.expenseFeedback.innerHTML = `<p>Insert a non zero and positive value</p>`;
          // it is need to explicit point "this" that after been called refer to windows
          // global Object
          const self = this;
          setTimeout(()=>{
            self.expenseFeedback.classList.remove("showItem");
          },2000);

        }else{
          this.expenseFeedback.value = expenseInput;
          this.expenseInput.value= ''; 
        }
  } */

  
}  



function eventListenters(){
    
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

// instance of UI class
  const ui = new UI();
  budgetForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    ui.submitBudgetForm();
  });

  expenseForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  });
  expenseList.addEventListener('click',()=>{
  });

}

document.addEventListener('DOMContentLoaded', (e)=>{
  eventListenters();
});

