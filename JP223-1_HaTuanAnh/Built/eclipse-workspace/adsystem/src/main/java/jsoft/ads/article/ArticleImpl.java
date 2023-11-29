package jsoft.ads.article;


import java.sql.*;

import java.sql.SQLException;

import jsoft.ConnectionPool;
import jsoft.ads.article.category.CategoryImpl;

import jsoft.objects.ArticleObject;



public class ArticleImpl extends CategoryImpl implements Article {

	public ArticleImpl(ConnectionPool cp) {
		super("Article", cp);
	}

	public boolean addArticle(ArticleObject item) {
		// TODO Auto-generated method stub
		if(this.isExisting(item)) {
			return false;
		}
		String sql="INSERT INTO tbluser(";
		sql+="article_title,article_summary,article_content,";
		sql+="article_created_date, article_last_modified,article_image, ";
		sql+="article_category_id, article_section_id, article_visited, ";
		sql+="article_author_name, article_enable, article_url_link";
		sql+="article_tag, article_title_en,article_summary_en, ";
		sql+="article_content_en, article_tag_en,article_fee, ";
		sql+="article_isfee, article_delete, article_deleted_date, ";
		sql+="article_restored_date,article_modified_author_name, article_author_permission, ";
		sql+="article_source, article_language, article_focus, ";
		sql+="article_type, article_forhome) ";
		
		sql+="VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		//Biên dịch 
		try {
			PreparedStatement pre=this.con.prepareStatement(sql);
			pre.setString(1, item.getArticle_title());
			pre.setString(2, item.getArticle_summary());
			pre.setString(3, item.getArticle_content());
			pre.setString(4, item.getArticle_created_date());
			pre.setString(5, item.getArticle_last_modified());
			pre.setString(6, item.getArticle_image());
			pre.setShort(7, item.getArticle_category_id()); 
			pre.setShort(8, item.getArticle_section_id());
			pre.setInt(9, item.getArticle_visited());
			pre.setString(10, item.getArticle_author_name());
			pre.setBoolean(11, item.isArticle_enable());
			pre.setString(12, item.getArticle_url_link());
			pre.setString(13, item.getArticle_tag());
			pre.setString(14, item.getArticle_title_en());
			pre.setString(15, item.getArticle_summary_en());
			pre.setString(16, item.getArticle_content_en());
			pre.setString(17, item.getArticle_tag_en());
			pre.setInt(18, item.getArticle_fee());
			pre.setBoolean(19, item.isArticle_isfee());
			pre.setBoolean(20, item.isArticle_delete());
			pre.setString(21, item.getArticle_deleted_date());
			pre.setString(22, item.getArticle_restored_date());
			pre.setString(23, item.getArticle_modified_author_name());
			pre.setByte(24, item.getArticle_author_permission());
			pre.setString(25, item.getArticle_source());
			pre.setByte(26, item.getArticle_language());
			pre.setBoolean(27, item.isArticle_focus());
			pre.setByte(28, item.getArticle_type());
			pre.setBoolean(29, item.isArticle_forhome());
			
			return this.add(pre);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return false;
	}

	//Ràng buộc duy nhất trong mã nguồn
			/**
			 * phương thức kiểm tra sự tồn tại của tài khoản thêm mới
			 * @param item
			 * @return
			 */
	private boolean isExisting(ArticleObject item) {
		boolean flag = false;
		String sql = "SELECT article_id FROM tblarticle WHERE user_title='"+item.getArticle_title()+"' ";
		ResultSet rs = this.gets(sql);
		if(rs!=null) {
			try {
				if(rs.next()) {
					flag = true;
				}
				rs.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		
		return flag;
	}
	@Override
	public boolean editArticle(ArticleObject item) {
		// TODO Auto-generated method stub
		String sql="UPDATE tblarticle SET ";
		sql+="article_title=?,article_summary=?,article_content=?,";
		sql+="article_created_date=?, article_last_modified=?,article_image=?, ";
		sql+="article_category_id=?, article_section_id=?, article_visited=?, ";
		sql+="article_author_name=?, article_enable=?, article_url_link=?";
		sql+="article_tag=?, article_title_en=?,article_summary_en=?, ";
		sql+="article_content_en=?, article_tag_en=?,article_fee=?, ";
		sql+="article_isfee=?, article_delete=?, article_deleted_date=?, ";
		sql+="article_restored_date=?, article_modified_author_name=?, article_author_permission=?, ";
		sql+="article_source=?, article_language=?, article_focus=?, ";
		sql+="article_type=?, article_forhome=? ";
		
		sql+="WHERE article_id=?";
		//Biên dịch 
		try {
			PreparedStatement pre=this.con.prepareStatement(sql);
			pre.setString(1, item.getArticle_title());
			pre.setString(2, item.getArticle_summary());
			pre.setString(3, item.getArticle_content());
			pre.setString(4, item.getArticle_created_date());
			pre.setString(5, item.getArticle_last_modified());
			pre.setString(6, item.getArticle_image());
			pre.setShort(7, item.getArticle_category_id()); 
			pre.setShort(8, item.getArticle_section_id());
			pre.setInt(9, item.getArticle_visited());
			pre.setString(10, item.getArticle_author_name());
			pre.setBoolean(11, item.isArticle_enable());
			pre.setString(12, item.getArticle_url_link());
			pre.setString(13, item.getArticle_tag());
			pre.setString(14, item.getArticle_title_en());
			pre.setString(15, item.getArticle_summary_en());
			pre.setString(16, item.getArticle_content_en());
			pre.setString(17, item.getArticle_tag_en());
			pre.setInt(18, item.getArticle_fee());
			pre.setBoolean(19, item.isArticle_isfee());
			pre.setBoolean(20, item.isArticle_delete());
			pre.setString(21, item.getArticle_deleted_date());
			pre.setString(22, item.getArticle_restored_date());
			pre.setString(23, item.getArticle_modified_author_name());
			pre.setByte(24, item.getArticle_author_permission());
			pre.setString(25, item.getArticle_source());
			pre.setByte(26, item.getArticle_language());
			pre.setBoolean(27, item.isArticle_focus());
			pre.setByte(28, item.getArticle_type());
			pre.setBoolean(29, item.isArticle_forhome());
			
			return this.edit(pre);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return false;
	}

	@Override
	public boolean delArticle(ArticleObject item) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public ResultSet getArticle(int id) {
		// TODO Auto-generated method stub
		String sql = "SELECT * FROM tblarticle a ";
		sql+="LEFT JOIN tblcategory c ON a.article_category_id = c. category_id ";
		sql+="LEFT JOIN tblsection s ON c.category_section_id=s.section_id ";;
		sql+="WHERE a.article_id=?";
		return this.get(sql, id);
		
	}

	@Override
	public ResultSet getArticles(ArticleObject similar, ArticleSort as, int at, byte total) {
		// TODO Auto-generated method stub
		String sql = "SELECT * FROM tblarticle a ";
		sql+="LEFT JOIN tblcategory c ON a.article_category_id = c. category_id ";
		sql+="LEFT JOIN tblsection s ON c.category_section_id=s.section_id ";;
		sql+="";
		switch(as) {
		case ID:
			sql+="ORDER BY article_id DESC ";
			break;
		case TITLE:
			sql+="ORDER BY article_title ASC ";
			break;
		case CATEGORY:
			sql+="ORDER BY article_category_id DESC ";
			break;
		case SECTION:
			sql+="ORDER BY article_section_id DESC ";
			break;
		case AUTHOR:
			sql+="ORDER BY article_author_name ASC ";
			break;
		case MANAGER:
			sql+="ORDER BY article_manager_id DESC ";
			break;
		case VISITED:
			sql+="ORDER BY article_visited DESC ";
			break;
		}
		sql+="LIMIT "+at+", "+total;
		return this.gets(sql);
	}

}
