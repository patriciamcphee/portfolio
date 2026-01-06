---
id: flipping-card-with-quiz-component
title: FlippingCard Component
description: '...'
keywords:
 - custom component
 - quiz yourself
last_updated:
  date: 10/11/2024
  author: Patricia McPhee
doc_type: how-to
displayed_sidebar: mainSidebar
draft: true
---

The FlippingCard component is a React-based interactive card gallery that displays information on the front and a quiz on the back. It allows users to flip cards, answer questions, and receive feedback.

## Features

- Card gallery with multiple flippable cards
- Front side displays informational content
- Back side presents a quiz with multiple-choice questions
- Interactive flipping animation
- Quiz submission and feedback system
- Responsive design
- Dark mode support

## Dependencies

- React
- @mui/material
- react-bootstrap
- @ant-design/icons
- @docusaurus/core

## Compatibility

This component is compatible with React 16.8+ and requires a modern browser that supports CSS transitions and transforms.

## Installation

Ensure you have the following dependencies installed in your project:

```
npm install react @mui/material react-bootstrap @ant-design/icons @docusaurus/core
```

## Usage

Basic usage example:

```jsx
import FlippingCard from './FlippingCard';

const cardData = [
  {
    byline: "Example Byline",
    title: "Example Title",
    description: "Example description",
    frontContent: ["Content line 1", "Content line 2"],
    checkYourKnowledge: {
      question: "Example question?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,
      explanations: [
        { text: "Explanation 1", isCorrect: true },
        { text: "Explanation 2", isCorrect: false },
        { text: "Explanation 3", isCorrect: false },
        { text: "Explanation 4", isCorrect: false }
      ]
    }
  }
];

function App() {
  return (
    <FlippingCard data={cardData} />
  );
}
```

## Configuration

The FlippingCard component accepts a `data` prop, which is an array of objects with the following structure:

| Option | Description | Type |
| --- | --- | --- |
| `byline` | Small text displayed at the top of the card | string |
| `title` | Main title of the card | string |
| `description` | Brief description of the card content | string |
| `frontContent` | Array of content strings for the front of the card | string[] |
| `checkYourKnowledge` | Object containing quiz information | object |

The `checkYourKnowledge` object should have the following structure:

| Option | Description | Type |
| --- | --- | --- |
| `question` | The quiz question | string |
| `options` | Array of answer options | string[] |
| `correctAnswer` | Index of the correct answer | number |
| `explanations` | Array of explanation objects | object[] |

Each explanation object should have:

| Option | Description | Type |
| --- | --- | --- |
| `text` | Explanation text | string |
| `isCorrect` | Whether this explanation is for the correct answer | boolean |

## API Reference

### `FlippingCard`

Main component for rendering the card gallery.

**Parameters:**

- `data` (array): Array of card data objects

### `CardComponent`

Individual card component used within FlippingCard.

**Parameters:**

- `byline` (string): Small text at the top of the card
- `title` (string): Main title of the card
- `description` (string): Brief description
- `frontContent` (array): Array of content strings for the front
- `checkYourKnowledge` (object): Quiz information
- `isFlipped` (boolean): Whether the card is currently flipped
- `onFlip` (function): Handler for flipping the card

## Examples

Here's an example of how to use the FlippingCard component with multiple cards:

```jsx
[
  {
    "byline": "YAML WRITING TIPS",
    "title": "Be Direct and Clear",
    "description": "Direct and clear language in YAML fields enhances user understanding, reducing confusion and errors. ",
    "frontContent": [
      "By eliminating unnecessary words, YAML becomes more user-friendly and maintainable. ",
      "This approach allows users to grasp required information quickly, making field descriptions more straightforward and less ambiguous."
    ],
    "checkYourKnowledge": {
      "question": "Which of the following is the most direct and clear YAML input for a component name?",
      "options": [
        "Please provide the name of your component",
        "Enter the component's unique identifier",
        "The component name goes here",
        "Component name"
      ],
      "correctAnswer": 1,
      "explanations": [
        {
          "text": "This option is too verbose and polite for a YAML field. It doesn't add value and makes the input less clear.",
          "isCorrect": false
        },
        {
          "text": "The \"Enter the component's unique identifier\" is direct, clear, and specifies that it should be unique—an important aspect of component naming. It's more specific and actionable than alternatives, providing context about the type of input required.",
          "isCorrect": true
        },
        {
          "text": "This option is not clear enough and doesn't provide any guidance on what kind of input is expected. ",
          "isCorrect": false
        },
        {
          "text": "While this option is concise, it doesn't provide enough guidance.",
          "isCorrect": false
        }
      ]
    }
  },
  // Add more card objects here...
];

```

## Troubleshooting

- If cards are not flipping, ensure that the `onClick` and `onKeyPress` events are properly triggering the `handleFlip` function.
- If styles are not applying correctly, check that the CSS module is properly imported and that class names are correctly referenced.
- For dark mode issues, verify that the Docusaurus context is properly set up and that the `isDarkTheme` variable is being correctly passed to the component.

## Contributing

To contribute to this component:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes and test thoroughly
4. Submit a pull request with a clear description of your changes

## License

This component is released under the MIT License. See the LICENSE file for more details.