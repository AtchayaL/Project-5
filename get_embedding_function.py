from langchain_community.embeddings.ollama import OllamaEmbeddings

def get_embedding_function():
    # Use Ollama embedding model for this project
    embeddings = OllamaEmbeddings(model="nomic-embed-text")
    return embeddings
