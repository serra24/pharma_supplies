import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLang } from "../../context/LanguageContext";
import SearchIcon from '@mui/icons-material/Search';

const Show = () => {
  const { t,dir } = useLang();

  return (
    <div>
      <>
        <BreadCrumb title="عروض الفاكسات" />
        {/* Filters Section */}
        <div className="filters position-relative">
          <div className="search-box  ">
            <input   type="text" placeholder={t.search}  />
            <SearchIcon className="search-iconn" sx={{
              position:"absolute",
                        //  bottom:10,
                        top:10,
              
                           [dir === 'rtl' ? 'right' : 'left']: 5,
                           [dir === 'ltr' ? 'right' : 'left']: 5,
                         color:'#343A4080',
                        
            }}/>
            
          </div>
          <div className="datee">
            <div className="f-t">
              <label htmlFor="" id="date">
                {" "}
                {t.Fromdate}{" "}
              </label>
              <input type="date" id="date" placeholder=":من تاريخ" />
            </div>
            <div className="f-t">
              <label htmlFor="" id="date">
                {" "}
                {t.todate}{" "}
              </label>
              <input type="date" id="date" placeholder=":الي تاريخ" />
            </div>
          </div>
        </div>

        <div  className=" section-title  col-lg-12 col-md-10 col-sm-6  flex: 1 1 0%; ">
          {/* Table */}
          <table className="table-container">
            <thead>
              <tr>
                <th>{t.code} </th>
                <th>{t.Date}</th>
                <th> {t.itemName} </th>
                <th> {t.procedures}</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat rows as needed */}
              <tr>
                <td>3718</td>
                <td>2 - 8 - 2025</td>
                <td>عرض فاكس للأدوية الاساسية</td>
                <td className="actions">
                  <a href="/Details" className="detals">
                    <i class="fa-solid fa-eye"></i> {t.details}
                  </a>
                  <a href="/Edit" className="edit">
                    <i class=" con fa-solid fa-pen-to-square"></i> {t.edite}{" "}
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <td>3781</td>
                <td>2 - 8 - 2025</td>
                <td>عرض فاکس للأدوية الأساسية</td>
                <td className="actions">
                  <a href="/Details" className="detals">
                    <i class="fa-solid fa-eye"></i> {t.details}
                  </a>
                  <a href="/Edit" className="edit">
                    <i class="fa-solid fa-pen-to-square"></i> {t.edite}{" "}
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <td>3718</td>
                <td>2 - 8 - 2025</td>
                <td>عرض فاکس للأدوية الأساسية</td>
                <td className="actions">
                  <a href="/Details" className="detals">
                    <i class="fa-solid fa-eye"></i> {t.details}
                  </a>
                  <a href="/Edit" className="edit">
                    <i class="fa-solid fa-pen-to-square"></i> {t.edite}{" "}
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <td>3718</td>
                <td>2 - 8 - 2025</td>
                <td>عرض فاکس للأدوية الأساسية</td>
                <td className="actions">
                  <a href="/Details" className="detals">
                    <i class="fa-solid fa-eye"></i> {t.details}
                  </a>
                  <a href="/Edit" className="edit">
                    <i class="fa-solid fa-pen-to-square"></i> {t.edite}{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td>3718</td>
                <td>2 - 8 - 2025</td>
                <td>عرض فاکس للأدوية الأساسية</td>
                <td className="actions">
                  <a href="/Details" className="detals">
                    <i class="fa-solid fa-eye"></i> {t.details}
                  </a>
                  <a href="/Edit" className="edit">
                    <i class="fa-solid fa-pen-to-square"></i> {t.edite}{" "}
                  </a>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};
export default Show;
