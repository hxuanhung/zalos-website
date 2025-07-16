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

export default function TermsAndConditions() {
  return (
    <VantaBirdsBackground>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-10 bg-black/80 backdrop-blur-md flex-1 px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Terms & Conditions
            </h1>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-gray-300 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  TERMS & CONDITIONS
                </h2>
                <p className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>

              <section>
                <p className="leading-relaxed mb-4">
                  These Terms of Use constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  (&quot;you&quot;) and Zalos (&quot;Company&quot;,
                  &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
                  concerning your access to and use of the{" "}
                  <a
                    href="https://zalos.io"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    zalos.io
                  </a>{" "}
                  website as well as any other media form, media channel, mobile
                  website or mobile application related, linked, or otherwise
                  connected thereto (collectively, the &quot;Site&quot;). We are
                  registered in the United Kingdom and have our registered
                  office at. You agree that by accessing the Site, you have
                  read, understood, and agreed to be bound by all of these Terms
                  of Use.{" "}
                  <strong className="text-white">
                    IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU
                    ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
                    DISCONTINUE USE IMMEDIATELY.
                  </strong>
                </p>

                <p className="leading-relaxed mb-4">
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Use at any time and for any reason.                   We will alert you
                  about any changes by updating the &quot;Last updated&quot; date of these
                  Terms of Use, and you waive any right to receive specific
                  notice of each such change. It is your responsibility to
                  periodically review these Terms of Use to stay informed of
                  updates. You will be subject to, and will be deemed to have
                  been made aware of and to have accepted, the changes in any
                  revised Terms of Use by your continued use of the Site after
                  the date such revised Terms of Use are posted.
                </p>

                <p className="leading-relaxed mb-4">
                  The information provided on the Site is not intended for
                  distribution to or use by any person or entity in any
                  jurisdiction or country where such distribution or use would
                  be contrary to law or regulation or which would subject us to
                  any registration requirement within such jurisdiction or
                  country. Accordingly, those persons who choose to access the
                  Site from other locations do so on their own initiative and
                  are solely responsible for compliance with local laws, if and
                  to the extent local laws are applicable.
                </p>

                <p className="leading-relaxed mb-4">
                  The Site is not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability
                  Act (HIPAA), Federal Information Security Management Act
                  (FISMA), etc.), so if your interactions would be subject to
                  such laws, you may not use this Site. You may not use the Site
                  in a manner that would violate the Gramm-Leach-Bliley Act
                  (GLBA).
                </p>

                <p className="leading-relaxed">
                  All users who are minors in the jurisdiction in which they
                  reside (generally under the age of 18) must have the
                  permission of, and be directly supervised by, their parent or
                  guardian to use the Site. If you are a minor, you must have
                  your parent or guardian read and agree to these Terms of Use
                  prior to you using the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms & Conditions,
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-black/30 rounded-lg">
                  <p className="font-medium text-white">Zalos AI Limited</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@zalos.io"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      info@zalos.io
                    </a>
                  </p>
                  <p>Company Registration Number: 16202720</p>
                  <p>Registered in: England and Wales</p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </VantaBirdsBackground>
  );
}
