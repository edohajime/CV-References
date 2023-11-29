package jsoft.gui.product;

import java.sql.*;

import jsoft.*;
import jsoft.gui.basic.*;
import jsoft.objects.*;

public class ProductImpl extends BasicImpl implements Product {

	public ProductImpl(ConnectionPool cp) {
		super("Product", cp);
		// TODO Auto-generated constructor stub
	}

	@Override
	public ResultSet getProduct(int id) {

		String sql = "SELECT * FROM tblproduct p ";
		sql += "LEFT JOIN tblpc c ON p.product_pc_id=c.pc_id ";
		sql += "LEFT JOIN tblpg g ON c.pc_pg_id=g.pg_id ";
		sql += "LEFT JOIN tblps s ON g.pg_ps_id=s.ps_id ";
		
		return this.get(sql, id);
	}

	@Override
	public ResultSet getProducts(ProductObject similar, ProductSort ps, int at, byte total) {

		String sql = "SELECT * FROM tblproduct p ";
		sql += "LEFT JOIN tblpc c ON p.product_pc_id=c.pc_id ";
		sql += "LEFT JOIN tblpg g ON c.pc_pg_id=g.pg_id ";
		sql += "LEFT JOIN tblps s ON g.pg_ps_id=s.ps_id ";

		switch (ps) {
		case ID:
			sql += "ORDER BY product_id ASC";
			break;
		case NAME:
			sql += "ORDER BY product_name ASC";
			break;
		case PRICE:
			sql += "ORDER BY product_price DESC";
			break;
		case VISITED:
			sql += "ORDER BY product_visited DESC";
			break;
		default:
			sql += "ORDER BY product_id ASC";
			break;
		}

		sql += " LIMIT " + at + ", " + total;

		return this.gets(sql);
	}
	
	public static void main(String[] args) {
		// Khởi tạo bộ kết nối
		ConnectionPool cp = new ConnectionPoolImpl();
		
		Product p = new ProductImpl(cp);
		
		ResultSet rs = p.getProducts(null, ProductSort.ID, 0, (byte) 20);
//		ResultSet rs = p.getProduct(1500);
		String row = "";
		try {
			while(rs.next()) {
				row = "ID: "+rs.getString("product_id");
				row += "-- NAME: "+rs.getString("product_name");
				row += "-- PRICE: "+rs.getString("product_price");
				row += "-- VISITED: "+rs.getString("product_visited");
				System.out.println(row);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
