"use client";

import React, { useState } from "react";
import axios from 'axios';
import styles from './HeroSection.module.scss';
import { Input } from '../Input/Input';

export const HeroSection = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState('');

  const onSubmit = (val: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p className={styles.paragraph}>
            Refer your friends to us and earn hotel booking vouchers. We&apos;ll
            give you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <Input
            onSubmit={onSubmit}
            showCopy={success}
            failureText={failure}
            showButton={!success || !!failure}
            buttonTitle={'Get Referral Link'}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
