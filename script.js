const fetchCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data.data));
}
// fetchCategories();

const showData = data => {
    const categoriesContainer = document.getElementById("categories-container");
    data.news_category.forEach(singleCategory => {
        categoriesContainer.innerHTML += `<a class=" hover:underline pointer text-lg" onClick="categoryNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`
    });
};

const categoryNews = (category_id , category_name) =>{
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => showAllnews(data , category_name));
}
const showAllnews = (data , category_name) =>{
    document.getElementById("news-count").innerText = data.data.length;
    document.getElementById("category-name").innerText = category_name;
    
}