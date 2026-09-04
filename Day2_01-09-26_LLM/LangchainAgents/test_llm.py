from llm_config import chat_model

response = chat_model.invoke(
    "generate 5 test case for an ecommerce login"
)

print("RESPONSE: ")
print(response)
print("\n CONTENT: ")
print(response.content)