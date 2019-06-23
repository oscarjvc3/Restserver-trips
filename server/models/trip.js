const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tripSchema = new Schema({
    start: {
        date: {
            type: Date,
            require: [true, 'La fecha es necesaria']
        },
        pickup_address: {
            type: String,
            require: [true, 'Direccion requerida']
        },
        pickup_location: {
            type: {
                type: String,
                default: "Point"
            },
            coordinates: {
                type: [Number],
                require: [true, 'Falta cordenadas']
            }
        }

    },
    end: {
        date: {
            type: String,
            require: [true, 'La fecha es necesaria']
        },
        pickup_address: {
            type: String,
            require: [true, 'Direccion requerida']
        },
        pickup_location: {
            type: {
                type: String,
                default: 'Point',
                require: false
            },
            coordinates: {
                type: [Number],
                require: [true, 'Falta cordenadas']
            }
        }
    },
    country: {
        name: {
            type: String,
            default: 'Colombia',
            require: false
        },
    },
    city: {
        name: {
            type: String,
            default: 'Bogota',
            require: false
        },
    },
    passenger: {
        first_name: {
            type: String,
            require: [true, 'Falta nombre pasajero']
        },
        last_name: {
            type: String,
            require: [true, 'Falta apellido pasajero']
        }
    },
    driver: {
        first_name: {
            type: String,
            require: [true, 'Falta nombre conductor']
        },
        last_name: {
            type: String,
            require: [true, 'Falta apellido conductor']
        }
    },
    car: {
        plate: {
            type: String,
            require: [true, 'Falta placa del carro']
        }
    },
    status: {
        type: String,
        require: [true, 'Falta estado del viaje']
    },
    check_code: {
        type: String,
        default: "00"
    },
    createdAt: {
        date: {
            type: Date,
            require: [true, 'La fecha es necesaria']
        }
    },
    updateAt: {
        date: {
            type: Date,
            require: [true, 'La fecha es necesaria']
        }
    },
    price: {
        type: Number,
        default: 0,
        require: false
    },
    driver_location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            require: [true, 'Falta cordenadas']
        }
    }
});


module.exports = mongoose.model('Trip', tripSchema);