package org.generation.eScriptCoder.service;

import org.generation.eScriptCoder.repository.ProductRepository;
import org.generation.eScriptCoder.repository.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Optional;

public interface ProductService {




    public Product save(Product product);



    public void delete(int productId);



    public ArrayList<Product> all();


    public Product findById(int productId);




}
