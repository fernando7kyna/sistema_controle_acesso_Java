package sistema.de.acesso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.de.acesso.model.Acesso;
import sistema.de.acesso.repository.AcessoRepository;

@RestController
@RequestMapping("/api/acessos")
@CrossOrigin(origins = "http://localhost:3000")
public class AcessoController {

    @Autowired
    private AcessoRepository acessoRepository;

    @PostMapping
    public ResponseEntity<Acesso> cadastrarAcesso(@RequestBody Acesso acesso) {
        Acesso novoAcesso = acessoRepository.save(acesso);
        return ResponseEntity.ok(novoAcesso);
    }

    @GetMapping
    public ResponseEntity<?> listarAcessos() {
        return ResponseEntity.ok(acessoRepository.findAll());
    }
}