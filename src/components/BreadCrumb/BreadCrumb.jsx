const BreadCrumb = ({title}) => (
 <div className="content " style={{ width: "100 %" }}>
          {/* Header */}
          <div className="header d-flex justify-content-between align-items-center">
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                اللغة العربية{" "}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  اللغة الانجليزية
                </a>
              </div>
            </div>
            <div>
              
              <strong> {title} </strong>
            </div>
          </div>
        </div>
);
export default BreadCrumb;
