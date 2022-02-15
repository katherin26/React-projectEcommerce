# **Create client side**

1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init
3. add the paths with = "./src/\*_/_.{js,jsx,ts,tsx}",
4. FontAwesome :

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

```

# **Alan**

```
let services = [
  {
    services: "Tienes Accesso a Internet , Puedes hacer consignaciones bancarias , Puedes retirar dinero en efectivo, Puedes Recargar minutos a todos los operadores, Puedes pagar tus servicios como agua, luz, gas, telefono, uniminuto y television, Puedes hacer apuestas con juegos de apuestas w , Puedes sacar Fotocopias , Puedes hacer Llamadas nacionales y internacionales",
    products: "Venta de Papeleria y utiles escolares, servicios de Argollado para libros, Laminacion para carnets o documentos, Venta de cream Helado",
    aboutus: "Fundada en el año dos mil seis, VariedadesOYF inicio como Cibercafé ofreciendo a sus usuarios acceso a internet, llamadas Internacionales y recarga de minutos. Un par de años más tarde fue agregando más servicios como : retiros y consignaciones con el banco Davivienda y Nequi, pago de servicios con Mega red y Puntored, servicios de papelería como : Laminación, Fotocopiadora, Argollado, Impresiones y venta de útiles escolares.",
    contactPhone : "Puedes contactarnos llamando al numero : DOS SEIS NUEVE OCHO OCHO SIETE SEIS ",
    contactChat:"puedes hacer click en el boton que se llama : Nuestro Chat,  para enviarnos mensajes online " ,
    contactEmail:"Puedes hacer click al icono de correo electronico que se encuentra en la seccion de contactanos para enviarnos un mensaje directo.",
  },

];

//Servicios
intent('Tell me more about services',(p)=>{
    p.play({command: 'getServices', data: services})

   p.play('Te gustaria que lea acerca de servicios? ');
    p.then(confirmation);
})

//Productos
intent('Tell me more about products',(p)=>{
    p.play({command:'getProducts', data:services})
    p.play('Te gustaria que lea acerca de Productos?');
    p.then(confirmationP);
})

//Empresa
intent('Tell me more about company',(p)=>{
    p.play({command:'getCompany', data:services})
    p.play('Te gustaria que lea acerca de la empresa?');
    p.then(confirmationC);
})

//Contactanos por Telefono
intent('Tell me how I contact the company by phone',(p)=>{
    p.play({command:"getContactPhone", data:services})
    p.play("Te gustaria que lea acerca de como contactar por telefono?");
    p.then(confirmationPhone)
})

//Contactanos por Chat
intent('Tell me how I contact the company by  chat',(p)=>{
    p.play({command:"getContactChat", data:services})
    p.play('Te gustaria que lea acerca de como contactar por chat?');
    p.then(confirmationChat)
})

//Contactanos por Email
intent('Tell me how I contact the company by Email', (p)=> {
    p.play({command:"getContactEmail", data:services})
    p.play('Te gustaria que lea acerca de como contactar por correo electronico?');
    p.then(confirmationEmail)
})

//Servicios Confirmation
const confirmation = context(() => {
    intent('si', (p) => {
        for(let i = 0; i < services.length ; i++){
            p.play({command:'getServices', data: services[i]});
            p.play(`${services[i].services}`)
        }
    })
    intent('no', (p)=> {
        p.play('Esta bien')
    })
})

intent('(go|) back', (p) => {
    p.play('Esta bien');

})

//Products Confirmation
const confirmationP = context(()=>{
    intent('si', (p) => {
        for(let i = 0; i <services.length;i++){
            p.play({command: 'getProducts', data:services[i]});
            p.play(`${services[i].products}`)
        }
    })
     intent('no', (p)=> {
        p.play('Esta bie')
    })
})

//Company Confirmation
const confirmationC = context(()=>{
    intent('si', (p) => {
        for(let i = 0; i <services.length;i++){
            p.play({command: 'getCompany', data:services[i]});
            p.play(`${services[i].aboutus}`)
        }
    })
     intent('no', (p)=> {
        p.play('Esta bien.')
    })
})

//Telefono Confirmation
const confirmationPhone = context(()=> {
    intent('si', (p) => {
        for(let i =0; i < services.length; i++){
            p.play({command: "getContactPhone", data:services[i]});
            p.play(`${services[i].contactPhone}`)
        }
    })
     intent('no', (p)=> {
        p.play('Esta bien.')
    })
})

//Chat COnfirmation
const confirmationChat = context(()=>{
    intent('si',(p) => {
        for(let i = 0; i < services.length; i++){
            p.play({command:"getContactChat",data:services[i]});
            p.play(`${services[i].contactChat}`);
        }
    })
    intent('no', (p)=> {
        p.play('Esta bien.')
    })
})

//Correo electronico COnfirmation
const confirmationEmail = context(()=> {
    intent('si',(p)=>{
        for(let i = 0; i < services.length; i++){
            p.play({command:"getContactEmail", data:services[i]});
            p.play(`${services[i].contactEmail}`);
        }
    })
    intent('no', (p)=> {
        p.play('Esta bien.')
    })
})


```
