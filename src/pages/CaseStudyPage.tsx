import React from 'react';
import { useParams } from 'react-router-dom';

interface CaseStudy {
  title: string;
  description?: string;
  // Add more fields as needed
}

export const CaseStudyPage: React.FC = () => {
  const { studyId } = useParams<{ studyId: string }>();

  // This would typically come from a data file
  const caseStudies: Record<string, CaseStudy> = {
    'healthcare-ux': {
      title: 'Healthcare UX Redesign',
      description: 'Comprehensive redesign of patient portal interface'
    },
    'conversation-design': {
      title: 'Conversation Design System',
      description: 'AI chatbot conversation guidelines and framework'
    }
  };

  const study = caseStudies[studyId || ''];

  if (!study) {
    return (
      <div className="case-study-page" style={{ paddingTop: '100px' }}>
        <section className="section">
          <div className="container container-small">
            <h1>Case Study Not Found</h1>
            <p>The case study you're looking for doesn't exist.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="case-study-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container container-small">
          <h1>{study.title}</h1>
          <p>{study.description || 'Detailed case study content goes here...'}</p>
        </div>
      </section>
    </div>
  );
};