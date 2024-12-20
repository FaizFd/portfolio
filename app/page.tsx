"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 p-6 md:p-12">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12">
        <div className="text-[#64ffda] text-3xl font-bold">FD</div>
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 justify-end">
            <Link href="#about" className="text-[#64ffda] hover:text-white transition-colors">About</Link>
            <Link href="#experience" className="text-[#64ffda] hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="text-[#64ffda] hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="text-[#64ffda] hover:text-white transition-colors">Contact</Link>
          </div>
          {/* Desktop Resume Button */}
          <Link
            href="https://drive.google.com/file/d/1SvVdD6PMp682d8MGvhtl5QHhkkG_dbWE/view?usp=sharing"
            target="_blank"
          >
            <button className="hidden md:block border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors">
              Resume
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#64ffda] text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="flex flex-col items-start space-y-6 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#about"
            className="text-[#64ffda] hover:text-white transition-colors"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-[#64ffda] hover:text-white transition-colors"
            onClick={toggleMobileMenu}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-[#64ffda] hover:text-white transition-colors"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-[#64ffda] hover:text-white transition-colors"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1SvVdD6PMp682d8MGvhtl5QHhkkG_dbWE/view?usp=sharing"
            target="_blank"
            className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors"
            onClick={toggleMobileMenu}
          >
            Resume
          </Link>
        </motion.div>
      )}

      {/* Landing Page */}
      <main className="mt-20 md:mt-32 ml-0 md:ml-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#64ffda] mb-5 text-xl md:text-2xl">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-200 mb-4">Faiz Dhanani</h1>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-400 mb-6">I am a Full Stack Developer.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="max-w-xl mb-12 text-gray-300 text-base md:text-lg">
            I'm a dedicated software engineer with a passion for creating powerful, scalable, and user-friendly web applications.
            With expertise in modern technologies like React, Next.js, TypeScript, Django, and Spring Boot, I love turning complex
            problems into intuitive solutions. Currently, I'm working on building innovative, cross-platform applications and seamless
            digital experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0"
        >
          <Link href="https://github.com/FaizFd" target='_blank'>
            <button className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors w-full md:w-auto">
              Check out my Github!
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/faizdhanani/" target='_blank'>
            <button className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors w-full md:w-auto">
              Check out my Linkedin!
            </button>
          </Link>
        </motion.div>
      </main>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col justify-center p-4 md:p-10 bg-[#0a192f] rounded-lg shadow-lg mt-20 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl text-[#64ffda] mb-4">About Me</h2>
        <p className='text-[#64ffda] font-semibold mb-2'>Full Stack Development</p>
        <p className="text-gray-300 max-w-xl mb-4 leading-relaxed">
          I am a passionate full stack developer with a robust skill set in modern web technologies. My expertise encompasses the MERN stack (MongoDB, Express.js, React, and Node.js), Next.js, Django, and Spring Boot Java, allowing me to build dynamic and scalable web applications.
          Additionally, I have experience integrating AWS services for efficient data storage solutions, enhancing application performance and reliability.
        </p>
        <p className='text-[#64ffda] font-semibold mb-2'>App Development</p>
        <p className="text-gray-300 max-w-xl mb-4 leading-relaxed">
          Currently, I am honing my skills in mobile app development with React Native, a technology I actively utilize during my co-op placement. This experience allows me to create intuitive and responsive applications for both iOS and Android platforms.
        </p>
        <p className='text-[#64ffda] font-semibold mb-2'>Continuous Advancement</p>
        <p className="text-gray-300 max-w-xl leading-relaxed">
          I am also pursuing a Post-Graduate Diploma in Information Technology Solutions, which equips me with a strong theoretical foundation and practical insights into the evolving tech landscape.
          With a commitment to continuous learning and a keen interest in problem-solving, I strive to deliver innovative solutions that meet user needs and drive business success.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="min-h-screen flex flex-col justify-center p-4 md:p-10 bg-[#0a192f] rounded-lg shadow-lg mt-20 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl text-[#64ffda] mb-8">Experience</h2>
        <div className="text-gray-300 max-w-2xl leading-relaxed">
          <p className="mb-6">
            I have gained comprehensive experience in full-stack development over the past few years, working across both front-end and back-end technologies. I specialize in crafting seamless digital experiences, with a focus on performance and user engagement.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl text-gray-200 font-semibold mb-2">Software Developer (Co-op) — HRX Connect (Giftelle)</h3>
            <p className="mb-4">
              As a software developer, I am working on building a cross-platform mobile application using React Native, with Firebase as the backend. My responsibilities include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Developed a fully functional React Native cross-platform mobile application.</li>
              <li>Integrated Expo and Firebase for authentication and real-time data management, resulting in a 20% improvement in app load times.</li>
              <li>Optimized app performance by identifying and resolving performance bottlenecks, reducing crash rates by 15%.</li>
              <li>Ensured a responsive and intuitive user interface by utilizing NativeWind, contributing to a 30% increase in user engagement and session duration.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen flex flex-col justify-center p-4 md:p-10 bg-[#0a192f] rounded-lg shadow-lg mt-20 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl text-[#64ffda] mb-8">Projects</h2>
        <p className="text-gray-300 max-w-xl mb-8">
          Here are some of the projects I have worked on, showcasing my skills in web development, cloud computing, and more.
        </p>

        <div className="space-y-8">
          {/* Project 1 */}
          <div>
            <Link href="https://thelinkup.vercel.app/" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="bg-[#112240] p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl text-[#64ffda] mb-4">MERN Stack Social Media App</h3>
                <p className="text-gray-300">
                  A social media platform inspired by Twitter(X), built using the MERN stack, AWS for image storage, and TypeScript for scalability.
                </p>
              </motion.div>
            </Link>
            <a
              href="https://github.com/FaizFd/Social-Media-App-NextJs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#64ffda] hover:underline mb-2"
            >
              View on GitHub
            </a>
          </div>



          {/* Project 2 */}
          <div>
            <Link href="https://faizfd10.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="bg-[#112240] p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl text-[#64ffda] mb-4">IMDb-Inspired Web App</h3>
                <p className="text-gray-300">
                  A django app to explore and manage movie and TV show details, integrating IMDb API for real-time updates and user interaction.
                </p>
              </motion.div>
            </Link>
            <a
              href="https://github.com/FaizFd/Movie-TV_Show_Review_App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#64ffda] hover:underline mb-2"
            >
              View on GitHub
            </a>
          </div>


          {/* Project 3 */}
          <div>
            <Link href="https://github.com/FaizFd/HospitalManagement" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="bg-[#112240] p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl text-[#64ffda] mb-4">Spring Boot (Java) - Hospital Management App</h3>
                <p className="text-gray-300">
                  A comprehensive hospital management system built with Spring Boot, designed to streamline operations and enhance patient care.
                </p>
              </motion.div>
            </Link>
            <a
              href="https://github.com/FaizFd/HospitalManagement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#64ffda] hover:underline mb-4"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col justify-center p-4 md:p-10 mt-20 md:mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl text-[#64ffda] mb-4">Contact</h2>
        <p className="text-gray-300 max-w-xl mb-6">
          Feel free to reach out if you would like to collaborate or have any questions about my work.
        </p>
        <div className="flex flex-col gap-4 text-gray-300">
          <a
            href="mailto:faizdhanani02@gmail.com"
            className="hover:text-[#64ffda] transition-colors"
          >
            ✉️ Email: faizdhanani02@gmail.com
          </a>
          <a
            href="tel:+16478783316"
            className="hover:text-[#64ffda] transition-colors"
          >
            📞 Phone: (647)-878-3316
          </a>
          <a
            href="https://www.linkedin.com/in/faizdhanani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda] transition-colors"
          >
            🔗 LinkedIn: linkedin.com/in/faizdhanani/
          </a>
          <a
            href="https://github.com/FaizFd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda] transition-colors"
          >
            💻 GitHub: github.com/FaizFd
          </a>
        </div>
      </motion.section>
    </div>
  );
}
