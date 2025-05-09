package com.controleacesso.controller;

import sistema.de.acesso.model.Acesso;
import sistema.de.acesso.repository.AcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/acessos")
@CrossOrigin(origins = "http://localhost:3000")
public class AcessoController {

    @Autowired
    private AcessoRepository acessoRepository;

    @PostMapping
    public ResponseEntity<Acesso> criar(@RequestBody Acesso acesso) {
        Acesso novoAcesso = acessoRepository.save(acesso);
        return ResponseEntity.ok(novoAcesso);
    }

    @GetMapping
    public ResponseEntity<List<Acesso>> listar() {
        List<Acesso> acessos = acessoRepository.findAll();
        return ResponseEntity.ok(acessos);
    }
}