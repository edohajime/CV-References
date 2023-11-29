package jsoft.ads.article.category;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import jsoft.objects.CategoryObject;
import jsoft.ads.article.section.*;
import jsoft.*;

public class CategoryImpl extends SectionImpl implements Category {

	public CategoryImpl(ConnectionPool cp) {
		super("Category", cp);
	}
	public CategoryImpl(String objectName, ConnectionPool cp) {
		super(objectName, cp);
	}
	
	@Override
	public boolean addCategory(CategoryObject item) {
		// TODO Auto-generated method stub
		String sql ="INSERT INTO tblcategory(";
		sql+="category_name, category_section_id, category_notes, ";
		sql+="category_created_date, category_manager_id, category_enable, ";
		sql+="category_delete, category_last_modified, category_created_author_id, ";
		sql+="category_name_en,category_image, category_language) ";
		sql+="VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			PreparedStatement pre = this.con.prepareStatement(sql);
			pre.setString(1, item.getCategory_name());
			pre.setInt(2, item.getCategory_section_id());
			pre.setString(3, item.getCategory_notes());
			pre.setString(4,  item.getCategory_created_date());
			pre.setInt(5,item.getCategory_manager_id());
			pre.setBoolean(6, item.isCategory_enable());
			pre.setBoolean(7,  item.isCategory_delete());
			pre.setString(8, item.getCategory_last_modified());
			pre.setInt(9, item.getCategory_created_author_id());
			pre.setString(10, item.getCategory_name_en());
			pre.setString(11, item.getCategory_image());
			pre.setByte(12, item.getCategory_language());
			
			return this.add(pre);
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		return false;
	}

	@Override
	public boolean editCategory(CategoryObject item) {
		// TODO Auto-generated method stub
		String sql ="UPDATE tblcategory SET ";
		sql+="category_name=?, category_section_id=?, category_notes=?, ";
		sql+="category_created_date=?, category_manager_id=?, category_enable=?, ";
		sql+="category_delete=?, category_last_modified=?, category_created_author_id=?, ";
		sql+="category_name_en=?,category_image=?, category_language=? ";
		sql+="WHERE category_id=? ";
		try {
			PreparedStatement pre = this.con.prepareStatement(sql);
			pre.setString(1, item.getCategory_name());
			pre.setInt(2, item.getCategory_section_id());
			pre.setString(3, item.getCategory_notes());
			pre.setString(4,  item.getCategory_created_date());
			pre.setInt(5,item.getCategory_manager_id());
			pre.setBoolean(6, item.isCategory_enable());
			pre.setBoolean(7,  item.isCategory_delete());
			pre.setString(8, item.getCategory_last_modified());
			pre.setInt(9, item.getCategory_created_author_id());
			pre.setString(10, item.getCategory_name_en());
			pre.setString(11, item.getCategory_image());
			pre.setByte(12, item.getCategory_language());
			pre.setShort(13, item.getCategory_id());
			return this.add(pre);
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean delCategory(CategoryObject item) {
		// TODO Auto-generated method stub
		if(!this.isEmpty(item)) {
			return false;
		}
		try {
			String sql = "DELETE FROM tblcategory WHERE category_id=?";
		PreparedStatement pre = this.con.prepareStatement(sql);
		pre.setShort(1,  item.getCategory_id());
		return this.del(pre);
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return false;
	}

	private boolean isEmpty(CategoryObject item) {
		boolean flag = true;
		String sql1 ="SELECT article_id FROM tblarticle WHERE article_section_id=?";
		
		
		ResultSet rs1 = this.get(sql1, item.getCategory_id());
		
		
		if(rs1!=null) {
			try {
				if(rs1.next()) {
					flag = false;
				}
				rs1.close();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return flag;
	}
	@Override
	public ResultSet getCategory(short id) {
		// TODO Auto-generated method stub
		String sql ="SELECT * FROM tblcategory ";
		sql+="LEFT JOIN tblsection ON category_section_id=section_id ";
		sql+="WHERE category_id=?";
		
		return this.get(sql, id);
	}

	@Override
//	public ResultSet getCategories(CategoryObject similar, int at, byte total) {
//		String sql = "SELECT * FROM tblcategory ";
//		sql+="";
//		sql+="ORDER BY category_name DESC ";
//		sql+="LIMIT "+at+", "+total;
//		return this.gets(sql);
//		
//	}
	public ResultSet getCategories(CategoryObject similar,CategorySort cs, int at, byte total) {
		// TODO Auto-generated method stub
		String sql = "SELECT * FROM tblcategory c ";
		sql+="LEFT JOIN tblsection s ON c.category_section_id =s. section_id ";
		sql+="LEFT JOIN tbluser u ON c.category_created_author_id=u.user_id ";
		sql+="";
		switch(cs) {
		case ID:
			sql+="ORDER BY category_ID DESC ";
			break;
		case NAME:
			sql+="ORDER BY category_name ASC ";
			break;
		case SECTION:
			sql+="ORDER BY category_section_id DESC ";
			break;
		case DATE:
			sql+="ORDER BY category_created_date ASC ";
			break;
		case MANAGER:
			sql+="ORDER BY category_manager_id DESC ";
			break;
		
		}
		
		sql+="LIMIT "+at+", "+total;
		return this.gets(sql);
	}
	public static void main(String[] args) {
		//Tạo đối tượng thực thi chức năng
		Category c = new CategoryImpl(null);
		
		//Tạo đối tượng lưu trữ thông tin mới 
		CategoryObject nCategory = new CategoryObject();
		nCategory.setCategory_id((short)52);
		nCategory.setCategory_name("San pham");
		nCategory.setCategory_created_author_id(20);
		nCategory.setCategory_created_date("16/10/2022");
		nCategory.setCategory_manager_id(23);
		
		
		boolean result = c.editCategory(nCategory);
		//Trả về kết nối
		c.releaseConnection();
		if(!result) {
			System.out.println("--------------KHÔNG THÀNH CÔNG-----------------");
			
		}
		//Lấy danh sách chuyên mục và hiển thị
		ResultSet rs = c.getCategories(nCategory, CategorySort.ID, 0, (byte)20);
		String row;
		if(rs!=null) {
			try {
				while(rs.next()) {
					row ="ID: "+rs.getShort("category_id");
					row+="\tNAME: "+rs.getString("category_name");
					row+="\tSECTION: "+rs.getInt("category_section_id");
					row+="\tDATE: "+rs.getString("category_created_date");
					row+="\tMANAGER: "+rs.getInt("category_manager_id");
					
					System.out.println(row);
				}
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		
		
	}
	

}
