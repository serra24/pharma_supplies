
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const newpass = () => {
  

  return (
    <div>
        <>
        <BreadCrumb title=" تغيير كلمة المرور" />
        <div className="password-change-form col-lg-6 col-md-4 col-sm-2">
  <h2>
    <i class="fa-solid fa-lock"></i>تغيير كلمة المرور 
  </h2>
  <form>
    <div className="form-group">
      <label htmlFor="current-password">  كلمة المرور الحاليه</label>
      <input type="password" id="current-password" name="current-password"  /><span className="icon"><i class="fa-solid fa-eye"></i></span>
      {/* <span className="visibility-toggle"></span> */}
    </div>
    <div className="form-group">
      <label htmlFor="new-password">كلمة المرور الجديده</label>
      <input type="password" id="new-password" name="new-password" /><span className="icon"><i class="fa-solid fa-eye"></i></span>
      <span className="visibility-toggle"></span>
    </div>
    <div className="form-group">
      <label htmlFor="confirm-password">تأكيد كلمة المرور الجديده</label>
      <input type="password" id="confirm-password" name="confirm-password" /> <span className="icon"><i class="fa-solid fa-eye-slash"></i> </span>
      <span className="visibility-toggle"></span>
    </div>
    <button className="saving" type="submit">حفظ التعديلات</button>
  </form>
</div>









        
     </> 
      </div>
      
      )};
      export default newpass  ;
      