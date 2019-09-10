package com.example.teste.controller.teste;


import com.example.teste.controller.teste.dto.RegisterPasswordDto;
import com.example.teste.services.dto.ResponseTesteDto;
import com.example.teste.services.exceptions.ServiceException;
import com.example.teste.services.teste.TesteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller dos servicos expostos para consumo do portal Cadastro -
 *
 * @author sergio pucci
 */
@RestController
@RequestMapping(value = "/services/teste")
public class TesteController {


    @Autowired
    TesteService testeService;


    @RequestMapping(value = "/summary/obtemReturnPassword", method = RequestMethod.POST)
    @ResponseBody
    public ResponseTesteDto obtemReturnPassword(@RequestBody RegisterPasswordDto filtro)
            throws ServiceException {

        return testeService.obtemReturnPassword(filtro);
    }

    @RequestMapping(value = "/summary/saveReturnPassword", method = RequestMethod.POST)
    @ResponseBody
    public ResponseTesteDto saveReturnPassword(@RequestBody RegisterPasswordDto filtro)
            throws ServiceException {

        return testeService.saveReturnPassword(filtro);
    }

    @RequestMapping(value = "/summary/obtemReturnPassword", method = RequestMethod.POST)
    @ResponseBody
    public ResponseTesteDto deleteReturnPassword(@RequestBody RegisterPasswordDto filtro)
            throws ServiceException {

        return testeService.deleteReturnPassword(filtro);
    }


}
