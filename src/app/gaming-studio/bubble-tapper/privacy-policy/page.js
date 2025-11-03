'use client';

import Link from 'next/link';

export default function BubbleTapperPrivacy() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/gaming-studio/bubble-tapper"
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Bubble Tapper</span>
          </Link>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent text-center">
            Privacy Policy
          </h1>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-purple-100 leading-relaxed space-y-6">
            
            <p>
              This Privacy Policy governs the use of the mobile game <strong className="text-white">Bubble Tapper</strong> (hereby referred to as &quot;Application&quot;) developed by <strong className="text-white">Alpha Code Labs</strong> (hereby referred to as &quot;Service Provider&quot;). This Application is provided as a free game and is intended for use &quot;AS IS.&quot;
            </p>

            <div className="space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. No Data Collection</h2>
                <p>
                  Bubble Tapper does not collect, store, or share any personal data from its users. The game does not require users to create accounts, provide personal information (such as name, email address, or phone number), or grant access to device features beyond what is required for normal gameplay.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. No Advertisements</h2>
                <p>
                  This game contains no advertisements or third-party marketing integrations. Your gameplay experience will not be interrupted or influenced by in-game ads or marketing campaigns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
                <p>
                    Bubble Tapper is built using the Unity game engine. While the game itself does not collect any data, please be aware that Unity may collect certain technical data (e.g., device model, operating system, unique device identifiers) solely for performance analytics or crash reporting. This data collection, if any, is governed by Unity&apos;s own privacy policy. We recommend reviewing Unity&apos;s Privacy Policy to understand their data-handling practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Children&apos;s Privacy</h2>
                <p>
                  Bubble Tapper does not knowingly collect personal information from children under the age of 13 (or the relevant age of majority in your jurisdiction). Since no personal data is requested or stored, no special parental consent is required. If you believe your child has provided any personal information without your consent, please contact us, and we will take steps to remove such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Security</h2>
                <p>
                  Although Bubble Tapper does not collect personal information, we are committed to ensuring that our game and any minimal technical data collected through Unity adhere to industry-standard security measures. Users are advised to keep their mobile devices updated and secure against unauthorized access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. You are advised to review this page periodically for any changes. Continued use of the Application after any modifications indicates acceptance of those updates.
                </p>
              </section>

            </div>

            <div className="mt-8 pt-6 border-t border-purple-400/20">
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
                <a href="mailto:aclinnovate@gmail.com" className="text-purple-300 hover:text-purple-200 underline transition-colors">
                  aclinnovate@gmail.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}