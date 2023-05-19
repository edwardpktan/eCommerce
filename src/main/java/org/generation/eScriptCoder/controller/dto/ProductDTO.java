package org.generation.eScriptCoder.controller.dto;

import org.generation.eScriptCoder.repository.entity.Category;

public class ProductDTO {

    private String productName;
    private String description;
    private int inventory;
    private double price;
    private int quantity;
    private String product_url;
    //private int category_id;

    private Category category;


   // public ProductDTO(String productName, String description, int inventory, double price, int quantity, String product_url, int category_id )
   public ProductDTO(String productName, String description, int inventory, double price, String product_url, int category_id )
    {
        this.productName = productName;
        this.description = description;
        this.inventory = inventory;
        this.price = price;
        //this.quantity = quantity;
        this.product_url = product_url;
        this.category = new Category();
        this.category.setId(category_id);

    }


    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
//
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
        return category.getId();
    }

    public void setCategory_id(int category_id) {
        this.category.setId(category_id);
    }

    public String getCategory_name() {
        return category.getCategoryName();
    }

    public void setCategory_name(String category_name) {
        this.category.setCategoryName(category_name);
    }


}

