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


app.intent('Default Welcome Intent - OPTION', (conv, params, option) => {
    if (!conv.screen ||
        !conv.surface.capabilities.has('actions.capability.WEB_BROWSER')) {
        conv.ask('Lo lamento, por favor use un teléfono móvil.');
        return;
    }

    const SELECTED_ITEM_RESPONSES = {
        'Busqueda': 'Tipo de cliente',
        'AgregarProductos': 'Dime que producto y cuantas unidades estás agregando al inventario',
        'Inventario': 'B',
        'Ventas': 'A',
    };

    if (SELECTED_ITEM_RESPONSES[option] == 'A') {
        conv.ask(`Este es el detale: 1500 Bolivianos`);
        conv.ask(`Puedes decir: menú. Para volver al menú principal`);

    } else if (SELECTED_ITEM_RESPONSES[option] == 'B') {
        conv.ask(`Actualmente tienes 35 huevos, 12 botellas de agua y 15 unidades de pan`);
        conv.ask(`Puedes decir: menú. Para volver al menú principal`);
    } else {
        conv.ask(`${SELECTED_ITEM_RESPONSES[option]}`);

    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);