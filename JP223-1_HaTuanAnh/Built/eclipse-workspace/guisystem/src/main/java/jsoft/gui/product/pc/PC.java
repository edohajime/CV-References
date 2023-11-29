package jsoft.gui.product.pc;

import java.sql.ResultSet;

import jsoft.*;
import jsoft.objects.*;

public interface PC extends ShareControl {
	public ResultSet getPC(int id);

	public ResultSet getPCs(PCObject similar, PCSort pcs, int at, byte total);
}
