import slider4 from "../../assets/img/Rectangle 20.png";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";
import HttpsIcon from "@mui/icons-material/Https";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state for inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [ eeror,setError] = useState("");
function handleSubmit(e) {
  e.preventDefault();
  if (!email || !pass) {
    alert ("entre your data")
    return;
  }

  setError("");

  dispatch(
    loginUser({
      UserName: email,
      Password: pass,
      Type: 0,
      DeviceId: "string",
      FCM_Token: "string",
    })
  )
    .unwrap()
    .then((res) => {
      console.log("res",res);
      

      navigate("/");
    })
    .catch((err) => {
      console.error("Login failed:", err);
      setError("❌ فشل تسجيل الدخول");
    });
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
                    {/* <img className="imgee" src="../../assets/img/Rectangle 20.png" alt="" /> */}
                    <div className="hii">
                      {/* {t.Login} */}
                      <i class="fa-solid fa-user"></i>
                      <h3>{t.login}</h3>
                      <h6 className=" text-muted">{t.welcome}</h6>
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
                        {t.Email}{" "}
                      </label>
                      <br />

                      <input
                        className="input-log form-control p-2"
                        // type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <PersonOutlineOutlinedIcon
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                        }}
                      />
                    </div>
                    <div className="input position-relative ">
                      <label className="put" htmlFor="">
                        {t.password}{" "}
                      </label>
                      <br />
                      <input
                        className="input-log form-control p-2"
                        type="password"
                        name="pass"
                        id="pass"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                      <HttpsIcon
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                        }}
                      />
                    </div>
                    <input 
                      type="submit"
                      value={t.login}
                      className="bottom  btn-block"
                    />
                  </form>
                </div>
              </div>
              <div className="right-side ">
                <div className="imgge">
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