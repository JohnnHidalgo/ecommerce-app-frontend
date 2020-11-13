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
const admin = require('firebase-admin');
const app = dialogflow({ debug: true });
admin.initializeApp();
const db = admin.firestore();
const collectionRef = db.collection('planet');

const collectionStore = db.collection('Stores');

app.intent('planetaIntent', (conv, { planet }) => {
    const term = planet.toLowerCase();
    const termRef = collectionRef.doc(`${planet}`);
    return termRef.get()
        .then((snapshot) => {
            const { definition, word } = snapshot.data();
            conv.ask(`planeta encontrado ${word}`);
            //conv.ask(`Here you go, ${word}, ${definition}.What else do you want to know?`);
        }).catch((e) => {
            console.log('error:', e);
            conv.ask('Sorry, try again and tell me another planet.');
        });
});

app.intent('Default Welcome Intent', (conv) => {
    if (!conv.screen) {
        conv.ask('Lo lamento, intenta acceder a través de un dispocitivo con pantalla');
        return;
    }
    conv.ask('Hola! bienvenido a Kuinbi');
    conv.ask(new Carousel({
        title: 'Mi tienda Kuinbi',
        items: {

            'BusquedaT': {
                synonyms: [
                    'BusquedaT'
                ],
                title: 'Buscar Tienda',
                description: 'Mi tienda Kuibi.',
                image: new Image({
                    url: 'https://www.enriquedans.com/wp-content/uploads/2016/09/shopping-cart.jpg',
                    alt: 'Realizar una Busqueda',
                }),
            },

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
        'BusquedaT': 'Nombre de la Tienda',
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

//ACtualizar la compra
app.intent('buscartienda', (conv, { tienda }) => {

    const term = planet.toLowerCase();
    const termRef = collectionRef.doc(`${tienda}`);
    return termRef.get()
        .then((snapshot) => {
            const { definition, word } = snapshot.data();
            conv.ask(`Tieda encontrada ${word}`);
            conv.ask(`Desea ver los productos de: ${word}`);
        }).catch((e) => {
            console.log('error:', e);
            conv.ask(`Lo lamento no encontré ${tienda}`);
        });

    conv.ask(`Agregando: ${number} ${product}`);
});

app.intent('AddProductIntent', (conv, { product, number, agregar }) => {
    //const usersDb = db.collection('users'); 

    conv.ask(`Agregando: ${number} ${product}`);
});

app.intent('RequestPurchaseIntent', (conv) => {
    conv.ask('Tipo de cliente');
});

app.intent('RequestUserIntent', (conv, { clienttype }) => {
    conv.ask('Ok, dime ¿Que productos desea buscar?');
});
app.intent('RequestProductIntent', (conv, { number, product }) => {
    conv.ask(`Este es el producto huevos?`);
    conv.ask(new BasicCard({
        text: 'Huevos',
        subtitle: 'Huevos de la granja de pedro',
        title: 'Huevos',
        image: new Image({
            url: 'https://s1.eestatic.com/2019/08/06/ciencia/nutricion/Alimentacion-Supermercados-Huevo-Nutricion_419468858_131721191_1024x576.jpg',
            alt: 'Image alternate text',
        }),
        display: 'CROPPED',
    }));
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);