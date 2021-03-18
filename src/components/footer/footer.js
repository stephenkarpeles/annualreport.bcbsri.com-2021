import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__col-wrap">
          <div className="footer__col footer__col--1">
            <ul>
              <li><a target="_blank" href="http://2019annualreport.bcbsri.com/">2019 Annual Report</a></li>
              <li><a target="_blank" href="http://2019communityreport.bcbsri.com/">2019 Community Report</a></li>
            </ul>
          </div>
          <div className="footer__col footer__col--2">
            <ul>
              <li><a target="_blank" href="https://www.bcbsri.com/privacy-policy">Privacy Statement</a></li>
              <li><a target="_blank" href="https://www.bcbsri.com/how-blue-cross-protecting-your-information">Security &amp; Fraud Protection</a></li>
              <li><a target="_blank" href="https://www.bcbsri.com/terms-conditions">Terms &amp; Conditions</a></li>
            </ul>
            <p>We comply with applicable Federal civil rights laws and do not discriminate on the basis of race, color, national origin, age, disability, or sex. We also provide language assistance. Read our Nondiscrimination and Language Assistance notice.</p>
            <p>Copyright &copy; 2021 Blue Cross &amp; Blue Shield of Rhode Island. All rights reserved. All trademarks unless otherwise noted are the property of Blue Cross &amp; Blue Shield of Rhode Island or the Blue Cross and Blue Shield Association. Blue Cross &amp; Blue Shield of Rhode Island is an independent licensee of the Blue Cross and Blue Shield Association.</p>
          </div>
          <div className="footer__col footer__col--3">
            <ul>
              <li><a target="_blank" href="http://twitter.com/BCBSRI"><StaticImage src="../../images/icons/icon-twitter.svg" alt=""/></a></li>
              <li><a target="_blank" href="http://www.facebook.com/BCBSRI"><StaticImage src="../../images/icons/icon-facebook.svg" alt=""/></a></li>
              <li><a target="_blank" href="http://www.linkedin.com/company/blue-cross-&-blue-shield-of-rhode-island"><StaticImage src="../../images/icons/icon-linkedin.svg" alt=""/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
