package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.FinancialGoal;
import com.example.demo.repositories.FinancialGoalRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FinancialGoalService {
    private final FinancialGoalRepository financialGoalRepository;

    @Autowired
    public FinancialGoalService(FinancialGoalRepository financialGoalRepository) {
        this.financialGoalRepository = financialGoalRepository;
    }

    public List<FinancialGoal> getAllFinancialGoals() {
        return financialGoalRepository.findAll();
    }

    public Optional<FinancialGoal> getFinancialGoalById(Long id) {
        return financialGoalRepository.findById(id);
    }

    public FinancialGoal createOrUpdateFinancialGoal(FinancialGoal financialGoal) {
        return financialGoalRepository.save(financialGoal);
    }

    public void deleteFinancialGoal(Long id) {
        financialGoalRepository.deleteById(id);
    }
}

