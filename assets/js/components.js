const components = {};

components.register = `
<header id="header" class="fixed-top d-flex align-items-center">
<div class="container d-flex align-items-center justify-content-between">

    <div class="logo">
        <h1><a href="index.html">Sparc-lab</a></h1>
    </div>

    <nav id="navbar" class="navbar">
        <ul>
            <li><a class="nav-link scrollto" href="index.html">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
        </ul>
    </nav>
    <!-- .navbar -->

</div>
</header>

<!-- End Header -->
<div class='register-login-container'>
  <div class='form-wrapper'>
    <div class='logo'>
      <span>Sparc EMG System</span>
    </div>

    <div class='form-container'>
      <form id='register-form'>
        <div class='name-wrapper'>
          <div class='input-wrapper'>
            <input class='input' type="text" name="firstName" placeholder="First name" />
            <div id='firstName-error' class='error'></div>
          </div>
          <div class='input-wrapper'>
            <input class='input' type="text" name="lastName" placeholder="Last name" />
            <div id='lastName-error' class='error'></div>
          </div>
        </div>

        <div class='input-wrapper'>
          <input class='input' type="email" name="email" placeholder="Email" />
          <div id='email-error' class='error'></div>
        </div>
        <div class='input-wrapper'>
          <input class='input' type="password" name="password" placeholder="Password" />
          <div id='password-error' class='error'></div>
        </div>

        <div class='input-wrapper'>
          <input class='input' type="password" name="confirmPassword" placeholder="Confirm password" />
          <div id='confirmPassword-error' class='error'></div>
        </div>

        <div id='form-error' class='form-error'></div>
        <div id='form-success' class='form-success'></div>

        <div class='input-wrapper register-footer'>
          <a id='already-have-account'>Already have an account? Login</a>
          <button class='btn' type='submit'>
            <span>Register</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
`;

components.login = `
<header id="header" class="fixed-top d-flex align-items-center">
<div class="container d-flex align-items-center justify-content-between">

    <div class="logo">
        <h1><a href="index.html">Sparc-lab</a></h1>
    </div>

    <nav id="navbar" class="navbar">
        <ul>
            <li><a class="nav-link scrollto" href="index.html">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
        </ul>
    </nav>
    <!-- .navbar -->

</div>
</header>


<!-- End Header -->
  <div class='register-login-container'>
    <div class='form-wrapper'>
      <div class='logo'>
        <span>Sparc EMG System</span>
      </div>
      <div class='form-container'>
        <form id='login-form'>
          <div class='input-wrapper'>
            <input class='input' type="email" name="email" placeholder="Email" />
            <div id='email-error' class='error'></div>
          </div>

          <div class='input-wrapper'>
            <input class='input' type="password" name="password" placeholder="Password" />
            <div id='password-error' class='error'></div>
          </div>

          <div id='form-error' class='form-error'></div>

          <div class='input-wrapper login-footer'>
            <a id='create-account-button' class='login-register'>Create an account</a>
            <button class='btn' type='submit'>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;

components.MainScreen = `
<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <h1><a href="index.html">Sparc-lab</a></h1>
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto " href="index.html">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="index.html">Lab</a></li>
                <li class="dropdown"><a href="#"><span>Setting</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li><a id='EditProfile'>Edit Profile</a></li>
                        <li><a id='ShowProfile'>Profile</a></li>
                        <li><a id='SignOut'>Sign out</a></li>
                    </ul>
                </li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->
<!-- ======= Breadcrumbs /  ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <span class="welcome_message"><span class="welcome_message_name" id="welcome_name_user"></span></span>

                </div>

            </div>
        </section>
        <!-- End Breadcrumbs -->
    <!-- ======= Framework Section ======= -->
    <section id="grid-container" class="grid-container">
        <!-- Data file from sever of user -->
        <div class="box-data">
            <h3>Data Files</h3>

            <div class="box_datafile" id="list_datafile"></div>
        </div>

        <!-- End Data file from sever of user -->
        <!-- Info - Chart -->
        <div class="box-info-chart row">
            <h3>Patient Information</h3>
            <ul class="col-xl-4">
                <li><strong>Patient:</strong></li>
                <li><strong>Height/Weight:</strong></li>
            </ul>
            <ul class="col-xl-4" ;>
                <li><strong>Timer:</strong><a id="timer"></a></li>
                <li><strong>Body Part:</strong></li>
            </ul>
            <ul class="col-xl-4" ;>
                <button class='btn-upload' id='lab-add-data-btn'>Upload</button>
                <button class='btn-save' id='SaveData'>Save</button>
                <input type="file" id="lab-upload-data" hidden='hidden'>
                <button type="button" class='btn-upload' id="custom-button">Choose a Files</button>
                <span id="custom-text">No file chosen, yet.</span>
            </ul>
            <div class="dashboard-cards">
                <div class="card">
                    <div class="chart-canvas" id="stage4">

                    </div>
                </div>
            </div>
            <div class="dashboard-cards">
                <div class="card">
                    <div class="chart-canvas" id="stage5">

                    </div>
                </div>
            </div>

        </div>
        <!-- End Info - Chart -->
        <div class="box-info">
            <h3>.</h3>
            <!-- <ul>

            </ul> -->


        </div>


    </section>
    <!-- End Portfolio Details Section -->

</main>
<!-- End #main -->

