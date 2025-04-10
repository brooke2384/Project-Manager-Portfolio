# Email Setup Instructions

## Setting up EmailJS for Contact Form

This project uses EmailJS to handle the contact form submission. Follow these steps to set up EmailJS for your project:

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create an account if you don't have one already.
2. Log in to your EmailJS dashboard.

### 2. Create an Email Service

1. In the EmailJS dashboard, go to the "Email Services" tab.
2. Click "Add New Service".
3. Choose your email provider (Gmail, Outlook, etc.) and follow the instructions to connect your email account.
4. Once connected, note down the **Service ID** that is generated.

### 3. Create an Email Template

1. Go to the "Email Templates" tab in the EmailJS dashboard.
2. Click "Create New Template".
3. Design your email template. You can use the following variables in your template:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{reply_to}}` - The email address of the person submitting the form
   - `{{project_type}}` - The type of project selected in the form
   - `{{message}}` - The message content from the form
4. Save the template and note down the **Template ID**.

### 4. Update the Configuration in the Project

1. Open the file `src/lib/emailService.ts`.
2. Replace the placeholder values with your actual EmailJS credentials:
   ```typescript
   const SERVICE_ID = 'your_service_id'; // Replace with your actual EmailJS service ID
   const TEMPLATE_ID = 'your_template_id'; // Replace with your actual EmailJS template ID
   const USER_ID = 'your_user_id'; // Replace with your actual EmailJS user ID
   ```
   You can find your **User ID** (also called Public Key) in the "Account" section of the EmailJS dashboard.

### 5. Test the Contact Form

1. Run your application locally.
2. Navigate to the contact form.
3. Fill out the form and submit it.
4. Check that you receive the email at the address associated with your EmailJS service.

## Troubleshooting

If you encounter any issues with the email functionality:

1. Check the browser console for any error messages.
2. Verify that all IDs (Service ID, Template ID, User ID) are correctly entered in the `emailService.ts` file.
3. Make sure your EmailJS account is active and within the free tier limits (or that you have a paid plan if exceeding those limits).
4. Check that your email template contains the correct variable names as used in the code.

For more information, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).