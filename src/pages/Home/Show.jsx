import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Show = () => {
  

  return (
    <div>
        <>
        <BreadCrumb title="عروض الفاكسات" />
        {/* Filters Section */}
  <div className="filters">
     <div className="search-box">
      <input type="text" placeholder=" يمكنك البحث برقم العرض أو الوصف." /><i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className="datee">
        <input type="date" id="date" defaultValue="2025-08-04" placeholder="من تاريخ" />

     <input type="date" id="date" defaultValue="2025-08-04" placeholder="الي تاريخ" />
    </div>
     

   
  </div>
        
        <div className="table-container">
  
  {/* Table */}
  <table>
    <thead>
      <tr>
        <th>رقم العرض</th>
        <th>التاريخ</th>
        <th>الوصف</th>
        <th>إجراءات</th>
      </tr>
    </thead>
    <tbody>
      {/* Repeat rows as needed */}
      <tr>
        <td>3718</td>
        <td>2 - 8 - 2025</td>
        <td>عرض فاکس للأدوية الأساسية</td>
        <td className="actions">
          <a href="/Details" className="detals"><i class="fa-solid fa-eye"></i>  تفاصيل</a>
<a href="/Edit"  className="edit"><i class="fa-solid fa-pen-to-square"></i>  تعديل </a>        </td>
      </tr>
      <tr>
        <td>3718</td>
        <td>2 - 8 - 2025</td>
        <td>عرض فاکس للأدوية الأساسية</td>
        <td className="actions">
          <a href="/Details" className="detals"><i class="fa-solid fa-eye"></i>  تفاصيل</a>
<a href="/Edit"  className="edit"><i class="fa-solid fa-pen-to-square"></i>  تعديل </a>        </td>
      </tr>
      <tr>
        <td>3718</td>
        <td>2 - 8 - 2025</td>
        <td>عرض فاکس للأدوية الأساسية</td>
        <td className="actions">
      <a href="/Details" className="detals"><i class="fa-solid fa-eye"></i>  تفاصيل</a>     
<a href="/Edit"  className="edit"><i class="fa-solid fa-pen-to-square"></i>  تعديل </a>        </td>
      </tr>
      <tr>
        <td>3718</td>
        <td>2 - 8 - 2025</td>
        <td>عرض فاکس للأدوية الأساسية</td>
        <td className="actions">
          <a href="/Details" className="detals"><i class="fa-solid fa-eye"></i>  تفاصيل</a>
          <a href="/Edit"  className="edit"><i class="fa-solid fa-pen-to-square"></i>  تعديل </a>
        </td>
      </tr>
      <tr>
        <td>3718</td>
        <td>2 - 8 - 2025</td>
        <td>عرض فاکس للأدوية الأساسية</td>
        <td className="actions">
          <a href="/Details" className="detals"><i class="fa-solid fa-eye"></i>  تفاصيل</a>
         <a href="/Edit"  className="edit"><i class="fa-solid fa-pen-to-square"></i>  تعديل </a>
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>




      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     </> 
      </div>
      
      )};
      export default Show ;
      
      