# Application Analysis

## Application Information

**Application Name:**
Trello

**Website:**
www.trello.com

**Date Tested:**
15/7/26

**Version (if known):**

---

# Purpose

This application is a web based project management and collaboration tool that helps users organize work using boards, lists, and cards. It is used for project management, personal task tracking, software development, and team collaboration.

---

# Target Users

* Students
* Individuals managing personal tasks
* Small businesses
* Project managers
* Software development teams
* Marketing teams

---

# Core Features

User Authentication
- Sign up, Log in, Log out, Password reset, Email verification

Boards
- Create board, Rename board, Delete Board, Archive board, Change board visibility

Lists
- Create list, Rename list, Move list, Archive list

Cards
- Create card, Edit card, Add description, Add due date, Assign member, Attach file, Add comment, Archive card

Collaboration
- Invite member, Assign permissions, Receive notifications

Search
- Search cards, Search boards, Filter search

Navigation
- Home, Workspaces, Boards, Templates, Notofications, User Profile

---

# Possible Risks

* Unable to log in
* Cards fail to save
* File upload failure
* Search returning incomplete results
* UI alignment issues
* Icon display problems

---

# Types of Testing That Apply

## Functional Testing

Verify:
- Creating items
- Editing items
- Deleting items
- Archiving items
- Drag and drop functionality

## Usability Testing

- Is UI responsive and intuitive?
- Error messages clear?

## Performance Testing

Observe:
- Page load times
- Search speed
- Large board performance

## Security Testing

Verify:
- Login security
- Password reset flow
- Access control
- Permissions
- Session timeout behavior

## Compatibility Testing

Test on:
- Chrome
- Firefox
- Safari
- Edge

---

# Sample Test Ideas

Feature -- Example Test

Login -- Valid username and password

Login -- Invalid username and password

Board -- Create new board

Card -- Create new card

Card -- Edit card

Card -- Add attachment

Search -- Find card by title

---

# Summary

Trello is well organized and easy to navigate. The highest priority areas are user authentication, data integrity, collaboration features and  synchronization between users. These areas would receive priority during detailed testing.
