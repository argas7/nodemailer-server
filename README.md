# nodemailer-server
This is a repository to do a proof of concept that explains how to send emails using ***nodemailer*** npm package.

# Getting Started

1. Clone this repository to your local git.
> git clone https://github.com/argas7/nodemailer-server.git

2. Install all dependencies with the following command
2.1. Using npm: `npm install`
2.2. Using yarn (strongly recommended): `yarn install`

3. You need to add a _dotenv_ file with the following keys:
```dotenv
####### Server data #######
EMAIL=<some email>
PASSWORD=<your password>

####### Email de clientes #######
CLIENT_EMAIL=<list of emails that email will be sent: example('email1@yahoo.com.br, email2@gmail.com')>
```

4. Run the server with the following command:
4.1. Using node: `node server.js`;
4.2. If you have nodemon: `nodemon server.js`

5. To test the project, send a POST requisition to route `/form` with the following body:
```JSON
{
  "name": "your name",
  "email": "your@email.com",
  "subject": "subject of this email",
  "message": "some message"
}
```

5.1. If you receive the email, all occurred as should be.
