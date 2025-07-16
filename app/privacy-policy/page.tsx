"use client";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

const VantaBirdsBackground = dynamic(
  () => import("../components/VantaBirdsBackground"),
  {
    ssr: false,
  }
);

export default function PrivacyPolicy() {
  return (
    <VantaBirdsBackground>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-10 bg-black/80 backdrop-blur-md flex-1 px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Privacy Policy
            </h1>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-gray-300 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  ZALOS AI LTD'S ONLINE PRIVACY POLICY
                </h2>
                <p className="text-sm text-gray-400">Last updated: 2025</p>
              </div>

              <section>
                <p className="leading-relaxed mb-4">
                  Welcome to ZALOS AI LTD's privacy policy.
                </p>
                <p className="leading-relaxed mb-4">
                  We are ZALOS AI LTD ("we", "us", "our"). Our company
                  registration number is 16202720 and our registered address is
                  47 Randolph Avenue, London, England, W9 1BQ.
                </p>
                <p className="leading-relaxed mb-4">
                  For the purposes of UK and EU laws regarding data protection,
                  we are the data controller, and we are registered with the UK
                  Information Commissioner's Office (ICO) under registration
                  number [PLEASE INSERT YOUR ICO REGISTRATION NUMBER].
                </p>
                <p className="leading-relaxed mb-4">
                  This privacy policy applies to: (i) individuals who visit and
                  use our website at{" "}
                  <a
                    href="https://www.zalos.io/"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    https://www.zalos.io/
                  </a>{" "}
                  (the "Website") and platform (the "Platform"), engage with us
                  via our Website, Platform, social media accounts, and in
                  connection with any purchases, contracts or related matters;
                  (ii) individuals we deal with in their business capacity, such
                  as representatives of our customers or suppliers or investors;
                  and (iii) individuals that apply for work with us ("you",
                  "your").
                </p>
                <p className="leading-relaxed">
                  It is important that you read this privacy policy together
                  with any other privacy policy or fair processing policy we may
                  provide on specific occasions when we are collecting or
                  processing personal data about you so that you are fully aware
                  of how and why we are using your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Privacy Statement
                </h2>
                <p className="leading-relaxed mb-4">
                  Your privacy is important to us. We believe in a responsible
                  and pro-active approach when dealing with your personal
                  information.
                </p>
                <p className="leading-relaxed mb-4">
                  This policy sets out how and why we collect, store, use and
                  share personal information generally, our dedication to
                  protect it, as well as your rights in relation to your
                  personal information and details of how to contact us and
                  supervisory authorities if you have a complaint.
                </p>
                <p className="leading-relaxed">
                  If you have any questions about how we use your personal data,
                  please contact:{" "}
                  <a
                    href="mailto:info@zalos.io"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    info@zalos.io
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. The types of personal data we collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We may collect and use the following information about you:
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>Identity Data</strong> including your first name and
                  surname.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Contact Data</strong> including your email address.
                </p>
                <p className="leading-relaxed">
                  We will indicate where any personal information we have
                  requested is mandatory. We will also explain the consequences
                  should you decide not to provide information which we have
                  indicated is mandatory. In some circumstances this may mean we
                  are unable to provide you with a certain service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Lawful basis for processing
                </h2>
                <p className="leading-relaxed mb-4">
                  We will only process your personal data where we have a lawful
                  basis to do so. The lawful basis will depend on the purposes
                  for which we have collected and use your personal information.
                  In almost every case, the lawful basis will be one of the
                  following:
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>Our legitimate business interests:</strong> Where we
                  have a legitimate interest to use personal data regarding you
                  in relation to the operation of our business.
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>Performance of an agreement with you</strong> (or in
                  order to take steps prior to entering into an agreement with
                  you): For example, where you have provided your information in
                  order to receive details in relation to our services.
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>Compliance with the law:</strong> Where we are subject
                  to a legal obligation and need to use your personal
                  information in order to comply with that obligation.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Consent:</strong> Where you have given consent for us
                  to process your personal data for a specific purpose.
                </p>
                <p className="leading-relaxed mb-4">
                  Please find below the purposes for which we process your
                  personal data, the categories of data used, and our lawful
                  bases for doing so. We collect this data from you directly or
                  when you use our Website or Platform.
                </p>

                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="font-medium text-white mb-2">
                      Purpose of processing:
                    </p>
                    <p className="mb-2">
                      To respond to queries, enter into and fulfil the services
                      for customers, and manage our business relationship with
                      you.
                    </p>
                    <p className="mb-2">
                      <strong>Category of personal data:</strong> Identity Data,
                      Contact Data.
                    </p>
                    <p>
                      <strong>Lawful bases:</strong> Performance of an agreement
                      with you; Our legitimate interests for our business
                      operations.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="font-medium text-white mb-2">
                      Purpose of processing:
                    </p>
                    <p className="mb-2">For direct marketing.</p>
                    <p className="mb-2">
                      <strong>Category of personal data:</strong> Identity Data,
                      Contact Data.
                    </p>
                    <p>
                      <strong>Lawful bases:</strong> Consent; Our legitimate
                      interests for our business operations.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="font-medium text-white mb-2">
                      Purpose of processing:
                    </p>
                    <p className="mb-2">
                      To set and operate cookies and similar technologies on our
                      Website and Platform.
                    </p>
                    <p className="mb-2">
                      <strong>Category of personal data:</strong> Technical
                      Data; Usage Data.
                    </p>
                    <p>
                      <strong>Lawful bases:</strong> Consent; Our legitimate
                      interests for our business operations.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="font-medium text-white mb-2">
                      Purpose of processing:
                    </p>
                    <p className="mb-2">To handle complaints and disputes.</p>
                    <p className="mb-2">
                      <strong>Category of personal data:</strong> Identity Data,
                      Contact Data.
                    </p>
                    <p>
                      <strong>Lawful bases:</strong> Our legitimate interests
                      for our business operations.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="font-medium text-white mb-2">
                      Purpose of processing:
                    </p>
                    <p className="mb-2">
                      To comply with the law and to enforce our legal rights.
                    </p>
                    <p className="mb-2">
                      <strong>Category of personal data:</strong> Identity Data,
                      Contact Data.
                    </p>
                    <p>
                      <strong>Lawful bases:</strong> To comply with our legal
                      obligations; Our legitimate interests for our business
                      operations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  3. If you fail to provide personal data
                </h2>
                <p className="leading-relaxed">
                  Where we need to collect personal data by law, or under the
                  terms of an agreement we have with you, and you fail to
                  provide that data when requested, we may not be able to
                  perform the agreement we have or are trying to enter into with
                  you (for example, to provide you with our services). In this
                  case, we may have to cancel the performance of our services,
                  but we will notify you if this is the case at the time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  4. How we share your personal data with third-parties
                </h2>
                <p className="leading-relaxed mb-4">
                  We may share your personal information with our suppliers,
                  business partners, prospective investors and other providers,
                  such as cloud hosting providers (e.g., AWS, Vercel), AI and
                  data processing partners (e.g., OpenAI, Gemini), and other
                  technology service providers (e.g., Pinecone, Unstructured,
                  Aspose). They will only process your personal data on our
                  instructions and they are subject to a duty of
                  confidentiality. However, these third-party service providers
                  may have their own privacy policies in respect of the
                  information we are required to provide to them. For these
                  providers, we recommend that you read their privacy policies
                  so you can understand the manner in which your personal
                  information will be handled by them.
                </p>
                <p className="leading-relaxed mb-4">
                  Once you leave our Website and Platform, for example via a
                  link, you are no longer governed by this privacy policy or our
                  Terms & Conditions.
                </p>
                <p className="leading-relaxed mb-4">
                  We may disclose your personal information to other third
                  parties in the following cases:
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>
                    In the event that we sell any business or assets, in which
                    case we may disclose your personal information to the
                    prospective buyer of such business or assets;
                  </li>
                  <li>
                    If we are under a duty to disclose or share your personal
                    information in order to comply with any legal or regulatory
                    obligation or request;
                  </li>
                  <li>
                    In the case of an emergency, in which case we shall share
                    personal data as is necessary and proportionate; or
                  </li>
                  <li>
                    To protect the rights, property or safety of us or our
                    users, or others, and in order to enforce or apply the terms
                    of our contracts with customers (this includes exchanging
                    information with other companies and organisations for the
                    purposes of fraud protection and credit risk reduction).
                  </li>
                </ul>
                <p className="leading-relaxed">
                  We require all third parties to respect the security of your
                  personal data and to treat it in accordance with the law. We
                  do not allow our third parties to use your personal data for
                  their own purposes and only permit them to process your
                  personal data for specified purposes and in accordance with
                  our instructions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  5. Marketing
                </h2>
                <p className="leading-relaxed mb-4">
                  Where permitted by law or where we have asked for your
                  consent, we may send you marketing materials which we believe
                  may be of interest to you.
                </p>
                <p className="leading-relaxed mb-4">
                  We strive to provide you with choices regarding certain
                  personal data uses, particularly around marketing and
                  advertising. You may receive marketing communications from us
                  if you have requested information from us or engaged with us
                  and you have not opted out of receiving that marketing.
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>Third-party marketing.</strong> We are committed to
                  protecting and respecting your personal data. We will not sell
                  or rent your personal data to any third parties. We will not
                  share your personal data with third parties for marketing
                  purposes.
                </p>
                <p className="leading-relaxed">
                  <strong>Opting out.</strong> You can ask us to stop sending
                  you marketing messages at any time by contacting us at any
                  time at{" "}
                  <a
                    href="mailto:info@zalos.io"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    info@zalos.io
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  6. Cookies
                </h2>
                <p className="leading-relaxed">
                  Our Website uses cookies to distinguish you from other users
                  of our Website. This helps us to provide you with a good
                  experience when you browse our Website and also allows us to
                  improve our Website. A cookie is a small file of letters and
                  numbers that we store on your browser or the hard drive of
                  your computer. Cookies contain information that is transferred
                  to your computer's hard drive. You can find details of the
                  cookies we use on our Website via the cookies notifications on
                  our Website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  7. Age of consent
                </h2>
                <p className="leading-relaxed">
                  By using the Website and Platform, you represent that you are
                  at least the age necessary to sign up to our services and
                  enter into contracts with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  8. Where we store your personal data
                </h2>
                <p className="leading-relaxed mb-4">
                  Your information is stored in the United Kingdom ("UK") or
                  European Economic Area ("EEA"), but we may transfer it to
                  countries outside the UK and EEA.
                </p>
                <p className="leading-relaxed">
                  Whenever we transfer your information internationally, we will
                  take steps which are reasonably necessary to ensure that
                  adequate safeguards are in place to protect your personal
                  information and to make sure it is treated securely and in
                  accordance with this privacy policy. In these cases, we rely
                  on approved data transfer mechanisms (such as the EU "Standard
                  Contractual Clauses" or UK "International Data Transfer
                  Agreement" or "UK Addendum") to ensure your information is
                  subject to adequate safeguards in the recipient country.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  9. Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  We take your privacy seriously and want you to be aware of
                  your rights, as follows:
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>
                    You have the right to request (i) confirmation of whether we
                    process your personal data and (ii) access to a copy of the
                    personal data retained;
                  </li>
                  <li>
                    You have the right to have inaccurate personal data
                    rectified, or completed if it is incomplete;
                  </li>
                  <li>
                    In certain situations, you have the right to have your
                    personal data erased or transmitted directly to another
                    company, where technically feasible;
                  </li>
                  <li>
                    Where the processing of your personal data is based on your
                    consent, you have the right to withdraw your consent at any
                    time without impact to any data processing activities that
                    have taken place before such withdrawal;
                  </li>
                  <li>
                    You have the right not to be subject to any decisions based
                    solely on automated processing, including profiling, which
                    has legal or other similarly significantly effects on you
                    unless we have your consent, it is authorised by law or it
                    is necessary for the performance of an agreement; and
                  </li>
                  <li>
                    In certain situations, you have the right to restrict or
                    object to our processing of personal data regarding you.
                  </li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Before we can respond to a request to exercise one or more of
                  the rights listed above, you may be required to verify your
                  identity or your account details. This is a security measure
                  to ensure that personal data is not disclosed to any person
                  who has no right to receive it. We may also contact you to ask
                  you for further information in relation to your request to
                  speed up our response.
                </p>
                <p className="leading-relaxed mb-4">
                  Please send us an email at{" "}
                  <a
                    href="mailto:info@zalos.io"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    info@zalos.io
                  </a>{" "}
                  if you would like to exercise any of your rights.
                </p>
                <p className="leading-relaxed mb-4">
                  In addition to your rights outlined above, if you are not
                  satisfied with our response to a request you make, or how we
                  process your personal information, you can make a complaint to
                  the data protection regulator in your habitual place of
                  residence.
                </p>
                <p className="leading-relaxed mb-2">
                  For individuals in the EEA – the contact information for the
                  data protection regulator in your place of residence can be
                  found here:{" "}
                  <a
                    href="https://edpb.europa.eu/about-edpb/board/members_en"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    https://edpb.europa.eu/about-edpb/board/members_en
                  </a>
                </p>
                <p className="leading-relaxed">
                  For individuals in the UK – the contact information for the
                  UK's data protection regulator can be found here:{" "}
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    https://ico.org.uk/make-a-complaint/
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  10. Data Security
                </h2>
                <p className="leading-relaxed mb-4">
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorised way, altered or disclosed.
                </p>
                <p className="leading-relaxed mb-4">
                  We take steps to ensure that your information is treated
                  securely and in accordance with this policy. Unfortunately,
                  the transmission of information via the internet is not
                  completely secure. Although we will do our best to protect
                  your personal data, for example, by encryption, we cannot
                  guarantee the security of your information transmitted via the
                  internet; any transmission is at your own risk.
                </p>
                <p className="leading-relaxed mb-4">
                  We have appropriate technical and organisational measures to
                  ensure a level of security appropriate to the risk of varying
                  likelihood and severity for the rights and freedoms of you and
                  other individuals. We maintain these technical and
                  organisational measures and will amend them from time to time
                  to improve the overall security of our systems.
                </p>
                <p className="leading-relaxed mb-4">
                  In addition, we limit access to your personal data to those
                  employees and other third parties who have a business need to
                  know.
                </p>
                <p className="leading-relaxed">
                  We may, from time to time, include links to and from the
                  websites of our partner networks, advertisers and affiliates.
                  If you follow a link to any of these websites, please note
                  that these websites have their own privacy policies and that
                  we do not accept any responsibility or liability for these
                  policies. Please check these policies before you submit any
                  information to these websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  11. How long we keep your personal data
                </h2>
                <p className="leading-relaxed mb-4">
                  We retain your information for as long as it is necessary for
                  the purposes for which it was collected and processed.
                  Additionally, we retain data for the purposes of satisfying
                  any legal, regulatory, accounting, finance, tax, reporting and
                  insurance requirements after which we take steps to destroy or
                  de-identify personal data when the information is no longer
                  required for any purpose for which it may be used or disclosed
                  by us and we are no longer required by law or regulation to
                  retain the information. Please note that this will be assessed
                  on a case-by-case basis.
                </p>
                <p className="leading-relaxed">
                  After our agreement with you expires or terminates, or our
                  relationship with you has otherwise ended, we may also store
                  your information in an aggregated and anonymised format.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  13. Complaints
                </h2>
                <p className="leading-relaxed mb-4">
                  In the event that you wish to make a complaint about how we
                  process your personal data, please contact us in the first
                  instance at{" "}
                  <a
                    href="mailto:info@zalos.io"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    info@zalos.io
                  </a>{" "}
                  and we will endeavour to deal with your request as soon as
                  possible.
                </p>
                <p className="leading-relaxed mb-4">
                  You can also complain to the ICO if you are unhappy with how
                  we have used your data.
                </p>
                <div className="bg-black/30 rounded-lg p-4 mb-4">
                  <p className="font-medium text-white mb-2">
                    The ICO's address:
                  </p>
                  <p>Information Commissioner's Office</p>
                  <p>Wycliffe House</p>
                  <p>Water Lane</p>
                  <p>Wilmslow</p>
                  <p>Cheshire</p>
                  <p>SK9 5AF</p>
                  <p>Helpline number: 0303 123 1113</p>
                  <p>
                    ICO website:{" "}
                    <a
                      href="https://www.ico.org.uk"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      https://www.ico.org.uk
                    </a>
                  </p>
                </div>
                <p className="leading-relaxed">
                  If you are in the EEA, you can contact the relevant data
                  protection regulator using the contact information available
                  via the link in section 9 above.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  14. Changes
                </h2>
                <p className="leading-relaxed">
                  We will generally notify you of any material changes to this
                  policy, through a notice provided via the Website and Platform
                  or otherwise supplied to you. However, you should look at this
                  policy regularly to check for any changes. We will also update
                  the "Last Updated" date at the top of this policy, which
                  reflects the effective date of such policy. Your continued
                  engagement with us after the date of the updated policy
                  constitutes your acceptance of the updated policy. If you do
                  not agree to the updated policy, you must stop your engagement
                  with us.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </VantaBirdsBackground>
  );
}
