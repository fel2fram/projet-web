package Back.Anidir;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import Back.Anidir.Animal;
import Back.Anidir.AnimalRepository;

@RestController

@CrossOrigin


public class AnimalController {
  @Autowired
  AnimalRepository repAnimal;
  @RequestMapping(value = "/anidir", method = RequestMethod.GET)
  @ResponseBody
  public List<Animal> getAllAnimal() {

    return repAnimal.findAll();
  }
  public AnimalController(){

  }
  @RequestMapping(value = "/anidir/{id}", method = RequestMethod.GET)
  @ResponseBody
  public Animal getAnimalById(@PathVariable("id") Long id) {
    return repAnimal.findById(id).get();
  }
  @RequestMapping(value = "/anidir/{id}", method = RequestMethod.PUT)
  @ResponseBody
  public void modifyAnimalById(@PathVariable("id") Long id, @Valid @RequestBody Animal Animal) {
    Animal.setId(id);
    repAnimal.save(Animal);
  }

  @RequestMapping(value = "/anidir", method = RequestMethod.POST)
  @ResponseBody
  public Animal createAnimal(@Valid @RequestBody Animal Animal) {
	  repAnimal.save(Animal);
    return Animal;
  }

  @RequestMapping(value = "/anidir/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public void deleteAnimal(@PathVariable Long id) {
	  repAnimal.delete(repAnimal.findById(id).get());
  }
}
