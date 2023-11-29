import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState({
    status: false,
    messages: "",
    user: {},
  });

  // Xử lý sự kiện submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http://localhost:8000/api/login`;
    const formData = new FormData(e.target);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(url, formData, config)
      .then((res) => {
        setMsg(res.data);

        setUser(res.data.user);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));

        console.log(res.data.user);
      })
      .catch((error) => {
        console.log("Error network", error);
      });
  };

  // Hiện thông báo
  const handleAlert = (status, msg) => {
    swal({
      title: msg,
      icon: status ? "success" : "warning",
    });
  };


  // Xử lý hiện thông báo
  useEffect(() => {
    console.log(msg.messages);
    if (msg.messages !== "") {
      handleAlert(msg.status, msg.messages);
      if (msg.status) {
        navigate("/");
      }
    }
  }, [msg]);

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      navigate("/");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <input type="hidden" name="_token" value={csrfToken} /> */}

        <div className="loginview" id="loginview">
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th colSpan={2}>ĐĂNG NHẬP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="lc">Email</td>
                <td>
                  <input
                    className="form-input"
                    type="text"
                    name="email"
                    id="email"
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
                  <label htmlFor="checkSave">Lưu mật khẩu?</label>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} align="center">
                  <a href="#">Quên mật khẩu?</a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a href="#">Trợ giúp!</a>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} align="center">
                  <Link to="/register" className="btn btn-secondary">
                    Đăng ký
                  </Link>
                  &nbsp;
                  <button type="submit" className="btn btn-primary">
                    Đăng nhập
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} align="right">
                  <a href="#">Tiếng Việt</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};

export default Login;
