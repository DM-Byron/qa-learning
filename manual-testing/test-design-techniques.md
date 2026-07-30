# Test Design Techniques

## Boundary Value Analysis (BVA)

### Definition

Boundary Value Analysis is a test design technique that focuses on testing values at the edges of valid input ranges because defects are more likely to occur at the boundaries than in the middle.

### Example 1

Requirement:
Username must be between 5 and 20 characters.

Boundary Values:
- 4
- 5
- 6
- 19
- 20
- 21

### Example 2

Requirement:
Card title must be between 1 and 100 characters.

Boundary values:
- 0
- 1
- 2
- 99
- 100
- 101

## Equivalence Partitioning (EP)

### Definition

Equivalence Partitioning is a test design technique that divides inputs into groups that are expected to behave the same and tests one representative from each group.

### Example 1

Requirement:
Password must be between 8 and 32 characters.

Partitions: 
- Less that 8 characters
- Between 8 and 32 characters
- More than 32 characters

Representative Values:
- 7
- 20
- 33

## Exploratory Testing

### Definition

Exploratory testing is where you learn about the application, design tests, and execute them at the same time. It is used to discover unexpected issues, explore new features, or test areas where requirements are incomplete or scripted test cases may not cover every scenario.

### Example

1. What happens if I create two cards with the same title?
2. What happens if I create a card with symbols as title?
3. What happens if I create a card after losing and regaining internet connection?
4. What happens if I click the back button immediately after creating a card?
5. What happens if I add the same attachment multiple times when creating a card?
6. What happens if I click add card multiple times?
7. What happens if another user creates the same card as me at the same time?
8. What happens if a card is being edited by multiple people at the same time?
9. What happens if a card is deleted while being edited?
10. Can an ai agent create a card?
