
//Start Category List----------------------------------------------------------------

//const globalCategoryList =[];

// development APIs
//const displayCategoryAPI = 'http://localhost:8080/eScriptCoder/allCategory';

// production APIs
const displayCategoryAPI = 'https://edwardecommerce.azurewebsites.net/eScriptCoder/allCategory';

//const addAPI = 'https://fsdwebdemospring.azurewebsites.net/item/add';


const createDropDown = () => {

//   //  <option value="">Please Select</option>
//   // <option value="neckties">Neck Ties</option>
//   // <option value="bowties">Bow Ties</option>
//   // <option value="Tie Clips">Tie Clips</option>
//   // <option value="cufflinks">Cuff Links</option>

 let dropDown = document.querySelector("#Category");
 let cateHTML = "<option value=''>Please Select</option>";

 //console.log("createDropDown");
 //console.log(globalCategoryList);
 //console.log("globalCategoryList.length : " + globalCategoryList.length);
    if(dropDown!=null){
        for(let i=0;i<globalCategoryList.length; i++){
            let display = globalCategoryList[i].display;
            console.log("display : " + display);
            let id = globalCategoryList[i].id;
            console.log("id : "+ id);
            cateHTML += `<option value="${id}">${display}</option>`
        }
        dropDown.innerHTML =  cateHTML;
 //console.log(dropDown.innerText);
    }
}









function displayCategory() {
    //fetch data from database using the REST API endpoint from Spring Boot
    console.log("Inside Display");

    console.log("globalCategoryList.length : " + globalCategoryList.length);

 //  if(globalCategoryList.length==0){

    fetch(displayCategoryAPI)
           .then((resp) => resp.json())
           .then(function (data) {
               console.log("2. receive data")
               console.log(data);

               data.forEach(function (category) {
                   const categoryObj = {
                       id: category.id,
                       display: category.categoryName,
                    };

                   globalCategoryList.push(categoryObj);
               });

               globalCategoryList.sort((a,b)=>{
                               return a.id - b.id;

               });

               createNavbarHtml();
               createDropDown();

           })
           .catch(function (error) {
               console.log(error);
           });
   //}
}








const createCategory = () =>{
 /*
        let category = {};
        category.display = `Neckties`;
        category.id = `neckTies_id`;
        globalCategoryList.push(category);


        category = {};
        category.display = `Bow Ties`;
        category.id = `bowTies_id`;
        globalCategoryList.push(category);

        category = {};
        //category.display = `Tie Clips`;
        category.display = `Tie Tacks`;
        category.id = `tieTacks_id`;
        globalCategoryList.push(category);

        category = {};
        category.display = `Cufflinks`;
        category.id = `cufflinks_id`;
        globalCategoryList.push(category);
*/
/*      
        category = {};
        category.display = `Suspenders`;
        category.id = `suspenders_id`;
        globalCategoryList.push(category);
*/
        //console.log("Inside create category");
        displayCategory();

}

const createNavbarHtml = ()=>{
    console.log("Create Navbar html");
    let mainNavBarHtml = "";
    let mobileNavBarHtml = "";
    //console.log("globalCategoryList.length: " + globalCategoryList.length);
    for(let i=0;i<globalCategoryList.length; i++){
        let display = globalCategoryList[i].display;
        let id = globalCategoryList[i].id;

        mobileNavBarHtml += `<li class="mobileNavItems nav-item">
              <a class="nav-link" aria-current="page" href="product" onclick="setCategory('category','${id}')">${display}</a>
            </li>`
        
        mainNavBarHtml += `<li class="nav-item mx-4">
            <a class="nav-link" aria-current="page" href="product" onclick="setCategory('category','${id}')">${display}</a>
          </li>`;
    }

    document.querySelector(".mainNavbar>ul").innerHTML = mainNavBarHtml;
    document.querySelector(".mobileNavbar>ul").innerHTML = mobileNavBarHtml;
    


}

