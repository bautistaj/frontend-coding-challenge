FROM java:8
WORKDIR /
ADD ./src/main/configuration/backend.yml ./backend.yml
ADD frontend-challenge-backend-1.0.0.jar frontend-challenge-backend-1.0.0.jar
EXPOSE 6502
CMD java -jar frontend-challenge-backend-1.0.0.jar server ./backend.yml