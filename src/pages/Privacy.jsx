import React from "react";
import {MdOutlineArticle} from 'react-icons/md'

const Privacy = () => {
  return (
    <div className="mx-auto w-4/5 pt-32 " >
      <div className="rounded-md bg-white text-black py-8 px-20 text-justify">
      <div className="flex justify-between items-center w-fit text-2xl font-bold">
      <MdOutlineArticle className="mr-3"/>
        <p>Privacy Policy</p>
        </div>
        <div className="mt-4 text-lg">
          <h2 className="font-semibold ">1. <span className="underline underline-offset-2">Privacy Policy for CryptoNaukri</span></h2>
          <p className="mt-2 text-base">
            At CryptoNaukri, accessible from
            <a href="http://www.cryptonaukri.com/">{" "}
              http://www.cryptonaukri.com/
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by CryptoNaukri and how we use it.
          </p>
          <p className="text-base mb-4 ">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to Contact through email at{" "}
            <span className="text-cyan-600">support@cryptonaukri.com</span>
          </p>

          <h2 className="font-semibold ">2. <span className="underline underline-offset-2">Log Files</span></h2>
          <p className="mt-2 mb-4 text-base ">
            CryptoNaukri follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>

          <h2 className="font-semibold ">3. <span className="underline underline-offset-2">Cookies and Web Beacons</span></h2>
          <p className="mt-2 mb-4 text-base ">
            Like any other website, CryptoNaukri uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>

          <h2 className="font-semibold ">4. <span className="underline underline-offset-2">Google DoubleClick DART Cookie</span></h2>
          <p className="mt-2 text-base mb-4">
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –{" "}
            <a href="https://policies.google.com/technologies/ads" className="text-cyan-600">
              https://policies.google.com/technologies/ads
            </a>
          </p>

          <h2 className="font-semibold ">5. <span className="underline underline-offset-2">Privacy Policies</span></h2>
          <p className="mt-2 text-base ">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on CryptoNaukri,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>
          <p className="text-base mb-4 ">
            Note that CryptoNaukri has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>

          <h2 className="font-semibold ">6. <span className="underline underline-offset-2">Third Party Privacy Policies</span></h2>
          <p className="mt-2 text-base ">
            CryptoNaukri's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You may find a complete list of
            these Privacy Policies and their links here: Privacy Policy Links.
          </p>
          <p className="text-base mb-4 ">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites. What Are Cookies?
          </p>

          <h2 className="font-semibold ">7. <span className="underline underline-offset-2">Children's Information</span></h2>
          <p className="mt-2 text-base ">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p className="text-base mb-4 ">
            CryptoNaukri does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to Contact immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h2 className="font-semibold ">8. <span className="underline underline-offset-2">Online Privacy Policy Only</span></h2>
          <p className="mt-2 mb-4 text-base ">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in CryptoNaukri. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>

          <h2 className="font-semibold ">9. <span className="underline underline-offset-2">Consent</span></h2>
          <p className="mt-2 mb-4 text-base ">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;