document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField= document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    withdrawField.value='';
    if(isNaN(newWithdrawAmount))
    {
        alert('Please input valid number');
        return;
    }

    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    withdrawField.value='';
    
    if(newWithdrawAmount>previousBalanceTotal)
    {
        alert('Not enough balance!!');
        return;
    }

    const currentBalanceTotal=previousBalanceTotal-newWithdrawAmount;

    const currentWithdrawTotal= previousWithdrawTotal+newWithdrawAmount;

    withdrawTotalElement.innerText=currentWithdrawTotal;
    balanceTotalElement.innerText=currentBalanceTotal;

    
})