package jsoft.gui.product.ps;

import java.sql.ResultSet;

import jsoft.ConnectionPool;
import jsoft.gui.basic.*;
import jsoft.gui.product.ps.*;
import jsoft.objects.PSObject;

public class PSImpl  extends BasicImpl implements PS  {

	public PSImpl(ConnectionPool cp) {
		super("PS System", cp);
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public ResultSet getPS(int id) {
		String sql = "SELECT * FROM tblps WHERE ps_id=?";

		return this.get(sql, id);
	}


	@Override
	public ResultSet getPSs(PSObject similar, PSSort pss, int at, byte total) {
		String sql = "SELECT * FROM tblps s ";

		switch (pss) {
		case ID:
			sql += "ORDER BY ps_id DESC";
			break;
		case NAME:
			sql += "ORDER BY ps_name ASC";
			break;
		case DATE:
			sql += "ORDER BY ps_created_date ASC";
			break;
		default:
			sql += "ORDER BY ps_id DESC";
			break;
		}

		sql += " LIMIT " + at + ", " + total;

		return this.gets(sql);
	}

}
