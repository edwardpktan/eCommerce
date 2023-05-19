package org.generation.eScriptCoder.service;

import org.generation.eScriptCoder.repository.CategoryRepository;
import org.generation.eScriptCoder.repository.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoryServiceMySQL implements CategoryService {


    private final CategoryRepository categoryRepository;

    //Dependency Injection of another class object to this class object can be done with
    // @Autowired annotation


    public CategoryServiceMySQL(@Autowired CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category save(Category item)
    {
        //since we have done the dependency injection we can now call any method from CRUDRepository
        return categoryRepository.save(item);
    }


    @Override
    public void delete(int categoryId)
    {
        categoryRepository.deleteById(categoryId);
    }


    @Override
    public ArrayList<Category> all()
    {
        ArrayList<Category> result = new ArrayList<>();
        categoryRepository.findAll().forEach(result::add);
        return result;
    }


    @Override
    public Category findById(int categoryId)
    {

        //Optional is a list that accepts either a null(empty), or with item
        Optional<Category> category = categoryRepository.findById(categoryId);
        Category categoryResponse = category.get();
        return categoryResponse;
    }




}
