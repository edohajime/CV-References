package jsoft.gui.product.pc;

import java.sql.*;
import java.util.*;

import jsoft.*;
import jsoft.objects.*;

public class PCModel {
	private PCImpl pc;

	/**
	 * @param pc
	 */
	public PCModel(ConnectionPool cp) {
		this.pc = new PCImpl(cp);
	}
	
	protected void finalize() throws Throwable {
		this.pc = null;
	}
	
	public ConnectionPool getCP() {
		return this.pc.getCP();
	}
	
	public void releaseConnection() {
		this.pc.releaseConnection();
	}
	
	public PCObject getPCObject(int id) {
		PCObject item = new PCObject();
		
		ResultSet rs = this.pc.getPC(id);
		
		try {
			if (rs.next()) {
				item.setPc_id(rs.getInt("pc_id"));
				item.setPc_name(rs.getString("pc_name"));
				item.setPc_notes(rs.getString("pc_notes"));
				item.setPc_delete(rs.getBoolean("pc_delete"));
				item.setPc_enable(rs.getBoolean("pc_enable"));
				item.setPc_image(rs.getString("pc_image"));
				item.setPc_created_author_id(rs.getInt("pc_created_author_id"));

				item.setPc_pg_id(rs.getInt("pc_pg_id"));
				item.setPc_ps_id(rs.getShort("pc_ps_id"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return item;
	}
	
	public ArrayList<PCObject> getPCObjects(PCObject similar, PCSort pcs, short page, byte total){
		ArrayList<PCObject> items = new ArrayList<>();
		PCObject item;
		
		int at = (page - 1) * total;
		
		ResultSet rs = this.pc.getPCs(similar, pcs, at, total);
		
		try {
			while(rs.next()) {
				item = new PCObject();
				item.setPc_id(rs.getInt("pc_id"));
				item.setPc_name(rs.getString("pc_name"));
				item.setPc_notes(rs.getString("pc_notes"));
				item.setPc_delete(rs.getBoolean("pc_delete"));
				item.setPc_enable(rs.getBoolean("pc_enable"));
				item.setPc_image(rs.getString("pc_image"));
				item.setPc_created_author_id(rs.getInt("pc_created_author_id"));

				item.setPc_pg_id(rs.getInt("pc_pg_id"));
				item.setPc_ps_id(rs.getShort("pc_ps_id"));
			}
				
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		return items;
	}
}
