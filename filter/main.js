function search() {
  const searchbox = document.getElementById("search-bar").value.toUpperCase();
  const products = document.querySelectorAll(".product");

  for (let i = 0; i < products.length; i++) {
    let match = products[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        products[i].style.display = "";   
      } else {
        products[i].style.display = "none";
      }
    }
  }
}
