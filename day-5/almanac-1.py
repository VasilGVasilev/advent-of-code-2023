seeds, *blocks = open(0).read().split("\n\n")

# turn str of digits into list(array) of numbers 
seeds = list(map(int, seeds.split(':')[1].split()))

for block in blocks:
    # store ranges
    ranges = []
    # remove the title line of each block
    for line in block.splitlines()[1:]:
        # take each of the three nums on line
        a, b, c = map(int, line.split())
        ranges.append((a, b, c))
        
    print(ranges)
