import React from 'react';
import clsx from 'clsx';
import styled from './styles.module.css';

const TechWriterPrices = () => (
<div className={clsx('container', styled.sectionContainer)}>
  <div className={clsx('row', styled.priceRowStyle)}>
    <div class="col">
      <div class="col-demo cta-footer">
      <h1 className={clsx(styled.title)}>Investing in Clarity: The Expert Technical Writer's Value</h1>
      <p className={clsx(styled.text)}>So, what’s the tag on top-tier tech writing, you ask? It's a little bit of this and a little bit of that, depending on how you fancy it! Yours truly, a solitary scribe of the technical realm, specialized in various technical domains, offer impeccable services that are competitively priced as follows:</p>
      <div className={clsx('container', styled.container)}>
        <div class="row">
          <div className={clsx('col col--6')}>
            <div class="col-demo">
            <div class="card-demo">
              <div class="card shadow--tl">
                <div class="card__header">
                  <h3>General Rate Breakdown</h3>
                </div>
                <div class="card__body">
                  <p>
                    <ul className='alignLeft'>
                      <li><b>Per Word:</b> $0.35 - $0.75</li>
                      <li><b>Per Page:</b> $175 - $375</li>
                      <li><b>Per Hour:</b> $65 - $150</li>
                      <li><b>Per Day:</b> $640 - $1,200 <br /><i>(Assuming an 8-hour workday)</i></li>
                    </ul>
                  </p>
                </div>
                
              </div>
            </div>
            </div>
          </div>
          <div class="col col--6">
            <div class="col-demo">
            <div class="card-demo">
              <div class="card shadow--tl">
                <div class="card__header">
                  <h3>By Rixed Rates</h3>
                </div>
                <div class="card__body">
                  <p>Available, but varies depending on the job. Remember, precise costs can fluctuate based on project nuances and additional requirements. For more details, see <a href="#"><b>Project Priced to Perfection</b></a> below.</p>
                </div>
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </div> 
      </div>
    </div>
  </div>

  <div className={clsx('container', styled.container)}>
  <div className={clsx('row', styled.priceRowStyle)}>
    <div class="col">
    <h2 className={clsx(styled.subtitle)}>Project Priced to Perfection: Fixed Rates for Assured Excellence</h2>
      <p>Steer clear of fiscal uncertainties with our transparent, per-project pricing. Here’s a snapshot to help you anticipate your investment in definitive projects:</p>
    </div>
  </div>
  <div className={clsx('container', styled.container)}>
  <div className={clsx('row', styled.priceRowStyle)}>
    <div class="col col--6">
      <div class="col-demo">6</div>
    </div>
    <div class="col col--6">
      <div class="col-demo">6</div>
    </div>
  </div>
</div>
  </div>

  <div className={clsx('container', styled.container)}>
  <div className={clsx('row', styled.priceRowStyle)}>
    <div class="col">
    <h2 className={clsx(styled.subtitle)}>Project Priced to Perfection: Fixed Rates for Assured Excellence</h2>
      <p>Steer clear of fiscal uncertainties with our transparent, per-project pricing. Here’s a snapshot to help you anticipate your investment in definitive projects:</p>
    </div>
  </div>
  <div className={clsx('row', styled.priceRowStyle)}>
    <div class="col col--3">
      <div class="intro-text">
        <h2 class="intro-visual-header">
        How I Can Help
        </h2>
        <h4 class="intro-text">Turning Words into Impact.</h4>
      </div> 
    </div>
    <div class="col">
      <div class="how-i-can-help">
        <p><span class="list-bold-item animated-underline">Content & Writing Mastery</span><br />My expertise in content design ensures that the content I produce is well-planned, structured, and resonates with the target audience.</p>
        <p><span class="list-bold-item animated-underline">User Experience & Information Design</span><br />My skills in editing and simplification ensure that even complex ideas are presented in an easily understandable format, enhancing the overall user experience.</p>  
                        
      </div>
    </div>
  </div>
  </div>
  
</div>
);
export default TechWriterPrices;