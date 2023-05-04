import React from "react";
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return <>
  <div className={styles.footer}>
      <div className={styles.underlineParent}>
        <img className={styles.underlineIcon} alt="" src="/" />
        <div className={styles.frameWrapper}>
          <div className={styles.iconCopyrightParent}>
            <img
              className={styles.iconCopyright}
              alt=""
              src="/"
            />
            <div className={styles.exclusivegmailcom}>
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameContainer}>
              <div className={styles.logo}>
                <b className={styles.exclusive}>Exclusive</b>
              </div>
              <div className={styles.subscribe}>Subscribe</div>
            </div>
            <div className={styles.get10Off}>Get 10% off your first order</div>
          </div>
          <div className={styles.sendMail}>
            <div className={styles.enterYourEmail}>Enter your email</div>
            <img className={styles.iconSend} alt="" src="/" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.support}>Support</div>
          <div className={styles.bijoySaraniDhakaDh1515Parent}>
            <div className={styles.bijoySaraniDhaka}>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className={styles.exclusivegmailcom}>exclusive@gmail.com</div>
            <div className={styles.exclusivegmailcom}>+88015-88888-9999</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.support}>Account</div>
          <div className={styles.bijoySaraniDhakaDh1515Parent}>
            <div className={styles.exclusivegmailcom}>My Account</div>
            <div className={styles.exclusivegmailcom}>Login / Register</div>
            <div className={styles.exclusivegmailcom}>Cart</div>
            <div className={styles.exclusivegmailcom}>Wishlist</div>
            <div className={styles.exclusivegmailcom}>Shop</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.support}>Quick Link</div>
          <div className={styles.bijoySaraniDhakaDh1515Parent}>
            <div className={styles.exclusivegmailcom}>Privacy Policy</div>
            <div className={styles.exclusivegmailcom}>Terms Of Use</div>
            <div className={styles.exclusivegmailcom}>FAQ</div>
            <div className={styles.exclusivegmailcom}>Contact</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameContainer}>
            <div className={styles.support}>Download App</div>
            <div className={styles.save3WithAppNewUserOnlyParent}>
              <div className={styles.save3With}>
                Save $3 with App New User Only
              </div>
              <div className={styles.qrCodeParent}>
                <div className={styles.qrCode}>
                  <img
                    className={styles.qrcode1Icon}
                    alt=""
                    src="/"
                  />
                </div>
                <div className={styles.googleplayParent}>
                  <img
                    className={styles.googleplayIcon}
                    alt=""
                    src="/"
                  />
                  <div className={styles.appstore}>
                    <img
                      className={styles.downloadAppstoreIcon}
                      alt=""
                      src="/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconFacebookParent}>
            <img className={styles.iconSend} alt="" src="/" />
            <img className={styles.iconSend} alt="" src="" />
            <img className={styles.iconSend} alt="" src="/" />
            <img className={styles.iconSend} alt="" src="/" />
          </div>
        </div>
      </div>
    </div></>;
}
