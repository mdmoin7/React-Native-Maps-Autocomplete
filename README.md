# React Native Maps Autocomplete
React native app to integrate Google maps & google places api to provide you with typeahead suggestions.
To run the sample code

Clone the repo
Run command
npm install
expo start

Please note the app requires google places API to be configured in the google developer console. You can configure the same from https://developers.google.com/maps/documentation/ & enable Google Maps Geocoding API

ADD the API Key in map-input.js file

query={{
           key: 'YOUR_API_KEY_HERE',
           language: 'en'
       }}
       
You can also view the sample code on snack https://snack.expo.io/@mdmoin/react-native-maps
