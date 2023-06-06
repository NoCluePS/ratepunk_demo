import React, { FC, useState } from "react";
import Image from "next/image";
import classNames from 'classnames';
import emailLogoSrc from '../../../public/assets/email.svg';
import styles from './Input.module.scss';

interface InputProps {
  showCopy: boolean;
  showButton: boolean;
  buttonTitle: string;
  failureText: string;
  onSubmit: (val: string) => void;
}

export const Input: FC<InputProps> = ({
  showCopy,
  showButton,
  buttonTitle,
  onSubmit,
  failureText,
}) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p className={styles.failureText}>{failureText}</p>
      <div className={styles.container}>
        {!showCopy && <Image src={emailLogoSrc} alt="Email icon" />}
        <input
          className={classNames({ [styles.marginLeft]: showCopy })}
          onChange={(e) => setValue(e.target.value)}
          type="email"
          value={showCopy ? 'https://ratepunk.com/referral' : value}
          contentEditable={!showCopy}
          placeholder="Enter your email address"
        />
        {showCopy && <div className={styles.copyBtn}>Copy</div>}
      </div>
      {showButton && buttonTitle && (
        <button onClick={() => onSubmit(value)} className={styles.submitBtn}>
          {buttonTitle}
        </button>
      )}
    </div>
  );
};
