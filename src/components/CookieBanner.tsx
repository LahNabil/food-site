// 'use client';

// import Link from 'next/link';
// import './CookieBanner.css';
// import { getLocalStorage, setLocalStorage} from '@/lib/strageHelper';
// import { useState, useEffect } from 'react';

// export default function CookieBanner() {
//     const [cookieConsent, setCookieConsent] = useState(false);

//     useEffect (() => {
//         const storedCookieConsent = getLocalStorage("cookie_consent", null)

//         setCookieConsent(storedCookieConsent)
//     }, [setCookieConsent])

    
//     useEffect(() => {
//         const newValue = cookieConsent ? 'granted' : 'denied'

//         window.gtag("consent", 'update', {
//             'analytics_storage': newValue
//         });

//         setLocalStorage("cookie_consent", cookieConsent)

//         //For Testing
//         console.log("Cookie Consent: ", cookieConsent)

//     }, [cookieConsent]);
//     return (
//         <div className="cookie-banner">
//             <div className="message">
//                 <Link href="/info/cookies">
//                     <p>
//                         We use <span className="highlight">cookies</span> on our site.
//                     </p>
//                 </Link>
//             </div>

//             <div className="buttons">
//             <button className='...' onClick={() => setCookieConsent(false)}>Decline</button>
//             <button className='...' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
//             </div>
//         </div>
//     );
// }
