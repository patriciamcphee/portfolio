// src/data/quizModules.js

export const quizModules = [
    {
      id: 'module-1',
      title: "Quiz: Introduction to Alchemy",
      introduction: "Test your knowledge about the fundamentals of Alchemy, its relationship with Backstage, and its core features.",
      questions: [
        {
          question: "What is the relationship between Backstage and Alchemy?",
          options: [
            { id: "A", text: "They are the same platform with different names" },
            { id: "B", text: "Alchemy is the toolkit, and Backstage is Cigna's implementation" },
            { id: "C", text: "Backstage is the toolkit, and Alchemy is Cigna's customized implementation" },
            { id: "D", text: "Alchemy replaces Backstage completely" }
          ],
          answer: "C"
        },
        {
          question: "Which of the following best describes Alchemy's primary value proposition?",
          options: [
            { id: "A", text: "It provides open-source code for Cigna developers" },
            { id: "B", text: "It acts as a \"single pane of glass\" for developers to access tools, services, and documentation" },
            { id: "C", text: "It solely manages CI/CD pipelines" },
            { id: "D", text: "It focuses exclusively on API documentation" }
          ],
          answer: "B"
        },
        {
          question: "What are the three layers of the Backstage framework?",
          options: [
            { id: "A", text: "Frontend, Backend, Database" },
            { id: "B", text: "Core, App, Plugins" },
            { id: "C", text: "UI, API, Storage" },
            { id: "D", text: "Development, Staging, Production" }
          ],
          answer: "B"
        },
        {
          question: "Which of the following is NOT one of the core features of Alchemy?",
          options: [
            { id: "A", text: "Software Catalog" },
            { id: "B", text: "Software Templates (Scaffolder)" },
            { id: "C", text: "TechDocs" },
            { id: "D", text: "Code Generator" }
          ],
          answer: "D"
        },
        {
          question: "How does TechDocs help maintain documentation?",
          options: [
            { id: "A", text: "By requiring a dedicated documentation team" },
            { id: "B", text: "By generating documentation from code comments" },
            { id: "C", text: "By transforming markdown files into static pages that stay close to the source code" },
            { id: "D", text: "By linking to external documentation platforms" }
          ],
          answer: "C"
        }
      ]
    },
    {
      id: 'module-2',
      title: "Quiz: Navigating the Alchemy Platform",
      introduction: "Test your knowledge of the Alchemy platform's interface, search capabilities, and core features.",
      questions: [
        {
          question: "Which of the following is NOT a section in the Alchemy platform?",
          options: [
            { id: "A", text: "Home" },
            { id: "B", text: "Catalog" },
            { id: "C", text: "Compiler" },
            { id: "D", text: "Explore" }
          ],
          answer: "C"
        },
        {
          question: "What can you search for using Alchemy's search functionality?",
          options: [
            { id: "A", text: "Only services and components" },
            { id: "B", text: "Only APIs and documentation" },
            { id: "C", text: "Only teams and individuals" },
            { id: "D", text: "Services, APIs, components, TechDocs, teams, and individuals" }
          ],
          answer: "D"
        },
        {
          question: "What does the Catalog feature in Alchemy provide?",
          options: [
            { id: "A", text: "A list of available software templates" },
            { id: "B", text: "A centralized service registry for managing and discovering all software components" },
            { id: "C", text: "Documentation for external APIs only" },
            { id: "D", text: "A development environment for coding" }
          ],
          answer: "B"
        },
        {
          question: "Which of the following is NOT an entity type in the Alchemy Catalog?",
          options: [
            { id: "A", text: "Systems" },
            { id: "B", text: "Components" },
            { id: "C", text: "Algorithms" },
            { id: "D", text: "Resources" }
          ],
          answer: "C"
        },
        {
          question: "What is the primary purpose of the Create section in Alchemy?",
          options: [
            { id: "A", text: "Creating new user accounts" },
            { id: "B", text: "Creating new templates" },
            { id: "C", text: "Streamlining the process of creating new software components using templates" },
            { id: "D", text: "Creating documentation" }
          ],
          answer: "C"
        },
      ]
    },
    {
      id: 'module-3',      
      title: "Quiz: Entity Cards and Widgets",
            introduction: "Test your knowledge of Alchemy's entity cards, their purposes, and the information they provide.",
            questions: [
              {
                question: "What is the purpose of the About card in Alchemy?",
                options: [
                  { id: "A", text: "To show team members only" },
                  { id: "B", text: "To provide a concise summary of an entity, covering its purpose, status, and key details" },
                  { id: "C", text: "To display security vulnerabilities" },
                  { id: "D", text: "To show API documentation" }
                ],
                answer: "B"
              },
              {
                question: "What information does the Code Quality card display?",
                options: [
                  { id: "A", text: "Code review comments" },
                  { id: "B", text: "Code statistics from SonarQube" },
                  { id: "C", text: "Code ownership" },
                  { id: "D", text: "Code deployment history" }
                ],
                answer: "B"
              },
              {
                question: "What does the Entity Validation card help with?",
                options: [
                  { id: "A", text: "Validating user credentials" },
                  { id: "B", text: "Validating API requests" },
                  { id: "C", text: "Validating the entity against operational policies and automating compliance checks" },
                  { id: "D", text: "Validating database connections" }
                ],
                answer: "C"
              },
              {
                question: "What does the Relations card visualize?",
                options: [
                  { id: "A", text: "Family relationships between team members" },
                  { id: "B", text: "The relationships between the current entity and other entities" },
                  { id: "C", text: "Database schema relationships only" },
                  { id: "D", text: "Organization chart hierarchies" }
                ],
                answer: "B"
              },
              {
                question: "What do \"Labels\" represent in the Alchemy catalog?",
                options: [
                  { id: "A", text: "Visual indicators only" },
                  { id: "B", text: "Required tags for all components" },
                  { id: "C", text: "Key-value pairs used to categorize entities in the catalog" },
                  { id: "D", text: "Mandatory security classifications" }
                ],
                answer: "C"
              }
            ]
          },
          {
      id: 'module-4',       
      title: "Quiz: Alchemy Personas",
            introduction: "Test your knowledge of the different user personas in Alchemy and their responsibilities.",
            questions: [
              {
                question: "Which persona is responsible for turning business requirements into applications that create business value?",
                options: [
                  { id: "A", text: "System Owner" },
                  { id: "B", text: "Internal Developer Portal Engineer" },
                  { id: "C", text: "Platform Engineer" },
                  { id: "D", text: "Application Developer" }
                ],
                answer: "D"
              },
              {
                question: "Which persona is responsible for establishing and maintaining the foundational architecture that supports the entire developer ecosystem?",
                options: [
                  { id: "A", text: "System Owner" },
                  { id: "B", text: "Internal Developer Portal Engineer" },
                  { id: "C", text: "Platform Engineer" },
                  { id: "D", text: "Application Developer" }
                ],
                answer: "B"
              },
              {
                question: "Which persona measures the development process's efficiency, quality, and speed and advocates for improvements?",
                options: [
                  { id: "A", text: "System Owner" },
                  { id: "B", text: "Internal Developer Portal Engineer" },
                  { id: "C", text: "Platform Engineer" },
                  { id: "D", text: "Application Developer" }
                ],
                answer: "A"
              },
              {
                question: "Which persona designs, creates, and maintains reusable services and tools that simplify application development?",
                options: [
                  { id: "A", text: "System Owner" },
                  { id: "B", text: "Internal Developer Portal Engineer" },
                  { id: "C", text: "Platform Engineer" },
                  { id: "D", text: "Application Developer" }
                ],
                answer: "C"
              },
              {
                question: "What is the primary impact of the Platform Engineer on the developer experience?",
                options: [
                  { id: "A", text: "They enforce governance and regulatory compliance" },
                  { id: "B", text: "They enhance developer efficiency by providing reliable, scalable, and reusable building blocks" },
                  { id: "C", text: "They define the overall IT strategy" },
                  { id: "D", text: "They manage customer relationships" }
                ],
                answer: "B"
              }
            ]
          },
          {
      id: 'module-5', 
            title: "Quiz: Infrastructure Components",
            introduction: "Test your knowledge of Alchemy's infrastructure components and their appropriate use cases.",
            questions: [
              {
                question: "Which infrastructure component is considered the foundational building block in Alchemy?",
                options: [
                  { id: "A", text: "Platforms" },
                  { id: "B", text: "Products" },
                  { id: "C", text: "Patterns" },
                  { id: "D", text: "Primitives" }
                ],
                answer: "D"
              },
              {
                question: "Which infrastructure component offers multi-tenant, scalable environments with built-in guardrails for security and compliance?",
                options: [
                  { id: "A", text: "Platforms" },
                  { id: "B", text: "Products" },
                  { id: "C", text: "Patterns" },
                  { id: "D", text: "Primitives" }
                ],
                answer: "A"
              },
              {
                question: "Which of the following is NOT an example of a Platform in Alchemy?",
                options: [
                  { id: "A", text: "Cloud SAE" },
                  { id: "B", text: "OpenShift" },
                  { id: "C", text: "Golden Terraform Modules" },
                  { id: "D", text: "Shared EKS" }
                ],
                answer: "C"
              },
              {
                question: "What level of support do Products receive in Alchemy?",
                options: [
                  { id: "A", text: "No support" },
                  { id: "B", text: "Platform-level support" },
                  { id: "C", text: "Product-level support" },
                  { id: "D", text: "Self-service only" }
                ],
                answer: "C"
              },
              {
                question: "When would you choose to use Patterns as your infrastructure component?",
                options: [
                  { id: "A", text: "When you need maximum control over individual components" },
                  { id: "B", text: "When you need pre-configured setups that can be customized while maintaining standardization" },
                  { id: "C", text: "When you need ready-to-use, supported configurations with limited customization" },
                  { id: "D", text: "When you need fully managed, secure environments for large-scale use" }
                ],
                answer: "B"
              }
            ]
          },
  ];
  
  export default quizModules;