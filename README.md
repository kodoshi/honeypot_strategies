# Unit M-TRC 871, Honeypot Strategies

### Team members:
- Klivens Ziu
- Antonin Alves Cardoso
- Yohann Desravines

### Description
Establish a custom honeypot to monitor active penetration attempts.

### Dummy client + server
This repo contains 2 Node.js apps that make simple requests with image files in the HTTP request bodies, to simulate real world hospital machinery, where imagery and medical scans would be sent from client machines (e.g MRI machine producing a chest scan) to a central server.


"/server" containts a simple app that receives an image, and then stores it inside an internal folder "uploads".


"/client" containts a simple app that sends a random image from its internal "files" folder to the server app, every X seconds through a scheduled job.


To deploy, update values in both .env files if needed, and then run the following commands inside each folder (assuming Node/npm is already installed):
```
npm install
npm run start
```