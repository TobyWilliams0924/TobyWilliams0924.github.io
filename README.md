<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toby Williams - Cybersecurity Portfolio</title>
    <style>
        /* Reset some default browser styles */
        body, h1, h2, p, ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: url('https://TobyWilliams0924.github.io/Background%20image.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #f4f4f4;
            line-height: 1.6;
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

        a {
            color: #00ccff; /* Blue tone from the image */
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
    <!-- Header section with title -->
    <header>
        <h1>Toby Williams</h1>
        <p>Cybersecurity Enthusiast & Ethical Hacker</p>
    </header>

    <!-- Navigation bar -->
    <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
    </nav>

    <!-- Main content container -->
    <div class="container">
        <!-- About Me section -->
        <section id="about" class="about-me">
            <h2>About Me</h2>
            <img src="https://TobyWilliams0924.github.io/ProfilePic.jpg" alt="Toby Williams">
            <p>
                Hi, I'm Toby Williams. I'm 30 years old and diving headfirst into the exciting world of cybersecurity. My interest in this field dates back to high school, where I got into a bit of trouble for tinkering with computers. I used to change root passwords on my friends' machines and disable the website blocks that were put in place. Those early adventures sparked a deep curiosity and passion for understanding and securing digital environments.
            </p>
            <p>
                Now, I'm channeling that curiosity into a career. I believe that the same enthusiasm that led me to explore and push boundaries as a teenager can drive me to become a skilled and innovative cybersecurity professional. I'm eager to contribute to the field and protect the systems and data that are so crucial in today's world.
            </p>
        </section>

        <!-- Projects section -->
        <section id="projects" class="projects">
            <h2>Projects</h2>
            <p>Check out my projects on <a href="https://drive.google.com/drive/folders/1VHw46pUQcUIq6zp8vGoy06vdoLL3Kzbf?usp=sharing" target="_blank">Google Drive</a>.</p>
        </section>

        <!-- Certifications section -->
        <section id="certifications" class="certifications">
            <h2>Certifications</h2>
            <ul>
                <li><a href="https://coursera.org/share/932a5bb68ab010aea6c0c96b84874c00" target="_blank">Coursera: Introduction to Cyber Security</a></li>
                <li>Certification 2: Description</li>
                <li>Certification 3: Description</li>
            </ul>
        </section>
    </div>

    <!-- Footer with contact information -->
    <footer>
        <p>Contact me at <a href="mailto:toby.williams0924@gmail.com">toby.williams0924@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tobywilliams0924/" target="_blank">linkedin.com/in/tobywilliams0924</a></p>
        <p>Download my resume <a href="https://docs.google.com/document/d/1YLgS4WN_VnQpkX7N4kofu2EBBWoMq29D-HdfOHz5pIw/edit?usp=sharing" target="_blank">here</a>.</p>
        <p>&copy; 2024 Toby Williams</p>
    </footer>
</body>
</html>
