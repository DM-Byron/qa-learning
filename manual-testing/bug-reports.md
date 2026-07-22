# Bug Reports

### Bug ID
BUG-001

### Title
Card is not created and no validation message is displayed when title exceeds 100 characters.

### Environment
Chrome 150 on macOS

### Severity
Medium/High

### Priority
High

### Preconditions
User is logged into Trello

### Steps
1. Open a board.
2. Click Add Card.
3. Input 101 characters into title field.
4. Click Create.

### Expected Result
- The card is not created.
- A validation messafe is displayed indicating the title exceeds the 100 character limit.
- The user remains on the Create Card dialog.

### Actual Result
- The card is not created.
- No validation message is displayed.
- The user remains on the Create Card dialog.
