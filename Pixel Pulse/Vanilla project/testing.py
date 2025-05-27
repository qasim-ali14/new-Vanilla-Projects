from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time


service = Service(r"E:\Drivers\chromedriver.exe")


driver = webdriver.Chrome(service=service)

driver.get("https://www.google.com")

search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium WebDriver")
search_box.send_keys(Keys.RETURN)

time.sleep(2)
print("Page title is:", driver.title)

driver.quit()
