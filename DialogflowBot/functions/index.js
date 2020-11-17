'use strict';

const {
    dialogflow,
    Image,
    Carousel,
} = require('actions-on-google');

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = dialogflow({ debug: true });
admin.initializeApp();
const db = admin.firestore();
const collectionRef = db.collection('Stores');
const collectionRefProd = db.collection('Product');

app.intent('Default Welcome Intent', (conv) => {
    conv.ask('Hola! bienvenido a BIAS');
    conv.ask('Deseas iniciar Seción como Administrador o Cliente?');

});

app.intent('UserIntent', (conv) => {
    if (!conv.screen) {
        conv.ask('Lo lamento, intenta acceder a través de un dispocitivo con pantalla');
        return;
    }
    conv.ask('Hola! bienvenido a Kuinbi');
    conv.ask(new Carousel({
        title: 'Mi tienda Kuinbi',
        items: {
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

app.intent('UserIntent - custom', (conv, params, option) => {
    if (!conv.screen ||
        !conv.surface.capabilities.has('actions.capability.WEB_BROWSER')) {
        conv.ask('Lo lamento, por favor use un teléfono móvil.');
        return;
    }

    const SELECTED_ITEM_RESPONSES = {
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

app.intent('ClientIntent', (conv) => {
    if (!conv.screen) {
        conv.ask('Lo lamento, intenta acceder a través de un dispocitivo con pantalla');
        return;
    }
    conv.ask('Hola! bienvenido a Kuinbi');
    conv.ask(new Carousel({
        title: 'BIAS e-commerce',
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

        },
    }));
});

app.intent('ClientIntent - custom', (conv, params, option) => {
    if (!conv.screen ||
        !conv.surface.capabilities.has('actions.capability.WEB_BROWSER')) {
        conv.ask('Lo lamento, por favor use un teléfono móvil.');
        return;
    }
    const SELECTED_ITEM_RESPONSES = {
        'BusquedaT': 'Nombre de la Tienda',
    };
    conv.ask(`${SELECTED_ITEM_RESPONSES[option]}`);
});

app.intent('buscartienda', (conv, { tienda }) => {
    //conv.ask(`Desea ver los productos de: ${tienda}?`);
    const ref = collectionRef.doc(`${tienda}`);
    return ref.get()
        .then((snapshot) => {
            const { nameStore, locationStore } = snapshot.data();
            conv.ask(`Tieda encontrada ${nameStore}. Dirección: ${locationStore}`);
            conv.ask(`Desea ver los productos de: ${nameStore}?, solo diga buscar y el producto que desea.`);
        }).catch((e) => {
            console.log('error:', e);
            conv.ask(`Lo lamento no encontré ${tienda}`);
        });

});

app.intent('buscarprod', (conv, { producto }) => {
    //conv.ask(`Desea ver los productos de: ${tienda}?`);
    const refProd = collectionRefProd.doc(`${producto}`);
    return refProd.get()
        .then((snapshot) => {
            const { cost, name, type } = snapshot.data();
            conv.ask(`Producto encontrado ${name}. Costo: ${cost}. Tipo: ${type}`);
            conv.ask(`Desea buscar más productos?, solo diga buscar y el producto que desea.  Si no es así, califique a la tienda en una escala del 1 al 5 donde 1 es pésimo y 5 es exelente, Gracias!`);
        }).catch((e) => {
            console.log('error:', e);
            conv.ask(`Lo lamento no encontré ${producto}`);
        });

});

app.intent('calificaciónTienda', (conv, { number }) => {
    conv.ask(`Gracias por tu calificación.`);
    conv.ask(`Puedes decir: menú. Para volver al menú principal`);
});

app.intent('AddProductIntent', (conv, { product, number, agregar, productType, productDesc }) => {
    const liam = collectionRefProd.doc(product);
    return liam.set({
        code: 45003,
        cost: number,
        description: productDesc,
        idProduct: 6,
        name: product,
        quantity: 15,
        type: productType
    }).then((snapshot) => {
        conv.ask(`Agregando: ${number} ${product}`);
    }).catch((e) => {
        conv.ask(`Puedes decir menu para volver al menú principal`);
    });
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);