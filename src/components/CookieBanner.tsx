
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieChoice", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieChoice", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            This website uses cookies to enhance user experience and analyse traffic. By clicking 'Accept', you consent to our use of cookies. You can read more about how we use cookies in our <Link to="/privacy-policy" className="text-hello-primary hover:underline">Privacy Policy</Link>.
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={declineCookies}>
              Decline
            </Button>
            <Button 
              onClick={acceptCookies}
              className="bg-hello-primary hover:bg-hello-primary/90"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
