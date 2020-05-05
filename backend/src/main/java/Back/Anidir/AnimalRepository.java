package Back.Anidir;


import Back.Anidir.Animal;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AnimalRepository extends JpaRepository<Animal, Long> {
  Optional<Animal> findById(Long id);
}