`;
components.EditProfile = `
<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <h1><a href="index.html">Sparc-lab</a></h1>
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto " href="index.html">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="index.html">Lab</a></li>
                <li class="dropdown"><a href="#"><span>Setting</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li><a id='EditProfile'>Edit Profile</a></li>
                        <li><a id='ShowProfile'>Profile</a></li>
                        <li><a id='SignOut'>Sign out</a></li>
                    </ul>
                </li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->
<!-- ======= Breadcrumbs /  ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <span class="welcome_message"><span class="welcome_message_name" id="welcome_name_user"></span></span>

                </div>

            </div>
        </section>
        <!-- End Breadcrumbs -->
    <!-- ======= Framework Section ======= -->
    <section id="grid-container" class="grid-container">
        <!-- Data file from sever of user -->
        <div class="box-data">
            <h3>List</h3>

        </div>

        <!-- End Data file from sever of user -->
        <!-- Info - Chart -->
        <div class="box-info-chart row">
            <h3>Patient Information</h3>
            <strong>Name:</strong><input><a id="edit-name-info"></a></input>
            <strong>Contact:</strong><input><a id="edit-contact-info"></a></input>
            <strong>Address:</strong><input><a id="edit-add-info"></a></input>
            <strong>Note:</strong><input><a id="edit-note-info"></a></input>
            <strong>Age:</strong><input></input>
            <strong>Height/Weight:</strong><input></input>

            <button class='btn-upload' id="insert">ADD</button>
            <button class='btn-upload' id="select">Select</button>
            <button class='btn-upload' id="update">Update</button>
            <button class='btn-upload' id="delete">Delete</button>


        </div>
        <!-- End Info - Chart -->
        <div class="box-info">
            <h3>.</h3>
            <!-- <ul>

        </ul> -->


        </div>


    </section>
    <!-- End Portfolio Details Section -->

</main>
<!-- End #main -->
`;
components.ShowProfile = `
<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <h1><a href="index.html">Sparc-lab</a></h1>
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto " href="index.html">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="index.html">Lab</a></li>
                <li class="dropdown"><a href="#"><span>Setting</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li><a id='EditProfile'>Edit Profile</a></li>
                        <li><a id='ShowProfile'>Profile</a></li>
                        <li><a id='SignOut'>Sign out</a></li>
                    </ul>
                </li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->
<!-- ======= Breadcrumbs /  ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <span class="welcome_message"><span class="welcome_message_name" id="welcome_name_user"></span></span>

                </div>

            </div>
        </section>
        <!-- End Breadcrumbs -->
    <!-- ======= Framework Section ======= -->
    <section id="grid-container" class="grid-container">
        <!-- Data file from sever of user -->
        <div class="box-data">
            <h3>List</h3>


        </div>

        <!-- End Data file from sever of user -->
        <!-- Info - Chart -->
        <div class="box-info-chart row">
            <h3>Patient Information</h3>
            <ul class="col-xl-4">
                <li><strong>Name:</strong><a id="name-info"></a></li>
                <li><strong>Contact:</strong><a id="contact-info"></a></li>
                <li><strong>Address:</strong><a id="add-info"></a></li>
                <li><strong>Note:</strong><a id="note-info"></a></li>
            </ul>
            <ul class="col-xl-4" ;>
                <li><strong>Age:</strong></li>
                <li><strong>Height/Weight:</strong></li>
            </ul>
            <ul class="col-xl-2" ;>
                <button class='btn-upload' id='EditProfile-btn'>Add/Edit</button>

            </ul>
 

        </div>
        <!-- End Info - Chart -->
        <div class="box-info">
            <h3>.</h3>
            <!-- <ul>

            </ul> -->


        </div>


    </section>
    <!-- End Portfolio Details Section -->

</main>
<!-- End #main -->


`;
components.EditProfile1 = `
<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <h1><a href="index.html">Sparc-lab</a></h1>
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto " href="index.html">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" id='Lab'>Lab</a></li>
                <li class="dropdown"><a href="#"><span>Setting</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li><a id='EditProfile'>Edit Profile</a></li>
                        <li><a id='ShowProfile'>Profile</a></li>
                        <li><a id='SignOut'>Sign out</a></li>
                    </ul>
                </li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->
    <!-- ======= Framework Section ======= -->
    <section id="grid-container" class="grid-container">
        <!-- Data file from sever of user -->
        <div class="box-data">
            <h3>Data Files</h3>

            <div class="box_datafile" id="list_datafile"></div>
        </div>

        <!-- End Data file from sever of user -->
        <!-- Info - Chart -->
        <div class="box-info-chart row">
            <h3>Patient Information</h3>
            <strong>Name:</strong><input><a id="name-info"></a></input>
            <strong>Contact:</strong><input><a id="contact-info"></a></input>
            <strong>Address:</strong><input><a id="add-info"></a></input>
            <strong>Note:</strong><input><a id="note-info"></a></input>
            <strong>Age:</strong><input></input>
            <strong>Height/Weight:</strong><input></input>
            <input type="text" id='namebox' placeholder="Name"><br>
            <input type="text" id='rollbox' placeholder="Rollno"><br>
            <input type="text" id='secbox' placeholder="seclection"><br>
            <input type="text" id='genbox' placeholder="Gender"><br>
            <button id="insert">ADD</button>
            <button id="select">Select</button>
            <button id="update">Update</button>
            <button id="delete">Delete</button>


        </div>
        <!-- End Info - Chart -->
        <div class="box-info">
            <h3>.</h3>
            <!-- <ul>

        </ul> -->


        </div>


    </section>
    <!-- End Portfolio Details Section -->

</main>
<!-- End #main -->
`;