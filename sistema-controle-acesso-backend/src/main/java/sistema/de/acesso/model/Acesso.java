package sistema.de.acesso.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
public class Acesso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCompleto;
    private String documento;
    private String telefone;
    private String email;
    private String tipoAcesso;
    private LocalDate dataAcesso;
    private LocalTime horaAcesso;
}