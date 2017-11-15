package com.nursh.quizzimo.Question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository qr;

    public List<Question> getAllQuestions() {
        List<Question> questions = new ArrayList<>();
        qr.findAll().forEach(questions::add);
        return questions;
    }

    public List<Question> getQuestionsByCategory(String name) {
        List<Question> questions = new ArrayList<>();
        qr.findQuestionsByCategoryName(name)
            .forEach(questions::add);
        return questions;
    }
}
