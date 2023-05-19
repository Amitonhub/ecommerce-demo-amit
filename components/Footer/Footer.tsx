import React from "react";
import styles from "./Footer.module.css";
import qrCode from "../../assets/qrcode.png";
import googlePlayStore from "../../assets/googleplay.png";
import appleStore from "../../assets/downloadappstore@2x.png";
import copyright from "../../assets/iconcopyright.png";
import underline from "../../assets/underline2.png";
import facebook from "../../assets/iconfacebook.png";
import twitter from "../../assets/icontwitter.png";
import instagram from "../../assets/iconinstagram.png";
import linkedin from "../../assets/iconlinkedin.png";
import sendEmail from "../../assets/iconsend.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="row">
        <div className={`container ${styles.footer}`}>
          <div className={styles.underlineParent}>
            <img className={styles.underlineIcon} alt="" src={underline.src} />
            <div className={styles.frameWrapper}>
              <div className={styles.iconCopyrightParent}>
                <img
                  className={styles.iconCopyright}
                  alt=""
                  src={copyright.src}
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
                <div className={styles.get10Off}>
                  Get 10% off your first order
                </div>
              </div>
              <div className={styles.sendMail}>
                <div className={styles.enterYourEmail}>Enter your email</div>
                <img className={styles.iconSend} alt="" src={sendEmail.src} />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.support}>Support</div>
              <div className={styles.bijoySaraniDhakaDh1515Parent}>
                <div className={styles.bijoySaraniDhaka}>
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </div>
                <div className={styles.exclusivegmailcom}>
                  exclusive@gmail.com
                </div>
                <div className={styles.exclusivegmailcom}>
                  +88015-88888-9999
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.support}>Account</div>
              <div className={styles.bijoySaraniDhakaDh1515Parent}>
                <div className={styles.exclusivegmailcom}>My Account</div>
                <Link href={'/login'} className={styles.link}>
                  <div className={styles.exclusivegmailcom}>Login / Register</div>
                </Link>
                <Link href={'/cart'} className={styles.link}>
                  <div className={styles.exclusivegmailcom}>Cart</div>
                </Link>
                <Link href={'/wishlist'} className={styles.link}>
                  <div className={styles.exclusivegmailcom}>Wishlist</div>
                </Link>
                <Link href={'/'} className={styles.link}>
                  <div className={styles.exclusivegmailcom}>Shop</div>
                </Link>
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
                        src={qrCode.src}
                      />
                    </div>
                    <div className={styles.googleplayParent}>
                      <img
                        className={styles.googleplayIcon}
                        alt=""
                        src={googlePlayStore.src}
                      />
                      <div className={styles.appstore}>
                        <img
                          className={styles.downloadAppstoreIcon}
                          alt=""
                          src={appleStore.src}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.iconFacebookParent}>
                <img className={styles.iconSend} alt="" src={facebook.src} />
                <img className={styles.iconSend} alt="" src={twitter.src} />
                <img className={styles.iconSend} alt="" src={instagram.src} />
                <img className={styles.iconSend} alt="" src={linkedin.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
