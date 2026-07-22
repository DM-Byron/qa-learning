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

