import { getContacts } from "./services/contacts-services.js";

async function fetchContacts() {
  const all_contacts = await getContacts();
  this.contacts = [...all_contacts];
  this.favorites = all_contacts
    .filter((contact) => contact.favorite === true)
    .reverse();
}

// function currentContacts(){
//   return this[this.currenTab]

//   // if (STORE.currenTab === "income") {
//   //   STORE.income
//   // } else  {
//   //   STORE.expense
//   // }

//   // return STORE[this.expense]
//   // return this[this.currenTab]
// }

function deleteContact(id) {
  this.contacts = this.contacts.filter((contact) => contact.id != id);
  this.favorites = this.favorites.filter((contact) => contact.id != id);
}

function favoriteContact(id) {
  this.favorites.push(this.contacts.find((c) => c.id == id));
}
function unFavoriteContact(id) {
  this.favorites.splice(
    this.favorites.findIndex((e) => e.id == id),
    1
  );
}

// const STORE = {
//   user: null,
//   contacts: [],
//   favorites: [],
//   currenTab: "contacts",
//   fetchContacts,
//   currentContacts,
//   deleteContact
// };
let STORE = {
  user: null,
  contacts: [],
  favorites: [],
  currentContact: null,
  fetchContacts,
  deleteContact,
  favoriteContact,
  unFavoriteContact,
};

export default STORE;

/*
// Para hacer el render de favorites
if (STORE.favorites.length > 0 ){
  div.prepend(
  `
    <h2></h2>
    
  `
  )
}


*/
