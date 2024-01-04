# Zealthy React Native Tech Screen 

Hi, and thank you again for the opportunity to interview with Zealthy. 
Please find in this repo the React Native tech screen, which is a sample 
app instantiating a rudimentary help desk ticketing system.

## Getting Started
This is an app written in React Native and managed with Expo. This is convenient 
as it allows you to run the app on your own device without having to install
Android Studio or XCode. This is done using the Expo app, which you can find
in the Google Play Store or Apple App Store.

To get this to work you need to clone the back end repo, and this this one, since 
the app is dependent on the server. The back end repo can be found here:


https://github.com/storozhenko98/Zealthy-Backend

Once you have that repo cloned, please run `npm install` to install the dependencies.
Then, run `node server.js` to start the server. The server will be running on port 3000.

Then, to get the actual app to run, please clone this repo and run `npm install` to install the dependencies.
Then, run `npx expo start` to start the Expo server. You can then scan the QR code
with your phone to run the app on your device. 

Now, the cool thing about expo is that you can also run the app in the browser. To 
do so, please run `npx expo start --web`. This will start the Expo server in web 
mode. Now, because the app is optimzed for mobile, it will not look as good full 
screen on your computer. To get around this, you can open the developer tools in
your browser and toggle the device toolbar. This will allow you to run the app in
a mobile view.


## The App
The app is a simple help desk ticketing system. The user can create a ticket,
which will be added to the list of tickets using Supabase as the DB and 
express as the server. Images are also supported, and are uploaded to the
server and stored in the DB as b64. I considered adding bucket storage, but
decided against it as it would have been overkill for this project.

## Closing Remarks

Again, I very much appreciate the opportunity to interview with Zealthy. I
hope you enjoy the app, and I look forward to hearing from you soon! If 
you have any questions, please do not hesitate to reach out to me. 