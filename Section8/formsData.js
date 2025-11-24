let form = document.querySelector('#form');
const onSubmitForm = function (evt) {

    evt.preventDefault();
    const ip = document.getElementById('inputId').value;
    const select = document.getElementById('selectId').value;
    const check = document.getElementById('checkboxId').checked;

    console.log(ip, select, check);
}

const onSubmitForm2 = function (evt) {

    evt.preventDefault();
    const formData=new FormData(form);
    //USE NAME PROPERTY TO FETCH
    console.log(formData.get('inputId'));
    console.log(formData.get('selectId'));
    console.log(formData.get('checkboxId'));

}
form.addEventListener('submit', onSubmitForm2)