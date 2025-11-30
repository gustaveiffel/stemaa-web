import { ArrowLeft } from "lucide-react";

interface LegalPageProps {
  onNavigate: () => void;
}

export function LegalPage({ onNavigate }: LegalPageProps) {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onNavigate}
          className="group inline-flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="tracking-widest uppercase text-xs">Back</span>
        </button>

        {/* Legal Content */}
        <div className="space-y-16 text-neutral-300">
          {/* Privacy Policy */}
          <section>
            <h2 className="text-2xl font-[family-name:var(--font-italiana)] uppercase tracking-wider text-neutral-100 mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">1. Information We Collect</h3>
              <p>
                When you submit the contact form on our website, we collect the following personal information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>IP address (automatically collected)</li>
                <li>Browser user agent (automatically collected)</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">2. How We Use Your Information</h3>
              <p>
                We use the information you provide to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Respond to your inquiries and messages</li>
                <li>Communicate with you about our services</li>
                <li>Prevent spam and abuse of our contact form</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">3. Data Storage and Security</h3>
              <p>
                Your data is stored securely in Cloudflare D1 databases with industry-standard encryption.
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">4. Data Retention</h3>
              <p>
                We retain your contact form submissions for as long as necessary to respond to your inquiry
                and for our legitimate business purposes. You may request deletion of your data at any time.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">5. Your Rights (GDPR)</h3>
              <p>
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restriction:</strong> Request restriction of processing of your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">6. Third-Party Services</h3>
              <p>
                Our website is hosted on Cloudflare Pages and uses Cloudflare D1 for data storage.
                We do not share your personal information with any other third parties except as required by law.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">7. Cookies</h3>
              <p>
                This website does not use cookies for tracking purposes. However, essential technical cookies
                may be used by our hosting provider (Cloudflare) for security and performance purposes.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">8. Contact Us</h3>
              <p>
                To exercise any of your rights or if you have questions about this privacy policy,
                please contact us using the contact form on this website.
              </p>
            </div>
          </section>

          {/* Legal Notice */}
          <section>
            <h2 className="text-2xl font-[family-name:var(--font-italiana)] uppercase tracking-wider text-neutral-100 mb-6">
              Legal Notice
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <h3 className="text-neutral-100 font-semibold">Website Owner</h3>
              {/* <p>
                STEMAA<br />
                [ Address]<br />
                [Postal Code]<br />
                [Country]
              </p> */}

              <h3 className="text-neutral-100 font-semibold mt-6">Contact</h3>
              <p>
                STEMAA<br />
                Email: contact@stemaa.com<br />
                Website: stemaa.com
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">Hosting</h3>
              <p>
                This website is hosted by:<br />
                Cloudflare, Inc.<br />
                101 Townsend St.<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>
          </section>

          {/* Terms of Use */}
          <section>
            <h2 className="text-2xl font-[family-name:var(--font-italiana)] uppercase tracking-wider text-neutral-100 mb-6">
              Terms of Use
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <h3 className="text-neutral-100 font-semibold">1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website, you accept and agree to be bound by these terms of use
                and our privacy policy.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">2. Use of the Website</h3>
              <p>
                You agree to use this website only for lawful purposes and in a way that does not infringe
                the rights of, restrict, or inhibit anyone else's use of the website.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">3. Intellectual Property</h3>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property
                of STEMAA and is protected by applicable copyright and trademark laws.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">4. Limitation of Liability</h3>
              <p>
                STEMAA shall not be liable for any direct, indirect, incidental, consequential, or punitive
                damages arising out of your access to or use of this website.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">5. Modifications</h3>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the website after
                changes constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="border-t border-neutral-800 pt-8">
            <p className="text-xs text-neutral-600 text-center">
              © {new Date().getFullYear()} STEMAA. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
