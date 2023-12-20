lines = open(0).read().split("\n")

def extrapolate(array):
    if all(x == 0 for x in array):
        return 0
    # otherise recursion
    deltas = [y - x for x, y in zip(array, array[1:])] # zipping like this makes it possible to have all consecutive overlapping pairs
    diff = extrapolate(deltas)
    return array[-1] + diff

total = 0

for line in lines:
    nums = list(map(int, line.split()))
    total += extrapolate(nums)

print(total)