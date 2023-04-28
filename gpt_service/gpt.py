import openai
import os

from prompt import PRE_PROMPT

EXAMPLE_PROMT = """Firstly, I inspected the kitchen sink that was clogged. I removed the P-trap and cleaned it thoroughly, removing food debris and grease buildup. I then used a drain snake to clear any remaining blockage further down the pipe. After reassembling the P-trap, I tested the sink to ensure that the water was draining smoothly and quickly.
Next, I addressed the leaky faucet in the bathroom. I shut off the water supply and disassembled the faucet to identify the issue. I found that the cartridge was worn out, so I replaced it with a new one. I also replaced the O-rings and seals to prevent future leaks. Once I reassembled the faucet, I turned the water supply back on and tested it for any signs of leaks.
I then moved on to the toilet that was constantly running. I opened the tank and found that the flapper was not sealing properly, causing water to leak into the bowl. I replaced the flapper and adjusted the chain length to ensure a proper seal. I also inspected the fill valve for any malfunctions, but it seemed to be working correctly. After making the necessary adjustments, I tested the toilet by flushing it multiple times to confirm that it was no longer running continuously.
Lastly, I inspected the water heater for any issues. I found that the temperature and pressure relief valve was leaking slightly. I replaced the valve and tested the water heater to ensure it was functioning safely and efficiently."""


# Set up the OpenAI API client
openai.api_key = "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"

def talk_to_gpt(prompt):
    text = PRE_PROMPT + prompt

    # Prepare the API request payload
    payload = {
        "engine": "text-davinci-002",  # GPT-3.5-turbo
        "prompt": f"{text}\n",
        "max_tokens": 150,
        "n": 1,
        "stop": None,
        "temperature": 0.5,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
    }

    # Send the request to the API
    response = openai.Completion.create(**payload)

    # Extract and return the generated text
    return response.choices[0].text.strip()

if __name__ == "__main__":
    print(talk_to_gpt(EXAMPLE_PROMT))
