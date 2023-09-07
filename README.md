
# EventEase 

- A event management web application that allows users to view various events, and register for them or add to their wishlist.
- users can view the events list after they have logged in (or register, if the dont have an account).
- the passwords are encrypted, providing security to the data being entered.
- Admins have the power to add, delete, and modify(work in progress) the events.
- as a bonus, users can also toggle between light and dark mode

## Tech Stack

**Client:** React, Chakra UI, ContextAPI

**Server:** Node, Express, MongoDB


## Steps to run

Clone the repository / download the zip file. 

**To run it locally :**
In a new terminal, do

```bash
  cd client
  npm start
```
In another terminal, do

```bash
  cd server
  nodemon server.js
```

You can install nodemon by doing :
```bash
    npm install -g nodemon
```

**NOTE :**

To view **user portal**, register with any email and password.

To view **Admin portal**, log in with the following credentials :

**email :** admin@test.com

**password :** gdsc



    
## Screenshots

homepage in both light and dark mode before logging in :

![localhost_3000_ (1)](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/75e61787-e2b3-4de0-b2e7-89546a8316cd)

![localhost_3000_ (2)](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/f632a5ba-d961-4d66-9d90-7a883a3f6ec7)

Registration and login pages :
![Screenshot 2023-09-08 032728](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/21d4b554-b359-4ecc-b54c-787f0146a83e)

![Screenshot 2023-09-08 032633](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/c84e85df-edd3-48f6-9adc-bf9611d5a60f)

Event page in user and admin portal respectively : 
![Screenshot 2023-09-08 033014](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/e6260806-2caa-4bf8-b3aa-56636ba06aba)

![Screenshot 2023-09-08 032846](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/6a6d9fb8-2388-4050-988d-41d518edfb42)

Adding an event :
![Screenshot 2023-09-08 033838](https://github.com/saijahnavir/GDSC-Event-Management/assets/105307350/b4e8ed81-9298-467d-9ff8-ce850f1ad336)
