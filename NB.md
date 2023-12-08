1. open for extension, closed for modification -> more declarative/procedural less imperative, see day-1 Part-1, functions are reusable and can be modified via decorators.

2. Regex consumes the matched strings, thus, searching for 'two' and 'one' in 'twone' will find two and leave 'ne' missing 'one'. just add ?= (?=(groupYouAreSearching))

3. Python has an .open() built-in function that reads a stream, you initiate it with 'type file.txt | python file.py' in windows

4. The else keyword in a for loop specifies a block of code to be executed when the loop is finished:

```sh
for x in range(6):
  print(x)
else:
  print("Finally finished!") 
```