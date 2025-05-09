package sistema.de.acesso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sistema.de.acesso.model.Acesso;

public interface AcessoRepository extends JpaRepository<Acesso, Long> {
}