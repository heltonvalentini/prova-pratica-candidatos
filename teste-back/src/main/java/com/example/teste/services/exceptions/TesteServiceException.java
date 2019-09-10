package com.example.teste.services.exceptions;

public class TesteServiceException extends ServiceException {

    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    public TesteServiceException() {

    }

    public TesteServiceException(String message) {
        super(message);
    }

    public TesteServiceException(String message, Throwable cause) {
        super(message, cause);
    }

    public TesteServiceException(Throwable cause) {
        super(cause);
    }

}
