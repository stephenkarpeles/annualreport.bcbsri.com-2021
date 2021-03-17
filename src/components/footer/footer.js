import { Link } from "gatsby"
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
              <li><Link to="/">2019 Annual Report</Link></li>
              <li><Link to="/">2019 Community Report</Link></li>
            </ul>
          </div>
          <div className="footer__col footer__col--2">
            <ul>
              <li><Link to="/">Privacy Statement</Link></li>
              <li><Link to="/">Security &amp; Fraud Protection</Link></li>
              <li><Link to="/">Terms &amp; Conditions</Link></li>
            </ul>
            <p>We comply with applicable Federal civil rights laws and do not discriminate on the basis of race, color, national origin, age, disability, or sex. We also provide language assistance. Read our Nondiscrimination and Language Assistance notice.</p>
            <p>Copyright &copy; 2021 Blue Cross &amp; Blue Shield of Rhode Island. All rights reserved. All trademarks unless otherwise noted are the property of Blue Cross &amp; Blue Shield of Rhode Island or the Blue Cross and Blue Shield Association. Blue Cross &amp; Blue Shield of Rhode Island is an independent licensee of the Blue Cross and Blue Shield Association.</p>
          </div>
          <div className="footer__col footer__col--3">
            <ul>
              <li><Link to="/"><StaticImage src="../../images/icons/icon-twitter.svg" alt=""/></Link></li>
              <li><Link to="/"><StaticImage src="../../images/icons/icon-facebook.svg" alt=""/></Link></li>
              <li><Link to="/"><StaticImage src="../../images/icons/icon-linkedin.svg" alt=""/></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
