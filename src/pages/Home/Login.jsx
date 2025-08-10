import slider4 from "../../assets/img/Rectangle 20.png";
const Login = () => {
  

  return (
    <div>
        <>
            
           <>
  {/* first section  */}
  <div id="lang" className=" dropdown">
    <button
      className="btn dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      اللغة العربية
    </button>
  </div>
  <div>
    <div className="custom-container ">
     
      <div className="left-side ">
        <div>
          <div className="text">
            <img className="imge" src="img/Vector.svg" alt="" />
            <div className="hii">
              <i class=" fa-solid fa-user"></i><h3>تسجيل الدخول</h3>
              <h6 className="text-muted">مرحبًا بك! الرجاء تسجيل الدخول للمتابعة</h6>
            </div>
          </div>
          <h5 id="result" />
          <form method="post" action="" onsubmit=" return validatdata()">
            <div className="input position-relative">
              <label className="put" htmlFor="">
                البريد الالكتروني
              </label>
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
              />
              <i className="fa-regular fa-user position-absolute" />
            </div>
            <div className="input position-relative">
              <label htmlFor=""> كلمة المرور </label>
              <br />
              <i className="fa-solid fa-lock position-absolute" />
              <input
                type="password"
                name="password"
                id="pass"
                className="form-control"
              />
            </div>
            {/* <input 
             
              type="submit"
              value="تسجيل الدخول" 
              className="bottom btn-block"
            /> */}
             <div className="loginn"><a className="" href="/Home">تسجيل الدخول</a></div>
            
          </form>
        </div>
      </div>
       <div className="right-side ">
        <div>
          <img id="image0_2050_9" src={slider4} />
        </div>
      </div>
    </div>
  </div>
</>



         </> 
      </div>
      
      )};
      export default Login  ;
      