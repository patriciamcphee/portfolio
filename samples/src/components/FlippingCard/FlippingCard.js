import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Form } from 'react-bootstrap';
import { RightOutlined } from '@ant-design/icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const FlippingCard = ({ data }) => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardFlip = (index) => {
    if (flippedCardIndex === index) {
      setFlippedCardIndex(null);
    } else {
      setFlippedCardIndex(index);
    }
  };

  return (
    <div>
      <Grid container spacing={3} className={styles.cardGallery}>
        {data.map((card, index) => (
          <Grid item xs={12} sm={9} md={6} key={index}>
            <CardComponent 
              byline={card.byline} 
              title={card.title} 
              description={card.description} 
              frontContent={card.frontContent}
              checkYourKnowledge={card.checkYourKnowledge}
              isFlipped={flippedCardIndex === index}
              onFlip={() => handleCardFlip(index)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const CardComponent = ({ byline, title, description, frontContent, checkYourKnowledge, isFlipped, onFlip }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const {isDarkTheme} = useDocusaurusContext();

  const handleFlip = () => {
    onFlip();
    if (!isFlipped) {
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleFlip();
    }
  };

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(Number(event.target.value));
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    setShowExplanation(true);
  };

  const getExplanations = () => {
    const correctExplanation = checkYourKnowledge.explanations.find(exp => exp.isCorrect);
    const selectedExplanation = checkYourKnowledge.explanations[selectedAnswer];
    return {
      correct: correctExplanation ? correctExplanation.text : '',
      selected: selectedExplanation ? selectedExplanation.text : ''
    };
  };

  return (
    <div 
      className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''} ${isDarkTheme ? styles.dark : ''}`} 
      onClick={handleFlip} 
      onKeyPress={handleKeyPress} 
      role="button" 
      aria-label={isFlipped ? 'Show front of the card' : 'Show back of the card'}
      aria-live="polite"
      tabIndex="0"
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
              <div className={styles.smallByline}>{byline}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <div className={styles.cardDescription}>
                <p>{description}</p>
                {frontContent.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
              </div>
            </div>
            <div className={styles.ctaContainer}>
              <button 
                className="button button--primary"
                onClick={handleFlip}
              >
                Quiz Yourself
              </button>
            </div>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
              <div className={styles.smallBylineBack}>{title}</div>
              <div className={styles.quizContainer} onClick={(e) => e.stopPropagation()}>
                {showExplanation ? (
                  <div className={styles.explanation}>
                    <h3 className={styles.explanationResult}>
                      {selectedAnswer === checkYourKnowledge.correctAnswer ? 'Correct!' : 'Incorrect.'}
                    </h3>
                    <div className={styles.explanationText}>
                      {selectedAnswer !== checkYourKnowledge.correctAnswer && (
                        <p className={styles.incorrectExplanation}>
                          {getExplanations().selected}
                        </p>
                      )}
                      <p className={styles.correctExplanation}>
                        {getExplanations().correct}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h5 className={styles.quizQuestion}>{checkYourKnowledge.question}</h5>
                    <Form>
                      {checkYourKnowledge.options.map((option, index) => (
                        <Form.Check
                          key={index}
                          type="radio"
                          id={`option-${index}`}
                          label={option}
                          name="quizOptions"
                          value={index}
                          checked={selectedAnswer === index}
                          onChange={handleAnswerSelect}
                          className={styles.quizOptions}
                        />
                      ))}
                    </Form>
                    <button 
                      className={styles.checkAnswerButton}
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                    >
                    Check Your Answer
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className={styles.ctaContainer}>
              <RightOutlined className={styles.ctaArrow} rotate={180} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
