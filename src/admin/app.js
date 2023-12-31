const config = {

  translations: {
   
    en: {
      "app.components.LeftMenu.navbrand.title": "Plus Point",
      "Auth.form.welcome.subtitle": "Welcome to Plus Point Dashboard",
      "Auth.form.welcome.title": "Welcome!",
    },

    tutorials: false,
   
     notifications: { release: false },
  
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config, 
  bootstrap,
  
};