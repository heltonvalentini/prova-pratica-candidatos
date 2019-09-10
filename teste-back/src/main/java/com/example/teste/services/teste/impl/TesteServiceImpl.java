package com.example.teste.services.teste.impl;

import com.example.teste.controller.teste.dto.RegisterPasswordDto;
import com.example.teste.repository.teste.TesteRepository;
import com.example.teste.services.dto.ResponseTesteDto;
import com.example.teste.services.teste.TesteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class TesteServiceImpl implements TesteService {

    @Autowired
    TesteRepository testeRepository;

    @Override
    public ResponseTesteDto obtemReturnPassword(RegisterPasswordDto filtroRegisterPasswordDtDto) {

        ResponseTesteDto response = new ResponseTesteDto();
        List<RegisterPasswordDto> retornoHistorico;

        try {
            retornoHistorico = testeRepository.obtemReturnPassword(filtroRegisterPasswordDtDto.getUrl(), filtroRegisterPasswordDtDto.getUsuario());
        } catch (Exception e) {
            response.setSuccess(false);
            response.setMessage("Erro " + e.getMessage());
            response.setValue(null);
            return response;
        }

        if (retornoHistorico != null && retornoHistorico.size() > 0) {
            response.setSuccess(true);
            response.setMessage("senhas listadas com sucesso.");
            response.setValue(retornoHistorico);
            return response;
        } else {
            response.setSuccess(false);
            response.setMessage("Não existe dados para Exibição");
            return response;
        }
    }

    @Override
    public ResponseTesteDto saveReturnPassword(RegisterPasswordDto filtroHistoricTransactionDto) {

        ResponseTesteDto response = new ResponseTesteDto();

        try {
            testeRepository.saveRegister(filtroHistoricTransactionDto.getUrl(), filtroHistoricTransactionDto.getUsuario(), filtroHistoricTransactionDto.getSenha());;
            response.setSuccess(true);
            response.setMessage("Historico salvo com sucesso.");
            return response;
        } catch (Exception e) {
            response.setSuccess(false);
            response.setMessage("Erro " + e.getMessage());
            response.setValue(null);
            return response;
        }
    }

    @Override
    public ResponseTesteDto deleteReturnPassword(RegisterPasswordDto filtroHistoricTransactionDto) {

        ResponseTesteDto response = new ResponseTesteDto();

        try {
            testeRepository.deleteRegister(filtroHistoricTransactionDto.getUrl(), filtroHistoricTransactionDto.getUsuario(), filtroHistoricTransactionDto.getSenha());
            response.setSuccess(true);
            response.setMessage("Historico deletado com sucesso.");
            return response;
        } catch (Exception e) {
            response.setSuccess(false);
            response.setMessage("Erro " + e.getMessage());
            response.setValue(null);
            return response;
        }


    }

}

