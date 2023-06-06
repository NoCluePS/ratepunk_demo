"use client";

import React, { useState } from "react";
import styles from "./HeroSection.module.scss";
import { Input } from "../Input/Input";

export const HeroSection = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState("");

  const onSubmit = (val: string) => {
    console.log(val);
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.emailContainer}>
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p>
            Refer your friends to us and earn hotel booking vouchers. We&apos;ll
            give you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <Input
            onSubmit={onSubmit}
            showCopy={success}
            failureText={failure}
            showButton={!success || !!failure}
            buttonTitle={"Get Referral Link"}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
