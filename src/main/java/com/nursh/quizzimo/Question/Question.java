package com.nursh.quizzimo.Question;


import com.nursh.quizzimo.Category.Category;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String question;
    private String answer;
    @ElementCollection
    private List<String> options;
    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id")
    private Category category;

    public Question() {

    }

    public Question(String question, List<String> options, String answer) {
        this.question = question;
        this.options = options.stream().collect(Collectors.toList());
        this.answer = answer;
    }
}
