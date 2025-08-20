
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const newpass = () => {
       // eslint-disable-next-line react-hooks/rules-of-hooks
       const { t } = useLang();


  return (
    <div>
        <>
        <BreadCrumb title={t.changepassword}  />
        <div className="password-change-form col-lg-6 col-md-4 col-sm-2">
          <div className="up-pass">

               <h2>
    <i class="fa-solid fa-lock"></i> {t.changepassword}
  </h2>
          </div>
  
  <form>
    <div className="form-group">
      <label htmlFor="current-password"> {t.CurrentPassword} </label>
      <input type="password" id="current-password" name="current-password"  /> 
      <RemoveRedEyeOutlinedIcon  sx={{
         position:"absolute",
                         bottom:20,
                         right:10,
                         color:'#343A4080',


      }}/>
      
      
      {/* <span className="visibility-toggle"></span> */}
    </div>
    <div className="form-group">
      <label htmlFor="new-password">{t.NewPassword}</label>
      <input type="password" id="new-password" name="new-password" />
      <RemoveRedEyeOutlinedIcon  sx={{
         position:"absolute",
                         bottom:20,
                         right:10,
                         color:'#343A4080',


      }}/>
      <span className="visibility-toggle"></span>
    </div>
    <div className="form-group">
      <label htmlFor="confirm-password">{t.Confirmnewpassword}</label>
      <input type="password" id="confirm-password" name="confirm-password" /> 
      <VisibilityOffOutlinedIcon sx={{
         position:"absolute",
                         bottom:20,
                         right:10,
                         color:'#343A4080',
      }}/>
      <span className="visibility-toggle"></span>
    </div>
    <button className="saving" type="submit">{t.Save}</button>
  </form>
</div>









        
     </> 
      </div>
      
      )};
      export default newpass  ;
      