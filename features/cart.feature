Feature: Add products to the shopping cart

  Scenario: A logged-in shopper adds a product to an empty cart
    Given the shopper is logged in
    * the shopper has an empty cart
    * an in-stock product is available
    When the shopper adds one unit of the product to the cart
    Then the cart should contain the selected product
    And the product quantity should be 1