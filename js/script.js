const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('exampleModalLabel');
function handleSumbit (e){
    e.preventDefault();
    if( product2.value === product3.value && '' === product3.value ){

    }
    else if ( product1.value === product2.value || product1.value === product3.value || product3.value === product2.value ) {
        modalContent.innerHTML = '<div class="alert alert-danger">Votes for duplicate products will not be considered!</div>';
        modalTitle.innerHTML = 'Warning';
        myModal.show();
        return;
    }
    else if ( select1.selectedIndex === select2.selectedIndex || select1.selectedIndex === select3.selectedIndex || select3.selectedIndex === select2.selectedIndex ) {
        modalContent.innerHTML = '<div class="alert alert-danger">Votes for the same category wont count!</div>';
        modalTitle.innerHTML = 'Warning';
        myModal.show();
        return;
    }
    modalContent.innerHTML = '<div class="alert alert-success">Thanks for your nomination!</div>';
    modalTitle.innerHTML = 'Success';
    myModal.show();
}

function makeRequiredIfNotEmpty(input){
    return function(e){
        if(e.target.value !== ''){
            input.required = true;
        }else{
            input.required = false;
        }
    }
}

const form = document.getElementById("productsForm");
form.addEventListener("submit", handleSumbit);
select2.addEventListener('change', makeRequiredIfNotEmpty(product2));
select3.addEventListener('change', makeRequiredIfNotEmpty(product3));