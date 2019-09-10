package com.example.teste.services.dto;

import java.util.List;

public class ResponseTesteDto {

    private boolean success;
	private List<?> value;
    private String message;
    
    public List<?> getValue() {
		return value;
	}

	public void setValue(List<?> value) {
		this.value = value;
	}

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean sucess) {
        this.success = sucess;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
