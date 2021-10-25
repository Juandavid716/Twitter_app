# Twiter_app
Clone of twitter made in React with Sass as style manager.

## How to run
* Install the node modules with the command: `yarn install`
* Run the app  in the development mode with the command: `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
## URL Website
https://mytwitterapp-a9860.web.app/

## Routes availables

You can access to any of the next routes:
* /
* /signup
* /login
* /passwordRecovery
* /activate *
* /home *
* /profile *
* /timeline/:username *
* /tweets/:id *
* /trending/:topic *
* /search/results *

Routes with * have dummy design.

The design is based on [this](https://www.figma.com/file/Rax0sO6iBFdvryH7sKGNh8/Login-View-(Community)?node-id=421%3A124).

## Google Analytics

* Google analytics was implemented to the project. For that reason, SSR is not available.


## Lighthouse performance

### 	✅ Desktop
<div align="center"><img src="https://i.ibb.co/HCzrpnw/desktop-perf.png" width="400px"/></div>

### ✅ Mobile *
<div align="center"><img src="https://i.ibb.co/qd7MsGZ/mobile-performance-3.png" width="400px"/></div>
<br> </br>
* This test was made on Incognite mode.

# Second assessment

For this evaluation, all the requested requirements were done except the following:


* Eliminar comentario (solo si está autenticado) (solo lo puede hacer el creador del comentario)
* Lista de trending 1 (deben cargar los últimos 10 tweets de una cuenta, consumiendo el endpoint que se alimenta de Twitter original, como lo hicimos en la clase)
* Lista de trending 2 (Lista de últimos 20 tweets)

Because the endpoints are not implemented in the backend.

## Lighthouse performance

### 	✅ Desktop
<div align="center"><img src="https://i.ibb.co/pypf4Kh/desktop-second.png" width="400px"/></div>
<br> </br>
`The api was deployed and the front-end is in the same URL above.`



