package jsoft.gui.product.pg;

import java.sql.*;
import java.util.*;

import jsoft.*;
import jsoft.objects.*;

public class PGModel {
	private PGImpl pc;

	/**
	 * @param pc
	 */
	public PGModel(ConnectionPool cp) {
		this.pc = new PGImpl(cp);
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
	
	public PGObject getPGObject(int id) {
		PGObject item = new PGObject();
		
		ResultSet rs = this.pc.getPG(id);
		
		try {
			if (rs.next()) {
				item.setPg_id(rs.getShort("pg_id"));
				item.setPg_name(rs.getString("pc_name"));
				item.setPg_notes(rs.getString("pc_notes"));
				item.setPg_created_date(rs.getString("pg_created_date"));
				item.setPg_delete(rs.getBoolean("pc_delete"));
				item.setPg_enable(rs.getBoolean("pc_enable"));
				item.setPg_created_author_id(rs.getInt("pc_created_author_id"));

				item.setPg_ps_id(rs.getShort("pc_ps_id"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return item;
	}
	
	public ArrayList<PGObject> getPGObjects(PGObject similar, PGSort pcs, short page, byte total){
		ArrayList<PGObject> items = new ArrayList<>();
		PGObject item;
		
		int at = (page - 1) * total;
		
		ResultSet rs = this.pc.getPGs(similar, pcs, at, total);
		
		try {
			while(rs.next()) {
				item = new PGObject();
				item.setPg_id(rs.getShort("pg_id"));
				item.setPg_name(rs.getString("pc_name"));
				item.setPg_notes(rs.getString("pc_notes"));
				item.setPg_created_date(rs.getString("pg_created_date"));
				item.setPg_delete(rs.getBoolean("pc_delete"));
				item.setPg_enable(rs.getBoolean("pc_enable"));
				item.setPg_created_author_id(rs.getInt("pc_created_author_id"));

				item.setPg_ps_id(rs.getShort("pc_ps_id"));
			}
				
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		return items;
	}
}
