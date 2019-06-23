const express = require('express');
const Trip = require('../models/trip');
const app = express();
const utf8 = require('utf8');

app.get('/trips', function(req, res) {
    Trip.find({})
        .exec((err, trips) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                trips
            })
        })
})
app.get('/total_trips', function(req, res) {
    Trip.find({})
        .count()
        .exec((err, trips) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                trips
            })
        })
})
app.get('/total_trips/city/:city', function(req, res) {
    let city = req.params.city;
    city = utf8.decode(city)
    console.log(city);
    Trip.find({ 'city.name': city })
        .count()
        .exec((err, trips) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                trips
            })
        })
})
app.get('/total_trips/country/:country', function(req, res) {
    let country = req.params.country;
    country = utf8.decode(country)
    Trip.find({ 'country.name': country })
        .count()
        .exec((err, trips) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                trips
            })
        })
})


app.post('/trips', function(req, res) {
    let body = req.body;
    let trip = new Trip({
        "start.date": body.start_date,
        "start.pickup_address": body.start_pickup_address,
        "start.pickup_location.type": body.start_pickup_location,
        "start.pickup_location.coordinates": body.start_pickup_location_coordinates,
        "end.date": body.date_end,
        "end.pickup_address": body.pickup_address_end,
        "end.pickup_location.type": body.pickup_location_type,
        "end.pickup_location.coordinates": body.end_pickup_location_coordinates,
        "country.name": body.name_country,
        "city.name": body.name_city,
        "passenger.first_name": body.first_name_passenger,
        "passenger.last_name": body.last_name_passenger,
        "driver.first_name": body.first_name_driver,
        "driver.last_name": body.last_name_drive,
        "car.plate": body.plate,
        status: body.status,
        check_code: body.check_code,
        "createdAt.date": body.date_createdAt,
        "updateAt.date": body.date_updateAt,
        price: body.price,
        "driver_location.type": body.type_driver_location,
        "driver_location.coordinates": body.coordinates_driver_location
    });

    trip.save((err, tripDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            trip: tripDB
        })
    });
})

app.put('/trips/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    Trip.findByIdAndUpdate(id, body, { new: true }, (err, tripDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            trip: tripDB
        })
    })
})

app.delete('/trips', function(req, res) {
    res.json('get trips')
})

module.exports = app;