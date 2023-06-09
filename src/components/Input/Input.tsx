import React, { FC, useState } from "react";
import Image from "next/image";
import classNames from 'classnames';
import emailLogoSrc from '@/assets/email.svg';
import successImgSrc from '@/assets/success.svg';
import styles from './Input.module.scss';
import { pFont } from '@/Fonts/Fonts';
import useMediaQuery from '@/hooks/useMediaQuery';

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
  const isMobile = useMediaQuery('(max-width: 767px)');

  const onCopy = () => {
    navigator.clipboard.writeText('https://ratepunk.com/referral');
  };

  return (
    <div className={pFont.className}>
      {showCopy && (
        <div className={styles.successContainer}>
          <Image src={successImgSrc} alt="Success image" />
          <p className={classNames(styles.bold, pFont.className)}>
            Your email is confirmed!
          </p>
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
        {showCopy && !isMobile && (
          <div onClick={onCopy} className={styles.copyBtn}>
            Copy
          </div>
        )}
      </div>
      {(showButton || isMobile) && buttonTitle && (
        <button
          onClick={!showButton && isMobile ? onCopy : () => onSubmit(value)}
          className={styles.submitBtn}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};
