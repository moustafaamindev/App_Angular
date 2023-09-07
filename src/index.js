// start product

let all = document.getElementById("Best-Sellers"),
  newAriv = document.getElementById("New-Arrivals"),
  hotSale = document.getElementById("Hot-Sales"),
  newArrivals1 = document.querySelector(".new-arrivals-1"),
  newArrivals2 = document.querySelector(".new-arrivals-2"),
  newArrivals3 = document.querySelector(".new-arrivals-3"),
  newArrivals4 = document.querySelector(".new-arrivals-4"),
  hotSales1 = document.querySelector(".hot-sales-1"),
  hotSales2 = document.querySelector(".hot-sales-2"),
  hotSales3 = document.querySelector(".hot-sales-3"),
  hotSales4 = document.querySelector(".hot-sales-4");

function showall() {
  newArrivals1.classList.remove("remove");
  newArrivals2.classList.remove("remove");
  newArrivals3.classList.remove("remove");
  newArrivals4.classList.remove("remove");
  hotSales1.classList.remove("remove");
  hotSales2.classList.remove("remove");
  hotSales3.classList.remove("remove");
  hotSales4.classList.remove("remove");
  all.classList.add("active-btn");
  newAriv.classList.remove("active-btn");
  hotSale.classList.remove("active-btn");
}
function showsale() {
  hotSales1.classList.add("remove");
  hotSales2.classList.add("remove");
  hotSales3.classList.add("remove");
  hotSales4.classList.add("remove");
  newArrivals1.classList.add("show");
  newArrivals2.classList.add("show");
  newArrivals3.classList.add("show");
  newArrivals4.classList.add("show");
  hotSales1.classList.remove("show");
  hotSales2.classList.remove("show");
  hotSales3.classList.remove("show");
  hotSales4.classList.remove("show");
  newAriv.classList.add("active-btn");
  all.classList.remove("active-btn");
  hotSale.classList.remove("active-btn");
}
function showarrive() {
  hotSales1.classList.add("show");
  hotSales2.classList.add("show");
  hotSales3.classList.add("show");
  hotSales4.classList.add("show");
  newArrivals1.classList.add("remove");
  newArrivals2.classList.add("remove");
  newArrivals3.classList.add("remove");
  newArrivals4.classList.add("remove");
  newArrivals1.classList.remove("show");
  newArrivals2.classList.remove("show");
  newArrivals3.classList.remove("show");
  newArrivals4.classList.remove("show");
  hotSale.classList.add("active-btn");
  newAriv.classList.remove("active-btn");
  all.classList.remove("active-btn");
}

all?.addEventListener("click", showall);
newAriv?.addEventListener("click", showsale);
hotSale?.addEventListener("click", showarrive);

// end product
