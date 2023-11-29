package com.evadeeva.eva.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleModel {
	private long article_id;
	private String title;
	private String content;
	private long user_id;
	private short category_id;
}
