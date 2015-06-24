SAMPLE API (NodeJs, ExpressJS and MongoDB REST API application)

Make sure you have nodejs, expressjs and mongodb installed.

Use npm start or ./bin/www

You can test it using CURL i.e. 
curl -XPOST http://localhost:3000/customers -d 'name=John&email=customer@c.com&preferedBarber=John2'
curl -XGET http://localhost:3000/customers
curl -XGET http://localhost:3000/customers/:id

Postman (https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) can also be used for testing
(use x-www-form-urlencoded option and set properties name, email and preferedBarber)