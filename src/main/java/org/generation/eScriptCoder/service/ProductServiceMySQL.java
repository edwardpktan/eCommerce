package org.generation.eScriptCoder.service;

import org.generation.eScriptCoder.repository.ProductRepository;

import org.generation.eScriptCoder.repository.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProductServiceMySQL implements ProductService {


    private final ProductRepository productRepository;

    //Dependency Injection of another class object to this class object can be done with
    // @Autowired annotation


    public ProductServiceMySQL(@Autowired ProductRepository productRepository)
    {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product)
    {
        //since we have done the dependency injection we can now call any method from CRUDRepository
        return productRepository.save(product);
    }


    @Override
    public void delete(int productId)
    {
        productRepository.deleteById(productId);
    }


    @Override
    public ArrayList<Product> all()
    {
        ArrayList<Product> result = new ArrayList<>();
        productRepository.findAll().forEach(result::add);
        return result;
    }


    @Override
    public Product findById(int productId)
    {

        //Optional is a list that accepts either a null(empty), or with item
        Optional<Product> product = productRepository.findById(productId);
        Product productResponse = product.get();
        return productResponse;
    }







}
