"use client";

import React, { useState } from "react";
import axios from 'axios';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './HeroSection.module.scss';
import { Input } from '@/components/Input/Input';
import { boldPFont, headerFont, pFont } from '@/Fonts/Fonts';
import firstImg from '@/assets/invite.svg';
import secondImg from '@/assets/collect-coins.svg';
import thirdImg from '@/assets/voucher.svg';

const infoSections = [
  {
    image: firstImg,
    title: 'INVITE FRIENDS',
    desc: 'Refer friends with your unique referral link.',
  },
  {
    image: secondImg,
    title: 'COLLECT COINS',
    desc: 'Get 1 coin for each friend that installs our extension using your referral link.',
  },
  {
    image: thirdImg,
    title: 'GET VOUCHER',
    desc: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
  },
];

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const HeroSection = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState('');

  const onSubmit = (val: string) => {
    if (!val) {
      return setFailure("Can't submit an empty email address");
    } else if (!emailRegex.test(val)) {
      return setFailure('Not a valid email address');
    }

    return axios
      .put(
        'https://api.jsonbin.io/v3/b/647f5d9b9d312622a36b6963',
        { latestEmail: val },
        {
          headers: {
            'X-Master-Key': process.env.MASTER_KEY!,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        setFailure('');
        setSuccess(true);
      })
      .catch(() => setFailure('Something went wrong whilst calling JSONBIN'));
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.emailContainer}>
          <h1 className={headerFont.className}>
            REFER FRIENDS AND GET REWARDS
          </h1>
          <p className={classNames(styles.paragraph, pFont.className)}>
            Refer your friends to us and earn hotel booking vouchers. We&apos;ll
            give you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <div className={styles.inputContainer}>
            <Input
              onSubmit={onSubmit}
              showCopy={success}
              failureText={failure}
              showButton={!success || !!failure}
              buttonTitle={'Get Referral Link'}
            />
          </div>
          <p className={classNames(styles.footerText, pFont.className)}>
            Limits on max rewards apply.
          </p>
        </div>
        <div className={styles.infoContainer}>
          {infoSections.map(({ title, desc, image }, i) => (
            <div
              className={classNames(styles.infoSection, {
                [styles.inverted]: i % 2 !== 0,
              })}
              key={`info_section_${i}`}
            >
              <Image width={144} alt={`${title} imag`} src={image} />
              <div className={styles.stepContent}>
                <h1 className={boldPFont.className}>STEP {i + 1}</h1>
                <h2 className={headerFont.className}>{title}</h2>
                <p className={pFont.className}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
