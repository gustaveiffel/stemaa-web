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
                <strong>Effective Date:</strong> March 12, 2026
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">1. Information We Collect</h3>
              <p>
                When you use our website, we collect the following information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, and message content (only when submitted via the contact form).</li>
                <li><strong>Usage Data:</strong> We use PostHog (hosted in the EU) to collect anonymous information about how you interact with our website, such as page views and clicks. No cookies are used and no persistent user identifiers are stored.</li>
                <li><strong>Technical Data:</strong> IP address, browser user agent, and device information (automatically collected).</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">2. Legal Basis for Processing</h3>
              <p>
                We process your personal data on the following legal bases (Article 6 GDPR):
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Consent (Art. 6(1)(a)):</strong> When you voluntarily submit information through the contact form.</li>
                <li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> For anonymous analytics to improve our website and services. We use PostHog in cookieless mode, meaning no personal identifiers are stored across sessions.</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">3. How We Use Your Information</h3>
              <p>
                We use the information to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Respond to your inquiries and messages</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Communicate with you about our services</li>
                <li>Prevent spam and abuse</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">4. Data Storage and Security</h3>
              <p>
                Your data is stored securely using:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Cloudflare:</strong> For database storage (D1) and hosting. Cloudflare is a US-based company operating under the EU-US Data Privacy Framework, with data processing compliant with standard contractual clauses (SCCs).</li>
                <li><strong>PostHog:</strong> For anonymous analytics data, hosted on PostHog&apos;s EU infrastructure (Frankfurt, Germany).</li>
              </ul>
              <p className="mt-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">5. Data Retention</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Contact form submissions:</strong> Retained for 2 years after the last exchange, then deleted.</li>
                <li><strong>Analytics data:</strong> Anonymous usage data is retained for up to 24 months.</li>
              </ul>
              <p className="mt-2">
                You may request deletion of your data at any time by contacting us.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">6. Your Rights (GDPR)</h3>
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
              <p className="mt-2">
                You may also lodge a complaint with the French data protection authority (CNIL) at{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-neutral-100 underline hover:text-white">cnil.fr</a>.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">7. Third-Party Services</h3>
              <p>
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Cloudflare, Inc.</strong> — Hosting, CDN, and data storage.</li>
                <li><strong>PostHog, Inc.</strong> — Anonymous website analytics (EU-hosted, cookieless).</li>
              </ul>

              <h3 className="text-neutral-100 font-semibold mt-6">8. Cookies</h3>
              <p>
                This website does not use cookies for tracking or analytics purposes. PostHog operates in
                cookieless mode, meaning no tracking cookies are set on your device. Essential technical cookies
                may be used by our hosting provider (Cloudflare) for security and performance purposes.
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">9. Contact Us</h3>
              <p>
                To exercise any of your rights or if you have questions about this privacy policy,
                please contact us at{" "}
                <a href="mailto:contact@stemaa.com" className="text-neutral-100 underline hover:text-white">contact@stemaa.com</a>{" "}
                or via the contact form on this website.
              </p>
            </div>
          </section>

          {/* Legal Notice (Mentions Légales — LCEN) */}
          <section>
            <h2 className="text-2xl font-[family-name:var(--font-italiana)] uppercase tracking-wider text-neutral-100 mb-6">
              Legal Notice
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <h3 className="text-neutral-100 font-semibold">Publisher</h3>
              <p>
                STEMAA — SASU (Société par actions simplifiée unipersonnelle)<br />
                Share capital: €1,000<br />
                SIRET: 994 779 692 00015 — RCS Marseille<br />
                23 rue de Crémone, 13006 Marseille, France<br />
                Publication Director: Augustin Amann, President<br />
                Email:{" "}
                <a href="mailto:contact@stemaa.com" className="text-neutral-100 underline hover:text-white">contact@stemaa.com</a>
              </p>

              <h3 className="text-neutral-100 font-semibold mt-6">Hosting</h3>
              <p>
                Cloudflare, Inc.<br />
                101 Townsend St, San Francisco, CA 94107, United States<br />
                <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-neutral-100 underline hover:text-white">cloudflare.com</a>
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
