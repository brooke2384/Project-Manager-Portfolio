import emailjs from 'emailjs-com';

/**
 * EmailJS configuration
 * 
 * This file uses environment variables to store sensitive EmailJS credentials.
 * For local development, you can set these in a .env file.
 * For production, set these in your Vercel project settings.
 * 
 * To set up EmailJS:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Set up an email service and get the SERVICE_ID
 * 3. Create an email template and get the TEMPLATE_ID
 * 4. Get your USER_ID from the EmailJS dashboard
 * 5. Set these values as environment variables
 * 
 * For detailed setup instructions, see the EMAIL_SETUP.md file
 */

// Get EmailJS credentials from environment variables
// Fallback to empty strings to prevent errors during build
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0gu2gvy';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_omqzjke';
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || 'QHBtuQynKgBVftjaV';

// Initialize EmailJS with the user ID
emailjs.init(USER_ID);

interface EmailFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

/**
 * Sends an email using EmailJS service
 * @param formData - The form data to send
 * @returns Promise that resolves when email is sent
 */
export const sendEmail = async (formData: EmailFormData): Promise<{ status: number; text: string }> => {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      project_type: formData.projectType,
      message: formData.message
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};