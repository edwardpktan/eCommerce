

// Lakshmi Start


// Product Controller

//development APIs
const addAPI = 'http://localhost:8080/eScriptCoder/add';
const displayProductAPI = 'http://localhost:8080/eScriptCoder/allProduct';
const findProductAPI = 'http://localhost:8080/eScriptCoder/';
const displayCategoryAPI = 'http://localhost:8080/eScriptCoder/allCategory';

//production APIs
// const addAPI = 'https://webdemoedward.azurewebsites.net/product/add';
// const displayCategoryAPI = 'https://webdemoedward.azurewebsites.net/product/all';

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
                    quantity: product.quantity,
                    price: product.price,
                    product_url: product.product_url
                };

                //This array consist of 12 objects
                productList.push(productObj);
            });

            //Display all the 12 objects from the productList array
            renderProductPage();
        })
        .catch(function (error) {
            console.log(error);
        });
}

//(3)  Display all products when user launch the product.html page
function renderProductPage() {


    let display = "";


    for (let i = 0; i < productList.length; i++) {

        display += `
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
        <div class="card img-fluid" style="width: 14rem;" id="productCard">
        <a id="item${i + 1}" href="#" data-bs-toggle="modal" data-bs-target="#productModal" onClick="displayDetails(${i + pageStart})">
            <img src=${filteredProductArray[i].imageURL} class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${filteredProductArray[i].productName}</h5>
                    <h6 class="card-title">$${filteredProductArray[i].price}</h6>
                </div>
        </a>
        </div>
    </div>
       `
    }

    document.querySelector("#row").innerHTML = display;

} //End of renderProductPage function

function displayDetails(index) {
    //When user clicks on any "More" button, the details of the selected product will be displayed
    document.querySelector("#modalName").innerHTML = filteredProductList[index].productName;
    document.querySelector("#modalDescription").innerHTML = filteredProductList[index].description;
    document.querySelector("#modalPrice").innerHTML = filteredProductList[index].price;
    document.querySelector("#modalImg").src = filteredProductList[index].imageURL;
}

// addProduct(name, description, imageURL, inventory, quantity, price, storeImage)
function addProduct(productName, description, imageURL, inventory, quantity, price, imageObject) {
    // FormData us an Object provided by the Browser API for us to send the data over to the backend
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('imageURL', imageURL);
    formData.append('inventory', inventory);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('imagefile', imageObject);


    fetch(addAPI, {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            console.log(response.status); // Will show you the status - 200 ok, 500, 404
            if (response.ok) {
                alert("Successfully Added Product!")
            }
            else {
                alert("Something went wrong. Please try again")
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to Product")
        });
}


// lakshmi End



