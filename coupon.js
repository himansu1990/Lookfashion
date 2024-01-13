class coupon extends HTMLElement{

constructor() {
    super();

}

connectedCallback () {
    this.innerHTML = `<h3>Congratulations! You have won a coupon</h3>`


}

disconnectedCallback() {

}

}
window.customElements.define('coupon-name', coupon)