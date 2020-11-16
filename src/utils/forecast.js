const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f0846801089e8db81387339bb557b535&query=' + latitude + ',' + longitude
    debugger
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out ' + '. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast