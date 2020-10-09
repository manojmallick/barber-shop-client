## Barber Shop
```
He wants you to create a booking system that will allow his customers to book an appointment with a barber of their preference. 
he can't really gather any information on customer's satisfaction, send them reminders or collect any other useful metrics to boost his business...
```
With that said, I guess we should start with helping him! We first begin by splitting the work into smaller chunks, because, you know...agile! We then mix in some priority and call them **phases**. So, let's start!
## Motivation
Helping every barber who want him to have a online presence in this competitive world.
## Build status
Build status(CICD)
To be added
## Screenshots
![title](picture/1.png)
![title](picture/2.png)
![title](picture/3.png)
![title](picture/4.png)
![title](picture/5.png)

## Live Demo
To be added

## Tech/framework used
<b>Built with</b>
- Angular 9
- NgRx
- Bootstrap
- RxJs


## Features
Helping out all the barbers out there who cannot invest money.(It contains only one part of the full application i.e. UI )
#### Phase 1
- In this first phase, the least that we can do is to appoint the customer a barber that is available. Each booking must claim a time slot of 30 minutes.

#### Phase 2
- The customer can either pick a time slot where he will be able to see which barber is available or be able to select a barber and see his schedule. The barbers should be ordered by experience_level. It's up to you what defaults you choose, but hey Edwin does care about the customer journey, or as he likes to call it, "The clever stuff"!

#### Phase 3
- As a shop owner, I want to be able to see metrics about the barbers, clients and appointments.
- As a customer, I want to be able to change, update or delete my appointment
- As a customer, I want to receive a reminder 1 hour before my appointment.
- As a customer, I want to be do recurring bookings. Let's say every 2 weeks or perhaps every Month.
- As a shop owner, I want customers to be able to join a wait list if no bookings are available.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.
Provide step by step series of examples and explanations about how to get a development env running.

Multiple ways to run the application 
- Docker way

I have created two scripts & two bat files
After in the root 
```
sh ./run-dev.sh   #this is for local dev(port :4200)
sh ./run.sh       #this for prod env(port:80)

or

chmod +x run.sh
./run.sh

or

./mvnw.cmd clean install
docker-compose -f docker-compose-dev.yml up -d --build

``` 

port can be update by  docker compose file/ .env file in root.

To check the code ide like Vs code , lombok is to be installed 

- Other way

- Node
- IDE(optional)
# this requires backend application should be running

## Credits
Thank you all who like my project. 

![title](picture/6.gif)

#### Anything else that seems useful

## License
MIT © [Manoj Mallick](https://github.com/manojmallick)