'use client';

import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import logoSrc from '@/assets/logo.svg';
import emailLogo from '@/assets/email-footer.svg';
import instaSrc from '@/assets/instagram.svg';
import facebookSrc from '@/assets/facebook.svg';
import linkedinSrc from '@/assets/linkedin.svg';
import twitterSrc from '@/assets/twitter.svg';
import tiktokSrc from '@/assets/tiktok.svg';
import styles from './Footer.module.scss';
import { pFont } from '@/Fonts/Fonts';
import useMediaQuery from '@/hooks/useMediaQuery';

export const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.start}>
          <Image src={logoSrc} alt="Raftpunk logo" />
          <p className={classNames(styles.description, pFont.className)}>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          {!isMobile && (
            <p className={classNames(styles.rightsReserved, pFont.className)}>
              © 2021 Ratepunk. All Rights Reserved.
            </p>
          )}
        </div>
        <div className={styles.quickLinks}>
          <h1 className={classNames(styles.title, pFont.className)}>
            QUICK LINKS
          </h1>
          <ul>
            <li>Price Comparison</li>
            <li>Chrome Extension</li>
            <li>How It Works</li>
            <li>Ratepunk Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div>
            <h1 className={classNames(styles.title, pFont.className)}>
              CONTACT
            </h1>
            <a className={styles.emailContact} href="mailto:hi@ratepunk.com">
              <Image src={emailLogo} alt="email icon" />
              <p>hi@ratepunk.com</p>
            </a>
          </div>
          <div>
            <h1 className={classNames(styles.title, pFont.className)}>
              SOCIALS
            </h1>
            <div className={styles.socials}>
              <div>
                <Image src={instaSrc} alt="Instagram logo" />
              </div>
              <div>
                <Image src={facebookSrc} alt="Facebook logo" />
              </div>
              <div>
                <Image src={linkedinSrc} alt="LinkedIn logo" />
              </div>
              <div>
                <Image src={twitterSrc} alt="Twitter logo" />
              </div>
              <div>
                <Image src={tiktokSrc} alt="Tiktok logo" />
              </div>
            </div>
          </div>
          {isMobile && (
            <p className={classNames(styles.rightsReserved, pFont.className)}>
              © 2021 Ratepunk. All Rights Reserved.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
