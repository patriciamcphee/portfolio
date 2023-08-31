import React from 'react';
import LinkedInIcon from '@site/static/img/Linkedin.svg';
import EmailIcon from '@site/static/img/email.svg';
import SendIcon from '@site/static/img/Send.svg';





const Nutshell = () => (
<div class="features-visual-nutshell">
  <div class="row">
    <div class="col">
      <div class="col-demo cta-footer">
      <h3>Interested in enhancing your project with user-centric technical writing and content design?</h3>
        
      </div>
    </div>
    <div class="col col--4 col--offset-1">
      <div class="col-demo">
      <h3>Let's talk.</h3>
        <ul>
          <li class="no-style-footer"><sub><LinkedInIcon /></sub> <a href="https://www.linkedin.com/in/patriciamcphee/" target="_blank">Find me on <span class="list-bold-item-plain">LinkedIn</span></a></li>
          <li class="no-style-footer"><sub><EmailIcon /></sub> <a href="mailto:hi@patriciamcphee.com?subject=Mail from portfolio website">Send an Email</a></li>
          <li class="no-style-footer"><sub><SendIcon /></sub> <a href="https://docs.google.com/forms/d/1RzV2SOVuTysVw2HMzprRnDQ-rAiAwP2t-6vsmjVG-Xs/prefill" target="_blank">Submit an inquiry</a></li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col-demo">
      <h3>Helpful links.</h3>
      <div class="row">
        <div class="col">
          <div class="col-demo">
          <ul>
            <li class="no-style-footer-helpful-links"><a href="/about">About</a></li>
            <li class="no-style-footer-helpful-links"><a href="/resume-functional">Resume</a></li>
            <li class="no-style-footer-helpful-links"><a href="/writing-samples">Portfolio</a></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="col-demo">
          <ul>
            <li class="no-style-footer-helpful-links"><a href="/blog">Blog</a></li>
            <li class="no-style-footer-helpful-links"><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
</div>
);
export default Nutshell;