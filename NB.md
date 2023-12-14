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


5. Unlike some languages like JavaScript, where function declarations are hoisted to the top of their scope, Python requires functions to be defined before they are called.

```sh
# This will raise an error
baz()

def baz():
    print("Hello from baz!")
```

6. lambda in Python

```sh
lambda arguments : expression

x = lambda a : a + 10
print(x(5))

```

7. in day-7 we have a sort which accepts a key args that is a function and I choose this function to be a lambda and this lambda goes through each play by applying the strength custom function which accepts the play[0] arg

```sh
plays.sort(key = lambda play: strength(play[0])])
```

8. List comprehension:

```sh
letter_map = {'a': 'A', 'b': 'B', 'c': 'C'}
hand = ['a', 'b', 'c', 'd']

# Using a for loop
result = []
for char in hand:
   result.append(letter_map.get(char, char))

print(result) # Output: ['A', 'B', 'C', 'd']

# Using a list comprehension
result = [letter_map.get(char, char) for char in hand]

print(result) # Output: ['A', 'B', 'C', 'd']

```
As you can see, both the for loop and the list comprehension produce the same result. However, the list comprehension is more concise and considered more "Pythonic" 2, 