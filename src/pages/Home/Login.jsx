import slider4 from "../../assets/img/Rectangle 20.png";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const Login = () => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  const { lang, switchLang, t } = useLang();
  const handleLangChange = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    switchLang(newLang);
    window.location.reload();
  };

  return (
    <div>
      <>
        <>
          {/* first section  */}
          <div className="dropdown dropdown-login ">
            <button
              className="btn dropdown-toggle"
              variant="success"
              id="dropdown-basic"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {lang === "ar" ? t.langArabic : t.langEnglish}
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleLangChange}>
                {lang === "ar" ? t.langEnglish : t.langArabic}
              </button>
            </div>
          </div>
          <div>
            <div className="custom-container ">
              <div className="left-side ">
                <div>
                  <div className="text">
                    <img className="imge" src="img/Vector.svg" alt="" />
                    <div className="hii">
                      {/* {t.Login} */}
                      <i class="fa-solid fa-user"></i>
                      <h3>تسجيل الدخول </h3>
                      <h6 className=" text-muted">
                        مرحبًا بك! الرجاء تسجيل الدخول للمتابعة
                      </h6>
                    </div>
                  </div>
                  <h5 id="result" />
                  <form
                    method="post"
                    action=""
                    // onsubmit=" return validatdata()"
                    onSubmit={handleSubmit}
                  >
                    <div className="input position-relative ">
                      <label className="put" htmlFor="">
                        البريد الالكتروني
                      </label>
                      <br />
                      <input
                        className="input-log form-control p-2"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <i className="iconn fa-regular fa-user position-absolute" />
                    </div>
                  <div className="input position-relative ">
                      <label className="put" htmlFor="">
                        البريد الالكتروني
                      </label>
                      <br />
                      <input
                        className="input-log form-control p-2"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <i class="iconn fa-solid fa-lock  position-absolute"></i>
                    </div>
                    <input
                      type="submit"
                      value="كلمه المرور"
                      className="bottom   btn-block"
                    />
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
  );
};
export default Login;
