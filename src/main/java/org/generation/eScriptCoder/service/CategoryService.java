package org.generation.eScriptCoder.service;

import org.generation.eScriptCoder.repository.entity.Category;

import java.util.ArrayList;
import java.util.Optional;

public interface CategoryService {


    public Category save(Category item);

    public void delete(int categoryId);

    public ArrayList<Category> all();

    public Category findById(int categoryId);


}
