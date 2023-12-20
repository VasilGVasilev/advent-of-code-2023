1. open for extension, closed for modification -> more declarative/procedural less imperative, see day-1 Part-1, functions are reusable and can be modified via decorators.

2. Regex consumes the matched strings, thus, searching for 'two' and 'one' in 'twone' will find two and leave 'ne' missing 'one'. just add ?= (?=(groupYouAreSearching))

3. Python has an .open() built-in function that reads a stream, you initiate it with 'type file.txt | python file.py' in windows

4. The else keyword in a for loop in Python specifies a block of code to be executed when the loop is finished:

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

9. .count() in Python comes in handy very we want to know how often does each element appear in a list, MIND that in day-7 we are looking at each hand's cards so list comprehension again:

```sh
points = [1, 4, 2, 9, 7, 8, 9, 3, 1]

x = points.count(9)
print(x) 
# //2
```

10. sort in Python is pretty smart - The sort() function sorts the tuples based on the first element of the tuple (the number), and in case of a tie, it sorts based on the second element of the tuple (the list):

```sh
data = [
   (1, ['3', '2', 'A', '3', 'D']),
   (3, ['A', '5', '5', 'B', '5']),
   (2, ['D', 'D', '6', '7', '7']),
   (2, ['D', 'A', 'B', 'B', 'A']),
   (3, ['C', 'C', 'C', 'B', 'E'])
]

# Sort the list of tuples
data.sort()

print(data)
```
Output will be:
[
   (1, ['3', '2', 'A', '3', 'D']),
   (2, ['D', 'D', '6', '7', '7']),
   (2, ['D', 'A', 'B', 'B', 'A']),
   (3, ['A', '5', '5', 'B', '5']),
   (3, ['C', 'C', 'C', 'B', 'E'])
]

11. all() in Python - The all() function returns True if all items in an iterable are true, otherwise it returns False.

12. Generator expression in Python - high perforamce and memory efficient way of iterating, instead of regular array where you need the use of variables to check if a values is specific, you use the generator:

instead of:
```sh
array = [0, 0, 0, 0, 0]
all_zero = True
for x in array:
   if x != 0:
       all_zero = False
       break
print(all_zero) # Outputs: True
```

do this:

```sh
array = [0, 0, 0, 0, 0]
print(all(x == 0 for x in array)) # Outputs: True
```

13. zip() in python - returns array by pairing their element by their indices:

```sh
zip([1, 2, 3], [4, 5, 6])

# [1, 4]
# [2, 5]
# [3, 6]
```