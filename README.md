# React Web Chat with Scaledrone Documentation

The React Web Chat with Scaledrone is a chat application built using React and Scaledrone, a real-time messaging service. This documentation provides an overview of the project, installation instructions, and details about the application's features and components.

## Overview

The React Web Chat with Scaledrone is a simple and scalable chat application that allows users to message between each other in real-time conversations. It utilizes React for the frontend user interface and Scaledrone as the messaging service to handle real-time communication .

Key features of the application include:

- Real-time messaging: Users can send and receive messages in real-time.
- User avatars: Each user is assigned a unique avatar for identification.
## Before start

### Create free Scaledrone account and get your own Channel ID
[https://www.scaledrone.com/](https://www.scaledrone.com/)

## Installation

To install and run the React Web Chat with Scaledrone project, follow these steps:

<ol>
  <li>Clone the repository:</li>
</ol>

```
git clone https://github.com/Marin303/react_webchat_scaledrone.git
```

<ol start="2">
  <li>Navigate to the project directory:</li>
</ol>

```
cd react_webchat_scaledrone
```

<ol start="3">
  <li>Install dependencies:</li>
</ol>

```
npm install
```

<ol start="4">
  <li>Start the development server:</li>
</ol>

```
npm start
```

<ol start="5">
  <li>Open the application in your browser:</li>
</ol>

```
http://localhost:3000
```

## Usage

Upon running the application, you will be presented with the chat interface. Here's a brief overview of the available functionalities:

- Join a chat room: Enter a desired username and select a chat room to join.
- Send messages: Type your message in the input field and press Enter or click the Send button to send the message.
- Receive messages: Incoming messages from other users in the same chat room will be displayed in real-time.

## Components

The React Web Chat with Scaledrone project consists of the following main components:

- `Main`: The main component that handles the overall application structure and state management.

- `NameSetup`: Allows users to set a custom username within the chat channel.

- `RandomAvatar`: Assigns a random avatar icon to each user for identification purposes.

- `Input`: Provides an input field where users can type messages or set their username.

- `Messages`: Represents an individual message in the chat room, displaying the sender's username and message content.

## Configuration

The application can be configured to use a specific Scaledrone channel or to customize other settings. 
Create new `.env` in root of project file using `.env.example` as example. Modify the following values according to your requirements:

```javascript
REACT_APP_CHANNEL_ID = "REPLACE_WITH_CHANNEL_ID"
```

Replace `CHANNEL_ID` with your actual Scaledrone channel ID, respectively.

## Customization

The React Web Chat with Scaledrone project can be customized to match your desired design and styling preferences. The main CSS file for the project is located at `src/App.css`. Modify the styles and add your own custom CSS as needed.

## Contributing

Contributions to the React Web Chat project are welcome! If you encounter any issues or have suggestions for improvements, please feel free to raise an issue or submit a pull request on the project's GitHub repository.

Before contributing use:
```
git remote update
```

## License

The React Web Chat with Scaledrone project is licensed under the MIT License.

## Deployment

The React Web Chat with Scaledrone application is deployed and accessible at the following URL:

[https://chat-app-marin.netlify.app/](https://chat-app-marin.netlify.app/)

Feel free to visit the deployed application to explore its features and functionality.
