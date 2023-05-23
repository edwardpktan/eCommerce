// Start of Product List

// Product Controller

// development APIs
//const displayProductAPI = 'http://localhost:8080/eScriptCoder/allProduct';
//const findProductAPI = 'http://localhost:8080/eScriptCoder/';


// production APIs
const displayProductAPI = 'https://edwardecommerce.azurewebsites.net/eScriptCoder/allProduct';
const findProductAPI = 'https://edwardecommerce.azurewebsites.net/eScriptCoder/';

// const displayProductAPI = 'https://webdemoedward.azurewebsites.net/product/all';

const noOfProduct = productList.length;
//console.log("productList.length: " + noOfProduct);
const noOfProductPerPage = 12;
let currentPage;
let noOfPages;




function displayProduct() {
    //fetch data from database using the REST API endpoint from Spring Boot
    fetch(displayProductAPI)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log("2. receive data")
            console.log(data);

            data.forEach(function (product) {
                const productObj = {
                    id: product.id,
                    productName: product.productName,
                    description: product.description,
                    inventory: product.inventory,
                    price: product.price,
                    quantity: product.quantity,
                    product_url: product.product_url,
                    category_Id: product.category_id,
                };

                console.log("productObj.product_url : " + productObj.product_url);
                productList.push(productObj);
            });

            productList.sort((a,b)=>{
                return b.id- a.id;

            });

            displayProductList(0, 0);
        })
        .catch(function (error) {
            console.log(error);
        });
}



const createProductHtml = (filteredProductArray, pageStart) => {
    console.log("Create Product List Html");
    let display = "";

    console.log(`filteredProductArray.length : ${filteredProductArray.length}`);
    for (let i = 0; i < filteredProductArray.length; i++) {

        display += `
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
            <div class="card img-fluid" style="width: 14rem;" id="productCard">
            <a id="item${i + 1}" href="#" data-bs-toggle="modal" data-bs-target="#othersModal" onClick="displayDetails(${i + pageStart})">
                <img src=${filteredProductArray[i].product_url} class="card-img-top" alt="image">
                    <div class="card-body">
                        <h6 class="card-title">${filteredProductArray[i].productName}</h6>
                        <h6 class="card-title">$${filteredProductArray[i].price}</h6>
                    </div>
            </a>
            </div>
        </div>
        `
    }

    document.querySelector("#row").innerHTML = display;

} //End of createProductHtml function

//function displayDetails(index) {
//    //When user clicks on any "More" button, the details of the selected product will be displayed
//    document.querySelector("#modalName").innerHTML = filteredProductList[index].productName;
//    document.querySelector("#modalDescription").innerHTML = filteredProductList[index].description;
//    document.querySelector("#modalPrice").innerHTML = filteredProductList[index].price;
//    document.querySelector("#modalImg").src = filteredProductList[index].imageURL;
//}




const getPrevPage = () => {
    console.log("prev");
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    console.log("currentPage : " + currentPage);
    let pageStart = 0;
    let pageEnd = 0;
    pageEnd = currentPage * noOfProductPerPage;
    pageStart = pageEnd - noOfProductPerPage;
    console.log("pageStart : " + pageStart);
    console.log("pageEnd : " + pageEnd);
    displayProductList(pageStart, pageEnd);
}

const getNextPage = () => {
    console.log("next");
    console.log("currentPage : " + currentPage);
    console.log("noOfPages : " + noOfPages);
    currentPage = currentPage + 1;
    if (currentPage > noOfPages) {
        currentPage = noOfPages;
    }
    console.log("currentPage : " + currentPage);
    let pageStart = 0;
    let pageEnd = 0;
    pageEnd = currentPage * noOfProductPerPage;
    pageStart = pageEnd - noOfProductPerPage;
    console.log("pageStart : " + pageStart);
    console.log("pageEnd : " + pageEnd);
    displayProductList(pageStart, pageEnd);

}

const getPage = (page) => {
    console.log("Page : " + page);
    currentPage = page;
    console.log("currentPage : " + currentPage);
    let pageStart = 0;
    let pageEnd = 0;
    pageEnd = page * noOfProductPerPage;
    pageStart = pageEnd - noOfProductPerPage;
    console.log("pageStart : " + pageStart);
    console.log("pageEnd : " + pageEnd);
    displayProductList(pageStart, pageEnd);

}

