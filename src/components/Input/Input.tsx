import React, { FC, useState } from "react";
import Image from "next/image";
import classNames from 'classnames';
import emailLogoSrc from '@/assets/email.svg';
import successImgSrc from '@/assets/success.svg';
import styles from './Input.module.scss';
import { boldPFont, pFont } from '@/Fonts/Fonts';

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

  const onCopy = () => {
    navigator.clipboard.writeText('https://ratepunk.com/referral');
  };

  return (
    <div className={pFont.className}>
      {showCopy && (
        <div className={styles.successContainer}>
          <Image src={successImgSrc} alt="Success image" />
          <p className={boldPFont.className}>Your email is confirmed!</p>
        </div>
      )}
      <p className={styles.failureText}>{failureText}</p>
      <div className={styles.container}>
        {!showCopy && <Image src={emailLogoSrc} alt="Email icon" />}
        <input
          className={classNames({
            [styles.marginLeft]: showCopy,
            [styles.disabled]: showCopy,
          })}
          onChange={(e) => setValue(e.target.value)}
          type="email"
          value={showCopy ? 'https://ratepunk.com/referral' : value}
          contentEditable={showCopy}
          placeholder="Enter your email address"
        />
        {showCopy && (
          <div onClick={onCopy} className={styles.copyBtn}>
            Copy
          </div>
        )}
      </div>
      {showButton && buttonTitle && (
        <button onClick={() => onSubmit(value)} className={styles.submitBtn}>
          {buttonTitle}
        </button>
      )}
    </div>
  );
};
