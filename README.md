# Emergency Social Network (ESN) Project

## Project Overview

This repository contains the codebase and documentation for the **Emergency Social Network (ESN)**, a web-based social networking platform designed to assist small communities of civilians during natural disasters. The platform enables users to communicate and coordinate effectively in the event of emergencies such as earthquakes, wildfires, or tsunamis.

The goal of ESN is to create a system that prioritizes ease of use, accessibility, and responsiveness, especially for users accessing the platform through mobile devices.

## Technology Stack

I have chosen the following technologies for the development of this project, carefully balancing ease of use, performance, and maintainability:

### Front-End

- **HTML5**, **CSS3**, **JavaScript**: The core web technologies used for building the user interface. These technologies provide a simple, universally supported way to create responsive and accessible front-end pages.
- **Bootstrap**: We are using Bootstrap to speed up the design process and ensure that the application is responsive. Bootstrap offers pre-built components that help create a mobile-first, clean design, which is essential in an emergency social network.

### Back-End

- **Node.js**: Node.js is being used for server-side operations. Its event-driven, non-blocking nature makes it well-suited for real-time communication, which is critical for this project.
- **Express.js**: A lightweight framework for Node.js, Express simplifies routing, middleware, and server management, making it easier to implement the back-end logic.

### Database

- **MySQL**: MySQL is the database of choice due to its stability and efficient handling of relational data. It will store user data, communication logs, and other critical information in a secure and consistent manner.

### Communication Between Tiers

- **REST API**: I am implementing a RESTful API for communication between the front-end and back-end. This approach ensures that the system is scalable and easy to maintain, with a clear separation of responsibilities between the client and server.
