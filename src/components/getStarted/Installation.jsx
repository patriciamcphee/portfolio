import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea, CardActions, Link } from '@mui/material';
import styles from './LandingPage.module.css';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { right } from '@popperjs/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const InstallationList = [
  {
    title: 'macOS',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        <li>10.15</li>
        <li>11</li>
        <li>12</li>
        <li>13 (Ventura)</li>
      </>
    ),
    href: ('/install-authenticator-on-macos'),
    label: ('Learn more'),
    versions: ('10.15, 11, 12, 13 (Ventura)')
  },
  {
    title: 'Windows',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        <li>Windows 10 build 19041 and later</li>
        <li>Windows 11</li>
      </>
    ),
    href: ('/install-authenticator-on-windows'),
    label: ('Learn more'),
    versions: ('10 (build 18363 and later), 11 ')
  },
  {
    title: 'Linux',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        <b>Debian</b>
        <li>Ubuntu 18 LTS</li>
        <li>Ubuntu 20 LTS</li>
        <li>Ubuntu 22.04 LTS</li>
        <br />
       <b>RPM</b>
        <li>CentOS 7</li>
        <li>CentOS Stream 8</li>
        <li>CentOS Stream 9</li>
      </>
    ),
    href: ('/install-authenticator-on-linux'),
    label: ('Learn more'),
    versions: ('Ubuntu 18 LTS, 20 LTS, LTS 22.04, CentOS 7, CentOS Stream 8, CentOS Stream 9')
  },

];

function Topic({ title, description, versions, href }) {
  return (
    
    <div className={clsx('col col--6', styles. topic)}>
    <Card sx={{ minHeight: 'auto', p: 3, borderRadius: 4 }}  elevation={1}>
        <CardActionArea href={href}>
          <CardContent>
            <Typography
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{
                  fontWeight: 500,
                  fontFamily: 'Overpass',
                  textAlign: 'left',
                  color: '#3e5fb8',
                }} 
              >
              {title} 
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Overpass', lineHeight: 1.3 }}>

            <b>Supported versions:</b>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Overpass', lineHeight: 1.3, margin: 2 }}>

              {description}
          </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </div>
  );
}

export default function AuthenticatorInstallation() {
  return (
    <section className={styles.topics}>
      <div sx={{ marginLeft: 0, marginTop: 0 }}>
        <div className={clsx('row', styles.topicsRow)}>
          {InstallationList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      
      </div>
    </section>
  );
}