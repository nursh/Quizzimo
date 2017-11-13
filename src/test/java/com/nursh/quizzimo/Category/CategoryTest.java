package com.nursh.quizzimo.Category;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CategoryTest {

    static Category ct = new Category("Languages");

    @Test
    void getName() {
        assertEquals("Languages", ct.getName());
    }

    @Test
    void setName() {
        ct.setName("Witchcraft");
        assertEquals("Witchcraft", ct.getName());
    }

}