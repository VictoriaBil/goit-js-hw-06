const numOfcategories = document.querySelectorAll(".item").length;
console.log("Number of categories:", numOfcategories);
// const nameOfcategory =
//   document.querySelector(".item").firstElementChild.textContent;
// const numOfListItem =
//   document.querySelector("h2").nextElementSibling.childElementCount;
// console.log("Category:", nameOfcategory);
// console.log("Elements:", numOfListItem);
const titles = document.querySelectorAll(".item h2");
// console.log(titles);
const titleName = titles.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.childElementCount);
});
