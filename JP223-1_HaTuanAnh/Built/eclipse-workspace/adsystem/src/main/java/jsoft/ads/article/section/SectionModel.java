package jsoft.ads.article.section;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import jsoft.ConnectionPool;
import jsoft.objects.SectionObject;

public class SectionModel {
private Section s;
	
	public SectionModel(ConnectionPool cp) {
		this.s = new SectionImpl(cp);
		
	}
	protected void finalize() throws Throwable{
		this.s = null;
	}
	public ConnectionPool getCP() {
		return this.s.getCP();
	}
	
	public void  releaseConnection() {
		this.s.releaseConnection();
	}
	//-------------------------------------------------
	public boolean addSection(SectionObject item) {
		return this.s.addSection(item);
	}
	public boolean editSection(SectionObject item) {
		return this.s.editSection(item);
	}
	public boolean delSection(SectionObject item) {
		return this.s.delSection(item);
	}
	//-------------------------------------------------
	public SectionObject getSectionObject(short id) {
		SectionObject item = null;
		ResultSet rs = this.s.getSection(id);
		if(rs!=null) {
			try {
				if(rs.next()) {
					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
					item = new SectionObject();
					item.setSection_id(rs.getShort("section_id"));
					item.setSection_name(rs.getString("section_name"));
					item.setSection_notes(rs.getString("section_notes")+"###"+rs.getString("user_name"));
					item.setSection_created_date(rs.getString("section_created_date"));
					item.setSection_manager_id(rs.getInt("section_manager_id"));
					item.setSection_last_modified(rs.getString("section_last_modified"));
					item.setSection_created_author_id(rs.getInt("section_created_author_id"));
					item.setSection_name_en(rs.getString("section_name_en"));
					item.setSection_language(rs.getByte("section_language"));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}
	
//	public SectionObject getSectionObject(String username, String userpass) {
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
	
	public ArrayList <SectionObject> getSectionObjects(SectionObject similar,SectionSort ss, short page, byte total) {
		
		ArrayList<SectionObject> items = new ArrayList<>();
		SectionObject item = null;
		
		int at = (page -1)*total;
		
		ResultSet rs = this.s.getSections(similar,ss, at, total);
		if(rs!=null) {
			try {
				while(rs.next()) {
					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
					item = new SectionObject();
					item.setSection_id(rs.getShort("section_id"));
					item.setSection_name(rs.getString("section_name"));
					item.setSection_notes(rs.getString("section_notes"));
					item.setSection_created_date(rs.getString("section_created_date"));
					item.setSection_manager_id(rs.getInt("section_manager_id"));
					item.setSection_last_modified(rs.getString("section_last_modified"));
					item.setSection_created_author_id(rs.getInt("section_created_author_id"));
					item.setSection_name_en(rs.getString("section_name_en"));
					item.setSection_language(rs.getByte("section_language"));
					
					//Thêm vào danh sách
					items.add(item);//danh sách thêm đối tượng
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}
	//-------------------------------------------------
}
