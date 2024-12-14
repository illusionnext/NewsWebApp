export default function ModalDefaultPage() {
  return null;
}

//we added this to make sure the page is not rendered on the server
// if the modal is not open and the user is not on the client side
// no visible content will be rendered for this parallel route when you are on the details page of news article
