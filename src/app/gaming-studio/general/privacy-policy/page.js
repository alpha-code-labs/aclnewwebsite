'use client';

import { useRouter } from 'next/navigation';

export default function GeneralPrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Game</span>
          </button>
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
              This Privacy Policy governs the use of all mobile applications (hereby referred to as &quot;Applications&quot;) developed and published by <strong className="text-white">Alpha Code Labs</strong> (hereby referred to as &quot;Service Provider,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on the Google Play Store. Our Applications are provided as free services and are intended for use &quot;AS IS.&quot;
            </p>

            <p>
              By downloading, installing, or using any of our Applications, you agree to the terms outlined in this Privacy Policy. If you do not agree with any part of this policy, please do not use our Applications.
            </p>

            <div className="space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection and Use</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.1 Personal Data</h3>
                <p>
                  Our Applications are designed with privacy in mind. We generally do not collect personal data from our users, with the following limited exceptions:
                </p>
                
                <p className="mt-4">
                  <strong className="text-white">Optional Display Name:</strong> Some of our Applications may allow users to set an optional display name for in-app identification or leaderboard purposes. Users are not required to provide their real name and can choose any display name they prefer. This display name is:
                </p>
                
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Completely optional (not required to use the Application)</li>
                  <li>User-controlled (you choose what to display)</li>
                  <li>Not verified or authenticated</li>
                  <li>Stored locally on your device or on our secure servers solely for Application functionality</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">Optional In-Game Friends:</strong> Some of our Applications may include social features that allow users to connect with other players as &quot;in-game friends.&quot; These are not real-world friendships but connections within the Application only. This feature is completely optional, and if used, we may collect:
                </p>
                
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Display names of users you connect with</li>
                  <li>Friend list information</li>
                  <li>Interaction data between connected users (e.g., messages sent, games played together)</li>
                  <li>Friend request history</li>
                </ul>

                <p className="mt-4">
                  Users choose whether to use social features and can manage their in-game friend lists within the Application.
                </p>

                <p className="mt-4">
                  Other than the optional display name and in-game friend information, our Applications do not require users to:
                </p>
                
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Create accounts with personal information</li>
                  <li>Provide contact information (such as email address, phone number, or physical address)</li>
                  <li>Grant access to device features beyond what is required for normal functionality</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.2 Technical Data</h3>
                <p>
                  While we do not collect traditional personal information (aside from the optional display name described above), our Applications may collect extensive technical data through our own systems and third-party development tools and services (such as game engines, analytics platforms, crash reporting tools, and advertising networks). This technical data may include, but is not limited to:
                </p>

                <p className="mt-4">
                  <strong className="text-white">Device Information:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Device model, manufacturer, and hardware specifications</li>
                  <li>Operating system type and version</li>
                  <li>Screen resolution and display metrics</li>
                  <li>Available storage space and memory</li>
                  <li>Device language and regional settings</li>
                  <li>Unique device identifiers (e.g., Android Advertising ID, device ID, installation ID)</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">Application Usage Data:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Application launch times and session duration</li>
                  <li>Features and screens accessed within the Application</li>
                  <li>In-app interactions, button clicks, and user actions</li>
                  <li>User behavior patterns and interaction flows</li>
                  <li>Social interactions (if using in-game friends features)</li>
                  <li>Application performance metrics (frame rates, load times)</li>
                  <li>Crash logs, error reports, and diagnostic data</li>
                  <li>Application version and build information</li>
                  <li>Progression data, game statistics, and achievements</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">Network and Location Data:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>IP address</li>
                  <li>Network connection type (WiFi, mobile data)</li>
                  <li>Internet service provider</li>
                  <li>Approximate geographic location (country, city, region)</li>
                  <li>Network performance data</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">Advertising and Analytics Data:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Ad impressions, views, and interactions</li>
                  <li>User engagement metrics</li>
                  <li>Aggregated behavioral patterns</li>
                  <li>Attribution data for app installs and marketing campaigns</li>
                </ul>

                <p className="mt-4">
                  This technical data is collected to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Improve application performance and stability</li>
                  <li>Diagnose and fix technical issues and crashes</li>
                  <li>Understand user behavior and preferences</li>
                  <li>Enhance user experience and develop new features</li>
                  <li>Serve relevant advertisements (where applicable)</li>
                  <li>Conduct analytics and generate usage statistics</li>
                  <li>Prevent fraud and abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Third-Party Services</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Game Engines and Development Tools</h3>
                <p>
                  Some of our Applications are built using third-party game engines (such as Unity, Unreal Engine, or similar platforms). These platforms may collect technical data as described in Section 1.2 above. Data collection by these platforms is governed by their respective privacy policies, which we encourage you to review:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong className="text-white">Unity Technologies:</strong> <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline transition-colors">Unity Privacy Policy</a></li>
                  <li><strong className="text-white">Unreal Engine (Epic Games):</strong> <a href="https://www.epicgames.com/site/en-US/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline transition-colors">Epic Games Privacy Policy</a></li>
                  <li>Other third-party services as applicable to specific Applications</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Advertising Services</h3>
                <p>
                  Some of our Applications may include advertisements provided by third-party advertising networks. When present, these services may collect and use data to serve personalized ads. Common advertising partners may include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Google AdMob</li>
                  <li>Unity Ads</li>
                  <li>Other advertising networks</li>
                </ul>

                <p className="mt-4">
                  These advertising services may collect information such as:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Device identifiers</li>
                  <li>IP address</li>
                  <li>Ad interaction data</li>
                  <li>User preferences and interests</li>
                </ul>

                <p className="mt-4">
                  You may opt out of personalized advertising by adjusting your device settings:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong className="text-white">Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
                  <li>You may also visit the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline transition-colors">Digital Advertising Alliance&apos;s opt-out page</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Analytics Services</h3>
                <p>
                  We may use third-party analytics services to understand how our Applications are used and to improve user experience. These services may include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Google Analytics for Firebase</li>
                  <li>Unity Analytics</li>
                  <li>Other analytics platforms</li>
                </ul>

                <p className="mt-4">
                  These services collect aggregated and anonymized usage data that helps us understand user behavior and improve our Applications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Children&apos;s Privacy</h2>
                <p>
                  Our Applications do not knowingly collect personal information from children under the age of 13 (or the relevant age of digital consent in your jurisdiction, which may be 14, 15, or 16 in some regions). The optional display name feature and technical data collection described in this policy apply to all users regardless of age.
                </p>
                <p className="mt-4">
                  If you are a parent or guardian and believe that your child has provided personal information through our Applications, please contact us at <a href="mailto:aclinnovate@gmail.com" className="text-purple-300 hover:text-purple-200 underline transition-colors">aclinnovate@gmail.com</a>, and we will take appropriate steps to address your concerns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Permissions</h2>
                <p>
                  Our Applications may request certain permissions to function properly. These permissions are requested only when necessary for core functionality and may include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong className="text-white">Internet Access:</strong> Required for online features, advertisements, and analytics</li>
                  <li><strong className="text-white">Storage Access:</strong> May be needed to save game progress or user preferences locally</li>
                  <li><strong className="text-white">Other Permissions:</strong> Specific Applications may require additional permissions, which will be clearly indicated at the time of installation or when the feature is used</li>
                </ul>
                <p className="mt-4">
                  We do not request permissions beyond what is necessary for the Application to function as intended. You may review and manage application permissions through your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
                <p>
                  <strong className="text-white">Display Name:</strong> If you provide an optional display name, it is retained for as long as you use the Application or until you choose to delete it (where such functionality is available). If you uninstall the Application, any locally stored display name will be removed from your device. Display names stored on our servers may be retained until you request deletion or until the data is no longer needed for legitimate business purposes.
                </p>
                
                <p className="mt-4">
                  <strong className="text-white">In-Game Friends Data:</strong> If you use the optional in-game friends feature, your friend list, interaction history, and related data are retained for as long as you use the Application or until you remove friends from your list. If you uninstall the Application, this data may remain on our servers but will no longer be accessible to you. You may request deletion of this data by contacting us.
                </p>

                <p className="mt-4">
                  <strong className="text-white">Technical Data:</strong> Technical data collected through our systems and third-party services is retained according to the following principles:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Analytics and performance data is typically retained for 12-24 months or as needed for ongoing analysis</li>
                  <li>Crash logs and diagnostic data are retained until the issue is resolved or for up to 12 months</li>
                  <li>Advertising data is retained according to advertising partners&apos; policies, typically 12-24 months</li>
                  <li>Aggregated and anonymized data may be retained indefinitely for statistical and business purposes</li>
                </ul>

                <p className="mt-4">
                  Third-party service providers (such as Unity, Google Analytics, advertising networks) retain data according to their respective privacy policies and data retention practices. We encourage you to review their policies for specific retention periods.
                </p>

                <p className="mt-4">
                  You may request deletion of your data by contacting us at the email address provided in the Contact Us section.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your data, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong className="text-white">Right to Access:</strong> Request information about the display name, in-game friends data, and technical data we have collected about you</li>
                  <li><strong className="text-white">Right to Deletion:</strong> Request deletion of your display name, in-game friends list, and associated technical data</li>
                  <li><strong className="text-white">Right to Opt-Out:</strong> Opt out of personalized advertising through your device settings</li>
                  <li><strong className="text-white">Right to Rectification:</strong> Correct or update your display name or manage your in-game friends list</li>
                  <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a structured format (where applicable)</li>
                  <li><strong className="text-white">Right to Object:</strong> Object to certain types of data processing</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-white">To exercise your rights:</strong>
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
                  <li><strong className="text-white">Display Name & In-Game Friends:</strong> You may be able to change or delete your display name and manage your in-game friends list directly within the Application settings (where available)</li>
                  <li><strong className="text-white">Technical Data from Third-Party Services:</strong> Contact the respective third-party service providers or reach out to us, and we will assist you to the best of our ability</li>
                  <li><strong className="text-white">Data Deletion Requests:</strong> Email us at <a href="mailto:aclinnovate@gmail.com" className="text-purple-300 hover:text-purple-200 underline transition-colors">aclinnovate@gmail.com</a> with your request, and we will respond within a reasonable timeframe</li>
                  <li><strong className="text-white">Opt-Out of Personalized Ads:</strong>
                    <ul className="list-disc list-inside ml-8 space-y-1 mt-1">
                      <li>Android: Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
                      <li>Visit the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline transition-colors">Digital Advertising Alliance&apos;s opt-out page</a></li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
                <p>
                  Our Applications are available globally. Any technical data collected by third-party services may be transferred to, stored, or processed in countries other than your country of residence. These countries may have different data protection laws than your jurisdiction. By using our Applications, you consent to such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, Applications, or legal requirements. We encourage you to review this Privacy Policy periodically. Your continued use of any Application after changes are posted constitutes your acceptance of the updated Privacy Policy.
                </p>
              </section>

            </div>

            <div className="mt-8 pt-6 border-t border-purple-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="mt-4">
                <strong className="text-white">Alpha Code Labs</strong><br />
                Email: <a href="mailto:aclinnovate@gmail.com" className="text-purple-300 hover:text-purple-200 underline transition-colors">aclinnovate@gmail.com</a>
              </p>
              <p className="mt-4">
                For specific inquiries related to individual Applications, please include the Application name in your communication.
              </p>
            </div>

            <div className="mt-6 p-4 bg-purple-500/20 rounded-lg border border-purple-400/30">
              <p className="text-center font-semibold">
                By using any Alpha Code Labs Application, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}