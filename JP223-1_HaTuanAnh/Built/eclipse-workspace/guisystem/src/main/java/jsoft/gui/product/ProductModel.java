package jsoft.gui.product;

import java.sql.*;
import java.util.ArrayList;

import jsoft.ConnectionPool;
import jsoft.ConnectionPoolImpl;
import jsoft.objects.ProductObject;

public class ProductModel {
	private ProductImpl p;

	public ProductModel(ConnectionPool cp) {
		this.p = new ProductImpl(cp);
	}

	protected void finalize() throws Throwable {
		this.p = null;
	}
	
	public ConnectionPool getCP() {
		return this.p.getCP();
	}
	
	public void releaseConnection() {
		this.p.releaseConnection();
	}

	// ---------------------------------------------
	public ProductObject getProductObject(int id) {
		ProductObject item;

		ResultSet rs = this.p.getProduct(id);

		try {
			if (rs.next()) {
				item = new ProductObject();
				item.setProduct_id(rs.getInt("product_id"));
				item.setProduct_name(rs.getString("product_name"));
				item.setProduct_image(rs.getString("product_image"));
				item.setProduct_price(rs.getInt("product_price"));
				item.setProduct_discount_price(rs.getInt("product_discount_price"));
				item.setProduct_enable(rs.getBoolean("product_enable"));
				item.setProduct_delete(rs.getBoolean("product_delete"));
				item.setProduct_visited(rs.getInt("product_visited"));
				item.setProduct_total(rs.getInt("product_total"));
				item.setProduct_manager_id(rs.getInt("product_manager_id"));
				item.setProduct_intro(rs.getString("product_intro"));
				item.setProduct_notes(rs.getString("product_notes"));
				item.setProduct_code(rs.getString("product_code"));
				item.setProduct_created_date(rs.getString("product_created_date"));
				item.setProduct_modified_date(rs.getString("product_modified_date"));
				item.setProduct_pc_id(rs.getInt("product_pc_id"));
				item.setProduct_pg_id(rs.getByte("product_pg_id"));
				item.setProduct_ps_id(rs.getByte("product_ps_id"));
				item.setProduct_is_detail(rs.getBoolean("product_is_detail"));
				item.setProduct_deleted_date(rs.getString("product_deleted_date"));
				item.setProduct_deleted_author(rs.getString("product_deleted_author"));
				item.setProduct_promotion_price(rs.getInt("product_promotion_price"));
				item.setProduct_sold(rs.getInt("product_sold"));
				item.setProduct_best_seller(rs.getBoolean("product_best_seller"));
				item.setProduct_promotion(rs.getBoolean("product_promotion"));
				item.setProduct_price_calc_description(rs.getByte("product_price_calc_description"));
				item.setProduct_size(rs.getString("product_size"));
				item.setProduct_name_en(rs.getString("product_name_en"));
				item.setProduct_customer_id(rs.getInt("product_customer_id"));
				item.setProduct_perspective_id(rs.getBoolean("product_perspective_id"));

				return item;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;
	}

	// ---------------------------------------------

	public ArrayList<ProductObject> getProductObjects(ProductObject similar, ProductSort ps, short page, byte total) {
		ArrayList<ProductObject> items = new ArrayList<>();
		ProductObject item;

		int at = (page - 1) * total;
		ResultSet rs = this.p.getProducts(similar, ps, at, total);

		try {
			while (rs.next()) {
				item = new ProductObject();
				item.setProduct_id(rs.getInt("product_id"));
				item.setProduct_name(rs.getString("product_name"));
				item.setProduct_image(rs.getString("product_image"));
				item.setProduct_price(rs.getInt("product_price"));
				item.setProduct_discount_price(rs.getInt("product_discount_price"));
				item.setProduct_enable(rs.getBoolean("product_enable"));
				item.setProduct_delete(rs.getBoolean("product_delete"));
				item.setProduct_visited(rs.getInt("product_visited"));
				item.setProduct_total(rs.getInt("product_total"));
				item.setProduct_manager_id(rs.getInt("product_manager_id"));
				item.setProduct_intro(rs.getString("product_intro"));
				item.setProduct_notes(rs.getString("product_notes"));
				item.setProduct_code(rs.getString("product_code"));
				item.setProduct_created_date(rs.getString("product_created_date"));
				item.setProduct_modified_date(rs.getString("product_modified_date"));
				item.setProduct_pc_id(rs.getInt("product_pc_id"));
				item.setProduct_pg_id(rs.getByte("product_pg_id"));
				item.setProduct_ps_id(rs.getByte("product_ps_id"));
				item.setProduct_is_detail(rs.getBoolean("product_is_detail"));
				item.setProduct_deleted_date(rs.getString("product_deleted_date"));
				item.setProduct_deleted_author(rs.getString("product_deleted_author"));
				item.setProduct_promotion_price(rs.getInt("product_promotion_price"));
				item.setProduct_sold(rs.getInt("product_sold"));
				item.setProduct_best_seller(rs.getBoolean("product_best_seller"));
				item.setProduct_promotion(rs.getBoolean("product_promotion"));
				item.setProduct_price_calc_description(rs.getByte("product_price_calc_description"));
				item.setProduct_size(rs.getString("product_size"));
				item.setProduct_name_en(rs.getString("product_name_en"));
				item.setProduct_customer_id(rs.getInt("product_customer_id"));
				item.setProduct_perspective_id(rs.getBoolean("product_perspective_id"));

				items.add(item);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return items;
	}

	public static void main(String[] args) {
		ConnectionPool cp = new ConnectionPoolImpl();

		ProductModel pm = new ProductModel(cp);

		ArrayList<ProductObject> items = pm.getProductObjects(null, ProductSort.VISITED, (short) 1, (byte) 20);
		for (ProductObject item : items) {
			String row = "ID: " + item.getProduct_id();
			row += "-- NAME: " + item.getProduct_name();
			row += "-- PRICE: " + item.getProduct_price();
			row += "-- VISITED: " + item.getProduct_visited();
			System.out.println(row);
		}

	}
}
