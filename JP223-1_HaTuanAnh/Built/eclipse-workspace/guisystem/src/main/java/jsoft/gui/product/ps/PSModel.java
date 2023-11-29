package jsoft.gui.product.ps;

import java.sql.*;
import java.util.*;

import jsoft.*;
import jsoft.objects.*;

public class PSModel {
	private PSImpl ps;

	/**
	 * @param ps
	 */
	public PSModel(ConnectionPool cp) {
		this.ps = new PSImpl(cp);
	}
	
	protected void finalize() throws Throwable {
		this.ps = null;
	}
	
	public ConnectionPool getCP() {
		return this.ps.getCP();
	}
	
	public void releaseConnection() {
		this.ps.releaseConnection();
	}
	
	public PSObject getPSObject(int id) {
		PSObject item = new PSObject();
		
		ResultSet rs = this.ps.getPS(id);
		
		try {
			if (rs.next()) {
				item.setPs_id(rs.getShort("ps_id"));
				item.setPs_name(rs.getString("ps_name"));
				item.setPs_notes(rs.getString("ps_notes"));
				item.setPs_delete(rs.getBoolean("ps_delete"));
				item.setPs_enable(rs.getBoolean("ps_enable"));
				item.setPs_created_author_id(rs.getInt("ps_created_author_id"));
				item.setPs_created_date(rs.getString("ps_created_date"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return item;
	}
	
	public ArrayList<PSObject> getPSObjects(PSObject similar, PSSort pss, short page, byte total){
		ArrayList<PSObject> items = new ArrayList<>();
		PSObject item;
		
		int at = (page - 1) * total;
		
		ResultSet rs = this.ps.getPSs(similar, pss, at, total);
		
		try {
			while(rs.next()) {
				item = new PSObject();
				item.setPs_id(rs.getShort("ps_id"));
				item.setPs_name(rs.getString("ps_name"));
				item.setPs_notes(rs.getString("ps_notes"));
				item.setPs_delete(rs.getBoolean("ps_delete"));
				item.setPs_enable(rs.getBoolean("ps_enable"));
				item.setPs_created_author_id(rs.getInt("ps_created_author_id"));
				item.setPs_created_date(rs.getString("ps_created_date"));

			}
				
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		return items;
	}
}