const initGlobalCategoryList = () =>{
    console.log("Inside initGlobalCategoryList")
    createCategory(); //create global category list
    //console.log(globalCategoryList);

}

initGlobalCategoryList();
//End Category List----------------------------------------------------------------

//Start Search----------------------------------------------------------------

const createPatternString = () =>{
    let pattern = "";

    for(let i=0; i< globalCategoryList.length;i++){
        let category = globalCategoryList[i].display;
        let categoryWithoutS = category.slice(0,-1);
        let categoryWithoutSWithoutSpace = categoryWithoutS.replace(" ", "");
        let categoryWithoutSpace = category.replace(" ", "");
        let categoryWithSpaceLink = categoryWithoutS.replace("link", " link");
        let categoryWithSpaceLinks = category.replace("links", " links");
        let categoryWithSpaceTie = categoryWithoutS.replace("tie", " tie");
        let categoryWithSpaceTies = category.replace("ties", " ties");
        pattern += `${category}|${categoryWithoutS}|${categoryWithoutSWithoutSpace}|${categoryWithoutSpace}|${categoryWithSpaceLink}|${categoryWithSpaceLinks}|${categoryWithSpaceTie}|${categoryWithSpaceTies}|`;
        
    }
    pattern = pattern.slice(0,-1);
    return pattern;
}

const getRegExpResult = (query, pattern) =>{
    let regex = new RegExp(pattern, "gi");
    let result = query.match(regex);

    return result;

}
/*
const setCategory = (key , value) => {
    
    localStorage.setItem("searchStringArray", "");
    localStorage.setItem("category", "");
    
    localStorage.setItem(key, "");
    localStorage.setItem(key, value);
    //localStorage.getItem("lastname");
    //console.log("I am here");
    //console.log("localStorage.getItem : " + localStorage.getItem(key));
}


const getCategory = () => {
    return localStorage.getItem("category");
    //console.log("I am here");
}

// const getSearchStringArray = () =>{
//     let searchString = localStorage.getItem('searchStringArray');
//     const searchCategoryArray = JSON.parse(searchString);
//     //console.log(searchCategoryArray); 
    
// }
*/

const replaceWithIDFromGlobalCatList = (result) =>{
    result.forEach((element, index) => {
        console.log(`element : ${element}`);
        

        globalCategoryList.forEach((category) => {
          let catDisplay = category.display.toUpperCase();
          console.log(`catDisplay : ${catDisplay}`);
          
          console.log(catDisplay.replace(" ", ""));
          

          if (element.toUpperCase() == catDisplay || (element + "s").toUpperCase() == catDisplay || (element+"s").toUpperCase() == catDisplay.replace(" ", "")|| element.toUpperCase() == catDisplay.replace(" ", "")+"S"||(element + "s").toUpperCase().replace(" ", "") == catDisplay){
           // console.log("match " + category.id);
            result[index] = category.id;
            //result[index] = category.display;
          }
        });
    });


}

const navigateToProductPage = () =>{

    //location.href = "productListMain.html";
    location.href = `product`;


}



const setQuery = () =>{

    let query = document.querySelector("#searchInput").value;
//    console.log(query);
    if(query != ""){
        let pattern = createPatternString();

        console.log(`pattern : ${pattern}`);
        let result = getRegExpResult(query,pattern);
        if(result != null){
            
//            console.log(result);
            replaceWithIDFromGlobalCatList(result);
//            console.log(result);

            let resultStr = JSON.stringify(result);
            setCategory('searchStringArray', resultStr);
            navigateToProductPage();

        }else{
            alert ("Can't find the category");
        }
    }else{
        setCategory('searchStringArray', "");
    }

}


// const getSearchStringArray = () =>{
//     let searchString = localStorage.getItem('searchStringArray');
//     const searchCategoryArray = JSON.parse(searchString);
//     //console.log(searchCategoryArray); 
    
// }



//End Search----------------------------------------------------------------
