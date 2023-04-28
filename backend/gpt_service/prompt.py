_SECTIONS = [
    "Description of the problem"
    "Solution to the problem and what was being done"
]

PRE_PROMPT = "The following text is an input from a user who talks about things he has done. \
    He is talking in a very informal way. Transform this text into a more formal text that can be used for a report. \
    The text should not be written in the first person. Additionally, the text should be structured in specific sections.  \
    The sections are the following {}. For each section answer separately \
The text is the following:".format(_SECTIONS)
