class headerbar extends HTMLElement {
 constructor(){
    super()
 }
connectedCallback() {
  this.innerHTML = `
  <style>
  .navbar-header, .navbar-default{
      background-color: #ffffff; 
   }
   
   .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{
       background-color: #ffffff;
       border-bottom: 2px solid #000000;   
   }
  </style>
  <div class="navbar navbar-default navbar-fixed-top">
  <div class="container">
  
      <div class="navbar-header">
          <button button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" rel="home" href="#" title="Buy Sell Rent Everyting">
            <p><kbd>Look Fashion</kbd></p>  
              <!-- <img style="max-width:100px; margin-top: -7px;"
                   src="img/logo.png"> -->
          </a>
      </div>
      
      <div id="navbar" class="collapse navbar-collapse navbar-responsive-collapse">
          <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Collections</a></li>

              <li><a href="#">Sale</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <!-- <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li class="dropdown-header">Nav header</li>
                      <li><a href="#">Separated link</a></li>
                      <li><a href="#">One more separated link</a></li>
                  </ul>
              </li> -->
          </ul>
          <form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="">
              <div class="form-group">
                  <input name="s" id="s" type="text" class="search-query form-control" autocomplete="off" placeholder="Search...">
              </div>
          </form>
      </div>
  
  </div>
  </div>
  `

}
disconnectedCallback() {

}
}
window.customElements.define('header-bar', headerbar)