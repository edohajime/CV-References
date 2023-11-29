package com.evadeeva.eva.models;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("serial")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="article")
public class Article implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long article_id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="content")
	private String content;
	
	@Column(name = "created_date")
	private String createdDate;
	
	@Column(name = "modified_date")
	private String modifiedDate;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	User user;
	
	@ManyToOne
	@JoinColumn(name="category_id")
	Category category;
	
	//@JsonIgnore
	//@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "article")
	//List<ArticleComment> listComment;
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "article")
	List<ArticleImage> listImage;
}
