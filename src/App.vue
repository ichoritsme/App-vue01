<template>
  <div>
    
    
    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/customer">Customer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/type">Type</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employee">Employee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/customer_crud">CustomerCrud</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employee_crud">EmployeeCrud</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employeecrud">EmployeeCrud</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/employee">Employee</a></li>
            <li><a class="dropdown-item" href="/product">Product</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/sh_product">Products</a></li>
            <li><a class="dropdown-item" href="/productedit">EditProducts</a></li>
          </ul>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/show_product">ProductView</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


  <router-view/>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0004ff;
}
</style>
