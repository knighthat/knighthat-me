import './footer.css'

import {FetchLatestCommit} from "/src/assets/js/github-api.jsx";
import {REPOSITORY, CONTACT_EMAIL} from "../assets/js/global.jsx";

function Contacts() {
  return (
      <div className={"pure-g"}>
        {/* Email */}
        <div className={"pure-u-1"} onClick={() => window.location.href = "mailto:" + CONTACT_EMAIL}>
          <div className={"pure-u-1-5 footer-section-method-icon"}>
            <ion-icon name="mail" size={"large"}></ion-icon>
          </div>
          <div className={"pure-u-4-5"}>
            <div className={"pure-u-1 footer-section-method-text"}>
              <span>{CONTACT_EMAIL}</span>
            </div>
          </div>
        </div>

        {/* Source code */}
        <div className={"pure-u-1"} onClick={() => window.location.href = REPOSITORY}>
          <div className={"pure-u-1-5 footer-section-method-icon"}>
            <ion-icon name="logo-github" size={"large"}></ion-icon>
          </div>
          <div className={"pure-u-4-5"}>
            <div className={"pure-u-1 footer-section-method-text"}>
              <span>
                Source code
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

function Wallets() {
  return (
      <div className={"pure-g"}>
        {/* Bitcoin Wallet */}
        <div className={"pure-u-1"}>
          <img
              className={"pure-u-1-5 footer-section-method-icon"}
              src='/icons/btc-32x32.png'
              alt={"Bitcoin logo"}
          />
          <div className={"pure-u-4-5"}>
            <div className={"pure-u-1 footer-section-method-text"}>
              <span>1GpZUvhdVkCFxqF4vuaiFxtBTxB3L94vnK</span>
            </div>
          </div>
        </div>

        {/* Monero Wallet */}
        <div className={"pure-u-1"}>
          <img
              className={"pure-u-1-5 footer-section-method-icon"}
              src='/icons/xmr-32x32.png'
              alt={"Bitcoin logo"}
          />
          <div className={"pure-u-4-5"}>
            <div className={"pure-u-1 footer-section-method-text"}>
              <span>44G5dUFTbFWYfZAk69irnDUCTNZzP5viNTmkGpCNCLHjjYQq7jjRTWoYTH1aY8P841hExP31Qxg2hXPtxreKu11zCYdxQUj</span>
            </div>
          </div>
        </div>

        {/* Ethereum Wallet */}
        <div className={"pure-u-1"}>
          <img
              className={"pure-u-1-5 footer-section-method-icon"}
              src='/icons/eth-32x32.png'
              alt={"Bitcoin logo"}
          />
          <div className={"pure-u-4-5"}>
            <div className={"pure-u-1 footer-section-method-text"}>
              <span>0x15b9F199b4Db223Ac35bfd5c43B7036E29d06141</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export function Footer() {
  return (
      <footer>
        <div className={"footer-margin sep-top-3-s"}>
          <div className="pure-g">
            <div className={"pure-u-1 pure-u-xl-1-3 footer-section"}>
              <h2>Contact me</h2>
              <Contacts/>
            </div>
            <div className={"pure-u-1 pure-u-xl-1-3"}></div>
            <div className={"pure-u-1 pure-u-xl-1-3 footer-section footer-donation-section"}>
              <h2>Support me</h2>
              <Wallets/>
            </div>
          </div>
          <div className={"pure-g copyright-notice-and-version-section sep-top-3-s"}>
            <div className={"pure-u-1 pure-u-xl-1-2 copyright-notice"}>
              <p>Copyright © 2024 Knight Hat. All Rights Reserved.</p>
            </div>
            <div className={"pure-u-1 pure-u-xl-1-2 version"}>
              <FetchLatestCommit/>
            </div>
          </div>
        </div>
      </footer>
  )
}