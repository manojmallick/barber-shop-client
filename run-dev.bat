./mvnw.cmd clean install
docker-compose -f docker-compose-dev.yml up -d --build
echo "Barber api  is running on: http://localhost:4200/actuator/health"
