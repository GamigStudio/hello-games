
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-hello-primary">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-8">Your privacy is important to us. This policy explains how HELLO GAMES LIMITED collects, uses, and protects your personal data when you use our website and services, in compliance with GDPR and UK data protection laws.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">1. Introduction</h2>
            <p>This Privacy Policy outlines the types of personal information that is received and collected by HELLO GAMES LIMITED and how it is used. We are committed to ensuring that your privacy is protected and that we comply with our legal obligations.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Name and contact information including email address</li>
              <li>Demographic information such as postcode, preferences, and interests</li>
              <li>Website usage data through cookies and similar technologies</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">3. How We Use Your Information</h2>
            <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Internal record keeping</li>
              <li>Improving our products and services</li>
              <li>Periodically sending promotional emails about new products, special offers or other information which we think you may find interesting</li>
              <li>From time to time, we may also use your information to contact you for market research purposes</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">4. Cookies</h2>
            <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Cookies allow web applications to respond to you as an individual by gathering and remembering information about your preferences.</p>
            <p className="mt-4">We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">5. Security</h2>
            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">6. Your Rights</h2>
            <p>Under GDPR and UK data protection laws, you have rights including:</p>
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Your right of access - You have the right to ask us for copies of your personal information.</li>
              <li>Your right to rectification - You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
              <li>Your right to erasure - You have the right to ask us to erase your personal information in certain circumstances.</li>
              <li>Your right to restriction of processing - You have the right to ask us to restrict the processing of your information in certain circumstances.</li>
              <li>Your right to object to processing - You have the right to object to the processing of your personal data in certain circumstances.</li>
              <li>Your right to data portability - You have the right to ask that we transfer the information you gave us to another organisation, or to you, in certain circumstances.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">7. Changes to This Privacy Policy</h2>
            <p>HELLO GAMES LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="my-4">Email: <a href="mailto:hello@hellogames.co.uk" className="text-hello-primary hover:underline">hello@hellogames.co.uk</a></p>
            <p className="mb-8">
              Postal Address:<br />
              HELLO GAMES LIMITED<br />
              Dolphin House, 3 North Street<br />
              Guildford, Surrey, England<br />
              GU1 4AA, B74 2DG
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
