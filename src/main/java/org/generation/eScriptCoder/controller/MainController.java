package org.generation.eScriptCoder.controller;


import org.generation.eScriptCoder.component.FileUploadUtil;
import org.generation.eScriptCoder.controller.dto.ProductDTO;
import org.generation.eScriptCoder.repository.entity.Category;
import org.generation.eScriptCoder.repository.entity.Product;
import org.generation.eScriptCoder.service.CategoryService;
import org.generation.eScriptCoder.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/*
 * Azure Blob Storage quickstart
 */
import com.azure.storage.blob.*;
import com.azure.storage.blob.models.*;

@RestController
@RequestMapping("/eScriptCoder")
public class MainController {


    @Value("${image.folder}")
    private String imageFolder;

    private final CategoryService categoryService;
    private final ProductService productService;

    public MainController( @Autowired CategoryService categoryService , @Autowired ProductService productService)
    {
        this.categoryService = categoryService;
        this.productService = productService;
    }

    @CrossOrigin // Not in a valid domain, webbrowser wont allow us to call without this. Local host not a valid domain
    @GetMapping( "/allCategory" )
    public Iterable<Category> getCategorys()
    {
        //return in the controller represent a response to the client
        return this.categoryService.all();
    }

    @CrossOrigin // Not in a valid domain, webbrowser wont allow us to call without this. Local host not a valid domain
    @GetMapping( "/allProduct" )
    public Iterable<Product> getProducts()
    {

        //To display images from local folder
//        for (Product product: productService.all())
//        {
//
//            //productimages /t-shirt1.jpg
//            String setURL = imageFolder + "/" + product.getProduct_url();
//            product.setProduct_url(setURL);
//        }

        /* To display images from the Server Container */

        String connectStr2 = "DefaultEndpointsProtocol=https;AccountName=edwardecommerceprodimg;AccountKey=7BkqnFP4/Z8tK2HjqlFVfTO145VR9yFCetgm098vLIs3tSA/ipcvDaZ/CdHi9WnKXnn7eo4x+or1+AStVsFxLQ==;EndpointSuffix=core.windows.net";
        //System.out.println("Connect String: " + connectStr2);
        BlobServiceClient blobServiceClient = new BlobServiceClientBuilder().connectionString(connectStr2).buildClient();
        String containerName = "prodimage";
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);

        //Url or path (should be productimagespring) of the Azure storage container
        BlobClient blobClient = containerClient.getBlobClient(productService.all().get(0).getProduct_url());


        //Loop through the ArrayList of productService.all() and append the Blob url to the imageUrl

        for (Product product: productService.all())
        {
            //path: productimagespring/prodimage/t-shirt1.jpg
            String setURL = blobClient.getAccountUrl() + "/" + containerName + "/" + product.getProduct_url();
            product.setProduct_url(setURL);

        }

        //return in the controller represent a response to the client
        return this.productService.all();
    }


    @CrossOrigin
    @GetMapping( "/{id}" )
    public Product findProductById( @PathVariable Integer id )
    {
        //System.out.println("I am here");
        return productService.findById(id);
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="productName", required = true) String productName,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="inventory", required = true) int inventory,
                       @RequestParam(name="price", required = true) double price,
                       //@RequestParam(name="quantity", required = true) int quantity,
                       @RequestParam(name="product_url", required = true) String product_url,
                       @RequestParam(name="category_id", required = true) int category_id,
                       @RequestParam("imagefile") MultipartFile multipartFile) throws IOException
    {


        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        //productimages, t-shirt_new.jpg, object
        FileUploadUtil.saveFile(imageFolder, fileName, multipartFile);

        //String fullPath = imageFolder + "/" + imageUrl;

        //ProductDTO productDTO = new ProductDTO(productName, description, inventory, price, quantity,product_url,category_id);
        ProductDTO productDTO = new ProductDTO(productName, description, inventory, price, product_url,category_id);
        productService.save(new Product(productDTO));

    }

}
