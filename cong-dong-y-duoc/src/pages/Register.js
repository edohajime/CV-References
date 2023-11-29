import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form method="post" action="/register">
      <div>
        <div className="loginview" id="loginview">
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th colSpan={2}>ĐĂNG KÝ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="lc">Họ và tên</td>
                <td>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    id="name"
                    required=""
                  />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="lc">Tên người dùng</td>
                <td>
                  <input
                    className="form-input"
                    type="text"
                    name="email"
                    id="email"
                    required=""
                  />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="lc">Mật khẩu</td>
                <td>
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    id="password"
                    required=""
                  />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="lc">Xác nhận mật khẩu</td>
                <td>
                  <input
                    className="form-input"
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    required=""
                  />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="lc">
                  <input type="checkbox" id="checkSave" />
                </td>
                <td>
                  <label htmlFor="checkSave">
                    Lưu mật khẩu?
                  </label>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} align="center">
                  <Link to="/login" className="btn btn-secondary">
                    Đăng nhập
                  </Link>
                  &nbsp;
                  <button type="submit" className="btn btn-primary">
                    Đăng ký
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} align="right">
                  <a href="#">Vietnamese</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};
export default Register;
