# # Feature: Login Functionality

# # Scenario: Successful login with valid credentials
# #     Given I am on the login page
# #     When I enter valid username and password
# #     And I click on the login button
# #     Then I should be redirected to the dashboard page

# # Scenario: Unsuccessful login with invalid credentials
# #     Given I am on the login page
# #     When I enter invalid username and password
# #     And I click on the login button
# #     Then I should see an error message indicating invalid credentials






# @smoke @regression
# Feature: Login Functionality

# Scenario: Successful login with valid credentials
#     Given I am on the login page
#     When I enter valid username and password
#     And I click on the login button
#     Then I should be redirected to the dashboard page


# Scenario: Unsuccessful login with invalid credentials
#     Given I am on the login page
#     When I enter invalid username and password
#     And I click on the login button
#     Then I should see an error message indicating invalid credentials


# @smoke
# Scenario Outline: Verify login with multiple users

#     Given I am on the login page
#     When User enters "<username>" and "<password>"
#     # And I click on the login button
#     # Then User should view the login result
#     Then I should be redirected to the dashboard page

# Examples:
# | username                | password      |
# | standard_user           | secret_sauce  |
# | problem_user            | secret_sauce  |
# | performance_glitch_user | secret_sauce  |
# | error_user              | secret_sauce  |
# | visual_user             | secret_sauce  |
# | locked_out_user         | secret_sauce  |




@smoke @regression
Feature: Login Functionality

Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    And I click on the login button
    Then User should view the login result


Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter invalid username and password
    And I click on the login button
    Then I should see an error message indicating invalid credentials


@smoke
Scenario Outline: Verify login with multiple users

    Given I am on the login page
    When User enters "<username>" and "<password>"
    And I click on the login button
    Then User should view the login result

Examples:
| username                | password     |
| standard_user           | secret_sauce |
| problem_user            | secret_sauce |
| performance_glitch_user | secret_sauce |
| error_user              | secret_sauce |
| visual_user             | secret_sauce |
| locked_out_user         | secret_sauce |