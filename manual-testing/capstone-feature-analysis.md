# Feature Analysis

## Feature

Trello Card Creation

---

## Purpose

The purpose of the Create Card feature is to allow users to create cards to organize and track tasks, ideas, issues, or work items within a board, enabling collaboration and project management.

---

## Main Functions

- Create a card
- Enter a title
- Add a description
- Add a due date
- Assign members
- Add labels
- Upload attachments
- Add comments

---

## Primary Users

- Students
- Project Managers
- Small businesses
- Individuals
- Software development teams

---

## Possible Risks

- Duplicate cards
- Cards fail to save
- Unable to add members
- Slow attachment upload
- Unable to drag-drop card
- Unauthorized card access
- Card creation timeout
- Unable to delete card
- Unable to attach file
- Card showing incorrect data
- Two users overwrite each other's changes

---

## Assumptions

- Maximum title length is 100 characters.
- Users must have permission to create cards
- Internet connectivituy is required to save a card.
- Attachments have a maximum allowed size.
- Required fields are clearly identified.
- The user is already logged in.

---

## High-Risk Areas

1. Cards fail to save - If cards aren't saved, the feature has failed.
2. Card showing incorrect data - Data needs to be correct and consistent.
3. Unable to add members - Collaboration is an important feature for the application on a whole.

---

## Test Cases

Test ID
CARD-001

Title
Verify a user can create a card with valid information.

Preconditions
- User is logged in and on a board.
- User is authorized to create a card.

Steps
1. Select Create Card
2. Enter a valid title such as "Sprint Planning".
3. Click Create Card.

Expected Result
- Card is created successfully.
- User is returned to board.

Priority
High

Test ID
CARD-002

Title
Verify a card cannot be created without a title.

Preconditions
- User is logged in and on a board.
- User is authorized to create a card.

Steps
1. Select Create Card
2. Leave title field empty.
3. Click Create Card.

Expected Result
- Card is not created.
- A validation message is displayed indicating that the title is required.
- Stay on card creation dialog.

Priority
High

Test ID
CARD-003

Title
Verify due dates cannot be set in the past.

Preconditions
- User is logged in and on a board.
- User is authorized to create a card.

Steps
1. Select Create Card
2. Input a title for the card.
3. Click Card Options.
4. Enter previous day for due date.
5. Click Create Card.

Expected Result
- Card is not created.
- Error message is displayed stating Due Date is invalid.
- Stay on card creation dialog.

Priority
High

Test ID
CARD-004

Title
Verify an attachment can be uploaded successfully.

Preconditions
- User is logged in and on a board.
- User is authorized to access a card.
- Card is already created.

Steps
1. Navigate to card and click Card Options.
2. Click Upload Attachment and upload an attachment.

Expected Result
- Attachment is uploaded successfully.
- Attachment appears in the card.
- Upload completes without errors.

Priority
High

Test ID
CARD-005

Title
Verify only authorized users can access a card.

Preconditions
- User is logged in and on a board.
- User is not authorized to access a card.

Steps
1. Click a card to access it.

Expected Result
- Error message is displayed stating user is not authorized to access card.
- Stay on board.

Priority
High

---

## Boundary Value Analysis

### Card Title (1-100 characters)

| Value | Expected |
|-------:|----------|
| 0 | Invalid |
| 1 | Valid |
| 2 | Valid |
| 99 | Valid |
| 100 | Valid |
| 101 | Invalid |

### Attachment Size (Maximum 10 MB)

| Value | Expected |
|-------:|----------|
| 9.9 MB | Valid |
| 10 MB | Valid |
| 10.1 MB | Invalid |

### Maximum Members (250)

| Value | Expected |
|-------:|----------|
| 249 | Valid |
| 250 | Valid |
| 251 | Invalid |

---

## Bug Reports

### Bug ID
BUG-001

### Title
Application hangs indefinitely and no error message is displayed when PNG image larger than 10 mb is uploaded.

### Environment
Chrome 150 on macOS

### Severity
High

### Priority
High

### Preconditions
User is logged in and on a board.
User is authorized to edit the card.

### Steps
1. Open a board.
2. Click on existing card (or create a new one)
3. Click Card Options
4. Select Upload Attachment
5. Choose a PNG file larger than 10mb
6. Click Upload.

### Expected Result
- The upload is rejected
- An appropriate validation message is displayed indicating the file exceeds the maximum size
- The application remains responsive

### Actual Result
- Application hangs
- Upload spinner continues forever
- No error message is displayed
- User cannot continue unless page refreshed

### Bug ID
BUG-002

### Title
Card created with the title "Project Alpha" is displayed as ProjectAlpha.

### Environment
Chrome 150 on macOS

### Severity
Medium

### Priority
Medium

### Preconditions
User is logged in and on a board.
User is authorized to create a card.

### Steps
1. Open a board.
2. Click Add Card
3. Enter title "Project Alpha"
4. Click Create Card

### Expected Result
- Card is created.
- Title is displayed correctly with proper spacing.

### Actual Result
- Card is created. 
- Title is displayed with no spaces between words.

### Bug ID
BUG-003

### Title
Create Card button is misaligned in Safari on macOS

### Environment
Safari on macOS

### Severity
Low

### Priority
Medium

### Preconditions
User is logged in and on a board.

### Steps
1. Open a board.
2. Click Add Card
3. Observe Create Card button

### Expected Result
- Create Card button is correctly aligned with other UI elements according to design specifications.

### Actual Result
- Create Card button is misaligned.
- Feature works correctly

---

## Exploratory Testing Charter

### Feature
Create Card

### Mission
Explore the Create Card feature to identify unexpected behavior related to validation, collaboration, usability, network interruptions, and data integrity.

### Time Box
30 minutes

### Areas to Explore
- Card creation
- Attachments
- Due dates
- Labels
- Member assignment
- Permissions
- Network interruptions
- Accessibility

### Test Ideas

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

### Observations
- Duplucate card titles allowed
- File upload for large files slow

### Bugs Found
- BUG-001
- BUG-002
- BUG-003

### Questions
(Any requirements that need clarification.)