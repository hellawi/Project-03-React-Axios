import React, { useEffect, useState } from "react";
import './Politics.css'
import axios from "axios";

function Politics() {
  return (
    <div className="terms">
      <h1 className="heading">Learn Terms of use before using a site!</h1>
      <p className="pp">
        This website is operated by CoinMarketCrypto. Throughout the site, the
        terms “we”, “us” and “our” refer to CoinMarketCrypto. CoinMarketCrypto
        offers this website, including all information, tools and Services
        available from this site to you, the user, conditioned upon your
        acceptance of all terms, conditions, policies and notices stated here.
      </p>
      <p className="pp">
        By visiting our site and/ or purchasing something from us, you engage in
        our “Service” and agree to be bound by the following terms and
        conditions (“Terms of Service”, “Terms”), including those additional
        terms and conditions and policies referenced herein and/or available by
        hyperlink. These Terms of Service apply to all users of the site,
        including without limitation users who are browsers, vendors, customers,
        merchants, and/ or contributors of content. Please read these Terms of
        Service carefully before accessing or using our website. By accessing or
        using any part of the site, you agree to be bound by these Terms of
        Service. If you do not agree to all the terms and conditions of this
        agreement, then you may not access the website or use any Services. If
        these Terms of Service are considered an offer, acceptance is expressly
        limited to these Terms of Service.
      </p>

      <br />
      <div className="sec1">
        <h2>SECTION 1 - ONLINE STORE TERMS</h2>
        <p className="pp">
          By agreeing to these Terms of Service, you represent that you are at
          least the age of majority in your state or province of residence, or
          that you are the age of majority in your state or province of
          residence and you have given us your consent to allow any of your
          minor dependents to use this site. You may not use our products for
          any illegal or unauthorized purpose nor may you, in the use of the
          Service, violate any laws in your jurisdiction (including but not
          limited to copyright laws). You must not transmit any worms or viruses
          or any code of a destructive nature. A breach or violation of any of
          the Terms will result in an immediate termination of your Services.
        </p>
      </div>
      <br />
      <div className="sec2">
        <h2>SECTION 2 - GENERAL CONDITIONS</h2>
        <p className="pp">
          We reserve the right to refuse service to anyone for any reason at any
          time. You understand that your content (not including credit card
          information), may be transferred unencrypted and involve (a)
          transmissions over various networks; and (b) changes to conform and
          adapt to technical requirements of connecting networks or devices.
          Credit card information is always encrypted during transfer over
          networks. You agree not to reproduce, duplicate, copy, sell, resell or
          exploit any portion of the Service, use of the Service, or access to
          the Service or any contact on the website through which the service is
          provided, without express written permission by us. The headings used
          in this agreement are included for convenience only and will not limit
          or otherwise affect these Terms.
        </p>
      </div>
      <br />
      <div className="sec3">
        <h2>
          SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
        </h2>
        <p className="pp">
          We are not responsible if information made available on this site is
          not accurate, complete or current. The material on this site is
          provided for general information only and should not be relied upon or
          used as the sole basis for making decisions without consulting
          primary, more accurate, more complete or more timely sources of
          information. Any reliance on the material on this site is at your own
          risk. This site may contain certain historical information. Historical
          information, necessarily, is not current and is provided for your
          reference only. We reserve the right to modify the contents of this
          site at any time, but we have no obligation to update any information
          on our site. You agree that it is your responsibility to monitor
          changes to our site.
        </p>
      </div>
      <br />
      <div className="sec4">
        <h2>SECTION 4 - OPTIONAL TOOLS</h2>
        <p className="pp">
          We may provide you with access to third-party tools over which we
          neither monitor nor have any control nor input. You acknowledge and
          agree that we provide access to such tools ”as is” and “as available”
          without any warranties, representations or conditions of any kind and
          without any endorsement. We shall have no liability whatsoever arising
          from or relating to your use of optional third-party tools. Any use by
          you of the optional tools offered through the site is entirely at your
          own risk and discretion and you should ensure that you are familiar
          with and approve of the terms on which tools are provided by the
          relevant third-party provider(s). We may also, in the future, offer
          new Services and/or features through the website (including, the
          release of new tools and resources). Such new features and/or Services
          shall also be subject to these Terms of Service.
        </p>
      </div>
      <br />
      <div className="sec5">
        <h2>SECTION 5 - THIRD-PARTY LINKS</h2>
        <p className="pp">
          Certain content, products and Services available via our Service may
          include materials from third-parties. Third-party links on this site
          may direct you to third-party websites that are not affiliated with
          us. We are not responsible for examining or evaluating the content or
          accuracy and we do not warrant and will not have any liability or
          responsibility for any third-party materials or websites, or for any
          other materials, products, or Services of third-parties. We are not
          liable for any harm or damages related to the purchase or use of
          goods, Services, resources, content, or any other transactions made in
          connection with any third-party websites. Please review carefully the
          third-party's policies and practices and make sure you understand them
          before you engage in any transaction. Complaints, claims, concerns, or
          questions regarding third-party products should be directed to the
          third-party.
        </p>
      </div>
      <br />
      <div className="sec6">
        <h2>SECTION 6 - ERRORS, INACCURACIES AND OMISSIONS</h2>
        <p className="pp">
          Occasionally there may be information on our site or in the Service
          that contains typographical errors, inaccuracies or omissions that may
          relate to product descriptions, pricing, promotions, offers, product
          shipping charges, transit times and availability. We reserve the right
          to correct any errors, inaccuracies or omissions, and to change or
          update information or cancel orders if any information in the Service
          or on any related website is inaccurate at any time without prior
          notice (including after you have submitted your order). We undertake
          no obligation to update, amend or clarify information in the Service
          or on any related website, including without limitation, pricing
          information, except as required by law. No specified update or refresh
          date applied in the Service or on any related website, should be taken
          to indicate that all information in the Service or on any related
          website has been modified or updated.
        </p>
      </div>
      <br />
      <div className="sec7">
        <h2>SECTION 7 - PROHIBITED USES</h2>
        <p className="pp">
          In addition to other prohibitions as set forth in the Terms of
          Service, you are prohibited from using the site or its content: (a)
          for any unlawful purpose; (b) to solicit others to perform or
          participate in any unlawful acts; (c) to violate any international,
          federal, provincial or state regulations, rules, laws, or local
          ordinances; (d) to infringe upon or violate our intellectual property
          rights or the intellectual property rights of others; (e) to harass,
          abuse, insult, harm, defame, slander, disparage, intimidate, or
          discriminate based on gender, sexual orientation, religion, ethnicity,
          race, age, national origin, or disability; (f) to submit false or
          misleading information; (g) to upload or transmit viruses or any other
          type of malicious code that will or may be used in any way that will
          affect the functionality or operation of the Service or of any related
          website, other websites, or the Internet; (h) to collect or track the
          personal information of others; (i) to spam, phish, pharm, pretext,
          spider, crawl, or scrape; (j) for any obscene or immoral purpose; or
          (k) to interfere with or circumvent the security features of the
          Service or any related website, other websites, or the Internet. We
          reserve the right to terminate your use of the Service or any related
          website for violating any of the prohibited uses.
        </p>
      </div>
      <br />
      <div className="sec8">
        <h2>SECTION 8 - ENTIRE AGREEMENT</h2>
        <p className="pp">
          The failure of us to exercise or enforce any right or provision of
          these Terms of Service shall not constitute a waiver of such right or
          provision. These Terms of Service and any policies or operating rules
          posted by us on this site or in respect to The Service constitutes the
          entire agreement and understanding between you and us and govern your
          use of the Service, superseding any prior or contemporaneous
          agreements, communications and proposals, whether oral or written,
          between you and us (including, but not limited to, any prior versions
          of the Terms of Service). Any ambiguities in the interpretation of
          these Terms of Service shall not be construed against the drafting
          party.
        </p>
      </div>
      <br />
      <div className="sec9">
        <h2>SECTION 9 - GOVERNING LAW</h2>
        <p className="pp">
          These Terms of Service and any separate agreements whereby we provide
          you Services shall be governed by and construed in accordance with the
          laws of Bulgaria.
        </p>
      </div>
      <br />
      <div className="sec10">
        <h2>SECTION 10 - CHANGES TO TERMS OF SERVICE</h2>
        <p className="pp">
          You can review the most current version of the Terms of Service at any
          time at this page. We reserve the right, at our sole discretion, to
          update, change or replace any part of these Terms of Service by
          posting updates and changes to our website. It is your responsibility
          to check our website periodically for changes. Your continued use of
          or access to our website or the Service following the posting of any
          changes to these Terms of Service constitutes acceptance of those
          changes.
        </p>
      </div>
      <br />
      <div className="sec11">
        <h2>SECTION 11 - CONTACT INFORMATION</h2>
        <p className="pp">
          Questions about the Terms of Service should be sent to us at{" "}
          <a href="mailto:terms@cmc.eu">terms@cmc.eu</a>.
        </p>
      </div>
      <p className="pp">Our contact information is posted below:</p>
      <ul>
        <li>
          Mobile number of central office:
          <a href="tel:+359879283655">+359 87 928 3655</a>
        </li>
        <li>
          Email address of central office:
          <a href="mailto:global@cmc.eu">central@cmc.eu</a>
        </li>
        <li>
          Central office address: Bul. Slivnitsa, 154, Varna, Obshtina Varna,
          9000, Bulgaria
        </li>
        <li>Company name: ЕООД "КойнМаркетКрипто България"</li>
        <li>VAT Number: 7544378383498238</li>
      </ul>
      <footer className="footer-terms">
        <img src="../public/logo.jpg" alt="" />
        <p>Copyright ©CoinMarketCrypto. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Politics;
