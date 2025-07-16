'use client';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

const VantaBirdsBackground = dynamic(
  () => import('../components/VantaBirdsBackground'),
  {
    ssr: false,
  },
);

export default function Support() {
  return (
    <VantaBirdsBackground>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-10 bg-black/80 backdrop-blur-md flex-1 px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Support
            </h1>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-gray-300 space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get Help with Zalos
                </h2>
                <p className="text-lg text-gray-400">
                  We&apos;re here to help you get the most out of Zalos. Contact our
                  support team for assistance.
                </p>
              </div>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Email Support
                    </h4>
                    <p className="mb-2">
                      Primary Support:{' '}
                      <a
                        href="mailto:support@zalos.io"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        support@zalos.io
                      </a>
                    </p>
                    <p className="mb-2">
                      General Inquiries:{' '}
                      <a
                        href="mailto:info@zalos.io"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        info@zalos.io
                      </a>
                    </p>
                    <p className="text-sm text-gray-400">
                      We respond within 24 hours
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Company Address
                    </h4>
                    <p className="mb-1">Zalos AI Limited</p>
                    <p className="mb-1">47 Randolph Avenue</p>
                    <p className="mb-1">London, England W9 1BQ</p>
                    <p className="mb-1">United Kingdom</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Company Registration: 16202720
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Support Hours
                </h3>
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Email Support
                      </h4>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM GMT
                      </p>
                      <p className="text-gray-300">
                        Saturday - Sunday: Limited support
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Response Times
                      </h4>
                      <p className="text-gray-300">
                        General Issues: Within 24 hours
                      </p>
                      <p className="text-gray-300">
                        Critical Issues: Within 4 hours
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Types of Support
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technical Support
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Installation issues</li>
                      <li>• Configuration help</li>
                      <li>• Bug reports</li>
                      <li>• Performance issues</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Account Support
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Account access</li>
                      <li>• Billing inquiries</li>
                      <li>• Subscription management</li>
                      <li>• License questions</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      General Inquiries
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Product information</li>
                      <li>• Feature requests</li>
                      <li>• Partnership inquiries</li>
                      <li>• General questions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Getting Help
                </h3>
                <div className="bg-black/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Before Contacting Support
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-base font-medium text-white mb-2">
                        1. Check System Requirements
                      </h5>
                      <p className="text-gray-300">
                        Ensure your system meets the minimum requirements for
                        Zalos Office Add-in:
                      </p>
                      <ul className="text-gray-300 mt-2 ml-4 space-y-1">
                        <li>• Microsoft Office 2016 or later</li>
                        <li>• Windows 10 or later / macOS 10.15 or later</li>
                        <li>• Internet connection required</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-white mb-2">
                        2. Try Basic Troubleshooting
                      </h5>
                      <ul className="text-gray-300 ml-4 space-y-1">
                        <li>• Restart Microsoft Office</li>
                        <li>• Check your internet connection</li>
                        <li>• Update to the latest version</li>
                        <li>• Clear browser cache if using web version</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  When Contacting Support
                </h3>
                <div className="bg-black/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">
                    To help us assist you quickly, please include:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Your operating system and version</li>
                    <li>• Microsoft Office version</li>
                    <li>• Detailed description of the issue</li>
                    <li>• Steps to reproduce the problem</li>
                    <li>• Screenshots or error messages (if applicable)</li>
                    <li>• Your Zalos account email address</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Privacy & Data Protection
                </h3>
                <div className="bg-black/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">
                    We take your privacy seriously. When you contact support, we
                    may collect and process your personal information to provide
                    assistance. This includes:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Contact information (email, name)</li>
                    <li>• Technical information about your system</li>
                    <li>• Details about the issue you&apos;re experiencing</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    For full details on how we handle your data, please see our{' '}
                    <a
                      href="/privacy-policy"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Terms of Support
                </h3>
                <div className="bg-black/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">
                    Our support services are provided in accordance with our{' '}
                    <a
                      href="/terms-and-conditions"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Terms and Conditions
                    </a>
                    . Support is provided for the current version of Zalos and
                    up to one previous major version.
                  </p>
                  <p className="text-gray-300">
                    We reserve the right to discontinue support for outdated
                    versions and will provide reasonable notice when this
                    occurs.
                  </p>
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
