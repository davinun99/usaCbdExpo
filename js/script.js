function handleSumbit (e){
    e.preventDefault();
    const product1 = document.getElementById("product1");
    const product2 = document.getElementById("product2");
    const product3 = document.getElementById("product3");

    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    
    if ( product1.value === product2.value || product1.value === product3.value || product3.value === product2.value ) {
        alert("Votes for duplicate products will not be considered");
        return;
    }
    if ( select1.selectedIndex === select2.selectedIndex || select1.selectedIndex === select3.selectedIndex || select3.selectedIndex === select2.selectedIndex ) {
        alert("Votes for the same category wont count");
        return;
    }
    alert("Form valid!")
}
const form = document.getElementById("productsForm");
form.addEventListener("submit", handleSumbit);