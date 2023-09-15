
document.querySelector('button').addEventListener('click', () => {
            
    let salary = document.querySelector('#salario').value;
    
    let result = document.querySelector('.result')

    if(salary > 4664.68) {
        
        let irrf = (salary * 0.2750) - 869.36;
        let netSalary = salary - (salary * 0.2750 - 869.36)
        let percentIrrf = (irrf/salary) * 100
        
        result.innerHTML = `IRRF: ${irrf.toFixed(2)} R$ <br> <br>
        % IRRF: ${percentIrrf.toFixed(2)}%
        <br> <br> Salário Liquido: ${netSalary.toFixed(2)} R$`
    }
    else if (salary >= 3751.06 && salary <= 4664.68) {

        let irrf = (salary * 0.2250) - 636.13;
        let netSalary = salary - (salary * 0.2750 - 636.13)
        let percentIrrf = (irrf/salary) * 100
        
        result.innerHTML = `IRRF: ${irrf.toFixed(2)} R$ <br> <br> 
        % IRRF: ${percentIrrf.toFixed(2)}%
        <br> <br> Salário Liquido: ${netSalary.toFixed(2)} R$`
    }

    else if (salary >= 2826.66 && salary <= 3751.05) {

        let irrf = (salary * 0.15) - 354.80;
        let netSalary = salary - (salary * 0.15 - 354.80)
        let percentIrrf = (irrf/salary) * 100
        
        result.innerHTML = `IRRF: ${irrf.toFixed(2)} R$ <br> <br> 
        % IRRF: ${percentIrrf.toFixed(2)}%
        <br> <br> Salário Liquido: ${netSalary.toFixed(2)} R$`

    }

    else if (salary >= 2112.01 && salary <= 2826.66 ) {

        let irrf = (salary * 0.0750) - 142.80;
        let netSalary = salary - (salary * 0.0750 - 142.80)
        let percentIrrf = (irrf/salary) * 100
        
        result.innerHTML = `IRRF: ${irrf.toFixed(2)} R$ <br> <br> 
        % IRRF: ${percentIrrf.toFixed(2)}% 
        <br> <br> Salário Liquido: ${netSalary.toFixed(2)} R$`

    }

    else if (salary > 0 && salary <= 2826.66) {

        result.innerHTML = ` Salário Liquido: ${salary} R$`

    }

    else if(salary <= 0) {
        result.innerHTML = `Não é possível Calcular o salário`
    }


})