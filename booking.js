    function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');
    var dest = document.getElementById('dest');
    var date = document.getElementById('date');
    var number = document.getElementById('number');
    var budget = document.getElementById('budget');



    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || gender.value === '' || dest.value === ''|| date.value === ''||ppl.value === '' || number.value === '' || budget.value === ''){
        danger.style.display = 'block';
        alert("please fill in all the fields.")
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            gender.value = '';
            dest.value = '';
            date.value = '';
            ppl.value = '';
            number.value = '';
            budget.value = '';

        }, 2000);

        success.style.display = 'block';
        alert("your appointment is successfully registered");
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}
