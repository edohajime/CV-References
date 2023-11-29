package jsoft.ads.article.category;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import jsoft.ConnectionPool;
import jsoft.objects.CategoryObject;


public class CategoryModel {

	private Category c;
	
	public CategoryModel(ConnectionPool cp) {
		this.c = new CategoryImpl(cp);
		
	}
	protected void finalize() throws Throwable{
		this.c = null;
	}
	public ConnectionPool getCP() {
		return this.c.getCP();
	}
	
	public void  releaseConnection() {
		this.c.releaseConnection();
	}
	//-------------------------------------------------
	public boolean addCategory(CategoryObject item) {
		return this.c.addCategory(item);
	}
	public boolean editCategory(CategoryObject item) {
		return this.c.editCategory(item);
	}
	public boolean delCategory(CategoryObject item) {
		return this.c.delCategory(item);
	}
	//-------------------------------------------------
	public CategoryObject getCategoryObject(short id) {
		CategoryObject item = null;
		ResultSet rs = this.c.getCategory(id);
		if(rs!=null) {
			try {
				if(rs.next()) {
					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
					item = new CategoryObject();
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					item.setSection_name(rs.getString("section_name"));
					item.setSection_id(rs.getShort("section_id"));
					item.setCategory_section_id(rs.getInt("category_section_id"));
					item.setCategory_notes(rs.getString("category_notes"));
					item.setCategory_created_date(rs.getString("category_created_date"));
					item.setCategory_manager_id(rs.getInt("category_manager_id"));
					item.setCategory_last_modified(rs.getString("category_last_modified"));
					item.setCategory_created_author_id(rs.getInt("category_created_author_id"));
					item.setCategory_name_en(rs.getString("category_name_en"));
					item.setCategory_image(rs.getString("category_image"));
					
					
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}
	
//	public UserObject getUserObject(String username, String userpass) {
//		UserObject item = null;
//		ResultSet rs = this.u.getUser(username, userpass);
//		if(rs!=null) {
//			try {
//				if(rs.next()) {
//					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
//					item = new UserObject();
//					item.setUser_id(rs.getInt("user_id"));
//					item.setUser_name(rs.getString("user_name"));
//					item.setUser_fullname(rs.getString("user_fullname"));
//					item.setUser_created_date(rs.getString("user_created_date"));
//					item.setUser_permission(rs.getByte("user_permission"));
//					item.setUser_email(rs.getString("user_email"));
//					item.setUser_address(rs.getString("user_address"));
//					item.setUser_homephone(rs.getString("user_homephone"));
//					item.setUser_officephone(rs.getString("user_officephone"));
//					item.setUser_mobilephone(rs.getString("user_mobilephone"));
//				}
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//		return item;
//	}
	
	public ArrayList <CategoryObject> getCategoryObjects(CategoryObject similar, CategorySort cs, short page, byte total) {
		
		ArrayList<CategoryObject> items = new ArrayList<>();
		CategoryObject item = null;
		
		int at = (page -1)*total;
		
		ResultSet rs = this.c.getCategories(similar,cs, at, total);
		if(rs!=null) {
			try {
				while(rs.next()) {
					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
					item = new CategoryObject();
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					item.setSection_name(rs.getString("section_name"));
					item.setCategory_notes(rs.getString("category_notes")+"###"+rs.getString("category_name"));
					item.setCategory_created_date(rs.getString("category_created_date"));
					item.setCategory_created_author_id(rs.getInt("category_created_author_id"));
					
					
					//Thêm vào danh sách
					items.add(item);//danh sách thêm đối tượng
				}
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}
	//-------------------------------------------------
}
