import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';

export default function ResumeTimeline() {
  return (
    <>
      <Timeline
        mode="left"
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};