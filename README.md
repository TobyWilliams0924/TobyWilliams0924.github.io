<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toby Williams - Cybersecurity Professional</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Existing CSS */

        body {
            font-family: 'Roboto', sans-serif;
            background: url('https://Tobywilliams0924.github.io/Background%20image.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #f4f4f4;
            line-height: 1.6;
            animation: moveBackground 10s infinite alternate;
        }

        @keyframes moveBackground {
            0% { background-position: center center; }
            50% { background-position: center top; }
            100% { background-position: center center; }
        }

        header {
            text-align: center;
            padding: 50px 0;
            background-color: rgba(0, 0, 0, 0.5);
        }

        header h1 {
            font-size: 3em;
            margin: 0;
            color: #e6e6e6;
        }

        header p {
            font-size: 1.2em;
            color: #e6e6e6;
        }

        nav {
            background-color: rgba(51, 51, 51, 0.9);
            padding: 10px 0;
            text-align: center;
        }

        nav a {
            color: #f4f4f4;
            margin: 0 15px;
            text-decoration: none;
            font-size: 1.2em;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #00ccff;
        }

        .container {
            width: 80%;
            margin: 20px auto;
            background-color: rgba(42, 42, 42, 0.9);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        section {
            margin-bottom: 20px;
        }

        section h2 {
            border-bottom: 2px solid #555;
            padding-bottom: 10px;
            color: #00ccff; /* Blue tone from the image */
        }

        .about-me img {
            max-width: 100%;
            height: auto;
            border-radius: 50%;
            margin: 10px 0;
            display: block;
        }

        footer {
            text-align: center;
            padding: 20px 0;
            background-color: rgba(51, 51, 51, 0.9);
            color: #fff;
        }

        footer a {
            color: #00ccff;
        }

        a {
            color: #00ccff; /* Blue tone from the image */
        }

        .star {
            position: absolute;
            width: 10px;
            height: 10px;
            background: yellow;
            border-radius: 50%;
            box-shadow: 0 0 10px yellow, 0 0 20px yellow;
            pointer-events: none;
            animation: twinkle 1s linear infinite;
        }

        @keyframes twinkle {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.5); }
            100% { opacity: 1; transform: scale(1); }
        }

        /* Additional styles for small screens */
        @media (max-width: 600px) {
            header h1 {
                font-size: 2em;
            }

            nav a {
                font-size: 1em;
                display: block;
                margin: 5px 0;
            }

            .container {
                width: 95%;
                padding: 10px;
            }

            .about-me img {
                width: 80%;
                margin: 10px auto;
            }

            section h2 {
                font-size: 1.5em;
            }

            footer p {
                font-size: 0.9em;
            }
        }

        /* Tablet support */
        @media (min-width: 601px) and (max-width: 1024px) {
            header h1 {
                font-size: 2.5em;
            }

            nav a {
                font-size: 1.1em;
            }

            .container {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation bar -->
    <nav>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
    </nav>

    <!-- Main content container -->
    <div class="container">
        <!-- About Me section -->
        <section id="about" class="about-me">
            <h2>About Me</h2>
            <img src="https://Tobywilliams0924.github.io/ProfilePic.jpg" alt="Toby Williams">
            <p>
                Hi, I'm Toby Williams. I'm 30 years old and diving headfirst into the exciting world of cybersecurity. My interest in this field dates back to high school, where I got into a bit of trouble for tinkering with computers. I used to change root passwords on my friends' machines and disable the website blocks that were put in place. Those early adventures sparked a deep curiosity and passion for understanding and securing digital environments.
            </p>
            <p>
                Now, I'm channeling that curiosity into a career. I believe that the same enthusiasm that led me to explore and push boundaries as a teenager can drive me to become a skilled and innovative cybersecurity professional. I'm eager to contribute to the field and protect the systems and data that are so crucial in today's world.
            </p>
        </section>

        <!-- Skills and Tools section -->
        <section id="skills" class="skills">
            <h2>Skills and Tools</h2>
            <p><strong>Skills:</strong> Penetration testing, vulnerability assessment, network security, ethical hacking, incident response, security risk management, SQL querying, network monitoring, and analysis.</p>
            <p><strong>Tools:</strong> Nmap, Wireshark, Metasploit, Burp Suite, Nessus, Linux, SQL, Splunk, TryHackMe, and various cybersecurity frameworks and methodologies.</p>
        </section>

        <!-- Projects section -->
        <section id="projects" class="projects">
            <h2>Projects</h2>
            <p>Incident Handler’s Journal (Coming Soon)</p>
            <p><a href="https://docs.google.com/document/d/1dAaYc-4xlM-TfkY1SJ7eXSvWQPZTzFEMU5cXg_fQGHc/edit?usp=sharing" target="_blank">TryHackMe Journal</a></p>
            <p><a href="https://docs.google.com/document/d/1TSEaxS9sJCaEW4EIG3uNEImV9estPdGi1pKNHjBOz9Y/edit?usp=sharing" target="_blank">Vulnerable System Analysis</a></p>
            <p><a href="https://docs.google.com/document/d/1Ubc8Slf7SSXOmoTd7svduXg-ZZy64KYuUQPVNtmPvfk/edit?usp=sharing" target="_blank">SQL Query</a></p>
            <p><a href="https://docs.google.com/document/d/1r72G8xu-fRry3lSKBXHV5gfcX1nsaZ2GRu9pvX8LeoE/edit?usp=sharing" target="_blank">Security Audit</a></p>
            <p><a href="https://docs.google.com/document/d/10R3I7x1W5js9vq7dIdmZhro7l9IyrZonhAsDcAuqoHw/edit?usp=sharing" target="_blank">Cyber Incident Report</a></p>
        </section>

        <!-- Certifications section -->
        <section id="certifications" class="certifications">
            <h2>Certifications</h2>
            <ul>
                <li><a href="https://coursera.org/share/d74a2b9b5d8a83b0aef6358a229aaa36" target="_blank">Coursera: Foundations of Cybersecurity</a></li>
                <li><a href="https://coursera.org/share/845fb3102af41df9396903f67b6ceff9" target="_blank">Coursera: Play It Safe: Manage Security Risks</a></li>
                <li><a href="https://coursera.org/share/932a5bb68ab010aea6c0c96b84874c00" target="_blank">Coursera: Connect and Protect: Networks and Network Security</a></li>
                <li><a href="https://coursera.org/share/d74a2b9b5d8a83b0aef6358a229aaa36" target="_blank">Coursera: Tools of the Trade: Linux and SQL</a></li>
                <li><a href="https://coursera.org/share/7b826aad299ea609c085e2efd8b094d6" target="_blank">Coursera: Assets, Threats, and Vulnerabilities</a></li>
                <li><a href="https://coursera.org/share/a99a81c87b8419f4b6d1ef6b5606b7de" target="_blank">Coursera: SQL Joins</a></li>
                <li>Google Cybersecurity Professional Certificate</li>
            </ul>
        </section>

        <!-- Contact section -->
        <section id="contact" class="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:Toby.Williams0924@gmail.com">Toby.Williams0924@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/tobywilliams0924/" target="_blank">linkedin.com/in/tobywilliams0924</a></p>
        </section>
    </div>

    <!-- Footer with contact information -->
    <footer>
        <p>&copy; 2024 Toby Williams | <a href="https://docs.google.com/document/d/1YLgS4WN_VnQpkX7N4kofu2EBBWoMq29D-HdfOHz5pIw/edit?usp=sharing" target="_blank">Download my resume</a></p>
    </footer>

    <script src="scripts.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const resumeLink = document.querySelector('footer a');
            
            resumeLink.addEventListener('mouseover', function() {
                const starCount = 5;
                for (let i = 0; i < starCount; i++) {
                    const star = document.createElement('div');
                    star.classList.add('star');
                    document.body.appendChild(star);
                    
                    const x = resumeLink.getBoundingClientRect().left + (Math.random() * resumeLink.clientWidth);
                    const y = resumeLink.getBoundingClientRect().top + (Math.random() * resumeLink.clientHeight);
                    
                    star.style.left = `${x}px`;
                    star.style.top = `${y}px`;
                    
                    setTimeout(() => {
                        star.remove();
                    }, 1000);
                }
            });
        });
    </script>
</body>
</html>
