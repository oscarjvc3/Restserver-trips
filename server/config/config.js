process.env.PORT = process.env.PORT || 3000;

// Entorno


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/trips';
} else {
    urlDB = 'mongodb://adminDB:BpeNH57qwJntcGjL@cluster0-31kwc.mongodb.net/tripsmiaguila';
}
urlDB = 'mongodb+srv://adminDB:BpeNH57qwJntcGjL@cluster0-31kwc.mongodb.net/tripsmiaguila';

process.env.URLDB = urlDB;