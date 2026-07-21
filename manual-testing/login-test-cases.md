# Login Test Cases

### Test ID:
LOGIN-001

### Title: 
Verify user can log in with valid credentials.

### Preconditions:
User has Trello Account.
On the Trello Login page.
Internet connection available.

## Steps:
1. Enter valid email address.
2. Enter correct password.
3. Click Log in.

### Expected Results
User is sussefully authenticated and redirected to their Trello boards.

### Priority
High


### Test ID:
LOGIN-002

### Title: 
Verify user cannot log in with an invalid password.

### Preconditions:
User has Trello Account.
On the Trello Login page.
Internet connection available.

## Steps:
1. Enter valid email address.
2. Enter incorrect password.
3. Click Log in.

### Expected Results
User stays on the login page. An error message is displayed stating the password is incorrect and to try again. User is not authenticated.

### Priority
High


### Test ID:
LOGIN-003

### Title: 
Verify user cannot login when both fields are empty.

### Preconditions:
On the Trello Login page.
Internet connection available.

## Steps:
1. Leave Email address field empty.
2. Leave password field empty.
3. Click Log in.

### Expected Results
User stays on login page. An error message is displayed stating the email address and password fields are required. No autentication request is sent.

### Priority
High


### Test ID:
LOGIN-004

### Title: 
Verify pressing enter submits the login form.

### Preconditions:
On the Trello Login page.
Internet connection available.

## Steps:
1. Enter valid/invalid email address.
2. Enter correct/incorrect password.
3. Click Log in.

### Expected Results
If valid credentials are used, user is sussefully authenticated and redirected to their Trello boards. If invalid credentials are used, user stays on login page and and error message is displayed stating proper credentials are required. user is not authenticated.

### Priority
High


### Test ID:
LOGIN-005

### Title: 
Verify forgot password flow

### Preconditions:
User has Trello Account.
On the Trello Login page.
Internet connection available.

## Steps:
1. Click forgot password.
2. Enter valid email address.
3. Click reset password.

### Expected Results
Email address should receive an email to reset trello password.

### Priority
High