
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";

const newpass = () => {
       // eslint-disable-next-line react-hooks/rules-of-hooks
       const { t } = useLang();


  return (
    <div>
        <>
        <BreadCrumb title={t.changepassword}  />
        <div className="password-change-form col-lg-6 col-md-4 col-sm-2">
  <h2>
    <i class="fa-solid fa-lock"></i> {t.changepassword}
  </h2>
  <form>
    <div className="form-group">
      <label htmlFor="current-password"> {t.CurrentPassword} </label>
      <input type="password" id="current-password" name="current-password"  /><span className="icon"><i class="fa-solid fa-eye"></i></span>
      {/* <span className="visibility-toggle"></span> */}
    </div>
    <div className="form-group">
      <label htmlFor="new-password">{t.NewPassword}</label>
      <input type="password" id="new-password" name="new-password" /><span className="icon"><i class="fa-solid fa-eye"></i></span>
      <span className="visibility-toggle"></span>
    </div>
    <div className="form-group">
      <label htmlFor="confirm-password">{t.Confirmnewpassword}</label>
      <input type="password" id="confirm-password" name="confirm-password" /> <span className="icon"><i class="fa-solid fa-eye-slash"></i> </span>
      <span className="visibility-toggle"></span>
    </div>
    <button className="saving" type="submit">{t.Save}</button>
  </form>
</div>









        
     </> 
      </div>
      
      )};
      export default newpass  ;
      