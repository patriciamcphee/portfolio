import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Link from '@docusaurus/Link';



export const ReleaseVersion = '2.80.0';

export const ReleaseDate = 'May 16, 2023';

export const ReleaseNotes = [
	'Improved RDP experience',

];

export const WhatsNew = [
	{
		title: <>[Enticing title for release]</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'May 16, 2023',
        version: '2.80.0',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration ...
			</>
		),
	},
	{
		title: <>[Enticing title for release]</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'Feb 28, 2023',
        version: '2.75.0',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration ...
			</>
		),
	},
];

export default function ReleaseNotesTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        }, 
        marginLeft: -2,
      }}
    >

        <div>

						<h3>
							Latest release
							<span className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">&nbsp;
								<code className="text-base">{ReleaseVersion}</code>
								<span className="text-base mx-2"> • </span>
								<time className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">
									{ReleaseDate}
								</time>
							</span>
						</h3>

            <p>

							Update {' '}
							<Link to={`https://app.byndid.com/downloads`}>
								{' '}
								to the latest version
							</Link>
							.
						</p>
						<p>&nbsp;</p>
					</div>

          <TimelineItem>
        
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/customer-docs/v2-80-0">
          2.80.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{backgroundColor: '#3e5fb8'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass', }}><p sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}>
            Good news for you! We have a Public API for authenticating users.
            </p></TimelineContent>
      </TimelineItem>    

      <TimelineItem>
        
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/customer-docs/v2-79-0">
          2.79.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{backgroundColor: '#3e5fb8'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass', }}><p sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}><span className="changelog-tag" data-tag="New">New!</span>
          <ul><li className='no-style'>Bulk Revoke Passkeys from the passkey table</li><li className='no-style'>Scope Roaming Authentication</li><li className='no-style'>Policy Attribute: Applications Installed</li><li className='no-style'>Policy Action: Allow w/ Biometric Verification</li><li className='no-style'>DataDog SIEM Integration Enhancement</li></ul><br />
          <span className="changelog-tag" data-tag="Improved">Improved!</span>
          <ul><li className='no-style'>Password Change/Reset in Windows Desktop Login</li></ul>
            </p>
            </TimelineContent>
      </TimelineItem>    

      <TimelineItem>
        
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/customer-docs/v2-78-0">
          2.78.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{backgroundColor: '#3e5fb8'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass', }}><p sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}><span className="changelog-tag" data-tag="New">New!</span>
          <ul><li className='no-style'>Manage all passkeys across your tenant in one central location. For example, quickly identify how many passkeys a user has and which ones are stale (not authenticated in 60+ days).</li><li className='no-style'>Users can now use the Beyond Identity Windows Desktop Login with Microsoft Windows Roaming Profile. </li></ul><br />
          <span className="changelog-tag" data-tag="Improved">Improved!</span>
          <ul><li className='no-style'>Android users of the Beyond Identity Platform Authenticator are now required to "Allow Notifications" on their Android devices.</li></ul><br />
          <span className="changelog-tag" data-tag="Removed">Resolved!</span>
          <ul><li className='no-style'>When logged into a remote system through Windows Remote Desktop and the session locks, the user can now provide their Beyond Identity Windows Desktop Login PIN to unlock the system. </li></ul>

             
            </p></TimelineContent>
      </TimelineItem>    

          <TimelineItem>
        
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/customer-docs/v2-77-0">
          2.77.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{backgroundColor: '#3e5fb8'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass', }}><p sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}><span className="changelog-tag" data-tag="New">New!</span>
          <ul><li className='no-style'>New attributes are available in the Beyond Identity Policy Engine, including location-based attributes, egress IP address matching, and impossible travel detection.</li></ul><br />
          <span className="changelog-tag" data-tag="Improved">Improved!</span>
          <ul><li className='no-style'>Upon saving policies with a Crowdstrike integration attribute configured, the policy engine now validates the configuration of the Crowdstrike integration and connectivity to the Crowdstrike cloud.</li><li className='no-style'>New Windows Desktop Login installations using the MSI method no longer require a reboot. </li></ul><br />
          <span className="changelog-tag" data-tag="Removed">Resolved!</span>
          <ul><li className='no-style'>When a host [source] is accessing a Windows system [destination] through Microsoft Remote Desktop Protocol (RDP), the Windows Desktop Login will not allow enrollment on the destination machine. Disallowing enrollment from the RDP session ensures compliance with Microsoft Windows security recommendations. </li></ul>


             
            </p></TimelineContent>
      </TimelineItem>              
      
    </Timeline>
    
  );
}