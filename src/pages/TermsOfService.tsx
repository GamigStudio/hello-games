
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-hello-primary">Terms of Service</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-8">Please read these Terms of Service carefully before using the HELLO GAMES LIMITED website or any of our games/services. By accessing or using our services, you agree to be bound by these terms.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">1. Acceptance of Terms</h2>
            <p>By accessing or using the HELLO GAMES LIMITED website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on HELLO GAMES LIMITED's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on HELLO GAMES LIMITED's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">3. Intellectual Property</h2>
            <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of HELLO GAMES LIMITED or its content suppliers and protected by international copyright laws.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">4. User Conduct</h2>
            <p>You agree not to use the website to:</p>
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Violate any applicable local, state, national, or international law</li>
              <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
              <li>Interfere with or disrupt the services or servers or networks connected to the services</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">5. Disclaimer</h2>
            <p>The materials on HELLO GAMES LIMITED's website are provided on an 'as is' basis. HELLO GAMES LIMITED makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">6. Limitations</h2>
            <p>In no event shall HELLO GAMES LIMITED or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HELLO GAMES LIMITED's website, even if HELLO GAMES LIMITED or a HELLO GAMES LIMITED authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">7. Revisions and Errata</h2>
            <p>The materials appearing on HELLO GAMES LIMITED's website could include technical, typographical, or photographic errors. HELLO GAMES LIMITED does not warrant that any of the materials on its website are accurate, complete or current. HELLO GAMES LIMITED may make changes to the materials contained on its website at any time without notice.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">9. Changes to Terms</h2>
            <p>HELLO GAMES LIMITED may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-hello-text">10. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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

export default TermsOfService;
