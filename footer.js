const footerTemplate = document.createElement('template');
footerTemplate.innerHTML =`
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');

.search-text {
	margin-top: 50px;
	background-color: #272d33;
	padding-top: 60px;
	padding-bottom: 60px;
}
	
.search-text .input-search {
	height: 45px;
	width: 40%;
	padding-left: 20px;
    color: #333;
} 

.search-text .btn-search {
    background: #da3e44;
    border: none;
	color: #FFF;
	height: 45px;
    width: 80px;
}

.search-text h4 {
    color: #FFF;
    font-weight: 700;
}

footer {
    background-color: #33383c;
    padding: 30px 0px;
}	       

.logo {
    color: #FFF;
    font-weight: 700;
    font-size: 30px;
}

.address span, 
.menu span {
   color: #FFF; 
   font-weight: bold; 
   border-bottom: 1px solid #c7c7c7; 
   padding: 10px 0px;
   display: block;
   text-transform: uppercase;
   font-size: 16px;
   letter-spacing: 3px;
}
 
.address li a, 
.menu li a {
    color: #FFF;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: 14px;
}

.address li, 
.menu li {
    margin: 20px 0px;
    list-style: none;
}

.address li a:hover, 
.menu li a:hover {
    color: #da3e44;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
}

.address .fa {
    color: #da3e44;
    margin-right: 10px;
    font-size: 18px;
}
</style>
<div class="search-text"> 
   <div class="container">
     <div class="row text-center">
     
       <div class="form">
           <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <form id="search-form" class="form-search form-horizontal">
                <input type="text" class="input-search" placeholder="Email Address">
                <button type="submit" class="btn-search">SUBMIT</button>
            </form>
        </div>
    
      </div>         
   </div>     
</div>

<footer>
 <div class="container">
   <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <span class="logo">Look Fashion
              </span>
            </div>
            
            <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="menu">
                     <span>Menu</span>    
                     <li>
                        <a href="#">Home</a>
                      </li>
                           
                      <li>
                         <a href="#">About</a>
                      </li>
                           
                      <li>
                        <a href="#">Blog</a>
                      </li>
                           
                      <li>
                         <a href="#">Gallery</a>
                      </li>
                 </ul>
            </div>
       
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="address">
                <span>Contact</span>       
                <li>
                   <i class="fa fa-phone" aria-hidden="true"></i> 
                   <a href="#">Phone</a>
                </li>
                <li>
                   <i class="fa fa-map-marker" aria-hidden="true"></i> 
                   <a href="#">Adress</a>
                </li> 
                <li>
                   <i class="fa fa-envelope" aria-hidden="true"></i> 
                   <a href="#">Email</a>
                </li> 
               </ul>
            </div>
        </div> 
    </div>
</footer>
`
class footerbar extends HTMLElement {
    constructor() {
        super()
    }
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'closed'})
    shadowRoot.appendChild(footerTemplate.content)
  }  
}
window.customElements.define('footer-bar', footerbar)