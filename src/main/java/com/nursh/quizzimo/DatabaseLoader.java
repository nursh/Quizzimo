package com.nursh.quizzimo;

import com.nursh.quizzimo.Category.Category;
import com.nursh.quizzimo.Category.CategoryRepository;
import com.nursh.quizzimo.Question.Question;
import com.nursh.quizzimo.Question.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import java.util.Arrays;
import java.util.List;

public class DatabaseLoader implements CommandLineRunner{

    @Autowired
    private CategoryRepository cr;

    @Autowired
    private QuestionRepository qr;

    Category art = new Category("Art");
    Category history = new Category("History");
    Category science = new Category("Science");

    public void initArt() {
        List<String> opts1 = Arrays.asList(
            "Vitruvius", "Praxiteles", "Apelles", "Lysippus"
        );
        List<String> opts2 = Arrays.asList(
            "Gerhart Richter", "Jeff Koons", "Jasper Johns", "Christopher Wool"
        );
        List<String> opts3 = Arrays.asList(
            "Louis Leroy", "Jacob Burckhardt", "John Ruskin", "Roger Fry"
        );
        List<String> opts4 = Arrays.asList(
            "Illness", "Wealth", "Fertility", "Immortality"
        );
        Question q1 = new Question(
            "Who was the court sculptor of Alexander the Great", opts1, opts1.get(3)
        );
        Question q2 = new Question(
            "What artist sold a balloon dog for $58.4million", opts2, opts2.get(1)
        );
        Question q3 = new Question(
            "What art critic coined the term \"Impressionism\"", opts3, opts3.get(0)
        );
        Question q4 = new Question(
            "What quality is associated with peaches in Chinese art", opts4, opts4.get(3)
        );
        q1.setCategory(art);
        q2.setCategory(art);
        q3.setCategory(art);
        q4.setCategory(art);
        qr.save(q1);
        qr.save(q2);
        qr.save(q3);
        qr.save(q4);
        cr.save(art);
    }

    public void initHistory() {
        List<String> opts1 = Arrays.asList(
            "Hebrew Torah", "Shabaka Stone", "Code of Hammurabi", "Rosetta Stone"
        );
        List<String> opts2 = Arrays.asList(
            "Napoleon", "Alexander The Great", "Genghis Khan", "Julius Caesar"
        );
        List<String> opts3 = Arrays.asList(
            "Louis XII", "Louis VIII", "Louis XVI", "Louis XIV"
        );
        List<String> opts4 = Arrays.asList(
            "Saddam Hussein", "Adolf Hitler", "Kim Jong Il", "Mao Zedong"
        );
        Question q1 = new Question(
            "What is the earliest surviving system of law", opts1, opts1.get(2)
        );
        Question q2 = new Question(
            "What famous general was once attacked by rabbits", opts2, opts2.get(0)
        );
        Question q3 = new Question(
            "Marie Antoinette was married to which King of France", opts3, opts3.get(2)
        );
        Question q4 = new Question(
            "Which dictator composed six operas", opts4, opts4.get(2)
        );
        q1.setCategory(history);
        q2.setCategory(history);
        q3.setCategory(history);
        q4.setCategory(history);
        qr.save(q1);
        qr.save(q2);
        qr.save(q3);
        qr.save(q4);
        cr.save(history);
    }

    public void initScience() {
        List<String> opts1 = Arrays.asList(
            "12%", "4%", "77%", "96%"
        );
        List<String> opts2 = Arrays.asList(
            "Elms", "Redwoods", "Oaks", "Pines"
        );
        List<String> opts3 = Arrays.asList(
            "Sucrose", "Deoxyribose", "Glucose", "Fructose"
        );
        List<String> opts4 = Arrays.asList(
            "Quasicrystals", "Water", "Crude Oil", "Polytetrafluoroethene"
        );
        Question q1 = new Question(
          "What percent of the world is visible", opts1, opts1.get(1)
        );
        Question q2 = new Question(
          "The bark of which tree is fireproof", opts2, opts2.get(1)
        );
        Question q3 = new Question(
          "What kind of sugar is found in DNA", opts3, opts3.get(1)
        );
        Question q4 = new Question(
          "What is the most slippery substance in the world", opts4, opts4.get(3)
        );
        q1.setCategory(science);
        q2.setCategory(science);
        q3.setCategory(science);
        q4.setCategory(science);
        qr.save(q1);
        qr.save(q2);
        qr.save(q3);
        qr.save(q4);
        cr.save(science);
    }

    @Override
    public void run(String... args) {
        initArt();
        initHistory();
        initScience();
    }
}
