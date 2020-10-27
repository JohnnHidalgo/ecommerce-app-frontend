// Copyright 2018, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const { dialogflow } = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('favorite color', (conv, { color }) => {
    const luckyNumber = color.length;
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your lucky number is ' + luckyNumber);
});

app.intent('Default Welcome Intent', (conv) => {

    if (!conv.screen) {
        conv.ask('Lo lamento, intenta acceder a través de un dispocitivo con pantalla');
        return;
    }
    productList.length = 0;
    productListToApi.length = 0;
    return service.login().then((res) => {
        conv.ask('Hola! bienvenido a Kuinbi');
        conv.ask('Aqui podrás buscar y ver la disponibilidad de los pruductos en tu tienda');
        conv.ask(new Carousel({
            title: 'Mi tienda Kuinbi',
            items: {
                'Busqueda': {
                    synonyms: [
                        'Busqueda'
                    ],
                    title: 'Busqueda',
                    description: 'Mi tienda Kuibi.',
                    image: new Image({
                        url: 'https://www.enriquedans.com/wp-content/uploads/2016/09/shopping-cart.jpg',
                        alt: 'Realizar una Busqueda',
                    }),
                },

                'AgregarProductos': {
                    synonyms: [
                        'AgergarProductos'
                    ],
                    title: 'Agregar productos',
                    description: 'Mi tienda Kuibi.',
                    image: new Image({
                        url: 'https://www.kindpng.com/picc/m/160-1601450_new-ticket-icon-png-download-iconos-de-agregar.png',
                        alt: 'Agregar productos a inventario',
                    }),
                },
                'Inventario': {
                    synonyms: [
                        'Inventario',
                    ],
                    title: 'Inventario',
                    description: 'Mi tienda Kuinbi.',
                    image: new Image({
                        url: 'https://i0.wp.com/www.ivalis.es/wp-content/uploads/sites/4/2014/09/Image_Hyper.jpg',
                        alt: 'Ver mi inventario',
                    }),
                },
                'Ventas': {
                    synonyms: [
                        'Ventas',
                    ],
                    title: 'Ventas de día',
                    description: 'Mi tienda Kuinbi.',
                    image: new Image({
                        url: 'https://image.freepik.com/vector-gratis/personal-personal-entregar-servicio-al-cliente-tienda_40876-671.jpg',
                        alt: 'Ver mis ventas del día',
                    }),
                },
            },

        }));

        Token = res;
    });

});
// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);