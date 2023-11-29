package jsoft;

import java.sql.Connection;
import java.sql.*;
import java.util.*;

public class ConnectionPoolImpl implements ConnectionPool {
	// Tại sao lại không sử dụng vector mà lại sử dụng stack khi khởi tạo đối tượng
	// lưu trữ kết nối trong connection pool?
	// Bởi vì Vector thực hiện chủ yếu theo cơ chế đồng bộ tức là FiFO - First In First Out
	// nên là khi thực thi xong luồng thứ nhất thì nó mới thực thi đến các luồng
	// tiếp theo => dẫn đến thời gian thực thi các câu lệnh truy vấn chậm không đạt
	// hiệu suất cao
	// Ngược lại, Stack thực hiện theo cơ chế LIFO - Last In First Out nên là nó sẽ
	// thực hiện đồng thời tất cả các luồng cùng một thời điểm

	// Tài khoản làm việc với CSDL
	private String username;
	private String userpass;

	// Trình điều khiển của mysql
	private String driver;

	// Đường dẫn chạy mysql
	private String url;

	// Khai báo đối tượng kết nối
	private Stack<Connection> pool;

	public ConnectionPoolImpl() {
		// Xác định tài khoản làm việc
		this.username = "root";
		this.userpass = "12345678";

		// Xác định trình điều khiển
		this.driver = "com.mysql.jdbc.Driver";

		// Xác định đường dẫn thực thi
		this.url = "jdbc:mysql://localhost:3306/jp223_data";

		// Khởi tạo đối tượng lưu trữ kết nối
		this.pool = new Stack<>();
		
		// Nạp trình điều khiển
		this.loadDriver();
	}
	
	
	private void loadDriver() {
		try {
			Class.forName(this.driver);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	

	@Override
	public Connection getConnection(String objectName) throws SQLException {
		// TODO Auto-generated method stub

		if (this.pool.isEmpty()) {
			// Khởi tạo kết nối mới
			System.out.println(objectName + " have created a new Connection.");

			return DriverManager.getConnection(this.url, this.username, this.userpass);
		} else {
			// Lấy kết nôi đã được lưu trữ
			System.out.println(objectName + " have popped the Connection.");
			return this.pool.pop();
		}
	}

	@Override
	public void releaseConnection(Connection con, String objectName) throws SQLException {
		// TODO Auto-generated method stub
		// Lưu trữ kết nối
		System.out.println(objectName + " have push the Connection.");
		this.pool.push(con);
	}
	
	protected void finalize() throws Throwable {
		this.url = null;
		this.username = null;
		this.userpass = null;
		this.driver = null;
		
		this.pool.clear();
		this.pool = null;
		
		System.gc(); 
		
		System.out.println("CP is closed!");
	}

}
