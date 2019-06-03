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
      setTimeout(()=>{
        this.budgetFeedback.classList.remove("showItem");
      },1500);
    }
  }
  
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

