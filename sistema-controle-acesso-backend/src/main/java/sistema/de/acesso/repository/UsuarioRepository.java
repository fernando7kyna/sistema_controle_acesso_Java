package sistema.de.acesso.repository;

import sistema.de.acesso.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {} 