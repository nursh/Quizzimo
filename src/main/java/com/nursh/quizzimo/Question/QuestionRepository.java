package com.nursh.quizzimo.Question;

import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface QuestionRepository extends CrudRepository<Question, Long>{
    Collection<Question> findQuestionsByCategoryName(String name);
}
