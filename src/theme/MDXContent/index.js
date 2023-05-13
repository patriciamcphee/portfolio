import React,{ useState, useEffect } from 'react';
import "./styles.module.css";
import { Col, Divider, Row } from "antd";
import { LikeTwoTone, DislikeTwoTone } from '@ant-design/icons';
const style = {
  padding: "6px 0"
};
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';


/* custom imports */
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

/* custom function
   BEGIN
*/
function FeedbackForm(){
	const location = useLocation();
  const [feedback, setFeedback] = useState(false);

	useEffect(() => {
		if (window.location.search.includes('feedback=true')) {
			setFeedback(true);
		}
	}, []);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};
	const [formData, setFormData] = useState({
		thumb: null,
		feedback: '',
		url: location.pathname,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { botfield, ...rest } = formData;

		if (botfield) {
			setFeedback(true);
			return;
		}

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'docs-feedback', ...rest }),
		})
			.then(() => setFeedback(true))
			.catch(() => setFeedback(true));
	};
  
  const feedbackForm = (feedback) => {
    return feedback ? (
      <p className="text-lg lg:text-l text-green-lighter">
        Thanks for contributing feedback about our docs!
      </p>
    ) : (
      <form
        data-netlify="true"
        name="docs-feedback"
        method="post"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="url"
          aria-label="current url"
          value={formData.url}
        />
        <input type="hidden" name="form-name" value="docs-feedback" />
        <input
          type="hidden"
          name="thumb"
          aria-label="How do you like it?"
          value={formData.thumb}
        />

        <div className="flex mt-6">
          <button
            aria-label="Happy"
            className="group px-4"
            name="thumbsup"
            type="button"
            onClick={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                thumb: 'Happy',
              }))
            }
          >
            
            <LikeTwoTone className={`${formData.thumb === 'Happy' && 'scale-125'
                }`}
            />
          </button>
          <button
            aria-label="Unhappy"
            className="group px-4"
            name="thumbsdown"
            type="button"
            onClick={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                thumb: 'Unhappy',
              }))
            }
          >
            <DislikeTwoTone className={`${formData.thumb === 'Unhappy' && 'scale-125'
                }`}
            />
          </button>
        </div>

       
      </form>
    );
  };
  return (
    <>
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32
      }}
    >
      <Col flex="1 1">
        <div style={style}>
        <h3>Want to learn more about me? Let's Chat!</h3>
        <p><a href="https://docs.google.com/forms/d/1RzV2SOVuTysVw2HMzprRnDQ-rAiAwP2t-6vsmjVG-Xs/prefill">Submit an inquiry</a> or chat with me on <a href="https://patriciamcphee.slack.com/archives/D03K6BRHTHN">Slack</a>!</p>
        </div>
      </Col>
    </Row>
    </>
  );
}

/* custom function
   END
*/

export default function MDXContent({children}) {
  return (
    <>
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      <Divider />
      <FeedbackForm />
    </>
  );
}
