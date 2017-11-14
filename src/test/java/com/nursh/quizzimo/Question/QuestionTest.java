package com.nursh.quizzimo.Question;

import com.nursh.quizzimo.Category.Category;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class QuestionTest {
    String questionText;
    Question q1;
    List<String> options;
    String answer;
    Category art;

    @BeforeEach
    void init() {
        questionText = "What artist is best known for the painting of his mother";
        options = Arrays.asList(
            "Francisco Goya",
            "Johannes Vermeer",
            "Pierre Auguste Renoir",
            "James Abbot Mcneil Whistler"
        );
        answer = options.get(3);

        q1 = new Question(questionText, options, answer);
        art = new Category("Art");
        q1.setCategory(art);
    }

    @Test
    void getQuestion() {
        assertEquals(questionText, q1.getQuestion());
    }

    @Test
    void setQuestion() {
        String q2Text = "What artist sold a balloon dog for $58.4 million?";
        q1.setQuestion(q2Text);
        assertEquals(q2Text, q1.getQuestion());
    }

    @Test
    void getAnswer() {
        assertEquals(answer, q1.getAnswer());
    }

    @Test
    void getOptions() {
        assertEquals(options, q1.getOptions());
    }

    @Test
    void getCategory() {
        assertEquals(art, q1.getCategory());
    }

    @Test
    void setAnswer() {
        String ans2= "Francisco Goya";
        q1.setAnswer(ans2);
        assertEquals(ans2, q1.getAnswer());
    }

    @Test
    void setCategory() {
        Category history = new Category("history");
        q1.setCategory(history);
        assertEquals(history, q1.getCategory());
    }

}