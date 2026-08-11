const cardTitleTests = [
    {
        id: "CARD-TITLE-001",
        title: "Empty card title",
        cardTitle: "",
        expected: false
    },
    {
        id: "CARD-TITLE-002",
        title: "Minimum card title length",
        cardTitle: "A",
        expected: true
    },
    {
        id: "CARD-TITLE-003",
        title: "Maximum card title length",
        cardTitle: "A".repeat(100),
        expected: true
    },
    {
        id: "CARD-TITLE-004",
        title: "Card title over maximum length",
        cardTitle: "A".repeat(101),
        expected: false
    }
];

module.exports = cardTitleTests;