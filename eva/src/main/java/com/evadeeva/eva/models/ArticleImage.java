package com.evadeeva.eva.models;

import java.io.Serializable;

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
@Table(name="article_image")
public class ArticleImage implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int article_image_id;
	
	@Column(name = "url")
	private String url;
	
	@ManyToOne
	@JoinColumn(name = "article_id")
	Article article;
}
