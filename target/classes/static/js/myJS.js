const productList = [];
const globalCategoryList =[];
let filteredProductList = [];

const setCategory = (key, value) => {

    localStorage.setItem("searchStringArray", "");
    localStorage.setItem("category", "");

    localStorage.setItem(key, "");
    localStorage.setItem(key, value);

}

const getCategory = () => {

    return localStorage.getItem("category");

}

const getSearchStringArray = () => {

    let searchString = localStorage.getItem("searchStringArray");
    const searchCategoryArray = [];
    // JSON.parse(searchString);

    if (searchString != null && searchString != "") {
        console.log("I'm in JSON");
        console.log("Something JSON " + JSON.parse(searchString));
        return JSON.parse(searchString);
    }

    return searchCategoryArray;

}






