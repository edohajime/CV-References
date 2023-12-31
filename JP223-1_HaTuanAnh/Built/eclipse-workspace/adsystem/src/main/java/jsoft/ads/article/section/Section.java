package jsoft.ads.article.section;

import java.sql.*;
import jsoft.objects.*;
import jsoft.*;
public interface Section extends ShareControl{
	public boolean addSection(SectionObject item);
	public boolean editSection(SectionObject item);
	public boolean delSection(SectionObject item);
	
	public ResultSet getSection(short id);
	public ResultSet getSections(SectionObject similar, int at, byte total);
	public ResultSet getSections(SectionObject similar,SectionSort ss, int at, byte total);
}
