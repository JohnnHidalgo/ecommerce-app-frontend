'use strict';

const {
    dialogflow,
    SimpleResponse,
    BasicCard,
    Button,
    Image,
    BrowseCarousel,
    BrowseCarouselItem,
    Suggestions,
    LinkOutSuggestion,
    MediaObject,
    Table,
    List,
    Carousel,

} = require('actions-on-google');

const functions = require('firebase-functions');

const app = dialogflow({ debug: true });

app.intent('Default Welcome Intent', (conv) => {

    if (!conv.screen) {
        conv.ask('Lo lamento, intenta acceder a través de un dispocitivo con pantalla');
        return;
    }
    conv.ask('Hola! bienvenido a Kuinbi');
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



});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);