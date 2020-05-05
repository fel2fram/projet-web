package Back.Anidir;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "animal")
public class Animal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true)

  public long id;
  @Column
  public String classif;
  @Column
  public String family;
  @Column
  public String species;

  // Constructors
  public Animal() {}

  public Animal( String classif, String family, String species) {

    this.classif = classif;
    this.family = family;
    this.species = species;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
      public long getId() {
      return id;
  }
  public void setId(long id) {
      this.id = id;
  }
  
  public String getName() { return classif; }
  public void setName(String classif) { this.classif = classif; }

  public String getPrice() { return family; }
  public void setPrice(String family) { this.family = family; }

  public String getImage() { return species; }
  public void setImage(String species) { this.species= species; }
}
