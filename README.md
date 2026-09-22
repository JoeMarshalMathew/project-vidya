# Project README & Local Setup Guide

This guide details the project structure, prerequisites, and instructions for setting up and running the application locally.

## Project Overview

This repository contains a modern web application for NiNi's Academy featuring a clean, responsive layout built using Tailwind CSS and standard HTML5. It includes modular sections such as Hero, Values, Services (Our Programs), About Us, FAQs accordion, Reviews, Contact, and Location.

## Prerequisites

Before starting, ensure you have the following installed on your local machine:

- A modern web browser (Google Chrome, Firefox, Microsoft Edge, or Safari)
- A code editor such as Visual Studio Code (VS Code)
- (Optional) Node.js and npm if you are running a local development server or compiling Tailwind CSS locally.

## Getting Started Locally

Follow these steps to set up and run the project on your local machine:

### Step 1: Clone the Repository

Open your terminal (or command prompt) and clone the repository to your local machine:

```bash
git clone <your-repository-url>
cd <repository-directory>
```

### Step 2: Open the Project

Open the project folder in your preferred code editor (e.g., VS Code):

```bash
code .
```

### Step 3: Run the Development Server

Depending on how your development environment is structured, you can view the project using one of the following methods:

- **Using a Live Server (Recommended):** If you are using VS Code, install the Live Server extension, right-click your `index.html` file, and select **Open with Live Server**. This will launch a local development server (usually at `http://localhost:5500`) with live reloading enabled.
- **Opening Directly:** Alternatively, navigate to the project folder on your computer and double-click `index.html` to open it directly in your default web browser.

### Step 4: Contribute and Keep Updated

To keep your local branch synchronized with the remote repository and submit contributions:

1. Pull the latest changes from the remote repository:

   ```bash
   git pull origin main
   ```

2. Create a feature branch for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes and push to the branch:

   ```bash
   git commit -m "Add descriptive commit message"
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request for review.

## Project Structure

- `index.html` — Main entry point containing the HTML markup for sections like About and FAQs.
- **Modular HTML includes** — For sections like Hero, Values, Services, About, FAQs, Reviews, Contact, and Location.
