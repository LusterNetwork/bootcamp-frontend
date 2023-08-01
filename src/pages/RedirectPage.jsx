import React, { useEffect } from 'react';

const RedirectPage = () => {
    const redirectUrl = "https://luster.network/"
  useEffect(() => {
    // Function to submit the POST request to the redirect URL
    const submitPostRequest = async () => {
      try {
        const response = await fetch(redirectUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // You may need to adjust the content type based on your backend requirements
          },
          body: JSON.stringify(payload), // Convert payload to JSON format and send it in the request body
        });

        if (response.ok) {
          // The POST request was successful, handle the response if needed
          console.log('POST request successful.');
        } else {
          // The POST request failed, handle the response status or error
          console.error('POST request failed:', response.status);
        }
      } catch (error) {
        // Handle any network or other errors that might occur during the POST request
        console.error('Error during POST request:', error);
      }

      // Redirect to the specified URL (with or without waiting for the POST request response)
      window.location.href = redirectUrl;
    };

    // Call the function to submit the POST request and redirect
    submitPostRequest();
  }, [redirectUrl]);

  return (
    <div>
      <p>Redirecting...</p>
      {/* You can show a loader or any other message while redirecting */}
    </div>
  );
};

export default RedirectPage;
