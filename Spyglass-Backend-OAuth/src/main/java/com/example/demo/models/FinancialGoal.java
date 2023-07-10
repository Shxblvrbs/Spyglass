package com.example.demo.models;

import java.time.LocalDate;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "financial_goals")
public class FinancialGoal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "goal_name")
    private String goalName;

    @Column(name = "description")
    private String description;

    @Column(name = "picture")
    private String picture;

    @Column(name = "target_amount")
    private double targetAmount;

    @Column(name = "currently_saved")
    private double currentlySaved;

    // Constructors, getters, and setters

    public FinancialGoal() {
        // Default constructor
    }

    public FinancialGoal(String goalName, String description, String picture,
                         double targetAmount, double currentlySaved) {
        this.goalName = goalName;
        this.description = description;
        this.picture = picture;
        this.targetAmount = targetAmount;
        this.currentlySaved = currentlySaved;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGoalName() {
        return goalName;
    }

    public void setGoalName(String goalName) {
        this.goalName = goalName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public double getTargetAmount() {
        return targetAmount;
    }

    public void setTargetAmount(double targetAmount) {
        this.targetAmount = targetAmount;
    }

    public double getCurrentlySaved() {
        return currentlySaved;
    }

    public void setCurrentlySaved(double currentlySaved) {
        this.currentlySaved = currentlySaved;
    }
}

