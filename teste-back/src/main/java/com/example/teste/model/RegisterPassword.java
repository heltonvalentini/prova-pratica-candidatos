package com.example.teste.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name = "REGISTER_PASSWORD")
@SequenceGenerator(allocationSize=1, name = "SEQ_REGISTER_PASSWORD", sequenceName = "SEQ_REGISTER_PASSWORD")
public class RegisterPassword implements java.io.Serializable {

	/**
	 *
	 */
	private static final long serialVersionUID = -5553001726936911691L;
	private Long id;
	private String url;
	private String usuario;
	private String senha;

	public RegisterPassword() {
	}

	public RegisterPassword(Long id) {
		this.id = id;
	}

	public RegisterPassword(Long id, String url, String usuario, String senha) {
		this.id = id;
		this.url = url;
		this.usuario = usuario;
		this.senha = senha;
	}

	@Id
	@Column(name = "ID")
	@GeneratedValue(generator="SEQ_REGISTER_PASSWORD", strategy=GenerationType.AUTO)
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "URL", nullable = false, length = 100)
	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Column(name = "USUARIO", nullable = false, length = 50)
	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	@Column(name = "SENHA", nullable = false, length = 50)
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}

