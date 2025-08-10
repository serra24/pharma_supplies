import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/"); 
  };
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
      <div className="right-side ">
        <div>
          <img id="image0_2050_9" src="./img/Slider/image_slider1.svg" />
        </div>
      </div>
      <div className="left-side ">
        <div>
          <div className="text">
            <img className="imge" src="img/Vector.svg" alt="" />
            <div>
              <h3>تسجيل الدخول</h3>
              <h6>مرحبًا بك! الرجاء تسجيل الدخول للمتابعة</h6>
            </div>
          </div>
          <h5 id="result" />
          <form method="post" action="" 
          // onsubmit=" return validatdata()"
          onSubmit={handleSubmit}
          >
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
            <input 
             
              type="submit"
              defaultValue="تسجيل الدخول"
              className="bottom   btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</>



         </> 
      </div>
      
      )};
      export default Login  ;
      