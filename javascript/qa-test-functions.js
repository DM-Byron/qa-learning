const loginTests = require("./login-test-data");
const attachmentTests = require("./attachment-test-data");
const cardTitleTests = require("./card-title-test-data");
const { validateLogin, validateAttachment, validateCardTitle } = require("./qa-validation");

function assertEqual(actual, expected) {
    if (actual === expected) {
        return true;
    } else {
        return false;
    }
}

function assertTrue(value) {
    if (value === true) {
        return true;
    } else {
        return false;
    }
}

function assertFalse(value) {
    if (value === false) {
        return true;
    } else {
        return false;
    }
}

function assertContains(actual, expected) {
    if (actual.includes(expected)) {
        return true;
    } else {   
        return false;
    }
}

function runTest(testId, description, expected, actual) {
    const passed = assertEqual(actual, expected);

    if(passed){
        console.log("PASS: " + testId + " - " + description);
        return true;
    } else {
        console.log("FAIL: " + testId + " - " + description);
        return false;
    }
}

function runTestSuite(tests, testFunction) {
    let total = 0;
    let passed = 0;
    let failed = 0;

    for (let test of tests) {
        const actual = testFunction(test);
        const result = runTest(test.id, test.title, test.expected, actual);
        
        total++;

        if (result) {
            passed++;
        } else {
            failed++;
        }
    }
    return {
        total: total,
        passed: passed,
        failed: failed
    };
}

const loginResults = runTestSuite(loginTests, function(test) {
        return validateLogin(test.username, test.password);
    }
);

const attachmentResults = runTestSuite(attachmentTests, function (test) { 
        return validateAttachment(test.fileSize);
    }
);

const cardTitleResults = runTestSuite(cardTitleTests, function(test) {
        return validateCardTitle(test.cardTitle);
    }
);

const total = loginResults.total + attachmentResults.total + cardTitleResults.total;
const passed = loginResults.passed + attachmentResults.total + cardTitleResults.passed;
const failed = loginResults.failed + attachmentResults.failed + cardTitleResults.failed;

console.log("Total: " + total);
console.log("Passed: " + passed);
console.log("Failed: " + failed);