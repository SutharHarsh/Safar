"use client";
import React, { useState } from "react";
import { Shield, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState("collection");
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const sections = [
    {
      id: "collection",
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p>
            Safar collects several types of information to provide you with the
            best camping and hiking experience:
          </p>
          <div className="ml-4">
            <h4 className="font-semibold mb-2">Personal Information</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>
                Name, email address, phone number, and billing information when
                you create an account
              </li>
              <li>
                Profile information such as profile photo, preferences, and
                favorite campsites
              </li>
              <li>Communications you send directly to us</li>
            </ul>
          </div>
          <div className="ml-4">
            <h4 className="font-semibold mb-2">Usage Information</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>
                Location data to help you navigate to campsites (only when you
                enable this feature)
              </li>
              <li>
                Device information including device model, operating system, and
                browser type
              </li>
              <li>
                Log data such as IP address, access times, and app features used
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-gray-700 italic">
              Note: Location services can be disabled at any time through your
              device settings, though this may limit certain app
              functionalities.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "use",
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Provide, maintain, and improve Safar services</li>
            <li>Process transactions and send related information</li>
            <li>
              Send notifications about your account, bookings, or campsites of
              interest
            </li>
            <li>
              Send marketing communications (which you can opt out of at any
              time)
            </li>
            <li>
              Personalize your experience with more relevant campsite
              recommendations
            </li>
            <li>Analyze usage patterns to improve app functionality</li>
            <li>
              Detect and prevent fraudulent activity and ensure the security of
              your account
            </li>
            <li>
              Respond to your comments, questions, and customer service requests
            </li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p>
              We are committed to using your personal information only for
              relevant and necessary purposes related to enhancing your outdoor
              adventure experience.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "Information Sharing and Disclosure",
      content: (
        <div className="space-y-4">
          <p>
            Safar does not sell your personal information to third parties.
            However, we may share information in the following circumstances:
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Service Providers:</span> We share
              information with trusted third-party service providers who perform
              services on our behalf, such as payment processing, data analysis,
              and customer support.
            </li>
            <li>
              <span className="font-medium">Campsite Partners:</span> To
              facilitate bookings, we share necessary information with the
              campsite operators.
            </li>
            <li>
              <span className="font-medium">Legal Requirements:</span> We may
              disclose information if required by law, regulation, legal
              process, or governmental request.
            </li>
            <li>
              <span className="font-medium">Business Transfers:</span> In
              connection with any merger, sale of company assets, financing, or
              acquisition, information may be transferred as a business asset.
            </li>
            <li>
              <span className="font-medium">With Your Consent:</span> We may
              share information with third parties when you give us explicit
              consent to do so.
            </li>
          </ul>
          <p>
            All third parties are contractually obligated to use the information
            only for the specified purposes and in accordance with our privacy
            policy.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>
            Protecting your information is our top priority. We implement
            appropriate technical and organizational measures to ensure the
            security of your personal information:
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              Encryption of sensitive information during transmission and
              storage
            </li>
            <li>Regular security assessments and vulnerability testing</li>
            <li>
              Access controls to limit employee access to personal information
            </li>
            <li>Continuous monitoring for suspicious activities</li>
            <li>Regular backups to prevent data loss</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal information, we cannot
            guarantee its absolute security.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-gray-700 font-medium">
              We recommend using a strong, unique password for your Safar
              account and enabling two-factor authentication when available.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "choices",
      title: "Your Rights and Choices",
      content: (
        <div className="space-y-4">
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information:
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Access:</span> You can request a
              copy of the personal information we hold about you.
            </li>
            <li>
              <span className="font-medium">Correction:</span> You can request
              that we correct inaccurate or incomplete information.
            </li>
            <li>
              <span className="font-medium">Deletion:</span> You can request
              that we delete your personal information in certain circumstances.
            </li>
            <li>
              <span className="font-medium">Restriction:</span> You can request
              that we restrict the processing of your information.
            </li>
            <li>
              <span className="font-medium">Data Portability:</span> You can
              request a machine-readable copy of your information.
            </li>
            <li>
              <span className="font-medium">Objection:</span> You can object to
              our processing of your information based on our legitimate
              interests.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@Safar.com.
            We will respond to your request within 30 days.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p>
              You can update your communication preferences at any time in your
              account settings or by clicking the "unsubscribe" link in our
              emails.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "retention",
      title: "Data Retention",
      content: (
        <div className="space-y-4">
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
          <p>When determining how long to retain information, we consider:</p>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>The amount, nature, and sensitivity of the information</li>
            <li>
              The potential risk of harm from unauthorized use or disclosure
            </li>
            <li>The purposes for which we process the information</li>
            <li>Whether we can achieve those purposes through other means</li>
            <li>Applicable legal requirements</li>
          </ul>
          <p>
            When you delete your account, we will delete or anonymize your
            personal information within 90 days, unless we are legally required
            to retain certain information.
          </p>
        </div>
      ),
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: (
        <div className="space-y-4">
          <p>
            Safar services are not directed to children under the age of 13,
            and we do not knowingly collect personal information from children
            under 13. If we learn that we have collected personal information
            from a child under 13, we will take steps to delete such information
            as quickly as possible.
          </p>
          <p>
            If you believe that we might have collected information from a child
            under 13, please contact us immediately at privacy@Safar.com.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p>
              Parents and guardians are encouraged to monitor their children's
              online activities and help enforce our Privacy Policy by
              instructing their children never to provide personal information
              through our services without permission.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "updates",
      title: "Changes to This Policy",
      content: (
        <div className="space-y-4">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. The updated policy will be effective when
            posted, and the date at the top of the policy will indicate when it
            was last updated.
          </p>
          <p>
            For significant changes, we will provide a more prominent notice,
            which may include:
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>In-app notifications</li>
            <li>Email notifications for significant changes</li>
            <li>Announcements on our website</li>
          </ul>
          <p>
            Your continued use of Safar after any changes to this Privacy
            Policy constitutes your acceptance of the updated policy. We
            encourage you to review the Privacy Policy whenever you access our
            services.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Safar Privacy Team</h4>
            <p>Email: privacy@Safar.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Nature Way, Outdoor City, OC 12345</p>
          </div>
          <p className="">
            We are committed to addressing any questions or concerns you may
            have about our privacy practices and how we handle your personal
            information.
          </p>
          <div className="mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition duration-300">
              Contact Support
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Introduction */}
      <div className="max-container py-12 px-6 md:px-10">
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Our Commitment to Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            At Safar, we are dedicated to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our website, mobile application, and
            services.
          </p>
          <p className="text-gray-700 mb-4">
            By accessing or using Safar, you agree to the terms of this Privacy
            Policy. If you do not agree with the terms of this Privacy Policy,
            please do not access the application or use our services.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md">
            <p>
              We value transparency and aim to provide you with clear
              information about our data practices. If you have any questions
              after reading this policy, please contact us.
            </p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleSection(section.id)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                {openSection === section.id ? (
                  <ChevronUp size={20} className="text-green-600" />
                ) : (
                  <ChevronDown size={20} className="text-green-600" />
                )}
              </button>
              {openSection === section.id && (
                <div className="px-6 pb-6">{section.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="flex items-center p-4 border border-gray-200 rounded-lg transition duration-300"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Shield size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Data Protection FAQ</h3>
                <p className="text-gray-600 text-sm">
                  Common questions about data security
                </p>
              </div>
              <ExternalLink size={16} className="ml-auto text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center p-4 border border-gray-200 rounded-lg transition duration-300"
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Shield size={20} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Cookie Policy</h3>
                <p className="text-gray-600 text-sm">
                  How we use cookies and similar technologies
                </p>
              </div>
              <ExternalLink size={16} className="ml-auto text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center p-4 border border-gray-200 rounded-lg transition duration-300"
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Shield size={20} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Terms of Service</h3>
                <p className="text-gray-600 text-sm">
                  Rules and guidelines for using Safar
                </p>
              </div>
              <ExternalLink size={16} className="ml-auto text-gray-400" />
            </a>
            <a
              href="#"
              className="flex items-center p-4 border border-gray-200 rounded-lg transition duration-300"
            >
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Shield size={20} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold">GDPR Compliance</h3>
                <p className="text-gray-600 text-sm">
                  How we comply with data protection laws
                </p>
              </div>
              <ExternalLink size={16} className="ml-auto text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-100 py-12 px-6 md:px-10 lg:px-20 mb-10">
        <div className="max-container text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our privacy team is here to help you understand how we protect your
            data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
              Contact Privacy Team
            </button>
            <button className="bg-white text-green-600 border border-green-600 font-medium py-3 px-8 rounded-full hover:bg-green-50 transition duration-300">
              Download Full Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
