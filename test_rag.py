from query_data import query_rag

def test_response():
    assert query_rag("How much total money does a player start with in Monopoly?")
