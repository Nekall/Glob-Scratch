export const isEmail = emailAdress =>
  !!emailAdress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
