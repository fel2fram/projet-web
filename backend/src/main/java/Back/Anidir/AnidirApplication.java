package Back.Anidir;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.spotify.docker.client.shaded.javax.annotation.PostConstruct;

import Back.Anidir.Animal;
import Back.Anidir.AnimalRepository;

@SpringBootApplication

public class AnidirApplication {
@Autowired

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(AnidirApplication.class, args);
	}


}