const createPaginationHtml = (resultArray) => {
    console.log("Pagination");
    noOfPages = Math.floor(resultArray.length / noOfProductPerPage);
    let lastPage = resultArray.length % noOfProductPerPage;
    let paginationDisplay = "";


    if (lastPage > 0) {

        noOfPages++;
    }

    paginationDisplay = `<li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous" onclick ="getPrevPage();">
                                <span aria-hidden="true">&larr;</span>
                            </a>
                        </li>`;


    for (let i = 0; i < noOfPages; i++) {
        paginationDisplay += `<li class="page-item"><a class="page-link" href="#" onclick="getPage(${i + 1});">${i + 1}</a></li>`;
    }
    paginationDisplay += `<li class="page-item">
                            <a class="page-link" href="#" aria-label="Next" onclick ="getNextPage();">
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </li>`;


    document.querySelector(".pagination").innerHTML = paginationDisplay;

    // console.log(`noOfPages : ${noOfPages}`);
    // console.log(`lastPage : ${lastPage}`);

}

const filterProduct = (category_Id) => {
    //console.log("cat ID : " + category_Id);
    const filteredProductArray = productList.filter((product) => {
        console.log("product.category_Id : " + product.category_Id);
        return product.category_Id == category_Id;

    });
    console.log(filteredProductArray);
    return filteredProductArray;

}

const filterProductSearchString = (searchStringArray) => {

    let stringArray = [];
    //console.log("searchStringArray " + searchStringArray.length);
    for (let i = 0; i < searchStringArray.length; i++) {
        let searchString = searchStringArray[i];
        //console.log("search String " +searchString);
        stringArray = stringArray.concat(filterProduct(searchString));
    }

    return stringArray;
}

const displayProductList = (pageStart, pageEnd) => {
    let searchStringArray = getSearchStringArray();
    let categoryString = getCategory();
    //console.log("pageEnd : " + pageEnd);
    //console.log("categoryString : " + categoryString);
    //console.log("searchStringArray");
    //console.log(searchStringArray);
    if (pageEnd == 0) {
        currentPage = 1;
        pageEnd = currentPage * noOfProductPerPage;
        if (searchStringArray != null && searchStringArray != "") {
            //console.log("get search: " + searchStringArray);

            filteredProductList = filterProductSearchString(searchStringArray);
            createPaginationHtml(filteredProductList);
            let resultArray = filteredProductList.slice(pageStart, pageEnd)
            createProductHtml(resultArray, pageStart);

            let searchString = ``;

            for (let i = 0; i < searchStringArray.length; i++) {

                let catID = searchStringArray[i];
                let category = globalCategoryList.find((cat) => {
                    return cat.id == catID;
                });

                catDisplay = category.display;
                if (i == 0) {
                    searchString += `${catDisplay}`;
                } else {
                    searchString += ` And ${catDisplay}`;
                }

            }
            let breadcrumbString = `<li class="breadcrumb-item"><a href="index">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">${searchString}</li>`;

            document.querySelector("#breadcrumb").innerHTML = breadcrumbString;


        } else if (categoryString != null && categoryString != "") {

            filteredProductList = filterProduct(categoryString);
            createPaginationHtml(filteredProductList);
            //            console.log("filteredProductList.length: " + filteredProductList.length);
            //            console.log("pageStart : " + pageStart);
            //            console.log("pageEnd : " + pageEnd);
            let resultArray = filteredProductList.slice(pageStart, pageEnd)

            console.log("resultArray.length: " + resultArray.length);
            createProductHtml(resultArray, pageStart);
            console.log("globalCategoryList.length: " + globalCategoryList.length);

            let category = globalCategoryList.find((cat) => {
                console.log("cat.id : " + cat.id);
                console.log("categoryString : " + categoryString);
                return cat.id == categoryString;
            });

            catDisplay = category.display;





            let breadcrumbString = `<li class="breadcrumb-item"><a href="index">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">${catDisplay}</li>`;

            document.querySelector("#breadcrumb").innerHTML = breadcrumbString;

        } else {
            createPaginationHtml(productList);
            let resultArray = productList.slice(pageStart, pageEnd);
            createProductHtml(resultArray, pageStart);

            let breadcrumbString = `<li class="breadcrumb-item"><a href="index">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">ALL</li>`;

            document.querySelector("#breadcrumb").innerHTML = breadcrumbString;



        }
    } else {
        let resultArray = filteredProductList.slice(pageStart, pageEnd)
        createProductHtml(resultArray, pageStart);
    }

    //console.log(productList);
}

const initProductList = () => {

    //setCategory("category", "bowTies_id");
    //let stringArray = ["bowTies_id", "neckTies_id"];
    //let stringA = JSON.stringify(stringArray);

    //setCategory("searchStringArray", stringA);

    //for (let i = 0; i < noOfProduct; i++) {
    displayProduct();
    //}
    console.log(productList);
    //displayProductList(0, 0);

}

initProductList();


