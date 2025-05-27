from transformers import T5ForConditionalGeneration, T5Tokenizer
import torch

def remove_plagiarism(text):
    # Load model and tokenizer
    tokenizer = T5Tokenizer.from_pretrained("t5-base")
    model = T5ForConditionalGeneration.from_pretrained("t5-base")
    model.eval()

    # Prepare the input
    input_text = "paraphrase: " + text + " </s>"
    input_ids = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)

    # Generate paraphrased text
    with torch.no_grad():
        outputs = model.generate(
            input_ids=input_ids,
            max_length=100,
            num_beams=5,
            num_return_sequences=1,
            no_repeat_ngram_size=2,
            early_stopping=True
        )

    # Check and decode
    if outputs and len(outputs) > 0:
        return tokenizer.decode(outputs[0], skip_special_tokens=True)
    else:
        return "No paraphrased output generated."

# Test case
if __name__ == "__main__":
    original_text = "Artificial intelligence is transforming the way we live and work, offering both opportunities and challenges."
    rephrased_text = remove_plagiarism(original_text)
    print("Original:", original_text)
    print("Paraphrased:", rephrased_text)
