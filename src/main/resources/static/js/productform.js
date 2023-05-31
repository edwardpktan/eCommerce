// development APIs
//const addAPI = 'http://localhost:8080/eScriptCoder/add';

// production APIs
const addAPI = 'https://edwardecommerce.azurewebsites.net/eScriptCoder/add';

// addProduct(name, description, imageURL, inventory, quantity, price, storeImage)
function addProduct(category_id, productName, description, product_url, inventory, price,
imageObject)
{
    // FormData us an Object provided by the Browser API for us to send the data over to the backend
    const formData = new FormData();
    formData.append('category_id', category_id);
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('product_url', product_url);
    formData.append('inventory', inventory);
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

//Global variable - to store the image object
let storeImage = ""


//When user clicks on 'Save Item', calls API to add items to the database
//1)store all the inputs into variables
//2)do validation
//calls a function from the productController.js to access the API to add items to the Database
//3)Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {


   // Prevent default action of the Form submission
   event.preventDefault();
   // Select the inputs
   const category_id = document.querySelector('#Category').value;
   const productName = document.querySelector('#newItemNameInput ').value;
   const description = document.querySelector('#newItemDescription').value;

   //Browser security will not be able to track/store the actual path of where you choose your image
   //C:/user/Desktop/t-shirt_new.jpg
   //C:\\fakepath\\t-shirt_new.jpg
   const product_url = document.querySelector('#productImage').value.replace("C:\\fakepath\\",
   "");
   const inventory = document.querySelector('#inventory').value;
   //const quantity = document.querySelector('#quantity').value;
   const price = document.querySelector('#newItemPrice').value;

  //3) calls a function from the productController.js to access the API to add items to the Database
   addProduct(category_id, productName, description, product_url, inventory, price,
   storeImage); //arguments


});

// select file input
const input = document.querySelector('#productImage');

productImage.addEventListener('change', () => {
   storeImage = input.files[0]; // array of files for us to access
});

