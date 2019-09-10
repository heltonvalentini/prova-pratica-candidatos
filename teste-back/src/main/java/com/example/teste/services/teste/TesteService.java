package com.example.teste.services.teste;


import com.example.teste.controller.teste.dto.RegisterPasswordDto;
import com.example.teste.services.dto.ResponseTesteDto;
import com.example.teste.services.exceptions.TesteServiceException;

/**
 * @author sergio
 */
public interface TesteService {

    ResponseTesteDto obtemReturnPassword(RegisterPasswordDto filtroHistoricTransactionDto) throws TesteServiceException;

    ResponseTesteDto saveReturnPassword(RegisterPasswordDto filtroHistoricTransactionDto) throws TesteServiceException;

    ResponseTesteDto deleteReturnPassword(RegisterPasswordDto filtroHistoricTransactionDto) throws TesteServiceException;


}
