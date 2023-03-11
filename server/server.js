const {faker} = require('@faker-js/faker');
const express = require('express')
const app = express();
const port= 8000; 

const newuserobj =()=>({
    id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password : faker.internet.password()
})

const newCompanyobj = () => ({
    id: faker.database.mongodbObjectId(),
    firstName: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
})

app.get('/api/users/new', (req,res) => {
    const newUser = newuserobj()
    res.json(newUser);
});
//####### these both ways work just different way of doing it one just makes a new variabel and more code
app.get('/api/company/new',(req,res) => {
    res.json(newCompanyobj())
})

app.get('/api/user/company',(req,res)=> {
    res.json({user: newuserobj(),company: newCompanyobj()})
})


app.listen(port, () => console.log(`listening on port: ${port}s`))