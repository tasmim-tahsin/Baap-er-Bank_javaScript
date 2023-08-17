document.getElementById('btn-deposit').addEventListener('click',function(){
    // Deposit upgrade
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
 // deposit field empty

    depositField.value='';
    if(isNaN(newDepositAmount))
    {
        alert('Please input valid number');
        return;
    }

    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    

    const currentBalanceTotal=previousBalanceTotal+ newDepositAmount;
    const currentDepositTotal= previousDepositTotal+newDepositAmount;

    balanceTotalElement.innerText=currentBalanceTotal;
    depositTotalElement.innerText=currentDepositTotal;
    


   

})