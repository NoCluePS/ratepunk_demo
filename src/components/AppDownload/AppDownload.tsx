'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'react-ionicons';
import chromeStoreImg from '@/assets/chrome.svg';
import appleStoreImg from '@/assets/apple.svg';
import styles from './AppDownload.module.scss';
import { pFont } from '@/Fonts/Fonts';
import classNames from 'classnames';

export const AppDownload = () => {
  return (
    <div className={styles.container}>
      <div className={styles.downloadContainer}>
        <a
          target="_blank"
          href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          className={styles.option}
        >
          <Image src={chromeStoreImg} alt="Chrome store link" />
          <div>
            <p className={classNames(styles.light, pFont.className)}>
              available in the
            </p>
            <h1 className={pFont.className}>chrome web store</h1>
          </div>
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/app/ratepunk/id1607823726"
          className={styles.option}
        >
          <Image src={appleStoreImg} alt="Chrome store link" />
          <div>
            <p className={classNames(styles.light, pFont.className)}>
              available in the
            </p>
            <h1 className={pFont.className}>apple app store</h1>
          </div>
        </a>
      </div>
      <div className={styles.reviewsContainer}>
        <div className={styles.stars}>
          <Star color="white" width="20px" height="20px" />
          <Star color="white" width="20px" height="20px" />
          <Star color="white" width="20px" height="20px" />
          <Star color="white" width="20px" height="20px" />
          <Star color="white" width="20px" height="20px" />
        </div>
        <p className={classNames(styles.reviewText, pFont.className)}>
          Chrome Store reviews
        </p>
      </div>
    </div>
  );
};
