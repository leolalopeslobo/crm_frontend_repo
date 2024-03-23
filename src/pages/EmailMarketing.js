// import React, { useState } from 'react';
// import axios from 'axios';

// const EmailMarketing = () => {
//     const [emails, setEmails] = useState('');
//     const [message, setMessage] = useState('');

//     const handleEmailChange = (e) => {
//         setEmails(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('/sendEmails', { recipients: emails.split(',') });

//             if (response.status === 200) {
//                 setMessage('Emails sent successfully!');
//             } else {
//                 setMessage('Failed to send emails');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setMessage('Error sending emails');
//         }
//     };

//     return (
//         <div>
//             <h1>Email Marketing Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="emails">Enter email addresses (separated by commas):</label>
//                 <input
//                     type="text"
//                     id="emails"
//                     value={emails}
//                     onChange={handleEmailChange}
//                     placeholder="e.g. email1@example.com, email2@example.com"
//                     required
//                 />
//                 <button type="submit">Send Emails</button>
//             </form>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default EmailMarketing;


import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../apiConfig';

const EmailMarketing = () => {
    const [emails, setEmails] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
      console.log(e.target.value)
        setEmails(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/sendEmails`, { recipients: emails.split(',') });

            if (response.status === 200) {
                setMessage('Emails sent successfully!');
            } else {
                setMessage('Failed to send emails');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error sending emails');
        }
    };

    return (
        <div>
            <h1>Email Marketing Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emails">Enter email addresses (separated by commas):</label>
                <input
                    type="text"
                    id="emails"
                    value={emails}
                    onChange={handleEmailChange}
                    placeholder="e.g. email1@example.com, email2@example.com"
                    required
                />
                <button type="submit">Send Emails</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default EmailMarketing;
