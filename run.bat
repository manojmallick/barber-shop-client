./mvnw.cmd clean install

docker-compose build
docker-compose up -d

echo "Barber api  is running on  http://localhost/"
