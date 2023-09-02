Feature: Kasir Aja Add New Category

  Scenario Outline: As a user, I want to add new category

    Given User open kasirAja website
    When User login with <email> and <password>
    When User on dashboard page and wants to add category
    When User click Kategori menu
    When User click Tambah button
    When User input <nama> to nama field
    When User click Simpan button
    Then User should see a message saying <message>
  
  Examples:
      | email               | password  | nama          | message                           |
      | sanber_47@gmail.com | sanber123 | Test kategori | item ditambahkan                  |

  Scenario Outline: As a user, I want to add new category with empty name

    Given User open kasirAja website
    When User on dashboard page and wants to add category
    When User click Kategori menu
    When User click Tambah button
    When User input <nama> to nama field
    When User click Simpan button
    Then User should see a message saying <message>

    Examples:
      | nama        | message                           |
      |             | "name" is not allowed to be empty |
