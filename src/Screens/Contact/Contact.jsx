import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useState } from 'react';
import '../../Screens/Home/Home.css';

// Assets
import Logo from '../../assets/RAFA-Racing-Mark-Wht 1.png';
import close_menu_icon from '../../assets/close-menu.png';
import open_menu_icon from '../../assets/open-menu.png';
import instagram from '../../assets/instagram.png';
import instagram_black from '../../assets/instagram-black.png';
import youtube_black from '../../assets/youtube-black.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import tiktok_black from '../../assets/tiktok-black.png';



function ContactForm() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Netlify Hidden Input */}
        <input type="hidden" name="form-name" value="contact" />

        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            className="mr-2 leading-tight"
            required
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I agree to the privacy policy.
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;