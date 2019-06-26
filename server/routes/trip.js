const express = require('express');
const Trip = require('../models/trip');
const app = express();
const utf8 = require('utf8');

app.get('/trips', function(req, res) {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 10;
    desde = Number(desde);
    hasta = Number(hasta);
    Trip.find({})
        .skip(desde)
        .limit(hasta)
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
app.get('/trips/total_trips', function(req, res) {
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
app.get('/trips/total_trips/city/:city', function(req, res) {
    let city = req.params.city;
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 10;
    desde = Number(desde);
    hasta = Number(hasta);
    city = utf8.decode(city)
    console.log(city);
    Trip.find({ 'city.name': city })
        .skip(desde)
        .limit(hasta)
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
app.get('/trips/total_trips/country/:country', function(req, res) {
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
        "start.date": body.start.date,
        "start.pickup_address": body.start_pickup_address,
        "start.pickup_location.type": body.start_pickup_location_type,
        "start.pickup_location.coordinates": body.start_pickup_location_coordinates,
        "end.date": body.end_date,
        "end.pickup_address": body.end_pickup_address,
        "end.pickup_location.type": body.end_pickup_location.type,
        "end.pickup_location.coordinates": body.end_pickup_location.coordinates,
        "country.name": body.country_name,
        "city.name": body.city_name,
        "passenger.first_name": body.passenger_first_name,
        "passenger.last_name": body.passenger_last_name,
        "driver.first_name": body.driver_first_name,
        "driver.last_name": body.driver_last_name,
        "car.plate": body.car_plate,
        status: body_status,
        check_code: body.check_code,
        "createdAt.date": body.createdAt_date,
        "updateAt.date": body.updateAt_date,
        price: body.price,
        "driver_location.type": body.driver_location_type,
        "driver_location.coordinates": body.driver_location_coordinates
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