package com.example.teste.repository.teste;

import com.example.teste.controller.teste.dto.RegisterPasswordDto;
import com.example.teste.model.RegisterPassword;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Classe responsável pelo acesso aos dados da tabela REGISTER_PASSWORD.
 *
 *
 */
@RepositoryRestResource(collectionResourceRel = "registerPassword", path = "registerPassword")
public interface TesteRepository extends PagingAndSortingRepository<RegisterPassword, Long> {


    @Query(value = "SELECT b FROM RegisterPassword b where b.url= :url and b.usuario = :usuario ")
    List<RegisterPasswordDto> obtemReturnPassword(@Param("url")String url, @Param("usuario")String usuario);

    @Query(value = "INSERT INTO RegisterPassword (URL, USUARIO,SENHA) VALUES(:url ,:usuario, :senha) ")
    void saveRegister(@Param("url")String url, @Param("usuario")String usuario,@Param("senha") String senha);

    @Query(value = "DELETE FROM RegisterPassword b where b.url = :url and b.usuario = :usuario AND  b.senha = :senha) ")
    void deleteRegister(@Param("url")String url, @Param("usuario")String usuario,@Param("senha") String senha);

}
