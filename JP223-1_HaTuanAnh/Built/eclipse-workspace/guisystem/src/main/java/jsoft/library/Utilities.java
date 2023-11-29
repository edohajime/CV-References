package jsoft.library;

import net.htmlparser.jericho.*;
import javax.servlet.*;

public class Utilities {

	/**
	 * Phương thức tách thông tin tên tác giả từ notes của các đối tượng <br>
	 * @param notes
	 * @param index
	 * @return
	 */
	public static String getInfo(String notes, byte index) {
		String tmp = "";
		if (notes != null && !notes.equalsIgnoreCase("")) {
			String[] note_name = notes.split("###");

			if (note_name != null && note_name.length > 0 && index < note_name.length) {
				tmp = note_name[index];
			}
		}

		return tmp;
	}
	
	public static String encodeToHTML(String uni) {
		return CharacterReference.encode(uni);
	}
	
	public static String decodeFromHTML(String html) {
		return CharacterReference.decode(html);
	}
	
	public static int getIntParam(ServletRequest request, String name) {
		int value = 0;
		
		String str_value = request.getParameter(name);
		if(str_value != null && !str_value.equalsIgnoreCase("")) {
			value = Integer.parseInt(str_value);
		}
		
		return value;
	}
	
	public static short getShortParam(ServletRequest request, String name) {
		short value = 0;
		
		String str_value = request.getParameter(name);
		if(str_value != null && !str_value.equalsIgnoreCase("")) {
			value = Short.parseShort(str_value);
		}
		
		return value;
	}
	
	public static long getLongParam(ServletRequest request, String name) {
		long value = 0;
		
		String str_value = request.getParameter(name);
		if(str_value != null && !str_value.equalsIgnoreCase("")) {
			value = Long.parseLong(str_value);
		}
		
		return value;
	}

}
