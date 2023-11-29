package jsoft.library;

import net.htmlparser.jericho.*;
import javax.servlet.*;

public class Utilities {
	
	public static String getInfo(String notes, byte index)
	{
		String tmp="";
		if(notes!=null&&!notes.equalsIgnoreCase("")) {
			String[] note_name= notes.split("###");
			
			if(note_name!=null && note_name.length>0 && index < note_name.length) {
				tmp = note_name[index];
			}
		}
		
		return tmp;
	}
	
	public static String encodeToHtml(String uni) {
		return CharacterReference.encode(uni);
	}
	
	public static String decodeFromHtml(String html) {
		return CharacterReference.decode(html);
	}
	
	public static int getIntParam(ServletRequest request, String name) {
		int value = 0;
		String str_value = request.getParameter(name);
		if(str_value!=null &&!str_value.equalsIgnoreCase("")) {
			value = Integer.parseInt(str_value);
		}
		
		return value;
	}
	public static byte getByteParam(ServletRequest request, String name) {
		byte value = 0;
		String str_value = request.getParameter(name);
		if(str_value!=null &&!str_value.equalsIgnoreCase("")) {
			value = Byte.parseByte(str_value);
		}
		
		return value;
	}
	
}
