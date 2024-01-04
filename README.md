# Zealthy React Native Tech Screen 

Hi, and thank you again for the opportunity to interview with Zealthy. 
Please find in this repo the React Native tech screen, which is a sample 
app instantiating a rudimentary help desk ticketing system.

## Getting Started
This is an app written in React Native and managed with Expo. This is convenient 
as it allows you to run the app on your own device without having to install
Android Studio or XCode. This is done using the Expo app, which you can find
in the Google Play Store or Apple App Store.

To get started, clone this repo and run `npm install` to install the dependencies.
Then, run `npx expo start` to start the Expo server. You can then scan the QR code
with your phone to run the app on your device. It is as simple as that! 

Now, the cool thing about expo is that you can also run the app in the browser. To 
do so, please run `npx expo start --web`. This will start the Expo server in web 
mode. Now, because the app is optimzed for mobile, it will not look as good full 
screen on your computer. To get around this, you can open the developer tools in
your browser and toggle the device toolbar. This will allow you to run the app in
a mobile view.

Alternatively, I have published the web app to the following URL:

https://personal-projects.a2hosted.com/

You can visit this URL on your phone to run the app. The only other way for you to 
run the app natively is to instal it, but that would require me to publish it to the app
stores, which would take a week at minimum since, Apple at the very least, is 
vert strict about publishing apps, especially if they are tech demos.

So, please check out the web app, and for as close as you can get to a native 
experience, download this repo, run `npm install`, and then run `npx expo start`
and scan the QR code with your phone. 

## The App
The app is a simple help desk ticketing system. The user can create a ticket,
which will be added to the list of tickets using Supabase as the DB and 
express as the server. Images are also supported, and are uploaded to the
server and stored in the DB as b64. I considered adding bucket storage, but
decided against it as it would have been overkill for this project.

The server code you can find in the `server` directory
of this repo, for the relevant parts. I intergrated it with the rest of my 
personal projects on a personal server, but the code is the same. The server
has additional routes but they are for my own personal apps. Also, the 
main server is set up to run the web app itself, so if you just want to 
visit it from your phone, you can do so at the URL above.

The app itself is written in React Native, and uses Expo for the build and
deployment. It is relatively simple, but I think it captures the 
technical requirements you've outlined, given especially the fact that 
the app is not to take more than 5 hours to complete. 

## Closing Remarks

Again, I very much appreciate the opportunity to interview with Zealthy. I
hope you enjoy the app, and I look forward to hearing from you soon! If 
you have any questions, please do not hesitate to reach out to me.