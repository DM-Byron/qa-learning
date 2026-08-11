const attachmentTests = [
    {
        id: "ATTACHMENT-001",
        title: "Attachment under maximum size",
        fileSize: 5,
        expected: true 
    },
    {
        id: "ATTACHMENT-002",
        title: "Attachment at maximum size",
        fileSize: 10,
        expected: true
    },
    {
        id: "ATTACHMENT-003",
        title: "Attachment over maximum size",
        fileSize: 10.1,
        expected: false
    }
];

module.exports = attachmentTests;