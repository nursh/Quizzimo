package com.nursh.quizzimo.Category;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository cr;

    public List<Category> getAllCategories() {
        List<Category> categories = new ArrayList<>();
        cr.findAll().forEach(categories::add);
        return categories;
    }
}
