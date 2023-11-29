package jsoft.gui.product.pc;

import java.sql.*;

import jsoft.*;
import jsoft.gui.basic.*;
import jsoft.objects.*;

public class PCImpl extends BasicImpl implements PC {

	/**
	 * @param objectName
	 * @param cp
	 */
	public PCImpl(ConnectionPool cp) {
		super("PCObject", cp);
	}

	@Override
	public ResultSet getPC(int id) {
		String sql = "SELECT * FROM tblpc c ";
		sql += "LEFT JOIN tblpg g ON c.pc_pg_id=g.pg_id ";
		sql += "LEFT JOIN tblps s ON g.pg_ps_id=s.ps_id ";
		sql += "WHERE c.pc_id=? ";
		
		return this.get(sql, id);
	}

	@Override
	public ResultSet getPCs(PCObject similar, PCSort pcs, int at, byte total) {
		String sql = "SELECT * FROM tblpc c ";
		sql += "LEFT JOIN tblpg g ON c.pc_pg_id=g.pg_id ";
		sql += "LEFT JOIN tblps s ON g.pg_ps_id=s.ps_id ";

		switch (pcs) {
		case ID:
			sql += "ORDER BY pc_id DESC";
			break;
		case NAME:
			sql += "ORDER BY pc_name ASC";
			break;
		default:
			sql += "ORDER BY pc_id DESC";
			break;
		}

		sql += " LIMIT " + at + ", " + total;

		return this.gets(sql);
	}
	
}
