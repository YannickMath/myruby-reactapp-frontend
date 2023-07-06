import { useEffect } from 'react';

function RegistrationPage() {
  useEffect(() => {
    const fetchRegistrationForm = async () => {
      try {
        const response = await fetch('/path/to/new.html');
        const htmlContent = await response.text();
        if (htmlContent) {
          document.getElementById('registration-form-container').innerHTML = htmlContent;
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRegistrationForm();
  }, []);

  return <div id="registration-form-container"></div>;
}

export default RegistrationPage;
