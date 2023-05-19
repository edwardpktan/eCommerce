package org.generation.eScriptCoder.repository.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.generation.eScriptCoder.controller.dto.CategoryDTO;

@Entity
public class Category {

    @Id
    // from data- jpa. inform springboot that the private integer id is the primary key. Put above the primary key if more than one than have 2 or more similar one above each attribute.

    @GeneratedValue(strategy = GenerationType.IDENTITY) // name of attributes the same as name of the field.
    private Integer id;

    private String categoryName;

    public Category() {}

    //DTO : Data Transfer Object
    // Create and Update operations JPA will requires ItemDTO object via the controller

    public Category(CategoryDTO categoryDTO)
    {
        //Transfer the object (with the data) to Entity Class for mapping with the
        // database table columns and to be able to save the data in the columns
        this.categoryName = categoryDTO.getCategoryName();

    }





    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Override
    public String toString()
    {
        return "Category{" + "id=" + id + '\'' + ", categoryName='" + categoryName +
                '}';
    }





}
