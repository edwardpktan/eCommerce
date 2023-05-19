package org.generation.eScriptCoder.repository.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.generation.eScriptCoder.controller.dto.CategoryDTO;
import org.generation.eScriptCoder.controller.dto.ProductDTO;

@Entity
public class Product {

    @Id
    // from data- jpa. inform springboot that the private integer id is the primary key. Put above the primary key if more than one than have 2 or more similar one above each attribute.

    @GeneratedValue(strategy = GenerationType.IDENTITY) // name of attributes the same as name of the field.
    private Integer id;

    private String productName;
    private String description;
    private int inventory;
    private double price;
    //private int quantity;
    private String product_url;
    private int category_id;


    public Product() {}

    //DTO : Data Transfer Object
    // Create and Update operations JPA will requires ItemDTO object via the controller

    public Product(ProductDTO productDTO)
    {
        //Transfer the object (with the data) to Entity Class for mapping with the
        // database table columns and to be able to save the data in the columns

        this.productName = productDTO.getProductName();
        this.description = productDTO.getDescription();
        this.inventory = productDTO.getInventory();
        this.price = productDTO.getPrice();
        //this.quantity = productDTO.getQuantity();
        this.product_url = productDTO.getProduct_url();
        this.category_id = productDTO.getCategory().getId();

    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getInventory() {
        return inventory;
    }

    public void setInventory(int inventory) {
        this.inventory = inventory;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

//    public int getQuantity() {
//        return quantity;
//    }

//    public void setQuantity(int quantity) {
//        this.quantity = quantity;
//    }

    public String getProduct_url() {
        return product_url;
    }

    public void setProduct_url(String product_url) {
        this.product_url = product_url;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    @Override
    public String toString()
    {
        return "Product{" + "id=" + id + '\'' + ", productName='" + productName
                + '\'' + ", description='" + description
                + '\'' + ", inventory='" + inventory
                + '\'' + ", price='" + price
       //         + '\'' + ", quantity='" + quantity
                + '\'' + ", product_url='" + product_url
                + '\'' + ", category_id='" + category_id +
                '}';
    }
}
