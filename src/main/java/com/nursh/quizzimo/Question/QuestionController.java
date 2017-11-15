package com.nursh.quizzimo.Question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService qs;

    @GetMapping("")
    public List<Question> getAllQuestions() {
        return qs.getAllQuestions();
    }

    @GetMapping("/categories/{categoryName}")
    public List<Question> getQuestionsByCategory(@PathVariable String categoryName) {
        return qs.getQuestionsByCategory(categoryName);
    }
}
