package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.FinancialGoal;
import com.example.demo.services.FinancialGoalService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/financial-goals")
public class FinancialGoalController {
    private final FinancialGoalService financialGoalService;

    @Autowired
    public FinancialGoalController(FinancialGoalService financialGoalService) {
        this.financialGoalService = financialGoalService;
    }

    @GetMapping
    public ResponseEntity<List<FinancialGoal>> getAllFinancialGoals() {
        List<FinancialGoal> financialGoals = financialGoalService.getAllFinancialGoals();
        return new ResponseEntity<>(financialGoals, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FinancialGoal> getFinancialGoalById(@PathVariable Long id) {
        Optional<FinancialGoal> financialGoal = financialGoalService.getFinancialGoalById(id);
        return financialGoal.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<FinancialGoal> createFinancialGoal(@RequestBody FinancialGoal financialGoal) {
        FinancialGoal createdGoal = financialGoalService.createOrUpdateFinancialGoal(financialGoal);
        return new ResponseEntity<>(createdGoal, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FinancialGoal> updateFinancialGoal(@PathVariable Long id,
                                                              @RequestBody FinancialGoal financialGoal) {
        Optional<FinancialGoal> existingGoal = financialGoalService.getFinancialGoalById(id);
        if (existingGoal.isPresent()) {
            financialGoal.setId(id);
            FinancialGoal updatedGoal = financialGoalService.createOrUpdateFinancialGoal(financialGoal);
            return new ResponseEntity<>(updatedGoal, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFinancialGoal(@PathVariable Long id) {
        Optional<FinancialGoal> existingGoal = financialGoalService.getFinancialGoalById(id);
        if (existingGoal.isPresent()) {
            financialGoalService.deleteFinancialGoal(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
