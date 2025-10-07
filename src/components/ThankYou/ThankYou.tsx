import React from "react";
import CustomButton from "../shared/CustomButton";

const  
ThankYou: React.FC<{
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}> = ({
  title = "Thank You for Connecting with Raynex!",
  message = "Your request has been submitted successfully. One of our experts will connect with you shortly to explain how Raynex can help reduce your electricity bills and maximize savings with solar.",
  showHomeButton = true,
}) => {
  return (
    <div className="flex flex-col items-center text-common-black justify-center min-h-[60vh] text-center py-12 px-4">
      <div className="bg-white p-4 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-base mb-6 text-gray-700">{message}</p>
        <div className="flex gap-4 justify-center text-common-black">
          {showHomeButton && (
            <CustomButton
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
