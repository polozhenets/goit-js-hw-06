const liElemsCategories = document.querySelectorAll(".item");
const numberOfCategories = liElemsCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);
let title = "";
let lists;
let items;

for (const elem of liElemsCategories) {
    title = elem.firstElementChild;
    console.log(`Category: ${title.innerHTML}`);

    lists=title.nextElementSibling;
    
    items = lists.children;
    console.log(`Elements: ${items.length}`);
}


