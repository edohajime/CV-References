package jsoft.gui.product.pc;

import jsoft.*;
import jsoft.objects.*;

public class PCControl {
	private PCModel pcm;

	public PCControl(ConnectionPool cp) {
		this.pcm = new PCModel(cp);
	}

	protected void finalize() throws Throwable {
		this.pcm = null;
	}
	

	public ConnectionPool getCP() {
		return this.pcm.getCP();
	}
	
	public void releaseConnection() {
		this.pcm.releaseConnection();
	}
	

	// ---------------------------------------------
	public PCObject getPCObject(int id) {
		return this.pcm.getPCObject(id);
	}

	// ---------------------------------------------

	

	
}
