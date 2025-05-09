package sistema.de.acesso;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("sistema.de.acesso")
@EntityScan("sistema.de.acesso.model")
@EnableJpaRepositories("sistema.de.acesso.repository")
public class SistemaControleAcessoBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(SistemaControleAcessoBackendApplication.class, args);
    }
}